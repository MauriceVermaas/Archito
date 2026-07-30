// gen_bovenbouw.js — vult de taal-leerlijnen aan voor groep 6, 7 en 8 (niveau 4, 5, 6).
// Tot nu toe stopte de content bij niveau 3; hierdoor kregen bovenbouwkinderen groep-5-stof.
// Dit script voegt gecureerde stof toe aan:  woorden (spelling) · flitswoorden · talen · memory
// Draaien:  node gen_bovenbouw.js      (idempotent: bestaande woorden worden overgeslagen)
"use strict";
const fs = require('fs'), path = require('path');
const D = f => path.join(__dirname, 'data', f);
function readHeader(file){ const t = fs.readFileSync(D(file),'utf8'); const i = t.indexOf('\nvar '); return t.slice(0,i).replace(/\s+$/,''); }
function writeArray(file, varname, arr){
  fs.writeFileSync(D(file), readHeader(file)+'\n\nvar '+varname+' = '+JSON.stringify(arr,null,2)
    +';\nif (typeof module !== \'undefined\') module.exports = '+varname+';\n');
}

/* ===================== SPELLING (woorden) =====================
   delen = klankdelen/lettergrepen; samengevoegd vormen ze exact het woord.
   niveau 4 = groep 6 (ei/ij, au/ou, verkleinwoorden, open/gesloten lettergrepen)
   niveau 5 = groep 7 (samenstellingen en leenwoorden)
   niveau 6 = groep 8 (meerlettergrepig, werkwoordspelling vt/vd)                        */
const SPELLING = [
  // --- groep 6 ---
  { w:"tijger",       delen:["tij","ger"],              niveau:4 },
  { w:"meisje",       delen:["meis","je"],              niveau:4 },
  { w:"huisje",       delen:["huis","je"],              niveau:4 },
  { w:"koning",       delen:["ko","ning"],              niveau:4 },
  { w:"vogel",        delen:["vo","gel"],               niveau:4 },
  { w:"bakker",       delen:["bak","ker"],              niveau:4 },
  { w:"trein",        delen:["trein"],                  niveau:4 },
  { w:"blauw",        delen:["blauw"],                  niveau:4 },
  { w:"vrouw",        delen:["vrouw"],                  niveau:4 },
  { w:"winter",       delen:["win","ter"],              niveau:4 },
  { w:"zomer",        delen:["zo","mer"],               niveau:4 },
  { w:"kleuren",      delen:["kleu","ren"],             niveau:4 },
  // --- groep 7 ---
  { w:"computer",     delen:["com","pu","ter"],         niveau:5 },
  { w:"station",      delen:["sta","tion"],             niveau:5 },
  { w:"zwembad",      delen:["zwem","bad"],             niveau:5 },
  { w:"voetbalveld",  delen:["voet","bal","veld"],      niveau:5 },
  { w:"fietspad",     delen:["fiets","pad"],            niveau:5 },
  { w:"politie",      delen:["po","li","tie"],          niveau:5 },
  { w:"vakantie",     delen:["va","kan","tie"],         niveau:5 },
  { w:"muziek",       delen:["mu","ziek"],              niveau:5 },
  { w:"garage",       delen:["ga","ra","ge"],           niveau:5 },
  { w:"verhaal",      delen:["ver","haal"],             niveau:5 },
  { w:"speeltuin",    delen:["speel","tuin"],           niveau:5 },
  { w:"schoolplein",  delen:["school","plein"],         niveau:5 },
  // --- groep 8 ---
  { w:"gebeurde",     delen:["ge","beur","de"],         niveau:6 },
  { w:"verwachting",  delen:["ver","wach","ting"],      niveau:6 },
  { w:"ingewikkeld",  delen:["in","ge","wik","keld"],   niveau:6 },
  { w:"bibliotheek",  delen:["bi","bli","o","theek"],   niveau:6 },
  { w:"restaurant",   delen:["res","tau","rant"],       niveau:6 },
  { w:"kilometer",    delen:["ki","lo","me","ter"],     niveau:6 },
  { w:"gemeente",     delen:["ge","meen","te"],         niveau:6 },
  { w:"theater",      delen:["the","a","ter"],          niveau:6 },
  { w:"wetenschap",   delen:["we","ten","schap"],       niveau:6 },
  { w:"geschiedenis", delen:["ge","schie","de","nis"],  niveau:6 },
  { w:"belangrijk",   delen:["be","lang","rijk"],       niveau:6 },
  { w:"onderwerp",    delen:["on","der","werp"],        niveau:6 },
  // --- extra groep 6 (tot de norm van 20 eigen woorden) ---
  { w:"vlinder",      delen:["vlin","der"],             niveau:4 },
  { w:"avontuur",     delen:["a","von","tuur"],         niveau:4 },
  { w:"schaduw",      delen:["scha","duw"],             niveau:4 },
  { w:"beweging",     delen:["be","we","ging"],         niveau:4 },
  { w:"vriendin",     delen:["vrien","din"],            niveau:4 },
  { w:"boodschap",    delen:["bood","schap"],           niveau:4 },
  { w:"toekomst",     delen:["toe","komst"],            niveau:4 },
  { w:"landkaart",    delen:["land","kaart"],           niveau:4 },
  { w:"ijsbeer",      delen:["ijs","beer"],             niveau:4 },
  { w:"speelgoed",    delen:["speel","goed"],           niveau:4 },
  { w:"gordijn",      delen:["gor","dijn"],             niveau:4 },
  { w:"fontein",      delen:["fon","tein"],             niveau:4 },
  { w:"winkelen",     delen:["win","ke","len"],         niveau:4 },
  { w:"zeemeeuw",     delen:["zee","meeuw"],            niveau:4 },
  { w:"handschoen",   delen:["hand","schoen"],          niveau:4 },
  // --- extra groep 7 ---
  { w:"kampioen",     delen:["kam","pi","oen"],         niveau:5 },
  { w:"publiek",      delen:["pu","bliek"],             niveau:5 },
  { w:"horizon",      delen:["ho","ri","zon"],          niveau:5 },
  { w:"energie",      delen:["e","ner","gie"],          niveau:5 },
  { w:"machine",      delen:["ma","chi","ne"],          niveau:5 },
  { w:"vitamine",     delen:["vi","ta","mi","ne"],      niveau:5 },
  { w:"ambulance",    delen:["am","bu","lan","ce"],     niveau:5 },
  { w:"chocolade",    delen:["cho","co","la","de"],     niveau:5 },
  { w:"januari",      delen:["ja","nu","a","ri"],       niveau:5 },
  { w:"kwartier",     delen:["kwar","tier"],            niveau:5 },
  // --- extra groep 8 ---
  { w:"democratie",   delen:["de","mo","cra","tie"],    niveau:6 },
  { w:"industrie",    delen:["in","dus","trie"],        niveau:6 },
  { w:"kwaliteit",    delen:["kwa","li","teit"],        niveau:6 },
  { w:"techniek",     delen:["tech","niek"],            niveau:6 },
  { w:"provincie",    delen:["pro","vin","cie"],        niveau:6 },
  { w:"experiment",   delen:["ex","pe","ri","ment"],    niveau:6 },
  { w:"temperatuur",  delen:["tem","pe","ra","tuur"],   niveau:6 },
  { w:"organisatie",  delen:["or","ga","ni","sa","tie"],niveau:6 },
  { w:"voorbeeld",    delen:["voor","beeld"],           niveau:6 },
  { w:"opdracht",     delen:["op","dracht"],            niveau:6 },
  { w:"verschil",     delen:["ver","schil"],            niveau:6 }
];

/* Instinkers = ECHTE spellingvalkuilen, geen willekeurige letters.
   In de onderbouw is dat een verwarrende letter (b bij 'dak'); in de bovenbouw een fout
   gespeld klankdeel (kom bij 'com-pu-ter', sie bij 'sta-tion'). De testsuite eist dat de
   instinker niet in het woord voorkomt — een fout gespeld deel voldoet daaraan. */
const VALKUIL = [
  [/^com/,'kom'], [/^con/,'kon'], [/^cen/,'sen'], [/^ca/,'ka'], [/^co/,'ko'], [/^ci/,'si'],
  [/tion$/,'sion'], [/tie$/,'sie'], [/cie$/,'sie'], [/tie/,'cie'],
  [/au/,'ou'], [/ou/,'au'], [/ei/,'ij'], [/ij/,'ei'],
  [/ch/,'g'], [/g/,'ch'], [/th/,'t'], [/ph/,'f'],
  [/kk/,'k'], [/tt/,'t'], [/pp/,'p'], [/ss/,'s'], [/ll/,'l'], [/mm/,'m'],
  [/([bdfgklmnprst])\1/, '$1'],                    // dubbele letter enkel maken
  [/aa/,'a'], [/oo/,'o'], [/ee/,'e'], [/uu/,'u'],
  [/^ver/,'fer'], [/^be/,'bi'], [/^ge/,'che'], [/^voor/,'for'],
  // ie/ij en ei/ie: de meest gemaakte fout in de bovenbouw
  [/iek$/,'ijk'], [/ie$/,'ij'], [/ien/,'ein'], [/ie/,'ei'],
  // klankgroepen die kinderen fonetisch spellen
  [/^ex/,'eks'], [/ce$/,'se'], [/oe/,'oo'], [/^k/,'c'], [/ti/,'tsi'], [/je$/,'sje'], [/oen/,'oun'], [/eu/,'ui'],
  // open lettergreep verlengen (zo → zoo) en gesloten lettergreep verkeerd verlengen (bad → baad):
  // dít is dé spellingvalkuil van groep 6-8
  [/^([bcdfghjklmnprstvwz]{1,3})a$/,'$1aa'], [/^([bcdfghjklmnprstvwz]{1,3})o$/,'$1oo'],
  [/^([bcdfghjklmnprstvwz]{1,3})e$/,'$1ee'], [/^([bcdfghjklmnprstvwz]{1,3})u$/,'$1uu'],
  [/^([bcdfghjklmnprstvwz]{1,3})i$/,'$1ie'],
  [/a([bdfgklmnprst])$/,'aa$1'], [/o([bdfgklmnprst])$/,'oo$1'],
  [/e([bdfgklmnprst])$/,'ee$1'], [/i([bdfgklmnprst])$/,'ie$1'], [/u([bdfgklmnprst])$/,'uu$1']
];
function instinker(w, delen, niveau){
  const uit = [];
  // 1) probeer een klankdeel plausibel fout te spellen
  (delen || [w]).forEach(deel => {
    if(uit.length >= 2) return;
    for(const [zoek, verv] of VALKUIL){
      if(!zoek.test(deel)) continue;
      const fout = deel.replace(zoek, verv);
      if(fout !== deel && w.indexOf(fout) < 0 && !uit.includes(fout)){ uit.push(fout); break; }
    }
  });
  // 2) Alleen in de ONDERBOUW een losse verwarrende letter als terugval. Bij meerlettergrepige
  //    woorden (groep 6+) zou een losse letter een te doorzichtige keuze zijn: daar blijven het
  //    fout gespelde klankdelen. Geen 'q': die letter komt in Nederlandse woorden vrijwel niet voor.
  if(Number(niveau) >= 4) return uit.slice(0, 2);
  const verwar = { b:'d', d:'b', m:'n', n:'m', v:'f', f:'v', s:'z', z:'s', ei:'ij', ij:'ei' };
  Object.entries(verwar).forEach(([a,b]) => {
    if(uit.length >= 2) return;
    if(w.indexOf(a) >= 0 && w.indexOf(b) < 0 && !uit.includes(b)) uit.push(b);
  });
  return uit.slice(0, 2);
}

/* ===================== TALEN + MEMORY (woordenschat) ===================== */
const VOCAB = [
  // groep 6
  ["kasteel","castle","castillo","🏰",4], ["brug","bridge","puente","🌉",4],
  ["kaart","map","mapa","🗺️",4],         ["medaille","medal","medalla","🏅",4],
  ["brief","letter","carta","✉️",4],      ["ring","ring","anillo","💍",4],
  // groep 7
  ["ziekenhuis","hospital","hospital","🏥",5], ["bibliotheek","library","biblioteca","📚",5],
  ["vliegveld","airport","aeropuerto","🛫",5], ["museum","museum","museo","🏛️",5],
  ["fabriek","factory","fábrica","🏭",5],      ["kerk","church","iglesia","⛪",5],
  // groep 8
  ["telescoop","telescope","telescopio","🔭",6], ["batterij","battery","batería","🔋",6],
  ["magneet","magnet","imán","🧲",6],            ["satelliet","satellite","satélite","🛰️",6],
  ["thermometer","thermometer","termómetro","🌡️",6], ["wereldbol","globe","globo","🌍",6],
  // extra groep 6 (tot de norm van 12 eigen items)
  ["parasol","parasol","parasol","⛱️",4],       ["ladder","ladder","escalera","🪜",4],
  ["emmer","bucket","cubo","🪣",4],             ["zaklamp","flashlight","linterna","🔦",4],
  ["weegschaal","scale","balanza","⚖️",4],      ["rugzak","backpack","mochila","🎒",4],
  // extra groep 7
  ["ambulance","ambulance","ambulancia","🚑",5], ["vuilnisbak","bin","basura","🗑️",5],
  ["gereedschap","tools","herramientas","🛠️",5],["vergrootglas","magnifier","lupa","🔍",5],
  ["penseel","brush","pincel","🖌️",5],          ["rekenmachine","calculator","calculadora","🧮",5],
  // extra groep 8
  ["planeet","planet","planeta","🪐",6],        ["atoom","atom","átomo","⚛️",6],
  ["tandwiel","gear","engranaje","⚙️",6],       ["proefbuis","test tube","tubo","🧪",6],
  ["diskette","floppy disk","disquete","💾",6], ["robotarm","robot arm","brazo robot","🦾",6]
];

/* ===================== 1) woorden.js ===================== */
{
  const bestaand = require('./data/woorden.js');
  const have = new Set(bestaand.map(x => x.w));
  const nieuw = [];
  SPELLING.forEach(s => {
    if(have.has(s.w)) return;
    if(s.delen.join('') !== s.w){ console.error('OVERGESLAGEN (delen ≠ woord):', s.w); return; }
    have.add(s.w);
    nieuw.push({ w:s.w, delen:s.delen, extra:instinker(s.w, s.delen, s.niveau), niveau:s.niveau });
  });
  const totaal = bestaand.concat(nieuw);
  writeArray('woorden.js','WOORDEN',totaal);
  console.error('woorden:', bestaand.length, '→', totaal.length, '(+'+nieuw.length+')');
}

/* ===================== 2) flitswoorden.js ===================== */
{
  /* Lookalikes moeten LEESBARE, plausibele varianten zijn. Letters als q of reeksen als
     'eomputer' bestaan niet in het Nederlands en trainen dus geen leesverwarring.
     Daarom: (1) twee letters in het midden verwisselen, (2) een letter verdubbelen of
     weglaten, (3) alleen echt verwarrende letterparen ruilen — nooit de eerste letter. */
  const CONF = {a:'o',o:'a',e:'i',i:'e',u:'o',n:'m',m:'n',b:'d',d:'b',v:'f',f:'v',s:'z',z:'s',t:'f',r:'n'};
  function look(w){
    const alts = new Set();
    const geldig = v => v !== w && v.indexOf(w) < 0 && !/[qxy]/.test(v) && v[0] === w[0];
    // 1) aangrenzende letters verwisselen (klassieke leesfout), niet op positie 0
    for(let p = 1; p < w.length - 1 && alts.size < 2; p++){
      const v = w.slice(0,p) + w[p+1] + w[p] + w.slice(p+2);
      if(geldig(v)) alts.add(v);
    }
    // 2) een consonant verdubbelen of een dubbele enkel maken
    for(let p = 1; p < w.length && alts.size < 2; p++){
      const c = w[p];
      if('bcdfgklmnprstv'.indexOf(c) < 0) continue;
      const dubbel = w.slice(0,p) + c + w.slice(p);
      if(geldig(dubbel)) alts.add(dubbel);
      if(w[p] === w[p-1]){
        const enkel = w.slice(0,p) + w.slice(p+1);
        if(geldig(enkel)) alts.add(enkel);
      }
    }
    // 3) verwarrende letter ruilen, alleen ná de eerste letter
    for(let p = 1; p < w.length && alts.size < 2; p++){
      const r = CONF[w[p]];
      if(!r) continue;
      const v = w.slice(0,p) + r + w.slice(p+1);
      if(geldig(v)) alts.add(v);
    }
    return [...alts].slice(0,2);
  }
  const bestaand = require('./data/flitswoorden.js');
  const have = new Set(bestaand.map(f => f.w));
  const nieuw = [];
  // Maximale woordlengte voor flitslezen loopt op met de groep: onderbouw kort houden,
  // bovenbouw mag langere woorden flitsen (die lezen ze in één oogopslag).
  const maxLengte = niv => niv <= 4 ? 10 : 13;
  SPELLING.forEach(s => {
    if(have.has(s.w) || s.w.length > maxLengte(s.niveau)) return;
    const alt = look(s.w);
    if(alt.length !== 2 || alt[0] === alt[1]) return;
    have.add(s.w);
    nieuw.push({ w:s.w, alt:alt, niveau:s.niveau });
  });
  const totaal = bestaand.concat(nieuw);
  writeArray('flitswoorden.js','FLITSWOORDEN',totaal);
  console.error('flitswoorden:', bestaand.length, '→', totaal.length, '(+'+nieuw.length+')');
}

/* ===================== 3) talen.js ===================== */
{
  const bestaand = require('./data/talen.js');
  const have = new Set(bestaand.map(t => t.nl));
  const nieuw = [];
  VOCAB.forEach(v => {
    if(have.has(v[0])) return;
    have.add(v[0]);
    nieuw.push({ nl:v[0], en:v[1], es:v[2], plaatje:v[3], niveau:v[4] });
  });
  const totaal = bestaand.concat(nieuw);
  writeArray('talen.js','TALEN',totaal);
  console.error('talen:', bestaand.length, '→', totaal.length, '(+'+nieuw.length+')');
}

/* ===================== 4) memory.js ===================== */
{
  const bestaand = require('./data/memory.js');
  const have = new Set(bestaand.map(m => m.w));
  const nieuw = [];
  VOCAB.forEach(v => {
    if(have.has(v[0])) return;
    have.add(v[0]);
    nieuw.push({ w:v[0], plaatje:v[3], niveau:v[4] });
  });
  const totaal = bestaand.concat(nieuw);
  writeArray('memory.js','MEMORY',totaal);
  console.error('memory:', bestaand.length, '→', totaal.length, '(+'+nieuw.length+')');
}
