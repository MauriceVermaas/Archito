// data/beelddenken.js — VISUEEL denken voor beelddenkers (rechterbrein).
// Voor ouders/redacteuren: dit is bewust bijna zonder leestekst. Het kind kijkt naar
// beelden en tikt op het juiste plaatje. Alles wordt ook voorgelezen.
//
// Formaat per puzzel: { soort, opdracht, toon?, opties, goed, uitleg, niveau }
//   soort   — type puzzel (zie hieronder), bepaalt vooral de korte opdrachttekst/uitleg.
//   opdracht— heel korte, voorleesbare instructie (1 zin).
//   toon    — (optioneel) rij grote beelden als 'prompt' bovenaan; gebruik "❓" voor een gat.
//   opties  — grote tikbare beeldtegels; 'goed' staat hier altijd letterlijk in.
//   goed    — het juiste beeld (moet in 'opties' staan).
//   uitleg  — korte, voorleesbare uitleg na goed antwoord.
//   niveau  — 1 = groep 3, 2 = groep 4, 3 = groep 5+.
//
// Soorten: anders (hoort er niet bij), reeks (maak de rij af), draai (draai-/pijlpatroon),
//          spiegel (andere kant op), zelfde (zoek dezelfde), grootte (grootste/kleinste),
//          gat (ontbrekend stuk in het patroon).

var BEELD_DENKEN = [
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐶",
      "🐱",
      "🐰",
      "🚗"
    ],
    "goed": "🚗",
    "uitleg": "Hond, kat en konijn zijn dieren. De auto hoort er niet bij.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍎",
      "🍌",
      "🍇",
      "⚽"
    ],
    "goed": "⚽",
    "uitleg": "Appel, banaan en druiven zijn fruit. De bal hoort er niet bij.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌳",
      "🌲",
      "🌴",
      "🐟"
    ],
    "goed": "🐟",
    "uitleg": "Het zijn allemaal bomen, behalve de vis.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚗",
      "🚙",
      "🚌",
      "🍦"
    ],
    "goed": "🍦",
    "uitleg": "Auto, jeep en bus rijden. Het ijsje hoort er niet bij.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke kleur hoort er niet bij?",
    "toon": [
      "🔴",
      "🔴",
      "🔴"
    ],
    "opties": [
      "🔴",
      "🔵",
      "🔴"
    ],
    "goed": "🔵",
    "uitleg": "Bijna alles is rood. Alleen de blauwe valt op.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "👟",
      "👟",
      "👞",
      "🧦"
    ],
    "goed": "🧦",
    "uitleg": "Het zijn schoenen, behalve de sok.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🟥",
      "🟦",
      "🟩",
      "🐸"
    ],
    "goed": "🐸",
    "uitleg": "Het zijn gekleurde vlakken, behalve de kikker.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍓",
      "🍒",
      "🍅",
      "🥦"
    ],
    "goed": "🥦",
    "uitleg": "Aardbei, kers en tomaat zijn rood. De broccoli is groen.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welk dier past niet in het water?",
    "opties": [
      "🐟",
      "🐬",
      "🐙",
      "🦁"
    ],
    "goed": "🦁",
    "uitleg": "Vis, dolfijn en octopus leven in het water. De leeuw niet.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🔺",
      "🔺",
      "🔺",
      "🔷"
    ],
    "goed": "🔷",
    "uitleg": "Drie zijn rode driehoeken. De blauwe ruit is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke vliegt niet?",
    "opties": [
      "🦋",
      "🐝",
      "🐞",
      "🐌"
    ],
    "goed": "🐌",
    "uitleg": "Vlinder, bij en lieveheersbeestje vliegen. De slak niet.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔴",
      "🔵",
      "🔴",
      "🔵",
      "❓"
    ],
    "opties": [
      "🔴",
      "🔵",
      "🟢"
    ],
    "goed": "🔴",
    "uitleg": "Rood en blauw wisselen af. Na blauw komt weer rood.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⬛",
      "⬜",
      "⬛",
      "⬜",
      "❓"
    ],
    "opties": [
      "⬛",
      "⬜"
    ],
    "goed": "⬛",
    "uitleg": "Zwart en wit wisselen af. Na wit komt zwart.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍎",
      "🍐",
      "🍎",
      "🍐",
      "🍎",
      "❓"
    ],
    "opties": [
      "🍎",
      "🍐"
    ],
    "goed": "🍐",
    "uitleg": "Appel en peer wisselen af. Na appel komt de peer.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔺",
      "🔺",
      "🔻",
      "🔺",
      "🔺",
      "❓"
    ],
    "opties": [
      "🔺",
      "🔻"
    ],
    "goed": "🔻",
    "uitleg": "Twee omhoog, dan één omlaag. Nu is de omlaag aan de beurt.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌑",
      "🌓",
      "🌕",
      "🌑",
      "🌓",
      "❓"
    ],
    "opties": [
      "🌕",
      "🌑"
    ],
    "goed": "🌕",
    "uitleg": "De maan wordt steeds voller en begint dan opnieuw. Nu komt de volle maan.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🟦",
      "🟨",
      "🟨",
      "🟦",
      "🟨",
      "🟨",
      "❓"
    ],
    "opties": [
      "🟦",
      "🟨"
    ],
    "goed": "🟦",
    "uitleg": "Eén blauw, dan twee geel, steeds opnieuw. Nu is blauw weer aan de beurt.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐤",
      "🐤",
      "🐣",
      "🐤",
      "🐤",
      "❓"
    ],
    "opties": [
      "🐣",
      "🐤"
    ],
    "goed": "🐣",
    "uitleg": "Steeds twee kuikens, dan een ei. Nu komt het ei.",
    "niveau": 3
  },
  {
    "soort": "draai",
    "opdracht": "Welke pijl komt hierna?",
    "toon": [
      "⬆️",
      "➡️",
      "⬇️",
      "❓"
    ],
    "opties": [
      "⬅️",
      "⬆️",
      "➡️"
    ],
    "goed": "⬅️",
    "uitleg": "De pijl draait steeds een kwartslag met de klok mee. Na omlaag komt naar links.",
    "niveau": 2
  },
  {
    "soort": "draai",
    "opdracht": "Welke pijl komt hierna?",
    "toon": [
      "↖️",
      "⬆️",
      "↗️",
      "➡️",
      "❓"
    ],
    "opties": [
      "↘️",
      "⬅️",
      "↙️"
    ],
    "goed": "↘️",
    "uitleg": "De pijl draait rondje met de klok mee. Na rechts komt schuin naar rechtsonder.",
    "niveau": 3
  },
  {
    "soort": "draai",
    "opdracht": "Welke klok komt hierna?",
    "toon": [
      "🕐",
      "🕑",
      "🕒",
      "❓"
    ],
    "opties": [
      "🕓",
      "🕔",
      "🕛"
    ],
    "goed": "🕓",
    "uitleg": "De wijzer schuift steeds een uur op. Na 3 uur komt 4 uur.",
    "niveau": 3
  },
  {
    "soort": "spiegel",
    "opdracht": "Welke kijkt de andere kant op?",
    "toon": [
      "👉"
    ],
    "opties": [
      "👉",
      "👈",
      "👆"
    ],
    "goed": "👈",
    "uitleg": "De hand wijst naar rechts. De gespiegelde wijst naar links.",
    "niveau": 1
  },
  {
    "soort": "spiegel",
    "opdracht": "Welke wijst de andere kant op?",
    "toon": [
      "➡️"
    ],
    "opties": [
      "➡️",
      "⬅️",
      "⬆️"
    ],
    "goed": "⬅️",
    "uitleg": "De pijl wijst naar rechts. De spiegel wijst naar links.",
    "niveau": 1
  },
  {
    "soort": "spiegel",
    "opdracht": "Welke kijkt de andere kant op?",
    "toon": [
      "🏃"
    ],
    "opties": [
      "🏃",
      "🏃‍♀️",
      "🚶"
    ],
    "goed": "🏃‍♀️",
    "uitleg": "Zoek het figuur dat de andere richting op beweegt.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🐸"
    ],
    "opties": [
      "🐢",
      "🐸",
      "🦎"
    ],
    "goed": "🐸",
    "uitleg": "De kikker is precies dezelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "⭐"
    ],
    "opties": [
      "✨",
      "🌟",
      "⭐"
    ],
    "goed": "⭐",
    "uitleg": "Deze ster ziet er precies zo uit als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🔵"
    ],
    "opties": [
      "🔷",
      "🔵",
      "🟢"
    ],
    "goed": "🔵",
    "uitleg": "De ronde blauwe is precies dezelfde.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌷"
    ],
    "opties": [
      "🌹",
      "🌷",
      "🌻"
    ],
    "goed": "🌷",
    "uitleg": "Deze tulp is precies dezelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "grootte",
    "opdracht": "Tik op het grootste dier.",
    "opties": [
      "🐘",
      "🐭",
      "🐜"
    ],
    "goed": "🐘",
    "uitleg": "De olifant is het grootst.",
    "niveau": 1
  },
  {
    "soort": "grootte",
    "opdracht": "Tik op het kleinste dier.",
    "opties": [
      "🐋",
      "🐟",
      "🦐"
    ],
    "goed": "🦐",
    "uitleg": "De garnaal is het kleinst.",
    "niveau": 1
  },
  {
    "soort": "grootte",
    "opdracht": "Tik op het grootste.",
    "opties": [
      "🌰",
      "🎃",
      "🍒"
    ],
    "goed": "🎃",
    "uitleg": "De pompoen is het grootst.",
    "niveau": 2
  },
  {
    "soort": "grootte",
    "opdracht": "Tik op het kleinste.",
    "opties": [
      "🚚",
      "🚲",
      "✈️"
    ],
    "goed": "🚲",
    "uitleg": "De fiets is het kleinst.",
    "niveau": 2
  },
  {
    "soort": "gat",
    "opdracht": "Welk stuk hoort in het gat?",
    "toon": [
      "🟥",
      "🟦",
      "🟥",
      "🟦",
      "❓",
      "🟦",
      "🟥",
      "🟦",
      "🟥"
    ],
    "opties": [
      "🟥",
      "🟦"
    ],
    "goed": "🟥",
    "uitleg": "Rood en blauw staan om en om als een dambord. In het midden hoort rood.",
    "niveau": 2
  },
  {
    "soort": "gat",
    "opdracht": "Welk stuk hoort in het gat?",
    "toon": [
      "🌸",
      "🍃",
      "🌸",
      "🍃",
      "❓",
      "🍃",
      "🌸",
      "🍃",
      "🌸"
    ],
    "opties": [
      "🌸",
      "🍃"
    ],
    "goed": "🌸",
    "uitleg": "Bloem en blad staan om en om. In het midden hoort een bloem.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🦁",
      "🐸",
      "🐮",
      "🌵"
    ],
    "goed": "🌵",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍎",
      "🔺",
      "🍌",
      "🍍"
    ],
    "goed": "🔺",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚲",
      "🦊",
      "🚗",
      "🚚"
    ],
    "goed": "🦊",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🔺",
      "🍊",
      "🔴",
      "🟦"
    ],
    "goed": "🍊",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌷",
      "🔺",
      "🌸",
      "🌵"
    ],
    "goed": "🔺",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐔",
      "🟦",
      "🐰",
      "🐶"
    ],
    "goed": "🟦",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🔺",
      "🍍",
      "🍎",
      "🍒"
    ],
    "goed": "🔺",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚀",
      "🚂",
      "🍓",
      "🚌"
    ],
    "goed": "🍓",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚚",
      "🟠",
      "🟨",
      "🟡"
    ],
    "goed": "🚚",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍃",
      "🌳",
      "🌻",
      "🍇"
    ],
    "goed": "🍇",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐻",
      "🦊",
      "🍍",
      "🐯"
    ],
    "goed": "🍍",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍇",
      "🍑",
      "🚚",
      "🍌"
    ],
    "goed": "🚚",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🦁",
      "✈️",
      "🚚",
      "⛵"
    ],
    "goed": "🦁",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🟨",
      "🟡",
      "🔺",
      "🐔"
    ],
    "goed": "🐔",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌳",
      "🐷",
      "🌵",
      "🌻"
    ],
    "goed": "🐷",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐰",
      "🐯",
      "🐱",
      "🍒"
    ],
    "goed": "🍒",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍐",
      "🌷",
      "🍌",
      "🍒"
    ],
    "goed": "🌷",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐶",
      "🚂",
      "🚗",
      "🚚"
    ],
    "goed": "🐶",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "⬛",
      "🌴",
      "🟢",
      "🟡"
    ],
    "goed": "🌴",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍃",
      "🌷",
      "🌻",
      "🟠"
    ],
    "goed": "🟠",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍊",
      "🐔",
      "🐶",
      "🐷"
    ],
    "goed": "🍊",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍓",
      "🍒",
      "🍐",
      "🚚"
    ],
    "goed": "🚚",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚂",
      "🚚",
      "🚗",
      "🌻"
    ],
    "goed": "🌻",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚲",
      "🟢",
      "🔵",
      "🟡"
    ],
    "goed": "🚲",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌸",
      "🍃",
      "🐱",
      "🌵"
    ],
    "goed": "🐱",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐮",
      "🐰",
      "🐶",
      "🟡"
    ],
    "goed": "🟡",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍒",
      "🍊",
      "🍉",
      "🟠"
    ],
    "goed": "🟠",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚗",
      "⛵",
      "🍇",
      "🚚"
    ],
    "goed": "🍇",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍑",
      "🔴",
      "🔵",
      "🟦"
    ],
    "goed": "🍑",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌵",
      "🍃",
      "🌸",
      "⛵"
    ],
    "goed": "⛵",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐮",
      "🐸",
      "🌻",
      "🐔"
    ],
    "goed": "🌻",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍍",
      "🚚",
      "🍉",
      "🍒"
    ],
    "goed": "🚚",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚗",
      "⛵",
      "🚌",
      "🐸"
    ],
    "goed": "🐸",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍎",
      "🔺",
      "🟢",
      "🟡"
    ],
    "goed": "🍎",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍃",
      "🌻",
      "🍉",
      "🌴"
    ],
    "goed": "🍉",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚂",
      "🐸",
      "🐔",
      "🐱"
    ],
    "goed": "🚂",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍑",
      "🟢",
      "🍒",
      "🍎"
    ],
    "goed": "🟢",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "⛵",
      "🚂",
      "🚲",
      "🍓"
    ],
    "goed": "🍓",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🔴",
      "🔵",
      "🔺",
      "🌳"
    ],
    "goed": "🌳",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍃",
      "🌷",
      "🟡",
      "🌵"
    ],
    "goed": "🟡",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐷",
      "🟦",
      "🐻",
      "🐶"
    ],
    "goed": "🟦",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍎",
      "🍌",
      "🍒",
      "🌵"
    ],
    "goed": "🌵",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍐",
      "⛵",
      "🚀",
      "🚗"
    ],
    "goed": "🍐",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚌",
      "🟠",
      "🟦",
      "⬛"
    ],
    "goed": "🚌",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌵",
      "🌷",
      "🌵",
      "🌷",
      "❓"
    ],
    "opties": [
      "🌴",
      "🌵",
      "🌷"
    ],
    "goed": "🌵",
    "uitleg": "Het patroon wisselt af. Na 🌷 komt weer 🌵.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐰",
      "🐔",
      "🐰",
      "🐔",
      "❓"
    ],
    "opties": [
      "🐰",
      "🐮",
      "🐔"
    ],
    "goed": "🐰",
    "uitleg": "Het patroon wisselt af. Na 🐔 komt weer 🐰.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐸",
      "🐰",
      "🐸",
      "🐰",
      "❓"
    ],
    "opties": [
      "🐸",
      "🐰",
      "🐱"
    ],
    "goed": "🐸",
    "uitleg": "Het patroon wisselt af. Na 🐰 komt weer 🐸.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚗",
      "🚂",
      "🚗",
      "🚂",
      "❓"
    ],
    "opties": [
      "⛵",
      "🚂",
      "🚗"
    ],
    "goed": "🚗",
    "uitleg": "Het patroon wisselt af. Na 🚂 komt weer 🚗.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐷",
      "🦊",
      "🐷",
      "🦊",
      "❓"
    ],
    "opties": [
      "🐷",
      "🐱",
      "🦊"
    ],
    "goed": "🐷",
    "uitleg": "Het patroon wisselt af. Na 🦊 komt weer 🐷.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐶",
      "🦁",
      "🐶",
      "🦁",
      "❓"
    ],
    "opties": [
      "🐶",
      "🐮",
      "🦁"
    ],
    "goed": "🐶",
    "uitleg": "Het patroon wisselt af. Na 🦁 komt weer 🐶.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔴",
      "🔵",
      "🔴",
      "🔵",
      "❓"
    ],
    "opties": [
      "⬛",
      "🔵",
      "🔴"
    ],
    "goed": "🔴",
    "uitleg": "Het patroon wisselt af. Na 🔵 komt weer 🔴.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍑",
      "🍊",
      "🍑",
      "🍊",
      "❓"
    ],
    "opties": [
      "🍑",
      "🍊",
      "🍉"
    ],
    "goed": "🍑",
    "uitleg": "Het patroon wisselt af. Na 🍊 komt weer 🍑.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍑",
      "🍐",
      "🍑",
      "🍐",
      "❓"
    ],
    "opties": [
      "🍑",
      "🍉",
      "🍐"
    ],
    "goed": "🍑",
    "uitleg": "Het patroon wisselt af. Na 🍐 komt weer 🍑.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐶",
      "🐱",
      "🐶",
      "🐱",
      "❓"
    ],
    "opties": [
      "🐱",
      "🐰",
      "🐶"
    ],
    "goed": "🐶",
    "uitleg": "Het patroon wisselt af. Na 🐱 komt weer 🐶.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚌",
      "🚀",
      "🚌",
      "🚀",
      "❓"
    ],
    "opties": [
      "🚀",
      "✈️",
      "🚌"
    ],
    "goed": "🚌",
    "uitleg": "Het patroon wisselt af. Na 🚀 komt weer 🚌.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⛵",
      "🚗",
      "⛵",
      "🚗",
      "❓"
    ],
    "opties": [
      "🚌",
      "⛵",
      "🚗"
    ],
    "goed": "⛵",
    "uitleg": "Het patroon wisselt af. Na 🚗 komt weer ⛵.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍃",
      "🌴",
      "🍃",
      "🌴",
      "❓"
    ],
    "opties": [
      "🌳",
      "🌴",
      "🍃"
    ],
    "goed": "🍃",
    "uitleg": "Het patroon wisselt af. Na 🌴 komt weer 🍃.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🟠",
      "🟨",
      "🟠",
      "🟨",
      "❓"
    ],
    "opties": [
      "🟦",
      "🟠",
      "🟨"
    ],
    "goed": "🟠",
    "uitleg": "Het patroon wisselt af. Na 🟨 komt weer 🟠.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐻",
      "🐯",
      "🐻",
      "🐯",
      "❓"
    ],
    "opties": [
      "🐻",
      "🐯",
      "🐮"
    ],
    "goed": "🐻",
    "uitleg": "Het patroon wisselt af. Na 🐯 komt weer 🐻.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍎",
      "🍇",
      "🍎",
      "🍇",
      "❓"
    ],
    "opties": [
      "🍎",
      "🍇",
      "🍉"
    ],
    "goed": "🍎",
    "uitleg": "Het patroon wisselt af. Na 🍇 komt weer 🍎.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐱",
      "🐻",
      "🐱",
      "🐻",
      "❓"
    ],
    "opties": [
      "🦊",
      "🐻",
      "🐱"
    ],
    "goed": "🐱",
    "uitleg": "Het patroon wisselt af. Na 🐻 komt weer 🐱.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐷",
      "🐰",
      "🐷",
      "🐰",
      "❓"
    ],
    "opties": [
      "🐰",
      "🐷",
      "🐻"
    ],
    "goed": "🐷",
    "uitleg": "Het patroon wisselt af. Na 🐰 komt weer 🐷.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌷",
      "🌵",
      "🌷",
      "🌵",
      "❓"
    ],
    "opties": [
      "🌸",
      "🌵",
      "🌷"
    ],
    "goed": "🌷",
    "uitleg": "Het patroon wisselt af. Na 🌵 komt weer 🌷.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍌",
      "🍐",
      "🍌",
      "🍐",
      "❓"
    ],
    "opties": [
      "🍐",
      "🍎",
      "🍌"
    ],
    "goed": "🍌",
    "uitleg": "Het patroon wisselt af. Na 🍐 komt weer 🍌.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐯",
      "🐸",
      "🐯",
      "🐸",
      "❓"
    ],
    "opties": [
      "🐸",
      "🐷",
      "🐯"
    ],
    "goed": "🐯",
    "uitleg": "Het patroon wisselt af. Na 🐸 komt weer 🐯.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍑",
      "🍓",
      "🍑",
      "🍓",
      "❓"
    ],
    "opties": [
      "🍓",
      "🍎",
      "🍑"
    ],
    "goed": "🍑",
    "uitleg": "Het patroon wisselt af. Na 🍓 komt weer 🍑.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍇",
      "🍍",
      "🍇",
      "🍍",
      "❓"
    ],
    "opties": [
      "🍐",
      "🍍",
      "🍇"
    ],
    "goed": "🍇",
    "uitleg": "Het patroon wisselt af. Na 🍍 komt weer 🍇.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⛵",
      "🚂",
      "⛵",
      "🚂",
      "❓"
    ],
    "opties": [
      "⛵",
      "🚀",
      "🚂"
    ],
    "goed": "⛵",
    "uitleg": "Het patroon wisselt af. Na 🚂 komt weer ⛵.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⬛",
      "🟡",
      "⬛",
      "🟡",
      "❓"
    ],
    "opties": [
      "🟡",
      "🟠",
      "⬛"
    ],
    "goed": "⬛",
    "uitleg": "Het patroon wisselt af. Na 🟡 komt weer ⬛.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⬛",
      "🔴",
      "⬛",
      "🔴",
      "❓"
    ],
    "opties": [
      "⬛",
      "🔵",
      "🔴"
    ],
    "goed": "⬛",
    "uitleg": "Het patroon wisselt af. Na 🔴 komt weer ⬛.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌷",
      "🌸",
      "🌷",
      "🌸",
      "❓"
    ],
    "opties": [
      "🌴",
      "🌷",
      "🌸"
    ],
    "goed": "🌷",
    "uitleg": "Het patroon wisselt af. Na 🌸 komt weer 🌷.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🟠",
      "🟡",
      "🟠",
      "🟡",
      "❓"
    ],
    "opties": [
      "⬛",
      "🟠",
      "🟡"
    ],
    "goed": "🟠",
    "uitleg": "Het patroon wisselt af. Na 🟡 komt weer 🟠.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐶",
      "🐔",
      "🐶",
      "🐔",
      "❓"
    ],
    "opties": [
      "🐔",
      "🦁",
      "🐶"
    ],
    "goed": "🐶",
    "uitleg": "Het patroon wisselt af. Na 🐔 komt weer 🐶.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐭",
      "🐷",
      "🐭",
      "🐷",
      "❓"
    ],
    "opties": [
      "🦁",
      "🐷",
      "🐭"
    ],
    "goed": "🐭",
    "uitleg": "Het patroon wisselt af. Na 🐷 komt weer 🐭.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🔵"
    ],
    "opties": [
      "🔵",
      "🟢",
      "🟣"
    ],
    "goed": "🔵",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🐷"
    ],
    "opties": [
      "🐻",
      "🐷",
      "🐮"
    ],
    "goed": "🐷",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟠"
    ],
    "opties": [
      "🔵",
      "🔴",
      "🟠"
    ],
    "goed": "🟠",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍎"
    ],
    "opties": [
      "🍎",
      "🍊",
      "🍓"
    ],
    "goed": "🍎",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🚲"
    ],
    "opties": [
      "🚗",
      "🚲",
      "🚚"
    ],
    "goed": "🚲",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🦊"
    ],
    "opties": [
      "🦊",
      "🐻",
      "🐯"
    ],
    "goed": "🦊",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟦"
    ],
    "opties": [
      "🟦",
      "🟣",
      "🔵"
    ],
    "goed": "🟦",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍒"
    ],
    "opties": [
      "🍒",
      "🍐",
      "🍓"
    ],
    "goed": "🍒",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍓"
    ],
    "opties": [
      "🍍",
      "🍎",
      "🍓"
    ],
    "goed": "🍓",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🚌"
    ],
    "opties": [
      "🚀",
      "🚌",
      "🚚"
    ],
    "goed": "🚌",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍓"
    ],
    "opties": [
      "🍍",
      "🍓",
      "🍎"
    ],
    "goed": "🍓",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍎"
    ],
    "opties": [
      "🍇",
      "🍉",
      "🍎"
    ],
    "goed": "🍎",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🦁"
    ],
    "opties": [
      "🦊",
      "🦁",
      "🐮"
    ],
    "goed": "🦁",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟨"
    ],
    "opties": [
      "🟦",
      "🟢",
      "🟨"
    ],
    "goed": "🟨",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🚂"
    ],
    "opties": [
      "⛵",
      "🚂",
      "✈️"
    ],
    "goed": "🚂",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌻"
    ],
    "opties": [
      "🌴",
      "🌻",
      "🌷"
    ],
    "goed": "🌻",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌸"
    ],
    "opties": [
      "🌻",
      "🌸",
      "🌵"
    ],
    "goed": "🌸",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🐱"
    ],
    "opties": [
      "🐮",
      "🐯",
      "🐱"
    ],
    "goed": "🐱",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🐭"
    ],
    "opties": [
      "🐻",
      "🐰",
      "🐭"
    ],
    "goed": "🐭",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌻"
    ],
    "opties": [
      "🌻",
      "🌴",
      "🌸"
    ],
    "goed": "🌻",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🚌"
    ],
    "opties": [
      "🚌",
      "🚗",
      "🚂"
    ],
    "goed": "🚌",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🦊"
    ],
    "opties": [
      "🦊",
      "🐭",
      "🐻"
    ],
    "goed": "🦊",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🚂"
    ],
    "opties": [
      "✈️",
      "🚂",
      "🚌"
    ],
    "goed": "🚂",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍎"
    ],
    "opties": [
      "🍎",
      "🍇",
      "🍌"
    ],
    "goed": "🍎",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍃"
    ],
    "opties": [
      "🌴",
      "🌳",
      "🍃"
    ],
    "goed": "🍃",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🚲"
    ],
    "opties": [
      "🚂",
      "🚲",
      "🚗"
    ],
    "goed": "🚲",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🔴"
    ],
    "opties": [
      "🔴",
      "⬛",
      "🟣"
    ],
    "goed": "🔴",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟨"
    ],
    "opties": [
      "🟨",
      "⬛",
      "🔴"
    ],
    "goed": "🟨",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟠"
    ],
    "opties": [
      "🟠",
      "🟦",
      "⬛"
    ],
    "goed": "🟠",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟦"
    ],
    "opties": [
      "🟡",
      "🟨",
      "🟦"
    ],
    "goed": "🟦",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🔴",
      "🐔",
      "🐯",
      "🐸"
    ],
    "goed": "🔴",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍒",
      "🍊",
      "🔴",
      "🍇"
    ],
    "goed": "🔴",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚚",
      "🚗",
      "🍌",
      "🚲"
    ],
    "goed": "🍌",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🔴",
      "🍌",
      "🟦",
      "🔵"
    ],
    "goed": "🍌",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌳",
      "🌵",
      "🟢",
      "🌸"
    ],
    "goed": "🟢",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🦊",
      "🍓",
      "🐭",
      "🐷"
    ],
    "goed": "🍓",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍉",
      "🔴",
      "🍓",
      "🍎"
    ],
    "goed": "🔴",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "✈️",
      "🚚",
      "🐭",
      "🚀"
    ],
    "goed": "🐭",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🔺",
      "🔵",
      "🐸",
      "⬛"
    ],
    "goed": "🐸",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌷",
      "🟡",
      "🌳",
      "🌴"
    ],
    "goed": "🟡",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🦁",
      "🐭",
      "🦊",
      "🔴"
    ],
    "goed": "🔴",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍒",
      "🍓",
      "🦁",
      "🍎"
    ],
    "goed": "🦁",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍉",
      "🚗",
      "🚌",
      "⛵"
    ],
    "goed": "🍉",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🟠",
      "🍑",
      "🟣",
      "🟨"
    ],
    "goed": "🍑",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌷",
      "🌵",
      "🍇",
      "🌸"
    ],
    "goed": "🍇",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚀",
      "🐮",
      "🐷",
      "🐱"
    ],
    "goed": "🚀",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍍",
      "🍌",
      "🍉",
      "🟠"
    ],
    "goed": "🟠",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚗",
      "🍃",
      "🚚",
      "🚂"
    ],
    "goed": "🍃",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🔵",
      "🔴",
      "🚌",
      "🟡"
    ],
    "goed": "🚌",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌳",
      "🌴",
      "🚗",
      "🍃"
    ],
    "goed": "🚗",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐰",
      "🍃",
      "🐔",
      "🐷"
    ],
    "goed": "🍃",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍑",
      "🦊",
      "🍒",
      "🍎"
    ],
    "goed": "🦊",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚚",
      "✈️",
      "🚗",
      "🟢"
    ],
    "goed": "🟢",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🔴",
      "🌵",
      "🟢",
      "⬛"
    ],
    "goed": "🌵",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌷",
      "🍑",
      "🌻",
      "🌴"
    ],
    "goed": "🍑",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐱",
      "🐭",
      "🐔",
      "🟦"
    ],
    "goed": "🟦",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐰",
      "🍊",
      "🍑",
      "🍉"
    ],
    "goed": "🐰",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌳",
      "🚀",
      "🚲",
      "⛵"
    ],
    "goed": "🌳",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐷",
      "🟡",
      "🔵",
      "🟦"
    ],
    "goed": "🐷",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐭",
      "🍃",
      "🌴",
      "🌵"
    ],
    "goed": "🐭",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐔",
      "🍑",
      "🐭",
      "🐻"
    ],
    "goed": "🍑",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🟡",
      "🍊",
      "🍌",
      "🍑"
    ],
    "goed": "🟡",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🟨",
      "🚂",
      "⛵",
      "🚚"
    ],
    "goed": "🟨",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🔵",
      "🚗",
      "🔺",
      "🔴"
    ],
    "goed": "🚗",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌵",
      "🟠",
      "🍃",
      "🌸"
    ],
    "goed": "🟠",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍓",
      "🐯",
      "🦁",
      "🐻"
    ],
    "goed": "🍓",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍓",
      "🟢",
      "🍐",
      "🍒"
    ],
    "goed": "🟢",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚀",
      "🚗",
      "🌻",
      "🚌"
    ],
    "goed": "🌻",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚀",
      "🔺",
      "🟣",
      "⬛"
    ],
    "goed": "🚀",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌸",
      "🌴",
      "🍃",
      "🐰"
    ],
    "goed": "🐰",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐮",
      "🐯",
      "🟣",
      "🐸"
    ],
    "goed": "🟣",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍌",
      "⬛",
      "🍉",
      "🍐"
    ],
    "goed": "⬛",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚲",
      "✈️",
      "🍍",
      "🚀"
    ],
    "goed": "🍍",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🟢",
      "🟨",
      "🐯",
      "🟣"
    ],
    "goed": "🐯",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌻",
      "🌴",
      "🌻",
      "🌴",
      "❓"
    ],
    "opties": [
      "🌻",
      "🌷",
      "🌴"
    ],
    "goed": "🌻",
    "uitleg": "Het patroon wisselt af. Na 🌴 komt weer 🌻.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍉",
      "🍍",
      "🍉",
      "🍍",
      "❓"
    ],
    "opties": [
      "🍉",
      "🍍",
      "🍇"
    ],
    "goed": "🍉",
    "uitleg": "Het patroon wisselt af. Na 🍍 komt weer 🍉.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌵",
      "🌻",
      "🌵",
      "🌻",
      "❓"
    ],
    "opties": [
      "🍃",
      "🌻",
      "🌵"
    ],
    "goed": "🌵",
    "uitleg": "Het patroon wisselt af. Na 🌻 komt weer 🌵.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔵",
      "🟠",
      "🔵",
      "🟠",
      "❓"
    ],
    "opties": [
      "🔺",
      "🔵",
      "🟠"
    ],
    "goed": "🔵",
    "uitleg": "Het patroon wisselt af. Na 🟠 komt weer 🔵.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐻",
      "🦊",
      "🐻",
      "🦊",
      "❓"
    ],
    "opties": [
      "🦊",
      "🐱",
      "🐻"
    ],
    "goed": "🐻",
    "uitleg": "Het patroon wisselt af. Na 🦊 komt weer 🐻.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍓",
      "🍑",
      "🍓",
      "🍑",
      "❓"
    ],
    "opties": [
      "🍓",
      "🍇",
      "🍑"
    ],
    "goed": "🍓",
    "uitleg": "Het patroon wisselt af. Na 🍑 komt weer 🍓.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍌",
      "🍓",
      "🍌",
      "🍓",
      "❓"
    ],
    "opties": [
      "🍓",
      "🍊",
      "🍌"
    ],
    "goed": "🍌",
    "uitleg": "Het patroon wisselt af. Na 🍓 komt weer 🍌.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐮",
      "🐯",
      "🐮",
      "🐯",
      "❓"
    ],
    "opties": [
      "🐮",
      "🐻",
      "🐯"
    ],
    "goed": "🐮",
    "uitleg": "Het patroon wisselt af. Na 🐯 komt weer 🐮.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌳",
      "🍃",
      "🌳",
      "🍃",
      "❓"
    ],
    "opties": [
      "🍃",
      "🌸",
      "🌳"
    ],
    "goed": "🌳",
    "uitleg": "Het patroon wisselt af. Na 🍃 komt weer 🌳.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔵",
      "🟢",
      "🔵",
      "🟢",
      "❓"
    ],
    "opties": [
      "🔵",
      "🟢",
      "⬛"
    ],
    "goed": "🔵",
    "uitleg": "Het patroon wisselt af. Na 🟢 komt weer 🔵.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔴",
      "🟠",
      "🔴",
      "🟠",
      "❓"
    ],
    "opties": [
      "🟠",
      "🟢",
      "🔴"
    ],
    "goed": "🔴",
    "uitleg": "Het patroon wisselt af. Na 🟠 komt weer 🔴.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🦁",
      "🦊",
      "🦁",
      "🦊",
      "❓"
    ],
    "opties": [
      "🐔",
      "🦁",
      "🦊"
    ],
    "goed": "🦁",
    "uitleg": "Het patroon wisselt af. Na 🦊 komt weer 🦁.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐸",
      "🐷",
      "🐸",
      "🐷",
      "❓"
    ],
    "opties": [
      "🐷",
      "🦊",
      "🐸"
    ],
    "goed": "🐸",
    "uitleg": "Het patroon wisselt af. Na 🐷 komt weer 🐸.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🦊",
      "🐮",
      "🦊",
      "🐮",
      "❓"
    ],
    "opties": [
      "🦊",
      "🦁",
      "🐮"
    ],
    "goed": "🦊",
    "uitleg": "Het patroon wisselt af. Na 🐮 komt weer 🦊.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍊",
      "🍎",
      "🍊",
      "🍎",
      "❓"
    ],
    "opties": [
      "🍎",
      "🍌",
      "🍊"
    ],
    "goed": "🍊",
    "uitleg": "Het patroon wisselt af. Na 🍎 komt weer 🍊.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍍",
      "🍐",
      "🍍",
      "🍐",
      "❓"
    ],
    "opties": [
      "🍇",
      "🍐",
      "🍍"
    ],
    "goed": "🍍",
    "uitleg": "Het patroon wisselt af. Na 🍐 komt weer 🍍.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚂",
      "⛵",
      "🚂",
      "⛵",
      "❓"
    ],
    "opties": [
      "🚗",
      "⛵",
      "🚂"
    ],
    "goed": "🚂",
    "uitleg": "Het patroon wisselt af. Na ⛵ komt weer 🚂.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐸",
      "🐷",
      "🐸",
      "🐷",
      "❓"
    ],
    "opties": [
      "🐶",
      "🐷",
      "🐸"
    ],
    "goed": "🐸",
    "uitleg": "Het patroon wisselt af. Na 🐷 komt weer 🐸.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍃",
      "🌵",
      "🍃",
      "🌵",
      "❓"
    ],
    "opties": [
      "🌴",
      "🍃",
      "🌵"
    ],
    "goed": "🍃",
    "uitleg": "Het patroon wisselt af. Na 🌵 komt weer 🍃.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐶",
      "🦊",
      "🐶",
      "🦊",
      "❓"
    ],
    "opties": [
      "🦊",
      "🐶",
      "🐯"
    ],
    "goed": "🐶",
    "uitleg": "Het patroon wisselt af. Na 🦊 komt weer 🐶.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐯",
      "🐰",
      "🐯",
      "🐰",
      "❓"
    ],
    "opties": [
      "🐯",
      "🐰",
      "🦊"
    ],
    "goed": "🐯",
    "uitleg": "Het patroon wisselt af. Na 🐰 komt weer 🐯.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍃",
      "🌸",
      "🍃",
      "🌸",
      "❓"
    ],
    "opties": [
      "🍃",
      "🌸",
      "🌴"
    ],
    "goed": "🍃",
    "uitleg": "Het patroon wisselt af. Na 🌸 komt weer 🍃.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🟢",
      "🔺",
      "🟢",
      "🔺",
      "❓"
    ],
    "opties": [
      "🟢",
      "🔺",
      "🔴"
    ],
    "goed": "🟢",
    "uitleg": "Het patroon wisselt af. Na 🔺 komt weer 🟢.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐭",
      "🦁",
      "🐭",
      "🦁",
      "❓"
    ],
    "opties": [
      "🦁",
      "🐭",
      "🐶"
    ],
    "goed": "🐭",
    "uitleg": "Het patroon wisselt af. Na 🦁 komt weer 🐭.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🟠",
      "🔺",
      "🟠",
      "🔺",
      "❓"
    ],
    "opties": [
      "🟠",
      "🔵",
      "🔺"
    ],
    "goed": "🟠",
    "uitleg": "Het patroon wisselt af. Na 🔺 komt weer 🟠.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐸",
      "🐯",
      "🐸",
      "🐯",
      "❓"
    ],
    "opties": [
      "🐯",
      "🐸",
      "🐰"
    ],
    "goed": "🐸",
    "uitleg": "Het patroon wisselt af. Na 🐯 komt weer 🐸.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🦁",
      "🐮",
      "🦁",
      "🐮",
      "❓"
    ],
    "opties": [
      "🐱",
      "🦁",
      "🐮"
    ],
    "goed": "🦁",
    "uitleg": "Het patroon wisselt af. Na 🐮 komt weer 🦁.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚲",
      "🚗",
      "🚲",
      "🚗",
      "❓"
    ],
    "opties": [
      "🚗",
      "🚂",
      "🚲"
    ],
    "goed": "🚲",
    "uitleg": "Het patroon wisselt af. Na 🚗 komt weer 🚲.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐶",
      "🐰",
      "🐶",
      "🐰",
      "❓"
    ],
    "opties": [
      "🐰",
      "🦊",
      "🐶"
    ],
    "goed": "🐶",
    "uitleg": "Het patroon wisselt af. Na 🐰 komt weer 🐶.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌴",
      "🌷",
      "🌴",
      "🌷",
      "❓"
    ],
    "opties": [
      "🌸",
      "🌷",
      "🌴"
    ],
    "goed": "🌴",
    "uitleg": "Het patroon wisselt af. Na 🌷 komt weer 🌴.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "⛵"
    ],
    "opties": [
      "⛵",
      "🚗",
      "🚌"
    ],
    "goed": "⛵",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌵"
    ],
    "opties": [
      "🌵",
      "🌷",
      "🌸"
    ],
    "goed": "🌵",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍍"
    ],
    "opties": [
      "🍑",
      "🍍",
      "🍌"
    ],
    "goed": "🍍",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟣"
    ],
    "opties": [
      "🟨",
      "🟢",
      "🟣"
    ],
    "goed": "🟣",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🐮"
    ],
    "opties": [
      "🐮",
      "🐱",
      "🐰"
    ],
    "goed": "🐮",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🦊"
    ],
    "opties": [
      "🐭",
      "🦊",
      "🐸"
    ],
    "goed": "🦊",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🔺"
    ],
    "opties": [
      "🟦",
      "🔺",
      "🔵"
    ],
    "goed": "🔺",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍌"
    ],
    "opties": [
      "🍌",
      "🍇",
      "🍑"
    ],
    "goed": "🍌",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟨"
    ],
    "opties": [
      "🔵",
      "🟢",
      "🟨"
    ],
    "goed": "🟨",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌳"
    ],
    "opties": [
      "🌴",
      "🌳",
      "🌵"
    ],
    "goed": "🌳",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "⬛"
    ],
    "opties": [
      "🟦",
      "🔴",
      "⬛"
    ],
    "goed": "⬛",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🐔"
    ],
    "opties": [
      "🐮",
      "🐱",
      "🐔"
    ],
    "goed": "🐔",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌵"
    ],
    "opties": [
      "🍃",
      "🌵",
      "🌷"
    ],
    "goed": "🌵",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌳"
    ],
    "opties": [
      "🍃",
      "🌳",
      "🌷"
    ],
    "goed": "🌳",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍃"
    ],
    "opties": [
      "🍃",
      "🌳",
      "🌴"
    ],
    "goed": "🍃",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍃"
    ],
    "opties": [
      "🌻",
      "🍃",
      "🌳"
    ],
    "goed": "🍃",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🔺"
    ],
    "opties": [
      "🟣",
      "🔺",
      "🟨"
    ],
    "goed": "🔺",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌴"
    ],
    "opties": [
      "🌴",
      "🌷",
      "🌳"
    ],
    "goed": "🌴",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟠"
    ],
    "opties": [
      "🟠",
      "🟨",
      "🔺"
    ],
    "goed": "🟠",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "✈️"
    ],
    "opties": [
      "🚗",
      "✈️",
      "🚌"
    ],
    "goed": "✈️",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🦁"
    ],
    "opties": [
      "🐶",
      "🦁",
      "🦊"
    ],
    "goed": "🦁",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🦊"
    ],
    "opties": [
      "🐭",
      "🐶",
      "🦊"
    ],
    "goed": "🦊",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍇"
    ],
    "opties": [
      "🍇",
      "🍍",
      "🍎"
    ],
    "goed": "🍇",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🚗"
    ],
    "opties": [
      "🚌",
      "🚲",
      "🚗"
    ],
    "goed": "🚗",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌴"
    ],
    "opties": [
      "🌷",
      "🌴",
      "🍃"
    ],
    "goed": "🌴",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌳"
    ],
    "opties": [
      "🌴",
      "🌳",
      "🍃"
    ],
    "goed": "🌳",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "⬛"
    ],
    "opties": [
      "🟨",
      "⬛",
      "🟡"
    ],
    "goed": "⬛",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌷"
    ],
    "opties": [
      "🌷",
      "🌴",
      "🍃"
    ],
    "goed": "🌷",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌳"
    ],
    "opties": [
      "🌳",
      "🌵",
      "🌷"
    ],
    "goed": "🌳",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌳"
    ],
    "opties": [
      "🌳",
      "🌴",
      "🌵"
    ],
    "goed": "🌳",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐔",
      "🚚",
      "🦁",
      "🐶"
    ],
    "goed": "🚚",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍒",
      "🟠",
      "🍊",
      "🍑"
    ],
    "goed": "🟠",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚂",
      "🍐",
      "✈️",
      "🚚"
    ],
    "goed": "🍐",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🔴",
      "🟦",
      "🚂",
      "🟡"
    ],
    "goed": "🚂",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌳",
      "🌸",
      "🍍",
      "🌷"
    ],
    "goed": "🍍",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐔",
      "🦁",
      "🐰",
      "🍃"
    ],
    "goed": "🍃",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍇",
      "🟡",
      "🍌",
      "🍐"
    ],
    "goed": "🟡",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚂",
      "⛵",
      "🍒",
      "🚀"
    ],
    "goed": "🍒",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🟣",
      "🔴",
      "🍎",
      "⬛"
    ],
    "goed": "🍎",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍃",
      "🌸",
      "🌷",
      "🍒"
    ],
    "goed": "🍒",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐔",
      "🍒",
      "🐸",
      "🦁"
    ],
    "goed": "🍒",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍐",
      "🍎",
      "🌵",
      "🍌"
    ],
    "goed": "🌵",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍃",
      "🚀",
      "🚗",
      "🚚"
    ],
    "goed": "🍃",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐸",
      "🟣",
      "🟦",
      "⬛"
    ],
    "goed": "🐸",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌳",
      "🌸",
      "🌵",
      "🦁"
    ],
    "goed": "🦁",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍑",
      "🐮",
      "🐰",
      "🦊"
    ],
    "goed": "🍑",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍍",
      "🍐",
      "🍇",
      "🌷"
    ],
    "goed": "🌷",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚚",
      "🚀",
      "🐯",
      "🚂"
    ],
    "goed": "🐯",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍇",
      "⬛",
      "🟢",
      "🔴"
    ],
    "goed": "🍇",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌳",
      "🌴",
      "🌷",
      "🔴"
    ],
    "goed": "🔴",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍍",
      "🐰",
      "🐱",
      "🦁"
    ],
    "goed": "🍍",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍍",
      "🍑",
      "🍒",
      "⛵"
    ],
    "goed": "⛵",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚚",
      "🍃",
      "🚀",
      "🚂"
    ],
    "goed": "🍃",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍍",
      "🟢",
      "🟦",
      "🟡"
    ],
    "goed": "🍍",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌸",
      "🐻",
      "🌵",
      "🌷"
    ],
    "goed": "🐻",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚗",
      "🐻",
      "🐭",
      "🐔"
    ],
    "goed": "🚗",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍎",
      "🐰",
      "🍐",
      "🍌"
    ],
    "goed": "🐰",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚂",
      "🚲",
      "🍎",
      "✈️"
    ],
    "goed": "🍎",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🔺",
      "🐯",
      "🟡",
      "🟠"
    ],
    "goed": "🐯",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌷",
      "🟨",
      "🌻",
      "🌳"
    ],
    "goed": "🟨",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐔",
      "🔴",
      "🐮",
      "🐱"
    ],
    "goed": "🔴",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍐",
      "🍉",
      "🍃",
      "🍎"
    ],
    "goed": "🍃",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐮",
      "🚲",
      "🚀",
      "🚌"
    ],
    "goed": "🐮",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐷",
      "🔴",
      "🟨",
      "🔺"
    ],
    "goed": "🐷",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🦊",
      "🌻",
      "🌳",
      "🌷"
    ],
    "goed": "🦊",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌸",
      "🐰",
      "🐮",
      "🐷"
    ],
    "goed": "🌸",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍌",
      "🔵",
      "🍒",
      "🍍"
    ],
    "goed": "🔵",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚲",
      "🚌",
      "🚀",
      "🍎"
    ],
    "goed": "🍎",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🟣",
      "🟢",
      "🌸",
      "🔴"
    ],
    "goed": "🌸",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌳",
      "🌻",
      "🌴",
      "🍌"
    ],
    "goed": "🍌",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚲",
      "🐻",
      "🐭",
      "🐷"
    ],
    "goed": "🚲",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐸",
      "🍌",
      "🍒",
      "🍊"
    ],
    "goed": "🐸",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 3
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚂",
      "🐔",
      "🚚",
      "🚌"
    ],
    "goed": "🐔",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 1
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🔺",
      "🟢",
      "🟣",
      "🐭"
    ],
    "goed": "🐭",
    "uitleg": "Drie horen bij elkaar; die ene is anders.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍑",
      "🍌",
      "🍑",
      "🍌",
      "❓"
    ],
    "opties": [
      "🍐",
      "🍌",
      "🍑"
    ],
    "goed": "🍑",
    "uitleg": "Het patroon wisselt af. Na 🍌 komt weer 🍑.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌷",
      "🍃",
      "🌷",
      "🍃",
      "❓"
    ],
    "opties": [
      "🌸",
      "🌷",
      "🍃"
    ],
    "goed": "🌷",
    "uitleg": "Het patroon wisselt af. Na 🍃 komt weer 🌷.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🟠",
      "🟢",
      "🟠",
      "🟢",
      "❓"
    ],
    "opties": [
      "⬛",
      "🟠",
      "🟢"
    ],
    "goed": "🟠",
    "uitleg": "Het patroon wisselt af. Na 🟢 komt weer 🟠.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔴",
      "🟨",
      "🔴",
      "🟨",
      "❓"
    ],
    "opties": [
      "🔴",
      "🟨",
      "🟡"
    ],
    "goed": "🔴",
    "uitleg": "Het patroon wisselt af. Na 🟨 komt weer 🔴.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🦁",
      "🐭",
      "🦁",
      "🐭",
      "❓"
    ],
    "opties": [
      "🐭",
      "🦁",
      "🐮"
    ],
    "goed": "🦁",
    "uitleg": "Het patroon wisselt af. Na 🐭 komt weer 🦁.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚌",
      "🚲",
      "🚌",
      "🚲",
      "❓"
    ],
    "opties": [
      "✈️",
      "🚌",
      "🚲"
    ],
    "goed": "🚌",
    "uitleg": "Het patroon wisselt af. Na 🚲 komt weer 🚌.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚚",
      "🚂",
      "🚚",
      "🚂",
      "❓"
    ],
    "opties": [
      "🚚",
      "🚂",
      "✈️"
    ],
    "goed": "🚚",
    "uitleg": "Het patroon wisselt af. Na 🚂 komt weer 🚚.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌳",
      "🍃",
      "🌳",
      "🍃",
      "❓"
    ],
    "opties": [
      "🍃",
      "🌵",
      "🌳"
    ],
    "goed": "🌳",
    "uitleg": "Het patroon wisselt af. Na 🍃 komt weer 🌳.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍐",
      "🍉",
      "🍐",
      "🍉",
      "❓"
    ],
    "opties": [
      "🍌",
      "🍉",
      "🍐"
    ],
    "goed": "🍐",
    "uitleg": "Het patroon wisselt af. Na 🍉 komt weer 🍐.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍎",
      "🍐",
      "🍎",
      "🍐",
      "❓"
    ],
    "opties": [
      "🍇",
      "🍎",
      "🍐"
    ],
    "goed": "🍎",
    "uitleg": "Het patroon wisselt af. Na 🍐 komt weer 🍎.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍐",
      "🍒",
      "🍐",
      "🍒",
      "❓"
    ],
    "opties": [
      "🍐",
      "🍒",
      "🍎"
    ],
    "goed": "🍐",
    "uitleg": "Het patroon wisselt af. Na 🍒 komt weer 🍐.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚂",
      "🚲",
      "🚂",
      "🚲",
      "❓"
    ],
    "opties": [
      "🚂",
      "🚲",
      "🚗"
    ],
    "goed": "🚂",
    "uitleg": "Het patroon wisselt af. Na 🚲 komt weer 🚂.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍑",
      "🍓",
      "🍑",
      "🍓",
      "❓"
    ],
    "opties": [
      "🍑",
      "🍇",
      "🍓"
    ],
    "goed": "🍑",
    "uitleg": "Het patroon wisselt af. Na 🍓 komt weer 🍑.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🟣",
      "🔺",
      "🟣",
      "🔺",
      "❓"
    ],
    "opties": [
      "🟣",
      "🔵",
      "🔺"
    ],
    "goed": "🟣",
    "uitleg": "Het patroon wisselt af. Na 🔺 komt weer 🟣.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⛵",
      "✈️",
      "⛵",
      "✈️",
      "❓"
    ],
    "opties": [
      "⛵",
      "🚗",
      "✈️"
    ],
    "goed": "⛵",
    "uitleg": "Het patroon wisselt af. Na ✈️ komt weer ⛵.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌷",
      "🍃",
      "🌷",
      "🍃",
      "❓"
    ],
    "opties": [
      "🍃",
      "🌴",
      "🌷"
    ],
    "goed": "🌷",
    "uitleg": "Het patroon wisselt af. Na 🍃 komt weer 🌷.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍍",
      "🍌",
      "🍍",
      "🍌",
      "❓"
    ],
    "opties": [
      "🍌",
      "🍍",
      "🍑"
    ],
    "goed": "🍍",
    "uitleg": "Het patroon wisselt af. Na 🍌 komt weer 🍍.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐯",
      "🐔",
      "🐯",
      "🐔",
      "❓"
    ],
    "opties": [
      "🐯",
      "🐔",
      "🦁"
    ],
    "goed": "🐯",
    "uitleg": "Het patroon wisselt af. Na 🐔 komt weer 🐯.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌳",
      "🌻",
      "🌳",
      "🌻",
      "❓"
    ],
    "opties": [
      "🌻",
      "🌷",
      "🌳"
    ],
    "goed": "🌳",
    "uitleg": "Het patroon wisselt af. Na 🌻 komt weer 🌳.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐮",
      "🐔",
      "🐮",
      "🐔",
      "❓"
    ],
    "opties": [
      "🐻",
      "🐮",
      "🐔"
    ],
    "goed": "🐮",
    "uitleg": "Het patroon wisselt af. Na 🐔 komt weer 🐮.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌷",
      "🌴",
      "🌷",
      "🌴",
      "❓"
    ],
    "opties": [
      "🌴",
      "🍃",
      "🌷"
    ],
    "goed": "🌷",
    "uitleg": "Het patroon wisselt af. Na 🌴 komt weer 🌷.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⬛",
      "🔺",
      "⬛",
      "🔺",
      "❓"
    ],
    "opties": [
      "🔺",
      "⬛",
      "🟠"
    ],
    "goed": "⬛",
    "uitleg": "Het patroon wisselt af. Na 🔺 komt weer ⬛.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🟦",
      "⬛",
      "🟦",
      "⬛",
      "❓"
    ],
    "opties": [
      "🟨",
      "🟦",
      "⬛"
    ],
    "goed": "🟦",
    "uitleg": "Het patroon wisselt af. Na ⬛ komt weer 🟦.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌷",
      "🌻",
      "🌷",
      "🌻",
      "❓"
    ],
    "opties": [
      "🌷",
      "🌻",
      "🌴"
    ],
    "goed": "🌷",
    "uitleg": "Het patroon wisselt af. Na 🌻 komt weer 🌷.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍇",
      "🍓",
      "🍇",
      "🍓",
      "❓"
    ],
    "opties": [
      "🍓",
      "🍑",
      "🍇"
    ],
    "goed": "🍇",
    "uitleg": "Het patroon wisselt af. Na 🍓 komt weer 🍇.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔴",
      "🟨",
      "🔴",
      "🟨",
      "❓"
    ],
    "opties": [
      "🟨",
      "🔵",
      "🔴"
    ],
    "goed": "🔴",
    "uitleg": "Het patroon wisselt af. Na 🟨 komt weer 🔴.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌷",
      "🌴",
      "🌷",
      "🌴",
      "❓"
    ],
    "opties": [
      "🌴",
      "🌳",
      "🌷"
    ],
    "goed": "🌷",
    "uitleg": "Het patroon wisselt af. Na 🌴 komt weer 🌷.",
    "niveau": 1
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌳",
      "🌸",
      "🌳",
      "🌸",
      "❓"
    ],
    "opties": [
      "🍃",
      "🌳",
      "🌸"
    ],
    "goed": "🌳",
    "uitleg": "Het patroon wisselt af. Na 🌸 komt weer 🌳.",
    "niveau": 2
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚌",
      "🚀",
      "🚌",
      "🚀",
      "❓"
    ],
    "opties": [
      "✈️",
      "🚌",
      "🚀"
    ],
    "goed": "🚌",
    "uitleg": "Het patroon wisselt af. Na 🚀 komt weer 🚌.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌵"
    ],
    "opties": [
      "🌳",
      "🌵",
      "🍃"
    ],
    "goed": "🌵",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍓"
    ],
    "opties": [
      "🍑",
      "🍊",
      "🍓"
    ],
    "goed": "🍓",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍇"
    ],
    "opties": [
      "🍑",
      "🍍",
      "🍇"
    ],
    "goed": "🍇",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🦁"
    ],
    "opties": [
      "🦁",
      "🐻",
      "🐔"
    ],
    "goed": "🦁",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟨"
    ],
    "opties": [
      "🔴",
      "🔺",
      "🟨"
    ],
    "goed": "🟨",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🐸"
    ],
    "opties": [
      "🦊",
      "🐶",
      "🐸"
    ],
    "goed": "🐸",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟣"
    ],
    "opties": [
      "🟦",
      "🟣",
      "🟢"
    ],
    "goed": "🟣",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍓"
    ],
    "opties": [
      "🍇",
      "🍒",
      "🍓"
    ],
    "goed": "🍓",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌸"
    ],
    "opties": [
      "🌴",
      "🌸",
      "🌵"
    ],
    "goed": "🌸",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🚗"
    ],
    "opties": [
      "🚌",
      "🚚",
      "🚗"
    ],
    "goed": "🚗",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🐰"
    ],
    "opties": [
      "🐰",
      "🦊",
      "🐮"
    ],
    "goed": "🐰",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🐯"
    ],
    "opties": [
      "🐶",
      "🐯",
      "🐻"
    ],
    "goed": "🐯",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌸"
    ],
    "opties": [
      "🌵",
      "🌳",
      "🌸"
    ],
    "goed": "🌸",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟣"
    ],
    "opties": [
      "🟨",
      "🟣",
      "🟦"
    ],
    "goed": "🟣",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🐻"
    ],
    "opties": [
      "🐻",
      "🦁",
      "🐰"
    ],
    "goed": "🐻",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌳"
    ],
    "opties": [
      "🌸",
      "🌳",
      "🍃"
    ],
    "goed": "🌳",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🚲"
    ],
    "opties": [
      "🚲",
      "⛵",
      "✈️"
    ],
    "goed": "🚲",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🔵"
    ],
    "opties": [
      "🟡",
      "🟨",
      "🔵"
    ],
    "goed": "🔵",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟣"
    ],
    "opties": [
      "🟢",
      "🟡",
      "🟣"
    ],
    "goed": "🟣",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍊"
    ],
    "opties": [
      "🍊",
      "🍑",
      "🍉"
    ],
    "goed": "🍊",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟨"
    ],
    "opties": [
      "🟨",
      "🟣",
      "🟡"
    ],
    "goed": "🟨",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🍇"
    ],
    "opties": [
      "🍇",
      "🍊",
      "🍓"
    ],
    "goed": "🍇",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "⛵"
    ],
    "opties": [
      "🚀",
      "⛵",
      "🚲"
    ],
    "goed": "⛵",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🐱"
    ],
    "opties": [
      "🐷",
      "🐮",
      "🐱"
    ],
    "goed": "🐱",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🌴"
    ],
    "opties": [
      "🌴",
      "🌳",
      "🌵"
    ],
    "goed": "🌴",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🦊"
    ],
    "opties": [
      "🐷",
      "🦊",
      "🐭"
    ],
    "goed": "🦊",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "✈️"
    ],
    "opties": [
      "✈️",
      "🚚",
      "🚌"
    ],
    "goed": "✈️",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🚚"
    ],
    "opties": [
      "✈️",
      "🚌",
      "🚚"
    ],
    "goed": "🚚",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 1
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🟣"
    ],
    "opties": [
      "🔺",
      "🟣",
      "🟡"
    ],
    "goed": "🟣",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 2
  },
  {
    "soort": "zelfde",
    "opdracht": "Zoek precies dezelfde.",
    "toon": [
      "🚌"
    ],
    "opties": [
      "🚌",
      "🚲",
      "⛵"
    ],
    "goed": "🚌",
    "uitleg": "Dit beeld is precies hetzelfde als bovenaan.",
    "niveau": 3
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔺",
      "🟦",
      "🟦",
      "🔺",
      "🟦",
      "🟦",
      "❓"
    ],
    "opties": [
      "🔺",
      "🟡",
      "🟦"
    ],
    "goed": "🔺",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔺",
      "🟦",
      "🟡",
      "🔺",
      "🟦",
      "❓"
    ],
    "opties": [
      "🟡",
      "🔺",
      "🟦"
    ],
    "goed": "🟡",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔺",
      "🔺",
      "🟦",
      "🔺",
      "🔺",
      "🟦",
      "🔺",
      "❓"
    ],
    "opties": [
      "🔺",
      "🟦",
      "🟡"
    ],
    "goed": "🔺",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐶",
      "🐱",
      "🐱",
      "🐶",
      "🐱",
      "🐱",
      "❓"
    ],
    "opties": [
      "🐱",
      "🐭",
      "🐶"
    ],
    "goed": "🐶",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐶",
      "🐱",
      "🐭",
      "🐶",
      "🐱",
      "❓"
    ],
    "opties": [
      "🐶",
      "🐱",
      "🐭"
    ],
    "goed": "🐭",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐶",
      "🐶",
      "🐱",
      "🐶",
      "🐶",
      "🐱",
      "🐶",
      "❓"
    ],
    "opties": [
      "🐭",
      "🐶",
      "🐱"
    ],
    "goed": "🐶",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍎",
      "🍐",
      "🍐",
      "🍎",
      "🍐",
      "🍐",
      "❓"
    ],
    "opties": [
      "🍎",
      "🍇",
      "🍐"
    ],
    "goed": "🍎",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍎",
      "🍐",
      "🍇",
      "🍎",
      "🍐",
      "❓"
    ],
    "opties": [
      "🍐",
      "🍎",
      "🍇"
    ],
    "goed": "🍇",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍎",
      "🍎",
      "🍐",
      "🍎",
      "🍎",
      "🍐",
      "🍎",
      "❓"
    ],
    "opties": [
      "🍎",
      "🍇",
      "🍐"
    ],
    "goed": "🍎",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⭐",
      "🌙",
      "🌙",
      "⭐",
      "🌙",
      "🌙",
      "❓"
    ],
    "opties": [
      "☀️",
      "🌙",
      "⭐"
    ],
    "goed": "⭐",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⭐",
      "🌙",
      "☀️",
      "⭐",
      "🌙",
      "❓"
    ],
    "opties": [
      "⭐",
      "☀️",
      "🌙"
    ],
    "goed": "☀️",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⭐",
      "⭐",
      "🌙",
      "⭐",
      "⭐",
      "🌙",
      "⭐",
      "❓"
    ],
    "opties": [
      "🌙",
      "⭐",
      "☀️"
    ],
    "goed": "⭐",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔴",
      "🟢",
      "🟢",
      "🔴",
      "🟢",
      "🟢",
      "❓"
    ],
    "opties": [
      "🔴",
      "🔵",
      "🟢"
    ],
    "goed": "🔴",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔴",
      "🟢",
      "🔵",
      "🔴",
      "🟢",
      "❓"
    ],
    "opties": [
      "🔵",
      "🟢",
      "🔴"
    ],
    "goed": "🔵",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔴",
      "🔴",
      "🟢",
      "🔴",
      "🔴",
      "🟢",
      "🔴",
      "❓"
    ],
    "opties": [
      "🟢",
      "🔴",
      "🔵"
    ],
    "goed": "🔴",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚲",
      "🚗",
      "🍎",
      "🚌"
    ],
    "goed": "🍎",
    "uitleg": "Deze past niet: de rest zijn voertuigen.",
    "niveau": 4
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🔨",
      "🌷",
      "🪚",
      "🪛"
    ],
    "goed": "🌷",
    "uitleg": "Deze past niet: de rest is gereedschap.",
    "niveau": 5
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🐘",
      "🇳🇱",
      "🇧🇪",
      "🇩🇪"
    ],
    "goed": "🐘",
    "uitleg": "Deze past niet: de rest zijn vlaggen.",
    "niveau": 5
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "➖",
      "➕",
      "✖️",
      "🎈"
    ],
    "goed": "🎈",
    "uitleg": "Deze past niet: de rest zijn rekentekens.",
    "niveau": 6
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "⚖️",
      "📏",
      "🌡️",
      "🍰"
    ],
    "goed": "🍰",
    "uitleg": "Deze past niet: de rest zijn meetinstrumenten.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔺",
      "🟦",
      "🟦",
      "🔺",
      "🟦",
      "🟦",
      "❓"
    ],
    "opties": [
      "🟡",
      "🟦",
      "🔺"
    ],
    "goed": "🔺",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔺",
      "🔺",
      "🟦",
      "🔺",
      "🔺",
      "🟦",
      "🔺",
      "❓"
    ],
    "opties": [
      "🟡",
      "🔺",
      "🟦"
    ],
    "goed": "🔺",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐶",
      "🐱",
      "🐭",
      "🐶",
      "🐱",
      "❓"
    ],
    "opties": [
      "🐭",
      "🐶",
      "🐱"
    ],
    "goed": "🐭",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐶",
      "🐶",
      "🐱",
      "🐶",
      "🐶",
      "🐱",
      "🐶",
      "❓"
    ],
    "opties": [
      "🐶",
      "🐭",
      "🐱"
    ],
    "goed": "🐶",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍎",
      "🍐",
      "🍐",
      "🍎",
      "🍐",
      "🍐",
      "❓"
    ],
    "opties": [
      "🍐",
      "🍎",
      "🍇"
    ],
    "goed": "🍎",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⭐",
      "🌙",
      "🌙",
      "⭐",
      "🌙",
      "🌙",
      "❓"
    ],
    "opties": [
      "⭐",
      "☀️",
      "🌙"
    ],
    "goed": "⭐",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⭐",
      "🌙",
      "☀️",
      "⭐",
      "🌙",
      "❓"
    ],
    "opties": [
      "🌙",
      "⭐",
      "☀️"
    ],
    "goed": "☀️",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⭐",
      "⭐",
      "🌙",
      "⭐",
      "⭐",
      "🌙",
      "⭐",
      "❓"
    ],
    "opties": [
      "⭐",
      "🌙",
      "☀️"
    ],
    "goed": "⭐",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔴",
      "🟢",
      "🟢",
      "🔴",
      "🟢",
      "🟢",
      "❓"
    ],
    "opties": [
      "🟢",
      "🔵",
      "🔴"
    ],
    "goed": "🔴",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔴",
      "🟢",
      "🔵",
      "🔴",
      "🟢",
      "❓"
    ],
    "opties": [
      "🔵",
      "🔴",
      "🟢"
    ],
    "goed": "🔵",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔴",
      "🔴",
      "🟢",
      "🔴",
      "🔴",
      "🟢",
      "🔴",
      "❓"
    ],
    "opties": [
      "🔴",
      "🟢",
      "🔵"
    ],
    "goed": "🔴",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚗",
      "🚌",
      "🚌",
      "🚗",
      "🚌",
      "🚌",
      "❓"
    ],
    "opties": [
      "🚌",
      "🚗",
      "🚲"
    ],
    "goed": "🚗",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚗",
      "🚌",
      "🚲",
      "🚗",
      "🚌",
      "❓"
    ],
    "opties": [
      "🚌",
      "🚗",
      "🚲"
    ],
    "goed": "🚲",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚗",
      "🚗",
      "🚌",
      "🚗",
      "🚗",
      "🚌",
      "🚗",
      "❓"
    ],
    "opties": [
      "🚗",
      "🚌",
      "🚲"
    ],
    "goed": "🚗",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌳",
      "🌵",
      "🌵",
      "🌳",
      "🌵",
      "🌵",
      "❓"
    ],
    "opties": [
      "🌳",
      "🌵",
      "🌷"
    ],
    "goed": "🌳",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌳",
      "🌵",
      "🌷",
      "🌳",
      "🌵",
      "❓"
    ],
    "opties": [
      "🌵",
      "🌷",
      "🌳"
    ],
    "goed": "🌷",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌳",
      "🌳",
      "🌵",
      "🌳",
      "🌳",
      "🌵",
      "🌳",
      "❓"
    ],
    "opties": [
      "🌷",
      "🌵",
      "🌳"
    ],
    "goed": "🌳",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🥇",
      "🥈",
      "🥈",
      "🥇",
      "🥈",
      "🥈",
      "❓"
    ],
    "opties": [
      "🥉",
      "🥈",
      "🥇"
    ],
    "goed": "🥇",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🥇",
      "🥈",
      "🥉",
      "🥇",
      "🥈",
      "❓"
    ],
    "opties": [
      "🥉",
      "🥈",
      "🥇"
    ],
    "goed": "🥉",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🥇",
      "🥇",
      "🥈",
      "🥇",
      "🥇",
      "🥈",
      "🥇",
      "❓"
    ],
    "opties": [
      "🥇",
      "🥉",
      "🥈"
    ],
    "goed": "🥇",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "😀",
      "😐",
      "😐",
      "😀",
      "😐",
      "😐",
      "❓"
    ],
    "opties": [
      "😢",
      "😐",
      "😀"
    ],
    "goed": "😀",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "😀",
      "😐",
      "😢",
      "😀",
      "😐",
      "❓"
    ],
    "opties": [
      "😐",
      "😀",
      "😢"
    ],
    "goed": "😢",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "😀",
      "😀",
      "😐",
      "😀",
      "😀",
      "😐",
      "😀",
      "❓"
    ],
    "opties": [
      "😢",
      "😐",
      "😀"
    ],
    "goed": "😀",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔔",
      "🎵",
      "🎵",
      "🔔",
      "🎵",
      "🎵",
      "❓"
    ],
    "opties": [
      "🔔",
      "🎺",
      "🎵"
    ],
    "goed": "🔔",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔔",
      "🎵",
      "🎺",
      "🔔",
      "🎵",
      "❓"
    ],
    "opties": [
      "🎺",
      "🎵",
      "🔔"
    ],
    "goed": "🎺",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔔",
      "🔔",
      "🎵",
      "🔔",
      "🔔",
      "🎵",
      "🔔",
      "❓"
    ],
    "opties": [
      "🎺",
      "🎵",
      "🔔"
    ],
    "goed": "🔔",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍎",
      "🚌",
      "🚗",
      "🚲"
    ],
    "goed": "🍎",
    "uitleg": "Deze past niet: de rest zijn voertuigen.",
    "niveau": 4
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🪚",
      "🌷",
      "🔨",
      "🪛"
    ],
    "goed": "🌷",
    "uitleg": "Deze past niet: de rest is gereedschap.",
    "niveau": 5
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🇳🇱",
      "🇩🇪",
      "🐘",
      "🇧🇪"
    ],
    "goed": "🐘",
    "uitleg": "Deze past niet: de rest zijn vlaggen.",
    "niveau": 5
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "✖️",
      "➕",
      "➖",
      "🎈"
    ],
    "goed": "🎈",
    "uitleg": "Deze past niet: de rest zijn rekentekens.",
    "niveau": 6
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "⚖️",
      "🌡️",
      "🍰",
      "📏"
    ],
    "goed": "🍰",
    "uitleg": "Deze past niet: de rest zijn meetinstrumenten.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍰",
      "🍩",
      "🍩",
      "🍰",
      "🍩",
      "🍩",
      "❓"
    ],
    "opties": [
      "🍪",
      "🍰",
      "🍩"
    ],
    "goed": "🍰",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍰",
      "🍩",
      "🍪",
      "🍰",
      "🍩",
      "❓"
    ],
    "opties": [
      "🍪",
      "🍩",
      "🍰"
    ],
    "goed": "🍪",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍰",
      "🍰",
      "🍩",
      "🍰",
      "🍰",
      "🍩",
      "🍰",
      "❓"
    ],
    "opties": [
      "🍩",
      "🍪",
      "🍰"
    ],
    "goed": "🍰",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⚽",
      "🏀",
      "🏀",
      "⚽",
      "🏀",
      "🏀",
      "❓"
    ],
    "opties": [
      "🎾",
      "⚽",
      "🏀"
    ],
    "goed": "⚽",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⚽",
      "🏀",
      "🎾",
      "⚽",
      "🏀",
      "❓"
    ],
    "opties": [
      "🎾",
      "⚽",
      "🏀"
    ],
    "goed": "🎾",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⚽",
      "⚽",
      "🏀",
      "⚽",
      "⚽",
      "🏀",
      "⚽",
      "❓"
    ],
    "opties": [
      "🎾",
      "⚽",
      "🏀"
    ],
    "goed": "⚽",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐟",
      "🐬",
      "🐬",
      "🐟",
      "🐬",
      "🐬",
      "❓"
    ],
    "opties": [
      "🐟",
      "🐬",
      "🐙"
    ],
    "goed": "🐟",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐟",
      "🐬",
      "🐙",
      "🐟",
      "🐬",
      "❓"
    ],
    "opties": [
      "🐬",
      "🐟",
      "🐙"
    ],
    "goed": "🐙",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐟",
      "🐟",
      "🐬",
      "🐟",
      "🐟",
      "🐬",
      "🐟",
      "❓"
    ],
    "opties": [
      "🐬",
      "🐙",
      "🐟"
    ],
    "goed": "🐟",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "☂️",
      "🧣",
      "🧣",
      "☂️",
      "🧣",
      "🧣",
      "❓"
    ],
    "opties": [
      "☂️",
      "🧣",
      "🧤"
    ],
    "goed": "☂️",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "☂️",
      "🧣",
      "🧤",
      "☂️",
      "🧣",
      "❓"
    ],
    "opties": [
      "☂️",
      "🧤",
      "🧣"
    ],
    "goed": "🧤",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "☂️",
      "☂️",
      "🧣",
      "☂️",
      "☂️",
      "🧣",
      "☂️",
      "❓"
    ],
    "opties": [
      "🧤",
      "🧣",
      "☂️"
    ],
    "goed": "☂️",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚀",
      "🛰️",
      "🛰️",
      "🚀",
      "🛰️",
      "🛰️",
      "❓"
    ],
    "opties": [
      "🪐",
      "🚀",
      "🛰️"
    ],
    "goed": "🚀",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚀",
      "🛰️",
      "🪐",
      "🚀",
      "🛰️",
      "❓"
    ],
    "opties": [
      "🚀",
      "🛰️",
      "🪐"
    ],
    "goed": "🪐",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚀",
      "🚀",
      "🛰️",
      "🚀",
      "🚀",
      "🛰️",
      "🚀",
      "❓"
    ],
    "opties": [
      "🛰️",
      "🚀",
      "🪐"
    ],
    "goed": "🚀",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🖊️",
      "📕",
      "📕",
      "🖊️",
      "📕",
      "📕",
      "❓"
    ],
    "opties": [
      "📐",
      "📕",
      "🖊️"
    ],
    "goed": "🖊️",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🖊️",
      "📕",
      "📐",
      "🖊️",
      "📕",
      "❓"
    ],
    "opties": [
      "📕",
      "📐",
      "🖊️"
    ],
    "goed": "📐",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🖊️",
      "🖊️",
      "📕",
      "🖊️",
      "🖊️",
      "📕",
      "🖊️",
      "❓"
    ],
    "opties": [
      "🖊️",
      "📕",
      "📐"
    ],
    "goed": "🖊️",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🥕",
      "🥦",
      "🥦",
      "🥕",
      "🥦",
      "🥦",
      "❓"
    ],
    "opties": [
      "🌽",
      "🥦",
      "🥕"
    ],
    "goed": "🥕",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🥕",
      "🥦",
      "🌽",
      "🥕",
      "🥦",
      "❓"
    ],
    "opties": [
      "🥕",
      "🌽",
      "🥦"
    ],
    "goed": "🌽",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🥕",
      "🥕",
      "🥦",
      "🥕",
      "🥕",
      "🥦",
      "🥕",
      "❓"
    ],
    "opties": [
      "🌽",
      "🥕",
      "🥦"
    ],
    "goed": "🥕",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🕐",
      "⏳",
      "⏳",
      "🕐",
      "⏳",
      "⏳",
      "❓"
    ],
    "opties": [
      "⏰",
      "⏳",
      "🕐"
    ],
    "goed": "🕐",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🕐",
      "⏳",
      "⏰",
      "🕐",
      "⏳",
      "❓"
    ],
    "opties": [
      "⏰",
      "⏳",
      "🕐"
    ],
    "goed": "⏰",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🕐",
      "🕐",
      "⏳",
      "🕐",
      "🕐",
      "⏳",
      "🕐",
      "❓"
    ],
    "opties": [
      "⏰",
      "🕐",
      "⏳"
    ],
    "goed": "🕐",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🚌",
      "🚲",
      "🚗",
      "🍎"
    ],
    "goed": "🍎",
    "uitleg": "Deze past niet: de rest zijn voertuigen.",
    "niveau": 4
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🪚",
      "🔨",
      "🌷",
      "🪛"
    ],
    "goed": "🌷",
    "uitleg": "Deze past niet: de rest is gereedschap.",
    "niveau": 5
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🇧🇪",
      "🐘",
      "🇩🇪",
      "🇳🇱"
    ],
    "goed": "🐘",
    "uitleg": "Deze past niet: de rest zijn vlaggen.",
    "niveau": 5
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🎈",
      "➕",
      "✖️",
      "➖"
    ],
    "goed": "🎈",
    "uitleg": "Deze past niet: de rest zijn rekentekens.",
    "niveau": 6
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "📏",
      "🍰",
      "🌡️",
      "⚖️"
    ],
    "goed": "🍰",
    "uitleg": "Deze past niet: de rest zijn meetinstrumenten.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔺",
      "🟦",
      "🟡",
      "🔺",
      "🟦",
      "❓"
    ],
    "opties": [
      "🟦",
      "🟡",
      "🔺"
    ],
    "goed": "🟡",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐶",
      "🐱",
      "🐱",
      "🐶",
      "🐱",
      "🐱",
      "❓"
    ],
    "opties": [
      "🐭",
      "🐱",
      "🐶"
    ],
    "goed": "🐶",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐶",
      "🐱",
      "🐭",
      "🐶",
      "🐱",
      "❓"
    ],
    "opties": [
      "🐱",
      "🐭",
      "🐶"
    ],
    "goed": "🐭",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐶",
      "🐶",
      "🐱",
      "🐶",
      "🐶",
      "🐱",
      "🐶",
      "❓"
    ],
    "opties": [
      "🐭",
      "🐱",
      "🐶"
    ],
    "goed": "🐶",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍎",
      "🍐",
      "🍐",
      "🍎",
      "🍐",
      "🍐",
      "❓"
    ],
    "opties": [
      "🍐",
      "🍇",
      "🍎"
    ],
    "goed": "🍎",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍎",
      "🍎",
      "🍐",
      "🍎",
      "🍎",
      "🍐",
      "🍎",
      "❓"
    ],
    "opties": [
      "🍎",
      "🍐",
      "🍇"
    ],
    "goed": "🍎",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⭐",
      "🌙",
      "🌙",
      "⭐",
      "🌙",
      "🌙",
      "❓"
    ],
    "opties": [
      "🌙",
      "☀️",
      "⭐"
    ],
    "goed": "⭐",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⭐",
      "🌙",
      "☀️",
      "⭐",
      "🌙",
      "❓"
    ],
    "opties": [
      "☀️",
      "⭐",
      "🌙"
    ],
    "goed": "☀️",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔴",
      "🟢",
      "🟢",
      "🔴",
      "🟢",
      "🟢",
      "❓"
    ],
    "opties": [
      "🟢",
      "🔴",
      "🔵"
    ],
    "goed": "🔴",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔴",
      "🔴",
      "🟢",
      "🔴",
      "🔴",
      "🟢",
      "🔴",
      "❓"
    ],
    "opties": [
      "🔵",
      "🔴",
      "🟢"
    ],
    "goed": "🔴",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚗",
      "🚌",
      "🚌",
      "🚗",
      "🚌",
      "🚌",
      "❓"
    ],
    "opties": [
      "🚗",
      "🚲",
      "🚌"
    ],
    "goed": "🚗",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚗",
      "🚌",
      "🚲",
      "🚗",
      "🚌",
      "❓"
    ],
    "opties": [
      "🚌",
      "🚲",
      "🚗"
    ],
    "goed": "🚲",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚗",
      "🚗",
      "🚌",
      "🚗",
      "🚗",
      "🚌",
      "🚗",
      "❓"
    ],
    "opties": [
      "🚌",
      "🚗",
      "🚲"
    ],
    "goed": "🚗",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌳",
      "🌵",
      "🌵",
      "🌳",
      "🌵",
      "🌵",
      "❓"
    ],
    "opties": [
      "🌵",
      "🌳",
      "🌷"
    ],
    "goed": "🌳",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌳",
      "🌵",
      "🌷",
      "🌳",
      "🌵",
      "❓"
    ],
    "opties": [
      "🌷",
      "🌵",
      "🌳"
    ],
    "goed": "🌷",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🌳",
      "🌳",
      "🌵",
      "🌳",
      "🌳",
      "🌵",
      "🌳",
      "❓"
    ],
    "opties": [
      "🌵",
      "🌷",
      "🌳"
    ],
    "goed": "🌳",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🥇",
      "🥈",
      "🥈",
      "🥇",
      "🥈",
      "🥈",
      "❓"
    ],
    "opties": [
      "🥈",
      "🥇",
      "🥉"
    ],
    "goed": "🥇",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🥇",
      "🥈",
      "🥉",
      "🥇",
      "🥈",
      "❓"
    ],
    "opties": [
      "🥈",
      "🥇",
      "🥉"
    ],
    "goed": "🥉",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "😀",
      "😐",
      "😐",
      "😀",
      "😐",
      "😐",
      "❓"
    ],
    "opties": [
      "😐",
      "😢",
      "😀"
    ],
    "goed": "😀",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "😀",
      "😐",
      "😢",
      "😀",
      "😐",
      "❓"
    ],
    "opties": [
      "😢",
      "😀",
      "😐"
    ],
    "goed": "😢",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "😀",
      "😀",
      "😐",
      "😀",
      "😀",
      "😐",
      "😀",
      "❓"
    ],
    "opties": [
      "😢",
      "😀",
      "😐"
    ],
    "goed": "😀",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔔",
      "🎵",
      "🎵",
      "🔔",
      "🎵",
      "🎵",
      "❓"
    ],
    "opties": [
      "🎺",
      "🎵",
      "🔔"
    ],
    "goed": "🔔",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🔔",
      "🔔",
      "🎵",
      "🔔",
      "🔔",
      "🎵",
      "🔔",
      "❓"
    ],
    "opties": [
      "🔔",
      "🎵",
      "🎺"
    ],
    "goed": "🔔",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍰",
      "🍩",
      "🍩",
      "🍰",
      "🍩",
      "🍩",
      "❓"
    ],
    "opties": [
      "🍪",
      "🍩",
      "🍰"
    ],
    "goed": "🍰",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍰",
      "🍩",
      "🍪",
      "🍰",
      "🍩",
      "❓"
    ],
    "opties": [
      "🍩",
      "🍰",
      "🍪"
    ],
    "goed": "🍪",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🍰",
      "🍰",
      "🍩",
      "🍰",
      "🍰",
      "🍩",
      "🍰",
      "❓"
    ],
    "opties": [
      "🍰",
      "🍪",
      "🍩"
    ],
    "goed": "🍰",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⚽",
      "🏀",
      "🏀",
      "⚽",
      "🏀",
      "🏀",
      "❓"
    ],
    "opties": [
      "🏀",
      "🎾",
      "⚽"
    ],
    "goed": "⚽",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⚽",
      "🏀",
      "🎾",
      "⚽",
      "🏀",
      "❓"
    ],
    "opties": [
      "🎾",
      "🏀",
      "⚽"
    ],
    "goed": "🎾",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "⚽",
      "⚽",
      "🏀",
      "⚽",
      "⚽",
      "🏀",
      "⚽",
      "❓"
    ],
    "opties": [
      "🏀",
      "🎾",
      "⚽"
    ],
    "goed": "⚽",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐟",
      "🐬",
      "🐬",
      "🐟",
      "🐬",
      "🐬",
      "❓"
    ],
    "opties": [
      "🐙",
      "🐬",
      "🐟"
    ],
    "goed": "🐟",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐟",
      "🐬",
      "🐙",
      "🐟",
      "🐬",
      "❓"
    ],
    "opties": [
      "🐟",
      "🐙",
      "🐬"
    ],
    "goed": "🐙",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🐟",
      "🐟",
      "🐬",
      "🐟",
      "🐟",
      "🐬",
      "🐟",
      "❓"
    ],
    "opties": [
      "🐟",
      "🐙",
      "🐬"
    ],
    "goed": "🐟",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "☂️",
      "🧣",
      "🧤",
      "☂️",
      "🧣",
      "❓"
    ],
    "opties": [
      "☂️",
      "🧣",
      "🧤"
    ],
    "goed": "🧤",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "☂️",
      "☂️",
      "🧣",
      "☂️",
      "☂️",
      "🧣",
      "☂️",
      "❓"
    ],
    "opties": [
      "🧣",
      "🧤",
      "☂️"
    ],
    "goed": "☂️",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚀",
      "🛰️",
      "🛰️",
      "🚀",
      "🛰️",
      "🛰️",
      "❓"
    ],
    "opties": [
      "🛰️",
      "🚀",
      "🪐"
    ],
    "goed": "🚀",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚀",
      "🛰️",
      "🪐",
      "🚀",
      "🛰️",
      "❓"
    ],
    "opties": [
      "🛰️",
      "🪐",
      "🚀"
    ],
    "goed": "🪐",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🚀",
      "🚀",
      "🛰️",
      "🚀",
      "🚀",
      "🛰️",
      "🚀",
      "❓"
    ],
    "opties": [
      "🪐",
      "🛰️",
      "🚀"
    ],
    "goed": "🚀",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🖊️",
      "📕",
      "📕",
      "🖊️",
      "📕",
      "📕",
      "❓"
    ],
    "opties": [
      "📕",
      "🖊️",
      "📐"
    ],
    "goed": "🖊️",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🖊️",
      "📕",
      "📐",
      "🖊️",
      "📕",
      "❓"
    ],
    "opties": [
      "📐",
      "🖊️",
      "📕"
    ],
    "goed": "📐",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🥕",
      "🥦",
      "🥦",
      "🥕",
      "🥦",
      "🥦",
      "❓"
    ],
    "opties": [
      "🥦",
      "🌽",
      "🥕"
    ],
    "goed": "🥕",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🥕",
      "🥦",
      "🌽",
      "🥕",
      "🥦",
      "❓"
    ],
    "opties": [
      "🥦",
      "🥕",
      "🌽"
    ],
    "goed": "🌽",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🥕",
      "🥕",
      "🥦",
      "🥕",
      "🥕",
      "🥦",
      "🥕",
      "❓"
    ],
    "opties": [
      "🥕",
      "🥦",
      "🌽"
    ],
    "goed": "🥕",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🕐",
      "⏳",
      "⏳",
      "🕐",
      "⏳",
      "⏳",
      "❓"
    ],
    "opties": [
      "🕐",
      "⏳",
      "⏰"
    ],
    "goed": "🕐",
    "uitleg": "Het patroon is A-B-B en begint dan opnieuw met A.",
    "niveau": 4
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🕐",
      "⏳",
      "⏰",
      "🕐",
      "⏳",
      "❓"
    ],
    "opties": [
      "🕐",
      "⏰",
      "⏳"
    ],
    "goed": "⏰",
    "uitleg": "Het patroon is A-B-C en herhaalt zich; na B komt C.",
    "niveau": 5
  },
  {
    "soort": "reeks",
    "opdracht": "Wat komt hierna?",
    "toon": [
      "🕐",
      "🕐",
      "⏳",
      "🕐",
      "🕐",
      "⏳",
      "🕐",
      "❓"
    ],
    "opties": [
      "🕐",
      "⏰",
      "⏳"
    ],
    "goed": "🕐",
    "uitleg": "Het patroon is A-A-B; na de eerste A volgt nog een A.",
    "niveau": 6
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🍎",
      "🚲",
      "🚗",
      "🚌"
    ],
    "goed": "🍎",
    "uitleg": "Deze past niet: de rest zijn voertuigen.",
    "niveau": 4
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "🌷",
      "🪚",
      "🪛",
      "🔨"
    ],
    "goed": "🌷",
    "uitleg": "Deze past niet: de rest is gereedschap.",
    "niveau": 5
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "➖",
      "🎈",
      "✖️",
      "➕"
    ],
    "goed": "🎈",
    "uitleg": "Deze past niet: de rest zijn rekentekens.",
    "niveau": 6
  },
  {
    "soort": "anders",
    "opdracht": "Welke hoort er niet bij?",
    "opties": [
      "📏",
      "🌡️",
      "⚖️",
      "🍰"
    ],
    "goed": "🍰",
    "uitleg": "Deze past niet: de rest zijn meetinstrumenten.",
    "niveau": 6
  },
  {
    "soort": "rotatie",
    "opdracht": "Welke kant draait hij op?",
    "toon": [
      "⬆️",
      "➡️",
      "⬇️",
      "⬅️",
      "⬆️",
      "➡️",
      "❓"
    ],
    "opties": [
      "➡️",
      "⬆️",
      "⬇️"
    ],
    "goed": "⬇️",
    "uitleg": "De pijl draait steeds een kwartslag met de klok mee; daarna komt ⬇️.",
    "niveau": 5
  },
  {
    "soort": "rotatie",
    "opdracht": "Welke kant draait hij op?",
    "toon": [
      "⬇️",
      "⬅️",
      "⬆️",
      "➡️",
      "⬇️",
      "⬅️",
      "❓"
    ],
    "opties": [
      "⬆️",
      "⬅️",
      "⬇️"
    ],
    "goed": "⬆️",
    "uitleg": "De pijl draait steeds een kwartslag met de klok mee; daarna komt ⬆️.",
    "niveau": 6
  },
  {
    "soort": "rotatie",
    "opdracht": "Welke kant draait hij op?",
    "toon": [
      "⬆️",
      "⬅️",
      "⬇️",
      "➡️",
      "⬆️",
      "⬅️",
      "❓"
    ],
    "opties": [
      "⬆️",
      "⬅️",
      "⬇️"
    ],
    "goed": "⬇️",
    "uitleg": "De pijl draait steeds een kwartslag tegen de klok in; daarna komt ⬇️.",
    "niveau": 5
  },
  {
    "soort": "rotatie",
    "opdracht": "Welke kant draait hij op?",
    "toon": [
      "⬇️",
      "➡️",
      "⬆️",
      "⬅️",
      "⬇️",
      "➡️",
      "❓"
    ],
    "opties": [
      "⬆️",
      "⬇️",
      "➡️"
    ],
    "goed": "⬆️",
    "uitleg": "De pijl draait steeds een kwartslag tegen de klok in; daarna komt ⬆️.",
    "niveau": 6
  },
  {
    "soort": "rotatie",
    "opdracht": "Welke kant draait hij op?",
    "toon": [
      "↗️",
      "↘️",
      "↙️",
      "↖️",
      "↗️",
      "↘️",
      "❓"
    ],
    "opties": [
      "↙️",
      "↘️",
      "↗️"
    ],
    "goed": "↙️",
    "uitleg": "De pijl draait steeds een kwartslag met de klok mee; daarna komt ↙️.",
    "niveau": 5
  },
  {
    "soort": "rotatie",
    "opdracht": "Welke kant draait hij op?",
    "toon": [
      "↙️",
      "↖️",
      "↗️",
      "↘️",
      "↙️",
      "↖️",
      "❓"
    ],
    "opties": [
      "↗️",
      "↙️",
      "↖️"
    ],
    "goed": "↗️",
    "uitleg": "De pijl draait steeds een kwartslag met de klok mee; daarna komt ↗️.",
    "niveau": 6
  },
  {
    "soort": "rotatie",
    "opdracht": "Welke kant draait hij op?",
    "toon": [
      "↖️",
      "↙️",
      "↘️",
      "↗️",
      "↖️",
      "↙️",
      "❓"
    ],
    "opties": [
      "↖️",
      "↘️",
      "↙️"
    ],
    "goed": "↘️",
    "uitleg": "De pijl draait steeds een kwartslag tegen de klok in; daarna komt ↘️.",
    "niveau": 5
  },
  {
    "soort": "rotatie",
    "opdracht": "Welke kant draait hij op?",
    "toon": [
      "↘️",
      "↗️",
      "↖️",
      "↙️",
      "↘️",
      "↗️",
      "❓"
    ],
    "opties": [
      "↘️",
      "↗️",
      "↖️"
    ],
    "goed": "↖️",
    "uitleg": "De pijl draait steeds een kwartslag tegen de klok in; daarna komt ↖️.",
    "niveau": 6
  },
  {
    "soort": "spiegeling",
    "opdracht": "Welke is het spiegelbeeld?",
    "toon": [
      "▶️"
    ],
    "opties": [
      "🟦",
      "◀️",
      "▶️"
    ],
    "goed": "◀️",
    "uitleg": "Spiegelen klapt het beeld om: ▶️ wordt ◀️.",
    "niveau": 5
  },
  {
    "soort": "spiegeling",
    "opdracht": "Welke is het spiegelbeeld?",
    "toon": [
      "◀️"
    ],
    "opties": [
      "▶️",
      "◀️",
      "⭐"
    ],
    "goed": "▶️",
    "uitleg": "Spiegelen klapt het beeld om: ◀️ wordt ▶️.",
    "niveau": 6
  },
  {
    "soort": "spiegeling",
    "opdracht": "Welke is het spiegelbeeld?",
    "toon": [
      "🔺"
    ],
    "opties": [
      "🔺",
      "🔻",
      "⭐"
    ],
    "goed": "🔻",
    "uitleg": "Spiegelen klapt het beeld om: 🔺 wordt 🔻.",
    "niveau": 5
  },
  {
    "soort": "spiegeling",
    "opdracht": "Welke is het spiegelbeeld?",
    "toon": [
      "🔻"
    ],
    "opties": [
      "🔻",
      "🔺",
      "🔵"
    ],
    "goed": "🔺",
    "uitleg": "Spiegelen klapt het beeld om: 🔻 wordt 🔺.",
    "niveau": 6
  },
  {
    "soort": "spiegeling",
    "opdracht": "Welke is het spiegelbeeld?",
    "toon": [
      "⬆️"
    ],
    "opties": [
      "⬇️",
      "⬆️",
      "🔵"
    ],
    "goed": "⬇️",
    "uitleg": "Spiegelen klapt het beeld om: ⬆️ wordt ⬇️.",
    "niveau": 5
  },
  {
    "soort": "spiegeling",
    "opdracht": "Welke is het spiegelbeeld?",
    "toon": [
      "⬇️"
    ],
    "opties": [
      "⬆️",
      "🟨",
      "⬇️"
    ],
    "goed": "⬆️",
    "uitleg": "Spiegelen klapt het beeld om: ⬇️ wordt ⬆️.",
    "niveau": 6
  },
  {
    "soort": "spiegeling",
    "opdracht": "Welke is het spiegelbeeld?",
    "toon": [
      "🔼"
    ],
    "opties": [
      "🔽",
      "🔼",
      "🟨"
    ],
    "goed": "🔽",
    "uitleg": "Spiegelen klapt het beeld om: 🔼 wordt 🔽.",
    "niveau": 5
  },
  {
    "soort": "spiegeling",
    "opdracht": "Welke is het spiegelbeeld?",
    "toon": [
      "🔽"
    ],
    "opties": [
      "🔼",
      "🔽",
      "⬛"
    ],
    "goed": "🔼",
    "uitleg": "Spiegelen klapt het beeld om: 🔽 wordt 🔼.",
    "niveau": 6
  },
  {
    "soort": "spiegeling",
    "opdracht": "Welke is het spiegelbeeld?",
    "toon": [
      "↗️"
    ],
    "opties": [
      "⬛",
      "↙️",
      "↗️"
    ],
    "goed": "↙️",
    "uitleg": "Spiegelen klapt het beeld om: ↗️ wordt ↙️.",
    "niveau": 5
  },
  {
    "soort": "spiegeling",
    "opdracht": "Welke is het spiegelbeeld?",
    "toon": [
      "↙️"
    ],
    "opties": [
      "🟦",
      "↗️",
      "↙️"
    ],
    "goed": "↗️",
    "uitleg": "Spiegelen klapt het beeld om: ↙️ wordt ↗️.",
    "niveau": 6
  },
  {
    "soort": "spiegeling",
    "opdracht": "Welke is het spiegelbeeld?",
    "toon": [
      "↘️"
    ],
    "opties": [
      "↘️",
      "🟦",
      "↖️"
    ],
    "goed": "↖️",
    "uitleg": "Spiegelen klapt het beeld om: ↘️ wordt ↖️.",
    "niveau": 5
  },
  {
    "soort": "spiegeling",
    "opdracht": "Welke is het spiegelbeeld?",
    "toon": [
      "↖️"
    ],
    "opties": [
      "↘️",
      "↖️",
      "⭐"
    ],
    "goed": "↘️",
    "uitleg": "Spiegelen klapt het beeld om: ↖️ wordt ↘️.",
    "niveau": 6
  },
  {
    "soort": "analogie",
    "opdracht": "🐛 → 🦋. Dus ☁️ → ?",
    "opties": [
      "🌧️",
      "🦋",
      "🧶"
    ],
    "goed": "🌧️",
    "uitleg": "🐛 verandert in 🦋; op dezelfde manier verandert ☁️ in 🌧️.",
    "niveau": 5
  },
  {
    "soort": "analogie",
    "opdracht": "🥚 → 🐣. Dus 🌾 → ?",
    "opties": [
      "🍞",
      "🌳",
      "🐣"
    ],
    "goed": "🍞",
    "uitleg": "🥚 verandert in 🐣; op dezelfde manier verandert 🌾 in 🍞.",
    "niveau": 6
  },
  {
    "soort": "analogie",
    "opdracht": "🌱 → 🌳. Dus 🐄 → ?",
    "opties": [
      "🌳",
      "🥛",
      "🥧"
    ],
    "goed": "🥛",
    "uitleg": "🌱 verandert in 🌳; op dezelfde manier verandert 🐄 in 🥛.",
    "niveau": 5
  },
  {
    "soort": "analogie",
    "opdracht": "☁️ → 🌧️. Dus 🐑 → ?",
    "opties": [
      "🧶",
      "🍣",
      "🌧️"
    ],
    "goed": "🧶",
    "uitleg": "☁️ verandert in 🌧️; op dezelfde manier verandert 🐑 in 🧶.",
    "niveau": 6
  },
  {
    "soort": "analogie",
    "opdracht": "🌾 → 🍞. Dus 🌰 → ?",
    "opties": [
      "🍞",
      "🌳",
      "🦋"
    ],
    "goed": "🌳",
    "uitleg": "🌾 verandert in 🍞; op dezelfde manier verandert 🌰 in 🌳.",
    "niveau": 5
  },
  {
    "soort": "analogie",
    "opdracht": "🐄 → 🥛. Dus 🍎 → ?",
    "opties": [
      "🥧",
      "🥛",
      "🐣"
    ],
    "goed": "🥧",
    "uitleg": "🐄 verandert in 🥛; op dezelfde manier verandert 🍎 in 🥧.",
    "niveau": 6
  },
  {
    "soort": "analogie",
    "opdracht": "🐑 → 🧶. Dus 🐟 → ?",
    "opties": [
      "🍣",
      "🧶",
      "🌳"
    ],
    "goed": "🍣",
    "uitleg": "🐑 verandert in 🧶; op dezelfde manier verandert 🐟 in 🍣.",
    "niveau": 5
  },
  {
    "soort": "analogie",
    "opdracht": "🌰 → 🌳. Dus 🐛 → ?",
    "opties": [
      "🦋",
      "🌳",
      "🌧️"
    ],
    "goed": "🦋",
    "uitleg": "🌰 verandert in 🌳; op dezelfde manier verandert 🐛 in 🦋.",
    "niveau": 6
  },
  {
    "soort": "analogie",
    "opdracht": "🍎 → 🥧. Dus 🥚 → ?",
    "opties": [
      "🥧",
      "🍞",
      "🐣"
    ],
    "goed": "🐣",
    "uitleg": "🍎 verandert in 🥧; op dezelfde manier verandert 🥚 in 🐣.",
    "niveau": 5
  },
  {
    "soort": "analogie",
    "opdracht": "🐟 → 🍣. Dus 🌱 → ?",
    "opties": [
      "🌳",
      "🍣",
      "🥛"
    ],
    "goed": "🌳",
    "uitleg": "🐟 verandert in 🍣; op dezelfde manier verandert 🌱 in 🌳.",
    "niveau": 6
  },
  {
    "soort": "tweeregels",
    "opdracht": "Let op kleur én vorm. Wat komt hierna?",
    "toon": [
      "🔴",
      "🟥",
      "🔵",
      "🟦",
      "🔴",
      "❓"
    ],
    "opties": [
      "🔴",
      "🟥",
      "🔵"
    ],
    "goed": "🟥",
    "uitleg": "Er lopen twee regels: de vorm wisselt rond-vierkant, en de kleur wisselt per paar.",
    "niveau": 5
  },
  {
    "soort": "tweeregels",
    "opdracht": "Let op kleur én vorm. Wat komt hierna?",
    "toon": [
      "🔴",
      "🟥",
      "🔵",
      "🟦",
      "🔴",
      "🟥",
      "🔵",
      "❓"
    ],
    "opties": [
      "🔴",
      "🔵",
      "🟦"
    ],
    "goed": "🟦",
    "uitleg": "Er lopen twee regels: de vorm wisselt rond-vierkant, en de kleur wisselt per paar.",
    "niveau": 6
  },
  {
    "soort": "tweeregels",
    "opdracht": "Let op kleur én vorm. Wat komt hierna?",
    "toon": [
      "🟡",
      "🟨",
      "🟢",
      "🟩",
      "🟡",
      "❓"
    ],
    "opties": [
      "🟨",
      "🟡",
      "🟢"
    ],
    "goed": "🟨",
    "uitleg": "Er lopen twee regels: de vorm wisselt rond-vierkant, en de kleur wisselt per paar.",
    "niveau": 5
  },
  {
    "soort": "tweeregels",
    "opdracht": "Let op kleur én vorm. Wat komt hierna?",
    "toon": [
      "🟡",
      "🟨",
      "🟢",
      "🟩",
      "🟡",
      "🟨",
      "🟢",
      "❓"
    ],
    "opties": [
      "🟢",
      "🟡",
      "🟩"
    ],
    "goed": "🟩",
    "uitleg": "Er lopen twee regels: de vorm wisselt rond-vierkant, en de kleur wisselt per paar.",
    "niveau": 6
  },
  {
    "soort": "tweeregels",
    "opdracht": "Let op kleur én vorm. Wat komt hierna?",
    "toon": [
      "🟣",
      "🟪",
      "🟠",
      "🟧",
      "🟣",
      "❓"
    ],
    "opties": [
      "🟪",
      "🟠",
      "🟣"
    ],
    "goed": "🟪",
    "uitleg": "Er lopen twee regels: de vorm wisselt rond-vierkant, en de kleur wisselt per paar.",
    "niveau": 5
  },
  {
    "soort": "tweeregels",
    "opdracht": "Let op kleur én vorm. Wat komt hierna?",
    "toon": [
      "🟣",
      "🟪",
      "🟠",
      "🟧",
      "🟣",
      "🟪",
      "🟠",
      "❓"
    ],
    "opties": [
      "🟠",
      "🟧",
      "🟣"
    ],
    "goed": "🟧",
    "uitleg": "Er lopen twee regels: de vorm wisselt rond-vierkant, en de kleur wisselt per paar.",
    "niveau": 6
  },
  {
    "soort": "matrix",
    "opdracht": "Wat hoort op de ❓-plek?",
    "kolommen": 2,
    "toon": [
      "🔴",
      "🟥",
      "🟡",
      "❓"
    ],
    "opties": [
      "🟥",
      "🟡",
      "🟨"
    ],
    "goed": "🟨",
    "uitleg": "Elke rij heeft één kleur en elke kolom één vorm. Rij 2 is geel, kolom 2 is het vierkant, dus 🟨.",
    "niveau": 5
  },
  {
    "soort": "matrix",
    "opdracht": "Wat hoort op de ❓-plek?",
    "kolommen": 2,
    "toon": [
      "🔵",
      "🟦",
      "🟢",
      "❓"
    ],
    "opties": [
      "🟩",
      "🟦",
      "🟢"
    ],
    "goed": "🟩",
    "uitleg": "Elke rij heeft één kleur en elke kolom één vorm. Rij 2 is groen, kolom 2 is het vierkant, dus 🟩.",
    "niveau": 5
  },
  {
    "soort": "matrix",
    "opdracht": "Wat hoort op de ❓-plek?",
    "kolommen": 2,
    "toon": [
      "🟡",
      "🟨",
      "🟣",
      "❓"
    ],
    "opties": [
      "🟨",
      "🟣",
      "🟪"
    ],
    "goed": "🟪",
    "uitleg": "Elke rij heeft één kleur en elke kolom één vorm. Rij 2 is paars, kolom 2 is het vierkant, dus 🟪.",
    "niveau": 5
  },
  {
    "soort": "matrix",
    "opdracht": "Wat hoort op de ❓-plek?",
    "kolommen": 2,
    "toon": [
      "🟢",
      "🟩",
      "🟠",
      "❓"
    ],
    "opties": [
      "🟠",
      "🟩",
      "🟧"
    ],
    "goed": "🟧",
    "uitleg": "Elke rij heeft één kleur en elke kolom één vorm. Rij 2 is oranje, kolom 2 is het vierkant, dus 🟧.",
    "niveau": 5
  },
  {
    "soort": "matrix",
    "opdracht": "Wat hoort op de ❓-plek?",
    "kolommen": 2,
    "toon": [
      "🟣",
      "🟪",
      "🔴",
      "❓"
    ],
    "opties": [
      "🟥",
      "🔴",
      "🟪"
    ],
    "goed": "🟥",
    "uitleg": "Elke rij heeft één kleur en elke kolom één vorm. Rij 2 is rood, kolom 2 is het vierkant, dus 🟥.",
    "niveau": 5
  },
  {
    "soort": "matrix",
    "opdracht": "Wat hoort op de ❓-plek?",
    "kolommen": 2,
    "toon": [
      "🟠",
      "🟧",
      "🔵",
      "❓"
    ],
    "opties": [
      "🔵",
      "🟧",
      "🟦"
    ],
    "goed": "🟦",
    "uitleg": "Elke rij heeft één kleur en elke kolom één vorm. Rij 2 is blauw, kolom 2 is het vierkant, dus 🟦.",
    "niveau": 5
  },
  {
    "soort": "matrix",
    "opdracht": "Wat hoort op de ❓-plek?",
    "kolommen": 3,
    "toon": [
      "🔴",
      "🟥",
      "❤️",
      "🔵",
      "🟦",
      "💙",
      "🟡",
      "🟨",
      "❓"
    ],
    "opties": [
      "❤️",
      "💛",
      "💙"
    ],
    "goed": "💛",
    "uitleg": "Per rij verandert de kleur, per kolom de vorm. De laatste rij is geel en de laatste kolom is het hart, dus 💛.",
    "niveau": 6
  },
  {
    "soort": "matrix",
    "opdracht": "Wat hoort op de ❓-plek?",
    "kolommen": 3,
    "toon": [
      "🔵",
      "🟦",
      "💙",
      "🟡",
      "🟨",
      "💛",
      "🟢",
      "🟩",
      "❓"
    ],
    "opties": [
      "💚",
      "💙",
      "💛"
    ],
    "goed": "💚",
    "uitleg": "Per rij verandert de kleur, per kolom de vorm. De laatste rij is groen en de laatste kolom is het hart, dus 💚.",
    "niveau": 6
  },
  {
    "soort": "matrix",
    "opdracht": "Wat hoort op de ❓-plek?",
    "kolommen": 3,
    "toon": [
      "🟡",
      "🟨",
      "💛",
      "🟢",
      "🟩",
      "💚",
      "🟣",
      "🟪",
      "❓"
    ],
    "opties": [
      "💚",
      "💜",
      "💛"
    ],
    "goed": "💜",
    "uitleg": "Per rij verandert de kleur, per kolom de vorm. De laatste rij is paars en de laatste kolom is het hart, dus 💜.",
    "niveau": 6
  },
  {
    "soort": "matrix",
    "opdracht": "Wat hoort op de ❓-plek?",
    "kolommen": 3,
    "toon": [
      "🟢",
      "🟩",
      "💚",
      "🟣",
      "🟪",
      "💜",
      "🟠",
      "🟧",
      "❓"
    ],
    "opties": [
      "💜",
      "🧡",
      "💚"
    ],
    "goed": "🧡",
    "uitleg": "Per rij verandert de kleur, per kolom de vorm. De laatste rij is oranje en de laatste kolom is het hart, dus 🧡.",
    "niveau": 6
  },
  {
    "soort": "matrix",
    "opdracht": "Wat hoort op de ❓-plek?",
    "kolommen": 3,
    "toon": [
      "🟣",
      "🟪",
      "💜",
      "🟠",
      "🟧",
      "🧡",
      "🔴",
      "🟥",
      "❓"
    ],
    "opties": [
      "💜",
      "🧡",
      "❤️"
    ],
    "goed": "❤️",
    "uitleg": "Per rij verandert de kleur, per kolom de vorm. De laatste rij is rood en de laatste kolom is het hart, dus ❤️.",
    "niveau": 6
  },
  {
    "soort": "matrix",
    "opdracht": "Wat hoort op de ❓-plek?",
    "kolommen": 3,
    "toon": [
      "🟠",
      "🟧",
      "🧡",
      "🔴",
      "🟥",
      "❤️",
      "🔵",
      "🟦",
      "❓"
    ],
    "opties": [
      "🧡",
      "💙",
      "❤️"
    ],
    "goed": "💙",
    "uitleg": "Per rij verandert de kleur, per kolom de vorm. De laatste rij is blauw en de laatste kolom is het hart, dus 💙.",
    "niveau": 6
  }
];
if (typeof module !== 'undefined') module.exports = BEELD_DENKEN;
