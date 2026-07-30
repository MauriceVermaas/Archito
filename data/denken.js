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
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 25, 40, 55, 70, ...",
    "opties": [
      "100",
      "85",
      "84"
    ],
    "goed": "85",
    "uitleg": "Er komt telkens 15 bij. 70 + 15 = 85.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 50, 75, 100, 125, ...",
    "opties": [
      "150",
      "175",
      "149"
    ],
    "goed": "150",
    "uitleg": "Er komt telkens 25 bij. 125 + 25 = 150.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 15, 65, 115, 165, ...",
    "opties": [
      "215",
      "265",
      "214"
    ],
    "goed": "215",
    "uitleg": "Er komt telkens 50 bij. 165 + 50 = 215.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 12, 24, 36, 48, ...",
    "opties": [
      "60",
      "72",
      "59"
    ],
    "goed": "60",
    "uitleg": "Er komt telkens 12 bij. 48 + 12 = 60.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 9, 18, 27, 36, ...",
    "opties": [
      "44",
      "54",
      "45"
    ],
    "goed": "45",
    "uitleg": "Er komt telkens 9 bij. 36 + 9 = 45.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 2, 4, 8, 16, ...",
    "opties": [
      "24",
      "34",
      "32"
    ],
    "goed": "32",
    "uitleg": "Elk getal is het dubbele van het vorige: 16 × 2 = 32.",
    "niveau": 5
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 6, 12, 24, ...",
    "opties": [
      "51",
      "36",
      "48"
    ],
    "goed": "48",
    "uitleg": "Elk getal is het dubbele van het vorige: 24 × 2 = 48.",
    "niveau": 5
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 4, 8, 16, 32, ...",
    "opties": [
      "48",
      "68",
      "64"
    ],
    "goed": "64",
    "uitleg": "Elk getal is het dubbele van het vorige: 32 × 2 = 64.",
    "niveau": 5
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 5, 10, 20, 40, ...",
    "opties": [
      "80",
      "85",
      "60"
    ],
    "goed": "80",
    "uitleg": "Elk getal is het dubbele van het vorige: 40 × 2 = 80.",
    "niveau": 5
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 6, 12, 24, 48, ...",
    "opties": [
      "102",
      "72",
      "96"
    ],
    "goed": "96",
    "uitleg": "Elk getal is het dubbele van het vorige: 48 × 2 = 96.",
    "niveau": 5
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 16, 25, 36, ...",
    "opties": [
      "51",
      "40",
      "49"
    ],
    "goed": "49",
    "uitleg": "Dit zijn kwadraten: 7 × 7 = 49.",
    "niveau": 6
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 25, 36, 49, ...",
    "opties": [
      "64",
      "66",
      "54"
    ],
    "goed": "64",
    "uitleg": "Dit zijn kwadraten: 8 × 8 = 64.",
    "niveau": 6
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 36, 49, 64, ...",
    "opties": [
      "83",
      "70",
      "81"
    ],
    "goed": "81",
    "uitleg": "Dit zijn kwadraten: 9 × 9 = 81.",
    "niveau": 6
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 49, 64, 81, ...",
    "opties": [
      "102",
      "88",
      "100"
    ],
    "goed": "100",
    "uitleg": "Dit zijn kwadraten: 10 × 10 = 100.",
    "niveau": 6
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 64, 81, 100, ...",
    "opties": [
      "123",
      "108",
      "121"
    ],
    "goed": "121",
    "uitleg": "Dit zijn kwadraten: 11 × 11 = 121.",
    "niveau": 6
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 81, 100, 121, ...",
    "opties": [
      "144",
      "146",
      "130"
    ],
    "goed": "144",
    "uitleg": "Dit zijn kwadraten: 12 × 12 = 144.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 20 kinderen doen er 5 mee. Hoeveel procent is dat?",
    "opties": [
      "35%",
      "50%",
      "25%"
    ],
    "goed": "25%",
    "uitleg": "5 van 20 = 5/20 = 25%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 40 kinderen doen er 10 mee. Hoeveel procent is dat?",
    "opties": [
      "25%",
      "35%",
      "50%"
    ],
    "goed": "25%",
    "uitleg": "10 van 40 = 10/40 = 25%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 60 kinderen doen er 15 mee. Hoeveel procent is dat?",
    "opties": [
      "25%",
      "35%",
      "50%"
    ],
    "goed": "25%",
    "uitleg": "15 van 60 = 15/60 = 25%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 80 kinderen doen er 20 mee. Hoeveel procent is dat?",
    "opties": [
      "50%",
      "25%",
      "35%"
    ],
    "goed": "25%",
    "uitleg": "20 van 80 = 20/80 = 25%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 3 ballen. Hoeveel dozen voor 12 ballen?",
    "opties": [
      "5",
      "9",
      "4"
    ],
    "goed": "4",
    "uitleg": "12 : 3 = 4 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 4 ballen. Hoeveel dozen voor 20 ballen?",
    "opties": [
      "6",
      "16",
      "5"
    ],
    "goed": "5",
    "uitleg": "20 : 4 = 5 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 5 ballen. Hoeveel dozen voor 15 ballen?",
    "opties": [
      "10",
      "4",
      "3"
    ],
    "goed": "3",
    "uitleg": "15 : 5 = 3 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 6 ballen. Hoeveel dozen voor 18 ballen?",
    "opties": [
      "4",
      "3",
      "12"
    ],
    "goed": "3",
    "uitleg": "18 : 6 = 3 dozen.",
    "niveau": 5
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Soms is dit waar",
      "Dit kun je nagaan",
      "Alle getallen boven 2 zijn even"
    ],
    "goed": "Alle getallen boven 2 zijn even",
    "uitleg": "Deze bewering is te sterk: 3 is oneven.",
    "niveau": 4
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Soms is dit waar",
      "Iedereen die hard leert haalt altijd een 10",
      "Dit kun je nagaan"
    ],
    "goed": "Iedereen die hard leert haalt altijd een 10",
    "uitleg": "Deze bewering is te sterk: hard leren helpt, maar geeft geen garantie.",
    "niveau": 5
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Als het regent is de straat altijd nat",
      "Soms is dit waar",
      "Dit kun je nagaan"
    ],
    "goed": "Als het regent is de straat altijd nat",
    "uitleg": "Deze bewering is te sterk: onder een afdak blijft de straat droog.",
    "niveau": 5
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Meer volgers betekent altijd betere informatie",
      "Dit kun je nagaan",
      "Soms is dit waar"
    ],
    "goed": "Meer volgers betekent altijd betere informatie",
    "uitleg": "Deze bewering is te sterk: populair is niet hetzelfde als waar.",
    "niveau": 6
  },
  {
    "soort": "klopt-niet",
    "vraag": "Welke zin klopt NIET?",
    "opties": [
      "Dit kun je nagaan",
      "Soms is dit waar",
      "Uit één voorbeeld volgt altijd een regel"
    ],
    "goed": "Uit één voorbeeld volgt altijd een regel",
    "uitleg": "Deze bewering is te sterk: één voorbeeld is te weinig bewijs.",
    "niveau": 6
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 22, 37, 52, ...",
    "opties": [
      "82",
      "67",
      "66"
    ],
    "goed": "67",
    "uitleg": "Er komt telkens 15 bij. 52 + 15 = 67.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 28, 43, 58, ...",
    "opties": [
      "73",
      "88",
      "72"
    ],
    "goed": "73",
    "uitleg": "Er komt telkens 15 bij. 58 + 15 = 73.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 32, 57, 82, ...",
    "opties": [
      "107",
      "132",
      "106"
    ],
    "goed": "107",
    "uitleg": "Er komt telkens 25 bij. 82 + 25 = 107.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 38, 63, 88, ...",
    "opties": [
      "113",
      "138",
      "112"
    ],
    "goed": "113",
    "uitleg": "Er komt telkens 25 bij. 88 + 25 = 113.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 57, 107, 157, ...",
    "opties": [
      "206",
      "257",
      "207"
    ],
    "goed": "207",
    "uitleg": "Er komt telkens 50 bij. 157 + 50 = 207.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 63, 113, 163, ...",
    "opties": [
      "212",
      "263",
      "213"
    ],
    "goed": "213",
    "uitleg": "Er komt telkens 50 bij. 163 + 50 = 213.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 19, 31, 43, ...",
    "opties": [
      "67",
      "54",
      "55"
    ],
    "goed": "55",
    "uitleg": "Er komt telkens 12 bij. 43 + 12 = 55.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 25, 37, 49, ...",
    "opties": [
      "60",
      "73",
      "61"
    ],
    "goed": "61",
    "uitleg": "Er komt telkens 12 bij. 49 + 12 = 61.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 16, 25, 34, ...",
    "opties": [
      "43",
      "52",
      "42"
    ],
    "goed": "43",
    "uitleg": "Er komt telkens 9 bij. 34 + 9 = 43.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 22, 31, 40, ...",
    "opties": [
      "58",
      "48",
      "49"
    ],
    "goed": "49",
    "uitleg": "Er komt telkens 9 bij. 40 + 9 = 49.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 27, 47, 67, ...",
    "opties": [
      "86",
      "107",
      "87"
    ],
    "goed": "87",
    "uitleg": "Er komt telkens 20 bij. 67 + 20 = 87.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 33, 53, 73, ...",
    "opties": [
      "93",
      "92",
      "113"
    ],
    "goed": "93",
    "uitleg": "Er komt telkens 20 bij. 73 + 20 = 93.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 37, 67, 97, ...",
    "opties": [
      "126",
      "157",
      "127"
    ],
    "goed": "127",
    "uitleg": "Er komt telkens 30 bij. 97 + 30 = 127.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 43, 73, 103, ...",
    "opties": [
      "132",
      "163",
      "133"
    ],
    "goed": "133",
    "uitleg": "Er komt telkens 30 bij. 103 + 30 = 133.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 47, 87, 127, ...",
    "opties": [
      "166",
      "207",
      "167"
    ],
    "goed": "167",
    "uitleg": "Er komt telkens 40 bij. 127 + 40 = 167.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 53, 93, 133, ...",
    "opties": [
      "173",
      "172",
      "213"
    ],
    "goed": "173",
    "uitleg": "Er komt telkens 40 bij. 133 + 40 = 173.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 125, 100, 75, 50, ...",
    "opties": [
      "50",
      "0",
      "25"
    ],
    "goed": "25",
    "uitleg": "Er gaat telkens 25 af. 50 − 25 = 25.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 250, 200, 150, 100, ...",
    "opties": [
      "50",
      "100",
      "0"
    ],
    "goed": "50",
    "uitleg": "Er gaat telkens 50 af. 100 − 50 = 50.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 500, 400, 300, 200, ...",
    "opties": [
      "100",
      "200",
      "0"
    ],
    "goed": "100",
    "uitleg": "Er gaat telkens 100 af. 200 − 100 = 100.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 14, 28, 56, ...",
    "opties": [
      "112",
      "84",
      "119"
    ],
    "goed": "112",
    "uitleg": "Elk getal is het dubbele van het vorige: 56 × 2 = 112.",
    "niveau": 5
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 8, 16, 32, 64, ...",
    "opties": [
      "136",
      "96",
      "128"
    ],
    "goed": "128",
    "uitleg": "Elk getal is het dubbele van het vorige: 64 × 2 = 128.",
    "niveau": 5
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 9, 18, 36, 72, ...",
    "opties": [
      "153",
      "144",
      "108"
    ],
    "goed": "144",
    "uitleg": "Elk getal is het dubbele van het vorige: 72 × 2 = 144.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 7 ballen. Hoeveel dozen voor 28 ballen?",
    "opties": [
      "4",
      "5",
      "21"
    ],
    "goed": "4",
    "uitleg": "28 : 7 = 4 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 8 ballen. Hoeveel dozen voor 32 ballen?",
    "opties": [
      "4",
      "5",
      "24"
    ],
    "goed": "4",
    "uitleg": "32 : 8 = 4 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 9 ballen. Hoeveel dozen voor 27 ballen?",
    "opties": [
      "4",
      "18",
      "3"
    ],
    "goed": "3",
    "uitleg": "27 : 9 = 3 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 12 ballen. Hoeveel dozen voor 60 ballen?",
    "opties": [
      "6",
      "48",
      "5"
    ],
    "goed": "5",
    "uitleg": "60 : 12 = 5 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Hoeveel is 1/2 van 100?",
    "opties": [
      "20",
      "50",
      "100"
    ],
    "goed": "50",
    "uitleg": "100 : 2 = 50.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Hoeveel is 1/4 van 100?",
    "opties": [
      "25",
      "40",
      "50"
    ],
    "goed": "25",
    "uitleg": "100 : 4 = 25.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Hoeveel is 1/5 van 100?",
    "opties": [
      "50",
      "40",
      "20"
    ],
    "goed": "20",
    "uitleg": "100 : 5 = 20.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Hoeveel is 1/10 van 100?",
    "opties": [
      "10",
      "100",
      "20"
    ],
    "goed": "10",
    "uitleg": "100 : 10 = 10.",
    "niveau": 5
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 100, 121, 144, ...",
    "opties": [
      "171",
      "169",
      "154"
    ],
    "goed": "169",
    "uitleg": "Dit zijn kwadraten: 13 × 13 = 169.",
    "niveau": 6
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 121, 144, 169, ...",
    "opties": [
      "198",
      "180",
      "196"
    ],
    "goed": "196",
    "uitleg": "Dit zijn kwadraten: 14 × 14 = 196.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 50 kinderen doen er 5 mee. Hoeveel procent is dat?",
    "opties": [
      "20%",
      "10%"
    ],
    "goed": "10%",
    "uitleg": "5 van 50 = 5/50 = 10%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 200 kinderen doen er 50 mee. Hoeveel procent is dat?",
    "opties": [
      "50%",
      "35%",
      "25%"
    ],
    "goed": "25%",
    "uitleg": "50 van 200 = 50/200 = 25%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 30 kinderen doen er 6 mee. Hoeveel procent is dat?",
    "opties": [
      "30%",
      "20%",
      "40%"
    ],
    "goed": "20%",
    "uitleg": "6 van 30 = 6/30 = 20%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 25 kinderen doen er 5 mee. Hoeveel procent is dat?",
    "opties": [
      "20%",
      "30%",
      "40%"
    ],
    "goed": "20%",
    "uitleg": "5 van 25 = 5/25 = 20%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 3 bij 4 meter. Wat is de oppervlakte?",
    "opties": [
      "12 m²",
      "7 m²",
      "24 m²"
    ],
    "goed": "12 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 3 × 4 = 12 m².",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 5 bij 6 meter. Wat is de oppervlakte?",
    "opties": [
      "30 m²",
      "11 m²",
      "60 m²"
    ],
    "goed": "30 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 5 × 6 = 30 m².",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 8 bij 3 meter. Wat is de oppervlakte?",
    "opties": [
      "11 m²",
      "24 m²",
      "48 m²"
    ],
    "goed": "24 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 8 × 3 = 24 m².",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 7 bij 5 meter. Wat is de oppervlakte?",
    "opties": [
      "70 m²",
      "35 m²",
      "12 m²"
    ],
    "goed": "35 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 7 × 5 = 35 m².",
    "niveau": 6
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 12, 21, 30, ...",
    "opties": [
      "48",
      "39",
      "38"
    ],
    "goed": "39",
    "uitleg": "Er komt telkens 9 bij. 30 + 9 = 39.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 28, 37, 46, ...",
    "opties": [
      "55",
      "64",
      "54"
    ],
    "goed": "55",
    "uitleg": "Er komt telkens 9 bij. 46 + 9 = 55.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 35, 44, 53, ...",
    "opties": [
      "61",
      "71",
      "62"
    ],
    "goed": "62",
    "uitleg": "Er komt telkens 9 bij. 53 + 9 = 62.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 43, 52, 61, ...",
    "opties": [
      "69",
      "79",
      "70"
    ],
    "goed": "70",
    "uitleg": "Er komt telkens 9 bij. 61 + 9 = 70.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 14, 25, 36, ...",
    "opties": [
      "58",
      "46",
      "47"
    ],
    "goed": "47",
    "uitleg": "Er komt telkens 11 bij. 36 + 11 = 47.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 18, 29, 40, ...",
    "opties": [
      "50",
      "62",
      "51"
    ],
    "goed": "51",
    "uitleg": "Er komt telkens 11 bij. 40 + 11 = 51.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 24, 35, 46, ...",
    "opties": [
      "57",
      "68",
      "56"
    ],
    "goed": "57",
    "uitleg": "Er komt telkens 11 bij. 46 + 11 = 57.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 30, 41, 52, ...",
    "opties": [
      "74",
      "62",
      "63"
    ],
    "goed": "63",
    "uitleg": "Er komt telkens 11 bij. 52 + 11 = 63.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 37, 48, 59, ...",
    "opties": [
      "69",
      "81",
      "70"
    ],
    "goed": "70",
    "uitleg": "Er komt telkens 11 bij. 59 + 11 = 70.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 45, 56, 67, ...",
    "opties": [
      "78",
      "77",
      "89"
    ],
    "goed": "78",
    "uitleg": "Er komt telkens 11 bij. 67 + 11 = 78.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 15, 27, 39, ...",
    "opties": [
      "50",
      "63",
      "51"
    ],
    "goed": "51",
    "uitleg": "Er komt telkens 12 bij. 39 + 12 = 51.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 31, 43, 55, ...",
    "opties": [
      "67",
      "66",
      "79"
    ],
    "goed": "67",
    "uitleg": "Er komt telkens 12 bij. 55 + 12 = 67.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 38, 50, 62, ...",
    "opties": [
      "86",
      "73",
      "74"
    ],
    "goed": "74",
    "uitleg": "Er komt telkens 12 bij. 62 + 12 = 74.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 46, 58, 70, ...",
    "opties": [
      "82",
      "94",
      "81"
    ],
    "goed": "82",
    "uitleg": "Er komt telkens 12 bij. 70 + 12 = 82.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 18, 33, 48, ...",
    "opties": [
      "63",
      "78",
      "62"
    ],
    "goed": "63",
    "uitleg": "Er komt telkens 15 bij. 48 + 15 = 63.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 34, 49, 64, ...",
    "opties": [
      "94",
      "78",
      "79"
    ],
    "goed": "79",
    "uitleg": "Er komt telkens 15 bij. 64 + 15 = 79.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 41, 56, 71, ...",
    "opties": [
      "85",
      "101",
      "86"
    ],
    "goed": "86",
    "uitleg": "Er komt telkens 15 bij. 71 + 15 = 86.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 49, 64, 79, ...",
    "opties": [
      "109",
      "94",
      "93"
    ],
    "goed": "94",
    "uitleg": "Er komt telkens 15 bij. 79 + 15 = 94.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 21, 39, 57, ...",
    "opties": [
      "75",
      "74",
      "93"
    ],
    "goed": "75",
    "uitleg": "Er komt telkens 18 bij. 57 + 18 = 75.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 25, 43, 61, ...",
    "opties": [
      "97",
      "78",
      "79"
    ],
    "goed": "79",
    "uitleg": "Er komt telkens 18 bij. 61 + 18 = 79.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 31, 49, 67, ...",
    "opties": [
      "103",
      "85",
      "84"
    ],
    "goed": "85",
    "uitleg": "Er komt telkens 18 bij. 67 + 18 = 85.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 37, 55, 73, ...",
    "opties": [
      "91",
      "109",
      "90"
    ],
    "goed": "91",
    "uitleg": "Er komt telkens 18 bij. 73 + 18 = 91.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 44, 62, 80, ...",
    "opties": [
      "98",
      "97",
      "116"
    ],
    "goed": "98",
    "uitleg": "Er komt telkens 18 bij. 80 + 18 = 98.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 52, 70, 88, ...",
    "opties": [
      "105",
      "124",
      "106"
    ],
    "goed": "106",
    "uitleg": "Er komt telkens 18 bij. 88 + 18 = 106.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 23, 43, 63, ...",
    "opties": [
      "83",
      "82",
      "103"
    ],
    "goed": "83",
    "uitleg": "Er komt telkens 20 bij. 63 + 20 = 83.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 39, 59, 79, ...",
    "opties": [
      "119",
      "98",
      "99"
    ],
    "goed": "99",
    "uitleg": "Er komt telkens 20 bij. 79 + 20 = 99.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 46, 66, 86, ...",
    "opties": [
      "126",
      "105",
      "106"
    ],
    "goed": "106",
    "uitleg": "Er komt telkens 20 bij. 86 + 20 = 106.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 54, 74, 94, ...",
    "opties": [
      "113",
      "114",
      "134"
    ],
    "goed": "114",
    "uitleg": "Er komt telkens 20 bij. 94 + 20 = 114.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 28, 53, 78, ...",
    "opties": [
      "103",
      "102",
      "128"
    ],
    "goed": "103",
    "uitleg": "Er komt telkens 25 bij. 78 + 25 = 103.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 44, 69, 94, ...",
    "opties": [
      "118",
      "144",
      "119"
    ],
    "goed": "119",
    "uitleg": "Er komt telkens 25 bij. 94 + 25 = 119.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 51, 76, 101, ...",
    "opties": [
      "151",
      "126",
      "125"
    ],
    "goed": "126",
    "uitleg": "Er komt telkens 25 bij. 101 + 25 = 126.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 59, 84, 109, ...",
    "opties": [
      "159",
      "134",
      "133"
    ],
    "goed": "134",
    "uitleg": "Er komt telkens 25 bij. 109 + 25 = 134.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 33, 63, 93, ...",
    "opties": [
      "123",
      "122",
      "153"
    ],
    "goed": "123",
    "uitleg": "Er komt telkens 30 bij. 93 + 30 = 123.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 49, 79, 109, ...",
    "opties": [
      "138",
      "139",
      "169"
    ],
    "goed": "139",
    "uitleg": "Er komt telkens 30 bij. 109 + 30 = 139.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 56, 86, 116, ...",
    "opties": [
      "145",
      "176",
      "146"
    ],
    "goed": "146",
    "uitleg": "Er komt telkens 30 bij. 116 + 30 = 146.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 64, 94, 124, ...",
    "opties": [
      "154",
      "153",
      "184"
    ],
    "goed": "154",
    "uitleg": "Er komt telkens 30 bij. 124 + 30 = 154.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 38, 73, 108, ...",
    "opties": [
      "143",
      "178",
      "142"
    ],
    "goed": "143",
    "uitleg": "Er komt telkens 35 bij. 108 + 35 = 143.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 42, 77, 112, ...",
    "opties": [
      "147",
      "146",
      "182"
    ],
    "goed": "147",
    "uitleg": "Er komt telkens 35 bij. 112 + 35 = 147.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 48, 83, 118, ...",
    "opties": [
      "188",
      "153",
      "152"
    ],
    "goed": "153",
    "uitleg": "Er komt telkens 35 bij. 118 + 35 = 153.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 54, 89, 124, ...",
    "opties": [
      "194",
      "159",
      "158"
    ],
    "goed": "159",
    "uitleg": "Er komt telkens 35 bij. 124 + 35 = 159.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 61, 96, 131, ...",
    "opties": [
      "165",
      "201",
      "166"
    ],
    "goed": "166",
    "uitleg": "Er komt telkens 35 bij. 131 + 35 = 166.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 69, 104, 139, ...",
    "opties": [
      "209",
      "174",
      "173"
    ],
    "goed": "174",
    "uitleg": "Er komt telkens 35 bij. 139 + 35 = 174.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 43, 83, 123, ...",
    "opties": [
      "163",
      "203",
      "162"
    ],
    "goed": "163",
    "uitleg": "Er komt telkens 40 bij. 123 + 40 = 163.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 59, 99, 139, ...",
    "opties": [
      "219",
      "179",
      "178"
    ],
    "goed": "179",
    "uitleg": "Er komt telkens 40 bij. 139 + 40 = 179.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 66, 106, 146, ...",
    "opties": [
      "185",
      "186",
      "226"
    ],
    "goed": "186",
    "uitleg": "Er komt telkens 40 bij. 146 + 40 = 186.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 74, 114, 154, ...",
    "opties": [
      "194",
      "193",
      "234"
    ],
    "goed": "194",
    "uitleg": "Er komt telkens 40 bij. 154 + 40 = 194.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 48, 93, 138, ...",
    "opties": [
      "183",
      "228",
      "182"
    ],
    "goed": "183",
    "uitleg": "Er komt telkens 45 bij. 138 + 45 = 183.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 52, 97, 142, ...",
    "opties": [
      "187",
      "232",
      "186"
    ],
    "goed": "187",
    "uitleg": "Er komt telkens 45 bij. 142 + 45 = 187.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 58, 103, 148, ...",
    "opties": [
      "238",
      "193",
      "192"
    ],
    "goed": "193",
    "uitleg": "Er komt telkens 45 bij. 148 + 45 = 193.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 64, 109, 154, ...",
    "opties": [
      "199",
      "198",
      "244"
    ],
    "goed": "199",
    "uitleg": "Er komt telkens 45 bij. 154 + 45 = 199.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 71, 116, 161, ...",
    "opties": [
      "205",
      "206",
      "251"
    ],
    "goed": "206",
    "uitleg": "Er komt telkens 45 bij. 161 + 45 = 206.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 79, 124, 169, ...",
    "opties": [
      "213",
      "259",
      "214"
    ],
    "goed": "214",
    "uitleg": "Er komt telkens 45 bij. 169 + 45 = 214.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 53, 103, 153, ...",
    "opties": [
      "203",
      "253",
      "202"
    ],
    "goed": "203",
    "uitleg": "Er komt telkens 50 bij. 153 + 50 = 203.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 69, 119, 169, ...",
    "opties": [
      "219",
      "269",
      "218"
    ],
    "goed": "219",
    "uitleg": "Er komt telkens 50 bij. 169 + 50 = 219.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 76, 126, 176, ...",
    "opties": [
      "226",
      "225",
      "276"
    ],
    "goed": "226",
    "uitleg": "Er komt telkens 50 bij. 176 + 50 = 226.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 84, 134, 184, ...",
    "opties": [
      "284",
      "234",
      "233"
    ],
    "goed": "234",
    "uitleg": "Er komt telkens 50 bij. 184 + 50 = 234.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 63, 123, 183, ...",
    "opties": [
      "242",
      "303",
      "243"
    ],
    "goed": "243",
    "uitleg": "Er komt telkens 60 bij. 183 + 60 = 243.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 67, 127, 187, ...",
    "opties": [
      "247",
      "246",
      "307"
    ],
    "goed": "247",
    "uitleg": "Er komt telkens 60 bij. 187 + 60 = 247.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 73, 133, 193, ...",
    "opties": [
      "253",
      "252",
      "313"
    ],
    "goed": "253",
    "uitleg": "Er komt telkens 60 bij. 193 + 60 = 253.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 79, 139, 199, ...",
    "opties": [
      "258",
      "319",
      "259"
    ],
    "goed": "259",
    "uitleg": "Er komt telkens 60 bij. 199 + 60 = 259.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 86, 146, 206, ...",
    "opties": [
      "266",
      "326",
      "265"
    ],
    "goed": "266",
    "uitleg": "Er komt telkens 60 bij. 206 + 60 = 266.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 94, 154, 214, ...",
    "opties": [
      "334",
      "273",
      "274"
    ],
    "goed": "274",
    "uitleg": "Er komt telkens 60 bij. 214 + 60 = 274.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 78, 153, 228, ...",
    "opties": [
      "303",
      "378",
      "302"
    ],
    "goed": "303",
    "uitleg": "Er komt telkens 75 bij. 228 + 75 = 303.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 82, 157, 232, ...",
    "opties": [
      "307",
      "382",
      "306"
    ],
    "goed": "307",
    "uitleg": "Er komt telkens 75 bij. 232 + 75 = 307.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 88, 163, 238, ...",
    "opties": [
      "388",
      "313",
      "312"
    ],
    "goed": "313",
    "uitleg": "Er komt telkens 75 bij. 238 + 75 = 313.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 94, 169, 244, ...",
    "opties": [
      "318",
      "394",
      "319"
    ],
    "goed": "319",
    "uitleg": "Er komt telkens 75 bij. 244 + 75 = 319.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 101, 176, 251, ...",
    "opties": [
      "326",
      "401",
      "325"
    ],
    "goed": "326",
    "uitleg": "Er komt telkens 75 bij. 251 + 75 = 326.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 109, 184, 259, ...",
    "opties": [
      "334",
      "409",
      "333"
    ],
    "goed": "334",
    "uitleg": "Er komt telkens 75 bij. 259 + 75 = 334.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 3, 103, 203, 303, ...",
    "opties": [
      "402",
      "403",
      "503"
    ],
    "goed": "403",
    "uitleg": "Er komt telkens 100 bij. 303 + 100 = 403.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 7, 107, 207, 307, ...",
    "opties": [
      "406",
      "507",
      "407"
    ],
    "goed": "407",
    "uitleg": "Er komt telkens 100 bij. 307 + 100 = 407.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 13, 113, 213, 313, ...",
    "opties": [
      "412",
      "513",
      "413"
    ],
    "goed": "413",
    "uitleg": "Er komt telkens 100 bij. 313 + 100 = 413.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 19, 119, 219, 319, ...",
    "opties": [
      "419",
      "418",
      "519"
    ],
    "goed": "419",
    "uitleg": "Er komt telkens 100 bij. 319 + 100 = 419.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 26, 126, 226, 326, ...",
    "opties": [
      "426",
      "425",
      "526"
    ],
    "goed": "426",
    "uitleg": "Er komt telkens 100 bij. 326 + 100 = 426.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 34, 134, 234, 334, ...",
    "opties": [
      "433",
      "534",
      "434"
    ],
    "goed": "434",
    "uitleg": "Er komt telkens 100 bij. 334 + 100 = 434.",
    "niveau": 4
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 10, 20, 40, 80, ...",
    "opties": [
      "160",
      "170",
      "120"
    ],
    "goed": "160",
    "uitleg": "Elk getal is het dubbele van het vorige: 80 × 2 = 160.",
    "niveau": 5
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 11, 22, 44, 88, ...",
    "opties": [
      "132",
      "187",
      "176"
    ],
    "goed": "176",
    "uitleg": "Elk getal is het dubbele van het vorige: 88 × 2 = 176.",
    "niveau": 5
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 12, 24, 48, 96, ...",
    "opties": [
      "204",
      "144",
      "192"
    ],
    "goed": "192",
    "uitleg": "Elk getal is het dubbele van het vorige: 96 × 2 = 192.",
    "niveau": 5
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 15, 30, 60, 120, ...",
    "opties": [
      "240",
      "255",
      "180"
    ],
    "goed": "240",
    "uitleg": "Elk getal is het dubbele van het vorige: 120 × 2 = 240.",
    "niveau": 5
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 20, 40, 80, 160, ...",
    "opties": [
      "340",
      "320",
      "240"
    ],
    "goed": "320",
    "uitleg": "Elk getal is het dubbele van het vorige: 160 × 2 = 320.",
    "niveau": 5
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 25, 50, 100, 200, ...",
    "opties": [
      "300",
      "425",
      "400"
    ],
    "goed": "400",
    "uitleg": "Elk getal is het dubbele van het vorige: 200 × 2 = 400.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 3 ballen. Hoeveel dozen voor 21 ballen?",
    "opties": [
      "8",
      "18",
      "7"
    ],
    "goed": "7",
    "uitleg": "21 : 3 = 7 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 4 ballen. Hoeveel dozen voor 32 ballen?",
    "opties": [
      "28",
      "9",
      "8"
    ],
    "goed": "8",
    "uitleg": "32 : 4 = 8 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 5 ballen. Hoeveel dozen voor 45 ballen?",
    "opties": [
      "9",
      "10",
      "40"
    ],
    "goed": "9",
    "uitleg": "45 : 5 = 9 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 6 ballen. Hoeveel dozen voor 42 ballen?",
    "opties": [
      "8",
      "7",
      "36"
    ],
    "goed": "7",
    "uitleg": "42 : 6 = 7 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 7 ballen. Hoeveel dozen voor 56 ballen?",
    "opties": [
      "49",
      "9",
      "8"
    ],
    "goed": "8",
    "uitleg": "56 : 7 = 8 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 8 ballen. Hoeveel dozen voor 64 ballen?",
    "opties": [
      "56",
      "8",
      "9"
    ],
    "goed": "8",
    "uitleg": "64 : 8 = 8 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 9 ballen. Hoeveel dozen voor 72 ballen?",
    "opties": [
      "63",
      "9",
      "8"
    ],
    "goed": "8",
    "uitleg": "72 : 9 = 8 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 11 ballen. Hoeveel dozen voor 44 ballen?",
    "opties": [
      "5",
      "4",
      "33"
    ],
    "goed": "4",
    "uitleg": "44 : 11 = 4 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Eén doos heeft 12 ballen. Hoeveel dozen voor 84 ballen?",
    "opties": [
      "72",
      "7",
      "8"
    ],
    "goed": "7",
    "uitleg": "84 : 12 = 7 dozen.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Hoeveel is 1/20 van 100?",
    "opties": [
      "200",
      "5",
      "10"
    ],
    "goed": "5",
    "uitleg": "100 : 20 = 5.",
    "niveau": 5
  },
  {
    "soort": "logica",
    "vraag": "Hoeveel is 1/25 van 100?",
    "opties": [
      "8",
      "250",
      "4"
    ],
    "goed": "4",
    "uitleg": "100 : 25 = 4.",
    "niveau": 5
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 9, 16, 25, ...",
    "opties": [
      "36",
      "38",
      "28"
    ],
    "goed": "36",
    "uitleg": "Dit zijn kwadraten: 6 × 6 = 36.",
    "niveau": 6
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 144, 169, 196, ...",
    "opties": [
      "208",
      "225",
      "227"
    ],
    "goed": "225",
    "uitleg": "Dit zijn kwadraten: 15 × 15 = 225.",
    "niveau": 6
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 169, 196, 225, ...",
    "opties": [
      "256",
      "238",
      "258"
    ],
    "goed": "256",
    "uitleg": "Dit zijn kwadraten: 16 × 16 = 256.",
    "niveau": 6
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 196, 225, 256, ...",
    "opties": [
      "270",
      "291",
      "289"
    ],
    "goed": "289",
    "uitleg": "Dit zijn kwadraten: 17 × 17 = 289.",
    "niveau": 6
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 225, 256, 289, ...",
    "opties": [
      "326",
      "304",
      "324"
    ],
    "goed": "324",
    "uitleg": "Dit zijn kwadraten: 18 × 18 = 324.",
    "niveau": 6
  },
  {
    "soort": "patroon",
    "vraag": "Welk getal komt hierna? 256, 289, 324, ...",
    "opties": [
      "363",
      "361",
      "340"
    ],
    "goed": "361",
    "uitleg": "Dit zijn kwadraten: 19 × 19 = 361.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 20 kinderen doen er 10 mee. Hoeveel procent is dat?",
    "opties": [
      "50%",
      "60%",
      "100%"
    ],
    "goed": "50%",
    "uitleg": "10 van 20 = 10/20 = 50%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 20 kinderen doen er 15 mee. Hoeveel procent is dat?",
    "opties": [
      "150%",
      "75%",
      "85%"
    ],
    "goed": "75%",
    "uitleg": "15 van 20 = 15/20 = 75%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 40 kinderen doen er 20 mee. Hoeveel procent is dat?",
    "opties": [
      "50%",
      "100%",
      "60%"
    ],
    "goed": "50%",
    "uitleg": "20 van 40 = 20/40 = 50%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 40 kinderen doen er 30 mee. Hoeveel procent is dat?",
    "opties": [
      "75%",
      "85%",
      "150%"
    ],
    "goed": "75%",
    "uitleg": "30 van 40 = 30/40 = 75%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 60 kinderen doen er 30 mee. Hoeveel procent is dat?",
    "opties": [
      "100%",
      "60%",
      "50%"
    ],
    "goed": "50%",
    "uitleg": "30 van 60 = 30/60 = 50%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 80 kinderen doen er 40 mee. Hoeveel procent is dat?",
    "opties": [
      "100%",
      "60%",
      "50%"
    ],
    "goed": "50%",
    "uitleg": "40 van 80 = 40/80 = 50%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 50 kinderen doen er 25 mee. Hoeveel procent is dat?",
    "opties": [
      "50%",
      "60%",
      "100%"
    ],
    "goed": "50%",
    "uitleg": "25 van 50 = 25/50 = 50%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 200 kinderen doen er 20 mee. Hoeveel procent is dat?",
    "opties": [
      "10%",
      "20%"
    ],
    "goed": "10%",
    "uitleg": "20 van 200 = 20/200 = 10%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 100 kinderen doen er 15 mee. Hoeveel procent is dat?",
    "opties": [
      "15%",
      "30%",
      "25%"
    ],
    "goed": "15%",
    "uitleg": "15 van 100 = 15/100 = 15%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 100 kinderen doen er 35 mee. Hoeveel procent is dat?",
    "opties": [
      "70%",
      "35%",
      "45%"
    ],
    "goed": "35%",
    "uitleg": "35 van 100 = 35/100 = 35%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 120 kinderen doen er 30 mee. Hoeveel procent is dat?",
    "opties": [
      "50%",
      "35%",
      "25%"
    ],
    "goed": "25%",
    "uitleg": "30 van 120 = 30/120 = 25%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Van de 150 kinderen doen er 30 mee. Hoeveel procent is dat?",
    "opties": [
      "30%",
      "20%",
      "40%"
    ],
    "goed": "20%",
    "uitleg": "30 van 150 = 30/150 = 20%.",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 3 bij 7 meter. Wat is de oppervlakte?",
    "opties": [
      "10 m²",
      "21 m²",
      "42 m²"
    ],
    "goed": "21 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 3 × 7 = 21 m².",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 4 bij 5 meter. Wat is de oppervlakte?",
    "opties": [
      "9 m²",
      "40 m²",
      "20 m²"
    ],
    "goed": "20 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 4 × 5 = 20 m².",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 4 bij 9 meter. Wat is de oppervlakte?",
    "opties": [
      "13 m²",
      "72 m²",
      "36 m²"
    ],
    "goed": "36 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 4 × 9 = 36 m².",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 5 bij 8 meter. Wat is de oppervlakte?",
    "opties": [
      "40 m²",
      "13 m²",
      "80 m²"
    ],
    "goed": "40 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 5 × 8 = 40 m².",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 6 bij 7 meter. Wat is de oppervlakte?",
    "opties": [
      "84 m²",
      "13 m²",
      "42 m²"
    ],
    "goed": "42 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 6 × 7 = 42 m².",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 6 bij 9 meter. Wat is de oppervlakte?",
    "opties": [
      "108 m²",
      "15 m²",
      "54 m²"
    ],
    "goed": "54 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 6 × 9 = 54 m².",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 7 bij 8 meter. Wat is de oppervlakte?",
    "opties": [
      "56 m²",
      "15 m²",
      "112 m²"
    ],
    "goed": "56 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 7 × 8 = 56 m².",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 8 bij 9 meter. Wat is de oppervlakte?",
    "opties": [
      "72 m²",
      "17 m²",
      "144 m²"
    ],
    "goed": "72 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 8 × 9 = 72 m².",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 9 bij 4 meter. Wat is de oppervlakte?",
    "opties": [
      "72 m²",
      "36 m²",
      "13 m²"
    ],
    "goed": "36 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 9 × 4 = 36 m².",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 12 bij 5 meter. Wat is de oppervlakte?",
    "opties": [
      "60 m²",
      "120 m²",
      "17 m²"
    ],
    "goed": "60 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 12 × 5 = 60 m².",
    "niveau": 6
  },
  {
    "soort": "logica",
    "vraag": "Een tuin is 11 bij 6 meter. Wat is de oppervlakte?",
    "opties": [
      "17 m²",
      "132 m²",
      "66 m²"
    ],
    "goed": "66 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 11 × 6 = 66 m².",
    "niveau": 6
  }
];
if (typeof module !== 'undefined') module.exports = DENKEN;
