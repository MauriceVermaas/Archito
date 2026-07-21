// gen_content.js — breidt de leerstof uit naar ~4×. Genereert/cureert extra content
// en voegt die toe aan de bestaande data-bestanden. Alles blijft valide t.o.v. tests/test.js.
// Draaien:  node gen_content.js
const fs=require('fs'), path=require('path');
const D=f=>path.join(__dirname,'data',f);
function readHeader(file){ const t=fs.readFileSync(D(file),'utf8'); const i=t.indexOf('\nvar '); return t.slice(0,i).replace(/\s+$/,''); }
function writeArray(file, varname, arr){ fs.writeFileSync(D(file), readHeader(file)+'\n\nvar '+varname+' = '+JSON.stringify(arr,null,2)+';\nif (typeof module !== \'undefined\') module.exports = '+varname+';\n'); }

// seeded RNG voor reproduceerbaarheid
let _s=987654321; function rnd(){ _s=(_s*1103515245+12345)&0x7fffffff; return _s/0x7fffffff; }
function pick(a){ return a[Math.floor(rnd()*a.length)]; }
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(rnd()*(i+1)); const t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
function uniqBy(arr, keyfn){ const seen=new Set(), out=[]; for(const x of arr){ const k=keyfn(x); if(!seen.has(k)){ seen.add(k); out.push(x); } } return out; }

/* ===================== gedeelde woordenschat (nl,en,es,emoji,niveau) ===================== */
const VOCAB=[
 // dieren
 ["kat","cat","gato","🐱",1],["hond","dog","perro","🐶",1],["vis","fish","pez","🐟",1],["koe","cow","vaca","🐮",1],
 ["paard","horse","caballo","🐴",1],["schaap","sheep","oveja","🐑",2],["varken","pig","cerdo","🐷",1],["kip","chicken","gallina","🐔",1],
 ["eend","duck","pato","🦆",1],["konijn","rabbit","conejo","🐰",1],["muis","mouse","ratón","🐭",1],["beer","bear","oso","🐻",2],
 ["leeuw","lion","león","🦁",2],["tijger","tiger","tigre","🐯",2],["olifant","elephant","elefante","🐘",2],["aap","monkey","mono","🐵",2],
 ["giraf","giraffe","jirafa","🦒",3],["zebra","zebra","cebra","🦓",3],["slang","snake","serpiente","🐍",2],["kikker","frog","rana","🐸",1],
 ["schildpad","turtle","tortuga","🐢",2],["vlinder","butterfly","mariposa","🦋",2],["bij","bee","abeja","🐝",2],["mier","ant","hormiga","🐜",2],
 ["vogel","bird","pájaro","🐦",1],["uil","owl","búho","🦉",2],["pinguin","penguin","pingüino","🐧",2],["dolfijn","dolphin","delfín","🐬",2],
 ["walvis","whale","ballena","🐋",3],["haai","shark","tiburón","🦈",3],["krab","crab","cangrejo","🦀",2],["octopus","octopus","pulpo","🐙",3],
 ["vos","fox","zorro","🦊",2],["wolf","wolf","lobo","🐺",2],["hert","deer","ciervo","🦌",3],["slak","snail","caracol","🐌",2],
 ["kameel","camel","camello","🐫",3],["poes","kitten","gatito","🐈",1],["hamster","hamster","hámster","🐹",2],["kalkoen","turkey","pavo","🦃",3],
 // eten
 ["appel","apple","manzana","🍎",1],["banaan","banana","plátano","🍌",1],["druiven","grapes","uvas","🍇",1],["sinaasappel","orange","naranja","🍊",2],
 ["aardbei","strawberry","fresa","🍓",2],["citroen","lemon","limón","🍋",2],["kers","cherry","cereza","🍒",2],["peer","pear","pera","🍐",2],
 ["meloen","melon","melón","🍉",3],["ananas","pineapple","piña","🍍",3],["perzik","peach","durazno","🍑",3],["brood","bread","pan","🍞",1],
 ["kaas","cheese","queso","🧀",1],["ei","egg","huevo","🥚",1],["melk","milk","leche","🥛",1],["taart","cake","pastel","🍰",2],
 ["koekje","cookie","galleta","🍪",2],["ijs","ice cream","helado","🍦",1],["snoep","candy","dulce","🍬",2],["chocola","chocolate","chocolate","🍫",2],
 ["pizza","pizza","pizza","🍕",1],["wortel","carrot","zanahoria","🥕",2],["tomaat","tomato","tomate","🍅",1],["mais","corn","maíz","🌽",2],
 ["champignon","mushroom","champiñón","🍄",2],["broccoli","broccoli","brócoli","🥦",3],["aardappel","potato","papa","🥔",2],["druif","grape","uva","🍇",2],
 ["hamburger","hamburger","hamburguesa","🍔",2],["frietjes","fries","papas fritas","🍟",2],["appelsap","juice","jugo","🧃",2],["honing","honey","miel","🍯",3],
 // natuur
 ["zon","sun","sol","☀️",1],["maan","moon","luna","🌙",1],["ster","star","estrella","⭐",1],["wolk","cloud","nube","☁️",1],
 ["regen","rain","lluvia","🌧️",2],["sneeuw","snow","nieve","❄️",2],["boom","tree","árbol","🌳",1],["bloem","flower","flor","🌸",1],
 ["blad","leaf","hoja","🍃",2],["gras","grass","hierba","🌱",2],["berg","mountain","montaña","⛰️",3],["vuur","fire","fuego","🔥",2],
 ["water","water","agua","💧",1],["regenboog","rainbow","arcoíris","🌈",2],["cactus","cactus","cactus","🌵",3],["palmboom","palm","palmera","🌴",3],
 ["bliksem","lightning","rayo","⚡",3],["druppel","drop","gota","💧",2],["schelp","shell","concha","🐚",3],["vulkaan","volcano","volcán","🌋",3],
 // huis & dingen
 ["huis","house","casa","🏠",1],["deur","door","puerta","🚪",1],["raam","window","ventana","🪟",2],["stoel","chair","silla","🪑",2],
 ["bed","bed","cama","🛏️",1],["bank","couch","sofá","🛋️",2],["lamp","lamp","lámpara","💡",2],["klok","clock","reloj","🕐",2],
 ["sleutel","key","llave","🔑",2],["boek","book","libro","📖",1],["pen","pen","bolígrafo","🖊️",2],["schaar","scissors","tijeras","✂️",2],
 ["tas","bag","bolsa","👜",2],["bal","ball","pelota","⚽",1],["ballon","balloon","globo","🎈",1],["cadeau","gift","regalo","🎁",1],
 ["paraplu","umbrella","paraguas","☂️",2],["bril","glasses","gafas","👓",2],["hoed","hat","sombrero","👒",2],["schoen","shoe","zapato","👟",1],
 ["sok","sock","calcetín","🧦",2],["jas","coat","abrigo","🧥",2],["shirt","shirt","camisa","👕",1],["broek","pants","pantalón","👖",2],
 ["telefoon","phone","teléfono","📱",2],["camera","camera","cámara","📷",2],["potlood","pencil","lápiz","✏️",1],["kroon","crown","corona","👑",2],
 ["paraplu2","","","",0], // placeholder wordt eruit gefilterd
 // voertuigen
 ["auto","car","coche","🚗",1],["bus","bus","autobús","🚌",1],["trein","train","tren","🚆",2],["fiets","bike","bicicleta","🚲",1],
 ["boot","boat","barco","⛵",2],["vliegtuig","airplane","avión","✈️",2],["raket","rocket","cohete","🚀",2],["tractor","tractor","tractor","🚜",3],
 ["brandweer","fire truck","bombero","🚒",3],["politie","police car","policía","🚓",3],["helikopter","helicopter","helicóptero","🚁",3],["motor","motorbike","moto","🏍️",3],
 // lichaam & mensen
 ["hand","hand","mano","✋",1],["voet","foot","pie","🦶",2],["oog","eye","ojo","👁️",1],["oor","ear","oreja","👂",2],
 ["neus","nose","nariz","👃",2],["mond","mouth","boca","👄",2],["tand","tooth","diente","🦷",2],["hart","heart","corazón","❤️",1],
 ["baby","baby","bebé","👶",1],["jongen","boy","niño","👦",1],["meisje","girl","niña","👧",1],["oma","grandma","abuela","👵",2],
 ["opa","grandpa","abuelo","👴",2],["mama","mom","mamá","👩",1],["papa","dad","papá","👨",1],
 // kleuren
 ["rood","red","rojo","🔴",1],["blauw","blue","azul","🔵",1],["geel","yellow","amarillo","🟡",1],["groen","green","verde","🟢",1],
 ["paars","purple","morado","🟣",2],["oranje","orange","naranja","🟠",2],["zwart","black","negro","⚫",2],["wit","white","blanco","⚪",2],
 // sport/spel
 ["voetbal","soccer","fútbol","⚽",2],["muziek","music","música","🎵",2],["gitaar","guitar","guitarra","🎸",3],["trommel","drum","tambor","🥁",3],
 ["vlieger","kite","cometa","🪁",3],["blokje","block","bloque","🧱",1],["puzzel","puzzle","rompecabezas","🧩",2],["robot","robot","robot","🤖",2],
 // extra woordenschat
 ["draak","dragon","dragón","🐉",2],["dinosaurus","dinosaur","dinosaurio","🦕",2],["eenhoorn","unicorn","unicornio","🦄",2],["spook","ghost","fantasma","👻",2],
 ["worm","worm","gusano","🪱",2],["worst","sausage","salchicha","🌭",2],["popcorn","popcorn","palomitas","🍿",2],["donut","donut","dona","🍩",2],
 ["kerstboom","christmas tree","árbol de navidad","🎄",2],["sneeuwpop","snowman","muñeco de nieve","⛄",2],["kaars","candle","vela","🕯️",2],["tent","tent","tienda","⛺",2],
 ["ski","ski","esquí","🎿",3],["anker","anchor","ancla","⚓",3],["kompas","compass","brújula","🧭",3],["viool","violin","violín","🎻",3],
 ["trompet","trumpet","trompeta","🎺",3],["microfoon","microphone","micrófono","🎤",3],["koptelefoon","headphones","auriculares","🎧",3],["parachute","parachute","paracaídas","🪂",3]
];
const vocab=VOCAB.filter(v=>v[0]&&v[3]).map(v=>({nl:v[0].replace(/\d+$/,''),en:v[1],es:v[2],em:v[3],niv:v[4]}));

/* ===================== TALEN (naar ~180) ===================== */
{
  const bestaand=require('./data/talen.js');
  const have=new Set(bestaand.map(t=>t.nl));
  const nieuw=[];
  vocab.forEach(v=>{ if(v.en&&v.es&&!have.has(v.nl)){ have.add(v.nl); nieuw.push({nl:v.nl,en:v.en,es:v.es,plaatje:v.em,niveau:v.niv}); } });
  const totaal=bestaand.concat(nieuw);
  writeArray('talen.js','TALEN',totaal);
  console.error('talen:',bestaand.length,'→',totaal.length);
}

/* ===================== MEMORY (naar ~96) ===================== */
{
  const bestaand=require('./data/memory.js');
  const have=new Set(bestaand.map(m=>m.w));
  const nieuw=[];
  vocab.forEach(v=>{ if(!have.has(v.nl)){ have.add(v.nl); nieuw.push({w:v.nl,plaatje:v.em,niveau:v.niv}); } });
  const totaal=bestaand.concat(nieuw);
  writeArray('memory.js','MEMORY',totaal);
  console.error('memory:',bestaand.length,'→',totaal.length);
}

/* ===================== WOORDEN (naar ~264) ===================== */
{
  const V='aeiouy';
  function splitDelen(w){ let ch=[],i=0,n=w.length;
    while(i<n){ let s=i; while(i<n&&V.indexOf(w[i])<0)i++; while(i<n&&V.indexOf(w[i])>=0)i++; ch.push(w.slice(s,i)); }
    if(ch.length>1){ const l=ch[ch.length-1]; if(![...l].some(c=>V.indexOf(c)>=0)){ ch[ch.length-2]+=ch.pop(); } }
    return ch.join('')===w?ch:[w];
  }
  function instinker(w){ const pool='bdfghjklmnprstvwz'.split('').filter(c=>w.indexOf(c)<0); const off=w.length%pool.length; return [pool[off],pool[(off+3)%pool.length]]; }
  const EXTRA='vlag stoel tafel raam trap muur straat plein tuin schuur zolder kelder gang keuken bad douche spiegel kast la mand emmer bezem doek zeep kam borstel handdoek jas laars muts want sjaal knoop rits zak riem veter hemd rok jurk trui vest slof pantoffel'.split(' ')
    .concat('school juf meester bord krijt schrift gum liniaal rugzak koffie thee suiker zout peper boter jam hagelslag beschuit cracker soep saus rijst pasta patat sla komkommer paprika ui knoflook prei spinazie erwt boon linze'.split(' '))
    .concat('strand zee golf zand duin schelp kwal krab garnaal vuurtoren pier haven anker net vloot kapitein matroos vlot roeiboot zeil mast kade sluis brug'.split(' '));
  const woordenPool=uniqBy(vocab.map(v=>({w:v.nl,niveau:v.niv})).concat(EXTRA.map((w,i)=>({w:w,niveau:1+(i%3)}))), x=>x.w)
    .filter(o=>/^[a-z]+$/.test(o.w));
  const bestaand=require('./data/woorden.js');
  const have=new Set(bestaand.map(x=>x.w));
  const nieuw=[];
  woordenPool.forEach(o=>{ if(!have.has(o.w) && o.w.length>=3){ have.add(o.w); nieuw.push({w:o.w, delen:splitDelen(o.w), extra:instinker(o.w), niveau:o.niveau}); } });
  const totaal=bestaand.concat(nieuw);
  writeArray('woorden.js','WOORDEN',totaal);
  console.error('woorden:',bestaand.length,'→',totaal.length);
}

/* ===================== FLITSWOORDEN (naar ~144) ===================== */
{
  const CONF={a:'o',o:'a',e:'o',i:'l',u:'v',n:'m',m:'n',b:'d',d:'b',p:'q',q:'p',g:'q',h:'k',k:'h',v:'w',w:'v',s:'z',z:'s',r:'n',t:'f',f:'t',l:'i',c:'e'};
  function look(w){ const alts=new Set(); const pos=shuffle([...Array(w.length).keys()]);
    for(const p of pos){ const c=w[p]; const r=CONF[c]||pick('aeioumnrst'.split('').filter(x=>x!==c)); const v=w.slice(0,p)+r+w.slice(p+1);
      if(v!==w && v.indexOf(w)<0){ alts.add(v); } if(alts.size>=2) break; }
    if(alts.size<2){ // fallback: verwissel twee letters
      for(let p=0;p<w.length-1;p++){ const v=w.slice(0,p)+w[p+1]+w[p]+w.slice(p+2); if(v!==w&&v.indexOf(w)<0){ alts.add(v); if(alts.size>=2) break; } }
    }
    return [...alts].slice(0,2);
  }
  delete require.cache[require.resolve('./data/woorden.js')];  // lees de zojuist uitgebreide woordenlijst
  const woorden=require('./data/woorden.js');
  const bestaand=require('./data/flitswoorden.js');
  const have=new Set(bestaand.map(f=>f.w));
  const kandidaten=uniqBy(woorden.filter(w=>/^[a-z]+$/.test(w.w)&&w.w.length>=3&&w.w.length<=7), o=>o.w);
  const nieuw=[];
  for(const o of kandidaten){ if(have.has(o.w)) continue; const alt=look(o.w); if(alt.length===2 && alt[0]!==alt[1]){ have.add(o.w); nieuw.push({w:o.w, alt:alt, niveau:o.niveau}); } }
  const totaal=bestaand.concat(nieuw);
  writeArray('flitswoorden.js','FLITSWOORDEN',totaal);
  console.error('flitswoorden:',bestaand.length,'→',totaal.length);
}

/* ===================== DENKEN (tekst, naar ~160) via templates ===================== */
{
  _s=555;  // deterministisch, onafhankelijk van eerdere blokken
  const bestaand=require('./data/denken.js');
  const gen=[];
  // reeksen
  [2,3,4,5,10].forEach(d=>{ for(let s=1;s<=12;s++){ const seq=[s,s+d,s+2*d,s+3*d]; const goed=s+4*d;
    const opties=shuffle([String(goed),String(goed+d),String(goed-1)]);
    const niv = goed<=25?1:goed<=100?2:3;
    gen.push({soort:"patroon",vraag:"Welk getal komt hierna? "+seq.join(", ")+", ...",opties:opties,goed:String(goed),uitleg:"Er komt telkens "+d+" bij. "+(s+3*d)+" + "+d+" = "+goed+".",niveau:niv}); } });
  // tellen terug
  [2,5,10].forEach(d=>{ for(let s=1;s<=6;s++){ const start=s*d+4*d; const seq=[start,start-d,start-2*d,start-3*d]; const goed=start-4*d; if(goed<0) continue;
    gen.push({soort:"patroon",vraag:"Welk getal komt hierna? "+seq.join(", ")+", ...",opties:shuffle([String(goed),String(goed+1),String(Math.max(0,goed-d))]).filter((v,i,a)=>a.indexOf(v)===i),goed:String(goed),uitleg:"Er gaat telkens "+d+" af. "+(start-3*d)+" − "+d+" = "+goed+".",niveau:d===10?2:2}); } });
  // logica: lengte/leeftijd
  const namen=["Sam","Bo","Tim","Anna","Ben","Cas","Lot","Pim","Noa","Fee","Roos","Daan","Mila","Sem","Liv"];
  const relaties=[["langer","kortst","is groter dan"],["ouder","jongst","is ouder dan"],["sneller","langzaamst","is sneller dan"]];
  for(let i=0;i<24;i++){ const g=shuffle(namen).slice(0,3); const r=relaties[i%3];
    gen.push({soort:"logica",vraag:g[0]+" "+r[2]+" "+g[1]+". "+g[1]+" "+r[2]+" "+g[2]+". Wie is het "+r[1]+"?",opties:shuffle([g[0],g[1],g[2]]),goed:g[2],uitleg:g[0]+" > "+g[1]+" > "+g[2]+". "+g[2]+" staat onderaan, dus die is het "+r[1]+".",niveau:i<9?2:3}); }
  // klopt-niet met 'alle'
  const cat=[["honden","bruin","zwarte en witte honden"],["vogels","kunnen vliegen","een pinguïn kan niet vliegen"],["vissen","zijn groot","er zijn ook kleine visjes"],["bloemen","zijn rood","er zijn ook gele en blauwe bloemen"],["appels","zijn zoet","sommige appels zijn zuur"],["auto's","zijn snel","sommige auto's rijden langzaam"]];
  cat.forEach((c,i)=>{ gen.push({soort:"klopt-niet",vraag:"Welke zin klopt NIET?",opties:shuffle(["Sommige "+c[0]+" "+(c[1].startsWith("kun")?c[1]:"zijn "+c[1].replace(/^zijn /,'')),"Alle "+c[0]+" "+(c[1].startsWith("kun")?c[1]:c[1]),c[0][0].toUpperCase()+c[0].slice(1)+" bestaan"]),goed:"Alle "+c[0]+" "+(c[1].startsWith("kun")?c[1]:c[1]),uitleg:"'Alle' is te sterk: "+c[2]+".",niveau:3}); });
  const totaal=uniqBy(bestaand.concat(gen), d=>d.vraag+"|"+d.goed);
  writeArray('denken.js','DENKEN',totaal);
  console.error('denken:',bestaand.length,'→',totaal.length);
}

/* ===================== BEELDDENKEN (visueel, naar ~136) via templates ===================== */
{
  _s=777;
  const bestaand=require('./data/beelddenken.js');
  const cats={ dier:["🐶","🐱","🐰","🐭","🐸","🐮","🐷","🐔","🦊","🐻","🦁","🐯"], fruit:["🍎","🍌","🍇","🍓","🍒","🍐","🍊","🍉","🍑","🍍"],
    voertuig:["🚗","🚌","🚂","🚲","✈️","⛵","🚀","🚚"], vorm:["🔴","🔵","🟢","🟡","🟣","🟠","🔺","🟦","🟨","⬛"], natuur:["🌳","🌸","🌵","🌴","🍃","🌻","🌷"] };
  const namen=Object.keys(cats); const gen=[];
  // anders
  for(let i=0;i<44;i++){ const a=namen[i%namen.length]; let b=pick(namen.filter(x=>x!==a));
    const drie=shuffle(cats[a]).slice(0,3); const odd=pick(cats[b].filter(x=>drie.indexOf(x)<0));
    if(!odd||drie.indexOf(odd)>=0) continue; const opties=shuffle(drie.concat([odd]));
    gen.push({soort:"anders",opdracht:"Welke hoort er niet bij?",opties:opties,goed:odd,uitleg:"Drie horen bij elkaar; die ene is anders.",niveau:1+(i%3)}); }
  // reeks (AB-patroon)
  for(let i=0;i<30;i++){ const pool=cats[pick(namen)]; const x=pick(pool); let y=pick(pool.filter(p=>p!==x)); if(!y) continue;
    const toon=[x,y,x,y,"❓"]; let z=pick(pool.filter(p=>p!==x&&p!==y))||y;
    gen.push({soort:"reeks",opdracht:"Wat komt hierna?",toon:toon,opties:shuffle([x,y,z].filter((v,idx,arr)=>arr.indexOf(v)===idx)),goed:x,uitleg:"Het patroon wisselt af. Na "+y+" komt weer "+x+".",niveau:1+(i%3)}); }
  // zelfde
  for(let i=0;i<30;i++){ const pool=cats[pick(namen)]; const x=pick(pool); const anderen=shuffle(pool.filter(p=>p!==x)).slice(0,2); if(anderen.length<2) continue;
    gen.push({soort:"zelfde",opdracht:"Zoek precies dezelfde.",toon:[x],opties:shuffle([x].concat(anderen)),goed:x,uitleg:"Dit beeld is precies hetzelfde als bovenaan.",niveau:1+(i%3)}); }
  const totaal=uniqBy(bestaand.concat(gen), p=>p.soort+"|"+(p.toon||[]).join("")+"|"+p.opties.join("")+"|"+p.goed);
  writeArray('beelddenken.js','BEELD_DENKEN',totaal);
  console.error('beelddenken:',bestaand.length,'→',totaal.length);
}

/* ===================== BEELDLAB (naar 4×) via templates ===================== */
{
  _s=333;
  const bl=require('./data/beeldlab.js');
  // sorteer: gecureerde geordende reeksen (klein→groot / weinig→veel / volgorde)
  const ordSets=[["🐜","🐭","🐕","🐘"],["🌱","🌿","🌳"],["🌑","🌓","🌕"],["🐣","🐤","🐔"],["🥚","🐛","🦋"],["🦐","🐟","🐬","🐋"],
    ["🕐","🕑","🕒","🕓"],["🔈","🔉","🔊"],["🥉","🥈","🥇"],["🐒","🦍"],["🍏","🍎"],["😴","🙂","😄"],["◽","◻️","⬜"],["·","•","⚫"],
    ["🌰","🍊","🎃"],["💧","🌊"],["🪨","⛰️"],["🐁","🐀"],["🚲","🚗","🚚"],["✏️","🖊️","🖋️"],
    ["🐝","🐦","🦅"],["🍒","🍎","🍉"],["🥄","🍴","🔪"],["🕯️","💡","🔦"],["👶","🧒","🧑"],["🌙","🌛","🌕"],["🥉","🥈","🥇","👑"],["😢","😐","😊","😁"]];
  const sorteer=bl.sorteer.concat(ordSets.map((s,i)=>({opdracht:"Zet op volgorde: klein naar groot",items:s,goed:s,niveau:1+(i%3)})));
  // nabouw: willekeurige kleine grids
  const KL=["r","b","g","y","p","o"]; const nabouw=bl.nabouw.slice();
  for(let i=0;i<24;i++){ const h=1+(i%3), w=2+(i%2); const grid=[]; for(let y=0;y<h;y++){ const row=[]; for(let x=0;x<w;x++){ row.push(rnd()<0.25?"":pick(KL)); } grid.push(row); }
    if(!grid.some(r=>r.some(c=>c))) grid[0][0]=pick(KL);
    nabouw.push({opdracht:"Bouw dit patroon na",grid:grid,niveau:1+(i%3)}); }
  // geheugen: willekeurige rijtjes + geschudde opties
  const emo=["🔴","🔵","🟡","🟢","🟣","🐶","🐱","⭐","🌙","☀️","🍎","🍌","🔺","🔻","🟦","🟨"]; const geheugen=bl.geheugen.slice();
  for(let i=0;i<18;i++){ const len=3+(i%3); const rij=shuffle(emo).slice(0,len);   // len 3..5 → genoeg volgordes
    const optA=rij.slice(); let optB=shuffle(rij), t=0; while(optB.join()===rij.join()&&t++<50) optB=shuffle(rij);
    let optC=shuffle(rij); t=0; while((optC.join()===rij.join()||optC.join()===optB.join())&&t++<50) optC=shuffle(rij);
    const opts=shuffle([optA,optB,optC]); const goed=opts.findIndex(o=>o.join()===rij.join());
    geheugen.push({opdracht:"Onthoud de rij",toon:rij,opties:opts,goed:goed,niveau:1+(i%3)}); }
  // zoek: veld = doel×k + afleiders, geschud
  const doelen=[["🍎",["🍐","🍊","🍇","🍌"]],["⭐",["🌙","☀️","☁️"]],["🐸",["🐢","🦎","🐍"]],["❤️",["💙","💛","💚","💜"]],["🐝",["🦋","🐞","🐜"]],["🌸",["🍃","🌵","🌻"]],
    ["🚗",["🚌","🚲","✈️"]],["🔵",["🔴","🟡","🟢"]],["🎈",["🎁","⚽","🪁"]],["🐟",["🐙","🦀","🐬"]],["🍓",["🍒","🍅","🍎"]],["🐶",["🐱","🐰","🐭"]]];
  const zoek=bl.zoek.slice();
  doelen.forEach((d,i)=>{ const k=3+(i%3); const veld=[]; for(let j=0;j<k;j++) veld.push(d[0]); const totaal=9+(i%7);
    while(veld.length<totaal) veld.push(pick(d[1])); zoek.push({opdracht:"Tik alle "+({"🍎":"appels","⭐":"sterren","🐸":"kikkers","❤️":"hartjes","🐝":"bijen","🌸":"bloemen","🚗":"auto's","🔵":"blauwe","🎈":"ballonnen","🐟":"visjes","🍓":"aardbeien","🐶":"hondjes"}[d[0]]||"doelen"),doel:d[0],veld:shuffle(veld),niveau:1+(i%3)}); });
  const obj={
    sorteer:uniqBy(sorteer, p=>p.items.join("|")),
    nabouw:uniqBy(nabouw, p=>JSON.stringify(p.grid)),
    geheugen:uniqBy(geheugen, p=>p.toon.join("|")+"#"+JSON.stringify(p.opties)),
    zoek:uniqBy(zoek, p=>p.doel+"#"+p.veld.slice().sort().join(""))
  };
  const header=readHeader('beeldlab.js');
  fs.writeFileSync(D('beeldlab.js'), header+'\n\nvar BEELDLAB = '+JSON.stringify(obj,null,2)+';\nif (typeof module !== \'undefined\') module.exports = BEELDLAB;\n');
  console.error('beeldlab sorteer/nabouw/geheugen/zoek:',sorteer.length,nabouw.length,geheugen.length,zoek.length);
}

/* ===================== CREATIEF (naar 4×) ===================== */
{
  const cre=require('./data/creatief.js');
  // bouwopdrachten: gecureerd + template-combinaties
  const bouw=["kasteel 🏰","toren 🗼","brug 🌉","boerderij 🚜","dierentuin 🦁","raket 🚀","boot ⛵","trein 🚂","piramide 🔺","doolhof 🌀","speeltuin 🛝","strand 🏖️","bos 🌲","bloementuin 🌷","vulkaan 🌋","grot 🕳️","station 🚉","markt 🏪","pretpark 🎡","kerk ⛪","molen 🌬️","fontein ⛲","tunnel 🚇","stad 🏙️"];
  const detail=["zo hoog als je kunt","met een vlag bovenop","met een gracht eromheen","in allemaal kleuren","met een geheime kamer","met een lange trap","met dieren erbij","met een tuin"];
  const chalGen=[]; bouw.forEach((b,i)=>{ const w=b.split(" ")[0], e=b.split(" ")[1];
    chalGen.push("Bouw een "+w+" "+detail[i%detail.length]+" "+e);
    chalGen.push("Bouw een "+w+" "+detail[(i+4)%detail.length]+" "+e); });
  const chalCur=["Maak een sneeuwpop van witte blokken ⛄","Maak een racebaan voor auto's 🏁","Bouw een boomhut hoog in een boom 🌳","Maak een onderwaterwereld met vissen 🐠","Bouw een ridderkasteel met een ophaalbrug 🏰","Maak een regenboog van gekleurde blokken 🌈","Bouw een dierentuin voor zeedieren 🐬","Maak een windmolen die lijkt te draaien 🌬️","Bouw een reuzenrad in je pretpark 🎡","Maak een veld vol mais op de boerderij 🌽","Bouw een fontein midden op het plein ⛲","Maak een geheime schatkamer in een grot 💎","Bouw een haven met bootjes ⚓","Maak een kasteel met vier torens 🏰","Bouw een lange muur om je wereld 🧱","Maak een speeltuin met een glijbaan 🛝","Bouw een berg met een tunnel erdoorheen ⛰️","Maak een tuin met een vijver 🦆","Bouw een treinstation met perrons 🚉","Maak een markt met kleurige kraampjes 🏪"];
  const chal=uniqBy(cre.CHALLENGE_DATA.concat(chalGen,chalCur), s=>s).slice(0,84);
  // wondervragen
  const wonCur=["Wat zou er gebeuren als dieren konden praten?","Stel je voor dat je kon vliegen — waar ga je heen?","Wat als het snoep regende uit de lucht?","Hoe zou jouw eigen planeet eruitzien?","Wat als je zo klein was als een mier?","Bedenk een dier dat nog niet bestaat — hoe heet het?","Wat als de zee van limonade was?","Hoe zou een huis eruitzien dat kan lopen?","Wat als je met wolken kon knuffelen?","Een boom vol cadeautjes — wat zit erin?","Wat als je één dag onzichtbaar was?","Hoe zou een school op de maan zijn?","Wat als je huisdier kon toveren?","Stel je een regenboogrivier voor — waar stroomt hij heen?","Wat als speelgoed 's nachts tot leven komt?","Hoe zou een stad onder water eruitzien?","Wat als je in een sprookje woonde?","Bedenk een nieuwe smaak ijs — hoe smaakt hij?","Wat als je met vogels kon meevliegen?","Hoe ziet jouw droomkamer eruit?","Wat als de maan van kaas was?","Stel je voor: een deur naar een geheime wereld. Wat zie je?","Wat als je een reus was voor één dag?","Bedenk een superkracht die niemand heeft.","Wat als planten konden zingen?","Hoe zou een auto eruitzien die kan vliegen?","Wat als je vrienden kon worden met een draak?","Stel je een verjaardag op een wolk voor.","Wat als het altijd zomer was?","Bedenk een spel dat je met sterren speelt.","Wat als je onder water kon ademen?","Hoe zou jouw eigen pretpark heten?","Wat als je knuffel kon praten — wat zou hij zeggen?","Stel je een trein voor die naar de sterren rijdt.","Wat als je alle talen ter wereld kon spreken?","Bedenk een dier dat half kat, half vogel is."];
  const won=uniqBy(cre.WONDER_DATA.concat(wonCur), s=>s).slice(0,52);
  // startzinnen
  const startCur=["Diep in het bos vond jij een deurtje in een boom, en toen...","Op een dag werd jouw knuffel levend en zei...","Er landde een klein ruimteschip in jouw tuin, en eruit stapte...","Jij vond een landkaart naar een schat die...","Toen je wakker werd, kon je toveren, dus je...","Een pratende kat volgde jou naar huis en vertelde dat...","In de wolken zag je een kasteel, en je klom omhoog om...","De regenboog raakte de grond in jouw tuin, en daar...","Je opende een oud boek en werd meegezogen naar een wereld waar...","Op zolder vond je een gloeiende kist, en toen je hem opende...","Een klein draakje verstopte zich onder jouw bed en vroeg...","De sterren vormden een woord: jouw naam, want...","Achter de waterval was een geheime grot vol...","Je vond een sleutel die op één deur paste, en daarachter...","Midden in de nacht hoorde je zacht getik aan het raam; het was...","De boom in de tuin begon te fluisteren en zei...","Je kreeg een brief van iemand die je nog nooit had ontmoet, en er stond...","Toen de klok dertien sloeg, gebeurde er iets vreemds:","Een schildpad met een gouden schild vroeg jou om hulp bij...","In je zak vond je een steentje dat gloeide zodra...","De lift ging niet omhoog of omlaag, maar naar een verdieping die...","Je tekende een deur op de muur, en tot je verbazing...","Het zand op het strand vormde vanzelf een pad naar...","Een vogel liet een klein kaartje vallen waarop stond...","Onder de oude eik lag een ei zo groot als een bal, en het bewoog...","Je vond een fluitje dat, als je erop blies, iets bijzonders liet gebeuren:","De maan kwam zo dichtbij dat je hem bijna kon aanraken, en toen...","In de bibliotheek was één boek dat zichzelf voorlas over...","Je schaduw maakte zich los van je voeten en wees naar...","Een regendruppel viel omhoog in plaats van omlaag, want...","De schommel in het park bracht je met één zwaai naar...","Je vond een paar laarzen waarmee je kon springen tot aan...","Toen je in de spiegel keek, zwaaide je spiegelbeeld terug en zei...","Een klein wolkje volgde je overal en wilde je vertellen dat...","De trap in huis had ineens een extra tree die leidde naar...","Je blies een zeepbel die niet knapte maar je meenam naar..."];
  const start=uniqBy(cre.STARTZIN_DATA.concat(startCur), s=>s).slice(0,52);
  const header=readHeader('creatief.js');
  fs.writeFileSync(D('creatief.js'), header+'\n\nvar CHALLENGE_DATA = '+JSON.stringify(chal,null,2)+';\nvar WONDER_DATA = '+JSON.stringify(won,null,2)+';\nvar STARTZIN_DATA = '+JSON.stringify(start,null,2)+';\nif (typeof module !== \'undefined\') module.exports = { CHALLENGE_DATA, WONDER_DATA, STARTZIN_DATA };\n');
  console.error('creatief challenge/wonder/startzin:',chal.length,won.length,start.length);
}
