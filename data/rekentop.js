// data/rekentop.js — REKENTOPPERS: rekenen op referentieniveau 2F voor groep 6, 7 en 8.
// Waarom apart van sommen.js: die opgaven hebben de vorm { a, op, b } en kunnen alleen kale
// bewerkingen met hele getallen uitdrukken. 2F vraagt juist breuken, procenten, kommagetallen,
// verhoudingen, meten en meetkunde — en in CONTEXT (een verhaaltje), niet als losse berekening.
// Elk item: { soort, vraag, opties:[...], goed, uitleg, niveau }
//   soort   — breuk · procent · komma · meten · meetkunde · verhouding
//   goed    — staat letterlijk én uniek in 'opties'
//   uitleg  — wordt na een goed antwoord voorgelezen (uitleg van de rekenstap)
//   niveau  — 4 = groep 6, 5 = groep 7, 6 = groep 8
// Opnieuw genereren:  node gen_rekentop.js

var REKENTOP = [
  {
    "soort": "breuk",
    "vraag": "Sam heeft 20 knikkers en geeft 1/2 deel weg. Hoeveel knikkers is dat?",
    "opties": [
      "10",
      "12",
      "18"
    ],
    "goed": "10",
    "uitleg": "1/2 van 20 betekent 20 : 2 = 10.",
    "niveau": 4
  },
  {
    "soort": "breuk",
    "vraag": "Noor heeft 50 knikkers en geeft 1/2 deel weg. Hoeveel knikkers is dat?",
    "opties": [
      "27",
      "48",
      "25"
    ],
    "goed": "25",
    "uitleg": "1/2 van 50 betekent 50 : 2 = 25.",
    "niveau": 4
  },
  {
    "soort": "breuk",
    "vraag": "Tim heeft 20 knikkers en geeft 1/4 deel weg. Hoeveel knikkers is dat?",
    "opties": [
      "5",
      "9",
      "16"
    ],
    "goed": "5",
    "uitleg": "1/4 van 20 betekent 20 : 4 = 5.",
    "niveau": 4
  },
  {
    "soort": "breuk",
    "vraag": "Fee heeft 40 knikkers en geeft 1/4 deel weg. Hoeveel knikkers is dat?",
    "opties": [
      "36",
      "14",
      "10"
    ],
    "goed": "10",
    "uitleg": "1/4 van 40 betekent 40 : 4 = 10.",
    "niveau": 4
  },
  {
    "soort": "breuk",
    "vraag": "Bo heeft 100 knikkers en geeft 1/4 deel weg. Hoeveel knikkers is dat?",
    "opties": [
      "25",
      "29",
      "96"
    ],
    "goed": "25",
    "uitleg": "1/4 van 100 betekent 100 : 4 = 25.",
    "niveau": 4
  },
  {
    "soort": "breuk",
    "vraag": "Iris heeft 20 knikkers en geeft 1/5 deel weg. Hoeveel knikkers is dat?",
    "opties": [
      "4",
      "15",
      "9"
    ],
    "goed": "4",
    "uitleg": "1/5 van 20 betekent 20 : 5 = 4.",
    "niveau": 4
  },
  {
    "soort": "breuk",
    "vraag": "Daan heeft 50 knikkers en geeft 1/5 deel weg. Hoeveel knikkers is dat?",
    "opties": [
      "45",
      "15",
      "10"
    ],
    "goed": "10",
    "uitleg": "1/5 van 50 betekent 50 : 5 = 10.",
    "niveau": 4
  },
  {
    "soort": "breuk",
    "vraag": "Mila heeft 50 knikkers en geeft 1/10 deel weg. Hoeveel knikkers is dat?",
    "opties": [
      "40",
      "5",
      "15"
    ],
    "goed": "5",
    "uitleg": "1/10 van 50 betekent 50 : 10 = 5.",
    "niveau": 4
  },
  {
    "soort": "breuk",
    "vraag": "Ravi heeft 100 knikkers en geeft 1/10 deel weg. Hoeveel knikkers is dat?",
    "opties": [
      "10",
      "90",
      "20"
    ],
    "goed": "10",
    "uitleg": "1/10 van 100 betekent 100 : 10 = 10.",
    "niveau": 4
  },
  {
    "soort": "breuk",
    "vraag": "Lotte heeft 30 knikkers en geeft 1/3 deel weg. Hoeveel knikkers is dat?",
    "opties": [
      "27",
      "10",
      "13"
    ],
    "goed": "10",
    "uitleg": "1/3 van 30 betekent 30 : 3 = 10.",
    "niveau": 4
  },
  {
    "soort": "breuk",
    "vraag": "Sam heeft 60 knikkers en geeft 1/3 deel weg. Hoeveel knikkers is dat?",
    "opties": [
      "20",
      "57",
      "23"
    ],
    "goed": "20",
    "uitleg": "1/3 van 60 betekent 60 : 3 = 20.",
    "niveau": 4
  },
  {
    "soort": "breuk",
    "vraag": "Noor heeft 40 knikkers en geeft 1/8 deel weg. Hoeveel knikkers is dat?",
    "opties": [
      "32",
      "5",
      "13"
    ],
    "goed": "5",
    "uitleg": "1/8 van 40 betekent 40 : 8 = 5.",
    "niveau": 4
  },
  {
    "soort": "breuk",
    "vraag": "Een pak koekjes heeft 20 stuks. Sam eet 3/4 deel op. Hoeveel koekjes zijn dat?",
    "opties": [
      "5",
      "15",
      "19"
    ],
    "goed": "15",
    "uitleg": "20 : 4 = 5 (dat is 1/4 deel). Dan 5 × 3 = 15.",
    "niveau": 5
  },
  {
    "soort": "breuk",
    "vraag": "Een pak koekjes heeft 30 stuks. Noor eet 2/3 deel op. Hoeveel koekjes zijn dat?",
    "opties": [
      "10",
      "20",
      "23"
    ],
    "goed": "20",
    "uitleg": "30 : 3 = 10 (dat is 1/3 deel). Dan 10 × 2 = 20.",
    "niveau": 5
  },
  {
    "soort": "breuk",
    "vraag": "Een pak koekjes heeft 50 stuks. Tim eet 3/5 deel op. Hoeveel koekjes zijn dat?",
    "opties": [
      "35",
      "30",
      "10"
    ],
    "goed": "30",
    "uitleg": "50 : 5 = 10 (dat is 1/5 deel). Dan 10 × 3 = 30.",
    "niveau": 5
  },
  {
    "soort": "breuk",
    "vraag": "Een pak koekjes heeft 40 stuks. Fee eet 2/5 deel op. Hoeveel koekjes zijn dat?",
    "opties": [
      "8",
      "21",
      "16"
    ],
    "goed": "16",
    "uitleg": "40 : 5 = 8 (dat is 1/5 deel). Dan 8 × 2 = 16.",
    "niveau": 5
  },
  {
    "soort": "breuk",
    "vraag": "Een pak koekjes heeft 80 stuks. Bo eet 3/4 deel op. Hoeveel koekjes zijn dat?",
    "opties": [
      "20",
      "64",
      "60"
    ],
    "goed": "60",
    "uitleg": "80 : 4 = 20 (dat is 1/4 deel). Dan 20 × 3 = 60.",
    "niveau": 5
  },
  {
    "soort": "breuk",
    "vraag": "Een pak koekjes heeft 40 stuks. Iris eet 5/8 deel op. Hoeveel koekjes zijn dat?",
    "opties": [
      "25",
      "5",
      "33"
    ],
    "goed": "25",
    "uitleg": "40 : 8 = 5 (dat is 1/8 deel). Dan 5 × 5 = 25.",
    "niveau": 5
  },
  {
    "soort": "breuk",
    "vraag": "Een pak koekjes heeft 60 stuks. Daan eet 2/3 deel op. Hoeveel koekjes zijn dat?",
    "opties": [
      "20",
      "40",
      "43"
    ],
    "goed": "40",
    "uitleg": "60 : 3 = 20 (dat is 1/3 deel). Dan 20 × 2 = 40.",
    "niveau": 5
  },
  {
    "soort": "breuk",
    "vraag": "Een pak koekjes heeft 100 stuks. Mila eet 3/10 deel op. Hoeveel koekjes zijn dat?",
    "opties": [
      "40",
      "10",
      "30"
    ],
    "goed": "30",
    "uitleg": "100 : 10 = 10 (dat is 1/10 deel). Dan 10 × 3 = 30.",
    "niveau": 5
  },
  {
    "soort": "breuk",
    "vraag": "Een pak koekjes heeft 50 stuks. Ravi eet 7/10 deel op. Hoeveel koekjes zijn dat?",
    "opties": [
      "35",
      "5",
      "45"
    ],
    "goed": "35",
    "uitleg": "50 : 10 = 5 (dat is 1/10 deel). Dan 5 × 7 = 35.",
    "niveau": 5
  },
  {
    "soort": "breuk",
    "vraag": "Een pak koekjes heeft 36 stuks. Lotte eet 2/4 deel op. Hoeveel koekjes zijn dat?",
    "opties": [
      "22",
      "18",
      "9"
    ],
    "goed": "18",
    "uitleg": "36 : 4 = 9 (dat is 1/4 deel). Dan 9 × 2 = 18.",
    "niveau": 5
  },
  {
    "soort": "breuk",
    "vraag": "Welke breuk is het grootst: 1/2 of 1/4?",
    "opties": [
      "1/2",
      "1/4",
      "ze zijn gelijk"
    ],
    "goed": "1/2",
    "uitleg": "1/2 = 0.500 en 1/4 = 0.250; de grootste is 1/2.",
    "niveau": 6
  },
  {
    "soort": "breuk",
    "vraag": "Welke breuk is het grootst: 1/3 of 1/6?",
    "opties": [
      "1/6",
      "1/3",
      "ze zijn gelijk"
    ],
    "goed": "1/3",
    "uitleg": "1/3 = 0.333 en 1/6 = 0.167; de grootste is 1/3.",
    "niveau": 6
  },
  {
    "soort": "breuk",
    "vraag": "Welke breuk is het grootst: 2/5 of 1/2?",
    "opties": [
      "1/2",
      "ze zijn gelijk",
      "2/5"
    ],
    "goed": "1/2",
    "uitleg": "2/5 = 0.400 en 1/2 = 0.500; de grootste is 1/2.",
    "niveau": 6
  },
  {
    "soort": "breuk",
    "vraag": "Welke breuk is het grootst: 3/4 of 2/3?",
    "opties": [
      "3/4",
      "ze zijn gelijk",
      "2/3"
    ],
    "goed": "3/4",
    "uitleg": "3/4 = 0.750 en 2/3 = 0.667; de grootste is 3/4.",
    "niveau": 6
  },
  {
    "soort": "breuk",
    "vraag": "Welke breuk is het grootst: 5/8 of 1/2?",
    "opties": [
      "5/8",
      "ze zijn gelijk",
      "1/2"
    ],
    "goed": "5/8",
    "uitleg": "5/8 = 0.625 en 1/2 = 0.500; de grootste is 5/8.",
    "niveau": 6
  },
  {
    "soort": "breuk",
    "vraag": "Welke breuk is het grootst: 2/3 of 3/5?",
    "opties": [
      "2/3",
      "3/5",
      "ze zijn gelijk"
    ],
    "goed": "2/3",
    "uitleg": "2/3 = 0.667 en 3/5 = 0.600; de grootste is 2/3.",
    "niveau": 6
  },
  {
    "soort": "breuk",
    "vraag": "Hoeveel is 1/4 + 2/4?",
    "opties": [
      "2/4",
      "3/8",
      "3/4"
    ],
    "goed": "3/4",
    "uitleg": "Bij dezelfde noemer tel je alleen de tellers op: 1 + 2 = 3, dus 3/4.",
    "niveau": 6
  },
  {
    "soort": "breuk",
    "vraag": "Hoeveel is 1/5 + 3/5?",
    "opties": [
      "3/5",
      "4/10",
      "4/5"
    ],
    "goed": "4/5",
    "uitleg": "Bij dezelfde noemer tel je alleen de tellers op: 1 + 3 = 4, dus 4/5.",
    "niveau": 6
  },
  {
    "soort": "breuk",
    "vraag": "Hoeveel is 2/8 + 3/8?",
    "opties": [
      "5/8",
      "6/8",
      "5/16"
    ],
    "goed": "5/8",
    "uitleg": "Bij dezelfde noemer tel je alleen de tellers op: 2 + 3 = 5, dus 5/8.",
    "niveau": 6
  },
  {
    "soort": "breuk",
    "vraag": "Hoeveel is 1/6 + 4/6?",
    "opties": [
      "5/12",
      "5/6",
      "4/6"
    ],
    "goed": "5/6",
    "uitleg": "Bij dezelfde noemer tel je alleen de tellers op: 1 + 4 = 5, dus 5/6.",
    "niveau": 6
  },
  {
    "soort": "breuk",
    "vraag": "Hoeveel is 3/10 + 4/10?",
    "opties": [
      "12/10",
      "7/10",
      "7/20"
    ],
    "goed": "7/10",
    "uitleg": "Bij dezelfde noemer tel je alleen de tellers op: 3 + 4 = 7, dus 7/10.",
    "niveau": 6
  },
  {
    "soort": "procent",
    "vraag": "Een trui van € 40 is 25% afgeprijsd. Hoeveel euro korting is dat?",
    "opties": [
      "20",
      "10",
      "30"
    ],
    "goed": "10",
    "uitleg": "25% van 40 = 40 × 25/100 = 10.",
    "niveau": 4
  },
  {
    "soort": "procent",
    "vraag": "Een trui van € 80 is 25% afgeprijsd. Hoeveel euro korting is dat?",
    "opties": [
      "30",
      "60",
      "20"
    ],
    "goed": "20",
    "uitleg": "25% van 80 = 80 × 25/100 = 20.",
    "niveau": 4
  },
  {
    "soort": "procent",
    "vraag": "Een trui van € 200 is 25% afgeprijsd. Hoeveel euro korting is dat?",
    "opties": [
      "50",
      "60",
      "150"
    ],
    "goed": "50",
    "uitleg": "25% van 200 = 200 × 25/100 = 50.",
    "niveau": 4
  },
  {
    "soort": "procent",
    "vraag": "Een trui van € 50 is 10% afgeprijsd. Hoeveel euro korting is dat?",
    "opties": [
      "5",
      "15",
      "45"
    ],
    "goed": "5",
    "uitleg": "10% van 50 = 50 × 10/100 = 5.",
    "niveau": 4
  },
  {
    "soort": "procent",
    "vraag": "Een trui van € 90 is 10% afgeprijsd. Hoeveel euro korting is dat?",
    "opties": [
      "19",
      "81",
      "9"
    ],
    "goed": "9",
    "uitleg": "10% van 90 = 90 × 10/100 = 9.",
    "niveau": 4
  },
  {
    "soort": "procent",
    "vraag": "Een trui van € 300 is 10% afgeprijsd. Hoeveel euro korting is dat?",
    "opties": [
      "40",
      "30",
      "270"
    ],
    "goed": "30",
    "uitleg": "10% van 300 = 300 × 10/100 = 30.",
    "niveau": 4
  },
  {
    "soort": "procent",
    "vraag": "Een trui van € 45 is 100% afgeprijsd. Hoeveel euro korting is dat?",
    "opties": [
      "55",
      "0",
      "45"
    ],
    "goed": "45",
    "uitleg": "100% van 45 = 45 × 100/100 = 45.",
    "niveau": 4
  },
  {
    "soort": "procent",
    "vraag": "Een spel kost € 80. Er is 20% korting. Wat betaal je?",
    "opties": [
      "16",
      "96",
      "64"
    ],
    "goed": "64",
    "uitleg": "Korting = 20% van 80 = 16. Je betaalt 80 − 16 = 64.",
    "niveau": 5
  },
  {
    "soort": "procent",
    "vraag": "Een spel kost € 60. Er is 25% korting. Wat betaal je?",
    "opties": [
      "75",
      "45",
      "15"
    ],
    "goed": "45",
    "uitleg": "Korting = 25% van 60 = 15. Je betaalt 60 − 15 = 45.",
    "niveau": 5
  },
  {
    "soort": "procent",
    "vraag": "Een spel kost € 200. Er is 10% korting. Wat betaal je?",
    "opties": [
      "20",
      "180",
      "220"
    ],
    "goed": "180",
    "uitleg": "Korting = 10% van 200 = 20. Je betaalt 200 − 20 = 180.",
    "niveau": 5
  },
  {
    "soort": "procent",
    "vraag": "Een spel kost € 150. Er is 20% korting. Wat betaal je?",
    "opties": [
      "120",
      "180",
      "30"
    ],
    "goed": "120",
    "uitleg": "Korting = 20% van 150 = 30. Je betaalt 150 − 30 = 120.",
    "niveau": 5
  },
  {
    "soort": "procent",
    "vraag": "Een spel kost € 120. Er is 25% korting. Wat betaal je?",
    "opties": [
      "150",
      "30",
      "90"
    ],
    "goed": "90",
    "uitleg": "Korting = 25% van 120 = 30. Je betaalt 120 − 30 = 90.",
    "niveau": 5
  },
  {
    "soort": "procent",
    "vraag": "Een spel kost € 90. Er is 10% korting. Wat betaal je?",
    "opties": [
      "81",
      "9",
      "99"
    ],
    "goed": "81",
    "uitleg": "Korting = 10% van 90 = 9. Je betaalt 90 − 9 = 81.",
    "niveau": 5
  },
  {
    "soort": "procent",
    "vraag": "Een spel kost € 500. Er is 20% korting. Wat betaal je?",
    "opties": [
      "600",
      "400",
      "100"
    ],
    "goed": "400",
    "uitleg": "Korting = 20% van 500 = 100. Je betaalt 500 − 100 = 400.",
    "niveau": 5
  },
  {
    "soort": "procent",
    "vraag": "In een klas van 20 leerlingen doen er 5 mee aan de musical. Hoeveel procent is dat?",
    "opties": [
      "25%",
      "35%",
      "75%"
    ],
    "goed": "25%",
    "uitleg": "5 van 20 = 5/20 = 25%.",
    "niveau": 6
  },
  {
    "soort": "procent",
    "vraag": "In een klas van 40 leerlingen doen er 10 mee aan de musical. Hoeveel procent is dat?",
    "opties": [
      "25%",
      "75%",
      "35%"
    ],
    "goed": "25%",
    "uitleg": "10 van 40 = 10/40 = 25%.",
    "niveau": 6
  },
  {
    "soort": "procent",
    "vraag": "In een klas van 50 leerlingen doen er 20 mee aan de musical. Hoeveel procent is dat?",
    "opties": [
      "40%",
      "50%",
      "60%"
    ],
    "goed": "40%",
    "uitleg": "20 van 50 = 20/50 = 40%.",
    "niveau": 6
  },
  {
    "soort": "procent",
    "vraag": "In een klas van 80 leerlingen doen er 20 mee aan de musical. Hoeveel procent is dat?",
    "opties": [
      "75%",
      "35%",
      "25%"
    ],
    "goed": "25%",
    "uitleg": "20 van 80 = 20/80 = 25%.",
    "niveau": 6
  },
  {
    "soort": "procent",
    "vraag": "In een klas van 200 leerlingen doen er 50 mee aan de musical. Hoeveel procent is dat?",
    "opties": [
      "35%",
      "25%",
      "75%"
    ],
    "goed": "25%",
    "uitleg": "50 van 200 = 50/200 = 25%.",
    "niveau": 6
  },
  {
    "soort": "procent",
    "vraag": "In een klas van 25 leerlingen doen er 5 mee aan de musical. Hoeveel procent is dat?",
    "opties": [
      "80%",
      "30%",
      "20%"
    ],
    "goed": "20%",
    "uitleg": "5 van 25 = 5/25 = 20%.",
    "niveau": 6
  },
  {
    "soort": "procent",
    "vraag": "In een klas van 60 leerlingen doen er 15 mee aan de musical. Hoeveel procent is dat?",
    "opties": [
      "35%",
      "25%",
      "75%"
    ],
    "goed": "25%",
    "uitleg": "15 van 60 = 15/60 = 25%.",
    "niveau": 6
  },
  {
    "soort": "procent",
    "vraag": "In een klas van 120 leerlingen doen er 30 mee aan de musical. Hoeveel procent is dat?",
    "opties": [
      "25%",
      "35%",
      "75%"
    ],
    "goed": "25%",
    "uitleg": "30 van 120 = 30/120 = 25%.",
    "niveau": 6
  },
  {
    "soort": "procent",
    "vraag": "In een klas van 150 leerlingen doen er 45 mee aan de musical. Hoeveel procent is dat?",
    "opties": [
      "30%",
      "70%",
      "40%"
    ],
    "goed": "30%",
    "uitleg": "45 van 150 = 45/150 = 30%.",
    "niveau": 6
  },
  {
    "soort": "procent",
    "vraag": "In een klas van 300 leerlingen doen er 60 mee aan de musical. Hoeveel procent is dat?",
    "opties": [
      "20%",
      "30%",
      "80%"
    ],
    "goed": "20%",
    "uitleg": "60 van 300 = 60/300 = 20%.",
    "niveau": 6
  },
  {
    "soort": "komma",
    "vraag": "Sam koopt iets van € 2,50 en € 1,25. Wat is het samen?",
    "opties": [
      "€ 4,75",
      "€ 3,75",
      "€ 3,65"
    ],
    "goed": "€ 3,75",
    "uitleg": "2,50 + 1,25 = 3,75. Zet de komma's onder elkaar.",
    "niveau": 4
  },
  {
    "soort": "komma",
    "vraag": "Noor koopt iets van € 3,75 en € 2,20. Wat is het samen?",
    "opties": [
      "€ 6,95",
      "€ 5,95",
      "€ 5,85"
    ],
    "goed": "€ 5,95",
    "uitleg": "3,75 + 2,20 = 5,95. Zet de komma's onder elkaar.",
    "niveau": 4
  },
  {
    "soort": "komma",
    "vraag": "Tim koopt iets van € 1,80 en € 4,60. Wat is het samen?",
    "opties": [
      "€ 7,40",
      "€ 6,40",
      "€ 6,30"
    ],
    "goed": "€ 6,40",
    "uitleg": "1,80 + 4,60 = 6,40. Zet de komma's onder elkaar.",
    "niveau": 4
  },
  {
    "soort": "komma",
    "vraag": "Fee koopt iets van € 5,40 en € 2,35. Wat is het samen?",
    "opties": [
      "€ 7,75",
      "€ 8,75",
      "€ 7,65"
    ],
    "goed": "€ 7,75",
    "uitleg": "5,40 + 2,35 = 7,75. Zet de komma's onder elkaar.",
    "niveau": 4
  },
  {
    "soort": "komma",
    "vraag": "Bo koopt iets van € 7,25 en € 1,50. Wat is het samen?",
    "opties": [
      "€ 8,65",
      "€ 8,75",
      "€ 9,75"
    ],
    "goed": "€ 8,75",
    "uitleg": "7,25 + 1,50 = 8,75. Zet de komma's onder elkaar.",
    "niveau": 4
  },
  {
    "soort": "komma",
    "vraag": "Iris koopt iets van € 6,30 en € 3,45. Wat is het samen?",
    "opties": [
      "€ 10,75",
      "€ 9,65",
      "€ 9,75"
    ],
    "goed": "€ 9,75",
    "uitleg": "6,30 + 3,45 = 9,75. Zet de komma's onder elkaar.",
    "niveau": 4
  },
  {
    "soort": "komma",
    "vraag": "Daan koopt iets van € 4,15 en € 2,85. Wat is het samen?",
    "opties": [
      "€ 6,90",
      "€ 8,00",
      "€ 7,00"
    ],
    "goed": "€ 7,00",
    "uitleg": "4,15 + 2,85 = 7,00. Zet de komma's onder elkaar.",
    "niveau": 4
  },
  {
    "soort": "komma",
    "vraag": "Mila koopt iets van € 9,90 en € 1,10. Wat is het samen?",
    "opties": [
      "€ 10,90",
      "€ 12,00",
      "€ 11,00"
    ],
    "goed": "€ 11,00",
    "uitleg": "9,90 + 1,10 = 11,00. Zet de komma's onder elkaar.",
    "niveau": 4
  },
  {
    "soort": "komma",
    "vraag": "Eén pak rijst weegt 1,5 kg. Hoeveel wegen 4 pakken?",
    "opties": [
      "5,5 kg",
      "6 kg",
      "60 kg"
    ],
    "goed": "6 kg",
    "uitleg": "1,5 × 4 = 6 kg.",
    "niveau": 5
  },
  {
    "soort": "komma",
    "vraag": "Eén pak rijst weegt 2,5 kg. Hoeveel wegen 6 pakken?",
    "opties": [
      "150 kg",
      "15 kg",
      "8,5 kg"
    ],
    "goed": "15 kg",
    "uitleg": "2,5 × 6 = 15 kg.",
    "niveau": 5
  },
  {
    "soort": "komma",
    "vraag": "Eén pak rijst weegt 0,5 kg. Hoeveel wegen 12 pakken?",
    "opties": [
      "6 kg",
      "12,5 kg",
      "60 kg"
    ],
    "goed": "6 kg",
    "uitleg": "0,5 × 12 = 6 kg.",
    "niveau": 5
  },
  {
    "soort": "komma",
    "vraag": "Eén pak rijst weegt 3,5 kg. Hoeveel wegen 4 pakken?",
    "opties": [
      "140 kg",
      "14 kg",
      "7,5 kg"
    ],
    "goed": "14 kg",
    "uitleg": "3,5 × 4 = 14 kg.",
    "niveau": 5
  },
  {
    "soort": "komma",
    "vraag": "Eén pak rijst weegt 1,25 kg. Hoeveel wegen 8 pakken?",
    "opties": [
      "9,25 kg",
      "100 kg",
      "10 kg"
    ],
    "goed": "10 kg",
    "uitleg": "1,25 × 8 = 10 kg.",
    "niveau": 5
  },
  {
    "soort": "komma",
    "vraag": "Eén pak rijst weegt 2,25 kg. Hoeveel wegen 4 pakken?",
    "opties": [
      "6,25 kg",
      "9 kg",
      "90 kg"
    ],
    "goed": "9 kg",
    "uitleg": "2,25 × 4 = 9 kg.",
    "niveau": 5
  },
  {
    "soort": "komma",
    "vraag": "Eén pak rijst weegt 0,75 kg. Hoeveel wegen 8 pakken?",
    "opties": [
      "60 kg",
      "6 kg",
      "8,75 kg"
    ],
    "goed": "6 kg",
    "uitleg": "0,75 × 8 = 6 kg.",
    "niveau": 5
  },
  {
    "soort": "komma",
    "vraag": "Eén pak rijst weegt 4,5 kg. Hoeveel wegen 6 pakken?",
    "opties": [
      "27 kg",
      "10,5 kg",
      "270 kg"
    ],
    "goed": "27 kg",
    "uitleg": "4,5 × 6 = 27 kg.",
    "niveau": 5
  },
  {
    "soort": "komma",
    "vraag": "7,5 liter sap wordt eerlijk verdeeld over 3 kannen. Hoeveel liter per kan?",
    "opties": [
      "2,5 l",
      "3,5 l",
      "22,5 l"
    ],
    "goed": "2,5 l",
    "uitleg": "7,5 : 3 = 2,5 liter.",
    "niveau": 6
  },
  {
    "soort": "komma",
    "vraag": "9,6 liter sap wordt eerlijk verdeeld over 4 kannen. Hoeveel liter per kan?",
    "opties": [
      "38,4 l",
      "2,4 l",
      "3,4 l"
    ],
    "goed": "2,4 l",
    "uitleg": "9,6 : 4 = 2,4 liter.",
    "niveau": 6
  },
  {
    "soort": "komma",
    "vraag": "12,5 liter sap wordt eerlijk verdeeld over 5 kannen. Hoeveel liter per kan?",
    "opties": [
      "3,5 l",
      "2,5 l",
      "62,5 l"
    ],
    "goed": "2,5 l",
    "uitleg": "12,5 : 5 = 2,5 liter.",
    "niveau": 6
  },
  {
    "soort": "komma",
    "vraag": "4,8 liter sap wordt eerlijk verdeeld over 6 kannen. Hoeveel liter per kan?",
    "opties": [
      "28,8 l",
      "0,8 l",
      "1,8 l"
    ],
    "goed": "0,8 l",
    "uitleg": "4,8 : 6 = 0,8 liter.",
    "niveau": 6
  },
  {
    "soort": "komma",
    "vraag": "10,5 liter sap wordt eerlijk verdeeld over 7 kannen. Hoeveel liter per kan?",
    "opties": [
      "1,5 l",
      "73,5 l",
      "2,5 l"
    ],
    "goed": "1,5 l",
    "uitleg": "10,5 : 7 = 1,5 liter.",
    "niveau": 6
  },
  {
    "soort": "komma",
    "vraag": "8,4 liter sap wordt eerlijk verdeeld over 4 kannen. Hoeveel liter per kan?",
    "opties": [
      "3,1 l",
      "33,6 l",
      "2,1 l"
    ],
    "goed": "2,1 l",
    "uitleg": "8,4 : 4 = 2,1 liter.",
    "niveau": 6
  },
  {
    "soort": "komma",
    "vraag": "15,6 liter sap wordt eerlijk verdeeld over 4 kannen. Hoeveel liter per kan?",
    "opties": [
      "62,4 l",
      "3,9 l",
      "4,9 l"
    ],
    "goed": "3,9 l",
    "uitleg": "15,6 : 4 = 3,9 liter.",
    "niveau": 6
  },
  {
    "soort": "komma",
    "vraag": "6,3 liter sap wordt eerlijk verdeeld over 3 kannen. Hoeveel liter per kan?",
    "opties": [
      "3,1 l",
      "2,1 l",
      "18,9 l"
    ],
    "goed": "2,1 l",
    "uitleg": "6,3 : 3 = 2,1 liter.",
    "niveau": 6
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel cm is 1,5 m?",
    "opties": [
      "15",
      "150",
      "1500"
    ],
    "goed": "150",
    "uitleg": "1 m = 100 cm, dus 1,5 × 100 = 150 cm.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel cm is 2 m?",
    "opties": [
      "20",
      "200",
      "2000"
    ],
    "goed": "200",
    "uitleg": "1 m = 100 cm, dus 2 × 100 = 200 cm.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel cm is 2,5 m?",
    "opties": [
      "250",
      "2500",
      "25"
    ],
    "goed": "250",
    "uitleg": "1 m = 100 cm, dus 2,5 × 100 = 250 cm.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel cm is 3 m?",
    "opties": [
      "3000",
      "300",
      "30"
    ],
    "goed": "300",
    "uitleg": "1 m = 100 cm, dus 3 × 100 = 300 cm.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel cm is 4,5 m?",
    "opties": [
      "450",
      "45",
      "4500"
    ],
    "goed": "450",
    "uitleg": "1 m = 100 cm, dus 4,5 × 100 = 450 cm.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel m is 1,5 km?",
    "opties": [
      "150",
      "1500",
      "15000"
    ],
    "goed": "1500",
    "uitleg": "1 km = 1000 m, dus 1,5 × 1000 = 1500 m.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel m is 2 km?",
    "opties": [
      "200",
      "20000",
      "2000"
    ],
    "goed": "2000",
    "uitleg": "1 km = 1000 m, dus 2 × 1000 = 2000 m.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel m is 2,5 km?",
    "opties": [
      "250",
      "25000",
      "2500"
    ],
    "goed": "2500",
    "uitleg": "1 km = 1000 m, dus 2,5 × 1000 = 2500 m.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel m is 3 km?",
    "opties": [
      "300",
      "30000",
      "3000"
    ],
    "goed": "3000",
    "uitleg": "1 km = 1000 m, dus 3 × 1000 = 3000 m.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel m is 4,5 km?",
    "opties": [
      "450",
      "45000",
      "4500"
    ],
    "goed": "4500",
    "uitleg": "1 km = 1000 m, dus 4,5 × 1000 = 4500 m.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel ml is 1,5 l?",
    "opties": [
      "1500",
      "15000",
      "150"
    ],
    "goed": "1500",
    "uitleg": "1 l = 1000 ml, dus 1,5 × 1000 = 1500 ml.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel ml is 2 l?",
    "opties": [
      "2000",
      "200",
      "20000"
    ],
    "goed": "2000",
    "uitleg": "1 l = 1000 ml, dus 2 × 1000 = 2000 ml.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel ml is 2,5 l?",
    "opties": [
      "25000",
      "2500",
      "250"
    ],
    "goed": "2500",
    "uitleg": "1 l = 1000 ml, dus 2,5 × 1000 = 2500 ml.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel ml is 3 l?",
    "opties": [
      "3000",
      "30000",
      "300"
    ],
    "goed": "3000",
    "uitleg": "1 l = 1000 ml, dus 3 × 1000 = 3000 ml.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel ml is 4,5 l?",
    "opties": [
      "4500",
      "45000",
      "450"
    ],
    "goed": "4500",
    "uitleg": "1 l = 1000 ml, dus 4,5 × 1000 = 4500 ml.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel g is 1,5 kg?",
    "opties": [
      "1500",
      "15000",
      "150"
    ],
    "goed": "1500",
    "uitleg": "1 kg = 1000 g, dus 1,5 × 1000 = 1500 g.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel g is 2 kg?",
    "opties": [
      "20000",
      "2000",
      "200"
    ],
    "goed": "2000",
    "uitleg": "1 kg = 1000 g, dus 2 × 1000 = 2000 g.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel g is 2,5 kg?",
    "opties": [
      "2500",
      "250",
      "25000"
    ],
    "goed": "2500",
    "uitleg": "1 kg = 1000 g, dus 2,5 × 1000 = 2500 g.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel g is 3 kg?",
    "opties": [
      "3000",
      "30000",
      "300"
    ],
    "goed": "3000",
    "uitleg": "1 kg = 1000 g, dus 3 × 1000 = 3000 g.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel g is 4,5 kg?",
    "opties": [
      "45000",
      "450",
      "4500"
    ],
    "goed": "4500",
    "uitleg": "1 kg = 1000 g, dus 4,5 × 1000 = 4500 g.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel mm is 1,5 cm?",
    "opties": [
      "15",
      "150",
      "1.5"
    ],
    "goed": "15",
    "uitleg": "1 cm = 10 mm, dus 1,5 × 10 = 15 mm.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel mm is 2 cm?",
    "opties": [
      "200",
      "20",
      "2"
    ],
    "goed": "20",
    "uitleg": "1 cm = 10 mm, dus 2 × 10 = 20 mm.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel mm is 2,5 cm?",
    "opties": [
      "25",
      "2.5",
      "250"
    ],
    "goed": "25",
    "uitleg": "1 cm = 10 mm, dus 2,5 × 10 = 25 mm.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel mm is 3 cm?",
    "opties": [
      "30",
      "3",
      "300"
    ],
    "goed": "30",
    "uitleg": "1 cm = 10 mm, dus 3 × 10 = 30 mm.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel mm is 4,5 cm?",
    "opties": [
      "4.5",
      "45",
      "450"
    ],
    "goed": "45",
    "uitleg": "1 cm = 10 mm, dus 4,5 × 10 = 45 mm.",
    "niveau": 4
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel m is 250 cm?",
    "opties": [
      "2,5",
      "0,25",
      "25"
    ],
    "goed": "2,5",
    "uitleg": "100 cm = 1 m, dus 250 : 100 = 2,5 m.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel m is 500 cm?",
    "opties": [
      "50",
      "0,5",
      "5"
    ],
    "goed": "5",
    "uitleg": "100 cm = 1 m, dus 500 : 100 = 5 m.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel m is 750 cm?",
    "opties": [
      "7,5",
      "75",
      "0,75"
    ],
    "goed": "7,5",
    "uitleg": "100 cm = 1 m, dus 750 : 100 = 7,5 m.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel m is 1500 cm?",
    "opties": [
      "15",
      "150",
      "1,5"
    ],
    "goed": "15",
    "uitleg": "100 cm = 1 m, dus 1500 : 100 = 15 m.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel m is 2500 cm?",
    "opties": [
      "25",
      "250",
      "2,5"
    ],
    "goed": "25",
    "uitleg": "100 cm = 1 m, dus 2500 : 100 = 25 m.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel km is 250 m?",
    "opties": [
      "0,025",
      "0,25",
      "2,5"
    ],
    "goed": "0,25",
    "uitleg": "1000 m = 1 km, dus 250 : 1000 = 0,25 km.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel km is 500 m?",
    "opties": [
      "0,5",
      "0,05",
      "5"
    ],
    "goed": "0,5",
    "uitleg": "1000 m = 1 km, dus 500 : 1000 = 0,5 km.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel km is 750 m?",
    "opties": [
      "0,75",
      "7,5",
      "0,075"
    ],
    "goed": "0,75",
    "uitleg": "1000 m = 1 km, dus 750 : 1000 = 0,75 km.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel km is 1500 m?",
    "opties": [
      "1,5",
      "15",
      "0,15"
    ],
    "goed": "1,5",
    "uitleg": "1000 m = 1 km, dus 1500 : 1000 = 1,5 km.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel km is 2500 m?",
    "opties": [
      "25",
      "2,5",
      "0,25"
    ],
    "goed": "2,5",
    "uitleg": "1000 m = 1 km, dus 2500 : 1000 = 2,5 km.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel l is 250 ml?",
    "opties": [
      "0,025",
      "2,5",
      "0,25"
    ],
    "goed": "0,25",
    "uitleg": "1000 ml = 1 l, dus 250 : 1000 = 0,25 l.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel l is 500 ml?",
    "opties": [
      "0,5",
      "0,05",
      "5"
    ],
    "goed": "0,5",
    "uitleg": "1000 ml = 1 l, dus 500 : 1000 = 0,5 l.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel l is 750 ml?",
    "opties": [
      "0,75",
      "0,075",
      "7,5"
    ],
    "goed": "0,75",
    "uitleg": "1000 ml = 1 l, dus 750 : 1000 = 0,75 l.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel l is 1500 ml?",
    "opties": [
      "15",
      "1,5",
      "0,15"
    ],
    "goed": "1,5",
    "uitleg": "1000 ml = 1 l, dus 1500 : 1000 = 1,5 l.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel l is 2500 ml?",
    "opties": [
      "25",
      "2,5",
      "0,25"
    ],
    "goed": "2,5",
    "uitleg": "1000 ml = 1 l, dus 2500 : 1000 = 2,5 l.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel kg is 250 g?",
    "opties": [
      "0,025",
      "2,5",
      "0,25"
    ],
    "goed": "0,25",
    "uitleg": "1000 g = 1 kg, dus 250 : 1000 = 0,25 kg.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel kg is 500 g?",
    "opties": [
      "5",
      "0,05",
      "0,5"
    ],
    "goed": "0,5",
    "uitleg": "1000 g = 1 kg, dus 500 : 1000 = 0,5 kg.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel kg is 750 g?",
    "opties": [
      "0,075",
      "0,75",
      "7,5"
    ],
    "goed": "0,75",
    "uitleg": "1000 g = 1 kg, dus 750 : 1000 = 0,75 kg.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel kg is 1500 g?",
    "opties": [
      "0,15",
      "1,5",
      "15"
    ],
    "goed": "1,5",
    "uitleg": "1000 g = 1 kg, dus 1500 : 1000 = 1,5 kg.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel kg is 2500 g?",
    "opties": [
      "2,5",
      "25",
      "0,25"
    ],
    "goed": "2,5",
    "uitleg": "1000 g = 1 kg, dus 2500 : 1000 = 2,5 kg.",
    "niveau": 5
  },
  {
    "soort": "meten",
    "vraag": "Een bus rijdt 60 km in 2 uur. Hoeveel km per uur is dat gemiddeld?",
    "opties": [
      "62 km/u",
      "30 km/u",
      "60 km/u"
    ],
    "goed": "30 km/u",
    "uitleg": "Snelheid = afstand : tijd = 60 : 2 = 30 km per uur.",
    "niveau": 6
  },
  {
    "soort": "meten",
    "vraag": "Een bus rijdt 90 km in 3 uur. Hoeveel km per uur is dat gemiddeld?",
    "opties": [
      "93 km/u",
      "30 km/u",
      "60 km/u"
    ],
    "goed": "30 km/u",
    "uitleg": "Snelheid = afstand : tijd = 90 : 3 = 30 km per uur.",
    "niveau": 6
  },
  {
    "soort": "meten",
    "vraag": "Een bus rijdt 120 km in 4 uur. Hoeveel km per uur is dat gemiddeld?",
    "opties": [
      "60 km/u",
      "30 km/u",
      "124 km/u"
    ],
    "goed": "30 km/u",
    "uitleg": "Snelheid = afstand : tijd = 120 : 4 = 30 km per uur.",
    "niveau": 6
  },
  {
    "soort": "meten",
    "vraag": "Een bus rijdt 45 km in 3 uur. Hoeveel km per uur is dat gemiddeld?",
    "opties": [
      "15 km/u",
      "48 km/u",
      "30 km/u"
    ],
    "goed": "15 km/u",
    "uitleg": "Snelheid = afstand : tijd = 45 : 3 = 15 km per uur.",
    "niveau": 6
  },
  {
    "soort": "meten",
    "vraag": "Een bus rijdt 150 km in 5 uur. Hoeveel km per uur is dat gemiddeld?",
    "opties": [
      "155 km/u",
      "60 km/u",
      "30 km/u"
    ],
    "goed": "30 km/u",
    "uitleg": "Snelheid = afstand : tijd = 150 : 5 = 30 km per uur.",
    "niveau": 6
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel uur is 90 minuten?",
    "opties": [
      "1,5 uur",
      "0.9 uur",
      "3 uur"
    ],
    "goed": "1,5 uur",
    "uitleg": "90 minuten : 60 = 1,5 uur.",
    "niveau": 6
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel uur is 150 minuten?",
    "opties": [
      "5 uur",
      "1.5 uur",
      "2,5 uur"
    ],
    "goed": "2,5 uur",
    "uitleg": "150 minuten : 60 = 2,5 uur.",
    "niveau": 6
  },
  {
    "soort": "meten",
    "vraag": "Hoeveel uur is 45 minuten?",
    "opties": [
      "0,75 uur",
      "0.45 uur",
      "1.5 uur"
    ],
    "goed": "0,75 uur",
    "uitleg": "45 minuten : 60 = 0,75 uur.",
    "niveau": 6
  },
  {
    "soort": "meetkunde",
    "vraag": "Een tuin is 4 m lang en 3 m breed. Wat is de oppervlakte?",
    "opties": [
      "7 m²",
      "12 m²",
      "14 m²"
    ],
    "goed": "12 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 4 × 3 = 12 m².",
    "niveau": 4
  },
  {
    "soort": "meetkunde",
    "vraag": "Een tuin is 4 m lang en 3 m breed. Hoeveel meter hek is er nodig rondom?",
    "opties": [
      "7 m",
      "14 m",
      "12 m"
    ],
    "goed": "14 m",
    "uitleg": "Omtrek = 2 × (lengte + breedte) = 2 × (4 + 3) = 14 m.",
    "niveau": 5
  },
  {
    "soort": "meetkunde",
    "vraag": "Een tuin is 5 m lang en 4 m breed. Wat is de oppervlakte?",
    "opties": [
      "9 m²",
      "20 m²",
      "18 m²"
    ],
    "goed": "20 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 5 × 4 = 20 m².",
    "niveau": 4
  },
  {
    "soort": "meetkunde",
    "vraag": "Een tuin is 5 m lang en 4 m breed. Hoeveel meter hek is er nodig rondom?",
    "opties": [
      "18 m",
      "9 m",
      "20 m"
    ],
    "goed": "18 m",
    "uitleg": "Omtrek = 2 × (lengte + breedte) = 2 × (5 + 4) = 18 m.",
    "niveau": 5
  },
  {
    "soort": "meetkunde",
    "vraag": "Een tuin is 7 m lang en 4 m breed. Wat is de oppervlakte?",
    "opties": [
      "28 m²",
      "11 m²",
      "22 m²"
    ],
    "goed": "28 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 7 × 4 = 28 m².",
    "niveau": 4
  },
  {
    "soort": "meetkunde",
    "vraag": "Een tuin is 7 m lang en 4 m breed. Hoeveel meter hek is er nodig rondom?",
    "opties": [
      "22 m",
      "28 m",
      "11 m"
    ],
    "goed": "22 m",
    "uitleg": "Omtrek = 2 × (lengte + breedte) = 2 × (7 + 4) = 22 m.",
    "niveau": 5
  },
  {
    "soort": "meetkunde",
    "vraag": "Een tuin is 8 m lang en 5 m breed. Wat is de oppervlakte?",
    "opties": [
      "13 m²",
      "26 m²",
      "40 m²"
    ],
    "goed": "40 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 8 × 5 = 40 m².",
    "niveau": 4
  },
  {
    "soort": "meetkunde",
    "vraag": "Een tuin is 8 m lang en 5 m breed. Hoeveel meter hek is er nodig rondom?",
    "opties": [
      "13 m",
      "26 m",
      "40 m"
    ],
    "goed": "26 m",
    "uitleg": "Omtrek = 2 × (lengte + breedte) = 2 × (8 + 5) = 26 m.",
    "niveau": 5
  },
  {
    "soort": "meetkunde",
    "vraag": "Een tuin is 9 m lang en 6 m breed. Wat is de oppervlakte?",
    "opties": [
      "54 m²",
      "15 m²",
      "30 m²"
    ],
    "goed": "54 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 9 × 6 = 54 m².",
    "niveau": 4
  },
  {
    "soort": "meetkunde",
    "vraag": "Een tuin is 9 m lang en 6 m breed. Hoeveel meter hek is er nodig rondom?",
    "opties": [
      "54 m",
      "30 m",
      "15 m"
    ],
    "goed": "30 m",
    "uitleg": "Omtrek = 2 × (lengte + breedte) = 2 × (9 + 6) = 30 m.",
    "niveau": 5
  },
  {
    "soort": "meetkunde",
    "vraag": "Een tuin is 10 m lang en 4 m breed. Wat is de oppervlakte?",
    "opties": [
      "28 m²",
      "14 m²",
      "40 m²"
    ],
    "goed": "40 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 10 × 4 = 40 m².",
    "niveau": 4
  },
  {
    "soort": "meetkunde",
    "vraag": "Een tuin is 10 m lang en 4 m breed. Hoeveel meter hek is er nodig rondom?",
    "opties": [
      "14 m",
      "28 m",
      "40 m"
    ],
    "goed": "28 m",
    "uitleg": "Omtrek = 2 × (lengte + breedte) = 2 × (10 + 4) = 28 m.",
    "niveau": 5
  },
  {
    "soort": "meetkunde",
    "vraag": "Een tuin is 12 m lang en 5 m breed. Wat is de oppervlakte?",
    "opties": [
      "17 m²",
      "60 m²",
      "34 m²"
    ],
    "goed": "60 m²",
    "uitleg": "Oppervlakte = lengte × breedte = 12 × 5 = 60 m².",
    "niveau": 4
  },
  {
    "soort": "meetkunde",
    "vraag": "Een tuin is 12 m lang en 5 m breed. Hoeveel meter hek is er nodig rondom?",
    "opties": [
      "60 m",
      "17 m",
      "34 m"
    ],
    "goed": "34 m",
    "uitleg": "Omtrek = 2 × (lengte + breedte) = 2 × (12 + 5) = 34 m.",
    "niveau": 5
  },
  {
    "soort": "meetkunde",
    "vraag": "Een bak is 6 bij 4 bij 2 cm. Wat is het volume?",
    "opties": [
      "12 cm³",
      "48 cm³",
      "24 cm³"
    ],
    "goed": "48 cm³",
    "uitleg": "Volume = lengte × breedte × hoogte = 6 × 4 × 2 = 48 cm³.",
    "niveau": 6
  },
  {
    "soort": "meetkunde",
    "vraag": "Een bak is 8 bij 5 bij 3 cm. Wat is het volume?",
    "opties": [
      "40 cm³",
      "16 cm³",
      "120 cm³"
    ],
    "goed": "120 cm³",
    "uitleg": "Volume = lengte × breedte × hoogte = 8 × 5 × 3 = 120 cm³.",
    "niveau": 6
  },
  {
    "soort": "meetkunde",
    "vraag": "Een bak is 10 bij 4 bij 2 cm. Wat is het volume?",
    "opties": [
      "16 cm³",
      "40 cm³",
      "80 cm³"
    ],
    "goed": "80 cm³",
    "uitleg": "Volume = lengte × breedte × hoogte = 10 × 4 × 2 = 80 cm³.",
    "niveau": 6
  },
  {
    "soort": "meetkunde",
    "vraag": "Een bak is 12 bij 6 bij 3 cm. Wat is het volume?",
    "opties": [
      "216 cm³",
      "72 cm³",
      "21 cm³"
    ],
    "goed": "216 cm³",
    "uitleg": "Volume = lengte × breedte × hoogte = 12 × 6 × 3 = 216 cm³.",
    "niveau": 6
  },
  {
    "soort": "verhouding",
    "vraag": "2 appels kosten € 5. Wat kosten 10 appels?",
    "opties": [
      "€ 25",
      "€ 20",
      "€ 50"
    ],
    "goed": "€ 25",
    "uitleg": "10 : 2 = 5 keer zoveel, dus 5 × 5 = 25 euro.",
    "niveau": 5
  },
  {
    "soort": "verhouding",
    "vraag": "3 appels kosten € 4. Wat kosten 12 appels?",
    "opties": [
      "€ 16",
      "€ 12",
      "€ 48"
    ],
    "goed": "€ 16",
    "uitleg": "12 : 3 = 4 keer zoveel, dus 4 × 4 = 16 euro.",
    "niveau": 5
  },
  {
    "soort": "verhouding",
    "vraag": "4 appels kosten € 3. Wat kosten 20 appels?",
    "opties": [
      "€ 15",
      "€ 12",
      "€ 60"
    ],
    "goed": "€ 15",
    "uitleg": "20 : 4 = 5 keer zoveel, dus 5 × 3 = 15 euro.",
    "niveau": 5
  },
  {
    "soort": "verhouding",
    "vraag": "5 appels kosten € 2. Wat kosten 15 appels?",
    "opties": [
      "€ 4",
      "€ 30",
      "€ 6"
    ],
    "goed": "€ 6",
    "uitleg": "15 : 5 = 3 keer zoveel, dus 3 × 2 = 6 euro.",
    "niveau": 5
  },
  {
    "soort": "verhouding",
    "vraag": "2 appels kosten € 7. Wat kosten 8 appels?",
    "opties": [
      "€ 56",
      "€ 21",
      "€ 28"
    ],
    "goed": "€ 28",
    "uitleg": "8 : 2 = 4 keer zoveel, dus 4 × 7 = 28 euro.",
    "niveau": 5
  },
  {
    "soort": "verhouding",
    "vraag": "3 appels kosten € 5. Wat kosten 9 appels?",
    "opties": [
      "€ 45",
      "€ 10",
      "€ 15"
    ],
    "goed": "€ 15",
    "uitleg": "9 : 3 = 3 keer zoveel, dus 3 × 5 = 15 euro.",
    "niveau": 5
  },
  {
    "soort": "verhouding",
    "vraag": "Voor 4 personen heb je 200 gram pasta nodig. Hoeveel voor 6 personen?",
    "opties": [
      "1200 gram",
      "206 gram",
      "300 gram"
    ],
    "goed": "300 gram",
    "uitleg": "Per persoon: 200 : 4 = 50 gram. Dan 50 × 6 = 300 gram.",
    "niveau": 6
  },
  {
    "soort": "verhouding",
    "vraag": "Voor 3 personen heb je 150 gram pasta nodig. Hoeveel voor 5 personen?",
    "opties": [
      "750 gram",
      "155 gram",
      "250 gram"
    ],
    "goed": "250 gram",
    "uitleg": "Per persoon: 150 : 3 = 50 gram. Dan 50 × 5 = 250 gram.",
    "niveau": 6
  },
  {
    "soort": "verhouding",
    "vraag": "Voor 5 personen heb je 400 gram pasta nodig. Hoeveel voor 8 personen?",
    "opties": [
      "3200 gram",
      "408 gram",
      "640 gram"
    ],
    "goed": "640 gram",
    "uitleg": "Per persoon: 400 : 5 = 80 gram. Dan 80 × 8 = 640 gram.",
    "niveau": 6
  },
  {
    "soort": "verhouding",
    "vraag": "Voor 2 personen heb je 90 gram pasta nodig. Hoeveel voor 7 personen?",
    "opties": [
      "97 gram",
      "630 gram",
      "315 gram"
    ],
    "goed": "315 gram",
    "uitleg": "Per persoon: 90 : 2 = 45 gram. Dan 45 × 7 = 315 gram.",
    "niveau": 6
  }
];
if (typeof module !== 'undefined') module.exports = REKENTOP;
