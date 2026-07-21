const path = require('path');
const out = []; const seen = new Set();
function add(a, op, b, niveau){
  let ans;
  if(op==='+') ans=a+b; else if(op==='−') ans=a-b; else if(op==='×') ans=a*b;
  else if(op===':') ans=a/b; else if(op==='½') ans=a/2;
  if(!Number.isInteger(ans) || ans<0) return;
  const key = a+op+b; if(seen.has(key)) return; seen.add(key);
  out.push({a,op,b:(op==='½'?null:b),niveau});
}
// ---- NIVEAU 1 (~520): +/- t/m 20, splitsingen, verdubbelen ----
for(let a=0;a<=10;a++) for(let b=0;b<=10;b++) if(a+b<=20) add(a,'+',b,1);           // erbij t/m 20 (0 mag)
for(let a=1;a<=20;a++) for(let b=0;b<=20;b++) if(a-b>=0) add(a,'−',b,1);            // eraf t/m 20 (volledig)
for(let a=1;a<=9;a++){ add(a,'+',10-a,1); add(10,'−',a,1); }                        // splitsingen van 10
for(let a=1;a<=20;a++) add(20,'−',a,1);                                             // aanvullen tot 20
for(let a=1;a<=10;a++) add(a,'+',a,1);                                              // verdubbelen klein
for(let n=2;n<=20;n+=2) add(n,'½',null,1);                                          // halveren klein

// ---- NIVEAU 2 (~760): tafels 2/3/4/5/10, +/- t/m 100, halveren/dubbelen ----
[2,3,4,5,10].forEach(t=>{ for(let b=1;b<=10;b++){ add(t,'×',b,2); add(b,'×',t,2); } });
for(let n=2;n<=50;n+=2) add(n,'½',null,2);                                          // halveren
for(let a=10;a<=90;a+=10) for(let b=1;b<=9;b++){ add(a,'+',b,2); if(a+b<=99) add(a+b,'−',b,2); } // tiental±eenheid
for(let a=20;a<=100;a+=10) for(let b=10;b<a;b+=10) add(a,'−',b,2);                   // hele tientallen eraf
for(let a=11;a<=89;a+=2) for(let b=2;b<=9;b++) if(a+b<=100) add(a,'+',b,2);          // gemengd erbij
for(let a=21;a<=99;a+=2) for(let b=3;b<=9;b++) if(a-b>=0) add(a,'−',b,2);            // gemengd eraf
for(let a=11;a<=44;a++) add(a,'+',a,2);                                             // verdubbelen t/m 88

// ---- NIVEAU 3 (~540): alle tafels, delen, halveren groot, +/- t/m 100 ----
for(let t=2;t<=12;t++) for(let b=2;b<=12;b++) add(t,'×',b,3);                        // alle tafels t/m 12
for(let t=2;t<=12;t++) for(let b=2;b<=10;b++) add(t*b,':',t,3);                      // deelsommen
for(let n=22;n<=100;n+=2) add(n,'½',null,3);                                        // halveren groot
for(let a=41;a<=99;a++) for(let b=4;b<=9;b++) if(a-b>=0) add(a,'−',b,3);             // aftrekken over tiental
for(let a=31;a<=95;a++) for(let b=6;b<=9;b++) if(a+b<=100) add(a,'+',b,3);           // erbij over tiental
for(let a=100;a>=20;a-=10) for(let b=1;b<=9;b++) add(a,'−',b,3);                     // net onder tiental
for(let a=50;a<=95;a+=5) for(let b=15;b<=45;b+=5) if(a-b>=0) add(a,'−',b,3);         // grotere sprongen eraf

const counts={1:0,2:0,3:0}; out.forEach(s=>counts[s.niveau]++);
console.error('n1='+counts[1]+' n2='+counts[2]+' n3='+counts[3]+' totaal='+out.length);
const header=`// data/sommen.js — rekenopgaven per leerlijn.
// Voor ouders: elke som is { a, op, b, niveau }. op = + − × : (delen) of ½ (halveren, b=null).
// Antwoorden zijn altijd positieve gehele getallen; geen dubbele sommen. Niveau 1=groep3, 2=groep4, 3=groep5+.
`;
const body='var SOMMEN = [\n'+out.map(s=>'  {a:'+s.a+', op:"'+s.op+'", b:'+(s.b===null?'null':s.b)+', niveau:'+s.niveau+'}').join(',\n')+'\n];\n';
require('fs').writeFileSync(path.join(__dirname,'data','sommen.js'), header+body+"if (typeof module !== 'undefined') module.exports = SOMMEN;\n");
console.error('geschreven naar data/sommen.js');
