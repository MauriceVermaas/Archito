// tests/regressie.js — volledige regressiecheck BOVEN OP tests/test.js.
// Controleert de dingen die de gewone suite niet dekt:
//   1. Syntax van alle JS-bestanden en van de inline scripts in de HTML-bestanden
//   2. Bestaan alle bestanden waar de code/data naar verwijst? (ui/, tegels/, mascottes/, icons/)
//   3. Zitten alle service-worker-precache-bestanden er echt?
//   4. Knop→functie-dekking in ÁLLE html-bestanden (niet alleen index.html)
//   5. Contentintegriteit: geldige niveaus 1-6, geen duplicaat-plaatjes per niveau (memory),
//      spelling-delen == woord, flits-lookalikes, lezen/denken 'goed' uniek in opties
//   6. Versie-consistentie (version.js ↔ index.html ↔ sw.js) en manifest
// Draaien:  node tests/regressie.js
"use strict";
const fs = require('fs'), path = require('path'), cp = require('child_process');
const ROOT = path.join(__dirname, '..');
const R = f => require(path.join(ROOT, 'data', f));

let fouten = 0, waarschuwingen = 0, checks = 0;
function ok(voorwaarde, bericht){
  checks++;
  if(!voorwaarde){ fouten++; console.log('  ✗ ' + bericht); }
}
function waarschuw(voorwaarde, bericht){
  checks++;
  if(!voorwaarde){ waarschuwingen++; console.log('  ! ' + bericht); }
}
function sectie(t){ console.log('\n▶ ' + t); }

/* ---------------------------------------------------------------- 1. syntax */
sectie('1. Syntax van alle scripts');
const jsBestanden = fs.readdirSync(ROOT).filter(f => f.endsWith('.js'))
  .concat(fs.readdirSync(path.join(ROOT,'data')).map(f => 'data/'+f).filter(f => f.endsWith('.js')))
  .concat(['tests/test.js','tests/harness.js']);
jsBestanden.forEach(f => {
  try { cp.execSync('node --check "' + path.join(ROOT,f) + '"', {stdio:'pipe'}); }
  catch(e){ ok(false, 'syntaxfout in ' + f); }
});
console.log('  ' + jsBestanden.length + ' JS-bestanden gecontroleerd');

const htmlBestanden = ['index.html','springspel.html','beheer.html','installeren.html'];
htmlBestanden.forEach(f => {
  const h = fs.readFileSync(path.join(ROOT,f),'utf8');
  const scripts = h.match(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g) || [];
  scripts.forEach((blok,i) => {
    const code = blok.replace(/^<script[^>]*>/,'').replace(/<\/script>$/,'');
    if(!code.trim()) return;
    const tmp = path.join(require('os').tmpdir(), 'regr-'+f.replace(/\W/g,'')+i+'.js');
    fs.writeFileSync(tmp, code);
    try { cp.execSync('node --check "' + tmp + '"', {stdio:'pipe'}); }
    catch(e){ ok(false, 'syntaxfout in inline script #'+(i+1)+' van ' + f); }
    fs.unlinkSync(tmp);
  });
  console.log('  ' + f + ': ' + scripts.length + ' inline script(s)');
});

/* ------------------------------------------------- 2. verwijzingen naar bestanden */
sectie('2. Bestaan alle afbeeldingen waar naar verwezen wordt?');
const bestaat = p => fs.existsSync(path.join(ROOT, p.split('?')[0]));
const alleHtml = htmlBestanden.map(f => fs.readFileSync(path.join(ROOT,f),'utf8')).join('\n');
const paden = new Set();
(alleHtml.match(/(?:ui|icons|mascottes|tegels)\/[A-Za-z0-9._-]+\.(?:png|svg|webp)/g) || []).forEach(p => paden.add(p));
// ook paden uit de databestanden (mascottes/afbeelding, memory/talen afb)
[R('mascottes.js')].forEach(m => Object.values(m).forEach(x => { if(x.afbeelding) paden.add(x.afbeelding); }));
['memory.js','talen.js'].forEach(f => R(f).forEach(x => { if(x.afb) paden.add(x.afb); }));
R('stickers.js').forEach(s => { if(s.afb) paden.add(s.afb); });
let mist = [];
paden.forEach(p => { if(!bestaat(p)) mist.push(p); });
ok(mist.length === 0, 'ontbrekende afbeeldingen (' + mist.length + '): ' + mist.slice(0,12).join(', '));
console.log('  ' + paden.size + ' unieke afbeeldingspaden gecontroleerd');

/* de content-illustraties die contentBeeld() opzoekt: tegels/tegel-<woord>.png (emoji is terugval) */
const zonderTegel = [];
R('memory.js').forEach(m => {
  const naam = String(m.w||'').toLowerCase().replace(/[^a-z]/g,'');
  if(naam && !bestaat('tegels/tegel-'+naam+'.png')) zonderTegel.push(m.w);
});
waarschuw(zonderTegel.length === 0,
  zonderTegel.length + ' memory-woorden hebben geen tekening (emoji-terugval wordt gebruikt): ' + zonderTegel.slice(0,10).join(', '));

/* --------------------------------------------------- 3. service-worker precache */
sectie('3. Service worker: precache-bestanden bestaan');
const sw = fs.readFileSync(path.join(ROOT,'sw.js'),'utf8');
const lijst = (sw.match(/"\.\/[^"]+"/g) || []).map(s => s.replace(/"/g,'').replace(/^\.\//,''));
let swMist = lijst.filter(p => p && p !== '' && !bestaat(p));
ok(swMist.length === 0, 'sw.js verwijst naar niet-bestaande bestanden: ' + swMist.join(', '));
console.log('  ' + lijst.length + ' precache-paden gecontroleerd');
ok(/importScripts\(\s*["']version\.js["']\s*\)/.test(sw), 'sw.js laadt version.js (één versie-bron)');

/* ------------------------------------------- 4. knop→functie-dekking in alle html */
sectie('4. Knop→functie-dekking in alle HTML-bestanden');
htmlBestanden.forEach(f => {
  const h = fs.readFileSync(path.join(ROOT,f),'utf8');
  const re = /on(?:click|change|input)="([a-zA-Z_$][\w$]*)\s*\(/g;
  const gezien = new Set(); let m; const ontbreekt = [];
  while((m = re.exec(h))){
    const naam = m[1];
    if(gezien.has(naam)) continue;
    gezien.add(naam);
    // functie kan als 'function naam(' of 'var naam = function' gedefinieerd zijn
    const gedefinieerd = new RegExp('function\\s+'+naam+'\\s*\\(').test(h)
      || new RegExp('(?:var|let|const)\\s+'+naam+'\\s*=').test(h);
    if(!gedefinieerd) ontbreekt.push(naam);
  }
  // index.html wordt al door test.js gedekt via de sandbox; hier vangen we de rest
  ok(ontbreekt.length === 0, f + ': geen functie voor ' + ontbreekt.join(', '));
  console.log('  ' + f + ': ' + gezien.size + ' handlers');
});

/* ------------------------------------------------------ 5. contentintegriteit */
sectie('5. Contentintegriteit');
const SOMMEN = R('sommen.js'), WOORDEN = R('woorden.js'), FLITS = R('flitswoorden.js');
const MEM = R('memory.js'), TALEN = R('talen.js'), DENKEN = R('denken.js');
const BEELD = R('beelddenken.js'), LEZEN = R('lezen.js'), BEELDLAB = R('beeldlab.js');
const KLANK = R('klankletter.js'), REN = R('renlezer.js');

/* geldige niveaus 1..6 in élk databestand */
[['sommen',SOMMEN],['woorden',WOORDEN],['flitswoorden',FLITS],['memory',MEM],['talen',TALEN],
 ['denken',DENKEN],['beelddenken',BEELD],['lezen',LEZEN],['klankletter',KLANK],['renlezer',REN]
].forEach(([naam,arr]) => {
  const fout = arr.filter(x => !(Number(x.niveau) >= 1 && Number(x.niveau) <= 6));
  ok(fout.length === 0, naam + ': ' + fout.length + ' items met ongeldig niveau (moet 1..6)');
});
['sorteer','nabouw','geheugen','zoek'].forEach(k => {
  const fout = BEELDLAB[k].filter(x => !(Number(x.niveau) >= 1 && Number(x.niveau) <= 6));
  ok(fout.length === 0, 'beeldlab.'+k+': ongeldig niveau bij ' + fout.length + ' items');
});

/* Eén plaatje moet naar één woord verwijzen — CUMULATIEF getoetst, want de app biedt
   alle lagere niveaus als herhaling aan (niveau <= niveau van het kind). Een groep-7-kind
   ziet dus ook de groep-3-woorden; twee woorden met hetzelfde plaatje maakt memory
   onoplosbaar en bij Talen het antwoord ambigu. */
function dubbelePlaatjes(arr, woordVeld){
  const rapport = [];
  for(let n = 1; n <= 6; n++){
    const per = {};
    arr.filter(x => Number(x.niveau) <= n).forEach(x => { (per[x.plaatje] = per[x.plaatje] || []).push(x[woordVeld]); });
    const dubbel = Object.entries(per).filter(([,ws]) => new Set(ws).size > 1);
    if(dubbel.length) rapport.push({ groep:n+2, dubbel });
  }
  return rapport;
}
[['memory', MEM, 'w'], ['talen', TALEN, 'nl']].forEach(([naam, arr, veld]) => {
  const r = dubbelePlaatjes(arr, veld);
  // alleen de hoogste groep rapporteren: die bevat alles van de lagere groepen
  const laatste = r[r.length - 1];
  ok(r.length === 0, naam + ': zelfde plaatje bij meerdere woorden (zichtbaar t/m groep '
    + (laatste ? laatste.groep : '') + ') → '
    + (laatste ? laatste.dubbel.map(([e,ws]) => e+' = '+[...new Set(ws)].join('/')).join(' | ') : ''));
});
/* spelling: klankdelen samengevoegd = het woord; instinker zit niet in het woord */
const delenFout = WOORDEN.filter(w => (w.delen||[]).join('') !== w.w);
ok(delenFout.length === 0, 'spelling: delen ≠ woord bij ' + delenFout.map(w=>w.w).slice(0,8).join(', '));
const instFout = WOORDEN.filter(w => (w.extra||[]).some(e => w.w.indexOf(e) >= 0));
ok(instFout.length === 0, 'spelling: instinker zit in het woord bij ' + instFout.map(w=>w.w).slice(0,8).join(', '));
/* flitswoorden: precies 2 lookalikes die het doelwoord niet bevatten */
const flitsFout = FLITS.filter(f => (f.alt||[]).length !== 2 || f.alt.some(a => a === f.w || a.indexOf(f.w) >= 0));
ok(flitsFout.length === 0, 'flitswoorden: ongeldige lookalikes bij ' + flitsFout.map(f=>f.w).slice(0,8).join(', '));
/* denken + lezen: 'goed' staat uniek in opties en er is uitleg */
const denkFout = DENKEN.filter(d => (d.opties||[]).filter(o => o === d.goed).length !== 1 || !d.uitleg);
ok(denkFout.length === 0, 'denken: goed niet uniek in opties of uitleg mist bij ' + denkFout.length + ' items');
let leesFout = 0;
LEZEN.forEach(v => (v.vragen||[]).forEach(q => {
  if((q.opties||[]).filter(o => o === q.goed).length !== 1 || !q.uitleg) leesFout++;
}));
ok(leesFout === 0, 'lezen: ' + leesFout + ' vragen met niet-uniek goed antwoord of zonder uitleg');
/* sommen: antwoord positief geheel, geen dubbele opgaven */
const somSet = new Set(); let somDubbel = 0, somFout = 0;
SOMMEN.forEach(s => {
  const a = s.op==='+'?s.a+s.b : s.op==='−'?s.a-s.b : s.op==='×'?s.a*s.b : s.op===':'?s.a/s.b : s.a/2;
  if(!Number.isInteger(a) || a < 0) somFout++;
  const k = s.a + s.op + s.b; if(somSet.has(k)) somDubbel++; somSet.add(k);
});
ok(somFout === 0, 'sommen: ' + somFout + ' opgaven met een niet-positief/geheel antwoord');
ok(somDubbel === 0, 'sommen: ' + somDubbel + ' dubbele opgaven');
console.log('  content: ' + (SOMMEN.length+WOORDEN.length+FLITS.length+MEM.length+TALEN.length+
  DENKEN.length+BEELD.length+LEZEN.length+KLANK.length+REN.length) + ' items gecontroleerd');

/* --------------------------------------------------------- 6. versie + manifest */
sectie('6. Versie-consistentie en manifest');
const versie = require(path.join(ROOT,'version.js'));
const idx = fs.readFileSync(path.join(ROOT,'index.html'),'utf8');
ok(/^\d+\.\d+\.\d+$/.test(versie), 'version.js bevat een geldig versienummer: ' + versie);
ok(/<script src="version\.js">/.test(idx), 'index.html laadt version.js');
const mf = JSON.parse(fs.readFileSync(path.join(ROOT,'manifest.json'),'utf8'));
ok(mf.name === 'Archito', 'manifest name = Archito');
ok(mf.display === 'standalone' && mf.icons.length >= 2, 'manifest: standalone met minstens 2 iconen');
mf.icons.forEach(i => ok(bestaat(i.src), 'manifest-icoon bestaat: ' + i.src));
const readme = fs.readFileSync(path.join(ROOT,'README.md'),'utf8');
ok(readme.indexOf('**'+versie+'**') >= 0, 'README noemt de huidige versie ' + versie);

/* ------------------------------------------------------------------ resultaat */
console.log('\n' + '='.repeat(52));
console.log('REGRESSIE: ' + checks + ' checks · ' + fouten + ' fout · ' + waarschuwingen + ' waarschuwing(en)');
if(fouten === 0) console.log(waarschuwingen ? '✅ Geen fouten (wel waarschuwingen)' : '✅ Alles in orde');
process.exit(fouten ? 1 : 0);
