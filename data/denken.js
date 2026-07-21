// data/denken.js — kritisch denken voor de Denkgrot.
// Voor ouders: elk item is { soort, vraag, opties[], goed, uitleg, niveau }.
// 'goed' staat altijd letterlijk in 'opties'. Na een goed antwoord toont de app de 'uitleg' (de redenering).
// Soorten: patroon, logica, klopt-niet, feit-mening, volgorde, signaalwoord.

var DENKEN = [
  {
    "soort": "patroon",
    "vraag": "Welk figuur komt hierna? 🔴 🔵 🔴 🔵 🔴 ...",
    "opties": [
      "🔵",
      "🔴",
      "🟢"
    ],
    "goed": "🔵",
    "uitleg": "Rood en blauw wisselen elkaar af. Na rood komt weer blauw.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 2, 4, 6, 8, ...",
    "opties": [
      "9",
      "10",
      "12"
    ],
    "goed": "10",
    "uitleg": "Er komt elke keer 2 bij. 8 + 2 = 10.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welke komt hierna? 🔺 🔺 🔻 🔺 🔺 🔻 ...",
    "opties": [
      "🔺",
      "🔻"
    ],
    "goed": "🔺",
    "uitleg": "Het patroon is: twee omhoog, één omlaag. Na een omlaag beginnen we weer met omhoog.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 5, 10, 15, 20, ...",
    "opties": [
      "21",
      "25",
      "30"
    ],
    "goed": "25",
    "uitleg": "Er komt elke keer 5 bij. 20 + 5 = 25.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal ontbreekt? 1, 2, 4, 8, ...",
    "opties": [
      "10",
      "12",
      "16"
    ],
    "goed": "16",
    "uitleg": "Het getal verdubbelt elke keer. 8 + 8 = 16.",
    "niveau": 3
  },
  {
    "soort": "patroon",
    "vraag": "Welke komt hierna? 🟦🟨🟦🟨🟨🟦🟨🟨🟨...",
    "opties": [
      "🟦",
      "🟨"
    ],
    "goed": "🟦",
    "uitleg": "Er komt telkens een geel bij tussen de blauwe. Na drie gelen komt weer blauw.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Sam is langer dan Bo. Bo is langer dan Tim. Wie is het kortst?",
    "opties": [
      "Sam",
      "Bo",
      "Tim"
    ],
    "goed": "Tim",
    "uitleg": "Sam > Bo > Tim. Tim staat onderaan, dus Tim is het kortst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Alle katten hebben een staart. Minoes is een kat. Heeft Minoes een staart?",
    "opties": [
      "Ja",
      "Nee",
      "Weet niet"
    ],
    "goed": "Ja",
    "uitleg": "Als álle katten een staart hebben en Minoes is een kat, dan heeft Minoes ook een staart.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "In de doos zitten alleen rode en blauwe ballen. Je pakt een bal die niet blauw is. Welke kleur?",
    "opties": [
      "Rood",
      "Groen",
      "Blauw"
    ],
    "goed": "Rood",
    "uitleg": "Er zijn maar twee kleuren. Niet blauw betekent dus rood.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Anna is jonger dan Ben. Ben is jonger dan Cas. Wie is het oudst?",
    "opties": [
      "Anna",
      "Ben",
      "Cas"
    ],
    "goed": "Cas",
    "uitleg": "Anna < Ben < Cas. Cas staat bovenaan, dus Cas is het oudst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Als het regent, neemt Puk een paraplu. Puk heeft geen paraplu bij zich. Wat weet je?",
    "opties": [
      "Het regent",
      "Het regent niet",
      "Puk is nat"
    ],
    "goed": "Het regent niet",
    "uitleg": "Bij regen zou Puk een paraplu hebben. Die heeft hij niet, dus regent het niet.",
    "niveau": 3
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Sommige honden zijn bruin",
      "Alle honden zijn bruin",
      "Honden kunnen blaffen"
    ],
    "goed": "Alle honden zijn bruin",
    "uitleg": "Er zijn ook zwarte en witte honden. Pas op met het woordje 'alle' — één uitzondering maakt het al onwaar.",
    "niveau": 2
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Sommige vogels kunnen vliegen",
      "Alle vogels kunnen vliegen",
      "Een mus is een vogel"
    ],
    "goed": "Alle vogels kunnen vliegen",
    "uitleg": "Een pinguïn is een vogel die niet vliegt. 'Alle' is dus te sterk.",
    "niveau": 3
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Iedereen vindt spinazie lekker",
      "Sommige kinderen lusten spinazie",
      "Spinazie is groen"
    ],
    "goed": "Iedereen vindt spinazie lekker",
    "uitleg": "Smaak verschilt per persoon. 'Iedereen' kan bijna nooit waar zijn over lekker vinden.",
    "niveau": 3
  },
  {
    "soort": "feit-mening",
    "vraag": "Is dit een feit of een mening? 'Water is nat.'",
    "opties": [
      "Feit",
      "Mening"
    ],
    "goed": "Feit",
    "uitleg": "Dat kun je nameten en controleren, dus het is een feit.",
    "niveau": 2
  },
  {
    "soort": "feit-mening",
    "vraag": "Is dit een feit of een mening? 'Chocola is het lekkerste dat er is.'",
    "opties": [
      "Feit",
      "Mening"
    ],
    "goed": "Mening",
    "uitleg": "'Lekkerste' verschilt per persoon. Dat is een mening, geen feit.",
    "niveau": 2
  },
  {
    "soort": "feit-mening",
    "vraag": "Is dit een feit of een mening? 'Een week heeft zeven dagen.'",
    "opties": [
      "Feit",
      "Mening"
    ],
    "goed": "Feit",
    "uitleg": "Dat is voor iedereen hetzelfde en te controleren. Dus een feit.",
    "niveau": 3
  },
  {
    "soort": "feit-mening",
    "vraag": "Is dit een feit of een mening? 'Zomer is het fijnste seizoen.'",
    "opties": [
      "Feit",
      "Mening"
    ],
    "goed": "Mening",
    "uitleg": "Sommige mensen houden meer van de winter. Dat maakt het een mening.",
    "niveau": 3
  },
  {
    "soort": "feit-mening",
    "vraag": "Op internet staat: 'Dit speelgoed is het allerbeste!' Is dat een feit?",
    "opties": [
      "Ja, een feit",
      "Nee, een mening"
    ],
    "goed": "Nee, een mening",
    "uitleg": "Reclame geeft vaak een mening om iets te verkopen. Wees kritisch met 'allerbeste'.",
    "niveau": 3
  },
  {
    "soort": "volgorde",
    "vraag": "Welke dag komt na woensdag?",
    "opties": [
      "dinsdag",
      "donderdag",
      "vrijdag"
    ],
    "goed": "donderdag",
    "uitleg": "De volgorde is: maandag, dinsdag, woensdag, donderdag. Na woensdag komt donderdag.",
    "niveau": 1
  },
  {
    "soort": "volgorde",
    "vraag": "Welke letter komt na de B in het alfabet?",
    "opties": [
      "A",
      "C",
      "D"
    ],
    "goed": "C",
    "uitleg": "Het alfabet begint met A, B, C. Na de B komt de C.",
    "niveau": 1
  },
  {
    "soort": "volgorde",
    "vraag": "Zet op volgorde: eerst doe je je... daarna je schoenen.",
    "opties": [
      "sokken",
      "jas",
      "muts"
    ],
    "goed": "sokken",
    "uitleg": "Sokken gaan eerst, daarna de schoenen eroverheen. Dat is de logische volgorde.",
    "niveau": 1
  },
  {
    "soort": "volgorde",
    "vraag": "Welke maand komt na juni?",
    "opties": [
      "mei",
      "juli",
      "augustus"
    ],
    "goed": "juli",
    "uitleg": "De volgorde is mei, juni, juli. Na juni komt juli.",
    "niveau": 2
  },
  {
    "soort": "volgorde",
    "vraag": "Wat doe je eerst bij tandenpoetsen?",
    "opties": [
      "Tandpasta op de borstel",
      "Spoelen met water",
      "De borstel wegleggen"
    ],
    "goed": "Tandpasta op de borstel",
    "uitleg": "Eerst tandpasta erop, dan poetsen, dan spoelen. De eerste stap is de tandpasta.",
    "niveau": 2
  },
  {
    "soort": "signaalwoord",
    "vraag": "Kies het juiste woord: 'Ik neem een jas mee ... het is koud.'",
    "opties": [
      "omdat",
      "maar",
      "of"
    ],
    "goed": "omdat",
    "uitleg": "'Omdat' geeft een reden. De reden voor de jas is dat het koud is.",
    "niveau": 3
  },
  {
    "soort": "signaalwoord",
    "vraag": "Kies het juiste woord: 'Eerst eten we, ... gaan we spelen.'",
    "opties": [
      "omdat",
      "daarna",
      "want"
    ],
    "goed": "daarna",
    "uitleg": "'Daarna' geeft de volgorde in de tijd aan: eerst het één, dan het ander.",
    "niveau": 3
  },
  {
    "soort": "signaalwoord",
    "vraag": "Kies het juiste woord: 'Ik wilde buiten spelen, ... het regende.'",
    "opties": [
      "dus",
      "maar",
      "daarom"
    ],
    "goed": "maar",
    "uitleg": "'Maar' geeft een tegenstelling: je wilde iets, maar er was een probleem.",
    "niveau": 3
  },
  {
    "soort": "signaalwoord",
    "vraag": "Welk woord geeft een reden aan?",
    "opties": [
      "daarna",
      "omdat",
      "eerst"
    ],
    "goed": "omdat",
    "uitleg": "'Omdat' hoort bij een reden. 'Daarna' en 'eerst' horen bij volgorde.",
    "niveau": 3
  },
  {
    "soort": "patroon",
    "vraag": "Welke vorm ontbreekt? ⬛⬜⬛⬜⬛...",
    "opties": [
      "⬛",
      "⬜"
    ],
    "goed": "⬜",
    "uitleg": "Zwart en wit wisselen af. Na zwart komt wit.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Tel verder: 10, 20, 30, ...",
    "opties": [
      "31",
      "40",
      "50"
    ],
    "goed": "40",
    "uitleg": "Er komt telkens 10 bij. 30 + 10 = 40.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Er liggen 3 appels en 2 peren. Je pakt zonder kijken. Welk fruit pak je het vaakst?",
    "opties": [
      "Appel",
      "Peer",
      "Even vaak"
    ],
    "goed": "Appel",
    "uitleg": "Er zijn meer appels dan peren, dus de kans op een appel is groter.",
    "niveau": 2
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Sommige vissen zijn groot",
      "Alle vissen wonen in de lucht",
      "Vissen kunnen zwemmen"
    ],
    "goed": "Alle vissen wonen in de lucht",
    "uitleg": "Vissen leven in het water, niet in de lucht. Die zin klopt niet.",
    "niveau": 1
  },
  {
    "soort": "feit-mening",
    "vraag": "Feit of mening? 'De zon is heet.'",
    "opties": [
      "Feit",
      "Mening"
    ],
    "goed": "Feit",
    "uitleg": "Dat is te meten en voor iedereen waar. Een feit.",
    "niveau": 1
  },
  {
    "soort": "volgorde",
    "vraag": "Welk seizoen komt na de lente?",
    "opties": [
      "winter",
      "zomer",
      "herfst"
    ],
    "goed": "zomer",
    "uitleg": "De volgorde is lente, zomer, herfst, winter. Na de lente komt de zomer.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Kim heeft meer stickers dan Roos. Roos heeft er 5. Hoeveel heeft Kim mogelijk?",
    "opties": [
      "3",
      "5",
      "8"
    ],
    "goed": "8",
    "uitleg": "Meer dan 5 betekent 6 of hoger. Van deze keuzes past alleen 8.",
    "niveau": 3
  },
  {
    "soort": "signaalwoord",
    "vraag": "Kies het juiste woord: 'Het was donker, ... deed ik het licht aan.'",
    "opties": [
      "dus",
      "maar",
      "of"
    ],
    "goed": "dus",
    "uitleg": "'Dus' geeft een gevolg: door het donker deed je het licht aan.",
    "niveau": 3
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Sommige bloemen zijn rood",
      "Bloemen groeien in de grond",
      "Alle bloemen ruiken lekker"
    ],
    "goed": "Alle bloemen ruiken lekker",
    "uitleg": "Niet elke bloem ruikt lekker; sommige ruiken naar niets. 'Alle' is te sterk.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welke komt hierna? 🌑🌓🌕🌗🌑🌓🌕...",
    "opties": [
      "🌑",
      "🌗"
    ],
    "goed": "🌗",
    "uitleg": "De maanstanden herhalen in een vaste kring. Na 🌕 komt 🌗.",
    "niveau": 3
  },
  {
    "soort": "feit-mening",
    "vraag": "Feit of mening? 'Voetbal is saai.'",
    "opties": [
      "Feit",
      "Mening"
    ],
    "goed": "Mening",
    "uitleg": "Sommigen vinden voetbal juist leuk. Saai is een mening.",
    "niveau": 2
  },
  {
    "soort": "volgorde",
    "vraag": "Welk getal hoort in het midden? 1 ... 3",
    "opties": [
      "0",
      "2",
      "4"
    ],
    "goed": "2",
    "uitleg": "Tussen 1 en 3 ligt de 2. Dat is de volgorde van tellen.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 1, 3, 5, 7, ...",
    "opties": [
      "8",
      "11",
      "9"
    ],
    "goed": "9",
    "uitleg": "Er komt telkens 2 bij. 7 + 2 = 9.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 5, 7, 9, ...",
    "opties": [
      "13",
      "11",
      "10"
    ],
    "goed": "11",
    "uitleg": "Er komt telkens 2 bij. 9 + 2 = 11.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 4, 6, 8, 10, ...",
    "opties": [
      "11",
      "14",
      "12"
    ],
    "goed": "12",
    "uitleg": "Er komt telkens 2 bij. 10 + 2 = 12.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 5, 7, 9, 11, ...",
    "opties": [
      "13",
      "12",
      "15"
    ],
    "goed": "13",
    "uitleg": "Er komt telkens 2 bij. 11 + 2 = 13.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 6, 8, 10, 12, ...",
    "opties": [
      "14",
      "16",
      "13"
    ],
    "goed": "14",
    "uitleg": "Er komt telkens 2 bij. 12 + 2 = 14.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 9, 11, 13, ...",
    "opties": [
      "17",
      "15",
      "14"
    ],
    "goed": "15",
    "uitleg": "Er komt telkens 2 bij. 13 + 2 = 15.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 8, 10, 12, 14, ...",
    "opties": [
      "15",
      "16",
      "18"
    ],
    "goed": "16",
    "uitleg": "Er komt telkens 2 bij. 14 + 2 = 16.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 1, 4, 7, 10, ...",
    "opties": [
      "13",
      "16",
      "12"
    ],
    "goed": "13",
    "uitleg": "Er komt telkens 3 bij. 10 + 3 = 13.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 2, 5, 8, 11, ...",
    "opties": [
      "14",
      "13",
      "17"
    ],
    "goed": "14",
    "uitleg": "Er komt telkens 3 bij. 11 + 3 = 14.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 6, 9, 12, ...",
    "opties": [
      "18",
      "14",
      "15"
    ],
    "goed": "15",
    "uitleg": "Er komt telkens 3 bij. 12 + 3 = 15.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 4, 7, 10, 13, ...",
    "opties": [
      "19",
      "16",
      "15"
    ],
    "goed": "16",
    "uitleg": "Er komt telkens 3 bij. 13 + 3 = 16.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 5, 8, 11, 14, ...",
    "opties": [
      "17",
      "20",
      "16"
    ],
    "goed": "17",
    "uitleg": "Er komt telkens 3 bij. 14 + 3 = 17.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 6, 9, 12, 15, ...",
    "opties": [
      "17",
      "21",
      "18"
    ],
    "goed": "18",
    "uitleg": "Er komt telkens 3 bij. 15 + 3 = 18.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 10, 13, 16, ...",
    "opties": [
      "18",
      "22",
      "19"
    ],
    "goed": "19",
    "uitleg": "Er komt telkens 3 bij. 16 + 3 = 19.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 8, 11, 14, 17, ...",
    "opties": [
      "23",
      "20",
      "19"
    ],
    "goed": "20",
    "uitleg": "Er komt telkens 3 bij. 17 + 3 = 20.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 1, 5, 9, 13, ...",
    "opties": [
      "17",
      "16",
      "21"
    ],
    "goed": "17",
    "uitleg": "Er komt telkens 4 bij. 13 + 4 = 17.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 2, 6, 10, 14, ...",
    "opties": [
      "18",
      "17",
      "22"
    ],
    "goed": "18",
    "uitleg": "Er komt telkens 4 bij. 14 + 4 = 18.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 7, 11, 15, ...",
    "opties": [
      "18",
      "23",
      "19"
    ],
    "goed": "19",
    "uitleg": "Er komt telkens 4 bij. 15 + 4 = 19.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 4, 8, 12, 16, ...",
    "opties": [
      "19",
      "20",
      "24"
    ],
    "goed": "20",
    "uitleg": "Er komt telkens 4 bij. 16 + 4 = 20.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 5, 9, 13, 17, ...",
    "opties": [
      "21",
      "25",
      "20"
    ],
    "goed": "21",
    "uitleg": "Er komt telkens 4 bij. 17 + 4 = 21.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 6, 10, 14, 18, ...",
    "opties": [
      "21",
      "22",
      "26"
    ],
    "goed": "22",
    "uitleg": "Er komt telkens 4 bij. 18 + 4 = 22.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 11, 15, 19, ...",
    "opties": [
      "23",
      "27",
      "22"
    ],
    "goed": "23",
    "uitleg": "Er komt telkens 4 bij. 19 + 4 = 23.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 8, 12, 16, 20, ...",
    "opties": [
      "28",
      "24",
      "23"
    ],
    "goed": "24",
    "uitleg": "Er komt telkens 4 bij. 20 + 4 = 24.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 1, 6, 11, 16, ...",
    "opties": [
      "20",
      "26",
      "21"
    ],
    "goed": "21",
    "uitleg": "Er komt telkens 5 bij. 16 + 5 = 21.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 2, 7, 12, 17, ...",
    "opties": [
      "21",
      "27",
      "22"
    ],
    "goed": "22",
    "uitleg": "Er komt telkens 5 bij. 17 + 5 = 22.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 8, 13, 18, ...",
    "opties": [
      "22",
      "28",
      "23"
    ],
    "goed": "23",
    "uitleg": "Er komt telkens 5 bij. 18 + 5 = 23.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 4, 9, 14, 19, ...",
    "opties": [
      "29",
      "24",
      "23"
    ],
    "goed": "24",
    "uitleg": "Er komt telkens 5 bij. 19 + 5 = 24.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 6, 11, 16, 21, ...",
    "opties": [
      "25",
      "26",
      "31"
    ],
    "goed": "26",
    "uitleg": "Er komt telkens 5 bij. 21 + 5 = 26.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 12, 17, 22, ...",
    "opties": [
      "26",
      "27",
      "32"
    ],
    "goed": "27",
    "uitleg": "Er komt telkens 5 bij. 22 + 5 = 27.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 8, 13, 18, 23, ...",
    "opties": [
      "33",
      "27",
      "28"
    ],
    "goed": "28",
    "uitleg": "Er komt telkens 5 bij. 23 + 5 = 28.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 1, 11, 21, 31, ...",
    "opties": [
      "41",
      "40",
      "51"
    ],
    "goed": "41",
    "uitleg": "Er komt telkens 10 bij. 31 + 10 = 41.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 2, 12, 22, 32, ...",
    "opties": [
      "42",
      "52",
      "41"
    ],
    "goed": "42",
    "uitleg": "Er komt telkens 10 bij. 32 + 10 = 42.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 13, 23, 33, ...",
    "opties": [
      "53",
      "43",
      "42"
    ],
    "goed": "43",
    "uitleg": "Er komt telkens 10 bij. 33 + 10 = 43.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 4, 14, 24, 34, ...",
    "opties": [
      "43",
      "44",
      "54"
    ],
    "goed": "44",
    "uitleg": "Er komt telkens 10 bij. 34 + 10 = 44.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 5, 15, 25, 35, ...",
    "opties": [
      "44",
      "45",
      "55"
    ],
    "goed": "45",
    "uitleg": "Er komt telkens 10 bij. 35 + 10 = 45.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 6, 16, 26, 36, ...",
    "opties": [
      "56",
      "45",
      "46"
    ],
    "goed": "46",
    "uitleg": "Er komt telkens 10 bij. 36 + 10 = 46.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 17, 27, 37, ...",
    "opties": [
      "47",
      "57",
      "46"
    ],
    "goed": "47",
    "uitleg": "Er komt telkens 10 bij. 37 + 10 = 47.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 8, 18, 28, 38, ...",
    "opties": [
      "48",
      "47",
      "58"
    ],
    "goed": "48",
    "uitleg": "Er komt telkens 10 bij. 38 + 10 = 48.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 10, 8, 6, 4, ...",
    "opties": [
      "3",
      "2",
      "0"
    ],
    "goed": "2",
    "uitleg": "Er gaat telkens 2 af. 4 − 2 = 2.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 12, 10, 8, 6, ...",
    "opties": [
      "5",
      "4",
      "2"
    ],
    "goed": "4",
    "uitleg": "Er gaat telkens 2 af. 6 − 2 = 4.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 14, 12, 10, 8, ...",
    "opties": [
      "7",
      "4",
      "6"
    ],
    "goed": "6",
    "uitleg": "Er gaat telkens 2 af. 8 − 2 = 6.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 16, 14, 12, 10, ...",
    "opties": [
      "9",
      "8",
      "6"
    ],
    "goed": "8",
    "uitleg": "Er gaat telkens 2 af. 10 − 2 = 8.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 18, 16, 14, 12, ...",
    "opties": [
      "11",
      "8",
      "10"
    ],
    "goed": "10",
    "uitleg": "Er gaat telkens 2 af. 12 − 2 = 10.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 20, 18, 16, 14, ...",
    "opties": [
      "12",
      "13",
      "10"
    ],
    "goed": "12",
    "uitleg": "Er gaat telkens 2 af. 14 − 2 = 12.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 25, 20, 15, 10, ...",
    "opties": [
      "6",
      "5",
      "0"
    ],
    "goed": "5",
    "uitleg": "Er gaat telkens 5 af. 10 − 5 = 5.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 30, 25, 20, 15, ...",
    "opties": [
      "10",
      "5",
      "11"
    ],
    "goed": "10",
    "uitleg": "Er gaat telkens 5 af. 15 − 5 = 10.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 35, 30, 25, 20, ...",
    "opties": [
      "15",
      "16",
      "10"
    ],
    "goed": "15",
    "uitleg": "Er gaat telkens 5 af. 20 − 5 = 15.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 40, 35, 30, 25, ...",
    "opties": [
      "21",
      "20",
      "15"
    ],
    "goed": "20",
    "uitleg": "Er gaat telkens 5 af. 25 − 5 = 20.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 45, 40, 35, 30, ...",
    "opties": [
      "26",
      "25",
      "20"
    ],
    "goed": "25",
    "uitleg": "Er gaat telkens 5 af. 30 − 5 = 25.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 50, 45, 40, 35, ...",
    "opties": [
      "25",
      "31",
      "30"
    ],
    "goed": "30",
    "uitleg": "Er gaat telkens 5 af. 35 − 5 = 30.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 50, 40, 30, 20, ...",
    "opties": [
      "11",
      "10",
      "0"
    ],
    "goed": "10",
    "uitleg": "Er gaat telkens 10 af. 20 − 10 = 10.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 60, 50, 40, 30, ...",
    "opties": [
      "10",
      "20",
      "21"
    ],
    "goed": "20",
    "uitleg": "Er gaat telkens 10 af. 30 − 10 = 20.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 70, 60, 50, 40, ...",
    "opties": [
      "31",
      "20",
      "30"
    ],
    "goed": "30",
    "uitleg": "Er gaat telkens 10 af. 40 − 10 = 30.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 80, 70, 60, 50, ...",
    "opties": [
      "30",
      "40",
      "41"
    ],
    "goed": "40",
    "uitleg": "Er gaat telkens 10 af. 50 − 10 = 40.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 90, 80, 70, 60, ...",
    "opties": [
      "50",
      "40",
      "51"
    ],
    "goed": "50",
    "uitleg": "Er gaat telkens 10 af. 60 − 10 = 50.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 100, 90, 80, 70, ...",
    "opties": [
      "61",
      "60",
      "50"
    ],
    "goed": "60",
    "uitleg": "Er gaat telkens 10 af. 70 − 10 = 60.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Tim is groter dan Ben. Ben is groter dan Pim. Wie is het kortst?",
    "opties": [
      "Tim",
      "Ben",
      "Pim"
    ],
    "goed": "Pim",
    "uitleg": "Tim > Ben > Pim. Pim staat onderaan, dus die is het kortst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Cas is ouder dan Lot. Lot is ouder dan Noa. Wie is het jongst?",
    "opties": [
      "Cas",
      "Lot",
      "Noa"
    ],
    "goed": "Noa",
    "uitleg": "Cas > Lot > Noa. Noa staat onderaan, dus die is het jongst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Anna is sneller dan Mila. Mila is sneller dan Lot. Wie is het langzaamst?",
    "opties": [
      "Mila",
      "Lot",
      "Anna"
    ],
    "goed": "Lot",
    "uitleg": "Anna > Mila > Lot. Lot staat onderaan, dus die is het langzaamst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Liv is groter dan Ben. Ben is groter dan Sem. Wie is het kortst?",
    "opties": [
      "Liv",
      "Sem",
      "Ben"
    ],
    "goed": "Sem",
    "uitleg": "Liv > Ben > Sem. Sem staat onderaan, dus die is het kortst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Sam is ouder dan Mila. Mila is ouder dan Daan. Wie is het jongst?",
    "opties": [
      "Daan",
      "Mila",
      "Sam"
    ],
    "goed": "Daan",
    "uitleg": "Sam > Mila > Daan. Daan staat onderaan, dus die is het jongst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Liv is sneller dan Sam. Sam is sneller dan Pim. Wie is het langzaamst?",
    "opties": [
      "Liv",
      "Sam",
      "Pim"
    ],
    "goed": "Pim",
    "uitleg": "Liv > Sam > Pim. Pim staat onderaan, dus die is het langzaamst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Fee is groter dan Roos. Roos is groter dan Daan. Wie is het kortst?",
    "opties": [
      "Roos",
      "Daan",
      "Fee"
    ],
    "goed": "Daan",
    "uitleg": "Fee > Roos > Daan. Daan staat onderaan, dus die is het kortst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Daan is ouder dan Anna. Anna is ouder dan Pim. Wie is het jongst?",
    "opties": [
      "Daan",
      "Anna",
      "Pim"
    ],
    "goed": "Pim",
    "uitleg": "Daan > Anna > Pim. Pim staat onderaan, dus die is het jongst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Daan is sneller dan Noa. Noa is sneller dan Mila. Wie is het langzaamst?",
    "opties": [
      "Daan",
      "Mila",
      "Noa"
    ],
    "goed": "Mila",
    "uitleg": "Daan > Noa > Mila. Mila staat onderaan, dus die is het langzaamst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Lot is groter dan Mila. Mila is groter dan Liv. Wie is het kortst?",
    "opties": [
      "Mila",
      "Liv",
      "Lot"
    ],
    "goed": "Liv",
    "uitleg": "Lot > Mila > Liv. Liv staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Ben is ouder dan Mila. Mila is ouder dan Pim. Wie is het jongst?",
    "opties": [
      "Mila",
      "Pim",
      "Ben"
    ],
    "goed": "Pim",
    "uitleg": "Ben > Mila > Pim. Pim staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Tim is sneller dan Lot. Lot is sneller dan Bo. Wie is het langzaamst?",
    "opties": [
      "Lot",
      "Tim",
      "Bo"
    ],
    "goed": "Bo",
    "uitleg": "Tim > Lot > Bo. Bo staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Noa is groter dan Mila. Mila is groter dan Sam. Wie is het kortst?",
    "opties": [
      "Sam",
      "Noa",
      "Mila"
    ],
    "goed": "Sam",
    "uitleg": "Noa > Mila > Sam. Sam staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Liv is ouder dan Daan. Daan is ouder dan Lot. Wie is het jongst?",
    "opties": [
      "Lot",
      "Daan",
      "Liv"
    ],
    "goed": "Lot",
    "uitleg": "Liv > Daan > Lot. Lot staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Sem is sneller dan Mila. Mila is sneller dan Pim. Wie is het langzaamst?",
    "opties": [
      "Mila",
      "Pim",
      "Sem"
    ],
    "goed": "Pim",
    "uitleg": "Sem > Mila > Pim. Pim staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Sam is groter dan Pim. Pim is groter dan Liv. Wie is het kortst?",
    "opties": [
      "Sam",
      "Pim",
      "Liv"
    ],
    "goed": "Liv",
    "uitleg": "Sam > Pim > Liv. Liv staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Sam is ouder dan Pim. Pim is ouder dan Bo. Wie is het jongst?",
    "opties": [
      "Bo",
      "Sam",
      "Pim"
    ],
    "goed": "Bo",
    "uitleg": "Sam > Pim > Bo. Bo staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Lot is sneller dan Daan. Daan is sneller dan Noa. Wie is het langzaamst?",
    "opties": [
      "Daan",
      "Lot",
      "Noa"
    ],
    "goed": "Noa",
    "uitleg": "Lot > Daan > Noa. Noa staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Bo is groter dan Liv. Liv is groter dan Lot. Wie is het kortst?",
    "opties": [
      "Liv",
      "Lot",
      "Bo"
    ],
    "goed": "Lot",
    "uitleg": "Bo > Liv > Lot. Lot staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Anna is ouder dan Ben. Ben is ouder dan Daan. Wie is het jongst?",
    "opties": [
      "Ben",
      "Anna",
      "Daan"
    ],
    "goed": "Daan",
    "uitleg": "Anna > Ben > Daan. Daan staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Bo is sneller dan Pim. Pim is sneller dan Anna. Wie is het langzaamst?",
    "opties": [
      "Bo",
      "Anna",
      "Pim"
    ],
    "goed": "Anna",
    "uitleg": "Bo > Pim > Anna. Anna staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Pim is groter dan Sam. Sam is groter dan Roos. Wie is het kortst?",
    "opties": [
      "Pim",
      "Roos",
      "Sam"
    ],
    "goed": "Roos",
    "uitleg": "Pim > Sam > Roos. Roos staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Liv is ouder dan Ben. Ben is ouder dan Pim. Wie is het jongst?",
    "opties": [
      "Liv",
      "Ben",
      "Pim"
    ],
    "goed": "Pim",
    "uitleg": "Liv > Ben > Pim. Pim staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Pim is sneller dan Bo. Bo is sneller dan Cas. Wie is het langzaamst?",
    "opties": [
      "Cas",
      "Pim",
      "Bo"
    ],
    "goed": "Cas",
    "uitleg": "Pim > Bo > Cas. Cas staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Honden bestaan",
      "Alle honden bruin",
      "Sommige honden zijn bruin"
    ],
    "goed": "Alle honden bruin",
    "uitleg": "'Alle' is te sterk: zwarte en witte honden.",
    "niveau": 3
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Alle vissen zijn groot",
      "Sommige vissen zijn groot",
      "Vissen bestaan"
    ],
    "goed": "Alle vissen zijn groot",
    "uitleg": "'Alle' is te sterk: er zijn ook kleine visjes.",
    "niveau": 3
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Bloemen bestaan",
      "Alle bloemen zijn rood",
      "Sommige bloemen zijn rood"
    ],
    "goed": "Alle bloemen zijn rood",
    "uitleg": "'Alle' is te sterk: er zijn ook gele en blauwe bloemen.",
    "niveau": 3
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Sommige appels zijn zoet",
      "Appels bestaan",
      "Alle appels zijn zoet"
    ],
    "goed": "Alle appels zijn zoet",
    "uitleg": "'Alle' is te sterk: sommige appels zijn zuur.",
    "niveau": 3
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Auto's bestaan",
      "Sommige auto's zijn snel",
      "Alle auto's zijn snel"
    ],
    "goed": "Alle auto's zijn snel",
    "uitleg": "'Alle' is te sterk: sommige auto's rijden langzaam.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Sem is groter dan Liv. Liv is groter dan Pim. Wie is het kortst?",
    "opties": [
      "Pim",
      "Liv",
      "Sem"
    ],
    "goed": "Pim",
    "uitleg": "Sem > Liv > Pim. Pim staat onderaan, dus die is het kortst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Tim is ouder dan Sem. Sem is ouder dan Fee. Wie is het jongst?",
    "opties": [
      "Tim",
      "Sem",
      "Fee"
    ],
    "goed": "Fee",
    "uitleg": "Tim > Sem > Fee. Fee staat onderaan, dus die is het jongst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Pim is sneller dan Ben. Ben is sneller dan Daan. Wie is het langzaamst?",
    "opties": [
      "Daan",
      "Ben",
      "Pim"
    ],
    "goed": "Daan",
    "uitleg": "Pim > Ben > Daan. Daan staat onderaan, dus die is het langzaamst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Roos is groter dan Tim. Tim is groter dan Ben. Wie is het kortst?",
    "opties": [
      "Ben",
      "Tim",
      "Roos"
    ],
    "goed": "Ben",
    "uitleg": "Roos > Tim > Ben. Ben staat onderaan, dus die is het kortst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Roos is ouder dan Fee. Fee is ouder dan Sam. Wie is het jongst?",
    "opties": [
      "Fee",
      "Sam",
      "Roos"
    ],
    "goed": "Sam",
    "uitleg": "Roos > Fee > Sam. Sam staat onderaan, dus die is het jongst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Sam is sneller dan Liv. Liv is sneller dan Fee. Wie is het langzaamst?",
    "opties": [
      "Liv",
      "Sam",
      "Fee"
    ],
    "goed": "Fee",
    "uitleg": "Sam > Liv > Fee. Fee staat onderaan, dus die is het langzaamst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Anna is groter dan Roos. Roos is groter dan Cas. Wie is het kortst?",
    "opties": [
      "Cas",
      "Roos",
      "Anna"
    ],
    "goed": "Cas",
    "uitleg": "Anna > Roos > Cas. Cas staat onderaan, dus die is het kortst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Liv is ouder dan Ben. Ben is ouder dan Mila. Wie is het jongst?",
    "opties": [
      "Liv",
      "Mila",
      "Ben"
    ],
    "goed": "Mila",
    "uitleg": "Liv > Ben > Mila. Mila staat onderaan, dus die is het jongst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Pim is sneller dan Daan. Daan is sneller dan Roos. Wie is het langzaamst?",
    "opties": [
      "Daan",
      "Roos",
      "Pim"
    ],
    "goed": "Roos",
    "uitleg": "Pim > Daan > Roos. Roos staat onderaan, dus die is het langzaamst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Daan is groter dan Sem. Sem is groter dan Fee. Wie is het kortst?",
    "opties": [
      "Sem",
      "Daan",
      "Fee"
    ],
    "goed": "Fee",
    "uitleg": "Daan > Sem > Fee. Fee staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Fee is ouder dan Bo. Bo is ouder dan Pim. Wie is het jongst?",
    "opties": [
      "Bo",
      "Pim",
      "Fee"
    ],
    "goed": "Pim",
    "uitleg": "Fee > Bo > Pim. Pim staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Noa is sneller dan Roos. Roos is sneller dan Sam. Wie is het langzaamst?",
    "opties": [
      "Sam",
      "Noa",
      "Roos"
    ],
    "goed": "Sam",
    "uitleg": "Noa > Roos > Sam. Sam staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Cas is groter dan Mila. Mila is groter dan Fee. Wie is het kortst?",
    "opties": [
      "Cas",
      "Fee",
      "Mila"
    ],
    "goed": "Fee",
    "uitleg": "Cas > Mila > Fee. Fee staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Sam is ouder dan Liv. Liv is ouder dan Noa. Wie is het jongst?",
    "opties": [
      "Liv",
      "Noa",
      "Sam"
    ],
    "goed": "Noa",
    "uitleg": "Sam > Liv > Noa. Noa staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Anna is sneller dan Pim. Pim is sneller dan Fee. Wie is het langzaamst?",
    "opties": [
      "Pim",
      "Fee",
      "Anna"
    ],
    "goed": "Fee",
    "uitleg": "Anna > Pim > Fee. Fee staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Ben is groter dan Bo. Bo is groter dan Sem. Wie is het kortst?",
    "opties": [
      "Ben",
      "Sem",
      "Bo"
    ],
    "goed": "Sem",
    "uitleg": "Ben > Bo > Sem. Sem staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Pim is ouder dan Bo. Bo is ouder dan Liv. Wie is het jongst?",
    "opties": [
      "Liv",
      "Bo",
      "Pim"
    ],
    "goed": "Liv",
    "uitleg": "Pim > Bo > Liv. Liv staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Noa is sneller dan Mila. Mila is sneller dan Tim. Wie is het langzaamst?",
    "opties": [
      "Noa",
      "Tim",
      "Mila"
    ],
    "goed": "Tim",
    "uitleg": "Noa > Mila > Tim. Tim staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Daan is groter dan Lot. Lot is groter dan Bo. Wie is het kortst?",
    "opties": [
      "Lot",
      "Bo",
      "Daan"
    ],
    "goed": "Bo",
    "uitleg": "Daan > Lot > Bo. Bo staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Sem is ouder dan Tim. Tim is ouder dan Bo. Wie is het jongst?",
    "opties": [
      "Bo",
      "Tim",
      "Sem"
    ],
    "goed": "Bo",
    "uitleg": "Sem > Tim > Bo. Bo staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Cas is sneller dan Roos. Roos is sneller dan Sam. Wie is het langzaamst?",
    "opties": [
      "Cas",
      "Sam",
      "Roos"
    ],
    "goed": "Sam",
    "uitleg": "Cas > Roos > Sam. Sam staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Cas is groter dan Fee. Fee is groter dan Liv. Wie is het kortst?",
    "opties": [
      "Liv",
      "Cas",
      "Fee"
    ],
    "goed": "Liv",
    "uitleg": "Cas > Fee > Liv. Liv staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Liv is ouder dan Noa. Noa is ouder dan Tim. Wie is het jongst?",
    "opties": [
      "Liv",
      "Noa",
      "Tim"
    ],
    "goed": "Tim",
    "uitleg": "Liv > Noa > Tim. Tim staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Pim is sneller dan Tim. Tim is sneller dan Daan. Wie is het langzaamst?",
    "opties": [
      "Pim",
      "Daan",
      "Tim"
    ],
    "goed": "Daan",
    "uitleg": "Pim > Tim > Daan. Daan staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 9, 11, 13, 15, ...",
    "opties": [
      "17",
      "19",
      "16"
    ],
    "goed": "17",
    "uitleg": "Er komt telkens 2 bij. 15 + 2 = 17.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 10, 12, 14, 16, ...",
    "opties": [
      "20",
      "17",
      "18"
    ],
    "goed": "18",
    "uitleg": "Er komt telkens 2 bij. 16 + 2 = 18.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 11, 13, 15, 17, ...",
    "opties": [
      "19",
      "21",
      "18"
    ],
    "goed": "19",
    "uitleg": "Er komt telkens 2 bij. 17 + 2 = 19.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 12, 14, 16, 18, ...",
    "opties": [
      "19",
      "20",
      "22"
    ],
    "goed": "20",
    "uitleg": "Er komt telkens 2 bij. 18 + 2 = 20.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 9, 12, 15, 18, ...",
    "opties": [
      "20",
      "21",
      "24"
    ],
    "goed": "21",
    "uitleg": "Er komt telkens 3 bij. 18 + 3 = 21.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 10, 13, 16, 19, ...",
    "opties": [
      "21",
      "22",
      "25"
    ],
    "goed": "22",
    "uitleg": "Er komt telkens 3 bij. 19 + 3 = 22.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 11, 14, 17, 20, ...",
    "opties": [
      "23",
      "22",
      "26"
    ],
    "goed": "23",
    "uitleg": "Er komt telkens 3 bij. 20 + 3 = 23.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 12, 15, 18, 21, ...",
    "opties": [
      "23",
      "24",
      "27"
    ],
    "goed": "24",
    "uitleg": "Er komt telkens 3 bij. 21 + 3 = 24.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 9, 13, 17, 21, ...",
    "opties": [
      "25",
      "29",
      "24"
    ],
    "goed": "25",
    "uitleg": "Er komt telkens 4 bij. 21 + 4 = 25.",
    "niveau": 1
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 10, 14, 18, 22, ...",
    "opties": [
      "26",
      "30",
      "25"
    ],
    "goed": "26",
    "uitleg": "Er komt telkens 4 bij. 22 + 4 = 26.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 11, 15, 19, 23, ...",
    "opties": [
      "27",
      "26",
      "31"
    ],
    "goed": "27",
    "uitleg": "Er komt telkens 4 bij. 23 + 4 = 27.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 12, 16, 20, 24, ...",
    "opties": [
      "32",
      "28",
      "27"
    ],
    "goed": "28",
    "uitleg": "Er komt telkens 4 bij. 24 + 4 = 28.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 9, 14, 19, 24, ...",
    "opties": [
      "34",
      "28",
      "29"
    ],
    "goed": "29",
    "uitleg": "Er komt telkens 5 bij. 24 + 5 = 29.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 10, 15, 20, 25, ...",
    "opties": [
      "30",
      "35",
      "29"
    ],
    "goed": "30",
    "uitleg": "Er komt telkens 5 bij. 25 + 5 = 30.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 11, 16, 21, 26, ...",
    "opties": [
      "30",
      "36",
      "31"
    ],
    "goed": "31",
    "uitleg": "Er komt telkens 5 bij. 26 + 5 = 31.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 12, 17, 22, 27, ...",
    "opties": [
      "37",
      "32",
      "31"
    ],
    "goed": "32",
    "uitleg": "Er komt telkens 5 bij. 27 + 5 = 32.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 9, 19, 29, 39, ...",
    "opties": [
      "49",
      "48",
      "59"
    ],
    "goed": "49",
    "uitleg": "Er komt telkens 10 bij. 39 + 10 = 49.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 10, 20, 30, 40, ...",
    "opties": [
      "60",
      "50",
      "49"
    ],
    "goed": "50",
    "uitleg": "Er komt telkens 10 bij. 40 + 10 = 50.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 11, 21, 31, 41, ...",
    "opties": [
      "51",
      "50",
      "61"
    ],
    "goed": "51",
    "uitleg": "Er komt telkens 10 bij. 41 + 10 = 51.",
    "niveau": 2
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 12, 22, 32, 42, ...",
    "opties": [
      "62",
      "52",
      "51"
    ],
    "goed": "52",
    "uitleg": "Er komt telkens 10 bij. 42 + 10 = 52.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Roos is groter dan Bo. Bo is groter dan Ben. Wie is het kortst?",
    "opties": [
      "Roos",
      "Ben",
      "Bo"
    ],
    "goed": "Ben",
    "uitleg": "Roos > Bo > Ben. Ben staat onderaan, dus die is het kortst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Liv is ouder dan Fee. Fee is ouder dan Anna. Wie is het jongst?",
    "opties": [
      "Liv",
      "Anna",
      "Fee"
    ],
    "goed": "Anna",
    "uitleg": "Liv > Fee > Anna. Anna staat onderaan, dus die is het jongst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Bo is sneller dan Liv. Liv is sneller dan Anna. Wie is het langzaamst?",
    "opties": [
      "Bo",
      "Anna",
      "Liv"
    ],
    "goed": "Anna",
    "uitleg": "Bo > Liv > Anna. Anna staat onderaan, dus die is het langzaamst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Fee is groter dan Roos. Roos is groter dan Mila. Wie is het kortst?",
    "opties": [
      "Roos",
      "Mila",
      "Fee"
    ],
    "goed": "Mila",
    "uitleg": "Fee > Roos > Mila. Mila staat onderaan, dus die is het kortst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Liv is ouder dan Bo. Bo is ouder dan Lot. Wie is het jongst?",
    "opties": [
      "Lot",
      "Liv",
      "Bo"
    ],
    "goed": "Lot",
    "uitleg": "Liv > Bo > Lot. Lot staat onderaan, dus die is het jongst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Fee is sneller dan Cas. Cas is sneller dan Mila. Wie is het langzaamst?",
    "opties": [
      "Mila",
      "Cas",
      "Fee"
    ],
    "goed": "Mila",
    "uitleg": "Fee > Cas > Mila. Mila staat onderaan, dus die is het langzaamst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Sam is groter dan Roos. Roos is groter dan Daan. Wie is het kortst?",
    "opties": [
      "Roos",
      "Sam",
      "Daan"
    ],
    "goed": "Daan",
    "uitleg": "Sam > Roos > Daan. Daan staat onderaan, dus die is het kortst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Mila is ouder dan Tim. Tim is ouder dan Sem. Wie is het jongst?",
    "opties": [
      "Tim",
      "Sem",
      "Mila"
    ],
    "goed": "Sem",
    "uitleg": "Mila > Tim > Sem. Sem staat onderaan, dus die is het jongst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Lot is sneller dan Sam. Sam is sneller dan Anna. Wie is het langzaamst?",
    "opties": [
      "Sam",
      "Lot",
      "Anna"
    ],
    "goed": "Anna",
    "uitleg": "Lot > Sam > Anna. Anna staat onderaan, dus die is het langzaamst.",
    "niveau": 2
  },
  {
    "soort": "logica",
    "vraag": "Bo is groter dan Lot. Lot is groter dan Pim. Wie is het kortst?",
    "opties": [
      "Pim",
      "Bo",
      "Lot"
    ],
    "goed": "Pim",
    "uitleg": "Bo > Lot > Pim. Pim staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Lot is ouder dan Sam. Sam is ouder dan Noa. Wie is het jongst?",
    "opties": [
      "Lot",
      "Noa",
      "Sam"
    ],
    "goed": "Noa",
    "uitleg": "Lot > Sam > Noa. Noa staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Daan is sneller dan Roos. Roos is sneller dan Sam. Wie is het langzaamst?",
    "opties": [
      "Sam",
      "Daan",
      "Roos"
    ],
    "goed": "Sam",
    "uitleg": "Daan > Roos > Sam. Sam staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Cas is groter dan Lot. Lot is groter dan Noa. Wie is het kortst?",
    "opties": [
      "Cas",
      "Noa",
      "Lot"
    ],
    "goed": "Noa",
    "uitleg": "Cas > Lot > Noa. Noa staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Daan is ouder dan Pim. Pim is ouder dan Fee. Wie is het jongst?",
    "opties": [
      "Pim",
      "Daan",
      "Fee"
    ],
    "goed": "Fee",
    "uitleg": "Daan > Pim > Fee. Fee staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Sam is sneller dan Tim. Tim is sneller dan Noa. Wie is het langzaamst?",
    "opties": [
      "Tim",
      "Noa",
      "Sam"
    ],
    "goed": "Noa",
    "uitleg": "Sam > Tim > Noa. Noa staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Liv is groter dan Sem. Sem is groter dan Daan. Wie is het kortst?",
    "opties": [
      "Sem",
      "Daan",
      "Liv"
    ],
    "goed": "Daan",
    "uitleg": "Liv > Sem > Daan. Daan staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Liv is ouder dan Mila. Mila is ouder dan Roos. Wie is het jongst?",
    "opties": [
      "Roos",
      "Mila",
      "Liv"
    ],
    "goed": "Roos",
    "uitleg": "Liv > Mila > Roos. Roos staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Roos is sneller dan Mila. Mila is sneller dan Lot. Wie is het langzaamst?",
    "opties": [
      "Lot",
      "Roos",
      "Mila"
    ],
    "goed": "Lot",
    "uitleg": "Roos > Mila > Lot. Lot staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Tim is groter dan Fee. Fee is groter dan Cas. Wie is het kortst?",
    "opties": [
      "Fee",
      "Tim",
      "Cas"
    ],
    "goed": "Cas",
    "uitleg": "Tim > Fee > Cas. Cas staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Bo is ouder dan Noa. Noa is ouder dan Fee. Wie is het jongst?",
    "opties": [
      "Fee",
      "Noa",
      "Bo"
    ],
    "goed": "Fee",
    "uitleg": "Bo > Noa > Fee. Fee staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Bo is sneller dan Sem. Sem is sneller dan Liv. Wie is het langzaamst?",
    "opties": [
      "Liv",
      "Bo",
      "Sem"
    ],
    "goed": "Liv",
    "uitleg": "Bo > Sem > Liv. Liv staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Lot is groter dan Fee. Fee is groter dan Bo. Wie is het kortst?",
    "opties": [
      "Fee",
      "Lot",
      "Bo"
    ],
    "goed": "Bo",
    "uitleg": "Lot > Fee > Bo. Bo staat onderaan, dus die is het kortst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Tim is ouder dan Daan. Daan is ouder dan Sam. Wie is het jongst?",
    "opties": [
      "Tim",
      "Sam",
      "Daan"
    ],
    "goed": "Sam",
    "uitleg": "Tim > Daan > Sam. Sam staat onderaan, dus die is het jongst.",
    "niveau": 3
  },
  {
    "soort": "logica",
    "vraag": "Pim is sneller dan Fee. Fee is sneller dan Cas. Wie is het langzaamst?",
    "opties": [
      "Fee",
      "Cas",
      "Pim"
    ],
    "goed": "Cas",
    "uitleg": "Pim > Fee > Cas. Cas staat onderaan, dus die is het langzaamst.",
    "niveau": 3
  }
];
if (typeof module !== 'undefined') module.exports = DENKEN;
