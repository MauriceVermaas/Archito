// gen_bovenbouw2.js — vult de laatste domeinen aan voor groep 6, 7 en 8 (niveau 4, 5, 6):
//   denken (tekst) · beelddenken · beeldlab (4 modi) · begrijpend lezen
// Alle regels uit de testsuite worden aangehouden ('goed' letterlijk/uniek in opties, uitleg
// verplicht, sorteer-'goed' is een herschikking van 'items', geheugen-'goed' is de juiste index,
// zoek-veld bevat minstens 2 doelen, beelddenken-opdracht max 45 tekens).
// Draaien:  node gen_bovenbouw2.js     (idempotent: bestaande items blijven staan)
"use strict";
const fs = require('fs'), path = require('path');
const D = f => path.join(__dirname, 'data', f);
function readHeader(file){ const t = fs.readFileSync(D(file),'utf8'); const i = t.indexOf('\nvar '); return t.slice(0,i).replace(/\s+$/,''); }
function write(file, varname, val){
  fs.writeFileSync(D(file), readHeader(file)+'\n\nvar '+varname+' = '+JSON.stringify(val,null,2)
    +';\nif (typeof module !== \'undefined\') module.exports = '+varname+';\n');
}
// deterministische shuffle (geen Math.random → reproduceerbare data)
let _s = 20250730;
function rnd(){ _s = (_s*1103515245 + 12345) & 0x7fffffff; return _s / 0x7fffffff; }
function shuffle(a){ a = a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(rnd()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
const uniek = a => [...new Set(a)];
/* Idempotent maken: houd per lijst alleen het eerste item met dezelfde sleutel.
   Zo kan dit script veilig meerdere keren draaien zonder dubbele opgaven. */
function dedupe(arr, sleutel){
  const gezien = new Set();
  return arr.filter(x => { const k = sleutel(x); if(gezien.has(k)) return false; gezien.add(k); return true; });
}

/* ===================== 1) DENKEN (tekst) — groep 6/7/8 ===================== */
{
  const bestaand = require('./data/denken.js');
  const gen = [];
  // getalpatronen met grotere stappen (groep 6), kwadraten (7), dubbelen/procenten (8)
  // groep 6: getalpatronen met grote stappen (telkens erbij / eraf)
  [9,11,12,15,18,20,25,30,35,40,45,50,60,75,100].forEach(stap => {
    [3,7,13,19,26,34].forEach(start => {
      const r = [start, start+stap, start+2*stap, start+3*stap], goed = start+4*stap;
      gen.push({ soort:"patroon", vraag:"Welk getal komt hierna? "+r.join(", ")+", ...",
        opties: shuffle([String(goed), String(goed+stap), String(goed-1)]),
        goed: String(goed), uitleg:"Er komt telkens "+stap+" bij. "+(start+3*stap)+" + "+stap+" = "+goed+".", niveau:4 });
    });
  });
  [25,50,100].forEach(stap => {
    const start = stap*5, r = [start, start-stap, start-2*stap, start-3*stap], goed = start-4*stap;
    if(goed < 0) return;
    gen.push({ soort:"patroon", vraag:"Welk getal komt hierna? "+r.join(", ")+", ...",
      opties: shuffle([String(goed), String(goed+stap), String(Math.max(0,goed-stap))]).filter((v,i,a)=>a.indexOf(v)===i),
      goed: String(goed), uitleg:"Er gaat telkens "+stap+" af. "+(start-3*stap)+" − "+stap+" = "+goed+".", niveau:4 });
  });
  // groep 7: verdubbelen, halveren, verhoudingen
  [2,3,4,5,6,7,8,9,10,11,12,15,20,25].forEach(k => {
    const rij = [k, k*2, k*4, k*8], goed = k*16;
    gen.push({ soort:"patroon", vraag:"Welk getal komt hierna? "+rij.join(", ")+", ...",
      opties: shuffle([String(goed), String(goed+k), String(k*12)]),
      goed: String(goed), uitleg:"Elk getal is het dubbele van het vorige: "+(k*8)+" × 2 = "+goed+".", niveau:5 });
  });
  [[3,12],[3,21],[4,20],[4,32],[5,15],[5,45],[6,18],[6,42],[7,28],[7,56],[8,32],[8,64],[9,27],[9,72],[11,44],[12,60],[12,84]].forEach(([per,tot]) => {
    gen.push({ soort:"logica", vraag:"Eén doos heeft "+per+" ballen. Hoeveel dozen voor "+tot+" ballen?",
      opties: shuffle([String(tot/per), String(tot/per+1), String(tot-per)]), goed: String(tot/per),
      uitleg: tot+" : "+per+" = "+(tot/per)+" dozen.", niveau:5 });
  });
  [[2,50],[4,25],[5,20],[10,10],[20,5],[25,4]].forEach(([deel,pct]) => {
    gen.push({ soort:"logica", vraag:"Hoeveel is 1/"+deel+" van 100?",
      opties: shuffle([String(pct), String(pct*2), String(deel*10)]).filter((v,i,a)=>a.indexOf(v)===i),
      goed: String(pct), uitleg:"100 : "+deel+" = "+pct+".", niveau:5 });
  });
  // groep 8: kwadraten, procenten, verhoudingen
  [3,4,5,6,7,8,9,10,11,12,13,14,15,16].forEach(n => {
    gen.push({ soort:"patroon", vraag:"Welk getal komt hierna? "+[n*n,(n+1)*(n+1),(n+2)*(n+2)].join(", ")+", ...",
      opties: shuffle([String((n+3)*(n+3)), String((n+2)*(n+2)+n), String((n+3)*(n+3)+2)]),
      goed: String((n+3)*(n+3)),
      uitleg:"Dit zijn kwadraten: "+(n+3)+" × "+(n+3)+" = "+((n+3)*(n+3))+".", niveau:6 });
  });
  [[20,5],[20,10],[20,15],[40,10],[40,20],[40,30],[60,15],[60,30],[80,20],[80,40],[50,5],[50,25],[200,50],[200,20],[30,6],[25,5],[100,15],[100,35],[120,30],[150,30]].forEach(([geheel,deel]) => {
    const pct = Math.round(deel/geheel*100);
    gen.push({ soort:"logica", vraag:"Van de "+geheel+" kinderen doen er "+deel+" mee. Hoeveel procent is dat?",
      opties: shuffle([pct+"%", (pct+10)+"%", (pct*2)+"%"]).filter((v,i,a)=>a.indexOf(v)===i), goed: pct+"%",
      uitleg: deel+" van "+geheel+" = "+deel+"/"+geheel+" = "+pct+"%.", niveau:6 });
  });
  [[3,4,12],[3,7,21],[4,5,20],[4,9,36],[5,6,30],[5,8,40],[6,7,42],[6,9,54],[7,5,35],[7,8,56],[8,3,24],[8,9,72],[9,4,36],[12,5,60],[11,6,66]].forEach(([a,b,opp]) => {
    gen.push({ soort:"logica", vraag:"Een tuin is "+a+" bij "+b+" meter. Wat is de oppervlakte?",
      opties: shuffle([opp+" m²", (a+b)+" m²", (opp*2)+" m²"]), goed: opp+" m²",
      uitleg:"Oppervlakte = lengte × breedte = "+a+" × "+b+" = "+opp+" m².", niveau:6 });
  });
  // 'klopt niet' met sterke beweringen (kritisch denken, groep 6-8)
  [["Alle vogels kunnen vliegen","een pinguïn kan niet vliegen",4],
   ["Alle getallen boven 2 zijn even","3 is oneven",4],
   ["Iedereen die hard leert haalt altijd een 10","hard leren helpt, maar geeft geen garantie",5],
   ["Als het regent is de straat altijd nat","onder een afdak blijft de straat droog",5],
   ["Meer volgers betekent altijd betere informatie",'populair is niet hetzelfde als waar',6],
   ["Uit één voorbeeld volgt altijd een regel","één voorbeeld is te weinig bewijs",6]
  ].forEach(([bewering, waarom, niv]) => {
    gen.push({ soort:"klopt-niet", vraag:"Welke zin klopt NIET?",
      opties: shuffle([bewering, "Soms is dit waar", "Dit kun je nagaan"]), goed: bewering,
      uitleg:"Deze bewering is te sterk: "+waarom+".", niveau:niv });
  });
  const totaal = dedupe(bestaand.concat(gen), d => d.vraag+'|'+d.goed);
  write('denken.js','DENKEN',totaal);
  console.error('denken:', bestaand.length, '→', totaal.length, '(+'+gen.length+')');
}

/* ===================== 2) BEELDDENKEN — groep 6/7/8 ===================== */
{
  const bestaand = require('./data/beelddenken.js');
  const gen = [];
  // complexere reeksen: ABB / ABC / AAB patronen (langer en abstracter dan de onderbouw)
  const sets = [["🔺","🟦","🟡"],["🐶","🐱","🐭"],["🍎","🍐","🍇"],["⭐","🌙","☀️"],["🔴","🟢","🔵"],
                ["🚗","🚌","🚲"],["🌳","🌵","🌷"],["🥇","🥈","🥉"],["😀","😐","😢"],["🔔","🎵","🎺"],
                ["🍰","🍩","🍪"],["⚽","🏀","🎾"],["🐟","🐬","🐙"],["☂️","🧣","🧤"],["🚀","🛰️","🪐"],
                ["🖊️","📕","📐"],["🥕","🥦","🌽"],["🕐","⏳","⏰"]];
  sets.forEach((s,i) => {
    gen.push({ soort:"reeks", opdracht:"Wat komt hierna?", toon:[s[0],s[1],s[1],s[0],s[1],s[1],"❓"],
      opties: shuffle([s[0],s[1],s[2]]), goed:s[0],
      uitleg:"Het patroon is A-B-B en begint dan opnieuw met A.", niveau:4 });
    gen.push({ soort:"reeks", opdracht:"Wat komt hierna?", toon:[s[0],s[1],s[2],s[0],s[1],"❓"],
      opties: shuffle([s[2],s[0],s[1]]), goed:s[2],
      uitleg:"Het patroon is A-B-C en herhaalt zich; na B komt C.", niveau:5 });
    gen.push({ soort:"reeks", opdracht:"Wat komt hierna?", toon:[s[0],s[0],s[1],s[0],s[0],s[1],s[0],"❓"],
      opties: shuffle([s[0],s[1],s[2]]), goed:s[0],
      uitleg:"Het patroon is A-A-B; na de eerste A volgt nog een A.", niveau:6 });
  });
  // 'hoort er niet bij' op categorie-niveau (abstracter: functie i.p.v. vorm)
  [[["🚗","🚌","🚲","🍎"],"🍎","de rest zijn voertuigen",4],
   [["🔨","🪚","🪛","🌷"],"🌷","de rest is gereedschap",5],
   [["🇳🇱","🇧🇪","🇩🇪","🐘"],"🐘","de rest zijn vlaggen",5],
   [["➕","➖","✖️","🎈"],"🎈","de rest zijn rekentekens",6],
   [["🌡️","⚖️","📏","🍰"],"🍰","de rest zijn meetinstrumenten",6]
  ].forEach(([opties, goed, waarom, niv]) => {
    gen.push({ soort:"anders", opdracht:"Welke hoort er niet bij?", opties: shuffle(opties), goed:goed,
      uitleg:"Deze past niet: "+waarom+".", niveau:niv });
  });
  /* ---- groep 7-8: abstracter dan een kleurenreeks ----
     De review wees erop dat groep 6 en 8 alleen in patroonvorm verschilden. Hieronder vier
     zwaardere denkstappen: ROTATIE (richting volgen), SPIEGELING (links-rechts omklappen),
     ANALOGIE (A hoort bij B zoals C bij ?) en TWEE REGELS tegelijk (kleur én vorm). */

  // 1) ROTATIE — de pijl draait telkens een kwartslag
  [[["⬆️","➡️","⬇️","⬅️"], "met de klok mee"],
   [["⬆️","⬅️","⬇️","➡️"], "tegen de klok in"],
   [["↗️","↘️","↙️","↖️"], "met de klok mee"],
   [["↖️","↙️","↘️","↗️"], "tegen de klok in"]
  ].forEach(([cyclus, richting], i) => {
    [5,6].forEach(niv => {
      const start = niv === 5 ? 0 : 2;                       // groep 8 begint verderop in de cyclus
      const rij = [0,1,2,3,4,5].map(k => cyclus[(start + k) % 4]);
      const goed = cyclus[(start + 6) % 4];
      gen.push({ soort:"rotatie", opdracht:"Welke kant draait hij op?",
        toon: rij.concat("❓"),
        opties: shuffle([goed, cyclus[(start + 5) % 4], cyclus[(start + 4) % 4]]),
        goed: goed,
        uitleg:"De pijl draait steeds een kwartslag "+richting+"; daarna komt "+goed+".",
        niveau: niv });
    });
  });

  // 2) SPIEGELING — welke vorm is het spiegelbeeld?
  [["▶️","◀️"],["🔺","🔻"],["⬆️","⬇️"],["🔼","🔽"],["↗️","↙️"],["↘️","↖️"]]
  .forEach(([a, b], i) => {
    const anders = ["🟦","⭐","🔵","🟨","⬛"];
    [5,6].forEach((niv, j) => {
      const van = j === 0 ? a : b, naar = j === 0 ? b : a;
      gen.push({ soort:"spiegeling", opdracht:"Welke is het spiegelbeeld?",
        toon: [van],
        opties: shuffle([naar, van, anders[(i + j) % anders.length]]),
        goed: naar,
        uitleg:"Spiegelen klapt het beeld om: "+van+" wordt "+naar+".",
        niveau: niv });
    });
  });

  // 3) ANALOGIE — A hoort bij B zoals C bij ?
  const PAREN = [["🐛","🦋"],["🥚","🐣"],["🌱","🌳"],["☁️","🌧️"],["🌾","🍞"],["🐄","🥛"],
                 ["🐑","🧶"],["🌰","🌳"],["🍎","🥧"],["🐟","🍣"]];
  PAREN.forEach(([a1, b1], i) => {
    const [a2, b2] = PAREN[(i + 3) % PAREN.length];
    if(b1 === b2) return;                                    // anders is de afleider óók goed
    const stoorzender = PAREN[(i + 6) % PAREN.length][1];
    if(stoorzender === b2 || stoorzender === b1) return;
    gen.push({ soort:"analogie", opdracht: a1+" → "+b1+". Dus "+a2+" → ?",
      opties: shuffle([b2, b1, stoorzender]),
      goed: b2,
      uitleg: a1+" verandert in "+b1+"; op dezelfde manier verandert "+a2+" in "+b2+".",
      niveau: i % 2 === 0 ? 5 : 6 });
  });

  // 4) TWEE REGELS TEGELIJK — kleur wisselt én vorm wisselt
  [[["🔴","🟥"],["🔵","🟦"]], [["🟡","🟨"],["🟢","🟩"]], [["🟣","🟪"],["🟠","🟧"]]]
  .forEach(([paarA, paarB], i) => {
    [5,6].forEach((niv, j) => {
      // rij: cirkel-vierkant per kleur, kleuren wisselen om
      const rij = j === 0
        ? [paarA[0], paarA[1], paarB[0], paarB[1], paarA[0]]
        : [paarA[0], paarA[1], paarB[0], paarB[1], paarA[0], paarA[1], paarB[0]];
      const goed = j === 0 ? paarA[1] : paarB[1];
      gen.push({ soort:"tweeregels", opdracht:"Let op kleur én vorm. Wat komt hierna?",
        toon: rij.concat("❓"),
        opties: shuffle([goed, paarB[0], paarA[0]]).filter((v,k,arr)=>arr.indexOf(v)===k),
        goed: goed,
        uitleg:"Er lopen twee regels: de vorm wisselt rond-vierkant, en de kleur wisselt per paar.",
        niveau: niv });
    });
  });

  /* 5) MATRIXPUZZEL — twee regels tegelijk, maar nu ZICHTBAAR als raster.
     In een 2x2 of 3x3 bepaalt de rij één eigenschap (kleur) en de kolom een andere (vorm).
     Het kind moet beide regels combineren om het ontbrekende vakje te vinden. Dat is een
     stap abstracter dan een reeks, en juist sterk voor visueel-ruimtelijke denkers.
     Kleuren met een cirkel-, vierkant- én hartvorm, zodat een echte 3x3 mogelijk is. */
  const VORMEN = {
    rood:   ["🔴","🟥","❤️"], blauw: ["🔵","🟦","💙"], geel:   ["🟡","🟨","💛"],
    groen:  ["🟢","🟩","💚"], paars: ["🟣","🟪","💜"], oranje: ["🟠","🟧","🧡"]
  };
  const KLEURNAMEN = Object.keys(VORMEN);

  // 2x2 voor groep 7: twee kleuren × twee vormen
  for(let i = 0; i < 6; i++){
    const k1 = KLEURNAMEN[i % 6], k2 = KLEURNAMEN[(i + 2) % 6];
    const v1 = 0, v2 = 1;                                  // cirkel en vierkant
    const goed = VORMEN[k2][v2];
    gen.push({ soort:"matrix", opdracht:"Wat hoort op de ❓-plek?", kolommen:2,
      toon: [VORMEN[k1][v1], VORMEN[k1][v2], VORMEN[k2][v1], "❓"],
      opties: shuffle([goed, VORMEN[k1][v2], VORMEN[k2][v1]]),
      goed: goed,
      uitleg:"Elke rij heeft één kleur en elke kolom één vorm. Rij 2 is "+k2+", kolom 2 is het vierkant, dus "+goed+".",
      niveau: 5 });
  }

  // 3x3 voor groep 8: drie kleuren × drie vormen (cirkel, vierkant, hart)
  for(let i = 0; i < 6; i++){
    const k = [KLEURNAMEN[i % 6], KLEURNAMEN[(i + 1) % 6], KLEURNAMEN[(i + 2) % 6]];
    const rij = kleur => VORMEN[kleur];
    const goed = rij(k[2])[2];
    gen.push({ soort:"matrix", opdracht:"Wat hoort op de ❓-plek?", kolommen:3,
      toon: [ rij(k[0])[0], rij(k[0])[1], rij(k[0])[2],
              rij(k[1])[0], rij(k[1])[1], rij(k[1])[2],
              rij(k[2])[0], rij(k[2])[1], "❓" ],
      opties: shuffle([goed, rij(k[1])[2], rij(k[0])[2]]),
      goed: goed,
      uitleg:"Per rij verandert de kleur, per kolom de vorm. De laatste rij is "+k[2]+" en de laatste kolom is het hart, dus "+goed+".",
      niveau: 6 });
  }

  const totaal = dedupe(bestaand.concat(gen),
    p => p.soort+'|'+(p.toon||[]).join('')+'|'+p.opties.join('')+'|'+p.goed);
  write('beelddenken.js','BEELD_DENKEN',totaal);
  console.error('beelddenken:', bestaand.length, '→', totaal.length, '(+'+gen.length+')');
}

/* ===================== 3) BEELDLAB — groep 6/7/8 ===================== */
{
  const bl = require('./data/beeldlab.js');
  const sorteer = bl.sorteer.slice(), nabouw = bl.nabouw.slice(),
        geheugen = bl.geheugen.slice(), zoek = bl.zoek.slice();

  // sorteren: langere reeksen (5-6 items) = meer werkgeheugen
  [[["🐜","🐝","🐭","🐈","🐕","🐘"],4],[["🌱","🌿","🪴","🌳"],4],
   [["🥚","🐛","🦋"],4],[["💧","🌊","🌧️","🏔️"],5],
   [["🕐","🕒","🕕","🕘","🕛"],5],[["🥉","🥈","🥇","👑"],5],
   [["📱","💻","🖥️","🏢"],6],[["🔬","🔭","🛰️","🌍"],6],
   [["🪨","⛰️","🌋"],6],
   // extra sorteer-reeksen om de norm per groep te halen
   [["🐁","🐀","🐈","🐕","🐎"],4],[["🥄","🍴","🔪","🪓"],4],[["🕯️","💡","🔦","🌞"],4],
   [["🎈","🎁","📦","🚚"],5],[["💧","🥛","🪣","🛁"],5],[["📏","📐","🧮","💻"],5],
   [["🌱","🌿","🌳","🌲"],6],[["⚛️","🧪","🔬","🛰️"],6]
  ].forEach(([items, niv]) => {
    const schoon = items.filter(x => !/across/.test(x));   // vangnet tegen typfouten
    if(schoon.length < 3) return;
    sorteer.push({ opdracht:"Zet op volgorde: klein naar groot", items:schoon, goed:schoon, niveau:niv });
  });

  // nabouwen: grotere grids (meer ruimtelijk inzicht)
  const KL = ["r","b","g","y","p","o"];
  [[3,3,4],[3,4,4],[4,3,4],[4,4,4],[3,4,5],[4,4,5],[4,5,5],[5,3,5],[4,5,6],[5,5,6],[5,4,6],[3,5,6]].forEach(([h,w,niv],idx) => {
    const grid = [];
    for(let y=0;y<h;y++){ const rij=[]; for(let x=0;x<w;x++){ rij.push(rnd()<0.22 ? "" : KL[Math.floor(rnd()*KL.length)]); } grid.push(rij); }
    if(!grid.some(r=>r.some(c=>c))) grid[0][0] = KL[0];
    nabouw.push({ opdracht:"Bouw dit patroon na", grid:grid, niveau:niv });
  });

  // geheugen: langere rijen (5-7 beelden)
  const emo = ["🔴","🔵","🟡","🟢","🟣","🐶","🐱","⭐","🌙","☀️","🍎","🍌","🔺","🟦"];
  [5,5,5,5,6,6,6,6,7,7,7,7].forEach((len,i) => {
    const niv = [4,4,4,4,5,5,5,5,6,6,6,6][i];
    const rij = shuffle(emo).slice(0,len);
    let b = shuffle(rij), c = shuffle(rij), pogingen = 0;
    while(b.join()===rij.join() && pogingen++<50) b = shuffle(rij);
    pogingen = 0;
    while((c.join()===rij.join() || c.join()===b.join()) && pogingen++<50) c = shuffle(rij);
    const opts = shuffle([rij.slice(), b, c]);
    const goed = opts.findIndex(o => o.join()===rij.join());
    if(goed < 0) return;
    geheugen.push({ opdracht:"Onthoud de rij", toon:rij, opties:opts, goed:goed, niveau:niv });
  });

  // zoeken: vollere velden met lastiger afleiders
  [[["🍎",["🍅","🍒"]],"appels",4],
   [["🔵",["🟣","🟦","🔷"]],"blauwe",4],
   [["🐴",["🦌","🐄","🐖"]],"paarden",4],
   [["🐝",["🐞","🦋","🪰"]],"bijen",5],
   [["6",["8","9","0"]],"zessen",5],
   [["🔺",["🔻","🟥","🔸"]],"driehoeken omhoog",5],
   [["b",["d","p","q"]],"letters b",6],
   [["🌟",["⭐","✨","💫"]],"gouden sterren",6],
   [["9",["6","8","4"]],"negens",6]
  ].forEach(([[doel, afleiders], label, niv]) => {
    const schoneAfl = uniek(afleiders.filter(a => a !== doel && !/📅/.test(a)));
    if(!schoneAfl.length) return;
    const k = 4 + Math.floor(rnd()*2), veld = [];
    for(let i=0;i<k;i++) veld.push(doel);
    const totaal = 16 + Math.floor(rnd()*5);
    while(veld.length < totaal) veld.push(schoneAfl[Math.floor(rnd()*schoneAfl.length)]);
    zoek.push({ opdracht:"Tik alle "+label, doel:doel, veld:shuffle(veld), niveau:niv });
  });

  const obj = {
    sorteer:  dedupe(sorteer,  p => p.items.join('|')),
    nabouw:   dedupe(nabouw,   p => JSON.stringify(p.grid)),
    geheugen: dedupe(geheugen, p => p.toon.join('|')+'#'+JSON.stringify(p.opties)),
    zoek:     dedupe(zoek,     p => p.doel+'#'+p.veld.slice().sort().join(''))
  };
  const header = readHeader('beeldlab.js');
  fs.writeFileSync(D('beeldlab.js'), header+'\n\nvar BEELDLAB = '+JSON.stringify(obj,null,2)
    +';\nif (typeof module !== \'undefined\') module.exports = BEELDLAB;\n');
  console.error('beeldlab sorteer/nabouw/geheugen/zoek:', sorteer.length, nabouw.length, geheugen.length, zoek.length);
}

/* ===================== 4) BEGRIJPEND LEZEN — groep 6/7/8 ===================== */
{
  const bestaand = require('./data/lezen.js');
  const nieuw = [
    { niveau:4, titel:"De brug van de buurt",
      tekst:"In het dorp lag een oude houten brug. Kinderen fietsten er elke dag over naar school. "
        +"Maar na een storm zaten er gaten in het hout. De gemeente zette hekken neer: de brug was gesloten. "
        +"Nu moesten de kinderen een half uur omfietsen. Daarom schreven ze samen een brief aan de burgemeester. "
        +"Twee weken later kwamen er werklui. Ze legden nieuwe planken neer, en de brug ging weer open.",
      vragen:[
        { vraag:"Waarom werd de brug gesloten?", opties:["Er zaten gaten in het hout na een storm","Er was te weinig geld","De kinderen mochten niet fietsen"],
          goed:"Er zaten gaten in het hout na een storm", uitleg:"Na de storm zaten er gaten in het hout, daarom kwamen de hekken." },
        { vraag:"Wat was het gevolg voor de kinderen?", opties:["Ze moesten omfietsen","Ze kregen vrij","Ze gingen lopen naar school"],
          goed:"Ze moesten omfietsen", uitleg:"Door de gesloten brug moesten ze een half uur omfietsen." },
        { vraag:"Wat deden de kinderen zelf?", opties:["Een brief schrijven aan de burgemeester","De brug zelf maken","Niets"],
          goed:"Een brief schrijven aan de burgemeester", uitleg:"Ze schreven samen een brief; daarna kwamen de werklui." },
        { vraag:"Wat is de hoofdgedachte?", opties:["Samen iets vragen kan echt helpen","Bruggen zijn gevaarlijk","Stormen komen vaak voor"],
          goed:"Samen iets vragen kan echt helpen", uitleg:"Doordat de kinderen samen actie ondernamen, werd de brug gemaakt." }
      ] },
    { niveau:5, titel:"Water uit de kraan",
      tekst:"Schoon water lijkt gewoon, maar er zit veel werk achter. Eerst wordt water uit de bodem of uit een rivier gehaald. "
        +"Daarna gaat het door filters van zand, die vuil tegenhouden. Vervolgens controleren medewerkers in een laboratorium "
        +"of er geen bacteriën in zitten. Pas dan gaat het water door dikke leidingen naar de huizen. "
        +"In Nederland is kraanwater daardoor goedkoop en veilig; toch kopen veel mensen water in flessen, wat duurder is "
        +"en meer afval geeft.",
      vragen:[
        { vraag:"Wat gebeurt er ná het filteren?", opties:["Het water wordt in een laboratorium gecontroleerd","Het water gaat direct naar huis","Het water gaat in flessen"],
          goed:"Het water wordt in een laboratorium gecontroleerd", uitleg:"De volgorde is: oppompen → filteren → controleren → leidingen." },
        { vraag:"Waarom houdt het zandfilter vuil tegen?", opties:["Omdat vuil niet door het zand past","Omdat zand water schoonmaakt met zeep","Omdat zand warm is"],
          goed:"Omdat vuil niet door het zand past", uitleg:"Een filter laat water door, maar houdt vuildeeltjes achter." },
        { vraag:"Welk nadeel van flessenwater noemt de tekst?", opties:["Het is duurder en geeft meer afval","Het is minder veilig","Het smaakt vies"],
          goed:"Het is duurder en geeft meer afval", uitleg:"De tekst zegt: duurder én meer afval." },
        { vraag:"Wat is het standpunt van de schrijver?", opties:["Kraanwater is een goede keuze","Flessenwater is beter","Water is overal gratis"],
          goed:"Kraanwater is een goede keuze", uitleg:"De schrijver noemt kraanwater goedkoop en veilig, en flessenwater duurder met meer afval." }
      ] },
    { niveau:6, titel:"Nepnieuws herkennen",
      tekst:"Op je telefoon zie je elke dag berichten. Sommige zijn waar, andere niet. Nepnieuws is verzonnen nieuws dat "
        +"echt lijkt. Het werkt vaak met een kop die je nieuwsgierig of kwaad maakt, want dan deel je het sneller. "
        +"Er zijn drie vragen die helpen. Wie heeft dit gemaakt? Staat het ook bij een bron die je kent? En klopt de datum, "
        +"of is het een oud bericht dat opnieuw rondgaat? Een foto is geen bewijs: beelden kunnen uit een ander land komen "
        +"of met de computer gemaakt zijn. Twijfel je, dan is niet delen de beste keuze.",
      vragen:[
        { vraag:"Waarom gebruikt nepnieuws vaak een felle kop?", opties:["Omdat mensen het dan sneller delen","Omdat het korter moet","Omdat kranten dat verplichten"],
          goed:"Omdat mensen het dan sneller delen", uitleg:"De tekst zegt: nieuwsgierig of kwaad maken zorgt dat je sneller deelt." },
        { vraag:"Welke vraag hoort NIET bij de drie tips?", opties:["Hoeveel likes heeft het?","Wie heeft dit gemaakt?","Klopt de datum?"],
          goed:"Hoeveel likes heeft het?", uitleg:"De tekst noemt maker, bekende bron en datum — likes staan er niet bij." },
        { vraag:"Waarom is een foto geen bewijs?", opties:["Beelden kunnen oud, uit een ander land of gemaakt zijn","Foto's zijn altijd onscherp","Foto's mogen niet gedeeld worden"],
          goed:"Beelden kunnen oud, uit een ander land of gemaakt zijn", uitleg:"Precies dat staat in de tekst over beelden." },
        { vraag:"Wat is het advies bij twijfel?", opties:["Niet delen","Toch delen met een vraagteken","Aan niemand vertellen"],
          goed:"Niet delen", uitleg:"De laatste zin zegt: twijfel je, dan is niet delen de beste keuze." }
      ] },

    /* ---------- groep 6 (niveau 4): extra verhalen ---------- */
    { niveau:4, titel:"De egel in de tuin",
      tekst:"Sanne vond een egel onder de heg. Het diertje bewoog nauwelijks en lag in de volle zon. "
        +"Ze wilde hem melk geven, maar haar vader zei dat egels daar buikpijn van krijgen. "
        +"Samen zetten ze een schaaltje water neer en legden takken over de egel voor schaduw. "
        +"Daarna belden ze de dierenambulance. De vrouw aan de telefoon zei dat ze het goed hadden gedaan: "
        +"stil laten liggen en niet oppakken.",
      vragen:[
        { vraag:"Waarom mocht de egel geen melk?", opties:["Egels krijgen er buikpijn van","Melk was er niet","Egels lusten geen melk"],
          goed:"Egels krijgen er buikpijn van", uitleg:"Vader zegt dat egels buikpijn krijgen van melk." },
        { vraag:"Waarom legden ze takken neer?", opties:["Voor schaduw","Om de egel te verstoppen","Als voer"],
          goed:"Voor schaduw", uitleg:"De egel lag in de volle zon; takken geven schaduw." },
        { vraag:"Wat is de hoofdgedachte?", opties:["Help een dier, maar doe het op de juiste manier","Egels zijn gevaarlijk","Bel altijd meteen de politie"],
          goed:"Help een dier, maar doe het op de juiste manier", uitleg:"Ze helpen wél, maar met water en schaduw in plaats van melk." }
      ] },
    { niveau:4, titel:"Het verdwenen sleutelbos",
      tekst:"Meester Dirk kon de deur van de gymzaal niet openen: zijn sleutelbos was weg. "
        +"Hij had hem 's ochtends nog gebruikt bij het kopieerapparaat. Twee kinderen liepen mee om te zoeken. "
        +"Bij de kopieermachine lag niets, maar in de papierbak vonden ze de sleutels tussen de vellen. "
        +"Meester Dirk had ze er per ongeluk in laten glijden toen hij het papier bijvulde. "
        +"De gymles begon maar vijf minuten later.",
      vragen:[
        { vraag:"Waar lagen de sleutels?", opties:["In de papierbak","Op het bureau","In de gymzaal"],
          goed:"In de papierbak", uitleg:"Ze vonden de sleutels tussen de vellen in de papierbak." },
        { vraag:"Hoe kwamen ze daar?", opties:["Ze gleden erin bij het papier bijvullen","Iemand had ze verstopt","Ze vielen uit zijn jas"],
          goed:"Ze gleden erin bij het papier bijvullen", uitleg:"De tekst zegt: per ongeluk erin laten glijden bij het bijvullen." },
        { vraag:"Wat was het gevolg?", opties:["De gymles begon vijf minuten later","De gymles ging niet door","De deur bleef dicht"],
          goed:"De gymles begon vijf minuten later", uitleg:"De laatste zin noemt vijf minuten vertraging." }
      ] },

    /* ---------- groep 7 (niveau 5): extra verhalen ---------- */
    { niveau:5, titel:"Waarom bijen belangrijk zijn",
      tekst:"Bijen halen nectar uit bloemen. Onderweg blijft er stuifmeel aan hun haren plakken, dat ze "
        +"meenemen naar de volgende bloem. Zo worden planten bevrucht en groeien er vruchten: appels, "
        +"aardbeien, pompoenen. Zonder bijen zou een groot deel van ons voedsel verdwijnen. "
        +"Toch gaat het niet goed met ze. Er zijn minder wilde bloemen en meer bestrijdingsmiddelen. "
        +"Wie helpen wil, kan bloeiende planten in de tuin zetten en een bak met water met steentjes neerzetten, "
        +"zodat bijen kunnen drinken zonder te verdrinken.",
      vragen:[
        { vraag:"Hoe zorgen bijen dat vruchten groeien?", opties:["Ze brengen stuifmeel naar andere bloemen","Ze eten schadelijke insecten","Ze maken de grond los"],
          goed:"Ze brengen stuifmeel naar andere bloemen", uitleg:"Stuifmeel plakt aan hun haren en gaat mee naar de volgende bloem." },
        { vraag:"Welke twee oorzaken noemt de tekst?", opties:["Minder wilde bloemen en meer bestrijdingsmiddelen","Te warme zomers en regen","Te veel bijenkasten"],
          goed:"Minder wilde bloemen en meer bestrijdingsmiddelen", uitleg:"Die twee redenen staan letterlijk in de tekst." },
        { vraag:"Waarom steentjes in het water?", opties:["Zodat bijen kunnen drinken zonder te verdrinken","Om het water schoon te houden","Om vogels weg te houden"],
          goed:"Zodat bijen kunnen drinken zonder te verdrinken", uitleg:"De laatste zin legt dat uit." },
        { vraag:"Wat wil de schrijver bereiken?", opties:["Dat lezers bijen gaan helpen","Dat lezers bang worden voor bijen","Dat lezers honing kopen"],
          goed:"Dat lezers bijen gaan helpen", uitleg:"De tekst eindigt met concrete tips om te helpen." }
      ] },
    { niveau:5, titel:"De eerste schooldag van Amir",
      tekst:"Amir kwam in oktober in de klas. Hij sprak nog bijna geen Nederlands en zei de eerste dagen niets. "
        +"In de pauze stond hij alleen bij het hek. Jara bedacht iets: ze vroeg hem niet in woorden, maar met "
        +"haar handen of hij mee kwam voetballen. Amir knikte. Tijdens het spelen riep hij namen van kleuren "
        +"die hij die week geleerd had. Na een maand vertelde hij in de kring over zijn oude school. "
        +"Zijn stem trilde, maar hij deed het.",
      vragen:[
        { vraag:"Waarom zei Amir de eerste dagen niets?", opties:["Hij sprak nog bijna geen Nederlands","Hij vond de klas niet leuk","Hij was verlegen voor Jara"],
          goed:"Hij sprak nog bijna geen Nederlands", uitleg:"De tweede zin geeft die reden." },
        { vraag:"Hoe vroeg Jara hem mee?", opties:["Met haar handen","Met een briefje","Via de juf"],
          goed:"Met haar handen", uitleg:"Ze vroeg het niet in woorden maar met haar handen." },
        { vraag:"Wat voelde Amir in de kring?", opties:["Spanning, maar hij deed het toch","Verveling","Boosheid"],
          goed:"Spanning, maar hij deed het toch", uitleg:"Zijn stem trilde, en toch vertelde hij zijn verhaal." },
        { vraag:"Wat is de hoofdgedachte?", opties:["Je kunt iemand ook zonder woorden welkom maken","Voetballen is het leukste spel","Talen leren gaat snel"],
          goed:"Je kunt iemand ook zonder woorden welkom maken", uitleg:"Jara's gebaar zonder woorden bracht Amir in de groep." }
      ] },

    /* ---------- groep 8 (niveau 6): extra verhalen ---------- */
    { niveau:6, titel:"Hoe een dijk werkt",
      tekst:"Een groot deel van Nederland ligt onder de zeespiegel. Dijken houden het water tegen, maar ze doen "
        +"meer dan hoog zijn. De kern bestaat vaak uit zand of klei; klei laat weinig water door. Aan de zeekant "
        +"liggen stenen of asfalt, zodat golven het talud niet wegslaan. Gras aan de landkant lijkt versiering, "
        +"maar de wortels houden de grond bij elkaar. Waterschappen controleren dijken meerdere keren per jaar en "
        +"na elke storm. Bij verwachte hoogwaterstanden gaan stormvloedkeringen dicht, zoals de Maeslantkering "
        +"bij Rotterdam.",
      vragen:[
        { vraag:"Waarom gebruikt men klei in de kern?", opties:["Klei laat weinig water door","Klei is goedkoop","Klei is licht"],
          goed:"Klei laat weinig water door", uitleg:"De tekst zegt dat klei weinig water doorlaat." },
        { vraag:"Welke functie heeft het gras?", opties:["De wortels houden de grond bij elkaar","Het is alleen voor de sier","Het houdt golven tegen"],
          goed:"De wortels houden de grond bij elkaar", uitleg:"Gras lijkt versiering, maar de wortels versterken de grond." },
        { vraag:"Wanneer wordt er extra gecontroleerd?", opties:["Na elke storm","Alleen in de zomer","Eén keer per tien jaar"],
          goed:"Na elke storm", uitleg:"Waterschappen controleren meerdere keren per jaar én na elke storm." },
        { vraag:"Wat is de hoofdgedachte?", opties:["Een dijk is een slim opgebouwd systeem","Nederland ligt te laag","Stormen zijn onvoorspelbaar"],
          goed:"Een dijk is een slim opgebouwd systeem", uitleg:"Elke laag heeft een eigen functie: kern, stenen, gras, plus controle en keringen." }
      ] },
    { niveau:6, titel:"Reclame in je tijdlijn",
      tekst:"Video's op je telefoon lijken gratis, maar je betaalt met aandacht en gegevens. Een app houdt bij "
        +"waar je op klikt en hoe lang je kijkt. Met die gegevens kiezen adverteerders wie hun reclame ziet. "
        +"Daarom krijg jij andere advertenties dan je opa. Soms lijkt reclame op een gewone video: een bekende "
        +"maker praat enthousiast over een product en zegt pas achteraf, of helemaal niet, dat hij ervoor betaald is. "
        +"In Nederland moet dat wél gemeld worden. Let dus op woorden als 'advertentie' of 'samenwerking', "
        +"en vraag je af waarom juist jij dit ziet.",
      vragen:[
        { vraag:"Waarmee betaal je volgens de tekst?", opties:["Met aandacht en gegevens","Met een abonnement","Met advertenties kijken alleen"],
          goed:"Met aandacht en gegevens", uitleg:"De eerste zin noemt aandacht en gegevens als betaalmiddel." },
        { vraag:"Waarom zie jij andere reclame dan je opa?", opties:["Adverteerders kiezen op basis van gegevens","Opa's telefoon is ouder","Reclame wisselt willekeurig"],
          goed:"Adverteerders kiezen op basis van gegevens", uitleg:"Met de bijgehouden gegevens kiezen adverteerders hun publiek." },
        { vraag:"Waarop moet je letten volgens de schrijver?", opties:["Woorden als 'advertentie' of 'samenwerking'","Het aantal views","De lengte van de video"],
          goed:"Woorden als 'advertentie' of 'samenwerking'", uitleg:"Die woorden verraden dat het betaalde reclame is." },
        { vraag:"Wat is het standpunt van de schrijver?", opties:["Wees kritisch op wat je ziet","Reclame is verboden","Apps zijn altijd oneerlijk"],
          goed:"Wees kritisch op wat je ziet", uitleg:"De tekst eindigt met: vraag je af waarom juist jij dit ziet." }
      ] }
  ];
  const titels = new Set(bestaand.map(v => v.titel));
  const toevoegen = nieuw.filter(v => !titels.has(v.titel));
  const totaal = bestaand.concat(toevoegen);
  write('lezen.js','LEZEN',totaal);
  console.error('lezen:', bestaand.length, '→', totaal.length, '(+'+toevoegen.length+')');
}
