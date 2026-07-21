// data/missies.js — verhaallijn/missies die het oefenen een doel geven ("help mee, verdien, bouw").
// Sequentieel. Elke missie heeft een teller (tel) + doelaantal (n) en een beloning (valuta).
// tel-waarden: verdiend | geoogst | gebouwd | dagquest | levelups | minigame (bijgehouden in S.tel).
var MISSIES = [
  { titel:"Bram wil bouwen!", verteller:"Verdien je eerste diamanten met oefenen, dan kun je beginnen.", tel:"verdiend", n:10, valuta:5 },
  { titel:"De eerste steen", verteller:"Plaats 5 blokken in je eigen wereld.", tel:"gebouwd", n:5, valuta:6 },
  { titel:"De boerderij ontwaakt", verteller:"Leg een akker aan en oogst 3 keer groente of fruit.", tel:"geoogst", n:3, valuta:8 },
  { titel:"Vaste oefenaar", verteller:"Rond de dagquest af (kom 2 dagen oefenen).", tel:"dagquest", n:2, valuta:10 },
  { titel:"Levelheld", verteller:"Ga 10 keer een level omhoog in de leerspellen.", tel:"levelups", n:10, valuta:12 },
  { titel:"Grote bouwmeester", verteller:"Bouw in totaal 30 blokken bij elkaar.", tel:"gebouwd", n:30, valuta:15 },
  { titel:"Spelmeester", verteller:"Speel 3 mini-spelletjes na een level.", tel:"minigame", n:3, valuta:15 }
];
if (typeof module !== 'undefined') module.exports = MISSIES;
