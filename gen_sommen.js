const path = require('path');
/* gen_sommen.js — bouwt data/sommen.js als één doorlopende rekenladder voor groep 3 t/m 8.
   Niveau = groep − 2, dus: 1=groep 3, 2=groep 4, 3=groep 5, 4=groep 6, 5=groep 7, 6=groep 8.
   De app filtert cumulatief (niveau <= niveau van het kind), dus lagere stof blijft herhaling.

   BALANS: per niveau is per bewerking een DOELAANTAL vastgelegd (zie PLAN hieronder). Zonder
   die caps bepaalt de generatievolgorde de verhouding, en dan overheerst één bewerking —
   bijvoorbeeld 481 aftreksommen tegenover 36 tafelsommen in groep 5. De verdeling volgt de
   leerlijn: groep 3 vooral erbij/eraf, groep 4-5 de tafels erbij, vanaf groep 6 ook delen.

   Formaat: { a, op, b, niveau } met op = + − × : ½ (halveren, b=null).
   Antwoorden zijn altijd positieve gehele getallen; dubbele opgaven bestaan niet (globale dedup).
   Opnieuw genereren:  node gen_sommen.js                                                     */

/* ---- doelaantallen per niveau en bewerking ---- */
const PLAN = {
  1: { '+':180, '−':140, '½':20 },                          // groep 3
  2: { '×':80,  '+':120, '−':100, '½':20 },                 // groep 4: tafels 1/2/5/10 erbij
  3: { '×':60,  '+':110, '−':110, '½':25 },                 // groep 5: overige tafels t/m 10
  4: { ':':120, '×':90,  '+':110, '−':110, '½':25 },         // groep 6: delen erbij
  5: { '×':130, ':':110, '+':100, '−':100, '½':25 },         // groep 7
  6: { '×':120, ':':110, '+':100, '−':100, '½':25 }          // groep 8
};

const kandidaten = {};                 // kandidaten[niveau][op] = [ {a,op,b}, ... ]
function kan(a, op, b, niveau){
  let ans;
  if(op==='+') ans=a+b; else if(op==='−') ans=a-b; else if(op==='×') ans=a*b;
  else if(op===':') ans=a/b; else if(op==='½') ans=a/2;
  if(!Number.isInteger(ans) || ans<0) return;
  (kandidaten[niveau] = kandidaten[niveau] || {});
  (kandidaten[niveau][op] = kandidaten[niveau][op] || []).push({a, op, b:(op==='½'?null:b)});
}

// ---- NIVEAU 1 — GROEP 3: erbij/eraf t/m 20, splitsen, verdubbelen, halveren klein ----
for(let a=0;a<=10;a++) for(let b=0;b<=10;b++) if(a+b<=20 && a+b>0) kan(a,'+',b,1);
for(let a=11;a<=20;a++) for(let b=1;b<=9;b++) if(a+b<=20) kan(a,'+',b,1);   // over het tiental
for(let a=1;a<=10;a++) kan(a,'+',a,1);                                     // verdubbelen
for(let a=1;a<=20;a++) for(let b=1;b<=10;b++) if(a-b>=0) kan(a,'−',b,1);
for(let a=1;a<=9;a++) kan(10,'−',a,1);
for(let n=2;n<=20;n+=2) kan(n,'½',null,1);

// ---- NIVEAU 2 — GROEP 4: tafels 1/2/5/10, erbij/eraf met tientallen t/m 100 ----
[1,2,5,10].forEach(t=>{ for(let b=1;b<=10;b++){ kan(t,'×',b,2); kan(b,'×',t,2); } });
for(let a=10;a<=90;a+=10) for(let b=10;b<=90;b+=10) if(a+b<=100) kan(a,'+',b,2);
for(let a=10;a<=90;a+=10) for(let b=1;b<=9;b++) kan(a,'+',b,2);
for(let a=11;a<=25;a++) kan(a,'+',a,2);
for(let a=20;a<=100;a+=10) for(let b=10;b<a;b+=10) kan(a,'−',b,2);
for(let a=11;a<=99;a++) for(let b=1;b<=9;b++) if(a-b>=0 && a%10 >= b) kan(a,'−',b,2);  // zonder lenen
for(let n=2;n<=40;n+=2) kan(n,'½',null,2);

// ---- NIVEAU 3 — GROEP 5: overige tafels t/m 10, erbij/eraf over het tiental ----
[3,4,6,7,8,9].forEach(t=>{ for(let b=1;b<=12;b++){ kan(t,'×',b,3); kan(b,'×',t,3); } });
for(let a=21;a<=95;a++) for(let b=6;b<=9;b++) if(a+b<=100) kan(a,'+',b,3);
for(let a=21;a<=99;a++) for(let b=4;b<=9;b++) if(a-b>=0) kan(a,'−',b,3);
for(let a=50;a<=95;a+=5) for(let b=15;b<=45;b+=5) if(a-b>=0) kan(a,'−',b,3);
for(let a=26;a<=50;a++) kan(a,'+',a,3);
for(let n=42;n<=100;n+=2) kan(n,'½',null,3);

// ---- NIVEAU 4 — GROEP 6: deelsommen, tafels t/m 12, rekenen t/m 1000 ----
for(let t=2;t<=12;t++) for(let b=2;b<=12;b++) kan(t*b,':',t,4);
for(let t=2;t<=12;t++) for(let b=2;b<=12;b++) kan(t,'×',b,4);
for(let a=100;a<=900;a+=100) for(let b=100;b<=900;b+=100) if(a+b<=1000) kan(a,'+',b,4);
for(let a=110;a<=990;a+=10) for(let b=20;b<=90;b+=10) if(a+b<=1000) kan(a,'+',b,4);
for(let a=200;a<=1000;a+=100) for(let b=100;b<a;b+=100) kan(a,'−',b,4);
for(let a=110;a<=990;a+=10) for(let b=20;b<=90;b+=10) if(a-b>=0) kan(a,'−',b,4);
for(let n=102;n<=200;n+=2) kan(n,'½',null,4);

// ---- NIVEAU 5 — GROEP 7: 2-cijferig × 1-cijferig, grotere deelsommen, t/m 1000 ----
for(let a=11;a<=40;a++) for(let b=2;b<=9;b++) kan(a,'×',b,5);
for(let t=2;t<=12;t++) for(let b=13;b<=25;b++) kan(t*b,':',t,5);
for(let a=110;a<=990;a+=20) for(let b=20;b<=90;b+=10) if(a+b<=1000) kan(a,'+',b,5);
for(let a=210;a<=990;a+=20) for(let b=30;b<=190;b+=20) if(a-b>=0) kan(a,'−',b,5);
for(let n=202;n<=400;n+=2) kan(n,'½',null,5);

// ---- NIVEAU 6 — GROEP 8: grote tafels, delen door 2-cijferig, rekenen t/m 10.000 ----
for(let a=12;a<=25;a++) for(let b=11;b<=20;b++) kan(a,'×',b,6);
for(let t=11;t<=20;t++) for(let b=4;b<=20;b++) kan(t*b,':',t,6);
for(let a=1000;a<=9000;a+=500) for(let b=500;b<=5000;b+=500) if(a+b<=10000) kan(a,'+',b,6);
for(let a=1050;a<=9950;a+=250) for(let b=150;b<=950;b+=100) if(a+b<=10000) kan(a,'+',b,6);
for(let a=2000;a<=10000;a+=500) for(let b=500;b<a;b+=500) kan(a,'−',b,6);
for(let a=1050;a<=9950;a+=250) for(let b=150;b<=950;b+=100) if(a-b>=0) kan(a,'−',b,6);
for(let n=1002;n<=1200;n+=2) kan(n,'½',null,6);

/* ---- selecteren: per niveau en bewerking tot het doelaantal, gelijkmatig gespreid ---- */
const out = [], gezien = new Set();
[1,2,3,4,5,6].forEach(niveau => {
  Object.keys(PLAN[niveau]).forEach(op => {
    const doel = PLAN[niveau][op];
    const pool = ((kandidaten[niveau]||{})[op] || []).filter(s => {
      const k = s.a + s.op + s.b;
      return !gezien.has(k);
    });
    // gelijkmatig spreiden i.p.v. de eerste N pakken: anders krijg je alleen de kleinste getallen
    const stap = Math.max(1, Math.floor(pool.length / doel));
    let genomen = 0;
    for(let i = 0; i < pool.length && genomen < doel; i += stap){
      const s = pool[i], k = s.a + s.op + s.b;
      if(gezien.has(k)) continue;
      gezien.add(k); out.push({...s, niveau}); genomen++;
    }
    // nog niet vol? vul aan met wat er over is
    for(let i = 0; i < pool.length && genomen < doel; i++){
      const s = pool[i], k = s.a + s.op + s.b;
      if(gezien.has(k)) continue;
      gezien.add(k); out.push({...s, niveau}); genomen++;
    }
    if(genomen < doel) console.error('  let op: niveau '+niveau+' '+op+' kreeg '+genomen+' van '+doel+' (niet meer kandidaten)');
  });
});

const counts = {1:{},2:{},3:{},4:{},5:{},6:{}};
out.forEach(s => counts[s.niveau][s.op] = (counts[s.niveau][s.op]||0)+1);
[1,2,3,4,5,6].forEach(n => {
  const c = counts[n], tot = Object.values(c).reduce((a,b)=>a+b,0);
  console.error('groep '+(n+2)+' (niveau '+n+'): '+Object.keys(c).map(o=>o+' '+c[o]).join(' · ')+'  = '+tot);
});
console.error('totaal: '+out.length);

const header=`// data/sommen.js — rekenopgaven als één doorlopende leerlijn voor groep 3 t/m 8.
// Voor ouders/redacteuren: elke som is { a, op, b, niveau }. op = + − × : (delen) of ½ (halveren, b=null).
// Niveau = groep − 2 →  1 = groep 3, 2 = groep 4, 3 = groep 5, 4 = groep 6, 5 = groep 7, 6 = groep 8.
// Content werkt cumulatief: een kind krijgt alles t/m zijn eigen niveau (lagere stof = herhaling).
// De verdeling per bewerking is per groep vastgelegd in gen_sommen.js (PLAN), zodat geen enkele
// bewerking de rest overheerst: groep 3 vooral erbij/eraf, groep 4-5 de tafels, vanaf groep 6 delen.
// Antwoorden zijn altijd positieve gehele getallen; geen dubbele opgaven.
// Opnieuw genereren:  node gen_sommen.js
`;
const body='var SOMMEN = [\n'+out.map(s=>'  {a:'+s.a+', op:"'+s.op+'", b:'+(s.b===null?'null':s.b)+', niveau:'+s.niveau+'}').join(',\n')+'\n];\n';
require('fs').writeFileSync(path.join(__dirname,'data','sommen.js'), header+body+"if (typeof module !== 'undefined') module.exports = SOMMEN;\n");
console.error('geschreven naar data/sommen.js');
