// tools/opschonen_woordbeeld.js — maakt de plaatje↔woord-koppeling eenduidig.
// Waarom: in Memory en Talen wijst een plaatje één woord aan. Twee woorden met hetzelfde
// plaatje maakt Memory onoplosbaar en het Talen-antwoord ambigu — en voor beelddenkers
// koppelt een verkeerd plaatje het woord aan het verkeerde beeld.
// Twee soorten ingrepen:
//   VERWIJDER — woorden die je niet in één plaatje kunt tonen (abstracties, bijvoeglijke
//               naamwoorden) of die een ander woord dubbelen
//   NIEUWEEMOJI — woorden die wél een eigen, beter plaatje kunnen krijgen
// Draaien:  node tools/opschonen_woordbeeld.js
"use strict";
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const D = f => path.join(ROOT, 'data', f);
function readHeader(file){ const t = fs.readFileSync(D(file),'utf8'); const i = t.indexOf('\nvar '); return t.slice(0,i).replace(/\s+$/,''); }
function write(file, varname, arr){
  fs.writeFileSync(D(file), readHeader(file)+'\n\nvar '+varname+' = '+JSON.stringify(arr,null,2)
    +';\nif (typeof module !== \'undefined\') module.exports = '+varname+';\n');
}

/* Niet in een plaatjesspel te tonen (abstract), of dubbel met een ander woord. */
const VERWIJDER = new Set([
  // abstracties — geen enkel plaatje wijst dit eenduidig aan
  "zwaartekracht","aardrijkskunde","laboratorium","wetenschap","temperatuur","industrie",
  "energie","bevolking","handel","vervoer","grens","landbouw","hoofdstad","verkiezing",
  "milieu","klimaat","technologie","geschiedenis","elektriciteit","heelal","experiment",
  // bijvoeglijke naamwoorden: een foto van een olifant betekent niet "groot"
  "groot","klein","snel",
  // dubbelingen van een woord dat al bestaat
  "koek","druif","pinguïn","voetbal","tafel","windmolen","rivier","restaurant","druppel","vuurtoren"
]);

/* Woorden die juist wél een eigen, duidelijker plaatje krijgen. */
const NIEUWEEMOJI = {
  boer:"🧑‍🌾",        // was 🚜 (dat is de tractor)
  haven:"🚢",         // was ⚓ (dat is het anker)
  markt:"🛒",         // was 🏪 (dat is de winkel)
  hoofd:"🙂",         // was 🧠 (dat zijn de hersenen)
  beker:"🏆",         // 'beker' als prijs; de drinkbeker heet 'kopje' in de data
  bot:"🦴",
  park:"🏞️"
};

let verwijderdTotaal = 0, aangepastTotaal = 0;

[["memory.js","MEMORY","w"], ["talen.js","TALEN","nl"]].forEach(([file, varname, veld]) => {
  const arr = require(D(file));
  const over = arr.filter(x => !VERWIJDER.has(x[veld]));
  const verwijderd = arr.length - over.length;
  let aangepast = 0;
  over.forEach(x => {
    const nieuw = NIEUWEEMOJI[x[veld]];
    if(nieuw && x.plaatje !== nieuw){ x.plaatje = nieuw; aangepast++; }
  });
  write(file, varname, over);
  verwijderdTotaal += verwijderd; aangepastTotaal += aangepast;
  const per = {}; over.forEach(x => per[x.niveau] = (per[x.niveau]||0)+1);
  console.error(file.padEnd(12) + arr.length + ' → ' + over.length
    + '  (−' + verwijderd + ' verwijderd, ' + aangepast + ' plaatje aangepast)'
    + '  per groep 3..8: ' + [1,2,3,4,5,6].map(n => per[n]||0).join('/'));
});
console.error('totaal: ' + verwijderdTotaal + ' items verwijderd, ' + aangepastTotaal + ' plaatjes aangepast');
