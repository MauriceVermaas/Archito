// gen_leerlijn.js — maakt LEERLIJN.html: een overzicht per groep (3 t/m 8) van álle stof
// die een kind daar krijgt. Bedoeld om door een basisschool-expert (leerkracht/RT'er)
// doorgelopen en afgetekend te worden. Toont ook wat er per domein nog ontbreekt.
// Draaien:  node gen_leerlijn.js   → LEERLIJN.html
"use strict";
const fs = require('fs'), path = require('path');
const R = f => require(path.join(__dirname, 'data', f));

const SOMMEN = R('sommen.js'), WOORDEN = R('woorden.js'), FLITS = R('flitswoorden.js');
const MEMORY = R('memory.js'), TALEN = R('talen.js'), DENKEN = R('denken.js');
const BEELD = R('beelddenken.js'), BEELDLAB = R('beeldlab.js'), LEZEN = R('lezen.js');
const KLANK = R('klankletter.js'), REN = R('renlezer.js');

const GROEPEN = [3,4,5,6,7,8];
const niveauVan = g => g - 2;            // zelfde regel als groepNaarNiveau() in de app

/* per domein: hoeveel items horen bij dit niveau (eigen stof) en hoeveel t/m dit niveau (incl. herhaling) */
function tel(arr, niv){
  const eigen = arr.filter(x => Number(x.niveau) === niv).length;
  const totaal = arr.filter(x => Number(x.niveau) <= niv).length;
  return { eigen, totaal };
}
/* norm = minimaal aantal EIGEN items per groep om live te kunnen. Onderbouwing:
   een kind doet per sessie ~15-30 opgaven; met de norm hieronder is er binnen één sessie
   geen herhaling en is er stof voor meerdere weken. 'alleenOnderbouw' = vaardigheid die
   bij groep 3-5 hoort (klank↔letter, beginnend lezen) en niet in de bovenbouw hoeft. */
const DOMEINEN = [
  { naam:"Rekenen (sommen)",     arr:SOMMEN,           norm:250 },
  { naam:"Spelling (woorden)",   arr:WOORDEN,          norm:20 },
  { naam:"Flitslezen",           arr:FLITS,            norm:20 },
  { naam:"Fotomemory",           arr:MEMORY,           norm:20 },
  { naam:"Talen (EN/ES)",        arr:TALEN,            norm:20 },
  { naam:"Denken (tekst)",       arr:DENKEN,           norm:30 },
  { naam:"Beelddenken",          arr:BEELD,            norm:30 },
  { naam:"Begrijpend lezen",     arr:LEZEN,            norm:20 },
  { naam:"Klankenjacht",         arr:KLANK,            norm:8, alleenOnderbouw:true },
  { naam:"Renlezer",             arr:REN,              norm:6, alleenOnderbouw:true },
  { naam:"Beeldlab · sorteren",  arr:BEELDLAB.sorteer, norm:5 },
  { naam:"Beeldlab · nabouwen",  arr:BEELDLAB.nabouw,  norm:5 },
  { naam:"Beeldlab · geheugen",  arr:BEELDLAB.geheugen,norm:5 },
  { naam:"Beeldlab · zoeken",    arr:BEELDLAB.zoek,    norm:5 }
];
/* geldt dit domein voor deze groep? */
function teltMee(d, g){ return !(d.alleenOnderbouw && g > 5); }
/* oordeel per groep: haalt elk meetellend domein zijn norm? */
function oordeel(g){
  const niv = niveauVan(g), onder = [];
  DOMEINEN.forEach(d => {
    if(!teltMee(d, g)) return;
    const eigen = tel(d.arr, niv).eigen;
    if(eigen < d.norm) onder.push({ naam:d.naam, eigen, norm:d.norm });
  });
  return { gereed: onder.length === 0, onder };
}

/* voorbeelden van de rekenstof per niveau, zodat een expert de zwaarte kan beoordelen */
function somTekst(s){
  if(s.op === '½') return 'de helft van ' + s.a;
  return s.a + ' ' + s.op + ' ' + s.b;
}
function rekenProfiel(niv){
  const eigen = SOMMEN.filter(s => Number(s.niveau) === niv);
  const ops = {}; let max = 0;
  eigen.forEach(s => { ops[s.op] = (ops[s.op]||0)+1; max = Math.max(max, s.a, s.b||0); });
  const vb = [];
  ['+','−','×',':','½'].forEach(op => {
    const m = eigen.filter(s => s.op === op);
    if(m.length) vb.push(somTekst(m[Math.floor(m.length/2)]));
  });
  return { ops, max, voorbeelden: vb };
}
function woordVoorbeelden(niv, n){
  return WOORDEN.filter(w => Number(w.niveau) === niv).slice(0, n).map(w => w.w);
}
function taalVoorbeelden(niv, n){
  return TALEN.filter(t => Number(t.niveau) === niv).slice(0, n).map(t => t.nl + ' → ' + t.en);
}

let html = `<!doctype html><html lang="nl"><meta charset="utf-8">
<title>Archito — leerlijn per groep (expert-review)</title>
<style>
 body{font-family:Verdana,Arial,sans-serif;background:#f4f6f8;color:#0f172a;letter-spacing:.4px;
      line-height:1.8;padding:26px;max-width:1000px;margin:0 auto}
 h1{font-size:1.5rem}h2{font-size:1.25rem;margin-top:1.6em;border-bottom:3px solid #0f172a;padding-bottom:.2em}
 p.uitleg{max-width:65ch}
 table{border-collapse:collapse;width:100%;margin:.6em 0 1.4em;background:#fff;
       border:3px solid #0f172a;border-radius:10px;overflow:hidden}
 th,td{padding:.45em .6em;border-bottom:1px solid #0002;text-align:left;font-size:.92rem}
 th{background:#fde047;font-weight:800}
 td.n{text-align:right;font-variant-numeric:tabular-nums}
 .leeg{background:#fee2e2;color:#991b1b;font-weight:800}
 .ok{color:#15803d;font-weight:800}
 .kaart{background:#fff;border:3px solid #0f172a;border-radius:14px;padding:.8em 1em;margin:.6em 0;
        box-shadow:4px 4px 0 #0f172a}
 .vb{font-family:'Courier New',monospace;background:#f1f5f9;padding:.1em .4em;border-radius:5px}
 .aftekenen{margin-top:.6em;font-size:.9rem;color:#334155}
 @media print{ body{background:#fff} .kaart{box-shadow:none} }
</style>
<h1>Archito — leerlijn per groep</h1>
<p class="uitleg">Overzicht van álle oefenstof per groep, om door een leerkracht of RT'er te laten
nakijken. <b>Eigen stof</b> = items die precies op dat groepsniveau zijn ingeschaald.
<b>Totaal beschikbaar</b> = alles t/m dat niveau, want de app biedt lagere stof als herhaling aan
(<code>niveau &lt;= niveau van het kind</code>). Rood = geen eigen stof op dit niveau.</p>
<p class="uitleg">Niveau = groep − 2. Dus groep 3 = niveau 1 … groep 8 = niveau 6.</p>
`;

/* ---- live-gereed overzicht bovenaan ---- */
html += `<h2>Klaar om live te gaan?</h2>
<p class="uitleg">Norm per domein = minimaal aantal <b>eigen</b> items op dat groepsniveau, zodat een
kind binnen één sessie (~15–30 opgaven) geen herhaling krijgt en er stof is voor meerdere weken.
Klankenjacht en Renlezer tellen alleen voor groep 3–5: dat zijn onderbouwvaardigheden.</p>
<table><tr><th>Groep</th><th>Oordeel</th><th>Onder de norm</th></tr>`;
GROEPEN.forEach(g => {
  const o = oordeel(g);
  html += `<tr><td><b>Groep ${g}</b></td>`
    + (o.gereed ? `<td class="ok">GEREED</td><td>—</td>`
                : `<td class="leeg">AANDACHT</td><td>${o.onder.map(x=>x.naam+' ('+x.eigen+'/'+x.norm+')').join(' · ')}</td>`)
    + `</tr>`;
});
html += `</table>`;

GROEPEN.forEach(g => {
  const niv = niveauVan(g);
  const rp = rekenProfiel(niv);
  const o = oordeel(g);
  html += `<h2>Groep ${g} <span style="font-weight:400;font-size:.9rem">(niveau ${niv}) — `
    + (o.gereed ? `<span class="ok">gereed</span>` : `<span style="color:#991b1b;font-weight:800">aandacht nodig</span>`)
    + `</span></h2>`;
  html += `<div class="kaart"><b>Rekenen op dit niveau</b><br>`;
  html += `Bewerkingen: ${Object.keys(rp.ops).length ? Object.keys(rp.ops).map(o=>o+' ('+rp.ops[o]+')').join(' · ') : '<span class="leeg">geen</span>'}<br>`;
  html += `Grootste getal: <b>${rp.max || '—'}</b><br>`;
  if(rp.voorbeelden.length) html += `Voorbeelden: ${rp.voorbeelden.map(v=>'<span class="vb">'+v+'</span>').join(' · ')}<br>`;
  const wv = woordVoorbeelden(niv, 6), tv = taalVoorbeelden(niv, 4);
  if(wv.length) html += `Spelling: ${wv.map(w=>'<span class="vb">'+w+'</span>').join(' · ')}<br>`;
  if(tv.length) html += `Talen: ${tv.map(t=>'<span class="vb">'+t+'</span>').join(' · ')}<br>`;
  html += `<div class="aftekenen">Beoordeling expert: passend? &nbsp;☐ ja &nbsp;☐ te makkelijk &nbsp;☐ te moeilijk &nbsp;— opmerking: ______________________</div></div>`;

  html += `<table><tr><th>Domein</th><th>Eigen stof op niveau ${niv}</th><th>Totaal beschikbaar (incl. herhaling)</th></tr>`;
  DOMEINEN.forEach(d => {
    const t = tel(d.arr, niv);
    const cls = t.eigen === 0 ? ' class="leeg"' : '';
    html += `<tr><td>${d.naam}</td><td class="n"${cls}>${t.eigen === 0 ? 'ONTBREEKT' : t.eigen}</td><td class="n">${t.totaal}</td></tr>`;
  });
  html += `</table>`;
});

/* samenvatting: waar ontbreekt eigen stof? */
html += `<h2>Samenvatting: waar ontbreekt nog eigen stof?</h2><table><tr><th>Domein</th>` +
  GROEPEN.map(g=>`<th>gr ${g}</th>`).join('') + `</tr>`;
DOMEINEN.forEach(d => {
  html += `<tr><td>${d.naam}</td>`;
  GROEPEN.forEach(g => {
    const t = tel(d.arr, niveauVan(g));
    html += t.eigen === 0 ? `<td class="leeg">–</td>` : `<td class="ok">${t.eigen}</td>`;
  });
  html += `</tr>`;
});
html += `</table>`;

fs.writeFileSync(path.join(__dirname, 'LEERLIJN.html'), html);

/* ook een korte samenvatting in de terminal */
console.error('LEERLIJN.html geschreven.');
GROEPEN.forEach(g => {
  const niv = niveauVan(g);
  const mist = DOMEINEN.filter(d => tel(d.arr, niv).eigen === 0).map(d => d.naam);
  console.error('groep ' + g + ' (niveau ' + niv + '): ' + (mist.length ? mist.length + ' domeinen zonder eigen stof → ' + mist.join(', ') : 'alle domeinen hebben eigen stof'));
});
