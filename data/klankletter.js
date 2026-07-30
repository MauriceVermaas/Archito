// data/klankletter.js — KLANKENJACHT: klank → letter koppelen (beginnend lezen, groep 3+).
// Speciaal voor beelddenkers/dyslexie: het WOORD wordt voorgelezen en met een PLAATJE getoond,
// het kind kiest de juiste LETTER. Trainen van de verwarrende spiegel-letters (b/d/p) staat centraal.
//
// Elk item: { woord, plaatje, letter, opties:[...], positie:"begin"|"eind", niveau:1-3 }
// Regels (bewaakt door de testsuite):
//   - 'letter' staat in 'opties' (opties zijn uniek, minstens 2)
//   - positie "begin": woord begint met letter · positie "eind": woord eindigt op letter
//   - 'plaatje' aanwezig · niveau 1-3
// niveau 1 = eerste beginletters (veel b/d/p), 2 = klinkers + meer letters, 3 = eindklank horen.
var KLANKLETTER = [
  // ---------- niveau 1 (groep 3): beginletter, nadruk op b/d/p ----------
  { woord:"bal",  plaatje:"🏀", letter:"b", opties:["b","d","p"], positie:"begin", niveau:1 },
  { woord:"doos", plaatje:"📦", letter:"d", opties:["d","b","p"], positie:"begin", niveau:1 },
  { woord:"poes", plaatje:"🐱", letter:"p", opties:["p","b","d"], positie:"begin", niveau:1 },
  { woord:"maan", plaatje:"🌙", letter:"m", opties:["m","n","w"], positie:"begin", niveau:1 },
  { woord:"neus", plaatje:"👃", letter:"n", opties:["n","m","u"], positie:"begin", niveau:1 },
  { woord:"vis",  plaatje:"🐟", letter:"v", opties:["v","w","f"], positie:"begin", niveau:1 },
  { woord:"kip",  plaatje:"🐔", letter:"k", opties:["k","p","b"], positie:"begin", niveau:1 },
  { woord:"roos", plaatje:"🌹", letter:"r", opties:["r","n","m"], positie:"begin", niveau:1 },
  { woord:"zon",  plaatje:"☀️", letter:"z", opties:["z","s","c"], positie:"begin", niveau:1 },
  { woord:"huis", plaatje:"🏠", letter:"h", opties:["h","n","k"], positie:"begin", niveau:1 },

  // ---------- niveau 2 (groep 4-5): klinkers en meer medeklinkers ----------
  { woord:"appel",   plaatje:"🍎", letter:"a", opties:["a","o","e"], positie:"begin", niveau:2 },
  { woord:"olifant", plaatje:"🐘", letter:"o", opties:["o","a","u"], positie:"begin", niveau:2 },
  { woord:"egel",    plaatje:"🦔", letter:"e", opties:["e","a","i"], positie:"begin", niveau:2 },
  { woord:"uil",     plaatje:"🦉", letter:"u", opties:["u","o","a"], positie:"begin", niveau:2 },
  { woord:"slang",   plaatje:"🐍", letter:"s", opties:["s","z","c"], positie:"begin", niveau:2 },
  { woord:"tijger",  plaatje:"🐅", letter:"t", opties:["t","d","k"], positie:"begin", niveau:2 },
  { woord:"fiets",   plaatje:"🚲", letter:"f", opties:["f","v","w"], positie:"begin", niveau:2 },
  { woord:"wolk",    plaatje:"☁️", letter:"w", opties:["w","v","m"], positie:"begin", niveau:2 },
  { woord:"geit",    plaatje:"🐐", letter:"g", opties:["g","k","h"], positie:"begin", niveau:2 },
  { woord:"lamp",    plaatje:"💡", letter:"l", opties:["l","r","i"], positie:"begin", niveau:2 },

  // ---------- niveau 3 (groep 6+): welke letter hoor je aan het EIND ----------
  { woord:"bal",    plaatje:"🏀", letter:"l", opties:["l","r","n"], positie:"eind", niveau:3 },
  { woord:"huis",   plaatje:"🏠", letter:"s", opties:["s","z","f"], positie:"eind", niveau:3 },
  { woord:"boom",   plaatje:"🌳", letter:"m", opties:["m","n","p"], positie:"eind", niveau:3 },
  { woord:"maan",   plaatje:"🌙", letter:"n", opties:["n","m","l"], positie:"eind", niveau:3 },
  { woord:"taart",  plaatje:"🎂", letter:"t", opties:["t","d","k"], positie:"eind", niveau:3 },
  { woord:"appel",  plaatje:"🍎", letter:"l", opties:["l","r","n"], positie:"eind", niveau:3 },
  { woord:"ster",   plaatje:"⭐", letter:"r", opties:["r","l","n"], positie:"eind", niveau:3 },
  { woord:"boek",   plaatje:"📖", letter:"k", opties:["k","g","p"], positie:"eind", niveau:3 },
  { woord:"schaap", plaatje:"🐑", letter:"p", opties:["p","b","d"], positie:"eind", niveau:3 },
  { woord:"vuur",   plaatje:"🔥", letter:"r", opties:["r","n","l"], positie:"eind", niveau:3 }
];
if (typeof module !== 'undefined') module.exports = KLANKLETTER;
