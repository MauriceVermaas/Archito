// data/mascottes.js — de mascotte per thema (startscherm).
// Voor ouders/redacteuren: elk thema heeft een eigen maatje dat het kind begroet en aanmoedigt.
// Formaat per thema: { emoji, naam, zinnen:[...], afbeelding? }
//   emoji      — het figuurtje als emoji (gebruikt als er geen afbeelding is).
//   naam       — de naam van de mascotte.
//   zinnen     — aanmoedigingen die het maatje uitspreekt (minstens 1).
//   afbeelding — (optioneel) een eigen plaatje: een pad ("mascottes/bram.png") of een
//                data-URL uit het beheer. Staat er een afbeelding, dan toont de app die
//                in plaats van de emoji. Zo kun je de emoji's vervangen door eigen beelden.

var MASCOTTES = {
  craft:   { emoji:"🦫", naam:"Bram de Bouwbever", afbeelding:"mascottes/mascotte-bram.png", zinnen:["Zullen we samen blokjes hakken?","Elke som is een nieuw blokje voor je wereld!","Kom, we gaan bouwen!"] },
  galaxy:  { emoji:"👽", naam:"Kosmo", afbeelding:"mascottes/mascotte-kosmo.png", zinnen:["Klaar voor de lancering?","Elke ster die je verdient laat je verder reizen!","Op naar het volgende sterrenstelsel!"] },
  powerup: { emoji:"🍄", naam:"Turbo", afbeelding:"mascottes/mascotte-turbo.png", zinnen:["Pak die power-up en ga ervoor!","Elk goed antwoord is een muntje extra!","Sprong-klaar? Let's go!"] },
  unicorn: { emoji:"🦄", naam:"Fee", afbeelding:"mascottes/mascotte-fee.png", zinnen:["Laten we samen dromen waarmaken!","Elk hartje maakt je droomwereld mooier!","Sprankelen maar!"] },
  voetbal: { emoji:"🦁", naam:"Leo de Leeuw", afbeelding:"mascottes/mascotte-leo.png", zinnen:["Klaar voor de wedstrijd?","Elk goed antwoord is een doelpunt!","Kom op, wij scoren dit!"] },
  zeemeermin: { emoji:"🧜‍♀️", naam:"Merel de Zeemeermin", afbeelding:"mascottes/mascotte-merel.png", zinnen:["Duik je mee de zee in?","Elke schelp maakt je paleis mooier!","Zwem maar lekker verder!"] }
};

if (typeof module !== 'undefined') module.exports = MASCOTTES;
