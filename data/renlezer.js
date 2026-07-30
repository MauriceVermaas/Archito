// data/renlezer.js — RENLEZER: lees-en-doe. Een korte zin verschijnt; het kind LEEST hem en
// kiest de juiste actie (springen, bukken, stoppen, ...). Zo koppelt het lezen meteen aan doen —
// motiverend en concreet voor beelddenkers/dyslexie. Voorlezen kan als hint, maar het doel is lezen.
//
// Elk item: { zin, opties:[...], goed, niveau:1-3 }
// Regels (bewaakt door de testsuite):
//   - 'goed' staat letterlijk én uniek in 'opties' (2 of 3 opties)
//   - 'zin' aanwezig · niveau 1-3
// niveau 1 = kort/concreet (groep 3), 2 = oorzaak-gevolg (groep 4-5), 3 = nadenken/inferentie (groep 6+).
var RENLEZER = [
  // ---------- niveau 1 (groep 3): kort en letterlijk ----------
  { zin:"Er ligt een boom op het pad.",   opties:["Springen","Bukken"],  goed:"Springen", niveau:1 },
  { zin:"Een tak hangt heel laag.",        opties:["Bukken","Springen"],  goed:"Bukken",   niveau:1 },
  { zin:"Voor je is een diepe plas.",      opties:["Springen","Stoppen"], goed:"Springen", niveau:1 },
  { zin:"Het licht is rood.",              opties:["Stoppen","Rennen"],   goed:"Stoppen",  niveau:1 },
  { zin:"De weg is helemaal vrij.",        opties:["Rennen","Stoppen"],   goed:"Rennen",   niveau:1 },
  { zin:"Er staat een hoge muur.",         opties:["Stoppen","Rennen"],   goed:"Stoppen",  niveau:1 },
  { zin:"Een laag hekje staat op het pad.",opties:["Springen","Bukken"],  goed:"Springen", niveau:1 },
  { zin:"Het licht is groen.",             opties:["Rennen","Stoppen"],   goed:"Rennen",   niveau:1 },

  // ---------- niveau 2 (groep 4-5): oorzaak/gevolg ----------
  { zin:"Er ligt een grote steen midden op het pad.",        opties:["Eromheen","Erdoorheen"],       goed:"Eromheen",   niveau:2 },
  { zin:"De brug heeft een groot gat in het midden.",        opties:["Springen","Doorlopen"],        goed:"Springen",   niveau:2 },
  { zin:"Een tak met scherpe doorns hangt laag.",            opties:["Bukken","Springen"],           goed:"Bukken",     niveau:2 },
  { zin:"Links is het pad modderig, rechts is het droog.",   opties:["Rechts","Links"],              goed:"Rechts",     niveau:2 },
  { zin:"Een hond slaapt precies midden op het pad.",        opties:["Zachtjes langs","Erover springen"], goed:"Zachtjes langs", niveau:2 },
  { zin:"Voor je stroomt een snelle rivier zonder brug.",    opties:["Stoppen","Erin springen"],     goed:"Stoppen",    niveau:2 },

  // ---------- niveau 3 (groep 6+): nadenken/inferentie ----------
  { zin:"De grond trilt en er rollen stenen van de heuvel naar beneden.", opties:["Wegrennen","Blijven staan"],           goed:"Wegrennen",              niveau:3 },
  { zin:"Het heeft net geregend en de tegels zijn spekglad.",             opties:["Rustig lopen","Hard rennen"],          goed:"Rustig lopen",           niveau:3 },
  { zin:"Een smalle tak ligt als brug over een diep ravijn.",             opties:["Voorzichtig eroverheen","Eronderdoor"], goed:"Voorzichtig eroverheen", niveau:3 },
  { zin:"In de verte hoor je een trein aankomen bij de overweg.",         opties:["Wachten","Snel oversteken"],           goed:"Wachten",                niveau:3 },
  { zin:"De tunnel is donker, maar aan het eind schijnt licht.",          opties:["Doorlopen","Omkeren"],                 goed:"Doorlopen",              niveau:3 },
  { zin:"Er hangt dikke mist en je ziet het pad bijna niet.",             opties:["Langzaam lopen","Blind rennen"],       goed:"Langzaam lopen",         niveau:3 }
];
if (typeof module !== 'undefined') module.exports = RENLEZER;
