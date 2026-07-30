// gen_lezen.js — bouwt data/lezen.js op tot ~30 teksten per groep (3 t/m 8).
// Twee soorten teksten:
//   · VERHALEND (groep 3-6): personage, plaats, probleem, oplossing, gevoel
//   · INFORMATIEF (groep 5-8): onderwerp met feiten, oorzaak/gevolg en een advies/standpunt
// De vragen worden AFGELEID uit de gegenereerde feiten, dus het goede antwoord is per definitie
// juist en de afleiders komen uit andere teksten (dus nooit óók waar).
// Regels uit de testsuite: 'goed' staat letterlijk én uniek in 'opties'; elke vraag heeft uitleg.
// Draaien:  node gen_lezen.js          (bestaande, handgeschreven teksten blijven staan)
"use strict";
const fs = require('fs'), path = require('path');
const D = f => path.join(__dirname, 'data', f);
function readHeader(file){ const t = fs.readFileSync(D(file),'utf8'); const i = t.indexOf('\nvar '); return t.slice(0,i).replace(/\s+$/,''); }

let _s = 7654321;
function rnd(){ _s = (_s*1103515245 + 12345) & 0x7fffffff; return _s / 0x7fffffff; }
const pick = a => a[Math.floor(rnd()*a.length)];
function shuffle(a){ a = a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(rnd()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
/* maak 3 opties: het goede antwoord + 2 afleiders die er zeker van verschillen */
function opties(goed, poolAfleiders){
  const anders = poolAfleiders.filter(x => x !== goed);
  const twee = [];
  while(twee.length < 2 && anders.length){
    const k = anders.splice(Math.floor(rnd()*anders.length), 1)[0];
    if(!twee.includes(k)) twee.push(k);
  }
  return shuffle([goed].concat(twee));
}

/* ===================== bouwstenen voor VERHALEN ===================== */
const NAMEN = ["Sanne","Tim","Amir","Jara","Bo","Nour","Lars","Fee","Daan","Mila",
               "Sem","Roos","Iris","Kees","Yara","Bram","Lotte","Finn","Zoë","Ravi"];
const PLAATSEN = [
  { plek:"in het bos",            zin:"liep door het bos" },
  { plek:"op het strand",         zin:"speelde op het strand" },
  { plek:"in de schuur",          zin:"zocht iets in de schuur" },
  { plek:"op het schoolplein",    zin:"stond op het schoolplein" },
  { plek:"in de bibliotheek",     zin:"koos een boek in de bibliotheek" },
  { plek:"bij de sloot",          zin:"keek bij de sloot" },
  { plek:"op zolder",             zin:"rommelde op zolder" },
  { plek:"in de dierentuin",      zin:"wandelde door de dierentuin" },
  { plek:"op de camping",         zin:"kampeerde op de camping" },
  { plek:"in de speeltuin",       zin:"was in de speeltuin" },
  { plek:"bij de markt",          zin:"hielp op de markt" },
  { plek:"in het zwembad",        zin:"zwom in het zwembad" }
];
const AVONTUREN = [
  { probleem:"een vogel met een gebroken vleugel", oorzaak:"de vogel was tegen een raam gevlogen", bijzin:"de vogel tegen een raam was gevlogen", moment:"voor",
    oplossing:"belde de dierenambulance", gevoel:"bezorgd", les:"Help een dier, maar op de juiste manier" },
  { probleem:"een verdwaalde puppy",              oorzaak:"het hondje was door een gat in het hek gekropen", bijzin:"het hondje door een gat in het hek was gekropen", moment:"na",
    oplossing:"zocht het baasje met een foto",   gevoel:"blij",     les:"Doorzetten helpt om iets op te lossen" },
  { probleem:"een lekke fietsband",               oorzaak:"er zat een scherf glas in de band", bijzin:"er een scherf glas in de band zat", moment:"na",
    oplossing:"plakte de band met een setje",     gevoel:"trots",    les:"Zelf iets maken geeft een trots gevoel" },
  { probleem:"een dichte deur zonder sleutel",     oorzaak:"de sleutel lag binnen op de tafel", bijzin:"de sleutel binnen op de tafel lag", moment:"voor",
    oplossing:"vroeg de buurvrouw om hulp",       gevoel:"verlegen", les:"Om hulp vragen is geen zwakte" },
  { probleem:"een kat hoog in een boom",           oorzaak:"de kat was voor een hond weggerend", bijzin:"de kat voor een hond was weggerend", moment:"voor",
    oplossing:"zette voer onderaan de boom",      gevoel:"geduldig", les:"Rustig blijven werkt beter dan trekken" },
  { probleem:"een gescheurde tekening",            oorzaak:"de wind had het papier meegenomen", bijzin:"de wind het papier had meegenomen", moment:"na",
    oplossing:"plakte de stukken met tape",       gevoel:"opgelucht",les:"Van een misser kun je iets nieuws maken" },
  { probleem:"een klasgenoot die alleen stond",     oorzaak:"hij was nieuw en kende niemand", bijzin:"hij nieuw was en niemand kende", moment:"voor",
    oplossing:"vroeg hem mee te spelen",          gevoel:"behulpzaam",   les:"Iemand erbij vragen kost weinig en helpt veel" },
  { probleem:"een omgevallen emmer verf",          oorzaak:"iemand was tegen de ladder gestoten", bijzin:"iemand tegen de ladder was gestoten", moment:"voor",
    oplossing:"maakte alles schoon met water",    gevoel:"geschrokken",les:"Eerlijk opruimen na een ongelukje" },
  { probleem:"een vastgelopen vlieger",            oorzaak:"het touw was om een tak gedraaid", bijzin:"het touw om een tak was gedraaid", moment:"na",
    oplossing:"gebruikte een lange stok",         gevoel:"vindingrijk", les:"Met een slim idee kom je verder" },
  { probleem:"een boodschappenlijstje dat weg was", oorzaak:"het lijstje was uit de zak gevallen", bijzin:"het lijstje uit de zak was gevallen", moment:"voor",
    oplossing:"belde thuis om het voor te lezen", gevoel:"rustig",   les:"Rustig nadenken lost meer op dan zoeken" },
  { probleem:"een pen die niet meer schreef",      oorzaak:"de pen was helemaal leeg", bijzin:"de pen helemaal leeg was", moment:"na",
    oplossing:"leende een pen van de buurman",    gevoel:"dankbaar", les:"Samen kom je er sneller uit" },
  { probleem:"een berg wortels die te veel was",   oorzaak:"de oogst was groter dan verwacht", bijzin:"de oogst groter was dan verwacht", moment:"na",
    oplossing:"deelde ze met de buren",           gevoel:"vrolijk",  les:"Delen maakt iets leuker" }
];

/* ===================== bouwstenen voor INFORMATIEVE teksten ===================== */
const INFO = [
  { titel:"Waarom bomen belangrijk zijn", onderwerp:"bomen",
    feit1:"Bomen maken zuurstof die mensen en dieren nodig hebben",
    feit2:"De wortels houden de grond op zijn plek",
    oorzaak:"omdat er steeds meer bos wordt gekapt", gevolg:"verdwijnen er ook dieren die er wonen",
    advies:"Plant een boom of bescherm het bos in de buurt" },
  { titel:"Zo werkt een windmolen", onderwerp:"windmolens",
    feit1:"De wind duwt tegen de wieken en laat ze draaien",
    feit2:"In de molen zet een generator die beweging om in stroom",
    oorzaak:"omdat wind gratis en onbeperkt is", gevolg:"is windstroom goedkoper dan olie",
    advies:"Zet apparaten uit die je niet gebruikt" },
  { titel:"Het skelet van je lichaam", onderwerp:"botten",
    feit1:"Een mens heeft ruim tweehonderd botten",
    feit2:"Botten beschermen zachte delen zoals je hersenen",
    oorzaak:"omdat je botten kalk nodig hebben", gevolg:"is zuivel of groente met kalk belangrijk",
    advies:"Beweeg elke dag; botten worden sterker van gebruik" },
  { titel:"Waar komt regen vandaan?", onderwerp:"de waterkringloop",
    feit1:"De zon verwarmt water in zeeën en rivieren",
    feit2:"Waterdamp stijgt op en wordt in de kou weer druppels",
    oorzaak:"omdat wolken steeds zwaarder worden", gevolg:"valt het water als regen naar beneden",
    advies:"Vang regenwater op voor de plantjes" },
  { titel:"Hoe een vulkaan uitbarst", onderwerp:"vulkanen",
    feit1:"Diep in de aarde is steen zo heet dat het vloeibaar wordt",
    feit2:"Dat gesteente heet magma en zoekt een weg naar boven",
    oorzaak:"omdat de druk in de vulkaan te hoog wordt", gevolg:"spuit lava en as naar buiten",
    advies:"Volg altijd de waarschuwingen van deskundigen" },
  { titel:"Waarom we afval scheiden", onderwerp:"afval",
    feit1:"Van oud papier kan nieuw papier gemaakt worden",
    feit2:"Plastic dat in de natuur belandt, blijft daar honderden jaren liggen",
    oorzaak:"omdat grondstoffen niet oneindig zijn", gevolg:"scheelt hergebruik veel energie",
    advies:"Gooi papier, glas en plastic in de juiste bak" },
  { titel:"Slaap is werk voor je hersenen", onderwerp:"slaap",
    feit1:"Tijdens de slaap ruimen je hersenen afvalstoffen op",
    feit2:"Wat je die dag leerde, wordt in je slaap vastgelegd",
    oorzaak:"omdat licht van een scherm je wakker houdt", gevolg:"val je later in slaap dan je wilt",
    advies:"Leg je telefoon een uur voor bedtijd weg" },
  { titel:"De trek van vogels", onderwerp:"trekvogels",
    feit1:"Sommige vogels vliegen duizenden kilometers naar het zuiden",
    feit2:"Ze vinden de weg met de zon, sterren en het magnetisch veld",
    oorzaak:"omdat er in de winter hier te weinig eten is", gevolg:"vertrekken ze in het najaar",
    advies:"Laat bessen in de tuin staan als vogelvoer" },
  { titel:"Wat doet een waterschap?", onderwerp:"waterschappen",
    feit1:"Een waterschap houdt dijken en sluizen in de gaten",
    feit2:"Ook maken ze rioolwater weer schoon",
    oorzaak:"omdat een groot deel van Nederland laag ligt", gevolg:"is waterbeheer hier extra belangrijk",
    advies:"Gooi geen doekjes of vet in het toilet" },
  { titel:"Hoe een brug blijft staan", onderwerp:"bruggen",
    feit1:"Een boogbrug leidt het gewicht naar de zijkanten",
    feit2:"Bij een hangbrug hangt het wegdek aan dikke kabels",
    oorzaak:"omdat ijzer uitzet in de warmte", gevolg:"zitten er dilatatievoegen in het wegdek",
    advies:"Kijk eens naar de vorm van bruggen in je omgeving" },
  { titel:"Bijen en ons voedsel", onderwerp:"bijen",
    feit1:"Bijen brengen stuifmeel van de ene bloem naar de andere",
    feit2:"Daardoor groeien er vruchten aan de plant",
    oorzaak:"omdat er minder wilde bloemen zijn", gevolg:"hebben bijen het moeilijker",
    advies:"Zaai bloemen die het hele seizoen bloeien" },
  { titel:"Zo leest een computer letters", onderwerp:"computers",
    feit1:"Een computer werkt alleen met de cijfers nul en één",
    feit2:"Elke letter heeft een eigen rij van die cijfers",
    oorzaak:"omdat stroom aan of uit kan staan", gevolg:"passen twee cijfers precies bij die techniek",
    advies:"Probeer eens je naam in code te schrijven" }
];

/* ===================== verhaal bouwen ===================== */
function verhaal(niv, i){
  // echt willekeurig kiezen (met vaste seed) → veel meer unieke combinaties dan modulair rekenen
  const naam = pick(NAMEN), pl = pick(PLAATSEN), av = pick(AVONTUREN);
  const kort = niv <= 2;
  // Gevoel op het juiste moment: 'voor' de oplossing (bezorgd, geschrokken) of erna (trots, blij).
  const gevoelVoor = av.moment === "voor"
    ? `${naam} was ${av.gevoel} en wist even niet wat te doen. `
    : `${naam} wist even niet wat te doen. `;
  const gevoelNa = av.moment === "na"
    ? `Toen het gelukt was, voelde ${naam} zich ${av.gevoel}. `
    : "";
  // In een bijzin na 'doordat' staat het werkwoord achteraan — daarom av.bijzin, niet av.oorzaak.
  const tekst = kort
    ? `${naam} ${pl.zin}. Daar was ${av.probleem}. ${naam} was ${av.gevoel}. ${naam} ${av.oplossing}. Daarna ging het goed.`
    : `${naam} ${pl.zin}. Plotseling was daar ${av.probleem}. Dat kwam doordat ${av.bijzin}. `
      + gevoelVoor
      + `Na een tijdje bedacht ${naam} een plan: ${naam} ${av.oplossing}. `
      + gevoelNa
      + (niv >= 5
          ? `Achteraf vertelde ${naam} het thuis. Niet iedereen zou het zo hebben aangepakt, `
            + `maar het probleem was in ieder geval opgelost. `
          : "")
      + `${naam} liep tevreden naar huis.`;
  const vragen = [
    { vraag:`Waar gebeurt dit verhaal?`,
      opties: opties(pl.plek, PLAATSEN.map(p=>p.plek)), goed: pl.plek,
      uitleg:`In het verhaal staat dat ${naam} ${pl.zin}.` },
    { vraag:`Wat deed ${naam} om het op te lossen?`,
      opties: opties(av.oplossing, AVONTUREN.map(a=>a.oplossing)), goed: av.oplossing,
      uitleg:`${naam} ${av.oplossing}; daardoor kwam het goed.` },
    { vraag:`Hoe voelde ${naam} zich?`,
      opties: opties(av.gevoel, AVONTUREN.map(a=>a.gevoel)), goed: av.gevoel,
      uitleg:`In de tekst staat dat ${naam} zich ${av.gevoel} voelde.` }
  ];
  if(!kort){
    vragen.push({ vraag:`Waardoor kwam het probleem?`,
      opties: opties(av.oorzaak, AVONTUREN.map(a=>a.oorzaak)), goed: av.oorzaak,
      uitleg:`De tekst zegt: dat kwam doordat ${av.oorzaak}.` });
  }
  if(niv >= 4){
    vragen.push({ vraag:`Wat is de hoofdgedachte?`,
      opties: opties(av.les, AVONTUREN.map(a=>a.les)), goed: av.les,
      uitleg:`Het verhaal laat zien: ${av.les.toLowerCase()}.` });
  }
  // titel bevat ook waar het over gaat → veel meer unieke titels (naam × plek × avontuur)
  const kern = av.probleem.replace(/^een /,'').replace(/^de /,'');
  return { niveau:niv, titel:`${naam} ${pl.plek}: ${kern}`, tekst, vragen };
}

/* ===================== informatieve tekst bouwen ===================== */
function infotekst(niv, i){
  const o = pick(INFO);
  const tekst = `${o.feit1}. ${o.feit2}. Dat is niet altijd zo gebleven: ${o.oorzaak} `
    + `${o.gevolg}. Wie er iets aan wil doen, heeft één simpele stap: ${o.advies.toLowerCase()}.`;
  return {
    niveau: niv,
    titel: `${o.titel} (${niv === 5 ? 'uitleg' : 'verdieping'})`,
    tekst,
    vragen: [
      { vraag:`Wat lees je over ${o.onderwerp}?`,
        opties: opties(o.feit1, INFO.map(x=>x.feit1)), goed: o.feit1,
        uitleg:`Dit feit staat in de eerste zin van de tekst.` },
      { vraag:`Wat is het gevolg?`,
        opties: opties(o.gevolg, INFO.map(x=>x.gevolg)), goed: o.gevolg,
        uitleg:`De tekst legt uit dat hierdoor ${o.gevolg}.` },
      { vraag:`Wat is de oorzaak?`,
        opties: opties(o.oorzaak, INFO.map(x=>x.oorzaak)), goed: o.oorzaak,
        uitleg:`In de tekst staat: ${o.oorzaak}.` },
      { vraag:`Wat raadt de schrijver aan?`,
        opties: opties(o.advies, INFO.map(x=>x.advies)), goed: o.advies,
        uitleg:`De laatste zin geeft dit advies.` }
    ]
  };
}

/* ===================== genereren ===================== */
const bestaand = require('./data/lezen.js');
const titels = new Set(bestaand.map(v => v.titel));
const PER_NIVEAU = 30;
const nieuw = [];
for(let niv = 1; niv <= 6; niv++){
  let gemaakt = 0, poging = 0;
  while(gemaakt < PER_NIVEAU && poging < 400){
    poging++;
    // bovenbouw krijgt een mix van verhalend en informatief; onderbouw alleen verhalend
    const infoKans = niv === 6 ? 0.75 : niv === 5 ? 0.65 : niv === 4 ? 0.4 : 0;
    const v = (rnd() < infoKans) ? infotekst(niv, poging) : verhaal(niv, poging);
    if(titels.has(v.titel)) continue;
    // controleer de testregels: 'goed' uniek in opties, uitleg aanwezig
    const geldig = v.vragen.every(q =>
      q.opties.filter(o => o === q.goed).length === 1 && q.uitleg && q.uitleg.length > 5);
    if(!geldig) continue;
    titels.add(v.titel); nieuw.push(v); gemaakt++;
  }
  if(gemaakt < PER_NIVEAU) console.error('  let op: niveau ' + niv + ' kreeg maar ' + gemaakt + ' teksten');
}
const totaal = bestaand.concat(nieuw);
fs.writeFileSync(D('lezen.js'), readHeader('lezen.js') + '\n\nvar LEZEN = '
  + JSON.stringify(totaal, null, 2) + ';\nif (typeof module !== \'undefined\') module.exports = LEZEN;\n');
const per = {}; totaal.forEach(v => per[v.niveau] = (per[v.niveau]||0)+1);
console.error('lezen:', bestaand.length, '→', totaal.length,
  '· per groep 3..8: ' + [1,2,3,4,5,6].map(n => per[n]||0).join('/'));
