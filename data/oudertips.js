// data/oudertips.js — ouder-sectie: tips & spelletjes om ZONDER scherm te oefenen.
// Gericht op beelddenkers en kinderen met dyslexie: samen, met de handen, multisensorieel.
// Vrij uit te breiden: voeg categorieën of spelletjes toe. { naam, nodig, hoe }.
var OUDERTIPS = {
  intro: "Juist zónder scherm leren beelddenkers ontzettend veel: samen, met hun handen en met alle zintuigen. Kies wat bij de dag past — 10 minuten is al waardevol. Houd het licht en positief, en herhaal gerust.",
  algemeen: [
    "Kort en vaak werkt beter dan lang en zwaar: liever elke dag even, dan één keer heel lang.",
    "Doe het sámen en maak er een spel van. Prijs de inzet en het proberen, niet alleen het goede antwoord.",
    "Gebruik je handen en spullen uit huis (blokjes, kaarten, keukenspullen). Voelen en doen helpt onthouden.",
    "Laat je kind hardop denken; zo hoor je hóe het redeneert en kun je gericht meehelpen.",
    "Verweef het in het dagelijks leven: samen koken, tafel dekken, boodschappen doen, onderweg in de auto.",
    "Fout is niet erg — het is een kans om samen te kijken hoe het wél kan. Blijf rustig en geduldig."
  ],
  categorieen: [
    { titel:"🔢 Rekenen & getalgevoel", spellen:[
      { naam:"Dobbelrace", nodig:"2 dobbelstenen", hoe:"Gooi allebei en tel samen snel op. Wie het goede antwoord als eerste roept, zet een pion een stap vooruit." },
      { naam:"Winkeltje spelen", nodig:"muntjes of speelgeld", hoe:"Maak prijskaartjes, laat je kind betalen en teruggeven. Rekenen zonder dat het rekenen lijkt." },
      { naam:"Traptellen", nodig:"een trap", hoe:"Tel de treden op en af, of met sprongen van 2 of 5. Bewegen + tellen blijft beter hangen." },
      { naam:"Kaarten optellen", nodig:"een spel kaarten", hoe:"Draai twee kaarten om en tel op (of trek af). De hoogste som wint de ronde." }
    ]},
    { titel:"🔤 Klanken, letters & spelling", spellen:[
      { naam:"Hakken en plakken", nodig:"niets", hoe:"Zeg een woord in losse klanken (b–oo–m) en laat je kind het 'plakken' tot boom. En andersom: laat het kind hakken." },
      { naam:"Letters voelen", nodig:"bakje zand, rijst of scheerschuim", hoe:"Schrijf letters met je vinger. Voelen én zien tegelijk helpt sterk bij dyslexie." },
      { naam:"Ik zie, ik zie…", nodig:"niets", hoe:"'…wat jij niet ziet en het begint met de /s/.' Speel met de begínklank in plaats van de kleur." },
      { naam:"Rijm-estafette", nodig:"niets", hoe:"Noem om de beurt een rijmwoord (kat–mat–bad…). Wie niets meer weet, geeft de beurt door." }
    ]},
    { titel:"📖 Luisteren & begrijpen", spellen:[
      { naam:"Voorlezen + navertellen", nodig:"een (prenten)boek", hoe:"Lees voor en laat je kind in eigen woorden navertellen. Vraag: wie, wat, waar en waarom?" },
      { naam:"Verhaal doorvertellen", nodig:"niets", hoe:"Begin met één zin en vertel om de beurt verder. Luisteren én fantasie tegelijk." },
      { naam:"Op volgorde", nodig:"een kort verhaaltje", hoe:"Vertel drie gebeurtenissen door elkaar; laat je kind ze in de goede volgorde zetten." }
    ]},
    { titel:"🧩 Beelddenken & ruimtelijk inzicht", spellen:[
      { naam:"Nabouwen", nodig:"blokken of Lego", hoe:"Bouw iets kleins en laat je kind het precies nabouwen. Daarna wisselen van rol." },
      { naam:"Patroon voortzetten", nodig:"kralen, knopen of Lego", hoe:"Maak een kleurenpatroon (rood–blauw–rood…) en laat je kind het voortzetten." },
      { naam:"Tangram of vouwen", nodig:"papier of tangram", hoe:"Leg vormen na of vouw samen figuren. Goed voor ruimtelijk zien en doorzetten." }
    ]},
    { titel:"🧠 Geheugen & concentratie", spellen:[
      { naam:"Kim's spel", nodig:"5–8 voorwerpen + een doek", hoe:"Laat de spullen kort zien, dek ze af en haal er stiekem één weg. Wat mist er?" },
      { naam:"Koffer inpakken", nodig:"niets", hoe:"'Ik ga op reis en neem mee…' Herhaal telkens de hele rij en voeg er één bij." },
      { naam:"Memory", nodig:"kaartjes of een spel", hoe:"Klassiek memory met paren. Begin met weinig paren en breid langzaam uit." }
    ]},
    { titel:"🤸 Bewegen & focus", spellen:[
      { naam:"Sprong-sommen", nodig:"stoepkrijt of tape", hoe:"Schrijf getallen op de grond; spring naar het juiste antwoord. Bewegen helpt onthouden en concentreren." },
      { naam:"Zoek & los op", nodig:"briefjes", hoe:"Verstop briefjes met een klein sommetje of woord; bij elke vondst los je 'm samen op." }
    ]}
  ]
};
if (typeof module !== 'undefined') module.exports = OUDERTIPS;
