// gen_rekentop.js — bouwt data/rekentop.js: REKENTOPPERS voor groep 6, 7 en 8.
// Waarom dit bestand bestaat: de gewone rekenopgaven hebben de vorm { a, op, b } en kunnen
// daarmee alleen kale bewerkingen met hele getallen uitdrukken. Referentieniveau 2F vraagt
// juist breuken, procenten, kommagetallen, verhoudingen en meten — in CONTEXT.
// Formaat: { soort, vraag, opties:[...], goed, uitleg, niveau }  (niveau 4=groep 6 … 6=groep 8)
// Draaien:  node gen_rekentop.js
"use strict";
const fs = require('fs'), path = require('path');
const UIT = path.join(__dirname, 'data', 'rekentop.js');

let _s = 424242;
function rnd(){ _s = (_s*1103515245 + 12345) & 0x7fffffff; return _s / 0x7fffffff; }
function shuffle(a){ a = a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(rnd()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
const items = [];
/* voeg toe met 3 opties: het goede antwoord + 2 plausibele misrekeningen */
function add(soort, niveau, vraag, goed, fout1, fout2, uitleg){
  const opties = [...new Set([String(goed), String(fout1), String(fout2)])];
  if(opties.length < 3) return;                       // afleider viel samen met het antwoord
  items.push({ soort, vraag, opties: shuffle(opties), goed: String(goed), uitleg, niveau });
}
const NAMEN = ["Sam","Noor","Tim","Fee","Bo","Iris","Daan","Mila","Ravi","Lotte"];
const naam = i => NAMEN[i % NAMEN.length];

/* ===================== BREUKEN ===================== */
// groep 6: deel van een geheel met kleine noemers
[[2,20],[2,50],[4,20],[4,40],[4,100],[5,20],[5,50],[10,50],[10,100],[3,30],[3,60],[8,40]]
  .forEach(([noemer, geheel], i) => {
    const goed = geheel / noemer;
    add("breuk", 4,
      `${naam(i)} heeft ${geheel} knikkers en geeft 1/${noemer} deel weg. Hoeveel knikkers is dat?`,
      goed, goed + noemer, geheel - noemer,
      `1/${noemer} van ${geheel} betekent ${geheel} : ${noemer} = ${goed}.`);
  });
// groep 7: meerdere delen (teller > 1)
[[3,4,20],[2,3,30],[3,5,50],[2,5,40],[3,4,80],[5,8,40],[2,3,60],[3,10,100],[7,10,50],[2,4,36]]
  .forEach(([t, n, geheel], i) => {
    const goed = geheel / n * t;
    if(!Number.isInteger(goed)) return;
    add("breuk", 5,
      `Een pak koekjes heeft ${geheel} stuks. ${naam(i)} eet ${t}/${n} deel op. Hoeveel koekjes zijn dat?`,
      goed, geheel / n, goed + n,
      `${geheel} : ${n} = ${geheel/n} (dat is 1/${n} deel). Dan ${geheel/n} × ${t} = ${goed}.`);
  });
// groep 8: breuk vergelijken en optellen met gelijke noemer
[[1,2,1,4,"1/2"],[1,3,1,6,"1/3"],[2,5,1,2,"1/2"],[3,4,2,3,"3/4"],[5,8,1,2,"5/8"],[2,3,3,5,"2/3"]]
  .forEach(([t1,n1,t2,n2,groter], i) => {
    add("breuk", 6, `Welke breuk is het grootst: ${t1}/${n1} of ${t2}/${n2}?`,
      groter, (groter === `${t1}/${n1}` ? `${t2}/${n2}` : `${t1}/${n1}`), "ze zijn gelijk",
      `${t1}/${n1} = ${(t1/n1).toFixed(3)} en ${t2}/${n2} = ${(t2/n2).toFixed(3)}; de grootste is ${groter}.`);
  });
[[1,4,2,4,"3/4"],[1,5,3,5,"4/5"],[2,8,3,8,"5/8"],[1,6,4,6,"5/6"],[3,10,4,10,"7/10"]]
  .forEach(([t1,n,t2], i) => {
    add("breuk", 6, `Hoeveel is ${t1}/${n} + ${t2}/${n}?`,
      `${t1+t2}/${n}`, `${t1+t2}/${n+n}`, `${t1*t2}/${n}`,
      `Bij dezelfde noemer tel je alleen de tellers op: ${t1} + ${t2} = ${t1+t2}, dus ${t1+t2}/${n}.`);
  });

/* ===================== PROCENTEN ===================== */
// groep 6: 10%, 25%, 50% van ronde getallen
[[50,20],[50,40],[50,60],[25,40],[25,80],[25,200],[10,50],[10,90],[10,300],[100,45]]
  .forEach(([pct, geheel], i) => {
    const goed = geheel * pct / 100;
    add("procent", 4, `Een trui van € ${geheel} is ${pct}% afgeprijsd. Hoeveel euro korting is dat?`,
      goed, goed + 10, geheel - goed,
      `${pct}% van ${geheel} = ${geheel} × ${pct}/100 = ${goed}.`);
  });
// groep 7: percentage berekenen én eindprijs
[[80,20],[60,25],[200,10],[150,20],[40,50],[120,25],[90,10],[500,20]]
  .forEach(([prijs, pct], i) => {
    const korting = prijs * pct / 100, eind = prijs - korting;
    add("procent", 5, `Een spel kost € ${prijs}. Er is ${pct}% korting. Wat betaal je?`,
      eind, korting, prijs + korting,
      `Korting = ${pct}% van ${prijs} = ${korting}. Je betaalt ${prijs} − ${korting} = ${eind}.`);
  });
// groep 8: welk percentage is het deel?
[[20,5],[40,10],[50,20],[80,20],[200,50],[25,5],[60,15],[120,30],[150,45],[300,60]]
  .forEach(([geheel, deel], i) => {
    const pct = Math.round(deel / geheel * 100);
    add("procent", 6, `In een klas van ${geheel} leerlingen doen er ${deel} mee aan de musical. Hoeveel procent is dat?`,
      pct + "%", (pct + 10) + "%", (100 - pct) + "%",
      `${deel} van ${geheel} = ${deel}/${geheel} = ${pct}%.`);
  });

/* ===================== KOMMAGETALLEN ===================== */
// groep 6: geld optellen
[[2.50,1.25],[3.75,2.20],[1.80,4.60],[5.40,2.35],[7.25,1.50],[6.30,3.45],[4.15,2.85],[9.90,1.10]]
  .forEach(([a, b], i) => {
    const goed = (a + b).toFixed(2).replace('.', ',');
    add("komma", 4, `${naam(i)} koopt iets van € ${a.toFixed(2).replace('.',',')} en € ${b.toFixed(2).replace('.',',')}. Wat is het samen?`,
      "€ " + goed, "€ " + (a + b + 1).toFixed(2).replace('.', ','), "€ " + (a + b - 0.10).toFixed(2).replace('.', ','),
      `${a.toFixed(2).replace('.',',')} + ${b.toFixed(2).replace('.',',')} = ${goed}. Zet de komma's onder elkaar.`);
  });
// groep 7: kommagetal × geheel getal
[[1.5,4],[2.5,6],[0.5,12],[3.5,4],[1.25,8],[2.25,4],[0.75,8],[4.5,6]]
  .forEach(([a, b], i) => {
    const goed = +(a * b).toFixed(2);
    add("komma", 5, `Eén pak rijst weegt ${String(a).replace('.',',')} kg. Hoeveel wegen ${b} pakken?`,
      String(goed).replace('.', ',') + " kg", String(a + b).replace('.', ',') + " kg", String(goed * 10).replace('.', ',') + " kg",
      `${String(a).replace('.',',')} × ${b} = ${String(goed).replace('.',',')} kg.`);
  });
// groep 8: kommagetal delen en afronden
[[7.5,3],[9.6,4],[12.5,5],[4.8,6],[10.5,7],[8.4,4],[15.6,4],[6.3,3]]
  .forEach(([a, b], i) => {
    const goed = +(a / b).toFixed(2);
    add("komma", 6, `${a.toString().replace('.',',')} liter sap wordt eerlijk verdeeld over ${b} kannen. Hoeveel liter per kan?`,
      String(goed).replace('.', ',') + " l", String(+(a * b).toFixed(1)).replace('.', ',') + " l", String(goed + 1).replace('.', ',') + " l",
      `${a.toString().replace('.',',')} : ${b} = ${String(goed).replace('.',',')} liter.`);
  });

/* ===================== METEN & METRIEK STELSEL ===================== */
// groep 6: meter/centimeter, liter/milliliter, kilo/gram
[["m","cm",100],["km","m",1000],["l","ml",1000],["kg","g",1000],["cm","mm",10]]
  .forEach(([groot, klein, factor]) => {
    [1.5, 2, 2.5, 3, 4.5].forEach((n, i) => {
      const goed = n * factor;
      add("meten", 4, `Hoeveel ${klein} is ${String(n).replace('.',',')} ${groot}?`,
        goed, n * factor / 10, n * factor * 10,
        `1 ${groot} = ${factor} ${klein}, dus ${String(n).replace('.',',')} × ${factor} = ${goed} ${klein}.`);
    });
  });
// groep 7: omrekenen terug (klein → groot)
[["cm","m",100],["m","km",1000],["ml","l",1000],["g","kg",1000]]
  .forEach(([klein, groot, factor]) => {
    [250, 500, 750, 1500, 2500].forEach((n, i) => {
      const goed = n / factor;
      add("meten", 5, `Hoeveel ${groot} is ${n} ${klein}?`,
        String(goed).replace('.', ','), String(goed * 10).replace('.', ','), String(goed / 10).replace('.', ','),
        `${factor} ${klein} = 1 ${groot}, dus ${n} : ${factor} = ${String(goed).replace('.',',')} ${groot}.`);
    });
  });
// groep 8: tijd en snelheid in context
[[60,2],[90,3],[120,4],[45,3],[150,5]].forEach(([km, uur], i) => {
  const goed = km / uur;
  add("meten", 6, `Een bus rijdt ${km} km in ${uur} uur. Hoeveel km per uur is dat gemiddeld?`,
    goed + " km/u", (km + uur) + " km/u", (goed * 2) + " km/u",
    `Snelheid = afstand : tijd = ${km} : ${uur} = ${goed} km per uur.`);
});
[[90,"1,5 uur"],[150,"2,5 uur"],[45,"0,75 uur"]].forEach(([minuten, tekst], i) => {
  add("meten", 6, `Hoeveel uur is ${minuten} minuten?`, tekst,
    (minuten / 100) + " uur", (minuten / 30) + " uur",
    `${minuten} minuten : 60 = ${tekst}.`);
});

/* ===================== OPPERVLAKTE & OMTREK ===================== */
[[4,3],[5,4],[6,3],[7,4],[8,5],[9,6],[10,4],[12,5]].forEach(([l, b], i) => {
  add("meetkunde", 4, `Een tuin is ${l} m lang en ${b} m breed. Wat is de oppervlakte?`,
    (l * b) + " m²", (2 * (l + b)) + " m²", (l + b) + " m²",
    `Oppervlakte = lengte × breedte = ${l} × ${b} = ${l * b} m².`);
  add("meetkunde", 5, `Een tuin is ${l} m lang en ${b} m breed. Hoeveel meter hek is er nodig rondom?`,
    (2 * (l + b)) + " m", (l * b) + " m", (l + b) + " m",
    `Omtrek = 2 × (lengte + breedte) = 2 × (${l} + ${b}) = ${2 * (l + b)} m.`);
});
[[6,4,2],[8,5,3],[10,4,2],[12,6,3]].forEach(([l, b, h], i) => {
  add("meetkunde", 6, `Een bak is ${l} bij ${b} bij ${h} cm. Wat is het volume?`,
    (l * b * h) + " cm³", (l * b) + " cm³", (l + b + h) + " cm³",
    `Volume = lengte × breedte × hoogte = ${l} × ${b} × ${h} = ${l * b * h} cm³.`);
});

/* ===================== VERHOUDINGEN ===================== */
[[2,5,10],[3,4,12],[4,3,20],[5,2,15],[2,7,8],[3,5,9]].forEach(([per, prijs, aantal], i) => {
  const goed = aantal / per * prijs;
  if(!Number.isInteger(goed)) return;
  add("verhouding", 5, `${per} appels kosten € ${prijs}. Wat kosten ${aantal} appels?`,
    "€ " + goed, "€ " + (prijs * aantal), "€ " + (goed - prijs),
    `${aantal} : ${per} = ${aantal/per} keer zoveel, dus ${aantal/per} × ${prijs} = ${goed} euro.`);
});
[[4,200,6],[3,150,5],[5,400,8],[2,90,7]].forEach(([per, gram, aantal], i) => {
  const goed = gram / per * aantal;
  if(!Number.isInteger(goed)) return;
  add("verhouding", 6, `Voor ${per} personen heb je ${gram} gram pasta nodig. Hoeveel voor ${aantal} personen?`,
    goed + " gram", (gram * aantal) + " gram", (gram + aantal) + " gram",
    `Per persoon: ${gram} : ${per} = ${gram/per} gram. Dan ${gram/per} × ${aantal} = ${goed} gram.`);
});

/* ===================== wegschrijven ===================== */
const per = {}; items.forEach(x => per[x.niveau] = (per[x.niveau]||0)+1);
const soorten = {}; items.forEach(x => soorten[x.soort] = (soorten[x.soort]||0)+1);
const header = `// data/rekentop.js — REKENTOPPERS: rekenen op referentieniveau 2F voor groep 6, 7 en 8.
// Waarom apart van sommen.js: die opgaven hebben de vorm { a, op, b } en kunnen alleen kale
// bewerkingen met hele getallen uitdrukken. 2F vraagt juist breuken, procenten, kommagetallen,
// verhoudingen, meten en meetkunde — en in CONTEXT (een verhaaltje), niet als losse berekening.
// Elk item: { soort, vraag, opties:[...], goed, uitleg, niveau }
//   soort   — breuk · procent · komma · meten · meetkunde · verhouding
//   goed    — staat letterlijk én uniek in 'opties'
//   uitleg  — wordt na een goed antwoord voorgelezen (uitleg van de rekenstap)
//   niveau  — 4 = groep 6, 5 = groep 7, 6 = groep 8
// Opnieuw genereren:  node gen_rekentop.js
`;
fs.writeFileSync(UIT, header + '\nvar REKENTOP = ' + JSON.stringify(items, null, 2)
  + ';\nif (typeof module !== \'undefined\') module.exports = REKENTOP;\n');
console.error('rekentop: ' + items.length + ' opgaven · per groep 6/7/8: '
  + [4,5,6].map(n => per[n]||0).join('/'));
console.error('soorten: ' + Object.entries(soorten).map(([k,v]) => k+'='+v).join(' '));
