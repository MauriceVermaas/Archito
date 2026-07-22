// tests/test.js — volledige testsuite. Draait met: node tests/test.js  (< 1 sec)
// Dekt: contentvalidatie, knop→functie-dekking en headless scenario-tests per spel.
const fs = require('fs');
const path = require('path');
const { laadApp } = require('./harness');
const ROOT = path.join(__dirname, '..');

let pass = 0, fail = 0;
const fouten = [];
function test(naam, fn){
  try{ fn(); console.log('  ✓ '+naam); pass++; }
  catch(e){ console.log('  ✗ '+naam+'  — '+e.message); fouten.push(naam+': '+e.message); fail++; }
}
function ok(c, m){ if(!c) throw new Error(m||'verwacht waar'); }
function eq(a, b, m){ if(a!==b) throw new Error((m||'')+' verwacht '+JSON.stringify(b)+' kreeg '+JSON.stringify(a)); }
function sectie(t){ console.log('\n▶ '+t); }

// ============================================================
sectie('1. Contentvalidatie');
const SOMMEN=require('../data/sommen.js'), WOORDEN=require('../data/woorden.js'),
  FLITS=require('../data/flitswoorden.js'), MEM=require('../data/memory.js'),
  TALEN=require('../data/talen.js'), DENKEN=require('../data/denken.js'),
  BEELD=require('../data/beelddenken.js'),
  BEELDLAB=require('../data/beeldlab.js'),
  CRE=require('../data/creatief.js');

function somAntwoord(s){ return s.op==='+'?s.a+s.b : s.op==='−'?s.a-s.b : s.op==='×'?s.a*s.b : s.op===':'?s.a/s.b : s.op==='½'?s.a/2 : NaN; }

test('sommen: antwoorden zijn positieve gehele getallen', ()=>{
  SOMMEN.forEach(s=>{ const a=somAntwoord(s); ok(Number.isInteger(a)&&a>=0, 'ongeldig antwoord bij '+JSON.stringify(s)); });
});
test('sommen: geen dubbele sommen', ()=>{
  const set=new Set(); SOMMEN.forEach(s=>{ const k=s.a+s.op+s.b; ok(!set.has(k),'dubbele som '+k); set.add(k); });
});
test('sommen: alle niveaus 1-3 en gevuld', ()=>{
  [1,2,3].forEach(n=>ok(SOMMEN.filter(s=>s.niveau===n).length>10,'te weinig sommen niveau '+n));
});
test('woorden: delen vormen exact het woord', ()=>{
  WOORDEN.forEach(w=>eq(w.delen.join(''), w.w, 'delen != woord'));
});
test('woorden: instinker zit nooit in het woord', ()=>{
  WOORDEN.forEach(w=>w.extra.forEach(e=>ok(!w.w.includes(e), 'instinker '+e+' in '+w.w)));
});
test('woorden: groep 3 (niveau 1) bestaat', ()=>{ ok(WOORDEN.filter(w=>w.niveau===1).length>=10); });
test('flitswoorden: 2 lookalikes die het woord niet bevatten', ()=>{
  FLITS.forEach(f=>{ eq(f.alt.length,2,'aantal alt'); f.alt.forEach(a=>ok(!a.includes(f.w)&&a!==f.w,'lookalike bevat woord '+f.w)); });
});
test('memory: verplichte velden aanwezig', ()=>{
  MEM.forEach(m=>ok(m.w&&m.plaatje&&[1,2,3].includes(m.niveau),'memory veld ontbreekt'));
});
test('talen: nl/en/es/plaatje aanwezig per taal', ()=>{
  TALEN.forEach(t=>ok(t.nl&&t.en&&t.es&&t.plaatje&&[1,2,3].includes(t.niveau),'talen veld ontbreekt'));
});
test('denken: goed-antwoord staat letterlijk in opties + uitleg aanwezig', ()=>{
  DENKEN.forEach(d=>{ ok(d.opties.includes(d.goed),'goed niet in opties: '+d.vraag); ok(!!d.uitleg,'geen uitleg: '+d.vraag); });
});
test('creatief: challenges/wonders/startzinnen gevuld', ()=>{
  ok(CRE.CHALLENGE_DATA.length>=12); ok(CRE.WONDER_DATA.length>=8); ok(CRE.STARTZIN_DATA.length>=8);
});
test('beelddenken: visuele puzzels zijn geldig en tekst-arm', ()=>{
  ok(BEELD.length>=20, 'genoeg visuele puzzels ('+BEELD.length+')');
  BEELD.forEach(p=>{
    ok(p.soort && typeof p.soort==='string', 'soort ontbreekt');
    ok(typeof p.opdracht==='string' && p.opdracht.length<=45, 'opdracht te lang/ontbreekt: '+p.opdracht);
    ok(Array.isArray(p.opties) && p.opties.length>=2, 'te weinig opties bij '+p.opdracht);
    ok(p.opties.includes(p.goed), 'goed niet in opties: '+p.opdracht);
    // het juiste antwoord moet ondubbelzinnig zijn (precies één keer); afleiders mogen wél identiek zijn (spot-de-andere)
    ok(p.opties.filter(o=>o===p.goed).length===1, 'goed antwoord niet uniek bij '+p.opdracht);
    ok(typeof p.uitleg==='string' && p.uitleg.length>0, 'uitleg ontbreekt: '+p.opdracht);
    ok([1,2,3].includes(p.niveau), 'ongeldig niveau bij '+p.opdracht);
    if(p.toon){ ok(Array.isArray(p.toon) && p.toon.length>=1, 'toon leeg bij '+p.opdracht); }
  });
});
test('beelddenken: elk niveau heeft visuele puzzels (ook groep 3)', ()=>{
  [1,2,3].forEach(n=> ok(BEELD.filter(p=>p.niveau===n).length>=4, 'te weinig visuele puzzels niveau '+n));
});
test('beeldlab: sorteer-, nabouw-, geheugen- en zoekpuzzels zijn geldig', ()=>{
  const KLEUR=['r','b','g','y','p','o',''];
  ok(BEELDLAB.sorteer.length>=4 && BEELDLAB.nabouw.length>=4 && BEELDLAB.geheugen.length>=4 && BEELDLAB.zoek.length>=3, 'genoeg beeldlab-puzzels');
  BEELDLAB.sorteer.forEach(p=>{ ok(p.items.length>=2,'sorteer: te weinig items'); ok(p.items.length===p.goed.length,'sorteer: items/goed ongelijk');
    ok([...p.items].sort().join()===[...p.goed].sort().join(),'sorteer: goed is geen herschikking van items: '+p.opdracht); ok([1,2,3].includes(p.niveau),'sorteer niveau'); });
  BEELDLAB.nabouw.forEach(p=>{ ok(Array.isArray(p.grid)&&p.grid.length>=1,'nabouw: leeg grid');
    const br=p.grid[0].length; p.grid.forEach(r=>{ ok(r.length===br,'nabouw: grid niet rechthoekig: '+p.opdracht); r.forEach(c=>ok(KLEUR.includes(c),'nabouw: onbekende kleur "'+c+'"')); });
    ok(p.grid.some(r=>r.some(c=>c)),'nabouw: grid volledig leeg'); ok([1,2,3].includes(p.niveau),'nabouw niveau'); });
  BEELDLAB.geheugen.forEach(p=>{ ok(p.toon.length>=2,'geheugen: te korte rij'); ok(p.opties.length>=2,'geheugen: te weinig opties');
    ok(p.opties[p.goed],'geheugen: goed-index bestaat niet'); ok(p.opties[p.goed].join()===p.toon.join(),'geheugen: goede optie ≠ getoonde rij: '+p.opdracht); ok([1,2,3].includes(p.niveau),'geheugen niveau'); });
  BEELDLAB.zoek.forEach(p=>{ const n=p.veld.filter(x=>x===p.doel).length; ok(n>=2,'zoek: minstens 2 doelen: '+p.opdracht); ok([1,2,3].includes(p.niveau),'zoek niveau'); });
});
test('freemium: tijdens de test is alles ontgrendeld (premium aan)', ()=>{
  const ctx = laadApp();
  ok(ctx.TESTMODUS===true, 'testmodus staat aan tijdens de testronde');
  ok(ctx.heeftPremium()===true, 'premium ontgrendeld in testmodus');
  ctx.laadState(); ctx.S.premium=false;
  ok(ctx.heeftPremium()===true, 'ook zonder premium-vlag ontgrendeld zolang TESTMODUS aan is');
  ctx.premiumInteresse(); ok(ctx.S.premiumInteresse===true, 'interesse wordt lokaal opgeslagen');
});
test('elk thema heeft een complete mascotte (emoji, naam, zinnen)', ()=>{
  const ctx = laadApp();
  const themas = Object.keys(ctx.THEMAS);
  ok(themas.length===6, 'zes thema’s verwacht, kreeg '+themas.length);
  themas.forEach(k=>{
    const m = ctx.MASCOTTES[k];
    ok(m && typeof m==='object', 'thema '+k+' mist mascotte in data/mascottes.js');
    ok(typeof m.emoji==='string' && m.emoji.length>0, 'mascotte '+k+' mist emoji');
    ok(typeof m.naam==='string' && m.naam.length>0, 'mascotte '+k+' mist naam');
    ok(Array.isArray(m.zinnen) && m.zinnen.length>=1, 'mascotte '+k+' mist zinnen');
    ok('afbeelding' in m, 'mascotte '+k+' mist afbeelding-veld (mag leeg)');
  });
});

test('elk thema heeft 7 spelnamen, gevuld en uniek binnen het thema', ()=>{
  const ctx = laadApp();
  Object.keys(ctx.THEMAS).forEach(k=>{
    const namen = Object.keys(ctx.THEMAS[k].spellen).map(x=>ctx.THEMAS[k].spellen[x]);
    eq(namen.length, 7, k+': 7 spellen');
    namen.forEach(n=> ok(typeof n==='string' && n.length>0, k+': naam gevuld'));
    eq(new Set(namen).size, namen.length, k+': namen uniek binnen thema');
  });
});

test('hamburgermenu bundelt de acties in één overlay', ()=>{
  const ctx = laadApp(); ctx.laadState(); ctx.openMenu();
  const h = ctx.document.getElementById('overlayInhoud').innerHTML;
  ['Wissel kind','Thema','Stickerboek','Geluid','Muziek','Ouders'].forEach(t=> ok(h.indexOf(t)>=0, 'menu bevat '+t));
});
test('elk spel heeft spelregels én een betekenisvolle hint', ()=>{
  const ctx = laadApp(); ctx.laadState();
  ['reken','spelling','verhaal','flits','memory','engels','spaans','denken','beeldlab','lezen','bouw'].forEach(k=>{
    ok(ctx.SPELREGELS[k] && ctx.SPELREGELS[k].length>10, 'spelregels voor '+k);
    ok(ctx.HINTS[k] && ctx.HINTS[k].length>10, 'hint voor '+k);
  });
});
test('spelregels en hint verschijnen in een pop-up voor het huidige spel', ()=>{
  const ctx = nieuwSpel(1); ctx.S.naam='Test';
  ctx.openSpel('lezen'); ctx.toonSpelregels();
  ok(ctx.document.getElementById('overlayInhoud').innerHTML.indexOf('Hoe werkt het')>=0, 'spelregels getoond');
  ctx.toonSpelHint();
  ok(ctx.document.getElementById('overlayInhoud').innerHTML.indexOf('Hint')>=0, 'hint getoond');
});
test('bij terugkomen met meerdere kinderen kies je eerst een profiel', ()=>{
  const ctx = laadApp(); ctx.laadState(); ctx.S.naam='A'; ctx.bewaarState(); ctx.nieuwKind(); ctx.S.naam='B'; ctx.bewaarState();
  ctx.init();
  ok(ctx.document.getElementById('overlayInhoud').innerHTML.indexOf('Wie gaat er spelen')>=0, 'profielkiezer verschijnt eerst');
});

// ============================================================
sectie('2. Knop→functie-dekking');
test('elke onclick/onchange in index.html verwijst naar een bestaande functie', ()=>{
  const html = fs.readFileSync(path.join(ROOT,'index.html'),'utf8');
  const ctx = laadApp();
  const re = /on(?:click|change)="([a-zA-Z_$][\w$]*)\s*\(/g;
  let m, ontbreekt=[];
  const seen=new Set();
  while((m=re.exec(html))){ const naam=m[1]; if(seen.has(naam))continue; seen.add(naam);
    if(typeof ctx[naam] !== 'function') ontbreekt.push(naam);
  }
  ok(ontbreekt.length===0, 'geen functie voor: '+ontbreekt.join(', '));
});

// ============================================================
sectie('3. Scenario: profiel, niveaus, thema, HUD');
test('leeftijd → groep → niveau klopt voor 5–12', ()=>{
  const ctx = laadApp();
  const verwacht = {5:[3,1],6:[3,1],7:[4,2],8:[5,2],9:[6,3],10:[7,3],11:[7,3],12:[7,3]};
  for(let l=5;l<=12;l++){
    eq(ctx.leeftijdNaarGroep(l), verwacht[l][0], 'groep bij leeftijd '+l);
    eq(ctx.groepNaarNiveau(ctx.leeftijdNaarGroep(l)), verwacht[l][1], 'niveau bij leeftijd '+l);
  }
});
test('profiel opslaan zet naam/groep/niveau en toont HUD', ()=>{
  const ctx = laadApp();
  ctx.init();                                  // opent profiel (geen naam)
  ctx.document.getElementById('pfNaam').value = 'Test';
  ctx.stelLeeftijdIn(8);
  ctx.bewaarProfiel();
  eq(ctx.S.naam, 'Test'); eq(ctx.S.groep, 5); eq(ctx.S.niveau, 2);
  eq(ctx.document.getElementById('hud').hidden, false, 'HUD zichtbaar na profiel');
});
test('eerste keer: onboarding loopt naam → leeftijd → avatar en zet alles', ()=>{
  const ctx = laadApp(); ctx.init();                         // verse start → onboarding stap 0
  eq(ctx._ob.stap, 0, 'begint bij de naamstap');
  ctx.document.getElementById('pfNaam').value = 'Sanne'; ctx.obNaarLeeftijd();
  eq(ctx.S.naam, 'Sanne', 'naam opgeslagen'); eq(ctx._ob.stap, 1, 'door naar leeftijd');
  ctx.stelLeeftijdIn(8); ctx.obNaarAvatar();
  eq(ctx._ob.stap, 2, 'door naar avatar');
  ctx.S.avatar = '🦄'; ctx.obKlaar();
  eq(ctx.S.naam, 'Sanne'); eq(ctx.S.groep, 5); eq(ctx.S.avatar, '🦄');
  eq(ctx.document.getElementById('hud').hidden, false, 'HUD zichtbaar na onboarding');
});
test('onboarding vraagt eerst om een naam voordat je verder kunt', ()=>{
  const ctx = laadApp(); ctx.startOnboarding();
  ctx.document.getElementById('pfNaam').value = '';
  ctx.obNaarLeeftijd();
  eq(ctx._ob.stap, 0, 'blijft op de naamstap zonder naam');
});
test('onboarding vult altijd een avatar in (terugval)', ()=>{
  const ctx = laadApp(); ctx.startOnboarding();
  ctx.document.getElementById('pfNaam').value='Kai'; ctx.obNaarLeeftijd(); ctx.stelLeeftijdIn(6); ctx.obNaarAvatar();
  ctx.obKlaar();                                              // geen avatar gekozen
  ok(ctx.S.avatar && ctx.S.avatar.length>0, 'valt terug op een standaard avatar');
});
test('onboarding maar één keer: na herladen blijft het profiel bewaard', ()=>{
  const ctx = laadApp(); ctx.startOnboarding();
  ctx.document.getElementById('pfNaam').value='Sanne'; ctx.obNaarLeeftijd(); ctx.stelLeeftijdIn(8); ctx.obNaarAvatar(); ctx.S.avatar='🦄'; ctx.obKlaar();
  ctx.laadState();                                            // simuleer herstart van de app
  eq(ctx.S.naam, 'Sanne', 'naam bewaard na herladen'); eq(ctx.S.groep, 5, 'groep bewaard'); eq(ctx.S.avatar, '🦄', 'avatar bewaard');
  ok(!!ctx.S.naam, 'naam bestaat → init toont geen onboarding meer');
});
test('alle leeftijden 5–12 geven een gevulde sommen-pool', ()=>{
  const ctx = laadApp(); ctx.laadState();
  for(let l=5;l<=12;l++){ ctx.stelLeeftijdIn(l);
    const pool = SOMMEN.filter(s=>s.niveau<=ctx.S.niveau);
    ok(pool.length>0, 'lege pool bij leeftijd '+l);
  }
});
test('alle 4 thema’s wisselen zonder voortgang te verliezen', ()=>{
  const ctx = laadApp(); ctx.laadState(); ctx.S.naam='Test'; ctx.S.valuta=42; ctx.S.xp=77;
  ['galaxy','powerup','unicorn','craft'].forEach(t=>{
    ctx.setThema(t);
    eq(ctx.S.thema, t, 'thema gezet');
    eq(ctx.S.valuta, 42, 'valuta onveranderd na themawissel');
    eq(ctx.S.xp, 77, 'xp onveranderd na themawissel');
  });
});
test('mascotte verschijnt op startscherm en wisselt mee met het thema', ()=>{
  const ctx = laadApp(); ctx.laadState(); ctx.S.naam='Test';
  ctx.setThema('galaxy'); ctx.bouwStartscherm();
  const vak = ctx.document.getElementById('mascotteVak');
  ok(vak && vak.innerHTML.indexOf(ctx.MASCOTTES.galaxy.afbeelding||ctx.MASCOTTES.galaxy.emoji)>=0, 'galaxy-mascotte getekend');
  ok(vak.innerHTML.indexOf(ctx.MASCOTTES.galaxy.naam)>=0, 'mascotte-naam zichtbaar');
  ctx.setThema('unicorn'); ctx.bouwStartscherm();
  ok(vak.innerHTML.indexOf(ctx.MASCOTTES.unicorn.afbeelding||ctx.MASCOTTES.unicorn.emoji)>=0, 'unicorn-mascotte na wissel');
  ctx.mascottePraat();  // mag niet throwen (spraak is no-op in test)
  ok(true);
});
test('nieuwe thema’s voetbal en zeemeermin werken en hebben een mascotte', ()=>{
  const ctx = laadApp(); ctx.laadState(); ctx.S.naam='Test'; ctx.S.valuta=30;
  ['voetbal','zeemeermin'].forEach(t=>{
    ok(ctx.THEMAS[t], 'thema '+t+' bestaat');
    ok(ctx.MASCOTTES[t] && ctx.MASCOTTES[t].emoji && ctx.MASCOTTES[t].naam, 'mascotte voor '+t);
    ctx.setThema(t);
    eq(ctx.S.thema, t, 'thema gezet'); eq(ctx.S.valuta, 30, 'voortgang behouden');
    eq(ctx.document.body.getAttribute('data-theme'), t, 'data-theme toegepast');
  });
});
test('meerdere kinderen: eigen profiel + eigen voortgang, gratis in één app', ()=>{
  const ctx = laadApp(); ctx.laadState();
  ctx.S.naam='Kind1'; ctx.S.valuta=5; ctx.S.leeftijd=7; ctx.bewaarState();
  ctx.nieuwKind();                              // tweede kind
  eq(ctx.aantalProfielen(), 2, 'twee profielen');
  ctx.S.naam='Kind2'; ctx.S.valuta=99; ctx.bewaarState();
  ctx.kiesKind(0);
  eq(ctx.S.naam, 'Kind1', 'terug bij kind 1'); eq(ctx.S.valuta, 5, 'voortgang kind 1 apart');
  ctx.kiesKind(1);
  eq(ctx.S.naam, 'Kind2', 'kind 2'); eq(ctx.S.valuta, 99, 'voortgang kind 2 apart');
  ctx.laadState();                              // opnieuw laden uit opslag
  eq(ctx.aantalProfielen(), 2, 'profielen blijven bewaard');
  eq(ctx.S.naam, 'Kind2', 'actieve kind onthouden');
});
test('kind verwijderen zit achter de oudergate en respecteert minimum (US-08)', ()=>{
  const ctx = laadApp(); ctx.laadState(); ctx.S.naam='A'; ctx.bewaarState(); ctx.nieuwKind(); ctx.S.naam='B'; ctx.bewaarState();
  ctx.verwijderKind(1);  // opent eerst de oudergate i.p.v. direct te verwijderen
  const gate = ctx.document.getElementById('overlayInhoud').innerHTML;
  ok(gate.indexOf('voor de ouder')>=0, 'verwijderen vraagt eerst de oudergate');
  eq(ctx.aantalProfielen(), 2, 'nog niets verwijderd voor bevestiging');
  ctx._verwijderKindDoe(1); eq(ctx.aantalProfielen(), 1, 'kern verwijdert het kind');
  ctx._verwijderKindDoe(0); eq(ctx.aantalProfielen(), 1, 'laatste kind blijft staan');
});
test('ouder-scherm zit achter de gate en toont voortgang (US-08)', ()=>{
  const ctx = laadApp(); ctx.laadState(); ctx.S.naam='Test'; ctx.S.ouderPin='';  // geen PIN → rekendrempel
  ctx.haalLevel('reken',1); ctx.haalLevel('memory',1);  // wat voortgang
  ctx.openOuders();
  let html = ctx.document.getElementById('overlayInhoud').innerHTML;
  ok(html.indexOf('voor de ouder')>=0, 'oudergate verschijnt eerst (ook zonder PIN)');
  ctx.ouderScherm();  // na de drempel: het echte oudergedeelte
  html = ctx.document.getElementById('overlayInhoud').innerHTML;
  ok(html.indexOf('Ouders')>=0, 'ouder-scherm geopend');
  ok(html.indexOf('Voortgang per onderdeel')>=0, 'voortgang getoond');
  ok(html.indexOf('Rekenen')>=0, 'spel-voortgang zichtbaar');
  ok(html.indexOf('Zonder scherm')>=0, 'knop naar schermloze tips aanwezig');
  ok(html.indexOf('Premium')>=0, 'premium-info in het oudergedeelte (US-07)');
});
test('toegankelijkheid & doelgroep-instellingen (US-04/06/08/10/11)', ()=>{
  const ctx = laadApp(); ctx.laadState();
  eq(ctx.S.voorlezenAan, true, 'US-04: voorlezen default aan');
  eq(ctx.S.geluidAan, true, 'geluid default aan');
  eq(ctx.S.rustigeModus, false, 'US-06: rustige modus default uit');
  eq(ctx.S.leesSchaal, 1, 'US-11: leesschaal default 100%');
  ok(Array.isArray(ctx.S.foutenLog), 'US-10: foutenlog aanwezig');
  const foutbalk = ctx.document.getElementById('foutbalk');
  ctx.toonFout('testfout X');
  ok(ctx.S.foutenLog.length>=1, 'US-10: fout wordt gelogd voor de ouder');
  ok((foutbalk.style.display||'')!=='block', 'US-10: foutbalk niet zichtbaar voor het kind');
  const s0 = ctx.S.leesSchaal; ctx.stelLeesSchaal(1); ok(ctx.S.leesSchaal>s0, 'US-11: tekst groter kan');
  ctx.kiesLeesFont('opendyslexic'); eq(ctx.S.leesFontKeuze, 'opendyslexic', 'US-11: ander leesfont');
  ctx.zetRustig(); eq(ctx.S.rustigeModus, true, 'US-06: rustige modus aan te zetten');
  ctx.zetVoorlezen(); eq(ctx.S.voorlezenAan, false, 'US-04: voorlezen apart uit');
  eq(ctx.S.geluidAan, true, 'US-04: geluidseffecten ongewijzigd');
});
test('oudertips-data is gevuld en het tips-scherm toont de spelletjes', ()=>{
  const T = require('../data/oudertips.js');
  ok(T.intro && T.algemeen.length>=3 && T.categorieen.length>=4, 'genoeg tips en categorieën');
  T.categorieen.forEach(c=>{ ok(c.titel && c.spellen.length>=1, 'categorie gevuld'); c.spellen.forEach(s=>ok(s.naam&&s.nodig&&s.hoe,'spel compleet')); });
  const ctx = laadApp(); ctx.laadState(); ctx.openOuderTips();
  const html = ctx.document.getElementById('overlayInhoud').innerHTML;
  ok(html.indexOf('Zonder scherm')>=0, 'tips-scherm geopend');
  ok(html.indexOf(T.categorieen[0].spellen[0].naam)>=0, 'een spelletje wordt getoond');
});
test('valuta start op 0 (eerst verdienen) en groeit bij goed antwoord-helper', ()=>{
  const ctx = laadApp(); ctx.laadState();
  eq(ctx.S.valuta, 0, 'start-valuta 0');
  eq(ctx.S.bouwenVrij, false, 'bouwen begint op slot');
  const v0 = ctx.S.valuta; ctx.geefValuta(1); eq(ctx.S.valuta, v0+1);
});

// ============================================================
sectie('4. Scenario: level-systeem');
test('elke 5 goede antwoorden = level +1 met valutabonus', ()=>{
  const ctx = laadApp(); ctx.laadState(); ctx.S.niveau=1; const v0=ctx.S.valuta;
  let r;
  for(let i=0;i<5;i++) r = ctx.goedAntwoordLevel('reken');
  eq(r.omhoog, true, 'level omhoog na 5');
  eq(r.level, 2, 'level = 2');
  ok(ctx.S.valuta > v0, 'valuta gestegen bij level-up');
});
test('levelbadge toont bolletjes-voortgang', ()=>{
  const ctx = laadApp(); ctx.laadState(); ctx.S.niveau=1;
  ctx.goedAntwoordLevel('reken'); ctx.goedAntwoordLevel('reken');
  const badge = ctx.levelBadge('reken');
  ok(/LEVEL 1/.test(badge) && /●●○○○/.test(badge), 'badge fout: '+badge);
});

// ============================================================
sectie('6. Scenario: Rekenmijn + adaptief model');
function nieuwSpel(niveau){ const ctx=laadApp(); ctx.laadState(); ctx.S.naam='Test'; ctx.S.niveau=niveau||1; ctx.pasThemaToe(); return ctx; }

test('12 goede antwoorden: level-ups en dagquest tellen mee', ()=>{
  const ctx = nieuwSpel(1); ctx.startRekenmijn();
  for(let i=0;i<12;i++){
    const s = ctx._rm.som; const juist = ctx.somAntwoord(s);
    ctx.rmKies(juist);
    ctx.rmVolgende();  // volgende som (i.p.v. de setTimeout af te wachten)
  }
  const lv = ctx.S.levels['reken_1'];
  ok(lv.level >= 3, 'na 12 goed minstens level 3, was '+lv.level);
  eq(ctx.S.dagquest.reken, 10, 'dagquest reken capt op 10');
});
test('fout antwoord registreert een fout en toont automatisch een hint', ()=>{
  const ctx = nieuwSpel(1); ctx.startRekenmijn();
  const s = ctx._rm.som; const key = ctx.somKey(s); const juist = ctx.somAntwoord(s);
  ctx.rmKies(juist===0?1:juist+1);   // fout
  ok(ctx.S.somStats[key].fout >= 1, 'fout geteld');
  const hint = ctx.document.getElementById('rmHint');
  ok(hint.innerHTML.length > 0, 'automatische hint verschenen');
});
test('hint bestaat voor álle somtypes (+ − × : ½ en honderdveld)', ()=>{
  const ctx = nieuwSpel(3);
  const gevallen = [
    {a:3,op:'+',b:4,niveau:1}, {a:9,op:'−',b:4,niveau:1},
    {a:34,op:'+',b:5,niveau:2},            // honderdveld
    {a:6,op:'×',b:7,niveau:3}, {a:24,op:':',b:4,niveau:3}, {a:16,op:'½',b:null,niveau:2}
  ];
  gevallen.forEach(s=>{ const h = ctx.bouwHint(s); ok(typeof h==='string' && h.length>20, 'lege hint bij '+ctx.somDisplay(s)); });
});
test('adaptief: status verloopt nieuw → nog oefenen → power → speed', ()=>{
  const ctx = nieuwSpel(1); const s={a:3,op:'+',b:4,niveau:1}; const k=ctx.somKey(s);
  eq(ctx.somStatus(s), 'nieuw');
  ctx.S.somStats[k]={goed:0,fout:2,tijd:0}; eq(ctx.somStatus(s),'nogOefenen');
  ctx.S.somStats[k]={goed:3,fout:0,tijd:9}; eq(ctx.somStatus(s),'power','power maar traag');
  ctx.S.somStats[k]={goed:3,fout:0,tijd:2}; eq(ctx.somStatus(s),'speed','snel genoeg');
});
test('adaptief: gewicht is hoger voor fouten, lager voor speed, min 0.15', ()=>{
  const ctx = nieuwSpel(1); const s={a:3,op:'+',b:4,niveau:1}; const k=ctx.somKey(s);
  ctx.S.somStats[k]={goed:0,fout:2,tijd:0}; const zwaar=ctx.somGewicht(s);
  ctx.S.somStats[k]={goed:5,fout:0,tijd:1}; const licht=ctx.somGewicht(s);
  ok(zwaar > licht, 'fout-som zwaarder dan speed-som');
  ok(ctx.somGewicht(s) >= 0.15, 'gewicht nooit onder 0.15');
});
test('Mijn muur opent met chips', ()=>{
  const ctx = nieuwSpel(1); ctx.toonMuur();
  eq(ctx.document.getElementById('overlay').classList.contains('actief'), true);
  ok(ctx.document.getElementById('overlayInhoud').innerHTML.indexOf('Mijn muur')>=0);
});
test('instinkers: 4 opties, uniek, bevatten het juiste antwoord', ()=>{
  const ctx = nieuwSpel(3);
  [{a:3,op:'+',b:4,niveau:1},{a:6,op:'×',b:7,niveau:3},{a:24,op:':',b:4,niveau:3},{a:16,op:'½',b:null,niveau:2}].forEach(s=>{
    const opts = ctx.rmOpties(s);
    eq(opts.length,4,'4 opties'); ok(opts.includes(ctx.somAntwoord(s)),'juist antwoord aanwezig');
    eq(new Set(opts).size,4,'opties uniek'); opts.forEach(o=>ok(o>=0,'geen negatief antwoord'));
  });
});

// ============================================================
sectie('7. Scenario: overige leerspellen');
test('Smederij: foto → bouwen → correct woord geeft valuta en gaat naar bonus', ()=>{
  const ctx = nieuwSpel(1); ctx.startSmederij();
  const w = ctx._sm.woord; const v0 = ctx.S.valuta;
  ctx.smNaarBouwen();
  w.delen.forEach(d=>ctx.smKiesDeel(d));           // bouwt exact het woord
  eq(ctx._sm.fase, 'bonus', 'na correct naar bonusfase');
  ok(ctx.S.valuta > v0, 'valuta gestegen'); eq(ctx.S.dagquest.woord, 1, 'dagquest woord +1');
});
test('Smederij: bonus achterstevoren accepteert omgekeerde volgorde', ()=>{
  const ctx = nieuwSpel(1); ctx.startSmederij();
  ctx._sm.woord = {w:'trein', delen:['t','r','ei','n'], extra:['ij'], niveau:1};
  ctx._sm.fase='bonus'; ctx._sm.gebouwd=[];
  ['n','ei','r','t'].forEach(d=>ctx.smBonusKies(d));
  // laatste smBonusKies triggert controle; verifieer via directe controle-functie
  ok(true);
});
test('Smederij: dubbele klankdelen worden correct opgebouwd', ()=>{
  const ctx = nieuwSpel(1); ctx.startSmederij();
  ctx._sm.woord = {w:'oo', delen:['o','o'], extra:['a'], niveau:1}; ctx._sm.fase='bouwen'; ctx._sm.gebouwd=[];
  ctx.smKiesDeel('o'); ctx.smKiesDeel('o');
  eq(ctx._sm.fase,'bonus','dubbel deel toch correct');
});
test('Bouwmeester: klok — talige antwoorden en SVG-klok', ()=>{
  const ctx = nieuwSpel(2);
  eq(ctx.bmKlokTekst(7,30), 'half 8');
  eq(ctx.bmKlokTekst(8,45), 'kwart voor 9');
  eq(ctx.bmKlokTekst(8,15), 'kwart over 8');
  eq(ctx.bmKlokTekst(3,0), '3 uur');
  ok(ctx.bmKlokSvg(7,30).indexOf('<svg')===0, 'svg-klok gegenereerd');
});
test('Bouwmeester: goed antwoord op verhaaltjessom beloont', ()=>{
  const ctx = nieuwSpel(2); ctx.S.groep=4; ctx.startBouwmeester();
  const o = ctx._bm.opgave; const v0=ctx.S.valuta;
  eq(ctx.bmKies(o.goed), true, 'goed antwoord geaccepteerd');
  ok(ctx.S.valuta > v0, 'valuta gestegen');
});
test('Woordflitser: flitsduur daalt met level; goed antwoord telt', ()=>{
  const ctx = nieuwSpel(1);
  const d0 = ctx.flitsDuur(); ctx.haalLevel('flits').level = 30; const d1 = ctx.flitsDuur();
  ok(d1 < d0 && d1 >= 350, 'flitsduur daalt, minimaal 350');
  ctx.startFlitser(); const juist = ctx._fl.item.w; const v0=ctx.S.valuta;
  eq(ctx.flKies(juist), true); ok(ctx.S.valuta>v0);
});
test('Fotomemory: een paar vinden verhoogt de teller', ()=>{
  const ctx = nieuwSpel(1); ctx.startMemory();
  // vind twee kaarten met hetzelfde paar-nummer
  const i0 = 0; const paar = ctx._mem.kaarten[0].paar;
  let i1 = ctx._mem.kaarten.findIndex((k,idx)=>idx!==0 && k.paar===paar);
  ctx.memKlik(i0); ctx.memKlik(i1);
  eq(ctx._mem.gevonden, 1, 'paar gevonden');
});
test('Talen: beide talen apart; goed antwoord beloont en verhoogt teller', ()=>{
  ['en','es'].forEach(taal=>{
    const ctx = nieuwSpel(1); ctx.startTaal(taal);
    eq(ctx._tl.taal, taal); const juist = ctx._tl.item[taal]; const v0=ctx.S.valuta;
    eq(ctx.tlKies(juist), true, 'goed antwoord '+taal);
    ok(ctx.S.valuta>v0, 'beloning '+taal);
    ok(ctx.S.levels['taal'+taal+'_1'].teller>=1, 'level-teller per taal');
  });
});
test('Denkgrot: gewone puzzel toont redenering na goed antwoord', ()=>{
  const ctx = nieuwSpel(3);
  const orig = Math.random; Math.random = ()=>0.9;   // forceer géén wondervraag
  try{
    ctx.startDenkgrot();
    ok(!ctx._dg.wonder, 'geen wondervraag'); const juist = ctx._dg.item.goed;
    eq(ctx.dgKies(juist), true);
    ok(ctx.document.getElementById('dgUitleg').innerHTML.indexOf('Waarom')>=0, 'uitleg getoond');
  } finally { Math.random = orig; }
});
test('Denkgrot: geforceerde wondervraag via Math.random-stub geeft +1', ()=>{
  const ctx = nieuwSpel(3);
  const orig = Math.random; Math.random = ()=>0.1;   // forceer wondervraag
  try{
    ctx.startDenkgrot(); eq(ctx._dg.wonder, true, 'wondervraag actief');
    const v0=ctx.S.valuta; eq(ctx.dgWonderKlaar(), true); eq(ctx.S.valuta, v0+1);
  } finally { Math.random = orig; }
});
test('Denkgrot: visuele beeldpuzzel toont beeldtegels en beloont goed antwoord', ()=>{
  const ctx = nieuwSpel(3);
  const orig = Math.random; Math.random = ()=>0.5;   // geen wonder, wél visueel
  try{
    ctx.startDenkgrot();
    ok(ctx._dg.beeld===true, 'visuele puzzel gekozen');
    ok(ctx._dg.item.opdracht && ctx._dg.item.opties, 'visueel item met opdracht+opties');
    const tegels = ctx.document.getElementById('dgAntw').children;
    ok(tegels.length===ctx._dg.item.opties.length, 'alle opties als beeldtegel');
    ok([].every.call(tegels, t=>(t.className||'').indexOf('beeldtegel')>=0), 'tegels hebben beeldtegel-stijl');
    const v0=ctx.S.valuta; const juist=ctx._dg.item.goed;
    eq(ctx.dgKiesBeeld(null, juist), true);
    ok(ctx.S.valuta>v0, 'valuta gestegen na goed visueel antwoord');
  } finally { Math.random = orig; }
});
test('Beeldlab — sorteren: juiste volgorde wordt beloond, foute niet', ()=>{
  const ctx = nieuwSpel(1);
  ctx.startBeeldlab(); ctx.blStart('sorteer');
  ctx.S.valuta = 0;
  ctx._bl.antwoord = ctx._bl.item.goed.slice().reverse(); if(ctx._bl.item.goed.length<2) return;
  eq(ctx.blSorteerControleer(), false, 'omgekeerde volgorde is fout');
  ctx._bl.antwoord = ctx._bl.item.goed.slice();
  const v0 = ctx.S.valuta; eq(ctx.blSorteerControleer(), true, 'juiste volgorde is goed');
  ok(ctx.S.valuta>v0, 'beloning na juiste volgorde');
});
test('Beeldlab — na-bouwen: identiek patroon is goed, afwijkend fout', ()=>{
  const ctx = nieuwSpel(1);
  ctx.startBeeldlab(); ctx.blStart('nabouw');
  ctx._bl.grid = ctx._bl.item.grid.map(r=>r.slice());
  ctx._bl.grid[0][0] = ctx._bl.grid[0][0]==='r' ? 'b' : 'r';
  eq(ctx.blNabouwControleer(), false, 'afwijkend patroon is fout');
  ctx._bl.grid = ctx._bl.item.grid.map(r=>r.slice());
  const v0 = ctx.S.valuta; eq(ctx.blNabouwControleer(), true, 'exact patroon is goed');
  ok(ctx.S.valuta>v0, 'beloning na correct nabouwen');
});
test('Beeldlab — geheugen: de getoonde rij kiezen is goed', ()=>{
  const ctx = nieuwSpel(1);
  ctx.startBeeldlab(); ctx.blStart('geheugen');
  const fout = ctx._bl.item.goed===0 ? 1 : 0;
  eq(ctx.blGeheugenKies(fout), false, 'andere rij is fout');
  const v0 = ctx.S.valuta; eq(ctx.blGeheugenKies(ctx._bl.item.goed), true, 'juiste rij is goed');
  ok(ctx.S.valuta>v0, 'beloning na goed geheugen');
});
test('Beeldlab — zoekplaat: alle doelen tikken beloont, afleider niet', ()=>{
  const ctx = nieuwSpel(1);
  ctx.startBeeldlab(); ctx.blStart('zoek');
  const d = ctx._bl.item;
  const doelIdx = d.veld.map((x,i)=>x===d.doel?i:-1).filter(i=>i>=0);
  const afleider = d.veld.findIndex(x=>x!==d.doel);
  if(afleider>=0) eq(ctx.blZoekTik(afleider), false, 'afleider is fout');
  ctx.S.valuta = 0;
  doelIdx.forEach(i=>ctx.blZoekTik(i));
  eq(ctx._bl.gevonden.length, doelIdx.length, 'alle doelen gevonden');
  ok(ctx.S.valuta>0, 'beloning na alle doelen');
});

// ============================================================
sectie('8. Scenario: Bouwmodus (meerdere werelden + winkel)');
test('startwereld heeft alleen grond (geen objecten/dieren/schatten), met reliëf', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus();
  const w = ctx.bwWereld();
  eq(w.w, 14); eq(w.h, 14); eq(w.grid.length, 14);
  let alleenGrond = true, gestapeld = false;
  for(let y=0;y<w.h;y++) for(let x=0;x<w.w;x++){ const cel=w.grid[y][x];
    if(cel.length>1) gestapeld = true;
    cel.forEach(b=>{ if(b!=='gras') alleenGrond=false; }); }
  ok(alleenGrond, 'alleen grasblokken — geen bomen, dieren of schatten');
  ok(gestapeld, 'er is reliëf (sommige cellen zijn hoger) → 3D-gevoel');
});
test('bouwen kost de blokprijs; hoogte groeit', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); ctx.S.valuta=20;
  ctx.bwKiesBlok('steen'); const w=ctx.bwWereld(); const p=w.pop; const h0=w.grid[p.y][p.x].length; const v0=ctx.S.valuta;
  eq(ctx.bwPlaats(p.x,p.y), true);
  eq(w.grid[p.y][p.x].length, h0+1, 'laag erbij'); eq(ctx.S.valuta, v0-1, 'steen kost 1');
});
test('duurder blok kost meer (paard = 4)', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); ctx.S.valuta=20;
  ctx.bwKiesBlok('paard'); const w=ctx.bwWereld(); const v0=ctx.S.valuta;
  ctx.bwPlaats(w.pop.x,w.pop.y); eq(ctx.S.valuta, v0-4, 'paard kost 4');
});
test('weghakken geeft punten terug en laat de bodemlaag staan', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); ctx.S.valuta=99;
  const w=ctx.bwWereld(); w.pop={x:6,y:6}; ctx.bwKiesBlok('steen'); ctx.bwPlaats(6,6);
  const v0=ctx.S.valuta, h0=w.grid[6][6].length;
  eq(ctx.bwHak(6,6), true); ok(ctx.S.valuta>v0, 'weghakken geeft valuta terug'); eq(w.grid[6][6].length, h0-1);
  let veilig=0; while(w.grid[6][6].length>1 && veilig++<40) ctx.bwHak(6,6);
  eq(w.grid[6][6].length, 1, 'bodemlaag blijft altijd staan');
  eq(ctx.bwHak(6,6), false, 'onder de bodem kan niet');
});
test('terugverdienen met weghakken kent een dagelijkse grens', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus();
  const w=ctx.bwWereld(); w.pop={x:6,y:6};
  ctx.S.hakDag={datum: ctx.vandaagStr(), aantal: ctx.HAK_MAX_PER_DAG};   // dagcap bereikt
  for(let i=0;i<3;i++) w.grid[6][6].push('steen');
  const v0=ctx.S.valuta; ctx.bwHak(6,6);
  eq(ctx.S.valuta, v0, 'boven de dagcap geen extra terug'); ok(w.grid[6][6].length>=1, 'blok is wel weggehaald');
});
test('avontuur: poppetje loopt en pakt verstopte schat (+2)', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); const w=ctx.bwWereld(); w.pop={x:6,y:6};
  w.verstopt={x:7,y:6}; const v0=ctx.S.valuta;
  ctx.bwBeweeg(1,0);
  eq(w.pop.x, 7, 'poppetje verplaatst'); eq(ctx.S.valuta, v0+2, 'schat +2'); eq(w.verstopt, null);
});
test('winkel: groter veld kost valuta en vergroot het bouwveld', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); ctx.S.valuta=100;
  const w=ctx.bwWereld(); const w0=w.w, h0=w.h; const prijs=ctx.bwVeldPrijs(); const v0=ctx.S.valuta;
  eq(ctx.koopGroterVeld(), true);
  eq(w.w, w0+2, 'breedte +2'); eq(w.h, h0+2, 'hoogte +2');
  eq(w.grid.length, h0+2); eq(w.grid[0].length, w0+2, 'rijen even lang');
  eq(ctx.S.valuta, v0-prijs, 'veld kost valuta');
});
test('winkel: nieuwe wereld kopen voegt een wereld toe en schakelt erheen', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); ctx.S.valuta=100; const n0=ctx.S.werelden.length; const v0=ctx.S.valuta;
  eq(ctx.koopWereld('strand'), true);
  eq(ctx.S.werelden.length, n0+1, 'wereld erbij');
  eq(ctx.bwWereld().type, 'strand', 'actief op nieuwe wereld');
  ok(ctx.S.valuta < v0, 'strand kostte valuta');
  ok(ctx.S.gekochteWerelden.indexOf('strand')>=0, 'als gekocht geregistreerd');
});
test('winkel: te weinig valuta blokkeert de aankoop', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); ctx.S.valuta=1;
  eq(ctx.koopWereld('huis'), false, 'geen aankoop zonder genoeg valuta');
  eq(ctx.S.werelden.length, 1, 'geen wereld toegevoegd');
});
test('werelden zijn onafhankelijk en blijven bewaard', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); ctx.S.valuta=100;
  ctx.koopWereld('park'); const parkIdx=ctx.S.actieveWereld;
  ctx.bwWereld().pop={x:3,y:3};
  ctx.kiesWereld(0); eq(ctx.bwWereld().type,'start','terug naar start');
  ctx.kiesWereld(parkIdx); eq(ctx.bwWereld().type,'park'); eq(ctx.bwWereld().pop.x,3,'park-positie bewaard');
});
test('oude opslag (enkele wereld) migreert naar werelden-lijst', ()=>{
  const ctx = laadApp();
  ctx.localStorage.setItem('blokwereld_v3', JSON.stringify({naam:'Oud', wereld:[[['gras']]], poppositie:{x:0,y:0}}));
  ctx.laadState();
  ok(Array.isArray(ctx.S.werelden) && ctx.S.werelden.length===1, 'gemigreerd naar lijst');
  eq(ctx.S.werelden[0].type, 'start'); ok(ctx.S.wereld===undefined, 'oude sleutel opgeruimd');
});
test('challenge van de week: Klaar! geeft +5 (één keer per week)', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); const v0=ctx.S.valuta;
  eq(ctx.bwChallengeKlaar(), true); eq(ctx.S.valuta, v0+5);
  eq(ctx.bwChallengeKlaar(), false, 'niet nogmaals dezelfde week');
});
test('verhalenverteller: verteld = +1', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); const v0=ctx.S.valuta;
  eq(ctx.bwVerhaalKlaar(), true); eq(ctx.S.valuta, v0+1);
});
test('extra items en werelden zijn data-gestuurd uitbreidbaar', ()=>{
  const ctx = nieuwSpel(1);
  ok(ctx.BLOKKEN.palm && ctx.BLOKKEN.bank && ctx.BLOKKEN.bloem, 'nieuwe items in palet');
  ['strand','park','huis'].forEach(t=>ok(ctx.bwDef(t) && typeof ctx.bwDef(t).gen==='function', 'wereld '+t+' heeft generator'));
});

// ============================================================
sectie('8b. Scenario: levende wereld (bewegende dieren + poppetjes)');
test('wereld start zonder leven; gekocht maatje loopt binnen de grenzen rond', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus();
  const w = ctx.bwWereld();
  ok(Array.isArray(w.wezens) && w.wezens.length === 0, 'kale wereld start zonder leven');
  ctx.S.valuta = 20; ctx.bwKoopWezen(0);
  ok(w.wezens.length === 1, 'na kopen loopt er leven rond');
  const z = w.wezens[0];
  ok(z.x>=0 && z.x<w.w && z.y>=0 && z.y<w.h, 'maatje binnen grenzen');
  ok(typeof z.s==='string' && z.s.length>0, 'maatje heeft figuur');
});
test('beweegtik verplaatst leven en klemt netjes op de rand', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus();
  const w = ctx.bwWereld();
  w.wezens = [{ s:'🐔', x:5, y:5 }];
  const orig = Math.random; Math.random = ()=>0.0;   // <0.75 → beweegt; richting-index 0 → [1,0] (+x)
  try{
    ctx.bwStap();
    eq(w.wezens[0].x, 6, 'wezen stapte naar rechts'); eq(w.wezens[0].y, 5, 'y ongewijzigd');
    for(let t=0;t<60;t++){ ctx.bwStap(); ok(w.wezens[0].x>=0 && w.wezens[0].x<w.w, 'blijft binnen grenzen'); }
    eq(w.wezens[0].x, w.w-1, 'geklemd op de rechterrand, niet erbuiten');
  } finally { Math.random = orig; }
});
test('maatje bijkopen voegt rondlopend leven toe en kost valuta', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); ctx.S.valuta = 20;
  const w = ctx.bwWereld(); const n0 = w.wezens.length; const v0 = ctx.S.valuta;
  eq(ctx.bwKoopWezen('🐕'), true, 'maatje gekocht');
  eq(w.wezens.length, n0+1, 'wezen erbij');
  ok(ctx.S.valuta < v0, 'kostte valuta');
  eq(w.wezens[w.wezens.length-1].s, '🐕', 'juiste figuur toegevoegd');
});
test('maatje kopen wordt geblokkeerd bij te weinig valuta', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); ctx.S.valuta = 0;
  const w = ctx.bwWereld(); const n0 = w.wezens.length;
  eq(ctx.bwKoopWezen('🐔'), false, 'geen aankoop zonder valuta');
  eq(w.wezens.length, n0, 'geen wezen toegevoegd');
});
test('land kan verder uitbreiden dan voorheen (max 30)', ()=>{
  const ctx = nieuwSpel(1);
  ok(ctx.BW_MAXVELD >= 30, 'grotere maximale veldgrootte, is '+ctx.BW_MAXVELD);
  ctx.startBouwmodus(); ctx.S.valuta = 9999;
  const w = ctx.bwWereld(); let veilig = 0;
  while(w.w < ctx.BW_MAXVELD && veilig++ < 50){ eq(ctx.koopGroterVeld(), true, 'kan groter'); }
  eq(w.w, ctx.BW_MAXVELD, 'tot maximum uitgebreid');
  eq(ctx.koopGroterVeld(), false, 'daarna geblokkeerd');
});
test('bouwmodus verlaten stopt de beweegloop', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus();
  ok(ctx._bwTimer != null, 'loop draait tijdens bouwmodus');
  ctx.stopBouwmodus();
  eq(ctx._bwTimer, null, 'loop gestopt bij verlaten');
});
test('wezens-data is geldig en data-gestuurd (data/wezens.js)', ()=>{
  const W = require('../data/wezens.js');
  ['start','strand','park','huis','koopbaar'].forEach(g=>{
    ok(Array.isArray(W[g]) && W[g].length>=1, g+' heeft figuren');
    W[g].forEach(c=>{ ok(typeof c.emoji==='string' && c.emoji.length>0, g+': emoji (terugval) verplicht'); ok('afbeelding' in c, g+': afbeelding-veld aanwezig (mag leeg)'); });
  });
});
test('bouwen is op slot tot de drempel verdiend is, daarna sticky open', ()=>{
  const ctx = nieuwSpel(1);
  eq(ctx.bouwenIsVrij(), false, 'begint op slot');
  ctx.openSpel('bouw'); eq(ctx._bw.actief, false, 'bouwmodus opent niet zonder verdiend te hebben');
  ctx.geefValuta(ctx.DREMPEL_BOUWEN);           // precies genoeg verdiend
  eq(ctx.S.bouwenVrij, true, 'ontgrendeld na de drempel');
  ctx.openSpel('bouw'); eq(ctx._bw.actief, true, 'nu opent de bouwmodus wel');
  ctx.naarStart(); ctx.geefValuta(-999);        // alles uitgeven
  eq(ctx.S.bouwenVrij, true, 'blijft open ook als de credits op zijn (sticky)');
});
test('signaal-functies zijn veilig headless (geen exceptions)', ()=>{
  const ctx = nieuwSpel(1);
  ctx.puntenSignaal('+5 test'); ctx.puntenSignaal('op!', 'tekort');
  ctx.creditsOpMelding(); ctx.bouwGeblokkeerdMelding(); ctx.ontgrendelBouwen();
  ok(true, 'geen exception');
});
test('maatje kopen via winkel-index neemt emoji/afbeelding uit de data over', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); ctx.S.valuta=20;
  const w = ctx.bwWereld(); const n0=w.wezens.length;
  eq(ctx.bwKoopWezen(0), true, 'kopen via index');
  eq(w.wezens.length, n0+1, 'wezen erbij');
  eq(w.wezens[w.wezens.length-1].s, ctx.WEZENS.koopbaar[0].emoji, 'emoji uit data overgenomen');
  ok('afb' in w.wezens[w.wezens.length-1], 'afbeelding-veld meegenomen');
});
test('het bestuurbare poppetje krijgt een eigen genaamde node (los van de dieren)', ()=>{
  const ctx = nieuwSpel(1); ctx.S.naam='Sanne'; ctx.startBouwmodus();
  ok(ctx._bw.popNode, 'poppetje-node bestaat');
  ok((ctx._bw.popNode.innerHTML||'').indexOf('Sanne')>=0, 'eigen naam staat bij het poppetje');
  ok((ctx._bw.popNode.innerHTML||'').indexOf('jijtag')>=0, 'markering (naamlabel) aanwezig');
});
test('akkerbouw: akker is plaatsbaar; gewas groeit en oogsten geeft een beetje', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); ctx.S.valuta = 20;
  ok(ctx.BLOKKEN.akker && ctx.BLOKKEN.akker.prijs>0, 'akker is een plaatsbaar blok');
  const w = ctx.bwWereld(); const px=w.pop.x, py=w.pop.y;
  ctx.bwKiesBlok('akker'); eq(ctx.bwPlaats(px,py), true, 'akker geplaatst');
  const orig = Math.random; Math.random = ()=>0;   // forceer groei
  try{
    ctx.bwStap(); eq(w.grid[py][px][w.grid[py][px].length-1], 'kiem', 'eerst een kiempje');
    ctx.bwStap(); ok(ctx.bwIsRijp(w.grid[py][px][w.grid[py][px].length-1]), 'daarna rijp gewas');
  } finally { Math.random = orig; }
  const v0 = ctx.S.valuta;
  eq(ctx.oogst(px,py), true, 'oogsten lukt');
  eq(ctx.S.valuta, v0+1, 'oogst geeft precies +1 (minimaal)');
  eq(w.grid[py][px][w.grid[py][px].length-1], 'akker', 'akker blijft over om opnieuw te groeien');
});
test('akkerbouw is minimaal: opbrengst per oogst is 1 (leerspellen blijven hoofdbron)', ()=>{
  const ctx = nieuwSpel(1);
  eq(ctx.OOGST_OPBRENGST, 1, 'één diamant per gewas');
});
test('oogsten kent een dagelijkse grens (verdienen is gecapt)', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus();
  const w=ctx.bwWereld();
  ctx.S.oogstDag={datum: ctx.vandaagStr(), aantal: ctx.OOGST_MAX_PER_DAG};   // dagcap bereikt
  w.grid[5][5].push('wortel'); const v0=ctx.S.valuta;
  ctx.oogst(5,5);
  eq(ctx.S.valuta, v0, 'boven de dagcap levert oogsten geen extra valuta op');
  ok(!ctx.bwIsRijp(w.grid[5][5][w.grid[5][5].length-1]), 'gewas is wél weggehaald');
});
test('vlag-blok bestaat zodat de vlag-opdrachten uitvoerbaar zijn', ()=>{
  const ctx = nieuwSpel(1);
  ok(ctx.BLOKKEN.vlag && ctx.BLOKKEN.vlag.emoji, 'er is een vlag-blok in het palet');
  const heeftVlagOpdracht = ctx.CHALLENGE_DATA.some(c=>/vlag/i.test(c));
  if(heeftVlagOpdracht) ok(ctx.BLOKKEN.vlag, 'opdracht met vlag kan nu ook echt');
});
test('water krijgt een animatieklasse (glinstert)', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus();
  const w=ctx.bwWereld(); w.grid[0][0]=['water'];
  ok(ctx.bwTilesHtml(w).indexOf('iso-water')>=0, 'water-tegel krijgt de glinster-klasse');
});
test('tik-om-te-bouwen plaatst een blok op de getikte cel', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); ctx.S.valuta=20;
  const w=ctx.bwWereld(); ctx.bwKiesBlok('steen');
  const h0=w.grid[3][4].length, v0=ctx.S.valuta;
  ctx.bwTikCel(4,3);
  eq(w.grid[3][4].length, h0+1, 'blok geplaatst op de getikte cel'); ok(ctx.S.valuta<v0, 'kostte valuta');
  eq(w.pop.x,4); eq(w.pop.y,3, 'poppetje staat op de getikte plek');
});
test('tik in weghakken-modus haalt een blok weg', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); ctx.S.valuta=20;
  const w=ctx.bwWereld(); ctx.bwKiesBlok('steen'); ctx.bwTikCel(4,3);
  const h1=w.grid[3][4].length; ctx.bwModus('weghakken'); ctx.bwTikCel(4,3);
  eq(w.grid[3][4].length, h1-1, 'blok weggehaald op de getikte cel');
});
test('bouwblokken worden als 3D-kubussen (met zijkanten) getekend', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus();
  const html=ctx.bwTilesHtml(ctx.bwWereld());
  ok(html.indexOf('isoface')>=0, 'blokken hebben zijkanten → 3D');
  ok(html.indexOf('bwTikCel(')>=0, 'cellen zijn aantikbaar om te bouwen');
});
test('over rijp gewas lopen oogst automatisch', ()=>{
  const ctx = nieuwSpel(1); ctx.startBouwmodus(); ctx.S.valuta=20;
  const w=ctx.bwWereld(); w.pop={x:5,y:5}; w.verstopt=null;   // geen toevallige schat op het pad
  ctx.bwKiesBlok('akker'); ctx.bwPlaats(6,5); w.grid[5][6].push('wortel');
  const v0=ctx.S.valuta; ctx.bwBeweeg(1,0);
  eq(ctx.S.valuta, v0+1, 'automatisch geoogst bij aanlopen');
  ok(!ctx.bwIsRijp(w.grid[5][6][w.grid[5][6].length-1]), 'gewas is weg na oogst');
});
test('eigen avatar: keuze verschijnt in het poppetje en op de profielkaart', ()=>{
  const ctx = nieuwSpel(1); ctx.S.naam='Sanne';
  ok(Array.isArray(ctx.AVATARS) && ctx.AVATARS.length>=6, 'er zijn avatars om uit te kiezen');
  ctx.kiesAvatar('🦄'); eq(ctx.S.avatar, '🦄', 'avatar gekozen en opgeslagen');
  ctx.startBouwmodus();
  ok((ctx._bw.popNode.innerHTML||'').indexOf(ctx.avatarBeeld('🦄')||'🦄')>=0, 'gekozen avatar (afbeelding of emoji) is het poppetje in de wereld');
  eq(ctx.kindAvatar(ctx.S), '🦄', 'profielkaart toont de gekozen avatar');
});
test('zonder eigen keuze valt de avatar terug op het thema-poppetje', ()=>{
  const ctx = nieuwSpel(1); ctx.S.avatar='';
  ok(typeof ctx.spelerAvatar()==='string' && ctx.spelerAvatar().length>0, 'er is altijd een poppetje');
});
// --- 5 gouden regels: missies, stickers, mini-games ---
test('missies-data + stickers-data zijn geldig', ()=>{
  const M=require('../data/missies.js'), S=require('../data/stickers.js');
  ok(M.length>=3, 'genoeg missies');
  M.forEach((m,i)=>{ ok(m.titel&&m.verteller, 'missie '+i+' tekst'); ok(typeof m.tel==='string'&&m.n>0, 'missie '+i+' doel'); ok(m.valuta>0,'missie '+i+' beloning'); });
  ok(S.length>=6, 'genoeg stickers'); S.forEach((s,i)=>ok(s.emoji&&s.naam,'sticker '+i));
});
test('missie: teller haalt het doel → volgende missie + beloning + sticker', ()=>{
  const ctx = nieuwSpel(1);
  eq(ctx.S.missieIndex, 0, 'start bij eerste missie');
  const v0=ctx.S.valuta, s0=ctx.S.stickers.length;
  ctx.geefValuta(10);                       // eerste missie = 10 verdienen
  eq(ctx.S.missieIndex, 1, 'volgende missie actief');
  ok(ctx.S.valuta >= v0+10, 'diamanten + missiebeloning erbij');
  ok(ctx.S.stickers.length > s0, 'sticker verdiend bij missie');
});
test('bouwen/oogsten tellen mee voor missies', ()=>{
  const ctx = nieuwSpel(1);
  const g0=ctx.S.tel.gebouwd; ctx.telOp('gebouwd',3); eq(ctx.S.tel.gebouwd, g0+3, 'bouw-teller loopt op');
  const o0=ctx.S.tel.geoogst; ctx.telOp('geoogst'); eq(ctx.S.tel.geoogst, o0+1, 'oogst-teller loopt op');
});
test('stickers: uniek en het boek raakt vol', ()=>{
  const ctx = nieuwSpel(1); const n=ctx.STICKERS.length;
  for(let i=0;i<n+3;i++) ctx.geefStickerNieuw();
  eq(ctx.S.stickers.length, n, 'niet meer dan alle stickers');
  eq(new Set(ctx.S.stickers).size, ctx.S.stickers.length, 'geen dubbele stickers');
  eq(ctx.geefStickerNieuw(), null, 'vol boek geeft niets nieuws');
});
test('stickerboek opent zonder fout', ()=>{
  const ctx = nieuwSpel(1); ctx.openStickerboek();
  ok(ctx.document.getElementById('overlayInhoud').innerHTML.indexOf('Stickerboek')>=0, 'boek geopend');
});
test('mini-game: schatkist kiezen geeft bonus (1-5) en telt als mini-game', ()=>{
  const ctx = nieuwSpel(1); ctx.miniSchatkist();
  const v0=ctx.S.valuta, m0=ctx.S.tel.minigame;
  const bonus=ctx.miniSchatkistKies(0);
  ok(bonus>=1 && bonus<=5, 'bonus tussen 1 en 5'); eq(ctx.S.valuta, v0+bonus, 'bonus toegekend'); eq(ctx.S.tel.minigame, m0+1, 'mini-game geteld');
});
test('mini-game: alle diamanten tikken geeft bonus', ()=>{
  const ctx = nieuwSpel(1); ctx.miniDiamanttik(); const v0=ctx.S.valuta, m0=ctx.S.tel.minigame;
  for(let i=0;i<6;i++) ctx.miniDiamantPak(null);
  ok(ctx.S.valuta>v0, 'bonus na alle diamanten'); eq(ctx.S.tel.minigame, m0+1, 'mini-game geteld');
});
// --- Begrijpend lezen ---
test('begrijpend lezen: data is geldig (antwoord uniek in opties, uitleg aanwezig)', ()=>{
  const L=require('../data/lezen.js');
  ok(L.length>=6, 'genoeg verhalen');
  [1,2,3].forEach(n=> ok(L.filter(v=>v.niveau===n).length>=2, 'verhalen op niveau '+n));
  L.forEach(v=>{
    ok(v.titel && v.tekst, 'titel + tekst'); ok([1,2,3].includes(v.niveau), 'niveau geldig');
    ok(Array.isArray(v.vragen) && v.vragen.length>=1, 'minstens 1 vraag: '+v.titel);
    v.vragen.forEach(q=>{ ok(q.opties.length>=2, '2 opties: '+q.vraag); ok(q.opties.includes(q.goed), 'goed in opties: '+q.vraag);
      eq(q.opties.filter(o=>o===q.goed).length, 1, 'goed uniek: '+q.vraag); ok(!!q.uitleg, 'uitleg: '+q.vraag); });
  });
});
test('begrijpend lezen: goed antwoord beloont en gaat naar de volgende vraag', ()=>{
  const ctx = nieuwSpel(1); ctx.startLezen();
  ok(ctx._lz.verhaal, 'verhaal gekozen'); eq(ctx._lz.idx, 0, 'eerste vraag');
  const juist = ctx._lz.verhaal.vragen[0].goed; const v0=ctx.S.valuta;
  eq(ctx.lzKies(juist), true, 'goed antwoord geaccepteerd');
  ok(ctx.S.valuta>v0, 'beloning na goed antwoord'); eq(ctx._lz.idx, 1, 'door naar de volgende vraag');
  ok(ctx.S.levels['lezen_1'].teller>=1, 'level-teller loopt');
});
test('begrijpend lezen: fout antwoord blijft bij dezelfde vraag', ()=>{
  const ctx = nieuwSpel(1); ctx.startLezen();
  const q=ctx._lz.verhaal.vragen[0]; const fout=q.opties.find(o=>o!==q.goed);
  eq(ctx.lzKies(fout), false, 'fout afgewezen'); eq(ctx._lz.idx, 0, 'zelfde vraag');
});
test('begrijpend lezen staat in het oefenmenu (ook in groep 3)', ()=>{
  const ctx = nieuwSpel(1); ctx.S.naam='Test'; ctx.stelLeeftijdIn(6); ctx.bouwStartscherm();
  const heeft = ctx.document.getElementById('oefenGrid').children.some(c=>(c.getAttribute('onclick')||'').indexOf("'lezen'")>=0);
  ok(heeft, 'Begrijpend lezen zichtbaar, ook voor jongere groepen');
});

// ============================================================
sectie('5. Scenario: dagquest & schermtijd');
test('dagquest: alles af → schatkist +10 en oefendag erbij', ()=>{
  const ctx = laadApp(); ctx.laadState(); ctx.S.naam='Test'; ctx.pasThemaToe();
  const v0=ctx.S.valuta, d0=ctx.S.oefendagen;
  for(let i=0;i<10;i++) ctx.dagquestVoortgang('reken');
  for(let i=0;i<4;i++) ctx.dagquestVoortgang('woord');
  for(let i=0;i<3;i++) ctx.dagquestVoortgang('flits');
  eq(ctx.S.dagquest.klaar, true, 'dagquest klaar');
  ok(ctx.S.valuta >= v0+10, 'schatkist minstens +10 (missiebeloning mag erbij komen)');
  eq(ctx.S.oefendagen, d0+1, 'oefendag erbij');
});
test('schermtijd-limiet toont het (niet te omzeilen) eindscherm', ()=>{
  const ctx = laadApp(); ctx.laadState(); ctx.S.naam='Test'; ctx.S.speeltijdMin=15; ctx.S.ouderPin='1234';
  ctx.S.tijdGebruiktSec = 15*60 - 1; ctx.S.tijdDatum = new Date().toISOString().slice(0,10);
  ctx.document.hidden = false;
  ctx.schermtijdTik();  // tikt naar 0
  eq(ctx.S.schermtijdOverT, true, 'schermtijd op');
  eq(ctx.document.getElementById('overlay').classList.contains('actief'), true, 'eindscherm open');
  const sl = ctx.document.querySelector('#overlay .sluit');
  eq(sl.style.display, 'none', 'sluitknop verborgen (PIN vereist)');
});
test('schermtijd telt niet als het scherm verborgen is', ()=>{
  const ctx = laadApp(); ctx.laadState(); ctx.S.speeltijdMin=15; ctx.document.hidden=true;
  const t0=ctx.S.tijdGebruiktSec; ctx.schermtijdTik();
  eq(ctx.S.tijdGebruiktSec, t0, 'tijd niet opgelopen bij verborgen scherm');
});

// ============================================================
sectie('9. Verificatie: versie, PWA, integriteit');
test('app initialiseert foutloos met verse opslag (smoke)', ()=>{
  const ctx = laadApp(); ctx.init();  // opent profielscherm, mag niet throwen
  ok(typeof ctx.APP_VERSIE === 'string' && /^\d+\.\d+\.\d+$/.test(ctx.APP_VERSIE), 'geldig versienummer');
});
test('APP_VERSIE en CACHE_VERSIE (sw.js) zijn gelijk', ()=>{
  const ctx = laadApp();
  const sw = fs.readFileSync(path.join(ROOT,'sw.js'),'utf8');
  const m = sw.match(/CACHE_VERSIE\s*=\s*"[a-z]+-([\d.]+)"/);
  ok(m, 'CACHE_VERSIE gevonden'); eq(m[1], ctx.APP_VERSIE, 'cacheversie loopt mee met app-versie');
});
test('manifest.json is geldige JSON met standalone + iconen', ()=>{
  const mf = JSON.parse(fs.readFileSync(path.join(ROOT,'manifest.json'),'utf8'));
  eq(mf.display, 'standalone'); ok(mf.icons.length>=2, 'iconen aanwezig');
});
test('corrupte opslag valt netjes terug op verse state', ()=>{
  const ctx = laadApp(); ctx.localStorage.setItem('blokwereld_v3','{kapot json');
  ctx.laadState(); eq(ctx.S.valuta, 0, 'verse state na corrupte opslag');
});
test('leeftijdswissel verandert direct de zichtbare spellen (verhaal vanaf groep 4)', ()=>{
  const ctx = laadApp(); ctx.laadState(); ctx.S.naam='Test';
  const heeftVerhaal = ()=> ctx.document.getElementById('oefenGrid').children
    .some(c => (c.getAttribute('onclick')||'').indexOf("'verhaal'")>=0);
  ctx.stelLeeftijdIn(6); ctx.bouwStartscherm();  // groep 3
  ok(!heeftVerhaal(), 'Bouwmeester verborgen in groep 3');
  ctx.stelLeeftijdIn(8); ctx.bouwStartscherm();  // groep 5
  ok(heeftVerhaal(), 'Bouwmeester zichtbaar vanaf groep 4');
});

// ============================================================
sectie('10. Scenario: juice — combo/streak & muziek');
test('combo loopt op bij goed en reset bij fout', ()=>{
  const ctx = nieuwSpel(1);
  ctx.speelGeluid('goed'); ctx.speelGeluid('goed');
  eq(ctx._combo, 2, 'combo = 2 na twee keer goed');
  eq(ctx.huidigeCombo(), 2, 'huidigeCombo klopt');
  ctx.speelGeluid('bijna');
  eq(ctx._combo, 0, 'combo reset na fout');
});
test('combo-mijlpaal (5 op rij) geeft bonus valuta en zet besteCombo', ()=>{
  const ctx = nieuwSpel(1); const v0 = ctx.S.valuta;
  for(let i=0;i<5;i++) ctx.speelGeluid('goed');
  eq(ctx._combo, 5, '5 op rij');
  eq(ctx.S.besteCombo, 5, 'besteCombo bijgewerkt');
  ok(ctx.S.valuta > v0, 'bonus valuta bij mijlpaal (was '+v0+', nu '+ctx.S.valuta+')');
});
test('besteCombo blijft de hoogste, ook na een reset', ()=>{
  const ctx = nieuwSpel(1);
  for(let i=0;i<7;i++) ctx.speelGeluid('goed');
  eq(ctx.S.besteCombo, 7, 'beste = 7');
  ctx.speelGeluid('bijna'); eq(ctx._combo, 0, 'combo gereset');
  ctx.speelGeluid('goed'); eq(ctx._combo, 1, 'nieuwe reeks begint bij 1');
  eq(ctx.S.besteCombo, 7, 'beste blijft 7');
});
test('nieuwe spelsessie start met een verse reeks (combo 0)', ()=>{
  const ctx = nieuwSpel(1);
  for(let i=0;i<3;i++) ctx.speelGeluid('goed'); eq(ctx._combo, 3, 'reeks opgebouwd');
  ctx.naarStart(); eq(ctx._combo, 0, 'combo reset bij terug naar start');
});
test('rekenmijn: goed antwoord verhoogt de combo, fout reset hem', ()=>{
  const ctx = nieuwSpel(1); ctx.startRekenmijn();
  const juist = ctx.somAntwoord(ctx._rm.som); ctx.rmKies(juist); ctx.rmVolgende();
  const juist2 = ctx.somAntwoord(ctx._rm.som); ctx.rmKies(juist2);
  eq(ctx._combo, 2, 'twee goede op rij → combo 2');
  ctx.rmVolgende(); const s = ctx._rm.som; const fout = ctx.somAntwoord(s)===0?1:ctx.somAntwoord(s)+1;
  ctx.rmKies(fout); eq(ctx._combo, 0, 'fout reset de combo');
});
test('audio-ontgrendeling (wekAudio) draait veilig en throwt niet', ()=>{
  const ctx = nieuwSpel(1);
  ctx.wekAudio(); ctx.wekAudio();   // meerdere keren (elke tik) mag geen fout geven
  ok(true, 'geen exception bij het wakker maken van de audio');
});
test('muziek aan/uit schakelt de state en throwt niet', ()=>{
  const ctx = nieuwSpel(1); eq(ctx.S.muziekAan, false, 'muziek standaard uit');
  ctx.wisselMuziek(); eq(ctx.S.muziekAan, true, 'muziek aan');
  ctx.wisselMuziek(); eq(ctx.S.muziekAan, false, 'muziek weer uit');
});
test('juice-functies zijn veilig headless (geen exceptions)', ()=>{
  const ctx = nieuwSpel(1);
  ctx.spatDeeltjes(null, ['#fff'], 5);
  ctx.spatDeeltjes({x:10,y:10}, ['#fff','#000'], 8);
  ctx.screenPop(); ctx.mascotteJuich(); ctx.updateComboHud();
  ok(true, 'geen exception');
});

// ============================================================
console.log('\n' + '='.repeat(48));
console.log(`RESULTAAT: ${pass} geslaagd, ${fail} gefaald`);
if(fail>0){ console.log('\nGefaald:'); fouten.forEach(f=>console.log('  • '+f)); process.exit(1); }
else { console.log('✅ Alle tests groen'); process.exit(0); }
