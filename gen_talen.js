// gen_talen.js — breidt de woordenschat voor Talen (NL/EN/ES) en Fotomemory sterk uit,
// verdeeld over groep 3 t/m 8 (niveau 1..6). Elk item: nl, en, es, plaatje (emoji), niveau.
// Woorden zijn per groep gekozen: concreet en dagelijks in de onderbouw, abstracter en
// schooltaal in de bovenbouw. Draaien:  node gen_talen.js   (bestaande items blijven staan)
"use strict";
const fs = require('fs'), path = require('path');
const D = f => path.join(__dirname, 'data', f);
function readHeader(file){ const t = fs.readFileSync(D(file),'utf8'); const i = t.indexOf('\nvar '); return t.slice(0,i).replace(/\s+$/,''); }
function write(file, varname, arr){
  fs.writeFileSync(D(file), readHeader(file)+'\n\nvar '+varname+' = '+JSON.stringify(arr,null,2)
    +';\nif (typeof module !== \'undefined\') module.exports = '+varname+';\n');
}

/* [nl, en, es, emoji, niveau] — niveau 1=groep 3 … 6=groep 8 */
const W = [
  // ---------- niveau 1 · groep 3: dagelijkse, concrete woorden ----------
  ["bed","bed","cama","🛏️",1],            ["stoel","chair","silla","🪑",1],
  ["tafel","table","mesa","🪑",1],         ["deur","door","puerta","🚪",1],
  ["raam","window","ventana","🪟",1],      ["lamp","lamp","lámpara","💡",1],
  ["bal","ball","pelota","⚽",1],           ["pop","doll","muñeca","🧸",1],
  ["beker","cup","taza","🥤",1],           ["bord","plate","plato","🍽️",1],
  ["mes","knife","cuchillo","🔪",1],       ["vork","fork","tenedor","🍴",1],
  ["schoen","shoe","zapato","👟",1],       ["jas","coat","abrigo","🧥",1],
  ["sok","sock","calcetín","🧦",1],        ["muts","hat","gorro","🧢",1],
  ["hond","dog","perro","🐶",1],           ["kat","cat","gato","🐱",1],
  ["vis","fish","pez","🐟",1],             ["vogel","bird","pájaro","🐦",1],
  ["appel","apple","manzana","🍎",1],      ["banaan","banana","plátano","🍌",1],
  ["brood","bread","pan","🍞",1],          ["melk","milk","leche","🥛",1],
  ["water","water","agua","💧",1],         ["zon","sun","sol","☀️",1],
  ["maan","moon","luna","🌙",1],           ["boom","tree","árbol","🌳",1],
  ["bloem","flower","flor","🌸",1],        ["huis","house","casa","🏠",1],

  // ---------- niveau 2 · groep 4: school, spelen, eten ----------
  ["boek","book","libro","📖",2],          ["schrift","notebook","cuaderno","📒",2],
  ["potlood","pencil","lápiz","✏️",2],     ["gum","eraser","goma","🧽",2],
  ["schaar","scissors","tijeras","✂️",2],  ["lijm","glue","pegamento","🧴",2],
  ["rugzak","backpack","mochila","🎒",2],  ["klok","clock","reloj","🕐",2],
  ["fiets","bike","bicicleta","🚲",2],     ["bus","bus","autobús","🚌",2],
  ["trein","train","tren","🚆",2],         ["auto","car","coche","🚗",2],
  ["boot","boat","barco","⛵",2],          ["vliegtuig","plane","avión","✈️",2],
  ["kaas","cheese","queso","🧀",2],        ["ei","egg","huevo","🥚",2],
  ["soep","soup","sopa","🍲",2],           ["rijst","rice","arroz","🍚",2],
  ["koek","cookie","galleta","🍪",2],      ["snoep","candy","dulce","🍬",2],
  ["taart","cake","pastel","🍰",2],        ["ijs","ice cream","helado","🍦",2],
  ["kip","chicken","pollo","🐔",2],        ["koe","cow","vaca","🐮",2],
  ["varken","pig","cerdo","🐷",2],         ["schaap","sheep","oveja","🐑",2],
  ["paard","horse","caballo","🐴",2],      ["kikker","frog","rana","🐸",2],
  ["bij","bee","abeja","🐝",2],            ["vlinder","butterfly","mariposa","🦋",2],

  // ---------- niveau 3 · groep 5: lichaam, weer, stad ----------
  ["hoofd","head","cabeza","🧠",3],        ["hand","hand","mano","✋",3],
  ["voet","foot","pie","🦶",3],            ["oog","eye","ojo","👁️",3],
  ["oor","ear","oreja","👂",3],            ["tand","tooth","diente","🦷",3],
  ["hart","heart","corazón","❤️",3],       ["bot","bone","hueso","🦴",3],
  ["regen","rain","lluvia","🌧️",3],       ["sneeuw","snow","nieve","❄️",3],
  ["wind","wind","viento","🌬️",3],        ["wolk","cloud","nube","☁️",3],
  ["storm","storm","tormenta","🌩️",3],    ["regenboog","rainbow","arcoíris","🌈",3],
  ["winkel","shop","tienda","🏪",3],       ["school","school","escuela","🏫",3],
  ["kerk","church","iglesia","⛪",3],      ["park","park","parque","🏞️",3],
  ["straat","street","calle","🛣️",3],     ["brug","bridge","puente","🌉",3],
  ["sleutel","key","llave","🔑",3],        ["kaart","map","mapa","🗺️",3],
  ["geld","money","dinero","💰",3],        ["brief","letter","carta","✉️",3],
  ["cadeau","gift","regalo","🎁",3],       ["ballon","balloon","globo","🎈",3],
  ["muziek","music","música","🎵",3],      ["gitaar","guitar","guitarra","🎸",3],
  ["voetbal","football","fútbol","⚽",3],  ["zwemmen","swimming","natación","🏊",3],

  // ---------- niveau 4 · groep 6: beroepen, gebouwen, natuur ----------
  ["dokter","doctor","médico","🩺",4],     ["verpleger","nurse","enfermero","💉",4],
  ["politie","police","policía","🚓",4],   ["brandweer","fire brigade","bomberos","🚒",4],
  ["bakker","baker","panadero","🥖",4],    ["boer","farmer","granjero","🚜",4],
  ["kok","cook","cocinero","👨‍🍳",4],       ["leraar","teacher","maestro","🧑‍🏫",4],
  ["ziekenhuis","hospital","hospital","🏥",4], ["museum","museum","museo","🏛️",4],
  ["fabriek","factory","fábrica","🏭",4],  ["station","station","estación","🚉",4],
  ["vliegveld","airport","aeropuerto","🛫",4], ["haven","harbour","puerto","⚓",4],
  ["berg","mountain","montaña","⛰️",4],    ["rivier","river","río","🏞️",4],
  ["bos","forest","bosque","🌲",4],        ["woestijn","desert","desierto","🏜️",4],
  ["eiland","island","isla","🏝️",4],      ["vulkaan","volcano","volcán","🌋",4],
  ["dolfijn","dolphin","delfín","🐬",4],   ["haai","shark","tiburón","🦈",4],
  ["adelaar","eagle","águila","🦅",4],     ["olifant","elephant","elefante","🐘",4],
  ["kameel","camel","camello","🐫",4],     ["pinguïn","penguin","pingüino","🐧",4],
  ["ladder","ladder","escalera","🪜",4],   ["emmer","bucket","cubo","🪣",4],
  ["zaklamp","torch","linterna","🔦",4],   ["weegschaal","scale","balanza","⚖️",4],

  // ---------- niveau 5 · groep 7: techniek, gezondheid, samenleving ----------
  ["computer","computer","ordenador","💻",5], ["telefoon","phone","teléfono","📱",5],
  ["camera","camera","cámara","📷",5],     ["batterij","battery","batería","🔋",5],
  ["magneet","magnet","imán","🧲",5],      ["motor","engine","motor","🏍️",5],
  ["gereedschap","tools","herramientas","🛠️",5], ["schroef","screw","tornillo","🔩",5],
  ["ambulance","ambulance","ambulancia","🚑",5], ["medicijn","medicine","medicina","💊",5],
  ["thermometer","thermometer","termómetro","🌡️",5], ["verband","bandage","vendaje","🩹",5],
  ["vitamine","vitamin","vitamina","🥗",5], ["energie","energy","energía","⚡",5],
  ["bibliotheek","library","biblioteca","📚",5], ["theater","theatre","teatro","🎭",5],
  ["restaurant","restaurant","restaurante","🍽️",5], ["hotel","hotel","hotel","🏨",5],
  ["markt","market","mercado","🏪",5],     ["bank","bank","banco","🏦",5],
  ["krant","newspaper","periódico","📰",5], ["postbode","postman","cartero","📮",5],
  ["vlag","flag","bandera","🚩",5],        ["kroon","crown","corona","👑",5],
  ["medaille","medal","medalla","🏅",5],   ["beker","trophy","trofeo","🏆",5],
  ["vuurtoren","lighthouse","faro","🗼",5], ["windmolen","windmill","molino","🌬️",5],
  ["satelliet","satellite","satélite","🛰️",5], ["raket","rocket","cohete","🚀",5],

  // ---------- niveau 6 · groep 8: wetenschap, abstract, aardrijkskunde ----------
  ["wetenschap","science","ciencia","🔬",6], ["microscoop","microscope","microscopio","🔬",6],
  ["telescoop","telescope","telescopio","🔭",6], ["laboratorium","laboratory","laboratorio","🧪",6],
  ["experiment","experiment","experimento","⚗️",6], ["atoom","atom","átomo","⚛️",6],
  ["planeet","planet","planeta","🪐",6],   ["heelal","universe","universo","🌌",6],
  ["zwaartekracht","gravity","gravedad","🍎",6], ["temperatuur","temperature","temperatura","🌡️",6],
  ["elektriciteit","electricity","electricidad","🔌",6], ["tandwiel","gear","engranaje","⚙️",6],
  ["robot","robot","robot","🤖",6],        ["technologie","technology","tecnología","🖥️",6],
  ["geschiedenis","history","historia","📜",6], ["aardrijkskunde","geography","geografía","🌍",6],
  ["wereldbol","globe","globo","🌍",6],    ["kompas","compass","brújula","🧭",6],
  ["grens","border","frontera","🛂",6],    ["hoofdstad","capital","capital","🏙️",6],
  ["bevolking","population","población","👥",6], ["verkiezing","election","elección","🗳️",6],
  ["milieu","environment","medio ambiente","♻️",6], ["klimaat","climate","clima","🌦️",6],
  ["landbouw","agriculture","agricultura","🌾",6], ["industrie","industry","industria","🏭",6],
  ["handel","trade","comercio","📦",6],    ["vervoer","transport","transporte","🚚",6],
  ["gletsjer","glacier","glaciar","🧊",6], ["aardbeving","earthquake","terremoto","🌎",6],
  // extra groep 8 — concreet en met een eigen, uniek plaatje (na de opschoonronde)
  ["komeet","comet","cometa","☄️",6],       ["astronaut","astronaut","astronauta","🧑‍🚀",6],
  ["ruimteschip","spaceship","nave","🛸",6], ["skelet","skeleton","esqueleto","💀",6],
  ["kameleon","chameleon","camaleón","🦎",6], ["kwal","jellyfish","medusa","🪼",6],
  ["orkaan","hurricane","huracán","🌀",6],   ["krokodil","crocodile","cocodrilo","🐊",6],
  ["schorpioen","scorpion","escorpión","🦂",6], ["spin","spider","araña","🕷️",6],
  ["zandloper","hourglass","reloj de arena","⌛",6], ["brandblusser","extinguisher","extintor","🧯",6],
  ["diamant","diamond","diamante","💎",6],   ["virus","virus","virus","🦠",6],
  ["röntgenfoto","x-ray","radiografía","🩻",6], ["ketting","chain","cadena","⛓️",6],
  ["piano","piano","piano","🎹",6],          ["wol","wool","lana","🧶",6]
];

/* ---------- talen.js ---------- */
{
  const bestaand = require('./data/talen.js');
  const have = new Set(bestaand.map(t => t.nl));
  const nieuw = [];
  W.forEach(([nl,en,es,em,niv]) => {
    if(have.has(nl)) return;
    have.add(nl);
    nieuw.push({ nl, en, es, plaatje:em, niveau:niv });
  });
  const totaal = bestaand.concat(nieuw);
  write('talen.js','TALEN',totaal);
  const per = {}; totaal.forEach(t => per[t.niveau] = (per[t.niveau]||0)+1);
  console.error('talen:', bestaand.length, '→', totaal.length,
    '· per groep 3..8: ' + [1,2,3,4,5,6].map(n => per[n]||0).join('/'));
}

/* ---------- memory.js (zelfde woordenschat, plaatje ↔ woord) ---------- */
{
  const bestaand = require('./data/memory.js');
  const have = new Set(bestaand.map(m => m.w));
  const nieuw = [];
  W.forEach(([nl,,,em,niv]) => {
    if(have.has(nl)) return;
    have.add(nl);
    nieuw.push({ w:nl, plaatje:em, niveau:niv });
  });
  const totaal = bestaand.concat(nieuw);
  write('memory.js','MEMORY',totaal);
  const per = {}; totaal.forEach(m => per[m.niveau] = (per[m.niveau]||0)+1);
  console.error('memory:', bestaand.length, '→', totaal.length,
    '· per groep 3..8: ' + [1,2,3,4,5,6].map(n => per[n]||0).join('/'));
}
