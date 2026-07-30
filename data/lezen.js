// data/lezen.js — Begrijpend lezen. Korte verhaaltjes die worden VOORGELEZEN, met
// begripsvragen en tikbare antwoorden (weinig leeslast → geschikt voor beelddenkers/dyslexie).
// { niveau:1-3, titel, tekst, vragen:[ { vraag, opties:[...], goed, uitleg } ] }
// Regels (bewaakt door de testsuite): 'goed' staat letterlijk én uniek in 'opties'; elke vraag heeft uitleg.
// niveau 1 = groep 3, 2 = groep 4-5, 3 = groep 6+. Voeg gerust eigen verhalen toe.

var LEZEN = [
  {
    "niveau": 1,
    "titel": "De kat op het dak",
    "tekst": "Tom de kat zit op het dak. Hij ziet een vogel. De vogel vliegt snel weg. Tom miauwt zachtjes.",
    "vragen": [
      {
        "vraag": "Waar zit Tom?",
        "opties": [
          "Op het dak",
          "In de tuin",
          "Op de bank"
        ],
        "goed": "Op het dak",
        "uitleg": "In het verhaal zit Tom op het dak."
      },
      {
        "vraag": "Wat ziet Tom?",
        "opties": [
          "Een vogel",
          "Een hond",
          "Een vis"
        ],
        "goed": "Een vogel",
        "uitleg": "Tom ziet een vogel die wegvliegt."
      },
      {
        "vraag": "Waarom miauwt Tom zachtjes?",
        "opties": [
          "De vogel is weg",
          "Hij heeft honger",
          "Hij gaat slapen"
        ],
        "goed": "De vogel is weg",
        "uitleg": "De vogel vloog weg, dus Tom kon hem niet pakken."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Sara en de bal",
    "tekst": "Sara speelt met haar rode bal in de tuin. De bal rolt onder de struik. Sara kruipt erachteraan en pakt hem. Ze lacht blij.",
    "vragen": [
      {
        "vraag": "Welke kleur heeft de bal?",
        "opties": [
          "Rood",
          "Blauw",
          "Groen"
        ],
        "goed": "Rood",
        "uitleg": "In het verhaal is de bal rood."
      },
      {
        "vraag": "Waar rolt de bal heen?",
        "opties": [
          "Onder de struik",
          "In het water",
          "Op straat"
        ],
        "goed": "Onder de struik",
        "uitleg": "De bal rolt onder de struik."
      },
      {
        "vraag": "Hoe voelt Sara zich aan het eind?",
        "opties": [
          "Blij",
          "Verdrietig",
          "Boos"
        ],
        "goed": "Blij",
        "uitleg": "Sara lacht, dus ze is blij dat ze de bal heeft."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Regen",
    "tekst": "Het regent buiten. Bram pakt zijn laarzen en zijn jas. Hij springt in de plassen. Zijn broek wordt helemaal nat.",
    "vragen": [
      {
        "vraag": "Wat voor weer is het?",
        "opties": [
          "Regen",
          "Zon",
          "Sneeuw"
        ],
        "goed": "Regen",
        "uitleg": "Het regent buiten."
      },
      {
        "vraag": "Wat pakt Bram?",
        "opties": [
          "Laarzen en jas",
          "Zijn fiets",
          "Een paraplu"
        ],
        "goed": "Laarzen en jas",
        "uitleg": "Bram pakt zijn laarzen en zijn jas."
      },
      {
        "vraag": "Waarom wordt zijn broek nat?",
        "opties": [
          "Hij springt in plassen",
          "Hij valt in het gras",
          "Hij wast zijn broek"
        ],
        "goed": "Hij springt in plassen",
        "uitleg": "Door in de plassen te springen wordt zijn broek nat."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "De verjaardag",
    "tekst": "Lisa wordt vandaag acht jaar. Ze krijgt een cadeau van oma: een doos met verf. Lisa houdt heel veel van tekenen. Daarom is ze superblij. Ze maakt meteen een mooie tekening voor oma.",
    "vragen": [
      {
        "vraag": "Hoe oud wordt Lisa?",
        "opties": [
          "Acht",
          "Zeven",
          "Tien"
        ],
        "goed": "Acht",
        "uitleg": "Lisa wordt vandaag acht jaar."
      },
      {
        "vraag": "Wat zit er in het cadeau?",
        "opties": [
          "Verf",
          "Een boek",
          "Snoep"
        ],
        "goed": "Verf",
        "uitleg": "In de doos van oma zit verf."
      },
      {
        "vraag": "Waarom is Lisa zo blij met het cadeau?",
        "opties": [
          "Ze houdt van tekenen",
          "Ze wil snoep",
          "Ze houdt van lezen"
        ],
        "goed": "Ze houdt van tekenen",
        "uitleg": "Lisa houdt van tekenen, en met verf kan ze tekenen."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "De verdwaalde hond",
    "tekst": "Op straat loopt een hond helemaal alleen, zonder baasje. Milan ziet dat de hond een bandje draagt met een telefoonnummer. Samen met zijn moeder belt hij dat nummer. Even later komt het baasje blij de hond ophalen.",
    "vragen": [
      {
        "vraag": "Wat draagt de hond om zijn nek?",
        "opties": [
          "Een bandje met een nummer",
          "Een sjaal",
          "Een riem"
        ],
        "goed": "Een bandje met een nummer",
        "uitleg": "De hond draagt een bandje met een telefoonnummer."
      },
      {
        "vraag": "Wat doet Milan als hij het nummer ziet?",
        "opties": [
          "Hij belt het nummer",
          "Hij rent weg",
          "Hij aait de hond"
        ],
        "goed": "Hij belt het nummer",
        "uitleg": "Milan belt met zijn moeder het nummer op het bandje."
      },
      {
        "vraag": "Waarom kon het baasje worden gevonden?",
        "opties": [
          "Door het nummer op het bandje",
          "Door de kleur van de hond",
          "Door te blaffen"
        ],
        "goed": "Door het nummer op het bandje",
        "uitleg": "Dankzij het telefoonnummer konden ze het baasje bellen."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Storm op zee",
    "tekst": "De vissers varen uit met hun boot. Maar de lucht wordt steeds donkerder. De wind wordt sterker en de golven worden hoger. De kapitein besluit snel terug te varen naar de haven. Als ze veilig aankomen, is iedereen opgelucht.",
    "vragen": [
      {
        "vraag": "Wat gebeurt er met het weer?",
        "opties": [
          "Het wordt storm",
          "Het wordt mooi weer",
          "Het gaat sneeuwen"
        ],
        "goed": "Het wordt storm",
        "uitleg": "De lucht wordt donker, de wind sterker en de golven hoger: storm."
      },
      {
        "vraag": "Wat besluit de kapitein?",
        "opties": [
          "Terugvaren naar de haven",
          "Verder de zee op",
          "Gaan vissen"
        ],
        "goed": "Terugvaren naar de haven",
        "uitleg": "De kapitein vaart terug naar de haven."
      },
      {
        "vraag": "Waarom varen ze terug?",
        "opties": [
          "Het is te gevaarlijk",
          "Ze hebben genoeg vis",
          "Het is etenstijd"
        ],
        "goed": "Het is te gevaarlijk",
        "uitleg": "Door de storm is het te gevaarlijk om te blijven."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "De uitvinding van Noor",
    "tekst": "Noor knutselt graag. Ze merkt dat haar kleine broertje steeds zijn knuffel kwijt is en dan huilt. Daarom maakt Noor een klein belletje dat ze aan de knuffel hangt. Nu horen ze meteen waar de knuffel ligt. Haar broertje is dolblij.",
    "vragen": [
      {
        "vraag": "Welk probleem lost Noor op?",
        "opties": [
          "Haar broertje raakt zijn knuffel kwijt",
          "De knuffel is stuk",
          "Het belletje is te hard"
        ],
        "goed": "Haar broertje raakt zijn knuffel kwijt",
        "uitleg": "Het broertje was steeds zijn knuffel kwijt; dat lost Noor op."
      },
      {
        "vraag": "Hoe lost ze het op?",
        "opties": [
          "Een belletje aan de knuffel",
          "Een nieuwe knuffel kopen",
          "De knuffel verstoppen"
        ],
        "goed": "Een belletje aan de knuffel",
        "uitleg": "Door een belletje hoor je waar de knuffel is."
      },
      {
        "vraag": "Wat voor kind is Noor waarschijnlijk?",
        "opties": [
          "Vindingrijk en behulpzaam",
          "Lui",
          "Verlegen"
        ],
        "goed": "Vindingrijk en behulpzaam",
        "uitleg": "Ze bedenkt zelf een slimme oplossing om te helpen."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "De wedstrijd",
    "tekst": "Sam traint elke dag hard voor de grote hardloopwedstrijd. Tijdens de race struikelt hij en valt hard op de grond. Toch staat hij weer op en rent door tot de finish. Hij wint niet, maar iedereen klapt heel hard voor hem.",
    "vragen": [
      {
        "vraag": "Wat gebeurt er tijdens de race?",
        "opties": [
          "Sam struikelt en valt",
          "Sam stopt met rennen",
          "Sam wint de race"
        ],
        "goed": "Sam struikelt en valt",
        "uitleg": "Sam struikelt en valt, maar staat weer op."
      },
      {
        "vraag": "Waarom klapt iedereen voor Sam?",
        "opties": [
          "Omdat hij niet opgaf",
          "Omdat hij won",
          "Omdat hij het snelst was"
        ],
        "goed": "Omdat hij niet opgaf",
        "uitleg": "Hij won niet, maar gaf niet op — dat vindt iedereen knap."
      },
      {
        "vraag": "Wat leert dit verhaal ons?",
        "opties": [
          "Doorzetten is belangrijk",
          "Rennen is gevaarlijk",
          "Winnen is het enige dat telt"
        ],
        "goed": "Doorzetten is belangrijk",
        "uitleg": "De hoofdgedachte is: blijven doorzetten, ook na een tegenslag."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Het geheim van de tuin",
    "tekst": "Elke ochtend vindt opa verse tomaten in zijn tuin, terwijl hij zelf niets heeft geplant. Hij snapt er niets van. Op een nacht kijkt hij stiekem uit het raam. Dan ziet hij de buurvrouw die zachtjes plantjes neerzet als verrassing. Opa glimlacht en zegt de volgende dag niets.",
    "vragen": [
      {
        "vraag": "Wat vindt opa elke ochtend?",
        "opties": [
          "Verse tomaten",
          "Bloemen",
          "Een brief"
        ],
        "goed": "Verse tomaten",
        "uitleg": "Opa vindt elke ochtend verse tomaten."
      },
      {
        "vraag": "Wie zet de plantjes neer?",
        "opties": [
          "De buurvrouw",
          "Opa zelf",
          "De postbode"
        ],
        "goed": "De buurvrouw",
        "uitleg": "'s Nachts ziet opa de buurvrouw plantjes neerzetten."
      },
      {
        "vraag": "Waarom zegt opa er niets over?",
        "opties": [
          "Om de verrassing niet te bederven",
          "Hij is het vergeten",
          "Hij is boos"
        ],
        "goed": "Om de verrassing niet te bederven",
        "uitleg": "Opa glimlacht; hij wil de lieve verrassing van de buurvrouw laten bestaan."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "De brug van de buurt",
    "tekst": "In het dorp lag een oude houten brug. Kinderen fietsten er elke dag over naar school. Maar na een storm zaten er gaten in het hout. De gemeente zette hekken neer: de brug was gesloten. Nu moesten de kinderen een half uur omfietsen. Daarom schreven ze samen een brief aan de burgemeester. Twee weken later kwamen er werklui. Ze legden nieuwe planken neer, en de brug ging weer open.",
    "vragen": [
      {
        "vraag": "Waarom werd de brug gesloten?",
        "opties": [
          "Er zaten gaten in het hout na een storm",
          "Er was te weinig geld",
          "De kinderen mochten niet fietsen"
        ],
        "goed": "Er zaten gaten in het hout na een storm",
        "uitleg": "Na de storm zaten er gaten in het hout, daarom kwamen de hekken."
      },
      {
        "vraag": "Wat was het gevolg voor de kinderen?",
        "opties": [
          "Ze moesten omfietsen",
          "Ze kregen vrij",
          "Ze gingen lopen naar school"
        ],
        "goed": "Ze moesten omfietsen",
        "uitleg": "Door de gesloten brug moesten ze een half uur omfietsen."
      },
      {
        "vraag": "Wat deden de kinderen zelf?",
        "opties": [
          "Een brief schrijven aan de burgemeester",
          "De brug zelf maken",
          "Niets"
        ],
        "goed": "Een brief schrijven aan de burgemeester",
        "uitleg": "Ze schreven samen een brief; daarna kwamen de werklui."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Samen iets vragen kan echt helpen",
          "Bruggen zijn gevaarlijk",
          "Stormen komen vaak voor"
        ],
        "goed": "Samen iets vragen kan echt helpen",
        "uitleg": "Doordat de kinderen samen actie ondernamen, werd de brug gemaakt."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Water uit de kraan",
    "tekst": "Schoon water lijkt gewoon, maar er zit veel werk achter. Eerst wordt water uit de bodem of uit een rivier gehaald. Daarna gaat het door filters van zand, die vuil tegenhouden. Vervolgens controleren medewerkers in een laboratorium of er geen bacteriën in zitten. Pas dan gaat het water door dikke leidingen naar de huizen. In Nederland is kraanwater daardoor goedkoop en veilig; toch kopen veel mensen water in flessen, wat duurder is en meer afval geeft.",
    "vragen": [
      {
        "vraag": "Wat gebeurt er ná het filteren?",
        "opties": [
          "Het water wordt in een laboratorium gecontroleerd",
          "Het water gaat direct naar huis",
          "Het water gaat in flessen"
        ],
        "goed": "Het water wordt in een laboratorium gecontroleerd",
        "uitleg": "De volgorde is: oppompen → filteren → controleren → leidingen."
      },
      {
        "vraag": "Waarom houdt het zandfilter vuil tegen?",
        "opties": [
          "Omdat vuil niet door het zand past",
          "Omdat zand water schoonmaakt met zeep",
          "Omdat zand warm is"
        ],
        "goed": "Omdat vuil niet door het zand past",
        "uitleg": "Een filter laat water door, maar houdt vuildeeltjes achter."
      },
      {
        "vraag": "Welk nadeel van flessenwater noemt de tekst?",
        "opties": [
          "Het is duurder en geeft meer afval",
          "Het is minder veilig",
          "Het smaakt vies"
        ],
        "goed": "Het is duurder en geeft meer afval",
        "uitleg": "De tekst zegt: duurder én meer afval."
      },
      {
        "vraag": "Wat is het standpunt van de schrijver?",
        "opties": [
          "Kraanwater is een goede keuze",
          "Flessenwater is beter",
          "Water is overal gratis"
        ],
        "goed": "Kraanwater is een goede keuze",
        "uitleg": "De schrijver noemt kraanwater goedkoop en veilig, en flessenwater duurder met meer afval."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Nepnieuws herkennen",
    "tekst": "Op je telefoon zie je elke dag berichten. Sommige zijn waar, andere niet. Nepnieuws is verzonnen nieuws dat echt lijkt. Het werkt vaak met een kop die je nieuwsgierig of kwaad maakt, want dan deel je het sneller. Er zijn drie vragen die helpen. Wie heeft dit gemaakt? Staat het ook bij een bron die je kent? En klopt de datum, of is het een oud bericht dat opnieuw rondgaat? Een foto is geen bewijs: beelden kunnen uit een ander land komen of met de computer gemaakt zijn. Twijfel je, dan is niet delen de beste keuze.",
    "vragen": [
      {
        "vraag": "Waarom gebruikt nepnieuws vaak een felle kop?",
        "opties": [
          "Omdat mensen het dan sneller delen",
          "Omdat het korter moet",
          "Omdat kranten dat verplichten"
        ],
        "goed": "Omdat mensen het dan sneller delen",
        "uitleg": "De tekst zegt: nieuwsgierig of kwaad maken zorgt dat je sneller deelt."
      },
      {
        "vraag": "Welke vraag hoort NIET bij de drie tips?",
        "opties": [
          "Hoeveel likes heeft het?",
          "Wie heeft dit gemaakt?",
          "Klopt de datum?"
        ],
        "goed": "Hoeveel likes heeft het?",
        "uitleg": "De tekst noemt maker, bekende bron en datum — likes staan er niet bij."
      },
      {
        "vraag": "Waarom is een foto geen bewijs?",
        "opties": [
          "Beelden kunnen oud, uit een ander land of gemaakt zijn",
          "Foto's zijn altijd onscherp",
          "Foto's mogen niet gedeeld worden"
        ],
        "goed": "Beelden kunnen oud, uit een ander land of gemaakt zijn",
        "uitleg": "Precies dat staat in de tekst over beelden."
      },
      {
        "vraag": "Wat is het advies bij twijfel?",
        "opties": [
          "Niet delen",
          "Toch delen met een vraagteken",
          "Aan niemand vertellen"
        ],
        "goed": "Niet delen",
        "uitleg": "De laatste zin zegt: twijfel je, dan is niet delen de beste keuze."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "De egel in de tuin",
    "tekst": "Sanne vond een egel onder de heg. Het diertje bewoog nauwelijks en lag in de volle zon. Ze wilde hem melk geven, maar haar vader zei dat egels daar buikpijn van krijgen. Samen zetten ze een schaaltje water neer en legden takken over de egel voor schaduw. Daarna belden ze de dierenambulance. De vrouw aan de telefoon zei dat ze het goed hadden gedaan: stil laten liggen en niet oppakken.",
    "vragen": [
      {
        "vraag": "Waarom mocht de egel geen melk?",
        "opties": [
          "Egels krijgen er buikpijn van",
          "Melk was er niet",
          "Egels lusten geen melk"
        ],
        "goed": "Egels krijgen er buikpijn van",
        "uitleg": "Vader zegt dat egels buikpijn krijgen van melk."
      },
      {
        "vraag": "Waarom legden ze takken neer?",
        "opties": [
          "Voor schaduw",
          "Om de egel te verstoppen",
          "Als voer"
        ],
        "goed": "Voor schaduw",
        "uitleg": "De egel lag in de volle zon; takken geven schaduw."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Help een dier, maar doe het op de juiste manier",
          "Egels zijn gevaarlijk",
          "Bel altijd meteen de politie"
        ],
        "goed": "Help een dier, maar doe het op de juiste manier",
        "uitleg": "Ze helpen wél, maar met water en schaduw in plaats van melk."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Het verdwenen sleutelbos",
    "tekst": "Meester Dirk kon de deur van de gymzaal niet openen: zijn sleutelbos was weg. Hij had hem 's ochtends nog gebruikt bij het kopieerapparaat. Twee kinderen liepen mee om te zoeken. Bij de kopieermachine lag niets, maar in de papierbak vonden ze de sleutels tussen de vellen. Meester Dirk had ze er per ongeluk in laten glijden toen hij het papier bijvulde. De gymles begon maar vijf minuten later.",
    "vragen": [
      {
        "vraag": "Waar lagen de sleutels?",
        "opties": [
          "In de papierbak",
          "Op het bureau",
          "In de gymzaal"
        ],
        "goed": "In de papierbak",
        "uitleg": "Ze vonden de sleutels tussen de vellen in de papierbak."
      },
      {
        "vraag": "Hoe kwamen ze daar?",
        "opties": [
          "Ze gleden erin bij het papier bijvullen",
          "Iemand had ze verstopt",
          "Ze vielen uit zijn jas"
        ],
        "goed": "Ze gleden erin bij het papier bijvullen",
        "uitleg": "De tekst zegt: per ongeluk erin laten glijden bij het bijvullen."
      },
      {
        "vraag": "Wat was het gevolg?",
        "opties": [
          "De gymles begon vijf minuten later",
          "De gymles ging niet door",
          "De deur bleef dicht"
        ],
        "goed": "De gymles begon vijf minuten later",
        "uitleg": "De laatste zin noemt vijf minuten vertraging."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Waarom bijen belangrijk zijn",
    "tekst": "Bijen halen nectar uit bloemen. Onderweg blijft er stuifmeel aan hun haren plakken, dat ze meenemen naar de volgende bloem. Zo worden planten bevrucht en groeien er vruchten: appels, aardbeien, pompoenen. Zonder bijen zou een groot deel van ons voedsel verdwijnen. Toch gaat het niet goed met ze. Er zijn minder wilde bloemen en meer bestrijdingsmiddelen. Wie helpen wil, kan bloeiende planten in de tuin zetten en een bak met water met steentjes neerzetten, zodat bijen kunnen drinken zonder te verdrinken.",
    "vragen": [
      {
        "vraag": "Hoe zorgen bijen dat vruchten groeien?",
        "opties": [
          "Ze brengen stuifmeel naar andere bloemen",
          "Ze eten schadelijke insecten",
          "Ze maken de grond los"
        ],
        "goed": "Ze brengen stuifmeel naar andere bloemen",
        "uitleg": "Stuifmeel plakt aan hun haren en gaat mee naar de volgende bloem."
      },
      {
        "vraag": "Welke twee oorzaken noemt de tekst?",
        "opties": [
          "Minder wilde bloemen en meer bestrijdingsmiddelen",
          "Te warme zomers en regen",
          "Te veel bijenkasten"
        ],
        "goed": "Minder wilde bloemen en meer bestrijdingsmiddelen",
        "uitleg": "Die twee redenen staan letterlijk in de tekst."
      },
      {
        "vraag": "Waarom steentjes in het water?",
        "opties": [
          "Zodat bijen kunnen drinken zonder te verdrinken",
          "Om het water schoon te houden",
          "Om vogels weg te houden"
        ],
        "goed": "Zodat bijen kunnen drinken zonder te verdrinken",
        "uitleg": "De laatste zin legt dat uit."
      },
      {
        "vraag": "Wat wil de schrijver bereiken?",
        "opties": [
          "Dat lezers bijen gaan helpen",
          "Dat lezers bang worden voor bijen",
          "Dat lezers honing kopen"
        ],
        "goed": "Dat lezers bijen gaan helpen",
        "uitleg": "De tekst eindigt met concrete tips om te helpen."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "De eerste schooldag van Amir",
    "tekst": "Amir kwam in oktober in de klas. Hij sprak nog bijna geen Nederlands en zei de eerste dagen niets. In de pauze stond hij alleen bij het hek. Jara bedacht iets: ze vroeg hem niet in woorden, maar met haar handen of hij mee kwam voetballen. Amir knikte. Tijdens het spelen riep hij namen van kleuren die hij die week geleerd had. Na een maand vertelde hij in de kring over zijn oude school. Zijn stem trilde, maar hij deed het.",
    "vragen": [
      {
        "vraag": "Waarom zei Amir de eerste dagen niets?",
        "opties": [
          "Hij sprak nog bijna geen Nederlands",
          "Hij vond de klas niet leuk",
          "Hij was verlegen voor Jara"
        ],
        "goed": "Hij sprak nog bijna geen Nederlands",
        "uitleg": "De tweede zin geeft die reden."
      },
      {
        "vraag": "Hoe vroeg Jara hem mee?",
        "opties": [
          "Met haar handen",
          "Met een briefje",
          "Via de juf"
        ],
        "goed": "Met haar handen",
        "uitleg": "Ze vroeg het niet in woorden maar met haar handen."
      },
      {
        "vraag": "Wat voelde Amir in de kring?",
        "opties": [
          "Spanning, maar hij deed het toch",
          "Verveling",
          "Boosheid"
        ],
        "goed": "Spanning, maar hij deed het toch",
        "uitleg": "Zijn stem trilde, en toch vertelde hij zijn verhaal."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Je kunt iemand ook zonder woorden welkom maken",
          "Voetballen is het leukste spel",
          "Talen leren gaat snel"
        ],
        "goed": "Je kunt iemand ook zonder woorden welkom maken",
        "uitleg": "Jara's gebaar zonder woorden bracht Amir in de groep."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Hoe een dijk werkt",
    "tekst": "Een groot deel van Nederland ligt onder de zeespiegel. Dijken houden het water tegen, maar ze doen meer dan hoog zijn. De kern bestaat vaak uit zand of klei; klei laat weinig water door. Aan de zeekant liggen stenen of asfalt, zodat golven het talud niet wegslaan. Gras aan de landkant lijkt versiering, maar de wortels houden de grond bij elkaar. Waterschappen controleren dijken meerdere keren per jaar en na elke storm. Bij verwachte hoogwaterstanden gaan stormvloedkeringen dicht, zoals de Maeslantkering bij Rotterdam.",
    "vragen": [
      {
        "vraag": "Waarom gebruikt men klei in de kern?",
        "opties": [
          "Klei laat weinig water door",
          "Klei is goedkoop",
          "Klei is licht"
        ],
        "goed": "Klei laat weinig water door",
        "uitleg": "De tekst zegt dat klei weinig water doorlaat."
      },
      {
        "vraag": "Welke functie heeft het gras?",
        "opties": [
          "De wortels houden de grond bij elkaar",
          "Het is alleen voor de sier",
          "Het houdt golven tegen"
        ],
        "goed": "De wortels houden de grond bij elkaar",
        "uitleg": "Gras lijkt versiering, maar de wortels versterken de grond."
      },
      {
        "vraag": "Wanneer wordt er extra gecontroleerd?",
        "opties": [
          "Na elke storm",
          "Alleen in de zomer",
          "Eén keer per tien jaar"
        ],
        "goed": "Na elke storm",
        "uitleg": "Waterschappen controleren meerdere keren per jaar én na elke storm."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Een dijk is een slim opgebouwd systeem",
          "Nederland ligt te laag",
          "Stormen zijn onvoorspelbaar"
        ],
        "goed": "Een dijk is een slim opgebouwd systeem",
        "uitleg": "Elke laag heeft een eigen functie: kern, stenen, gras, plus controle en keringen."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Reclame in je tijdlijn",
    "tekst": "Video's op je telefoon lijken gratis, maar je betaalt met aandacht en gegevens. Een app houdt bij waar je op klikt en hoe lang je kijkt. Met die gegevens kiezen adverteerders wie hun reclame ziet. Daarom krijg jij andere advertenties dan je opa. Soms lijkt reclame op een gewone video: een bekende maker praat enthousiast over een product en zegt pas achteraf, of helemaal niet, dat hij ervoor betaald is. In Nederland moet dat wél gemeld worden. Let dus op woorden als 'advertentie' of 'samenwerking', en vraag je af waarom juist jij dit ziet.",
    "vragen": [
      {
        "vraag": "Waarmee betaal je volgens de tekst?",
        "opties": [
          "Met aandacht en gegevens",
          "Met een abonnement",
          "Met advertenties kijken alleen"
        ],
        "goed": "Met aandacht en gegevens",
        "uitleg": "De eerste zin noemt aandacht en gegevens als betaalmiddel."
      },
      {
        "vraag": "Waarom zie jij andere reclame dan je opa?",
        "opties": [
          "Adverteerders kiezen op basis van gegevens",
          "Opa's telefoon is ouder",
          "Reclame wisselt willekeurig"
        ],
        "goed": "Adverteerders kiezen op basis van gegevens",
        "uitleg": "Met de bijgehouden gegevens kiezen adverteerders hun publiek."
      },
      {
        "vraag": "Waarop moet je letten volgens de schrijver?",
        "opties": [
          "Woorden als 'advertentie' of 'samenwerking'",
          "Het aantal views",
          "De lengte van de video"
        ],
        "goed": "Woorden als 'advertentie' of 'samenwerking'",
        "uitleg": "Die woorden verraden dat het betaalde reclame is."
      },
      {
        "vraag": "Wat is het standpunt van de schrijver?",
        "opties": [
          "Wees kritisch op wat je ziet",
          "Reclame is verboden",
          "Apps zijn altijd oneerlijk"
        ],
        "goed": "Wees kritisch op wat je ziet",
        "uitleg": "De tekst eindigt met: vraag je af waarom juist jij dit ziet."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Iris in de dierentuin: vogel met een gebroken vleugel",
    "tekst": "Iris wandelde door de dierentuin. Daar was een vogel met een gebroken vleugel. Iris was bezorgd. Iris belde de dierenambulance. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de sloot",
          "op het strand",
          "in de dierentuin"
        ],
        "goed": "in de dierentuin",
        "uitleg": "In het verhaal staat dat Iris wandelde door de dierentuin."
      },
      {
        "vraag": "Wat deed Iris om het op te lossen?",
        "opties": [
          "zocht het baasje met een foto",
          "belde de dierenambulance",
          "vroeg hem mee te spelen"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Iris belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Iris zich?",
        "opties": [
          "bezorgd",
          "opgelucht",
          "verlegen"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Iris zich bezorgd voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Zoë in de dierentuin: gescheurde tekening",
    "tekst": "Zoë wandelde door de dierentuin. Daar was een gescheurde tekening. Zoë was opgelucht. Zoë plakte de stukken met tape. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het schoolplein",
          "in de dierentuin",
          "op zolder"
        ],
        "goed": "in de dierentuin",
        "uitleg": "In het verhaal staat dat Zoë wandelde door de dierentuin."
      },
      {
        "vraag": "Wat deed Zoë om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "zette voer onderaan de boom",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Zoë plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Zoë zich?",
        "opties": [
          "rustig",
          "verlegen",
          "opgelucht"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Zoë zich opgelucht voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Sanne op het strand: vastgelopen vlieger",
    "tekst": "Sanne speelde op het strand. Daar was een vastgelopen vlieger. Sanne was vindingrijk. Sanne gebruikte een lange stok. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het zwembad",
          "op het strand",
          "in de bibliotheek"
        ],
        "goed": "op het strand",
        "uitleg": "In het verhaal staat dat Sanne speelde op het strand."
      },
      {
        "vraag": "Wat deed Sanne om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "gebruikte een lange stok",
          "vroeg hem mee te spelen"
        ],
        "goed": "gebruikte een lange stok",
        "uitleg": "Sanne gebruikte een lange stok; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sanne zich?",
        "opties": [
          "trots",
          "vindingrijk",
          "verlegen"
        ],
        "goed": "vindingrijk",
        "uitleg": "In de tekst staat dat Sanne zich vindingrijk voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Bo op het schoolplein: klasgenoot die alleen stond",
    "tekst": "Bo stond op het schoolplein. Daar was een klasgenoot die alleen stond. Bo was behulpzaam. Bo vroeg hem mee te spelen. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de speeltuin",
          "op het schoolplein",
          "in de schuur"
        ],
        "goed": "op het schoolplein",
        "uitleg": "In het verhaal staat dat Bo stond op het schoolplein."
      },
      {
        "vraag": "Wat deed Bo om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "zocht het baasje met een foto",
          "zette voer onderaan de boom"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Bo vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Bo zich?",
        "opties": [
          "behulpzaam",
          "vindingrijk",
          "rustig"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Bo zich behulpzaam voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Nour in de dierentuin: berg wortels die te veel was",
    "tekst": "Nour wandelde door de dierentuin. Daar was een berg wortels die te veel was. Nour was vrolijk. Nour deelde ze met de buren. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "op het schoolplein",
          "in de dierentuin"
        ],
        "goed": "in de dierentuin",
        "uitleg": "In het verhaal staat dat Nour wandelde door de dierentuin."
      },
      {
        "vraag": "Wat deed Nour om het op te lossen?",
        "opties": [
          "deelde ze met de buren",
          "belde de dierenambulance",
          "gebruikte een lange stok"
        ],
        "goed": "deelde ze met de buren",
        "uitleg": "Nour deelde ze met de buren; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Nour zich?",
        "opties": [
          "vrolijk",
          "blij",
          "trots"
        ],
        "goed": "vrolijk",
        "uitleg": "In de tekst staat dat Nour zich vrolijk voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Zoë in het zwembad: berg wortels die te veel was",
    "tekst": "Zoë zwom in het zwembad. Daar was een berg wortels die te veel was. Zoë was vrolijk. Zoë deelde ze met de buren. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het schoolplein",
          "in het zwembad",
          "op de camping"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Zoë zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Zoë om het op te lossen?",
        "opties": [
          "maakte alles schoon met water",
          "deelde ze met de buren",
          "plakte de stukken met tape"
        ],
        "goed": "deelde ze met de buren",
        "uitleg": "Zoë deelde ze met de buren; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Zoë zich?",
        "opties": [
          "opgelucht",
          "dankbaar",
          "vrolijk"
        ],
        "goed": "vrolijk",
        "uitleg": "In de tekst staat dat Zoë zich vrolijk voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Yara in de bibliotheek: omgevallen emmer verf",
    "tekst": "Yara koos een boek in de bibliotheek. Daar was een omgevallen emmer verf. Yara was geschrokken. Yara maakte alles schoon met water. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het zwembad",
          "in de bibliotheek",
          "in de schuur"
        ],
        "goed": "in de bibliotheek",
        "uitleg": "In het verhaal staat dat Yara koos een boek in de bibliotheek."
      },
      {
        "vraag": "Wat deed Yara om het op te lossen?",
        "opties": [
          "leende een pen van de buurman",
          "gebruikte een lange stok",
          "maakte alles schoon met water"
        ],
        "goed": "maakte alles schoon met water",
        "uitleg": "Yara maakte alles schoon met water; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Yara zich?",
        "opties": [
          "geschrokken",
          "behulpzaam",
          "rustig"
        ],
        "goed": "geschrokken",
        "uitleg": "In de tekst staat dat Yara zich geschrokken voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Jara bij de sloot: dichte deur zonder sleutel",
    "tekst": "Jara keek bij de sloot. Daar was een dichte deur zonder sleutel. Jara was verlegen. Jara vroeg de buurvrouw om hulp. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het schoolplein",
          "op zolder",
          "bij de sloot"
        ],
        "goed": "bij de sloot",
        "uitleg": "In het verhaal staat dat Jara keek bij de sloot."
      },
      {
        "vraag": "Wat deed Jara om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "belde thuis om het voor te lezen",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "vroeg de buurvrouw om hulp",
        "uitleg": "Jara vroeg de buurvrouw om hulp; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Jara zich?",
        "opties": [
          "verlegen",
          "blij",
          "behulpzaam"
        ],
        "goed": "verlegen",
        "uitleg": "In de tekst staat dat Jara zich verlegen voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Lotte in de speeltuin: pen die niet meer schreef",
    "tekst": "Lotte was in de speeltuin. Daar was een pen die niet meer schreef. Lotte was dankbaar. Lotte leende een pen van de buurman. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de markt",
          "in de dierentuin",
          "in de speeltuin"
        ],
        "goed": "in de speeltuin",
        "uitleg": "In het verhaal staat dat Lotte was in de speeltuin."
      },
      {
        "vraag": "Wat deed Lotte om het op te lossen?",
        "opties": [
          "gebruikte een lange stok",
          "zette voer onderaan de boom",
          "leende een pen van de buurman"
        ],
        "goed": "leende een pen van de buurman",
        "uitleg": "Lotte leende een pen van de buurman; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lotte zich?",
        "opties": [
          "verlegen",
          "dankbaar",
          "trots"
        ],
        "goed": "dankbaar",
        "uitleg": "In de tekst staat dat Lotte zich dankbaar voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Ravi in het bos: dichte deur zonder sleutel",
    "tekst": "Ravi liep door het bos. Daar was een dichte deur zonder sleutel. Ravi was verlegen. Ravi vroeg de buurvrouw om hulp. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "op de camping",
          "in het bos"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Ravi liep door het bos."
      },
      {
        "vraag": "Wat deed Ravi om het op te lossen?",
        "opties": [
          "leende een pen van de buurman",
          "vroeg de buurvrouw om hulp",
          "maakte alles schoon met water"
        ],
        "goed": "vroeg de buurvrouw om hulp",
        "uitleg": "Ravi vroeg de buurvrouw om hulp; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Ravi zich?",
        "opties": [
          "verlegen",
          "rustig",
          "vindingrijk"
        ],
        "goed": "verlegen",
        "uitleg": "In de tekst staat dat Ravi zich verlegen voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Amir op het strand: klasgenoot die alleen stond",
    "tekst": "Amir speelde op het strand. Daar was een klasgenoot die alleen stond. Amir was behulpzaam. Amir vroeg hem mee te spelen. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "op het schoolplein",
          "op het strand"
        ],
        "goed": "op het strand",
        "uitleg": "In het verhaal staat dat Amir speelde op het strand."
      },
      {
        "vraag": "Wat deed Amir om het op te lossen?",
        "opties": [
          "zocht het baasje met een foto",
          "vroeg hem mee te spelen",
          "maakte alles schoon met water"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Amir vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Amir zich?",
        "opties": [
          "behulpzaam",
          "rustig",
          "geschrokken"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Amir zich behulpzaam voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Daan op het schoolplein: gescheurde tekening",
    "tekst": "Daan stond op het schoolplein. Daar was een gescheurde tekening. Daan was opgelucht. Daan plakte de stukken met tape. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de dierentuin",
          "in de bibliotheek",
          "op het schoolplein"
        ],
        "goed": "op het schoolplein",
        "uitleg": "In het verhaal staat dat Daan stond op het schoolplein."
      },
      {
        "vraag": "Wat deed Daan om het op te lossen?",
        "opties": [
          "gebruikte een lange stok",
          "plakte de stukken met tape",
          "leende een pen van de buurman"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Daan plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Daan zich?",
        "opties": [
          "opgelucht",
          "verlegen",
          "bezorgd"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Daan zich opgelucht voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Lotte in het bos: kat hoog in een boom",
    "tekst": "Lotte liep door het bos. Daar was een kat hoog in een boom. Lotte was geduldig. Lotte zette voer onderaan de boom. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "op zolder",
          "in het bos"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Lotte liep door het bos."
      },
      {
        "vraag": "Wat deed Lotte om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "gebruikte een lange stok",
          "zette voer onderaan de boom"
        ],
        "goed": "zette voer onderaan de boom",
        "uitleg": "Lotte zette voer onderaan de boom; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lotte zich?",
        "opties": [
          "behulpzaam",
          "geduldig",
          "geschrokken"
        ],
        "goed": "geduldig",
        "uitleg": "In de tekst staat dat Lotte zich geduldig voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Ravi in het zwembad: verdwaalde puppy",
    "tekst": "Ravi zwom in het zwembad. Daar was een verdwaalde puppy. Ravi was blij. Ravi zocht het baasje met een foto. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "in het zwembad",
          "in de bibliotheek"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Ravi zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Ravi om het op te lossen?",
        "opties": [
          "deelde ze met de buren",
          "maakte alles schoon met water",
          "zocht het baasje met een foto"
        ],
        "goed": "zocht het baasje met een foto",
        "uitleg": "Ravi zocht het baasje met een foto; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Ravi zich?",
        "opties": [
          "bezorgd",
          "behulpzaam",
          "blij"
        ],
        "goed": "blij",
        "uitleg": "In de tekst staat dat Ravi zich blij voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Iris op de camping: boodschappenlijstje dat weg was",
    "tekst": "Iris kampeerde op de camping. Daar was een boodschappenlijstje dat weg was. Iris was rustig. Iris belde thuis om het voor te lezen. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "in de speeltuin",
          "op de camping"
        ],
        "goed": "op de camping",
        "uitleg": "In het verhaal staat dat Iris kampeerde op de camping."
      },
      {
        "vraag": "Wat deed Iris om het op te lossen?",
        "opties": [
          "zette voer onderaan de boom",
          "belde thuis om het voor te lezen",
          "plakte de band met een setje"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Iris belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Iris zich?",
        "opties": [
          "opgelucht",
          "rustig",
          "vindingrijk"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Iris zich rustig voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Lars in de schuur: dichte deur zonder sleutel",
    "tekst": "Lars zocht iets in de schuur. Daar was een dichte deur zonder sleutel. Lars was verlegen. Lars vroeg de buurvrouw om hulp. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de bibliotheek",
          "op het strand",
          "in de schuur"
        ],
        "goed": "in de schuur",
        "uitleg": "In het verhaal staat dat Lars zocht iets in de schuur."
      },
      {
        "vraag": "Wat deed Lars om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "zette voer onderaan de boom",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "vroeg de buurvrouw om hulp",
        "uitleg": "Lars vroeg de buurvrouw om hulp; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lars zich?",
        "opties": [
          "opgelucht",
          "vrolijk",
          "verlegen"
        ],
        "goed": "verlegen",
        "uitleg": "In de tekst staat dat Lars zich verlegen voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Iris bij de markt: dichte deur zonder sleutel",
    "tekst": "Iris hielp op de markt. Daar was een dichte deur zonder sleutel. Iris was verlegen. Iris vroeg de buurvrouw om hulp. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "bij de markt",
          "op zolder"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Iris hielp op de markt."
      },
      {
        "vraag": "Wat deed Iris om het op te lossen?",
        "opties": [
          "zocht het baasje met een foto",
          "vroeg de buurvrouw om hulp",
          "gebruikte een lange stok"
        ],
        "goed": "vroeg de buurvrouw om hulp",
        "uitleg": "Iris vroeg de buurvrouw om hulp; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Iris zich?",
        "opties": [
          "vrolijk",
          "rustig",
          "verlegen"
        ],
        "goed": "verlegen",
        "uitleg": "In de tekst staat dat Iris zich verlegen voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Lars in de bibliotheek: pen die niet meer schreef",
    "tekst": "Lars koos een boek in de bibliotheek. Daar was een pen die niet meer schreef. Lars was dankbaar. Lars leende een pen van de buurman. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op zolder",
          "in het zwembad",
          "in de bibliotheek"
        ],
        "goed": "in de bibliotheek",
        "uitleg": "In het verhaal staat dat Lars koos een boek in de bibliotheek."
      },
      {
        "vraag": "Wat deed Lars om het op te lossen?",
        "opties": [
          "leende een pen van de buurman",
          "deelde ze met de buren",
          "plakte de stukken met tape"
        ],
        "goed": "leende een pen van de buurman",
        "uitleg": "Lars leende een pen van de buurman; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lars zich?",
        "opties": [
          "rustig",
          "dankbaar",
          "vindingrijk"
        ],
        "goed": "dankbaar",
        "uitleg": "In de tekst staat dat Lars zich dankbaar voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Zoë in de speeltuin: berg wortels die te veel was",
    "tekst": "Zoë was in de speeltuin. Daar was een berg wortels die te veel was. Zoë was vrolijk. Zoë deelde ze met de buren. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de speeltuin",
          "bij de sloot",
          "in de bibliotheek"
        ],
        "goed": "in de speeltuin",
        "uitleg": "In het verhaal staat dat Zoë was in de speeltuin."
      },
      {
        "vraag": "Wat deed Zoë om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "belde de dierenambulance",
          "deelde ze met de buren"
        ],
        "goed": "deelde ze met de buren",
        "uitleg": "Zoë deelde ze met de buren; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Zoë zich?",
        "opties": [
          "vrolijk",
          "dankbaar",
          "geschrokken"
        ],
        "goed": "vrolijk",
        "uitleg": "In de tekst staat dat Zoë zich vrolijk voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Bo bij de sloot: pen die niet meer schreef",
    "tekst": "Bo keek bij de sloot. Daar was een pen die niet meer schreef. Bo was dankbaar. Bo leende een pen van de buurman. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "in de bibliotheek",
          "bij de sloot"
        ],
        "goed": "bij de sloot",
        "uitleg": "In het verhaal staat dat Bo keek bij de sloot."
      },
      {
        "vraag": "Wat deed Bo om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "leende een pen van de buurman",
          "maakte alles schoon met water"
        ],
        "goed": "leende een pen van de buurman",
        "uitleg": "Bo leende een pen van de buurman; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Bo zich?",
        "opties": [
          "trots",
          "dankbaar",
          "vrolijk"
        ],
        "goed": "dankbaar",
        "uitleg": "In de tekst staat dat Bo zich dankbaar voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Iris in de schuur: pen die niet meer schreef",
    "tekst": "Iris zocht iets in de schuur. Daar was een pen die niet meer schreef. Iris was dankbaar. Iris leende een pen van de buurman. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "op het strand",
          "op zolder"
        ],
        "goed": "in de schuur",
        "uitleg": "In het verhaal staat dat Iris zocht iets in de schuur."
      },
      {
        "vraag": "Wat deed Iris om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "leende een pen van de buurman",
          "plakte de band met een setje"
        ],
        "goed": "leende een pen van de buurman",
        "uitleg": "Iris leende een pen van de buurman; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Iris zich?",
        "opties": [
          "behulpzaam",
          "dankbaar",
          "blij"
        ],
        "goed": "dankbaar",
        "uitleg": "In de tekst staat dat Iris zich dankbaar voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Iris in de bibliotheek: omgevallen emmer verf",
    "tekst": "Iris koos een boek in de bibliotheek. Daar was een omgevallen emmer verf. Iris was geschrokken. Iris maakte alles schoon met water. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de dierentuin",
          "op de camping",
          "in de bibliotheek"
        ],
        "goed": "in de bibliotheek",
        "uitleg": "In het verhaal staat dat Iris koos een boek in de bibliotheek."
      },
      {
        "vraag": "Wat deed Iris om het op te lossen?",
        "opties": [
          "gebruikte een lange stok",
          "belde thuis om het voor te lezen",
          "maakte alles schoon met water"
        ],
        "goed": "maakte alles schoon met water",
        "uitleg": "Iris maakte alles schoon met water; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Iris zich?",
        "opties": [
          "geduldig",
          "geschrokken",
          "dankbaar"
        ],
        "goed": "geschrokken",
        "uitleg": "In de tekst staat dat Iris zich geschrokken voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Amir in het zwembad: klasgenoot die alleen stond",
    "tekst": "Amir zwom in het zwembad. Daar was een klasgenoot die alleen stond. Amir was behulpzaam. Amir vroeg hem mee te spelen. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op zolder",
          "in de speeltuin",
          "in het zwembad"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Amir zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Amir om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "zette voer onderaan de boom",
          "zocht het baasje met een foto"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Amir vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Amir zich?",
        "opties": [
          "opgelucht",
          "behulpzaam",
          "vrolijk"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Amir zich behulpzaam voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Nour in het bos: boodschappenlijstje dat weg was",
    "tekst": "Nour liep door het bos. Daar was een boodschappenlijstje dat weg was. Nour was rustig. Nour belde thuis om het voor te lezen. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "in de dierentuin",
          "in het bos"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Nour liep door het bos."
      },
      {
        "vraag": "Wat deed Nour om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "leende een pen van de buurman",
          "deelde ze met de buren"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Nour belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Nour zich?",
        "opties": [
          "rustig",
          "dankbaar",
          "geduldig"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Nour zich rustig voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Amir in de dierentuin: berg wortels die te veel was",
    "tekst": "Amir wandelde door de dierentuin. Daar was een berg wortels die te veel was. Amir was vrolijk. Amir deelde ze met de buren. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "op het schoolplein",
          "in de dierentuin"
        ],
        "goed": "in de dierentuin",
        "uitleg": "In het verhaal staat dat Amir wandelde door de dierentuin."
      },
      {
        "vraag": "Wat deed Amir om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "deelde ze met de buren",
          "gebruikte een lange stok"
        ],
        "goed": "deelde ze met de buren",
        "uitleg": "Amir deelde ze met de buren; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Amir zich?",
        "opties": [
          "verlegen",
          "vrolijk",
          "trots"
        ],
        "goed": "vrolijk",
        "uitleg": "In de tekst staat dat Amir zich vrolijk voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Amir in de bibliotheek: boodschappenlijstje dat weg was",
    "tekst": "Amir koos een boek in de bibliotheek. Daar was een boodschappenlijstje dat weg was. Amir was rustig. Amir belde thuis om het voor te lezen. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "op het schoolplein",
          "in de bibliotheek"
        ],
        "goed": "in de bibliotheek",
        "uitleg": "In het verhaal staat dat Amir koos een boek in de bibliotheek."
      },
      {
        "vraag": "Wat deed Amir om het op te lossen?",
        "opties": [
          "vroeg de buurvrouw om hulp",
          "vroeg hem mee te spelen",
          "belde thuis om het voor te lezen"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Amir belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Amir zich?",
        "opties": [
          "rustig",
          "dankbaar",
          "blij"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Amir zich rustig voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Jara op zolder: boodschappenlijstje dat weg was",
    "tekst": "Jara rommelde op zolder. Daar was een boodschappenlijstje dat weg was. Jara was rustig. Jara belde thuis om het voor te lezen. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op zolder",
          "in de schuur",
          "in de speeltuin"
        ],
        "goed": "op zolder",
        "uitleg": "In het verhaal staat dat Jara rommelde op zolder."
      },
      {
        "vraag": "Wat deed Jara om het op te lossen?",
        "opties": [
          "deelde ze met de buren",
          "belde thuis om het voor te lezen",
          "zocht het baasje met een foto"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Jara belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Jara zich?",
        "opties": [
          "vindingrijk",
          "geschrokken",
          "rustig"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Jara zich rustig voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Lars bij de markt: vogel met een gebroken vleugel",
    "tekst": "Lars hielp op de markt. Daar was een vogel met een gebroken vleugel. Lars was bezorgd. Lars belde de dierenambulance. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de bibliotheek",
          "bij de markt",
          "op de camping"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Lars hielp op de markt."
      },
      {
        "vraag": "Wat deed Lars om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "belde de dierenambulance",
          "maakte alles schoon met water"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Lars belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lars zich?",
        "opties": [
          "trots",
          "verlegen",
          "bezorgd"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Lars zich bezorgd voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Tim in het bos: lekke fietsband",
    "tekst": "Tim liep door het bos. Daar was een lekke fietsband. Tim was trots. Tim plakte de band met een setje. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het zwembad",
          "in het bos",
          "in de bibliotheek"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Tim liep door het bos."
      },
      {
        "vraag": "Wat deed Tim om het op te lossen?",
        "opties": [
          "vroeg de buurvrouw om hulp",
          "plakte de band met een setje",
          "zette voer onderaan de boom"
        ],
        "goed": "plakte de band met een setje",
        "uitleg": "Tim plakte de band met een setje; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Tim zich?",
        "opties": [
          "blij",
          "trots",
          "vrolijk"
        ],
        "goed": "trots",
        "uitleg": "In de tekst staat dat Tim zich trots voelde."
      }
    ]
  },
  {
    "niveau": 1,
    "titel": "Ravi op zolder: omgevallen emmer verf",
    "tekst": "Ravi rommelde op zolder. Daar was een omgevallen emmer verf. Ravi was geschrokken. Ravi maakte alles schoon met water. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op zolder",
          "op het schoolplein",
          "bij de sloot"
        ],
        "goed": "op zolder",
        "uitleg": "In het verhaal staat dat Ravi rommelde op zolder."
      },
      {
        "vraag": "Wat deed Ravi om het op te lossen?",
        "opties": [
          "maakte alles schoon met water",
          "deelde ze met de buren",
          "plakte de stukken met tape"
        ],
        "goed": "maakte alles schoon met water",
        "uitleg": "Ravi maakte alles schoon met water; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Ravi zich?",
        "opties": [
          "geschrokken",
          "verlegen",
          "geduldig"
        ],
        "goed": "geschrokken",
        "uitleg": "In de tekst staat dat Ravi zich geschrokken voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Fee op zolder: pen die niet meer schreef",
    "tekst": "Fee rommelde op zolder. Daar was een pen die niet meer schreef. Fee was dankbaar. Fee leende een pen van de buurman. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "in het bos",
          "op zolder"
        ],
        "goed": "op zolder",
        "uitleg": "In het verhaal staat dat Fee rommelde op zolder."
      },
      {
        "vraag": "Wat deed Fee om het op te lossen?",
        "opties": [
          "leende een pen van de buurman",
          "gebruikte een lange stok",
          "zette voer onderaan de boom"
        ],
        "goed": "leende een pen van de buurman",
        "uitleg": "Fee leende een pen van de buurman; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Fee zich?",
        "opties": [
          "dankbaar",
          "rustig",
          "blij"
        ],
        "goed": "dankbaar",
        "uitleg": "In de tekst staat dat Fee zich dankbaar voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Finn op zolder: vastgelopen vlieger",
    "tekst": "Finn rommelde op zolder. Daar was een vastgelopen vlieger. Finn was vindingrijk. Finn gebruikte een lange stok. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de speeltuin",
          "in de bibliotheek",
          "op zolder"
        ],
        "goed": "op zolder",
        "uitleg": "In het verhaal staat dat Finn rommelde op zolder."
      },
      {
        "vraag": "Wat deed Finn om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "gebruikte een lange stok",
          "zette voer onderaan de boom"
        ],
        "goed": "gebruikte een lange stok",
        "uitleg": "Finn gebruikte een lange stok; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Finn zich?",
        "opties": [
          "behulpzaam",
          "vindingrijk",
          "geschrokken"
        ],
        "goed": "vindingrijk",
        "uitleg": "In de tekst staat dat Finn zich vindingrijk voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Mila bij de markt: boodschappenlijstje dat weg was",
    "tekst": "Mila hielp op de markt. Daar was een boodschappenlijstje dat weg was. Mila was rustig. Mila belde thuis om het voor te lezen. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het zwembad",
          "in de schuur",
          "bij de markt"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Mila hielp op de markt."
      },
      {
        "vraag": "Wat deed Mila om het op te lossen?",
        "opties": [
          "vroeg de buurvrouw om hulp",
          "belde thuis om het voor te lezen",
          "maakte alles schoon met water"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Mila belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Mila zich?",
        "opties": [
          "behulpzaam",
          "trots",
          "rustig"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Mila zich rustig voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Finn in het bos: berg wortels die te veel was",
    "tekst": "Finn liep door het bos. Daar was een berg wortels die te veel was. Finn was vrolijk. Finn deelde ze met de buren. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de sloot",
          "in het bos",
          "in de dierentuin"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Finn liep door het bos."
      },
      {
        "vraag": "Wat deed Finn om het op te lossen?",
        "opties": [
          "gebruikte een lange stok",
          "vroeg de buurvrouw om hulp",
          "deelde ze met de buren"
        ],
        "goed": "deelde ze met de buren",
        "uitleg": "Finn deelde ze met de buren; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Finn zich?",
        "opties": [
          "dankbaar",
          "opgelucht",
          "vrolijk"
        ],
        "goed": "vrolijk",
        "uitleg": "In de tekst staat dat Finn zich vrolijk voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Nour op zolder: omgevallen emmer verf",
    "tekst": "Nour rommelde op zolder. Daar was een omgevallen emmer verf. Nour was geschrokken. Nour maakte alles schoon met water. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "op zolder",
          "in de speeltuin"
        ],
        "goed": "op zolder",
        "uitleg": "In het verhaal staat dat Nour rommelde op zolder."
      },
      {
        "vraag": "Wat deed Nour om het op te lossen?",
        "opties": [
          "deelde ze met de buren",
          "zette voer onderaan de boom",
          "maakte alles schoon met water"
        ],
        "goed": "maakte alles schoon met water",
        "uitleg": "Nour maakte alles schoon met water; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Nour zich?",
        "opties": [
          "opgelucht",
          "rustig",
          "geschrokken"
        ],
        "goed": "geschrokken",
        "uitleg": "In de tekst staat dat Nour zich geschrokken voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Iris op de camping: lekke fietsband",
    "tekst": "Iris kampeerde op de camping. Daar was een lekke fietsband. Iris was trots. Iris plakte de band met een setje. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de dierentuin",
          "in de speeltuin",
          "op de camping"
        ],
        "goed": "op de camping",
        "uitleg": "In het verhaal staat dat Iris kampeerde op de camping."
      },
      {
        "vraag": "Wat deed Iris om het op te lossen?",
        "opties": [
          "plakte de band met een setje",
          "zette voer onderaan de boom",
          "leende een pen van de buurman"
        ],
        "goed": "plakte de band met een setje",
        "uitleg": "Iris plakte de band met een setje; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Iris zich?",
        "opties": [
          "bezorgd",
          "trots",
          "behulpzaam"
        ],
        "goed": "trots",
        "uitleg": "In de tekst staat dat Iris zich trots voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Roos op het schoolplein: verdwaalde puppy",
    "tekst": "Roos stond op het schoolplein. Daar was een verdwaalde puppy. Roos was blij. Roos zocht het baasje met een foto. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "op het schoolplein",
          "bij de sloot"
        ],
        "goed": "op het schoolplein",
        "uitleg": "In het verhaal staat dat Roos stond op het schoolplein."
      },
      {
        "vraag": "Wat deed Roos om het op te lossen?",
        "opties": [
          "zocht het baasje met een foto",
          "belde thuis om het voor te lezen",
          "vroeg hem mee te spelen"
        ],
        "goed": "zocht het baasje met een foto",
        "uitleg": "Roos zocht het baasje met een foto; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Roos zich?",
        "opties": [
          "blij",
          "vindingrijk",
          "verlegen"
        ],
        "goed": "blij",
        "uitleg": "In de tekst staat dat Roos zich blij voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Fee op zolder: vogel met een gebroken vleugel",
    "tekst": "Fee rommelde op zolder. Daar was een vogel met een gebroken vleugel. Fee was bezorgd. Fee belde de dierenambulance. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "op zolder",
          "in de speeltuin"
        ],
        "goed": "op zolder",
        "uitleg": "In het verhaal staat dat Fee rommelde op zolder."
      },
      {
        "vraag": "Wat deed Fee om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "belde de dierenambulance",
          "belde thuis om het voor te lezen"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Fee belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Fee zich?",
        "opties": [
          "vrolijk",
          "opgelucht",
          "bezorgd"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Fee zich bezorgd voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Amir in de schuur: kat hoog in een boom",
    "tekst": "Amir zocht iets in de schuur. Daar was een kat hoog in een boom. Amir was geduldig. Amir zette voer onderaan de boom. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het schoolplein",
          "in de schuur",
          "op zolder"
        ],
        "goed": "in de schuur",
        "uitleg": "In het verhaal staat dat Amir zocht iets in de schuur."
      },
      {
        "vraag": "Wat deed Amir om het op te lossen?",
        "opties": [
          "zette voer onderaan de boom",
          "deelde ze met de buren",
          "leende een pen van de buurman"
        ],
        "goed": "zette voer onderaan de boom",
        "uitleg": "Amir zette voer onderaan de boom; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Amir zich?",
        "opties": [
          "geduldig",
          "verlegen",
          "bezorgd"
        ],
        "goed": "geduldig",
        "uitleg": "In de tekst staat dat Amir zich geduldig voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Lotte op de camping: boodschappenlijstje dat weg was",
    "tekst": "Lotte kampeerde op de camping. Daar was een boodschappenlijstje dat weg was. Lotte was rustig. Lotte belde thuis om het voor te lezen. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "bij de sloot",
          "in de dierentuin"
        ],
        "goed": "op de camping",
        "uitleg": "In het verhaal staat dat Lotte kampeerde op de camping."
      },
      {
        "vraag": "Wat deed Lotte om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "leende een pen van de buurman",
          "vroeg hem mee te spelen"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Lotte belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lotte zich?",
        "opties": [
          "rustig",
          "geduldig",
          "opgelucht"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Lotte zich rustig voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Roos in de dierentuin: klasgenoot die alleen stond",
    "tekst": "Roos wandelde door de dierentuin. Daar was een klasgenoot die alleen stond. Roos was behulpzaam. Roos vroeg hem mee te spelen. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op zolder",
          "in de speeltuin",
          "in de dierentuin"
        ],
        "goed": "in de dierentuin",
        "uitleg": "In het verhaal staat dat Roos wandelde door de dierentuin."
      },
      {
        "vraag": "Wat deed Roos om het op te lossen?",
        "opties": [
          "zette voer onderaan de boom",
          "leende een pen van de buurman",
          "vroeg hem mee te spelen"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Roos vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Roos zich?",
        "opties": [
          "geduldig",
          "geschrokken",
          "behulpzaam"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Roos zich behulpzaam voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Sem bij de sloot: kat hoog in een boom",
    "tekst": "Sem keek bij de sloot. Daar was een kat hoog in een boom. Sem was geduldig. Sem zette voer onderaan de boom. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de sloot",
          "in de speeltuin",
          "in het bos"
        ],
        "goed": "bij de sloot",
        "uitleg": "In het verhaal staat dat Sem keek bij de sloot."
      },
      {
        "vraag": "Wat deed Sem om het op te lossen?",
        "opties": [
          "zette voer onderaan de boom",
          "vroeg hem mee te spelen",
          "plakte de band met een setje"
        ],
        "goed": "zette voer onderaan de boom",
        "uitleg": "Sem zette voer onderaan de boom; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sem zich?",
        "opties": [
          "opgelucht",
          "geschrokken",
          "geduldig"
        ],
        "goed": "geduldig",
        "uitleg": "In de tekst staat dat Sem zich geduldig voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Roos bij de sloot: omgevallen emmer verf",
    "tekst": "Roos keek bij de sloot. Daar was een omgevallen emmer verf. Roos was geschrokken. Roos maakte alles schoon met water. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het zwembad",
          "bij de sloot",
          "op de camping"
        ],
        "goed": "bij de sloot",
        "uitleg": "In het verhaal staat dat Roos keek bij de sloot."
      },
      {
        "vraag": "Wat deed Roos om het op te lossen?",
        "opties": [
          "deelde ze met de buren",
          "maakte alles schoon met water",
          "gebruikte een lange stok"
        ],
        "goed": "maakte alles schoon met water",
        "uitleg": "Roos maakte alles schoon met water; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Roos zich?",
        "opties": [
          "blij",
          "geduldig",
          "geschrokken"
        ],
        "goed": "geschrokken",
        "uitleg": "In de tekst staat dat Roos zich geschrokken voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Roos op het schoolplein: vogel met een gebroken vleugel",
    "tekst": "Roos stond op het schoolplein. Daar was een vogel met een gebroken vleugel. Roos was bezorgd. Roos belde de dierenambulance. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "op het schoolplein",
          "bij de markt"
        ],
        "goed": "op het schoolplein",
        "uitleg": "In het verhaal staat dat Roos stond op het schoolplein."
      },
      {
        "vraag": "Wat deed Roos om het op te lossen?",
        "opties": [
          "gebruikte een lange stok",
          "belde de dierenambulance",
          "maakte alles schoon met water"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Roos belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Roos zich?",
        "opties": [
          "dankbaar",
          "bezorgd",
          "vindingrijk"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Roos zich bezorgd voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Lars in het zwembad: vastgelopen vlieger",
    "tekst": "Lars zwom in het zwembad. Daar was een vastgelopen vlieger. Lars was vindingrijk. Lars gebruikte een lange stok. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "in het zwembad",
          "op de camping"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Lars zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Lars om het op te lossen?",
        "opties": [
          "gebruikte een lange stok",
          "vroeg hem mee te spelen",
          "leende een pen van de buurman"
        ],
        "goed": "gebruikte een lange stok",
        "uitleg": "Lars gebruikte een lange stok; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lars zich?",
        "opties": [
          "trots",
          "vindingrijk",
          "vrolijk"
        ],
        "goed": "vindingrijk",
        "uitleg": "In de tekst staat dat Lars zich vindingrijk voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Jara in de dierentuin: berg wortels die te veel was",
    "tekst": "Jara wandelde door de dierentuin. Daar was een berg wortels die te veel was. Jara was vrolijk. Jara deelde ze met de buren. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op zolder",
          "in de schuur",
          "in de dierentuin"
        ],
        "goed": "in de dierentuin",
        "uitleg": "In het verhaal staat dat Jara wandelde door de dierentuin."
      },
      {
        "vraag": "Wat deed Jara om het op te lossen?",
        "opties": [
          "deelde ze met de buren",
          "belde de dierenambulance",
          "gebruikte een lange stok"
        ],
        "goed": "deelde ze met de buren",
        "uitleg": "Jara deelde ze met de buren; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Jara zich?",
        "opties": [
          "dankbaar",
          "vrolijk",
          "trots"
        ],
        "goed": "vrolijk",
        "uitleg": "In de tekst staat dat Jara zich vrolijk voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Zoë op het strand: omgevallen emmer verf",
    "tekst": "Zoë speelde op het strand. Daar was een omgevallen emmer verf. Zoë was geschrokken. Zoë maakte alles schoon met water. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "in de dierentuin",
          "op zolder"
        ],
        "goed": "op het strand",
        "uitleg": "In het verhaal staat dat Zoë speelde op het strand."
      },
      {
        "vraag": "Wat deed Zoë om het op te lossen?",
        "opties": [
          "maakte alles schoon met water",
          "deelde ze met de buren",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "maakte alles schoon met water",
        "uitleg": "Zoë maakte alles schoon met water; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Zoë zich?",
        "opties": [
          "verlegen",
          "geschrokken",
          "opgelucht"
        ],
        "goed": "geschrokken",
        "uitleg": "In de tekst staat dat Zoë zich geschrokken voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Zoë in het zwembad: verdwaalde puppy",
    "tekst": "Zoë zwom in het zwembad. Daar was een verdwaalde puppy. Zoë was blij. Zoë zocht het baasje met een foto. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "in het zwembad",
          "in de schuur"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Zoë zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Zoë om het op te lossen?",
        "opties": [
          "zocht het baasje met een foto",
          "gebruikte een lange stok",
          "plakte de band met een setje"
        ],
        "goed": "zocht het baasje met een foto",
        "uitleg": "Zoë zocht het baasje met een foto; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Zoë zich?",
        "opties": [
          "blij",
          "vrolijk",
          "dankbaar"
        ],
        "goed": "blij",
        "uitleg": "In de tekst staat dat Zoë zich blij voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Kees bij de markt: gescheurde tekening",
    "tekst": "Kees hielp op de markt. Daar was een gescheurde tekening. Kees was opgelucht. Kees plakte de stukken met tape. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "bij de markt",
          "in de speeltuin"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Kees hielp op de markt."
      },
      {
        "vraag": "Wat deed Kees om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "deelde ze met de buren",
          "leende een pen van de buurman"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Kees plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Kees zich?",
        "opties": [
          "geduldig",
          "opgelucht",
          "vrolijk"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Kees zich opgelucht voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Lars in het bos: vogel met een gebroken vleugel",
    "tekst": "Lars liep door het bos. Daar was een vogel met een gebroken vleugel. Lars was bezorgd. Lars belde de dierenambulance. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "in de bibliotheek",
          "in de dierentuin"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Lars liep door het bos."
      },
      {
        "vraag": "Wat deed Lars om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "leende een pen van de buurman",
          "deelde ze met de buren"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Lars belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lars zich?",
        "opties": [
          "dankbaar",
          "opgelucht",
          "bezorgd"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Lars zich bezorgd voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Bo bij de markt: berg wortels die te veel was",
    "tekst": "Bo hielp op de markt. Daar was een berg wortels die te veel was. Bo was vrolijk. Bo deelde ze met de buren. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "bij de markt",
          "op het schoolplein"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Bo hielp op de markt."
      },
      {
        "vraag": "Wat deed Bo om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "deelde ze met de buren",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "deelde ze met de buren",
        "uitleg": "Bo deelde ze met de buren; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Bo zich?",
        "opties": [
          "bezorgd",
          "geschrokken",
          "vrolijk"
        ],
        "goed": "vrolijk",
        "uitleg": "In de tekst staat dat Bo zich vrolijk voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Lotte op het schoolplein: lekke fietsband",
    "tekst": "Lotte stond op het schoolplein. Daar was een lekke fietsband. Lotte was trots. Lotte plakte de band met een setje. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op zolder",
          "in de schuur",
          "op het schoolplein"
        ],
        "goed": "op het schoolplein",
        "uitleg": "In het verhaal staat dat Lotte stond op het schoolplein."
      },
      {
        "vraag": "Wat deed Lotte om het op te lossen?",
        "opties": [
          "plakte de band met een setje",
          "vroeg de buurvrouw om hulp",
          "gebruikte een lange stok"
        ],
        "goed": "plakte de band met een setje",
        "uitleg": "Lotte plakte de band met een setje; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lotte zich?",
        "opties": [
          "trots",
          "behulpzaam",
          "vrolijk"
        ],
        "goed": "trots",
        "uitleg": "In de tekst staat dat Lotte zich trots voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Bram op de camping: vastgelopen vlieger",
    "tekst": "Bram kampeerde op de camping. Daar was een vastgelopen vlieger. Bram was vindingrijk. Bram gebruikte een lange stok. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "in het bos",
          "op de camping"
        ],
        "goed": "op de camping",
        "uitleg": "In het verhaal staat dat Bram kampeerde op de camping."
      },
      {
        "vraag": "Wat deed Bram om het op te lossen?",
        "opties": [
          "gebruikte een lange stok",
          "deelde ze met de buren",
          "vroeg hem mee te spelen"
        ],
        "goed": "gebruikte een lange stok",
        "uitleg": "Bram gebruikte een lange stok; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Bram zich?",
        "opties": [
          "geduldig",
          "trots",
          "vindingrijk"
        ],
        "goed": "vindingrijk",
        "uitleg": "In de tekst staat dat Bram zich vindingrijk voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Nour in de bibliotheek: kat hoog in een boom",
    "tekst": "Nour koos een boek in de bibliotheek. Daar was een kat hoog in een boom. Nour was geduldig. Nour zette voer onderaan de boom. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de bibliotheek",
          "op de camping",
          "in het bos"
        ],
        "goed": "in de bibliotheek",
        "uitleg": "In het verhaal staat dat Nour koos een boek in de bibliotheek."
      },
      {
        "vraag": "Wat deed Nour om het op te lossen?",
        "opties": [
          "zette voer onderaan de boom",
          "belde de dierenambulance",
          "leende een pen van de buurman"
        ],
        "goed": "zette voer onderaan de boom",
        "uitleg": "Nour zette voer onderaan de boom; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Nour zich?",
        "opties": [
          "vrolijk",
          "bezorgd",
          "geduldig"
        ],
        "goed": "geduldig",
        "uitleg": "In de tekst staat dat Nour zich geduldig voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Sem op het strand: boodschappenlijstje dat weg was",
    "tekst": "Sem speelde op het strand. Daar was een boodschappenlijstje dat weg was. Sem was rustig. Sem belde thuis om het voor te lezen. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "op zolder",
          "in de dierentuin"
        ],
        "goed": "op het strand",
        "uitleg": "In het verhaal staat dat Sem speelde op het strand."
      },
      {
        "vraag": "Wat deed Sem om het op te lossen?",
        "opties": [
          "gebruikte een lange stok",
          "belde thuis om het voor te lezen",
          "maakte alles schoon met water"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Sem belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sem zich?",
        "opties": [
          "behulpzaam",
          "vindingrijk",
          "rustig"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Sem zich rustig voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Nour op zolder: gescheurde tekening",
    "tekst": "Nour rommelde op zolder. Daar was een gescheurde tekening. Nour was opgelucht. Nour plakte de stukken met tape. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op zolder",
          "in het zwembad",
          "in de schuur"
        ],
        "goed": "op zolder",
        "uitleg": "In het verhaal staat dat Nour rommelde op zolder."
      },
      {
        "vraag": "Wat deed Nour om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "vroeg de buurvrouw om hulp",
          "plakte de stukken met tape"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Nour plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Nour zich?",
        "opties": [
          "trots",
          "opgelucht",
          "vindingrijk"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Nour zich opgelucht voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Tim in het bos: pen die niet meer schreef",
    "tekst": "Tim liep door het bos. Daar was een pen die niet meer schreef. Tim was dankbaar. Tim leende een pen van de buurman. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "op de camping",
          "in de bibliotheek"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Tim liep door het bos."
      },
      {
        "vraag": "Wat deed Tim om het op te lossen?",
        "opties": [
          "plakte de band met een setje",
          "leende een pen van de buurman",
          "plakte de stukken met tape"
        ],
        "goed": "leende een pen van de buurman",
        "uitleg": "Tim leende een pen van de buurman; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Tim zich?",
        "opties": [
          "dankbaar",
          "behulpzaam",
          "vrolijk"
        ],
        "goed": "dankbaar",
        "uitleg": "In de tekst staat dat Tim zich dankbaar voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Nour in de speeltuin: klasgenoot die alleen stond",
    "tekst": "Nour was in de speeltuin. Daar was een klasgenoot die alleen stond. Nour was behulpzaam. Nour vroeg hem mee te spelen. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de sloot",
          "in de dierentuin",
          "in de speeltuin"
        ],
        "goed": "in de speeltuin",
        "uitleg": "In het verhaal staat dat Nour was in de speeltuin."
      },
      {
        "vraag": "Wat deed Nour om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "deelde ze met de buren",
          "vroeg hem mee te spelen"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Nour vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Nour zich?",
        "opties": [
          "blij",
          "behulpzaam",
          "bezorgd"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Nour zich behulpzaam voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Lars in de schuur: gescheurde tekening",
    "tekst": "Lars zocht iets in de schuur. Daar was een gescheurde tekening. Lars was opgelucht. Lars plakte de stukken met tape. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "in de schuur",
          "op het schoolplein"
        ],
        "goed": "in de schuur",
        "uitleg": "In het verhaal staat dat Lars zocht iets in de schuur."
      },
      {
        "vraag": "Wat deed Lars om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "zocht het baasje met een foto",
          "gebruikte een lange stok"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Lars plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lars zich?",
        "opties": [
          "opgelucht",
          "vrolijk",
          "trots"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Lars zich opgelucht voelde."
      }
    ]
  },
  {
    "niveau": 2,
    "titel": "Ravi in de schuur: boodschappenlijstje dat weg was",
    "tekst": "Ravi zocht iets in de schuur. Daar was een boodschappenlijstje dat weg was. Ravi was rustig. Ravi belde thuis om het voor te lezen. Daarna ging het goed.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de dierentuin",
          "in de schuur",
          "in de bibliotheek"
        ],
        "goed": "in de schuur",
        "uitleg": "In het verhaal staat dat Ravi zocht iets in de schuur."
      },
      {
        "vraag": "Wat deed Ravi om het op te lossen?",
        "opties": [
          "vroeg de buurvrouw om hulp",
          "belde de dierenambulance",
          "belde thuis om het voor te lezen"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Ravi belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Ravi zich?",
        "opties": [
          "blij",
          "verlegen",
          "rustig"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Ravi zich rustig voelde."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Fee in de speeltuin: gescheurde tekening",
    "tekst": "Fee was in de speeltuin. Plotseling was daar een gescheurde tekening. Dat kwam doordat de wind het papier had meegenomen. Fee wist even niet wat te doen. Na een tijdje bedacht Fee een plan: Fee plakte de stukken met tape. Toen het gelukt was, voelde Fee zich opgelucht. Fee liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de speeltuin",
          "in de schuur",
          "in het bos"
        ],
        "goed": "in de speeltuin",
        "uitleg": "In het verhaal staat dat Fee was in de speeltuin."
      },
      {
        "vraag": "Wat deed Fee om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "plakte de stukken met tape",
          "vroeg hem mee te spelen"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Fee plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Fee zich?",
        "opties": [
          "trots",
          "opgelucht",
          "dankbaar"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Fee zich opgelucht voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de pen was helemaal leeg",
          "er zat een scherf glas in de band",
          "de wind had het papier meegenomen"
        ],
        "goed": "de wind had het papier meegenomen",
        "uitleg": "De tekst zegt: dat kwam doordat de wind had het papier meegenomen."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Sanne in de schuur: vastgelopen vlieger",
    "tekst": "Sanne zocht iets in de schuur. Plotseling was daar een vastgelopen vlieger. Dat kwam doordat het touw om een tak was gedraaid. Sanne wist even niet wat te doen. Na een tijdje bedacht Sanne een plan: Sanne gebruikte een lange stok. Toen het gelukt was, voelde Sanne zich vindingrijk. Sanne liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "op het schoolplein",
          "in de bibliotheek"
        ],
        "goed": "in de schuur",
        "uitleg": "In het verhaal staat dat Sanne zocht iets in de schuur."
      },
      {
        "vraag": "Wat deed Sanne om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "plakte de stukken met tape",
          "gebruikte een lange stok"
        ],
        "goed": "gebruikte een lange stok",
        "uitleg": "Sanne gebruikte een lange stok; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sanne zich?",
        "opties": [
          "vindingrijk",
          "verlegen",
          "opgelucht"
        ],
        "goed": "vindingrijk",
        "uitleg": "In de tekst staat dat Sanne zich vindingrijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de vogel was tegen een raam gevlogen",
          "het touw was om een tak gedraaid",
          "de sleutel lag binnen op de tafel"
        ],
        "goed": "het touw was om een tak gedraaid",
        "uitleg": "De tekst zegt: dat kwam doordat het touw was om een tak gedraaid."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Roos bij de markt: boodschappenlijstje dat weg was",
    "tekst": "Roos hielp op de markt. Plotseling was daar een boodschappenlijstje dat weg was. Dat kwam doordat het lijstje uit de zak was gevallen. Roos was rustig en wist even niet wat te doen. Na een tijdje bedacht Roos een plan: Roos belde thuis om het voor te lezen. Roos liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de dierentuin",
          "in het zwembad",
          "bij de markt"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Roos hielp op de markt."
      },
      {
        "vraag": "Wat deed Roos om het op te lossen?",
        "opties": [
          "deelde ze met de buren",
          "vroeg hem mee te spelen",
          "belde thuis om het voor te lezen"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Roos belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Roos zich?",
        "opties": [
          "blij",
          "rustig",
          "vindingrijk"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Roos zich rustig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de oogst was groter dan verwacht",
          "het lijstje was uit de zak gevallen",
          "de vogel was tegen een raam gevlogen"
        ],
        "goed": "het lijstje was uit de zak gevallen",
        "uitleg": "De tekst zegt: dat kwam doordat het lijstje was uit de zak gevallen."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Lars in de speeltuin: lekke fietsband",
    "tekst": "Lars was in de speeltuin. Plotseling was daar een lekke fietsband. Dat kwam doordat er een scherf glas in de band zat. Lars wist even niet wat te doen. Na een tijdje bedacht Lars een plan: Lars plakte de band met een setje. Toen het gelukt was, voelde Lars zich trots. Lars liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de speeltuin",
          "op de camping",
          "op het schoolplein"
        ],
        "goed": "in de speeltuin",
        "uitleg": "In het verhaal staat dat Lars was in de speeltuin."
      },
      {
        "vraag": "Wat deed Lars om het op te lossen?",
        "opties": [
          "plakte de band met een setje",
          "vroeg hem mee te spelen",
          "maakte alles schoon met water"
        ],
        "goed": "plakte de band met een setje",
        "uitleg": "Lars plakte de band met een setje; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lars zich?",
        "opties": [
          "trots",
          "geschrokken",
          "behulpzaam"
        ],
        "goed": "trots",
        "uitleg": "In de tekst staat dat Lars zich trots voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "het lijstje was uit de zak gevallen",
          "het touw was om een tak gedraaid",
          "er zat een scherf glas in de band"
        ],
        "goed": "er zat een scherf glas in de band",
        "uitleg": "De tekst zegt: dat kwam doordat er zat een scherf glas in de band."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Sanne in de speeltuin: boodschappenlijstje dat weg was",
    "tekst": "Sanne was in de speeltuin. Plotseling was daar een boodschappenlijstje dat weg was. Dat kwam doordat het lijstje uit de zak was gevallen. Sanne was rustig en wist even niet wat te doen. Na een tijdje bedacht Sanne een plan: Sanne belde thuis om het voor te lezen. Sanne liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de markt",
          "in de speeltuin",
          "op de camping"
        ],
        "goed": "in de speeltuin",
        "uitleg": "In het verhaal staat dat Sanne was in de speeltuin."
      },
      {
        "vraag": "Wat deed Sanne om het op te lossen?",
        "opties": [
          "zette voer onderaan de boom",
          "belde thuis om het voor te lezen",
          "plakte de band met een setje"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Sanne belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sanne zich?",
        "opties": [
          "vrolijk",
          "rustig",
          "geduldig"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Sanne zich rustig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de vogel was tegen een raam gevlogen",
          "de wind had het papier meegenomen",
          "het lijstje was uit de zak gevallen"
        ],
        "goed": "het lijstje was uit de zak gevallen",
        "uitleg": "De tekst zegt: dat kwam doordat het lijstje was uit de zak gevallen."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Bram in het zwembad: kat hoog in een boom",
    "tekst": "Bram zwom in het zwembad. Plotseling was daar een kat hoog in een boom. Dat kwam doordat de kat voor een hond was weggerend. Bram was geduldig en wist even niet wat te doen. Na een tijdje bedacht Bram een plan: Bram zette voer onderaan de boom. Bram liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het zwembad",
          "in de schuur",
          "in het bos"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Bram zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Bram om het op te lossen?",
        "opties": [
          "zocht het baasje met een foto",
          "zette voer onderaan de boom",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "zette voer onderaan de boom",
        "uitleg": "Bram zette voer onderaan de boom; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Bram zich?",
        "opties": [
          "geduldig",
          "trots",
          "opgelucht"
        ],
        "goed": "geduldig",
        "uitleg": "In de tekst staat dat Bram zich geduldig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de sleutel lag binnen op de tafel",
          "de kat was voor een hond weggerend",
          "de vogel was tegen een raam gevlogen"
        ],
        "goed": "de kat was voor een hond weggerend",
        "uitleg": "De tekst zegt: dat kwam doordat de kat was voor een hond weggerend."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Lotte in de speeltuin: vogel met een gebroken vleugel",
    "tekst": "Lotte was in de speeltuin. Plotseling was daar een vogel met een gebroken vleugel. Dat kwam doordat de vogel tegen een raam was gevlogen. Lotte was bezorgd en wist even niet wat te doen. Na een tijdje bedacht Lotte een plan: Lotte belde de dierenambulance. Lotte liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het schoolplein",
          "in het zwembad",
          "in de speeltuin"
        ],
        "goed": "in de speeltuin",
        "uitleg": "In het verhaal staat dat Lotte was in de speeltuin."
      },
      {
        "vraag": "Wat deed Lotte om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "deelde ze met de buren",
          "zocht het baasje met een foto"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Lotte belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lotte zich?",
        "opties": [
          "blij",
          "rustig",
          "bezorgd"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Lotte zich bezorgd voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de oogst was groter dan verwacht",
          "de vogel was tegen een raam gevlogen",
          "iemand was tegen de ladder gestoten"
        ],
        "goed": "de vogel was tegen een raam gevlogen",
        "uitleg": "De tekst zegt: dat kwam doordat de vogel was tegen een raam gevlogen."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Tim bij de markt: gescheurde tekening",
    "tekst": "Tim hielp op de markt. Plotseling was daar een gescheurde tekening. Dat kwam doordat de wind het papier had meegenomen. Tim wist even niet wat te doen. Na een tijdje bedacht Tim een plan: Tim plakte de stukken met tape. Toen het gelukt was, voelde Tim zich opgelucht. Tim liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de markt",
          "op de camping",
          "bij de sloot"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Tim hielp op de markt."
      },
      {
        "vraag": "Wat deed Tim om het op te lossen?",
        "opties": [
          "vroeg de buurvrouw om hulp",
          "plakte de stukken met tape",
          "belde thuis om het voor te lezen"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Tim plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Tim zich?",
        "opties": [
          "opgelucht",
          "vindingrijk",
          "verlegen"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Tim zich opgelucht voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de wind had het papier meegenomen",
          "de pen was helemaal leeg",
          "de kat was voor een hond weggerend"
        ],
        "goed": "de wind had het papier meegenomen",
        "uitleg": "De tekst zegt: dat kwam doordat de wind had het papier meegenomen."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Iris in het zwembad: pen die niet meer schreef",
    "tekst": "Iris zwom in het zwembad. Plotseling was daar een pen die niet meer schreef. Dat kwam doordat de pen helemaal leeg was. Iris wist even niet wat te doen. Na een tijdje bedacht Iris een plan: Iris leende een pen van de buurman. Toen het gelukt was, voelde Iris zich dankbaar. Iris liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "in het zwembad",
          "in de dierentuin"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Iris zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Iris om het op te lossen?",
        "opties": [
          "leende een pen van de buurman",
          "plakte de stukken met tape",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "leende een pen van de buurman",
        "uitleg": "Iris leende een pen van de buurman; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Iris zich?",
        "opties": [
          "blij",
          "dankbaar",
          "geschrokken"
        ],
        "goed": "dankbaar",
        "uitleg": "In de tekst staat dat Iris zich dankbaar voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de wind had het papier meegenomen",
          "de pen was helemaal leeg",
          "de sleutel lag binnen op de tafel"
        ],
        "goed": "de pen was helemaal leeg",
        "uitleg": "De tekst zegt: dat kwam doordat de pen was helemaal leeg."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Iris op het strand: kat hoog in een boom",
    "tekst": "Iris speelde op het strand. Plotseling was daar een kat hoog in een boom. Dat kwam doordat de kat voor een hond was weggerend. Iris was geduldig en wist even niet wat te doen. Na een tijdje bedacht Iris een plan: Iris zette voer onderaan de boom. Iris liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het schoolplein",
          "op het strand",
          "in de speeltuin"
        ],
        "goed": "op het strand",
        "uitleg": "In het verhaal staat dat Iris speelde op het strand."
      },
      {
        "vraag": "Wat deed Iris om het op te lossen?",
        "opties": [
          "zette voer onderaan de boom",
          "belde de dierenambulance",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "zette voer onderaan de boom",
        "uitleg": "Iris zette voer onderaan de boom; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Iris zich?",
        "opties": [
          "geduldig",
          "geschrokken",
          "vrolijk"
        ],
        "goed": "geduldig",
        "uitleg": "In de tekst staat dat Iris zich geduldig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de pen was helemaal leeg",
          "er zat een scherf glas in de band",
          "de kat was voor een hond weggerend"
        ],
        "goed": "de kat was voor een hond weggerend",
        "uitleg": "De tekst zegt: dat kwam doordat de kat was voor een hond weggerend."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Bram op de camping: vogel met een gebroken vleugel",
    "tekst": "Bram kampeerde op de camping. Plotseling was daar een vogel met een gebroken vleugel. Dat kwam doordat de vogel tegen een raam was gevlogen. Bram was bezorgd en wist even niet wat te doen. Na een tijdje bedacht Bram een plan: Bram belde de dierenambulance. Bram liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "bij de markt",
          "bij de sloot"
        ],
        "goed": "op de camping",
        "uitleg": "In het verhaal staat dat Bram kampeerde op de camping."
      },
      {
        "vraag": "Wat deed Bram om het op te lossen?",
        "opties": [
          "zette voer onderaan de boom",
          "belde de dierenambulance",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Bram belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Bram zich?",
        "opties": [
          "vrolijk",
          "rustig",
          "bezorgd"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Bram zich bezorgd voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de vogel was tegen een raam gevlogen",
          "er zat een scherf glas in de band",
          "de wind had het papier meegenomen"
        ],
        "goed": "de vogel was tegen een raam gevlogen",
        "uitleg": "De tekst zegt: dat kwam doordat de vogel was tegen een raam gevlogen."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Kees in de dierentuin: kat hoog in een boom",
    "tekst": "Kees wandelde door de dierentuin. Plotseling was daar een kat hoog in een boom. Dat kwam doordat de kat voor een hond was weggerend. Kees was geduldig en wist even niet wat te doen. Na een tijdje bedacht Kees een plan: Kees zette voer onderaan de boom. Kees liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de bibliotheek",
          "bij de markt",
          "in de dierentuin"
        ],
        "goed": "in de dierentuin",
        "uitleg": "In het verhaal staat dat Kees wandelde door de dierentuin."
      },
      {
        "vraag": "Wat deed Kees om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "zette voer onderaan de boom",
          "belde de dierenambulance"
        ],
        "goed": "zette voer onderaan de boom",
        "uitleg": "Kees zette voer onderaan de boom; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Kees zich?",
        "opties": [
          "dankbaar",
          "vindingrijk",
          "geduldig"
        ],
        "goed": "geduldig",
        "uitleg": "In de tekst staat dat Kees zich geduldig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de kat was voor een hond weggerend",
          "de sleutel lag binnen op de tafel",
          "de pen was helemaal leeg"
        ],
        "goed": "de kat was voor een hond weggerend",
        "uitleg": "De tekst zegt: dat kwam doordat de kat was voor een hond weggerend."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Nour in het bos: vastgelopen vlieger",
    "tekst": "Nour liep door het bos. Plotseling was daar een vastgelopen vlieger. Dat kwam doordat het touw om een tak was gedraaid. Nour wist even niet wat te doen. Na een tijdje bedacht Nour een plan: Nour gebruikte een lange stok. Toen het gelukt was, voelde Nour zich vindingrijk. Nour liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "in de dierentuin",
          "in de speeltuin"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Nour liep door het bos."
      },
      {
        "vraag": "Wat deed Nour om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "zocht het baasje met een foto",
          "gebruikte een lange stok"
        ],
        "goed": "gebruikte een lange stok",
        "uitleg": "Nour gebruikte een lange stok; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Nour zich?",
        "opties": [
          "vrolijk",
          "behulpzaam",
          "vindingrijk"
        ],
        "goed": "vindingrijk",
        "uitleg": "In de tekst staat dat Nour zich vindingrijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de pen was helemaal leeg",
          "het touw was om een tak gedraaid",
          "de vogel was tegen een raam gevlogen"
        ],
        "goed": "het touw was om een tak gedraaid",
        "uitleg": "De tekst zegt: dat kwam doordat het touw was om een tak gedraaid."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Tim in het zwembad: dichte deur zonder sleutel",
    "tekst": "Tim zwom in het zwembad. Plotseling was daar een dichte deur zonder sleutel. Dat kwam doordat de sleutel binnen op de tafel lag. Tim was verlegen en wist even niet wat te doen. Na een tijdje bedacht Tim een plan: Tim vroeg de buurvrouw om hulp. Tim liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de speeltuin",
          "in het zwembad",
          "op zolder"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Tim zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Tim om het op te lossen?",
        "opties": [
          "vroeg de buurvrouw om hulp",
          "zette voer onderaan de boom",
          "gebruikte een lange stok"
        ],
        "goed": "vroeg de buurvrouw om hulp",
        "uitleg": "Tim vroeg de buurvrouw om hulp; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Tim zich?",
        "opties": [
          "verlegen",
          "geschrokken",
          "vindingrijk"
        ],
        "goed": "verlegen",
        "uitleg": "In de tekst staat dat Tim zich verlegen voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de vogel was tegen een raam gevlogen",
          "het lijstje was uit de zak gevallen",
          "de sleutel lag binnen op de tafel"
        ],
        "goed": "de sleutel lag binnen op de tafel",
        "uitleg": "De tekst zegt: dat kwam doordat de sleutel lag binnen op de tafel."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Jara op de camping: vogel met een gebroken vleugel",
    "tekst": "Jara kampeerde op de camping. Plotseling was daar een vogel met een gebroken vleugel. Dat kwam doordat de vogel tegen een raam was gevlogen. Jara was bezorgd en wist even niet wat te doen. Na een tijdje bedacht Jara een plan: Jara belde de dierenambulance. Jara liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "in de schuur",
          "op het strand"
        ],
        "goed": "op de camping",
        "uitleg": "In het verhaal staat dat Jara kampeerde op de camping."
      },
      {
        "vraag": "Wat deed Jara om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "plakte de stukken met tape",
          "belde thuis om het voor te lezen"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Jara belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Jara zich?",
        "opties": [
          "bezorgd",
          "vrolijk",
          "opgelucht"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Jara zich bezorgd voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de kat was voor een hond weggerend",
          "de wind had het papier meegenomen",
          "de vogel was tegen een raam gevlogen"
        ],
        "goed": "de vogel was tegen een raam gevlogen",
        "uitleg": "De tekst zegt: dat kwam doordat de vogel was tegen een raam gevlogen."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Iris in het bos: klasgenoot die alleen stond",
    "tekst": "Iris liep door het bos. Plotseling was daar een klasgenoot die alleen stond. Dat kwam doordat hij nieuw was en niemand kende. Iris was behulpzaam en wist even niet wat te doen. Na een tijdje bedacht Iris een plan: Iris vroeg hem mee te spelen. Iris liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "in het bos",
          "op het schoolplein"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Iris liep door het bos."
      },
      {
        "vraag": "Wat deed Iris om het op te lossen?",
        "opties": [
          "plakte de band met een setje",
          "vroeg hem mee te spelen",
          "zocht het baasje met een foto"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Iris vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Iris zich?",
        "opties": [
          "blij",
          "behulpzaam",
          "geschrokken"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Iris zich behulpzaam voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de wind had het papier meegenomen",
          "hij was nieuw en kende niemand",
          "de kat was voor een hond weggerend"
        ],
        "goed": "hij was nieuw en kende niemand",
        "uitleg": "De tekst zegt: dat kwam doordat hij was nieuw en kende niemand."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Tim in het zwembad: klasgenoot die alleen stond",
    "tekst": "Tim zwom in het zwembad. Plotseling was daar een klasgenoot die alleen stond. Dat kwam doordat hij nieuw was en niemand kende. Tim was behulpzaam en wist even niet wat te doen. Na een tijdje bedacht Tim een plan: Tim vroeg hem mee te spelen. Tim liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het zwembad",
          "in de schuur",
          "in het bos"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Tim zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Tim om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "zette voer onderaan de boom",
          "leende een pen van de buurman"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Tim vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Tim zich?",
        "opties": [
          "opgelucht",
          "behulpzaam",
          "blij"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Tim zich behulpzaam voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "hij was nieuw en kende niemand",
          "de pen was helemaal leeg",
          "de sleutel lag binnen op de tafel"
        ],
        "goed": "hij was nieuw en kende niemand",
        "uitleg": "De tekst zegt: dat kwam doordat hij was nieuw en kende niemand."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Roos bij de sloot: lekke fietsband",
    "tekst": "Roos keek bij de sloot. Plotseling was daar een lekke fietsband. Dat kwam doordat er een scherf glas in de band zat. Roos wist even niet wat te doen. Na een tijdje bedacht Roos een plan: Roos plakte de band met een setje. Toen het gelukt was, voelde Roos zich trots. Roos liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "op het strand",
          "bij de sloot"
        ],
        "goed": "bij de sloot",
        "uitleg": "In het verhaal staat dat Roos keek bij de sloot."
      },
      {
        "vraag": "Wat deed Roos om het op te lossen?",
        "opties": [
          "plakte de band met een setje",
          "vroeg de buurvrouw om hulp",
          "belde thuis om het voor te lezen"
        ],
        "goed": "plakte de band met een setje",
        "uitleg": "Roos plakte de band met een setje; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Roos zich?",
        "opties": [
          "verlegen",
          "trots",
          "vrolijk"
        ],
        "goed": "trots",
        "uitleg": "In de tekst staat dat Roos zich trots voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "iemand was tegen de ladder gestoten",
          "de kat was voor een hond weggerend",
          "er zat een scherf glas in de band"
        ],
        "goed": "er zat een scherf glas in de band",
        "uitleg": "De tekst zegt: dat kwam doordat er zat een scherf glas in de band."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Fee op het strand: berg wortels die te veel was",
    "tekst": "Fee speelde op het strand. Plotseling was daar een berg wortels die te veel was. Dat kwam doordat de oogst groter was dan verwacht. Fee wist even niet wat te doen. Na een tijdje bedacht Fee een plan: Fee deelde ze met de buren. Toen het gelukt was, voelde Fee zich vrolijk. Fee liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "in de bibliotheek",
          "in het zwembad"
        ],
        "goed": "op het strand",
        "uitleg": "In het verhaal staat dat Fee speelde op het strand."
      },
      {
        "vraag": "Wat deed Fee om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "deelde ze met de buren",
          "zette voer onderaan de boom"
        ],
        "goed": "deelde ze met de buren",
        "uitleg": "Fee deelde ze met de buren; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Fee zich?",
        "opties": [
          "vrolijk",
          "trots",
          "geduldig"
        ],
        "goed": "vrolijk",
        "uitleg": "In de tekst staat dat Fee zich vrolijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "er zat een scherf glas in de band",
          "de oogst was groter dan verwacht",
          "de vogel was tegen een raam gevlogen"
        ],
        "goed": "de oogst was groter dan verwacht",
        "uitleg": "De tekst zegt: dat kwam doordat de oogst was groter dan verwacht."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Yara op het schoolplein: berg wortels die te veel was",
    "tekst": "Yara stond op het schoolplein. Plotseling was daar een berg wortels die te veel was. Dat kwam doordat de oogst groter was dan verwacht. Yara wist even niet wat te doen. Na een tijdje bedacht Yara een plan: Yara deelde ze met de buren. Toen het gelukt was, voelde Yara zich vrolijk. Yara liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de speeltuin",
          "in de dierentuin",
          "op het schoolplein"
        ],
        "goed": "op het schoolplein",
        "uitleg": "In het verhaal staat dat Yara stond op het schoolplein."
      },
      {
        "vraag": "Wat deed Yara om het op te lossen?",
        "opties": [
          "deelde ze met de buren",
          "zette voer onderaan de boom",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "deelde ze met de buren",
        "uitleg": "Yara deelde ze met de buren; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Yara zich?",
        "opties": [
          "verlegen",
          "vrolijk",
          "behulpzaam"
        ],
        "goed": "vrolijk",
        "uitleg": "In de tekst staat dat Yara zich vrolijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de oogst was groter dan verwacht",
          "de pen was helemaal leeg",
          "het lijstje was uit de zak gevallen"
        ],
        "goed": "de oogst was groter dan verwacht",
        "uitleg": "De tekst zegt: dat kwam doordat de oogst was groter dan verwacht."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Bo in het bos: gescheurde tekening",
    "tekst": "Bo liep door het bos. Plotseling was daar een gescheurde tekening. Dat kwam doordat de wind het papier had meegenomen. Bo wist even niet wat te doen. Na een tijdje bedacht Bo een plan: Bo plakte de stukken met tape. Toen het gelukt was, voelde Bo zich opgelucht. Bo liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "in het bos",
          "in de dierentuin"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Bo liep door het bos."
      },
      {
        "vraag": "Wat deed Bo om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "maakte alles schoon met water",
          "plakte de stukken met tape"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Bo plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Bo zich?",
        "opties": [
          "opgelucht",
          "verlegen",
          "rustig"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Bo zich opgelucht voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de wind had het papier meegenomen",
          "iemand was tegen de ladder gestoten",
          "de oogst was groter dan verwacht"
        ],
        "goed": "de wind had het papier meegenomen",
        "uitleg": "De tekst zegt: dat kwam doordat de wind had het papier meegenomen."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Fee bij de sloot: klasgenoot die alleen stond",
    "tekst": "Fee keek bij de sloot. Plotseling was daar een klasgenoot die alleen stond. Dat kwam doordat hij nieuw was en niemand kende. Fee was behulpzaam en wist even niet wat te doen. Na een tijdje bedacht Fee een plan: Fee vroeg hem mee te spelen. Fee liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de bibliotheek",
          "in de speeltuin",
          "bij de sloot"
        ],
        "goed": "bij de sloot",
        "uitleg": "In het verhaal staat dat Fee keek bij de sloot."
      },
      {
        "vraag": "Wat deed Fee om het op te lossen?",
        "opties": [
          "leende een pen van de buurman",
          "vroeg hem mee te spelen",
          "gebruikte een lange stok"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Fee vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Fee zich?",
        "opties": [
          "vindingrijk",
          "behulpzaam",
          "bezorgd"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Fee zich behulpzaam voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de kat was voor een hond weggerend",
          "de pen was helemaal leeg",
          "hij was nieuw en kende niemand"
        ],
        "goed": "hij was nieuw en kende niemand",
        "uitleg": "De tekst zegt: dat kwam doordat hij was nieuw en kende niemand."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Tim bij de markt: omgevallen emmer verf",
    "tekst": "Tim hielp op de markt. Plotseling was daar een omgevallen emmer verf. Dat kwam doordat iemand tegen de ladder was gestoten. Tim was geschrokken en wist even niet wat te doen. Na een tijdje bedacht Tim een plan: Tim maakte alles schoon met water. Tim liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "in de bibliotheek",
          "bij de markt"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Tim hielp op de markt."
      },
      {
        "vraag": "Wat deed Tim om het op te lossen?",
        "opties": [
          "plakte de band met een setje",
          "zocht het baasje met een foto",
          "maakte alles schoon met water"
        ],
        "goed": "maakte alles schoon met water",
        "uitleg": "Tim maakte alles schoon met water; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Tim zich?",
        "opties": [
          "verlegen",
          "blij",
          "geschrokken"
        ],
        "goed": "geschrokken",
        "uitleg": "In de tekst staat dat Tim zich geschrokken voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de kat was voor een hond weggerend",
          "iemand was tegen de ladder gestoten",
          "het lijstje was uit de zak gevallen"
        ],
        "goed": "iemand was tegen de ladder gestoten",
        "uitleg": "De tekst zegt: dat kwam doordat iemand was tegen de ladder gestoten."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Sem in het zwembad: klasgenoot die alleen stond",
    "tekst": "Sem zwom in het zwembad. Plotseling was daar een klasgenoot die alleen stond. Dat kwam doordat hij nieuw was en niemand kende. Sem was behulpzaam en wist even niet wat te doen. Na een tijdje bedacht Sem een plan: Sem vroeg hem mee te spelen. Sem liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "in het bos",
          "in het zwembad"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Sem zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Sem om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "belde thuis om het voor te lezen",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Sem vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sem zich?",
        "opties": [
          "bezorgd",
          "behulpzaam",
          "vindingrijk"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Sem zich behulpzaam voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "iemand was tegen de ladder gestoten",
          "het touw was om een tak gedraaid",
          "hij was nieuw en kende niemand"
        ],
        "goed": "hij was nieuw en kende niemand",
        "uitleg": "De tekst zegt: dat kwam doordat hij was nieuw en kende niemand."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Sanne bij de sloot: kat hoog in een boom",
    "tekst": "Sanne keek bij de sloot. Plotseling was daar een kat hoog in een boom. Dat kwam doordat de kat voor een hond was weggerend. Sanne was geduldig en wist even niet wat te doen. Na een tijdje bedacht Sanne een plan: Sanne zette voer onderaan de boom. Sanne liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de bibliotheek",
          "in het zwembad",
          "bij de sloot"
        ],
        "goed": "bij de sloot",
        "uitleg": "In het verhaal staat dat Sanne keek bij de sloot."
      },
      {
        "vraag": "Wat deed Sanne om het op te lossen?",
        "opties": [
          "zette voer onderaan de boom",
          "vroeg de buurvrouw om hulp",
          "deelde ze met de buren"
        ],
        "goed": "zette voer onderaan de boom",
        "uitleg": "Sanne zette voer onderaan de boom; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sanne zich?",
        "opties": [
          "vrolijk",
          "verlegen",
          "geduldig"
        ],
        "goed": "geduldig",
        "uitleg": "In de tekst staat dat Sanne zich geduldig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de oogst was groter dan verwacht",
          "de kat was voor een hond weggerend",
          "de vogel was tegen een raam gevlogen"
        ],
        "goed": "de kat was voor een hond weggerend",
        "uitleg": "De tekst zegt: dat kwam doordat de kat was voor een hond weggerend."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Jara op het schoolplein: vogel met een gebroken vleugel",
    "tekst": "Jara stond op het schoolplein. Plotseling was daar een vogel met een gebroken vleugel. Dat kwam doordat de vogel tegen een raam was gevlogen. Jara was bezorgd en wist even niet wat te doen. Na een tijdje bedacht Jara een plan: Jara belde de dierenambulance. Jara liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "op het strand",
          "op het schoolplein"
        ],
        "goed": "op het schoolplein",
        "uitleg": "In het verhaal staat dat Jara stond op het schoolplein."
      },
      {
        "vraag": "Wat deed Jara om het op te lossen?",
        "opties": [
          "deelde ze met de buren",
          "plakte de stukken met tape",
          "belde de dierenambulance"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Jara belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Jara zich?",
        "opties": [
          "bezorgd",
          "verlegen",
          "geduldig"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Jara zich bezorgd voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de vogel was tegen een raam gevlogen",
          "het touw was om een tak gedraaid",
          "de oogst was groter dan verwacht"
        ],
        "goed": "de vogel was tegen een raam gevlogen",
        "uitleg": "De tekst zegt: dat kwam doordat de vogel was tegen een raam gevlogen."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Daan in de bibliotheek: boodschappenlijstje dat weg was",
    "tekst": "Daan koos een boek in de bibliotheek. Plotseling was daar een boodschappenlijstje dat weg was. Dat kwam doordat het lijstje uit de zak was gevallen. Daan was rustig en wist even niet wat te doen. Na een tijdje bedacht Daan een plan: Daan belde thuis om het voor te lezen. Daan liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het schoolplein",
          "in het zwembad",
          "in de bibliotheek"
        ],
        "goed": "in de bibliotheek",
        "uitleg": "In het verhaal staat dat Daan koos een boek in de bibliotheek."
      },
      {
        "vraag": "Wat deed Daan om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "zocht het baasje met een foto",
          "gebruikte een lange stok"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Daan belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Daan zich?",
        "opties": [
          "trots",
          "opgelucht",
          "rustig"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Daan zich rustig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "het lijstje was uit de zak gevallen",
          "de wind had het papier meegenomen",
          "er zat een scherf glas in de band"
        ],
        "goed": "het lijstje was uit de zak gevallen",
        "uitleg": "De tekst zegt: dat kwam doordat het lijstje was uit de zak gevallen."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Iris in de bibliotheek: vogel met een gebroken vleugel",
    "tekst": "Iris koos een boek in de bibliotheek. Plotseling was daar een vogel met een gebroken vleugel. Dat kwam doordat de vogel tegen een raam was gevlogen. Iris was bezorgd en wist even niet wat te doen. Na een tijdje bedacht Iris een plan: Iris belde de dierenambulance. Iris liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de sloot",
          "in de schuur",
          "in de bibliotheek"
        ],
        "goed": "in de bibliotheek",
        "uitleg": "In het verhaal staat dat Iris koos een boek in de bibliotheek."
      },
      {
        "vraag": "Wat deed Iris om het op te lossen?",
        "opties": [
          "maakte alles schoon met water",
          "deelde ze met de buren",
          "belde de dierenambulance"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Iris belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Iris zich?",
        "opties": [
          "bezorgd",
          "trots",
          "verlegen"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Iris zich bezorgd voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de vogel was tegen een raam gevlogen",
          "de sleutel lag binnen op de tafel",
          "hij was nieuw en kende niemand"
        ],
        "goed": "de vogel was tegen een raam gevlogen",
        "uitleg": "De tekst zegt: dat kwam doordat de vogel was tegen een raam gevlogen."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Bram in de bibliotheek: berg wortels die te veel was",
    "tekst": "Bram koos een boek in de bibliotheek. Plotseling was daar een berg wortels die te veel was. Dat kwam doordat de oogst groter was dan verwacht. Bram wist even niet wat te doen. Na een tijdje bedacht Bram een plan: Bram deelde ze met de buren. Toen het gelukt was, voelde Bram zich vrolijk. Bram liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de bibliotheek",
          "bij de sloot",
          "in de dierentuin"
        ],
        "goed": "in de bibliotheek",
        "uitleg": "In het verhaal staat dat Bram koos een boek in de bibliotheek."
      },
      {
        "vraag": "Wat deed Bram om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "plakte de band met een setje",
          "deelde ze met de buren"
        ],
        "goed": "deelde ze met de buren",
        "uitleg": "Bram deelde ze met de buren; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Bram zich?",
        "opties": [
          "vrolijk",
          "geduldig",
          "geschrokken"
        ],
        "goed": "vrolijk",
        "uitleg": "In de tekst staat dat Bram zich vrolijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "er zat een scherf glas in de band",
          "de oogst was groter dan verwacht",
          "de sleutel lag binnen op de tafel"
        ],
        "goed": "de oogst was groter dan verwacht",
        "uitleg": "De tekst zegt: dat kwam doordat de oogst was groter dan verwacht."
      }
    ]
  },
  {
    "niveau": 3,
    "titel": "Lotte op het strand: omgevallen emmer verf",
    "tekst": "Lotte speelde op het strand. Plotseling was daar een omgevallen emmer verf. Dat kwam doordat iemand tegen de ladder was gestoten. Lotte was geschrokken en wist even niet wat te doen. Na een tijdje bedacht Lotte een plan: Lotte maakte alles schoon met water. Lotte liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "op het strand",
          "op het schoolplein"
        ],
        "goed": "op het strand",
        "uitleg": "In het verhaal staat dat Lotte speelde op het strand."
      },
      {
        "vraag": "Wat deed Lotte om het op te lossen?",
        "opties": [
          "maakte alles schoon met water",
          "vroeg de buurvrouw om hulp",
          "plakte de band met een setje"
        ],
        "goed": "maakte alles schoon met water",
        "uitleg": "Lotte maakte alles schoon met water; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lotte zich?",
        "opties": [
          "opgelucht",
          "geschrokken",
          "rustig"
        ],
        "goed": "geschrokken",
        "uitleg": "In de tekst staat dat Lotte zich geschrokken voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "iemand was tegen de ladder gestoten",
          "het hondje was door een gat in het hek gekropen",
          "er zat een scherf glas in de band"
        ],
        "goed": "iemand was tegen de ladder gestoten",
        "uitleg": "De tekst zegt: dat kwam doordat iemand was tegen de ladder gestoten."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Het skelet van je lichaam (verdieping)",
    "tekst": "Een mens heeft ruim tweehonderd botten. Botten beschermen zachte delen zoals je hersenen. Dat is niet altijd zo gebleven: omdat je botten kalk nodig hebben is zuivel of groente met kalk belangrijk. Wie er iets aan wil doen, heeft één simpele stap: beweeg elke dag; botten worden sterker van gebruik.",
    "vragen": [
      {
        "vraag": "Wat lees je over botten?",
        "opties": [
          "Een mens heeft ruim tweehonderd botten",
          "De wind duwt tegen de wieken en laat ze draaien",
          "Diep in de aarde is steen zo heet dat het vloeibaar wordt"
        ],
        "goed": "Een mens heeft ruim tweehonderd botten",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "valt het water als regen naar beneden",
          "is zuivel of groente met kalk belangrijk",
          "passen twee cijfers precies bij die techniek"
        ],
        "goed": "is zuivel of groente met kalk belangrijk",
        "uitleg": "De tekst legt uit dat hierdoor is zuivel of groente met kalk belangrijk."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat je botten kalk nodig hebben",
          "omdat de druk in de vulkaan te hoog wordt",
          "omdat grondstoffen niet oneindig zijn"
        ],
        "goed": "omdat je botten kalk nodig hebben",
        "uitleg": "In de tekst staat: omdat je botten kalk nodig hebben."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Volg altijd de waarschuwingen van deskundigen",
          "Gooi papier, glas en plastic in de juiste bak",
          "Beweeg elke dag; botten worden sterker van gebruik"
        ],
        "goed": "Beweeg elke dag; botten worden sterker van gebruik",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Slaap is werk voor je hersenen (verdieping)",
    "tekst": "Tijdens de slaap ruimen je hersenen afvalstoffen op. Wat je die dag leerde, wordt in je slaap vastgelegd. Dat is niet altijd zo gebleven: omdat licht van een scherm je wakker houdt val je later in slaap dan je wilt. Wie er iets aan wil doen, heeft één simpele stap: leg je telefoon een uur voor bedtijd weg.",
    "vragen": [
      {
        "vraag": "Wat lees je over slaap?",
        "opties": [
          "Een waterschap houdt dijken en sluizen in de gaten",
          "Tijdens de slaap ruimen je hersenen afvalstoffen op",
          "Een computer werkt alleen met de cijfers nul en één"
        ],
        "goed": "Tijdens de slaap ruimen je hersenen afvalstoffen op",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "is zuivel of groente met kalk belangrijk",
          "is waterbeheer hier extra belangrijk",
          "val je later in slaap dan je wilt"
        ],
        "goed": "val je later in slaap dan je wilt",
        "uitleg": "De tekst legt uit dat hierdoor val je later in slaap dan je wilt."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat wind gratis en onbeperkt is",
          "omdat er in de winter hier te weinig eten is",
          "omdat licht van een scherm je wakker houdt"
        ],
        "goed": "omdat licht van een scherm je wakker houdt",
        "uitleg": "In de tekst staat: omdat licht van een scherm je wakker houdt."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Laat bessen in de tuin staan als vogelvoer",
          "Vang regenwater op voor de plantjes",
          "Leg je telefoon een uur voor bedtijd weg"
        ],
        "goed": "Leg je telefoon een uur voor bedtijd weg",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Zoë op het strand: pen die niet meer schreef",
    "tekst": "Zoë speelde op het strand. Plotseling was daar een pen die niet meer schreef. Dat kwam doordat de pen helemaal leeg was. Zoë wist even niet wat te doen. Na een tijdje bedacht Zoë een plan: Zoë leende een pen van de buurman. Toen het gelukt was, voelde Zoë zich dankbaar. Zoë liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "in de speeltuin",
          "op het strand"
        ],
        "goed": "op het strand",
        "uitleg": "In het verhaal staat dat Zoë speelde op het strand."
      },
      {
        "vraag": "Wat deed Zoë om het op te lossen?",
        "opties": [
          "leende een pen van de buurman",
          "plakte de band met een setje",
          "zette voer onderaan de boom"
        ],
        "goed": "leende een pen van de buurman",
        "uitleg": "Zoë leende een pen van de buurman; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Zoë zich?",
        "opties": [
          "dankbaar",
          "blij",
          "vrolijk"
        ],
        "goed": "dankbaar",
        "uitleg": "In de tekst staat dat Zoë zich dankbaar voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de wind had het papier meegenomen",
          "de pen was helemaal leeg",
          "het touw was om een tak gedraaid"
        ],
        "goed": "de pen was helemaal leeg",
        "uitleg": "De tekst zegt: dat kwam doordat de pen was helemaal leeg."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Rustig blijven werkt beter dan trekken",
          "Samen kom je er sneller uit",
          "Help een dier, maar op de juiste manier"
        ],
        "goed": "Samen kom je er sneller uit",
        "uitleg": "Het verhaal laat zien: samen kom je er sneller uit."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Mila bij de markt: vogel met een gebroken vleugel",
    "tekst": "Mila hielp op de markt. Plotseling was daar een vogel met een gebroken vleugel. Dat kwam doordat de vogel tegen een raam was gevlogen. Mila was bezorgd en wist even niet wat te doen. Na een tijdje bedacht Mila een plan: Mila belde de dierenambulance. Mila liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "bij de markt",
          "op de camping"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Mila hielp op de markt."
      },
      {
        "vraag": "Wat deed Mila om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "maakte alles schoon met water",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Mila belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Mila zich?",
        "opties": [
          "bezorgd",
          "geduldig",
          "vindingrijk"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Mila zich bezorgd voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "hij was nieuw en kende niemand",
          "de wind had het papier meegenomen",
          "de vogel was tegen een raam gevlogen"
        ],
        "goed": "de vogel was tegen een raam gevlogen",
        "uitleg": "De tekst zegt: dat kwam doordat de vogel was tegen een raam gevlogen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Rustig blijven werkt beter dan trekken",
          "Zelf iets maken geeft een trots gevoel",
          "Help een dier, maar op de juiste manier"
        ],
        "goed": "Help een dier, maar op de juiste manier",
        "uitleg": "Het verhaal laat zien: help een dier, maar op de juiste manier."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Ravi in de speeltuin: klasgenoot die alleen stond",
    "tekst": "Ravi was in de speeltuin. Plotseling was daar een klasgenoot die alleen stond. Dat kwam doordat hij nieuw was en niemand kende. Ravi was behulpzaam en wist even niet wat te doen. Na een tijdje bedacht Ravi een plan: Ravi vroeg hem mee te spelen. Ravi liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het zwembad",
          "in het bos",
          "in de speeltuin"
        ],
        "goed": "in de speeltuin",
        "uitleg": "In het verhaal staat dat Ravi was in de speeltuin."
      },
      {
        "vraag": "Wat deed Ravi om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "vroeg hem mee te spelen",
          "zocht het baasje met een foto"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Ravi vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Ravi zich?",
        "opties": [
          "blij",
          "vindingrijk",
          "behulpzaam"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Ravi zich behulpzaam voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "hij was nieuw en kende niemand",
          "de sleutel lag binnen op de tafel",
          "de kat was voor een hond weggerend"
        ],
        "goed": "hij was nieuw en kende niemand",
        "uitleg": "De tekst zegt: dat kwam doordat hij was nieuw en kende niemand."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Help een dier, maar op de juiste manier",
          "Doorzetten helpt om iets op te lossen",
          "Iemand erbij vragen kost weinig en helpt veel"
        ],
        "goed": "Iemand erbij vragen kost weinig en helpt veel",
        "uitleg": "Het verhaal laat zien: iemand erbij vragen kost weinig en helpt veel."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Bijen en ons voedsel (verdieping)",
    "tekst": "Bijen brengen stuifmeel van de ene bloem naar de andere. Daardoor groeien er vruchten aan de plant. Dat is niet altijd zo gebleven: omdat er minder wilde bloemen zijn hebben bijen het moeilijker. Wie er iets aan wil doen, heeft één simpele stap: zaai bloemen die het hele seizoen bloeien.",
    "vragen": [
      {
        "vraag": "Wat lees je over bijen?",
        "opties": [
          "Bijen brengen stuifmeel van de ene bloem naar de andere",
          "Een computer werkt alleen met de cijfers nul en één",
          "Een mens heeft ruim tweehonderd botten"
        ],
        "goed": "Bijen brengen stuifmeel van de ene bloem naar de andere",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "passen twee cijfers precies bij die techniek",
          "hebben bijen het moeilijker",
          "scheelt hergebruik veel energie"
        ],
        "goed": "hebben bijen het moeilijker",
        "uitleg": "De tekst legt uit dat hierdoor hebben bijen het moeilijker."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat een groot deel van Nederland laag ligt",
          "omdat er minder wilde bloemen zijn",
          "omdat stroom aan of uit kan staan"
        ],
        "goed": "omdat er minder wilde bloemen zijn",
        "uitleg": "In de tekst staat: omdat er minder wilde bloemen zijn."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Beweeg elke dag; botten worden sterker van gebruik",
          "Zaai bloemen die het hele seizoen bloeien",
          "Laat bessen in de tuin staan als vogelvoer"
        ],
        "goed": "Zaai bloemen die het hele seizoen bloeien",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Zo leest een computer letters (verdieping)",
    "tekst": "Een computer werkt alleen met de cijfers nul en één. Elke letter heeft een eigen rij van die cijfers. Dat is niet altijd zo gebleven: omdat stroom aan of uit kan staan passen twee cijfers precies bij die techniek. Wie er iets aan wil doen, heeft één simpele stap: probeer eens je naam in code te schrijven.",
    "vragen": [
      {
        "vraag": "Wat lees je over computers?",
        "opties": [
          "Een computer werkt alleen met de cijfers nul en één",
          "Diep in de aarde is steen zo heet dat het vloeibaar wordt",
          "Bomen maken zuurstof die mensen en dieren nodig hebben"
        ],
        "goed": "Een computer werkt alleen met de cijfers nul en één",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "scheelt hergebruik veel energie",
          "hebben bijen het moeilijker",
          "passen twee cijfers precies bij die techniek"
        ],
        "goed": "passen twee cijfers precies bij die techniek",
        "uitleg": "De tekst legt uit dat hierdoor passen twee cijfers precies bij die techniek."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat stroom aan of uit kan staan",
          "omdat er in de winter hier te weinig eten is",
          "omdat wind gratis en onbeperkt is"
        ],
        "goed": "omdat stroom aan of uit kan staan",
        "uitleg": "In de tekst staat: omdat stroom aan of uit kan staan."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Probeer eens je naam in code te schrijven",
          "Zet apparaten uit die je niet gebruikt",
          "Laat bessen in de tuin staan als vogelvoer"
        ],
        "goed": "Probeer eens je naam in code te schrijven",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Daan in de speeltuin: vogel met een gebroken vleugel",
    "tekst": "Daan was in de speeltuin. Plotseling was daar een vogel met een gebroken vleugel. Dat kwam doordat de vogel tegen een raam was gevlogen. Daan was bezorgd en wist even niet wat te doen. Na een tijdje bedacht Daan een plan: Daan belde de dierenambulance. Daan liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "in het bos",
          "in de speeltuin"
        ],
        "goed": "in de speeltuin",
        "uitleg": "In het verhaal staat dat Daan was in de speeltuin."
      },
      {
        "vraag": "Wat deed Daan om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "belde de dierenambulance",
          "deelde ze met de buren"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Daan belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Daan zich?",
        "opties": [
          "vindingrijk",
          "geduldig",
          "bezorgd"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Daan zich bezorgd voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de vogel was tegen een raam gevlogen",
          "iemand was tegen de ladder gestoten",
          "de kat was voor een hond weggerend"
        ],
        "goed": "de vogel was tegen een raam gevlogen",
        "uitleg": "De tekst zegt: dat kwam doordat de vogel was tegen een raam gevlogen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Zelf iets maken geeft een trots gevoel",
          "Help een dier, maar op de juiste manier",
          "Samen kom je er sneller uit"
        ],
        "goed": "Help een dier, maar op de juiste manier",
        "uitleg": "Het verhaal laat zien: help een dier, maar op de juiste manier."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Zo werkt een windmolen (verdieping)",
    "tekst": "De wind duwt tegen de wieken en laat ze draaien. In de molen zet een generator die beweging om in stroom. Dat is niet altijd zo gebleven: omdat wind gratis en onbeperkt is is windstroom goedkoper dan olie. Wie er iets aan wil doen, heeft één simpele stap: zet apparaten uit die je niet gebruikt.",
    "vragen": [
      {
        "vraag": "Wat lees je over windmolens?",
        "opties": [
          "De wind duwt tegen de wieken en laat ze draaien",
          "Van oud papier kan nieuw papier gemaakt worden",
          "Diep in de aarde is steen zo heet dat het vloeibaar wordt"
        ],
        "goed": "De wind duwt tegen de wieken en laat ze draaien",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "zitten er dilatatievoegen in het wegdek",
          "passen twee cijfers precies bij die techniek",
          "is windstroom goedkoper dan olie"
        ],
        "goed": "is windstroom goedkoper dan olie",
        "uitleg": "De tekst legt uit dat hierdoor is windstroom goedkoper dan olie."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat wind gratis en onbeperkt is",
          "omdat stroom aan of uit kan staan",
          "omdat er in de winter hier te weinig eten is"
        ],
        "goed": "omdat wind gratis en onbeperkt is",
        "uitleg": "In de tekst staat: omdat wind gratis en onbeperkt is."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Beweeg elke dag; botten worden sterker van gebruik",
          "Zet apparaten uit die je niet gebruikt",
          "Laat bessen in de tuin staan als vogelvoer"
        ],
        "goed": "Zet apparaten uit die je niet gebruikt",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Amir in het zwembad: kat hoog in een boom",
    "tekst": "Amir zwom in het zwembad. Plotseling was daar een kat hoog in een boom. Dat kwam doordat de kat voor een hond was weggerend. Amir was geduldig en wist even niet wat te doen. Na een tijdje bedacht Amir een plan: Amir zette voer onderaan de boom. Amir liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het zwembad",
          "in de dierentuin",
          "bij de markt"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Amir zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Amir om het op te lossen?",
        "opties": [
          "leende een pen van de buurman",
          "zette voer onderaan de boom",
          "plakte de band met een setje"
        ],
        "goed": "zette voer onderaan de boom",
        "uitleg": "Amir zette voer onderaan de boom; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Amir zich?",
        "opties": [
          "blij",
          "geduldig",
          "opgelucht"
        ],
        "goed": "geduldig",
        "uitleg": "In de tekst staat dat Amir zich geduldig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "het touw was om een tak gedraaid",
          "de kat was voor een hond weggerend",
          "iemand was tegen de ladder gestoten"
        ],
        "goed": "de kat was voor een hond weggerend",
        "uitleg": "De tekst zegt: dat kwam doordat de kat was voor een hond weggerend."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Eerlijk opruimen na een ongelukje",
          "Rustig nadenken lost meer op dan zoeken",
          "Rustig blijven werkt beter dan trekken"
        ],
        "goed": "Rustig blijven werkt beter dan trekken",
        "uitleg": "Het verhaal laat zien: rustig blijven werkt beter dan trekken."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Roos bij de sloot: vogel met een gebroken vleugel",
    "tekst": "Roos keek bij de sloot. Plotseling was daar een vogel met een gebroken vleugel. Dat kwam doordat de vogel tegen een raam was gevlogen. Roos was bezorgd en wist even niet wat te doen. Na een tijdje bedacht Roos een plan: Roos belde de dierenambulance. Roos liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het schoolplein",
          "bij de sloot",
          "op het strand"
        ],
        "goed": "bij de sloot",
        "uitleg": "In het verhaal staat dat Roos keek bij de sloot."
      },
      {
        "vraag": "Wat deed Roos om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "plakte de band met een setje",
          "vroeg hem mee te spelen"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Roos belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Roos zich?",
        "opties": [
          "geschrokken",
          "bezorgd",
          "blij"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Roos zich bezorgd voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "iemand was tegen de ladder gestoten",
          "het hondje was door een gat in het hek gekropen",
          "de vogel was tegen een raam gevlogen"
        ],
        "goed": "de vogel was tegen een raam gevlogen",
        "uitleg": "De tekst zegt: dat kwam doordat de vogel was tegen een raam gevlogen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Samen kom je er sneller uit",
          "Doorzetten helpt om iets op te lossen",
          "Help een dier, maar op de juiste manier"
        ],
        "goed": "Help een dier, maar op de juiste manier",
        "uitleg": "Het verhaal laat zien: help een dier, maar op de juiste manier."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Kees op het schoolplein: gescheurde tekening",
    "tekst": "Kees stond op het schoolplein. Plotseling was daar een gescheurde tekening. Dat kwam doordat de wind het papier had meegenomen. Kees wist even niet wat te doen. Na een tijdje bedacht Kees een plan: Kees plakte de stukken met tape. Toen het gelukt was, voelde Kees zich opgelucht. Kees liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het schoolplein",
          "in het bos",
          "bij de sloot"
        ],
        "goed": "op het schoolplein",
        "uitleg": "In het verhaal staat dat Kees stond op het schoolplein."
      },
      {
        "vraag": "Wat deed Kees om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "plakte de band met een setje",
          "maakte alles schoon met water"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Kees plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Kees zich?",
        "opties": [
          "rustig",
          "bezorgd",
          "opgelucht"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Kees zich opgelucht voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "er zat een scherf glas in de band",
          "de wind had het papier meegenomen",
          "de pen was helemaal leeg"
        ],
        "goed": "de wind had het papier meegenomen",
        "uitleg": "De tekst zegt: dat kwam doordat de wind had het papier meegenomen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Rustig blijven werkt beter dan trekken",
          "Van een misser kun je iets nieuws maken",
          "Met een slim idee kom je verder"
        ],
        "goed": "Van een misser kun je iets nieuws maken",
        "uitleg": "Het verhaal laat zien: van een misser kun je iets nieuws maken."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Hoe een vulkaan uitbarst (verdieping)",
    "tekst": "Diep in de aarde is steen zo heet dat het vloeibaar wordt. Dat gesteente heet magma en zoekt een weg naar boven. Dat is niet altijd zo gebleven: omdat de druk in de vulkaan te hoog wordt spuit lava en as naar buiten. Wie er iets aan wil doen, heeft één simpele stap: volg altijd de waarschuwingen van deskundigen.",
    "vragen": [
      {
        "vraag": "Wat lees je over vulkanen?",
        "opties": [
          "Diep in de aarde is steen zo heet dat het vloeibaar wordt",
          "Een computer werkt alleen met de cijfers nul en één",
          "Bijen brengen stuifmeel van de ene bloem naar de andere"
        ],
        "goed": "Diep in de aarde is steen zo heet dat het vloeibaar wordt",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "val je later in slaap dan je wilt",
          "verdwijnen er ook dieren die er wonen",
          "spuit lava en as naar buiten"
        ],
        "goed": "spuit lava en as naar buiten",
        "uitleg": "De tekst legt uit dat hierdoor spuit lava en as naar buiten."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat grondstoffen niet oneindig zijn",
          "omdat je botten kalk nodig hebben",
          "omdat de druk in de vulkaan te hoog wordt"
        ],
        "goed": "omdat de druk in de vulkaan te hoog wordt",
        "uitleg": "In de tekst staat: omdat de druk in de vulkaan te hoog wordt."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Gooi geen doekjes of vet in het toilet",
          "Volg altijd de waarschuwingen van deskundigen",
          "Probeer eens je naam in code te schrijven"
        ],
        "goed": "Volg altijd de waarschuwingen van deskundigen",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Amir in het zwembad: vastgelopen vlieger",
    "tekst": "Amir zwom in het zwembad. Plotseling was daar een vastgelopen vlieger. Dat kwam doordat het touw om een tak was gedraaid. Amir wist even niet wat te doen. Na een tijdje bedacht Amir een plan: Amir gebruikte een lange stok. Toen het gelukt was, voelde Amir zich vindingrijk. Amir liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de markt",
          "in het zwembad",
          "op de camping"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Amir zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Amir om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "maakte alles schoon met water",
          "gebruikte een lange stok"
        ],
        "goed": "gebruikte een lange stok",
        "uitleg": "Amir gebruikte een lange stok; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Amir zich?",
        "opties": [
          "blij",
          "bezorgd",
          "vindingrijk"
        ],
        "goed": "vindingrijk",
        "uitleg": "In de tekst staat dat Amir zich vindingrijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de kat was voor een hond weggerend",
          "het touw was om een tak gedraaid",
          "de sleutel lag binnen op de tafel"
        ],
        "goed": "het touw was om een tak gedraaid",
        "uitleg": "De tekst zegt: dat kwam doordat het touw was om een tak gedraaid."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Van een misser kun je iets nieuws maken",
          "Met een slim idee kom je verder",
          "Om hulp vragen is geen zwakte"
        ],
        "goed": "Met een slim idee kom je verder",
        "uitleg": "Het verhaal laat zien: met een slim idee kom je verder."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Ravi in het zwembad: klasgenoot die alleen stond",
    "tekst": "Ravi zwom in het zwembad. Plotseling was daar een klasgenoot die alleen stond. Dat kwam doordat hij nieuw was en niemand kende. Ravi was behulpzaam en wist even niet wat te doen. Na een tijdje bedacht Ravi een plan: Ravi vroeg hem mee te spelen. Ravi liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de markt",
          "in het zwembad",
          "op de camping"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Ravi zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Ravi om het op te lossen?",
        "opties": [
          "vroeg de buurvrouw om hulp",
          "vroeg hem mee te spelen",
          "maakte alles schoon met water"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Ravi vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Ravi zich?",
        "opties": [
          "vindingrijk",
          "behulpzaam",
          "blij"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Ravi zich behulpzaam voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "iemand was tegen de ladder gestoten",
          "de vogel was tegen een raam gevlogen",
          "hij was nieuw en kende niemand"
        ],
        "goed": "hij was nieuw en kende niemand",
        "uitleg": "De tekst zegt: dat kwam doordat hij was nieuw en kende niemand."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Delen maakt iets leuker",
          "Iemand erbij vragen kost weinig en helpt veel",
          "Van een misser kun je iets nieuws maken"
        ],
        "goed": "Iemand erbij vragen kost weinig en helpt veel",
        "uitleg": "Het verhaal laat zien: iemand erbij vragen kost weinig en helpt veel."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Waar komt regen vandaan? (verdieping)",
    "tekst": "De zon verwarmt water in zeeën en rivieren. Waterdamp stijgt op en wordt in de kou weer druppels. Dat is niet altijd zo gebleven: omdat wolken steeds zwaarder worden valt het water als regen naar beneden. Wie er iets aan wil doen, heeft één simpele stap: vang regenwater op voor de plantjes.",
    "vragen": [
      {
        "vraag": "Wat lees je over de waterkringloop?",
        "opties": [
          "De zon verwarmt water in zeeën en rivieren",
          "Tijdens de slaap ruimen je hersenen afvalstoffen op",
          "Bijen brengen stuifmeel van de ene bloem naar de andere"
        ],
        "goed": "De zon verwarmt water in zeeën en rivieren",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "valt het water als regen naar beneden",
          "is zuivel of groente met kalk belangrijk",
          "passen twee cijfers precies bij die techniek"
        ],
        "goed": "valt het water als regen naar beneden",
        "uitleg": "De tekst legt uit dat hierdoor valt het water als regen naar beneden."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat je botten kalk nodig hebben",
          "omdat licht van een scherm je wakker houdt",
          "omdat wolken steeds zwaarder worden"
        ],
        "goed": "omdat wolken steeds zwaarder worden",
        "uitleg": "In de tekst staat: omdat wolken steeds zwaarder worden."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Zet apparaten uit die je niet gebruikt",
          "Kijk eens naar de vorm van bruggen in je omgeving",
          "Vang regenwater op voor de plantjes"
        ],
        "goed": "Vang regenwater op voor de plantjes",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Waarom bomen belangrijk zijn (verdieping)",
    "tekst": "Bomen maken zuurstof die mensen en dieren nodig hebben. De wortels houden de grond op zijn plek. Dat is niet altijd zo gebleven: omdat er steeds meer bos wordt gekapt verdwijnen er ook dieren die er wonen. Wie er iets aan wil doen, heeft één simpele stap: plant een boom of bescherm het bos in de buurt.",
    "vragen": [
      {
        "vraag": "Wat lees je over bomen?",
        "opties": [
          "Bomen maken zuurstof die mensen en dieren nodig hebben",
          "De zon verwarmt water in zeeën en rivieren",
          "Een waterschap houdt dijken en sluizen in de gaten"
        ],
        "goed": "Bomen maken zuurstof die mensen en dieren nodig hebben",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "zitten er dilatatievoegen in het wegdek",
          "valt het water als regen naar beneden",
          "verdwijnen er ook dieren die er wonen"
        ],
        "goed": "verdwijnen er ook dieren die er wonen",
        "uitleg": "De tekst legt uit dat hierdoor verdwijnen er ook dieren die er wonen."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat wolken steeds zwaarder worden",
          "omdat een groot deel van Nederland laag ligt",
          "omdat er steeds meer bos wordt gekapt"
        ],
        "goed": "omdat er steeds meer bos wordt gekapt",
        "uitleg": "In de tekst staat: omdat er steeds meer bos wordt gekapt."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Zaai bloemen die het hele seizoen bloeien",
          "Probeer eens je naam in code te schrijven",
          "Plant een boom of bescherm het bos in de buurt"
        ],
        "goed": "Plant een boom of bescherm het bos in de buurt",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Lotte in de schuur: boodschappenlijstje dat weg was",
    "tekst": "Lotte zocht iets in de schuur. Plotseling was daar een boodschappenlijstje dat weg was. Dat kwam doordat het lijstje uit de zak was gevallen. Lotte was rustig en wist even niet wat te doen. Na een tijdje bedacht Lotte een plan: Lotte belde thuis om het voor te lezen. Lotte liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "bij de sloot",
          "in de schuur"
        ],
        "goed": "in de schuur",
        "uitleg": "In het verhaal staat dat Lotte zocht iets in de schuur."
      },
      {
        "vraag": "Wat deed Lotte om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "belde thuis om het voor te lezen",
          "deelde ze met de buren"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Lotte belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lotte zich?",
        "opties": [
          "geduldig",
          "rustig",
          "behulpzaam"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Lotte zich rustig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "het lijstje was uit de zak gevallen",
          "de sleutel lag binnen op de tafel",
          "de vogel was tegen een raam gevlogen"
        ],
        "goed": "het lijstje was uit de zak gevallen",
        "uitleg": "De tekst zegt: dat kwam doordat het lijstje was uit de zak gevallen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Van een misser kun je iets nieuws maken",
          "Om hulp vragen is geen zwakte",
          "Rustig nadenken lost meer op dan zoeken"
        ],
        "goed": "Rustig nadenken lost meer op dan zoeken",
        "uitleg": "Het verhaal laat zien: rustig nadenken lost meer op dan zoeken."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Bo in de schuur: lekke fietsband",
    "tekst": "Bo zocht iets in de schuur. Plotseling was daar een lekke fietsband. Dat kwam doordat er een scherf glas in de band zat. Bo wist even niet wat te doen. Na een tijdje bedacht Bo een plan: Bo plakte de band met een setje. Toen het gelukt was, voelde Bo zich trots. Bo liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "in de schuur",
          "in de dierentuin"
        ],
        "goed": "in de schuur",
        "uitleg": "In het verhaal staat dat Bo zocht iets in de schuur."
      },
      {
        "vraag": "Wat deed Bo om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "plakte de band met een setje",
          "belde thuis om het voor te lezen"
        ],
        "goed": "plakte de band met een setje",
        "uitleg": "Bo plakte de band met een setje; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Bo zich?",
        "opties": [
          "trots",
          "dankbaar",
          "vindingrijk"
        ],
        "goed": "trots",
        "uitleg": "In de tekst staat dat Bo zich trots voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de oogst was groter dan verwacht",
          "de wind had het papier meegenomen",
          "er zat een scherf glas in de band"
        ],
        "goed": "er zat een scherf glas in de band",
        "uitleg": "De tekst zegt: dat kwam doordat er zat een scherf glas in de band."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Zelf iets maken geeft een trots gevoel",
          "Help een dier, maar op de juiste manier",
          "Samen kom je er sneller uit"
        ],
        "goed": "Zelf iets maken geeft een trots gevoel",
        "uitleg": "Het verhaal laat zien: zelf iets maken geeft een trots gevoel."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Jara bij de sloot: omgevallen emmer verf",
    "tekst": "Jara keek bij de sloot. Plotseling was daar een omgevallen emmer verf. Dat kwam doordat iemand tegen de ladder was gestoten. Jara was geschrokken en wist even niet wat te doen. Na een tijdje bedacht Jara een plan: Jara maakte alles schoon met water. Jara liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de dierentuin",
          "in de speeltuin",
          "bij de sloot"
        ],
        "goed": "bij de sloot",
        "uitleg": "In het verhaal staat dat Jara keek bij de sloot."
      },
      {
        "vraag": "Wat deed Jara om het op te lossen?",
        "opties": [
          "maakte alles schoon met water",
          "deelde ze met de buren",
          "belde thuis om het voor te lezen"
        ],
        "goed": "maakte alles schoon met water",
        "uitleg": "Jara maakte alles schoon met water; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Jara zich?",
        "opties": [
          "geschrokken",
          "vrolijk",
          "verlegen"
        ],
        "goed": "geschrokken",
        "uitleg": "In de tekst staat dat Jara zich geschrokken voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "iemand was tegen de ladder gestoten",
          "hij was nieuw en kende niemand",
          "het touw was om een tak gedraaid"
        ],
        "goed": "iemand was tegen de ladder gestoten",
        "uitleg": "De tekst zegt: dat kwam doordat iemand was tegen de ladder gestoten."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Met een slim idee kom je verder",
          "Eerlijk opruimen na een ongelukje",
          "Iemand erbij vragen kost weinig en helpt veel"
        ],
        "goed": "Eerlijk opruimen na een ongelukje",
        "uitleg": "Het verhaal laat zien: eerlijk opruimen na een ongelukje."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Roos in de bibliotheek: berg wortels die te veel was",
    "tekst": "Roos koos een boek in de bibliotheek. Plotseling was daar een berg wortels die te veel was. Dat kwam doordat de oogst groter was dan verwacht. Roos wist even niet wat te doen. Na een tijdje bedacht Roos een plan: Roos deelde ze met de buren. Toen het gelukt was, voelde Roos zich vrolijk. Roos liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het schoolplein",
          "in de bibliotheek",
          "bij de markt"
        ],
        "goed": "in de bibliotheek",
        "uitleg": "In het verhaal staat dat Roos koos een boek in de bibliotheek."
      },
      {
        "vraag": "Wat deed Roos om het op te lossen?",
        "opties": [
          "gebruikte een lange stok",
          "deelde ze met de buren",
          "zocht het baasje met een foto"
        ],
        "goed": "deelde ze met de buren",
        "uitleg": "Roos deelde ze met de buren; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Roos zich?",
        "opties": [
          "vrolijk",
          "dankbaar",
          "blij"
        ],
        "goed": "vrolijk",
        "uitleg": "In de tekst staat dat Roos zich vrolijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de sleutel lag binnen op de tafel",
          "de oogst was groter dan verwacht",
          "de pen was helemaal leeg"
        ],
        "goed": "de oogst was groter dan verwacht",
        "uitleg": "De tekst zegt: dat kwam doordat de oogst was groter dan verwacht."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Zelf iets maken geeft een trots gevoel",
          "Samen kom je er sneller uit",
          "Delen maakt iets leuker"
        ],
        "goed": "Delen maakt iets leuker",
        "uitleg": "Het verhaal laat zien: delen maakt iets leuker."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Finn bij de markt: boodschappenlijstje dat weg was",
    "tekst": "Finn hielp op de markt. Plotseling was daar een boodschappenlijstje dat weg was. Dat kwam doordat het lijstje uit de zak was gevallen. Finn was rustig en wist even niet wat te doen. Na een tijdje bedacht Finn een plan: Finn belde thuis om het voor te lezen. Finn liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de markt",
          "bij de sloot",
          "op het strand"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Finn hielp op de markt."
      },
      {
        "vraag": "Wat deed Finn om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "leende een pen van de buurman",
          "gebruikte een lange stok"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Finn belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Finn zich?",
        "opties": [
          "rustig",
          "dankbaar",
          "trots"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Finn zich rustig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "er zat een scherf glas in de band",
          "het touw was om een tak gedraaid",
          "het lijstje was uit de zak gevallen"
        ],
        "goed": "het lijstje was uit de zak gevallen",
        "uitleg": "De tekst zegt: dat kwam doordat het lijstje was uit de zak gevallen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Om hulp vragen is geen zwakte",
          "Iemand erbij vragen kost weinig en helpt veel",
          "Rustig nadenken lost meer op dan zoeken"
        ],
        "goed": "Rustig nadenken lost meer op dan zoeken",
        "uitleg": "Het verhaal laat zien: rustig nadenken lost meer op dan zoeken."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Daan in het bos: boodschappenlijstje dat weg was",
    "tekst": "Daan liep door het bos. Plotseling was daar een boodschappenlijstje dat weg was. Dat kwam doordat het lijstje uit de zak was gevallen. Daan was rustig en wist even niet wat te doen. Na een tijdje bedacht Daan een plan: Daan belde thuis om het voor te lezen. Daan liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "op het schoolplein",
          "op de camping"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Daan liep door het bos."
      },
      {
        "vraag": "Wat deed Daan om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "gebruikte een lange stok",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Daan belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Daan zich?",
        "opties": [
          "rustig",
          "vindingrijk",
          "bezorgd"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Daan zich rustig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de pen was helemaal leeg",
          "het touw was om een tak gedraaid",
          "het lijstje was uit de zak gevallen"
        ],
        "goed": "het lijstje was uit de zak gevallen",
        "uitleg": "De tekst zegt: dat kwam doordat het lijstje was uit de zak gevallen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Doorzetten helpt om iets op te lossen",
          "Rustig blijven werkt beter dan trekken",
          "Rustig nadenken lost meer op dan zoeken"
        ],
        "goed": "Rustig nadenken lost meer op dan zoeken",
        "uitleg": "Het verhaal laat zien: rustig nadenken lost meer op dan zoeken."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Finn in de dierentuin: verdwaalde puppy",
    "tekst": "Finn wandelde door de dierentuin. Plotseling was daar een verdwaalde puppy. Dat kwam doordat het hondje door een gat in het hek was gekropen. Finn wist even niet wat te doen. Na een tijdje bedacht Finn een plan: Finn zocht het baasje met een foto. Toen het gelukt was, voelde Finn zich blij. Finn liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de sloot",
          "in de dierentuin",
          "in het bos"
        ],
        "goed": "in de dierentuin",
        "uitleg": "In het verhaal staat dat Finn wandelde door de dierentuin."
      },
      {
        "vraag": "Wat deed Finn om het op te lossen?",
        "opties": [
          "gebruikte een lange stok",
          "maakte alles schoon met water",
          "zocht het baasje met een foto"
        ],
        "goed": "zocht het baasje met een foto",
        "uitleg": "Finn zocht het baasje met een foto; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Finn zich?",
        "opties": [
          "bezorgd",
          "dankbaar",
          "blij"
        ],
        "goed": "blij",
        "uitleg": "In de tekst staat dat Finn zich blij voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de wind had het papier meegenomen",
          "het hondje was door een gat in het hek gekropen",
          "er zat een scherf glas in de band"
        ],
        "goed": "het hondje was door een gat in het hek gekropen",
        "uitleg": "De tekst zegt: dat kwam doordat het hondje was door een gat in het hek gekropen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Help een dier, maar op de juiste manier",
          "Doorzetten helpt om iets op te lossen",
          "Eerlijk opruimen na een ongelukje"
        ],
        "goed": "Doorzetten helpt om iets op te lossen",
        "uitleg": "Het verhaal laat zien: doorzetten helpt om iets op te lossen."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Jara in het bos: dichte deur zonder sleutel",
    "tekst": "Jara liep door het bos. Plotseling was daar een dichte deur zonder sleutel. Dat kwam doordat de sleutel binnen op de tafel lag. Jara was verlegen en wist even niet wat te doen. Na een tijdje bedacht Jara een plan: Jara vroeg de buurvrouw om hulp. Jara liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "op het schoolplein",
          "op de camping"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Jara liep door het bos."
      },
      {
        "vraag": "Wat deed Jara om het op te lossen?",
        "opties": [
          "zette voer onderaan de boom",
          "gebruikte een lange stok",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "vroeg de buurvrouw om hulp",
        "uitleg": "Jara vroeg de buurvrouw om hulp; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Jara zich?",
        "opties": [
          "verlegen",
          "geschrokken",
          "behulpzaam"
        ],
        "goed": "verlegen",
        "uitleg": "In de tekst staat dat Jara zich verlegen voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de wind had het papier meegenomen",
          "de sleutel lag binnen op de tafel",
          "de oogst was groter dan verwacht"
        ],
        "goed": "de sleutel lag binnen op de tafel",
        "uitleg": "De tekst zegt: dat kwam doordat de sleutel lag binnen op de tafel."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Om hulp vragen is geen zwakte",
          "Samen kom je er sneller uit",
          "Delen maakt iets leuker"
        ],
        "goed": "Om hulp vragen is geen zwakte",
        "uitleg": "Het verhaal laat zien: om hulp vragen is geen zwakte."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Fee op de camping: vastgelopen vlieger",
    "tekst": "Fee kampeerde op de camping. Plotseling was daar een vastgelopen vlieger. Dat kwam doordat het touw om een tak was gedraaid. Fee wist even niet wat te doen. Na een tijdje bedacht Fee een plan: Fee gebruikte een lange stok. Toen het gelukt was, voelde Fee zich vindingrijk. Fee liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "bij de sloot",
          "in de bibliotheek"
        ],
        "goed": "op de camping",
        "uitleg": "In het verhaal staat dat Fee kampeerde op de camping."
      },
      {
        "vraag": "Wat deed Fee om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "deelde ze met de buren",
          "gebruikte een lange stok"
        ],
        "goed": "gebruikte een lange stok",
        "uitleg": "Fee gebruikte een lange stok; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Fee zich?",
        "opties": [
          "dankbaar",
          "bezorgd",
          "vindingrijk"
        ],
        "goed": "vindingrijk",
        "uitleg": "In de tekst staat dat Fee zich vindingrijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "het lijstje was uit de zak gevallen",
          "het touw was om een tak gedraaid",
          "er zat een scherf glas in de band"
        ],
        "goed": "het touw was om een tak gedraaid",
        "uitleg": "De tekst zegt: dat kwam doordat het touw was om een tak gedraaid."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Help een dier, maar op de juiste manier",
          "Met een slim idee kom je verder",
          "Van een misser kun je iets nieuws maken"
        ],
        "goed": "Met een slim idee kom je verder",
        "uitleg": "Het verhaal laat zien: met een slim idee kom je verder."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Sanne in het zwembad: gescheurde tekening",
    "tekst": "Sanne zwom in het zwembad. Plotseling was daar een gescheurde tekening. Dat kwam doordat de wind het papier had meegenomen. Sanne wist even niet wat te doen. Na een tijdje bedacht Sanne een plan: Sanne plakte de stukken met tape. Toen het gelukt was, voelde Sanne zich opgelucht. Sanne liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "in het zwembad",
          "bij de sloot"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Sanne zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Sanne om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "vroeg de buurvrouw om hulp",
          "zette voer onderaan de boom"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Sanne plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sanne zich?",
        "opties": [
          "opgelucht",
          "verlegen",
          "vrolijk"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Sanne zich opgelucht voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "het touw was om een tak gedraaid",
          "de wind had het papier meegenomen",
          "de pen was helemaal leeg"
        ],
        "goed": "de wind had het papier meegenomen",
        "uitleg": "De tekst zegt: dat kwam doordat de wind had het papier meegenomen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Doorzetten helpt om iets op te lossen",
          "Rustig nadenken lost meer op dan zoeken",
          "Van een misser kun je iets nieuws maken"
        ],
        "goed": "Van een misser kun je iets nieuws maken",
        "uitleg": "Het verhaal laat zien: van een misser kun je iets nieuws maken."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Tim op zolder: gescheurde tekening",
    "tekst": "Tim rommelde op zolder. Plotseling was daar een gescheurde tekening. Dat kwam doordat de wind het papier had meegenomen. Tim wist even niet wat te doen. Na een tijdje bedacht Tim een plan: Tim plakte de stukken met tape. Toen het gelukt was, voelde Tim zich opgelucht. Tim liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de bibliotheek",
          "op zolder",
          "op het schoolplein"
        ],
        "goed": "op zolder",
        "uitleg": "In het verhaal staat dat Tim rommelde op zolder."
      },
      {
        "vraag": "Wat deed Tim om het op te lossen?",
        "opties": [
          "vroeg de buurvrouw om hulp",
          "plakte de stukken met tape",
          "leende een pen van de buurman"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Tim plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Tim zich?",
        "opties": [
          "vrolijk",
          "vindingrijk",
          "opgelucht"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Tim zich opgelucht voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de oogst was groter dan verwacht",
          "hij was nieuw en kende niemand",
          "de wind had het papier meegenomen"
        ],
        "goed": "de wind had het papier meegenomen",
        "uitleg": "De tekst zegt: dat kwam doordat de wind had het papier meegenomen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Iemand erbij vragen kost weinig en helpt veel",
          "Van een misser kun je iets nieuws maken",
          "Doorzetten helpt om iets op te lossen"
        ],
        "goed": "Van een misser kun je iets nieuws maken",
        "uitleg": "Het verhaal laat zien: van een misser kun je iets nieuws maken."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "De trek van vogels (verdieping)",
    "tekst": "Sommige vogels vliegen duizenden kilometers naar het zuiden. Ze vinden de weg met de zon, sterren en het magnetisch veld. Dat is niet altijd zo gebleven: omdat er in de winter hier te weinig eten is vertrekken ze in het najaar. Wie er iets aan wil doen, heeft één simpele stap: laat bessen in de tuin staan als vogelvoer.",
    "vragen": [
      {
        "vraag": "Wat lees je over trekvogels?",
        "opties": [
          "Een waterschap houdt dijken en sluizen in de gaten",
          "Een computer werkt alleen met de cijfers nul en één",
          "Sommige vogels vliegen duizenden kilometers naar het zuiden"
        ],
        "goed": "Sommige vogels vliegen duizenden kilometers naar het zuiden",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "vertrekken ze in het najaar",
          "valt het water als regen naar beneden",
          "spuit lava en as naar buiten"
        ],
        "goed": "vertrekken ze in het najaar",
        "uitleg": "De tekst legt uit dat hierdoor vertrekken ze in het najaar."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat de druk in de vulkaan te hoog wordt",
          "omdat je botten kalk nodig hebben",
          "omdat er in de winter hier te weinig eten is"
        ],
        "goed": "omdat er in de winter hier te weinig eten is",
        "uitleg": "In de tekst staat: omdat er in de winter hier te weinig eten is."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Zet apparaten uit die je niet gebruikt",
          "Plant een boom of bescherm het bos in de buurt",
          "Laat bessen in de tuin staan als vogelvoer"
        ],
        "goed": "Laat bessen in de tuin staan als vogelvoer",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 4,
    "titel": "Sem in de speeltuin: gescheurde tekening",
    "tekst": "Sem was in de speeltuin. Plotseling was daar een gescheurde tekening. Dat kwam doordat de wind het papier had meegenomen. Sem wist even niet wat te doen. Na een tijdje bedacht Sem een plan: Sem plakte de stukken met tape. Toen het gelukt was, voelde Sem zich opgelucht. Sem liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de speeltuin",
          "in de dierentuin",
          "op het strand"
        ],
        "goed": "in de speeltuin",
        "uitleg": "In het verhaal staat dat Sem was in de speeltuin."
      },
      {
        "vraag": "Wat deed Sem om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "deelde ze met de buren",
          "plakte de stukken met tape"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Sem plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sem zich?",
        "opties": [
          "dankbaar",
          "opgelucht",
          "verlegen"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Sem zich opgelucht voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "er zat een scherf glas in de band",
          "de wind had het papier meegenomen",
          "de vogel was tegen een raam gevlogen"
        ],
        "goed": "de wind had het papier meegenomen",
        "uitleg": "De tekst zegt: dat kwam doordat de wind had het papier meegenomen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Met een slim idee kom je verder",
          "Delen maakt iets leuker",
          "Van een misser kun je iets nieuws maken"
        ],
        "goed": "Van een misser kun je iets nieuws maken",
        "uitleg": "Het verhaal laat zien: van een misser kun je iets nieuws maken."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Zo werkt een windmolen (uitleg)",
    "tekst": "De wind duwt tegen de wieken en laat ze draaien. In de molen zet een generator die beweging om in stroom. Dat is niet altijd zo gebleven: omdat wind gratis en onbeperkt is is windstroom goedkoper dan olie. Wie er iets aan wil doen, heeft één simpele stap: zet apparaten uit die je niet gebruikt.",
    "vragen": [
      {
        "vraag": "Wat lees je over windmolens?",
        "opties": [
          "Bijen brengen stuifmeel van de ene bloem naar de andere",
          "De wind duwt tegen de wieken en laat ze draaien",
          "Van oud papier kan nieuw papier gemaakt worden"
        ],
        "goed": "De wind duwt tegen de wieken en laat ze draaien",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "is windstroom goedkoper dan olie",
          "valt het water als regen naar beneden",
          "is zuivel of groente met kalk belangrijk"
        ],
        "goed": "is windstroom goedkoper dan olie",
        "uitleg": "De tekst legt uit dat hierdoor is windstroom goedkoper dan olie."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat er steeds meer bos wordt gekapt",
          "omdat stroom aan of uit kan staan",
          "omdat wind gratis en onbeperkt is"
        ],
        "goed": "omdat wind gratis en onbeperkt is",
        "uitleg": "In de tekst staat: omdat wind gratis en onbeperkt is."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Zet apparaten uit die je niet gebruikt",
          "Laat bessen in de tuin staan als vogelvoer",
          "Zaai bloemen die het hele seizoen bloeien"
        ],
        "goed": "Zet apparaten uit die je niet gebruikt",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Mila bij de markt: dichte deur zonder sleutel",
    "tekst": "Mila hielp op de markt. Plotseling was daar een dichte deur zonder sleutel. Dat kwam doordat de sleutel binnen op de tafel lag. Mila was verlegen en wist even niet wat te doen. Na een tijdje bedacht Mila een plan: Mila vroeg de buurvrouw om hulp. Achteraf vertelde Mila het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Mila liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het zwembad",
          "op de camping",
          "bij de markt"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Mila hielp op de markt."
      },
      {
        "vraag": "Wat deed Mila om het op te lossen?",
        "opties": [
          "leende een pen van de buurman",
          "gebruikte een lange stok",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "vroeg de buurvrouw om hulp",
        "uitleg": "Mila vroeg de buurvrouw om hulp; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Mila zich?",
        "opties": [
          "verlegen",
          "blij",
          "rustig"
        ],
        "goed": "verlegen",
        "uitleg": "In de tekst staat dat Mila zich verlegen voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de sleutel lag binnen op de tafel",
          "iemand was tegen de ladder gestoten",
          "er zat een scherf glas in de band"
        ],
        "goed": "de sleutel lag binnen op de tafel",
        "uitleg": "De tekst zegt: dat kwam doordat de sleutel lag binnen op de tafel."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Om hulp vragen is geen zwakte",
          "Van een misser kun je iets nieuws maken",
          "Help een dier, maar op de juiste manier"
        ],
        "goed": "Om hulp vragen is geen zwakte",
        "uitleg": "Het verhaal laat zien: om hulp vragen is geen zwakte."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Waarom bomen belangrijk zijn (uitleg)",
    "tekst": "Bomen maken zuurstof die mensen en dieren nodig hebben. De wortels houden de grond op zijn plek. Dat is niet altijd zo gebleven: omdat er steeds meer bos wordt gekapt verdwijnen er ook dieren die er wonen. Wie er iets aan wil doen, heeft één simpele stap: plant een boom of bescherm het bos in de buurt.",
    "vragen": [
      {
        "vraag": "Wat lees je over bomen?",
        "opties": [
          "Bomen maken zuurstof die mensen en dieren nodig hebben",
          "Diep in de aarde is steen zo heet dat het vloeibaar wordt",
          "Van oud papier kan nieuw papier gemaakt worden"
        ],
        "goed": "Bomen maken zuurstof die mensen en dieren nodig hebben",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "spuit lava en as naar buiten",
          "verdwijnen er ook dieren die er wonen",
          "is waterbeheer hier extra belangrijk"
        ],
        "goed": "verdwijnen er ook dieren die er wonen",
        "uitleg": "De tekst legt uit dat hierdoor verdwijnen er ook dieren die er wonen."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat grondstoffen niet oneindig zijn",
          "omdat er steeds meer bos wordt gekapt",
          "omdat je botten kalk nodig hebben"
        ],
        "goed": "omdat er steeds meer bos wordt gekapt",
        "uitleg": "In de tekst staat: omdat er steeds meer bos wordt gekapt."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Plant een boom of bescherm het bos in de buurt",
          "Zet apparaten uit die je niet gebruikt",
          "Vang regenwater op voor de plantjes"
        ],
        "goed": "Plant een boom of bescherm het bos in de buurt",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Daan op zolder: berg wortels die te veel was",
    "tekst": "Daan rommelde op zolder. Plotseling was daar een berg wortels die te veel was. Dat kwam doordat de oogst groter was dan verwacht. Daan wist even niet wat te doen. Na een tijdje bedacht Daan een plan: Daan deelde ze met de buren. Toen het gelukt was, voelde Daan zich vrolijk. Achteraf vertelde Daan het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Daan liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "in de dierentuin",
          "op zolder"
        ],
        "goed": "op zolder",
        "uitleg": "In het verhaal staat dat Daan rommelde op zolder."
      },
      {
        "vraag": "Wat deed Daan om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "maakte alles schoon met water",
          "deelde ze met de buren"
        ],
        "goed": "deelde ze met de buren",
        "uitleg": "Daan deelde ze met de buren; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Daan zich?",
        "opties": [
          "vrolijk",
          "geschrokken",
          "rustig"
        ],
        "goed": "vrolijk",
        "uitleg": "In de tekst staat dat Daan zich vrolijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de vogel was tegen een raam gevlogen",
          "hij was nieuw en kende niemand",
          "de oogst was groter dan verwacht"
        ],
        "goed": "de oogst was groter dan verwacht",
        "uitleg": "De tekst zegt: dat kwam doordat de oogst was groter dan verwacht."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Delen maakt iets leuker",
          "Zelf iets maken geeft een trots gevoel",
          "Doorzetten helpt om iets op te lossen"
        ],
        "goed": "Delen maakt iets leuker",
        "uitleg": "Het verhaal laat zien: delen maakt iets leuker."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Mila op het schoolplein: verdwaalde puppy",
    "tekst": "Mila stond op het schoolplein. Plotseling was daar een verdwaalde puppy. Dat kwam doordat het hondje door een gat in het hek was gekropen. Mila wist even niet wat te doen. Na een tijdje bedacht Mila een plan: Mila zocht het baasje met een foto. Toen het gelukt was, voelde Mila zich blij. Achteraf vertelde Mila het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Mila liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de dierentuin",
          "op het schoolplein",
          "in de bibliotheek"
        ],
        "goed": "op het schoolplein",
        "uitleg": "In het verhaal staat dat Mila stond op het schoolplein."
      },
      {
        "vraag": "Wat deed Mila om het op te lossen?",
        "opties": [
          "vroeg de buurvrouw om hulp",
          "zocht het baasje met een foto",
          "plakte de band met een setje"
        ],
        "goed": "zocht het baasje met een foto",
        "uitleg": "Mila zocht het baasje met een foto; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Mila zich?",
        "opties": [
          "dankbaar",
          "blij",
          "geschrokken"
        ],
        "goed": "blij",
        "uitleg": "In de tekst staat dat Mila zich blij voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "iemand was tegen de ladder gestoten",
          "de vogel was tegen een raam gevlogen",
          "het hondje was door een gat in het hek gekropen"
        ],
        "goed": "het hondje was door een gat in het hek gekropen",
        "uitleg": "De tekst zegt: dat kwam doordat het hondje was door een gat in het hek gekropen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Doorzetten helpt om iets op te lossen",
          "Help een dier, maar op de juiste manier",
          "Van een misser kun je iets nieuws maken"
        ],
        "goed": "Doorzetten helpt om iets op te lossen",
        "uitleg": "Het verhaal laat zien: doorzetten helpt om iets op te lossen."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Hoe een vulkaan uitbarst (uitleg)",
    "tekst": "Diep in de aarde is steen zo heet dat het vloeibaar wordt. Dat gesteente heet magma en zoekt een weg naar boven. Dat is niet altijd zo gebleven: omdat de druk in de vulkaan te hoog wordt spuit lava en as naar buiten. Wie er iets aan wil doen, heeft één simpele stap: volg altijd de waarschuwingen van deskundigen.",
    "vragen": [
      {
        "vraag": "Wat lees je over vulkanen?",
        "opties": [
          "Bomen maken zuurstof die mensen en dieren nodig hebben",
          "Tijdens de slaap ruimen je hersenen afvalstoffen op",
          "Diep in de aarde is steen zo heet dat het vloeibaar wordt"
        ],
        "goed": "Diep in de aarde is steen zo heet dat het vloeibaar wordt",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "is waterbeheer hier extra belangrijk",
          "spuit lava en as naar buiten",
          "passen twee cijfers precies bij die techniek"
        ],
        "goed": "spuit lava en as naar buiten",
        "uitleg": "De tekst legt uit dat hierdoor spuit lava en as naar buiten."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat de druk in de vulkaan te hoog wordt",
          "omdat stroom aan of uit kan staan",
          "omdat wind gratis en onbeperkt is"
        ],
        "goed": "omdat de druk in de vulkaan te hoog wordt",
        "uitleg": "In de tekst staat: omdat de druk in de vulkaan te hoog wordt."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Zaai bloemen die het hele seizoen bloeien",
          "Volg altijd de waarschuwingen van deskundigen",
          "Kijk eens naar de vorm van bruggen in je omgeving"
        ],
        "goed": "Volg altijd de waarschuwingen van deskundigen",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Bijen en ons voedsel (uitleg)",
    "tekst": "Bijen brengen stuifmeel van de ene bloem naar de andere. Daardoor groeien er vruchten aan de plant. Dat is niet altijd zo gebleven: omdat er minder wilde bloemen zijn hebben bijen het moeilijker. Wie er iets aan wil doen, heeft één simpele stap: zaai bloemen die het hele seizoen bloeien.",
    "vragen": [
      {
        "vraag": "Wat lees je over bijen?",
        "opties": [
          "Tijdens de slaap ruimen je hersenen afvalstoffen op",
          "Sommige vogels vliegen duizenden kilometers naar het zuiden",
          "Bijen brengen stuifmeel van de ene bloem naar de andere"
        ],
        "goed": "Bijen brengen stuifmeel van de ene bloem naar de andere",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "zitten er dilatatievoegen in het wegdek",
          "hebben bijen het moeilijker",
          "verdwijnen er ook dieren die er wonen"
        ],
        "goed": "hebben bijen het moeilijker",
        "uitleg": "De tekst legt uit dat hierdoor hebben bijen het moeilijker."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat ijzer uitzet in de warmte",
          "omdat je botten kalk nodig hebben",
          "omdat er minder wilde bloemen zijn"
        ],
        "goed": "omdat er minder wilde bloemen zijn",
        "uitleg": "In de tekst staat: omdat er minder wilde bloemen zijn."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Zaai bloemen die het hele seizoen bloeien",
          "Gooi geen doekjes of vet in het toilet",
          "Zet apparaten uit die je niet gebruikt"
        ],
        "goed": "Zaai bloemen die het hele seizoen bloeien",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Waarom we afval scheiden (uitleg)",
    "tekst": "Van oud papier kan nieuw papier gemaakt worden. Plastic dat in de natuur belandt, blijft daar honderden jaren liggen. Dat is niet altijd zo gebleven: omdat grondstoffen niet oneindig zijn scheelt hergebruik veel energie. Wie er iets aan wil doen, heeft één simpele stap: gooi papier, glas en plastic in de juiste bak.",
    "vragen": [
      {
        "vraag": "Wat lees je over afval?",
        "opties": [
          "Van oud papier kan nieuw papier gemaakt worden",
          "De wind duwt tegen de wieken en laat ze draaien",
          "Sommige vogels vliegen duizenden kilometers naar het zuiden"
        ],
        "goed": "Van oud papier kan nieuw papier gemaakt worden",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "zitten er dilatatievoegen in het wegdek",
          "scheelt hergebruik veel energie",
          "is zuivel of groente met kalk belangrijk"
        ],
        "goed": "scheelt hergebruik veel energie",
        "uitleg": "De tekst legt uit dat hierdoor scheelt hergebruik veel energie."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat licht van een scherm je wakker houdt",
          "omdat er minder wilde bloemen zijn",
          "omdat grondstoffen niet oneindig zijn"
        ],
        "goed": "omdat grondstoffen niet oneindig zijn",
        "uitleg": "In de tekst staat: omdat grondstoffen niet oneindig zijn."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Laat bessen in de tuin staan als vogelvoer",
          "Gooi papier, glas en plastic in de juiste bak",
          "Plant een boom of bescherm het bos in de buurt"
        ],
        "goed": "Gooi papier, glas en plastic in de juiste bak",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Kees op de camping: boodschappenlijstje dat weg was",
    "tekst": "Kees kampeerde op de camping. Plotseling was daar een boodschappenlijstje dat weg was. Dat kwam doordat het lijstje uit de zak was gevallen. Kees was rustig en wist even niet wat te doen. Na een tijdje bedacht Kees een plan: Kees belde thuis om het voor te lezen. Achteraf vertelde Kees het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Kees liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "bij de sloot",
          "in de bibliotheek"
        ],
        "goed": "op de camping",
        "uitleg": "In het verhaal staat dat Kees kampeerde op de camping."
      },
      {
        "vraag": "Wat deed Kees om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "vroeg de buurvrouw om hulp",
          "vroeg hem mee te spelen"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Kees belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Kees zich?",
        "opties": [
          "rustig",
          "verlegen",
          "vindingrijk"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Kees zich rustig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de oogst was groter dan verwacht",
          "het lijstje was uit de zak gevallen",
          "de sleutel lag binnen op de tafel"
        ],
        "goed": "het lijstje was uit de zak gevallen",
        "uitleg": "De tekst zegt: dat kwam doordat het lijstje was uit de zak gevallen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Delen maakt iets leuker",
          "Eerlijk opruimen na een ongelukje",
          "Rustig nadenken lost meer op dan zoeken"
        ],
        "goed": "Rustig nadenken lost meer op dan zoeken",
        "uitleg": "Het verhaal laat zien: rustig nadenken lost meer op dan zoeken."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Slaap is werk voor je hersenen (uitleg)",
    "tekst": "Tijdens de slaap ruimen je hersenen afvalstoffen op. Wat je die dag leerde, wordt in je slaap vastgelegd. Dat is niet altijd zo gebleven: omdat licht van een scherm je wakker houdt val je later in slaap dan je wilt. Wie er iets aan wil doen, heeft één simpele stap: leg je telefoon een uur voor bedtijd weg.",
    "vragen": [
      {
        "vraag": "Wat lees je over slaap?",
        "opties": [
          "Bijen brengen stuifmeel van de ene bloem naar de andere",
          "Tijdens de slaap ruimen je hersenen afvalstoffen op",
          "Van oud papier kan nieuw papier gemaakt worden"
        ],
        "goed": "Tijdens de slaap ruimen je hersenen afvalstoffen op",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "verdwijnen er ook dieren die er wonen",
          "is zuivel of groente met kalk belangrijk",
          "val je later in slaap dan je wilt"
        ],
        "goed": "val je later in slaap dan je wilt",
        "uitleg": "De tekst legt uit dat hierdoor val je later in slaap dan je wilt."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat stroom aan of uit kan staan",
          "omdat er minder wilde bloemen zijn",
          "omdat licht van een scherm je wakker houdt"
        ],
        "goed": "omdat licht van een scherm je wakker houdt",
        "uitleg": "In de tekst staat: omdat licht van een scherm je wakker houdt."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Gooi papier, glas en plastic in de juiste bak",
          "Probeer eens je naam in code te schrijven",
          "Leg je telefoon een uur voor bedtijd weg"
        ],
        "goed": "Leg je telefoon een uur voor bedtijd weg",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Sem bij de sloot: verdwaalde puppy",
    "tekst": "Sem keek bij de sloot. Plotseling was daar een verdwaalde puppy. Dat kwam doordat het hondje door een gat in het hek was gekropen. Sem wist even niet wat te doen. Na een tijdje bedacht Sem een plan: Sem zocht het baasje met een foto. Toen het gelukt was, voelde Sem zich blij. Achteraf vertelde Sem het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Sem liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op zolder",
          "op de camping",
          "bij de sloot"
        ],
        "goed": "bij de sloot",
        "uitleg": "In het verhaal staat dat Sem keek bij de sloot."
      },
      {
        "vraag": "Wat deed Sem om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "zocht het baasje met een foto",
          "zette voer onderaan de boom"
        ],
        "goed": "zocht het baasje met een foto",
        "uitleg": "Sem zocht het baasje met een foto; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sem zich?",
        "opties": [
          "rustig",
          "geschrokken",
          "blij"
        ],
        "goed": "blij",
        "uitleg": "In de tekst staat dat Sem zich blij voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "er zat een scherf glas in de band",
          "de wind had het papier meegenomen",
          "het hondje was door een gat in het hek gekropen"
        ],
        "goed": "het hondje was door een gat in het hek gekropen",
        "uitleg": "De tekst zegt: dat kwam doordat het hondje was door een gat in het hek gekropen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Samen kom je er sneller uit",
          "Doorzetten helpt om iets op te lossen",
          "Met een slim idee kom je verder"
        ],
        "goed": "Doorzetten helpt om iets op te lossen",
        "uitleg": "Het verhaal laat zien: doorzetten helpt om iets op te lossen."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Zo leest een computer letters (uitleg)",
    "tekst": "Een computer werkt alleen met de cijfers nul en één. Elke letter heeft een eigen rij van die cijfers. Dat is niet altijd zo gebleven: omdat stroom aan of uit kan staan passen twee cijfers precies bij die techniek. Wie er iets aan wil doen, heeft één simpele stap: probeer eens je naam in code te schrijven.",
    "vragen": [
      {
        "vraag": "Wat lees je over computers?",
        "opties": [
          "Een waterschap houdt dijken en sluizen in de gaten",
          "Een computer werkt alleen met de cijfers nul en één",
          "Diep in de aarde is steen zo heet dat het vloeibaar wordt"
        ],
        "goed": "Een computer werkt alleen met de cijfers nul en één",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "zitten er dilatatievoegen in het wegdek",
          "passen twee cijfers precies bij die techniek",
          "hebben bijen het moeilijker"
        ],
        "goed": "passen twee cijfers precies bij die techniek",
        "uitleg": "De tekst legt uit dat hierdoor passen twee cijfers precies bij die techniek."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat wind gratis en onbeperkt is",
          "omdat stroom aan of uit kan staan",
          "omdat een groot deel van Nederland laag ligt"
        ],
        "goed": "omdat stroom aan of uit kan staan",
        "uitleg": "In de tekst staat: omdat stroom aan of uit kan staan."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Probeer eens je naam in code te schrijven",
          "Zet apparaten uit die je niet gebruikt",
          "Volg altijd de waarschuwingen van deskundigen"
        ],
        "goed": "Probeer eens je naam in code te schrijven",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Hoe een brug blijft staan (uitleg)",
    "tekst": "Een boogbrug leidt het gewicht naar de zijkanten. Bij een hangbrug hangt het wegdek aan dikke kabels. Dat is niet altijd zo gebleven: omdat ijzer uitzet in de warmte zitten er dilatatievoegen in het wegdek. Wie er iets aan wil doen, heeft één simpele stap: kijk eens naar de vorm van bruggen in je omgeving.",
    "vragen": [
      {
        "vraag": "Wat lees je over bruggen?",
        "opties": [
          "Een mens heeft ruim tweehonderd botten",
          "Sommige vogels vliegen duizenden kilometers naar het zuiden",
          "Een boogbrug leidt het gewicht naar de zijkanten"
        ],
        "goed": "Een boogbrug leidt het gewicht naar de zijkanten",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "zitten er dilatatievoegen in het wegdek",
          "val je later in slaap dan je wilt",
          "is windstroom goedkoper dan olie"
        ],
        "goed": "zitten er dilatatievoegen in het wegdek",
        "uitleg": "De tekst legt uit dat hierdoor zitten er dilatatievoegen in het wegdek."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat ijzer uitzet in de warmte",
          "omdat een groot deel van Nederland laag ligt",
          "omdat licht van een scherm je wakker houdt"
        ],
        "goed": "omdat ijzer uitzet in de warmte",
        "uitleg": "In de tekst staat: omdat ijzer uitzet in de warmte."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Kijk eens naar de vorm van bruggen in je omgeving",
          "Zet apparaten uit die je niet gebruikt",
          "Gooi papier, glas en plastic in de juiste bak"
        ],
        "goed": "Kijk eens naar de vorm van bruggen in je omgeving",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Kees op zolder: klasgenoot die alleen stond",
    "tekst": "Kees rommelde op zolder. Plotseling was daar een klasgenoot die alleen stond. Dat kwam doordat hij nieuw was en niemand kende. Kees was behulpzaam en wist even niet wat te doen. Na een tijdje bedacht Kees een plan: Kees vroeg hem mee te spelen. Achteraf vertelde Kees het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Kees liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "bij de sloot",
          "op zolder"
        ],
        "goed": "op zolder",
        "uitleg": "In het verhaal staat dat Kees rommelde op zolder."
      },
      {
        "vraag": "Wat deed Kees om het op te lossen?",
        "opties": [
          "vroeg hem mee te spelen",
          "leende een pen van de buurman",
          "belde de dierenambulance"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Kees vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Kees zich?",
        "opties": [
          "behulpzaam",
          "dankbaar",
          "rustig"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Kees zich behulpzaam voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "hij was nieuw en kende niemand",
          "iemand was tegen de ladder gestoten",
          "de wind had het papier meegenomen"
        ],
        "goed": "hij was nieuw en kende niemand",
        "uitleg": "De tekst zegt: dat kwam doordat hij was nieuw en kende niemand."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Delen maakt iets leuker",
          "Iemand erbij vragen kost weinig en helpt veel",
          "Van een misser kun je iets nieuws maken"
        ],
        "goed": "Iemand erbij vragen kost weinig en helpt veel",
        "uitleg": "Het verhaal laat zien: iemand erbij vragen kost weinig en helpt veel."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Het skelet van je lichaam (uitleg)",
    "tekst": "Een mens heeft ruim tweehonderd botten. Botten beschermen zachte delen zoals je hersenen. Dat is niet altijd zo gebleven: omdat je botten kalk nodig hebben is zuivel of groente met kalk belangrijk. Wie er iets aan wil doen, heeft één simpele stap: beweeg elke dag; botten worden sterker van gebruik.",
    "vragen": [
      {
        "vraag": "Wat lees je over botten?",
        "opties": [
          "De wind duwt tegen de wieken en laat ze draaien",
          "Een mens heeft ruim tweehonderd botten",
          "Bijen brengen stuifmeel van de ene bloem naar de andere"
        ],
        "goed": "Een mens heeft ruim tweehonderd botten",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "zitten er dilatatievoegen in het wegdek",
          "is zuivel of groente met kalk belangrijk",
          "is waterbeheer hier extra belangrijk"
        ],
        "goed": "is zuivel of groente met kalk belangrijk",
        "uitleg": "De tekst legt uit dat hierdoor is zuivel of groente met kalk belangrijk."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat een groot deel van Nederland laag ligt",
          "omdat je botten kalk nodig hebben",
          "omdat grondstoffen niet oneindig zijn"
        ],
        "goed": "omdat je botten kalk nodig hebben",
        "uitleg": "In de tekst staat: omdat je botten kalk nodig hebben."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Volg altijd de waarschuwingen van deskundigen",
          "Gooi papier, glas en plastic in de juiste bak",
          "Beweeg elke dag; botten worden sterker van gebruik"
        ],
        "goed": "Beweeg elke dag; botten worden sterker van gebruik",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Iris bij de sloot: vastgelopen vlieger",
    "tekst": "Iris keek bij de sloot. Plotseling was daar een vastgelopen vlieger. Dat kwam doordat het touw om een tak was gedraaid. Iris wist even niet wat te doen. Na een tijdje bedacht Iris een plan: Iris gebruikte een lange stok. Toen het gelukt was, voelde Iris zich vindingrijk. Achteraf vertelde Iris het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Iris liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "bij de sloot",
          "in de dierentuin"
        ],
        "goed": "bij de sloot",
        "uitleg": "In het verhaal staat dat Iris keek bij de sloot."
      },
      {
        "vraag": "Wat deed Iris om het op te lossen?",
        "opties": [
          "gebruikte een lange stok",
          "plakte de band met een setje",
          "zette voer onderaan de boom"
        ],
        "goed": "gebruikte een lange stok",
        "uitleg": "Iris gebruikte een lange stok; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Iris zich?",
        "opties": [
          "geduldig",
          "dankbaar",
          "vindingrijk"
        ],
        "goed": "vindingrijk",
        "uitleg": "In de tekst staat dat Iris zich vindingrijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de oogst was groter dan verwacht",
          "het touw was om een tak gedraaid",
          "de kat was voor een hond weggerend"
        ],
        "goed": "het touw was om een tak gedraaid",
        "uitleg": "De tekst zegt: dat kwam doordat het touw was om een tak gedraaid."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Help een dier, maar op de juiste manier",
          "Van een misser kun je iets nieuws maken",
          "Met een slim idee kom je verder"
        ],
        "goed": "Met een slim idee kom je verder",
        "uitleg": "Het verhaal laat zien: met een slim idee kom je verder."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "De trek van vogels (uitleg)",
    "tekst": "Sommige vogels vliegen duizenden kilometers naar het zuiden. Ze vinden de weg met de zon, sterren en het magnetisch veld. Dat is niet altijd zo gebleven: omdat er in de winter hier te weinig eten is vertrekken ze in het najaar. Wie er iets aan wil doen, heeft één simpele stap: laat bessen in de tuin staan als vogelvoer.",
    "vragen": [
      {
        "vraag": "Wat lees je over trekvogels?",
        "opties": [
          "Tijdens de slaap ruimen je hersenen afvalstoffen op",
          "Sommige vogels vliegen duizenden kilometers naar het zuiden",
          "Een boogbrug leidt het gewicht naar de zijkanten"
        ],
        "goed": "Sommige vogels vliegen duizenden kilometers naar het zuiden",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "vertrekken ze in het najaar",
          "verdwijnen er ook dieren die er wonen",
          "passen twee cijfers precies bij die techniek"
        ],
        "goed": "vertrekken ze in het najaar",
        "uitleg": "De tekst legt uit dat hierdoor vertrekken ze in het najaar."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat er in de winter hier te weinig eten is",
          "omdat wind gratis en onbeperkt is",
          "omdat de druk in de vulkaan te hoog wordt"
        ],
        "goed": "omdat er in de winter hier te weinig eten is",
        "uitleg": "In de tekst staat: omdat er in de winter hier te weinig eten is."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Laat bessen in de tuin staan als vogelvoer",
          "Leg je telefoon een uur voor bedtijd weg",
          "Zet apparaten uit die je niet gebruikt"
        ],
        "goed": "Laat bessen in de tuin staan als vogelvoer",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Bram in het bos: boodschappenlijstje dat weg was",
    "tekst": "Bram liep door het bos. Plotseling was daar een boodschappenlijstje dat weg was. Dat kwam doordat het lijstje uit de zak was gevallen. Bram was rustig en wist even niet wat te doen. Na een tijdje bedacht Bram een plan: Bram belde thuis om het voor te lezen. Achteraf vertelde Bram het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Bram liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de sloot",
          "in de speeltuin",
          "in het bos"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Bram liep door het bos."
      },
      {
        "vraag": "Wat deed Bram om het op te lossen?",
        "opties": [
          "zette voer onderaan de boom",
          "belde thuis om het voor te lezen",
          "leende een pen van de buurman"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Bram belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Bram zich?",
        "opties": [
          "rustig",
          "vrolijk",
          "vindingrijk"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Bram zich rustig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "het lijstje was uit de zak gevallen",
          "het touw was om een tak gedraaid",
          "hij was nieuw en kende niemand"
        ],
        "goed": "het lijstje was uit de zak gevallen",
        "uitleg": "De tekst zegt: dat kwam doordat het lijstje was uit de zak gevallen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Iemand erbij vragen kost weinig en helpt veel",
          "Rustig nadenken lost meer op dan zoeken",
          "Samen kom je er sneller uit"
        ],
        "goed": "Rustig nadenken lost meer op dan zoeken",
        "uitleg": "Het verhaal laat zien: rustig nadenken lost meer op dan zoeken."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Wat doet een waterschap? (uitleg)",
    "tekst": "Een waterschap houdt dijken en sluizen in de gaten. Ook maken ze rioolwater weer schoon. Dat is niet altijd zo gebleven: omdat een groot deel van Nederland laag ligt is waterbeheer hier extra belangrijk. Wie er iets aan wil doen, heeft één simpele stap: gooi geen doekjes of vet in het toilet.",
    "vragen": [
      {
        "vraag": "Wat lees je over waterschappen?",
        "opties": [
          "Een waterschap houdt dijken en sluizen in de gaten",
          "Van oud papier kan nieuw papier gemaakt worden",
          "Bomen maken zuurstof die mensen en dieren nodig hebben"
        ],
        "goed": "Een waterschap houdt dijken en sluizen in de gaten",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "passen twee cijfers precies bij die techniek",
          "is waterbeheer hier extra belangrijk",
          "is windstroom goedkoper dan olie"
        ],
        "goed": "is waterbeheer hier extra belangrijk",
        "uitleg": "De tekst legt uit dat hierdoor is waterbeheer hier extra belangrijk."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat er minder wilde bloemen zijn",
          "omdat wolken steeds zwaarder worden",
          "omdat een groot deel van Nederland laag ligt"
        ],
        "goed": "omdat een groot deel van Nederland laag ligt",
        "uitleg": "In de tekst staat: omdat een groot deel van Nederland laag ligt."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Gooi geen doekjes of vet in het toilet",
          "Vang regenwater op voor de plantjes",
          "Plant een boom of bescherm het bos in de buurt"
        ],
        "goed": "Gooi geen doekjes of vet in het toilet",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Kees in het zwembad: vastgelopen vlieger",
    "tekst": "Kees zwom in het zwembad. Plotseling was daar een vastgelopen vlieger. Dat kwam doordat het touw om een tak was gedraaid. Kees wist even niet wat te doen. Na een tijdje bedacht Kees een plan: Kees gebruikte een lange stok. Toen het gelukt was, voelde Kees zich vindingrijk. Achteraf vertelde Kees het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Kees liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "in het zwembad",
          "in de speeltuin"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Kees zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Kees om het op te lossen?",
        "opties": [
          "vroeg de buurvrouw om hulp",
          "gebruikte een lange stok",
          "leende een pen van de buurman"
        ],
        "goed": "gebruikte een lange stok",
        "uitleg": "Kees gebruikte een lange stok; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Kees zich?",
        "opties": [
          "verlegen",
          "vrolijk",
          "vindingrijk"
        ],
        "goed": "vindingrijk",
        "uitleg": "In de tekst staat dat Kees zich vindingrijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de oogst was groter dan verwacht",
          "de vogel was tegen een raam gevlogen",
          "het touw was om een tak gedraaid"
        ],
        "goed": "het touw was om een tak gedraaid",
        "uitleg": "De tekst zegt: dat kwam doordat het touw was om een tak gedraaid."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Rustig nadenken lost meer op dan zoeken",
          "Eerlijk opruimen na een ongelukje",
          "Met een slim idee kom je verder"
        ],
        "goed": "Met een slim idee kom je verder",
        "uitleg": "Het verhaal laat zien: met een slim idee kom je verder."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Roos in het zwembad: gescheurde tekening",
    "tekst": "Roos zwom in het zwembad. Plotseling was daar een gescheurde tekening. Dat kwam doordat de wind het papier had meegenomen. Roos wist even niet wat te doen. Na een tijdje bedacht Roos een plan: Roos plakte de stukken met tape. Toen het gelukt was, voelde Roos zich opgelucht. Achteraf vertelde Roos het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Roos liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de sloot",
          "in het zwembad",
          "in de schuur"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Roos zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Roos om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "vroeg de buurvrouw om hulp",
          "deelde ze met de buren"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Roos plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Roos zich?",
        "opties": [
          "opgelucht",
          "verlegen",
          "trots"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Roos zich opgelucht voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "er zat een scherf glas in de band",
          "de wind had het papier meegenomen",
          "hij was nieuw en kende niemand"
        ],
        "goed": "de wind had het papier meegenomen",
        "uitleg": "De tekst zegt: dat kwam doordat de wind had het papier meegenomen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Van een misser kun je iets nieuws maken",
          "Rustig nadenken lost meer op dan zoeken",
          "Eerlijk opruimen na een ongelukje"
        ],
        "goed": "Van een misser kun je iets nieuws maken",
        "uitleg": "Het verhaal laat zien: van een misser kun je iets nieuws maken."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Bo bij de markt: pen die niet meer schreef",
    "tekst": "Bo hielp op de markt. Plotseling was daar een pen die niet meer schreef. Dat kwam doordat de pen helemaal leeg was. Bo wist even niet wat te doen. Na een tijdje bedacht Bo een plan: Bo leende een pen van de buurman. Toen het gelukt was, voelde Bo zich dankbaar. Achteraf vertelde Bo het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Bo liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de markt",
          "op het strand",
          "bij de sloot"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Bo hielp op de markt."
      },
      {
        "vraag": "Wat deed Bo om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "deelde ze met de buren",
          "leende een pen van de buurman"
        ],
        "goed": "leende een pen van de buurman",
        "uitleg": "Bo leende een pen van de buurman; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Bo zich?",
        "opties": [
          "dankbaar",
          "verlegen",
          "geduldig"
        ],
        "goed": "dankbaar",
        "uitleg": "In de tekst staat dat Bo zich dankbaar voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de pen was helemaal leeg",
          "het touw was om een tak gedraaid",
          "iemand was tegen de ladder gestoten"
        ],
        "goed": "de pen was helemaal leeg",
        "uitleg": "De tekst zegt: dat kwam doordat de pen was helemaal leeg."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Help een dier, maar op de juiste manier",
          "Samen kom je er sneller uit",
          "Om hulp vragen is geen zwakte"
        ],
        "goed": "Samen kom je er sneller uit",
        "uitleg": "Het verhaal laat zien: samen kom je er sneller uit."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Waar komt regen vandaan? (uitleg)",
    "tekst": "De zon verwarmt water in zeeën en rivieren. Waterdamp stijgt op en wordt in de kou weer druppels. Dat is niet altijd zo gebleven: omdat wolken steeds zwaarder worden valt het water als regen naar beneden. Wie er iets aan wil doen, heeft één simpele stap: vang regenwater op voor de plantjes.",
    "vragen": [
      {
        "vraag": "Wat lees je over de waterkringloop?",
        "opties": [
          "De zon verwarmt water in zeeën en rivieren",
          "Bijen brengen stuifmeel van de ene bloem naar de andere",
          "Van oud papier kan nieuw papier gemaakt worden"
        ],
        "goed": "De zon verwarmt water in zeeën en rivieren",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "verdwijnen er ook dieren die er wonen",
          "is waterbeheer hier extra belangrijk",
          "valt het water als regen naar beneden"
        ],
        "goed": "valt het water als regen naar beneden",
        "uitleg": "De tekst legt uit dat hierdoor valt het water als regen naar beneden."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat de druk in de vulkaan te hoog wordt",
          "omdat wolken steeds zwaarder worden",
          "omdat grondstoffen niet oneindig zijn"
        ],
        "goed": "omdat wolken steeds zwaarder worden",
        "uitleg": "In de tekst staat: omdat wolken steeds zwaarder worden."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Zaai bloemen die het hele seizoen bloeien",
          "Probeer eens je naam in code te schrijven",
          "Vang regenwater op voor de plantjes"
        ],
        "goed": "Vang regenwater op voor de plantjes",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Zoë in het zwembad: lekke fietsband",
    "tekst": "Zoë zwom in het zwembad. Plotseling was daar een lekke fietsband. Dat kwam doordat er een scherf glas in de band zat. Zoë wist even niet wat te doen. Na een tijdje bedacht Zoë een plan: Zoë plakte de band met een setje. Toen het gelukt was, voelde Zoë zich trots. Achteraf vertelde Zoë het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Zoë liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "in de dierentuin",
          "in het zwembad"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Zoë zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Zoë om het op te lossen?",
        "opties": [
          "plakte de band met een setje",
          "zette voer onderaan de boom",
          "belde thuis om het voor te lezen"
        ],
        "goed": "plakte de band met een setje",
        "uitleg": "Zoë plakte de band met een setje; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Zoë zich?",
        "opties": [
          "trots",
          "vindingrijk",
          "rustig"
        ],
        "goed": "trots",
        "uitleg": "In de tekst staat dat Zoë zich trots voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "hij was nieuw en kende niemand",
          "de oogst was groter dan verwacht",
          "er zat een scherf glas in de band"
        ],
        "goed": "er zat een scherf glas in de band",
        "uitleg": "De tekst zegt: dat kwam doordat er zat een scherf glas in de band."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Zelf iets maken geeft een trots gevoel",
          "Met een slim idee kom je verder",
          "Iemand erbij vragen kost weinig en helpt veel"
        ],
        "goed": "Zelf iets maken geeft een trots gevoel",
        "uitleg": "Het verhaal laat zien: zelf iets maken geeft een trots gevoel."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Amir in het bos: pen die niet meer schreef",
    "tekst": "Amir liep door het bos. Plotseling was daar een pen die niet meer schreef. Dat kwam doordat de pen helemaal leeg was. Amir wist even niet wat te doen. Na een tijdje bedacht Amir een plan: Amir leende een pen van de buurman. Toen het gelukt was, voelde Amir zich dankbaar. Achteraf vertelde Amir het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Amir liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de markt",
          "in het bos",
          "op het strand"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Amir liep door het bos."
      },
      {
        "vraag": "Wat deed Amir om het op te lossen?",
        "opties": [
          "maakte alles schoon met water",
          "leende een pen van de buurman",
          "vroeg hem mee te spelen"
        ],
        "goed": "leende een pen van de buurman",
        "uitleg": "Amir leende een pen van de buurman; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Amir zich?",
        "opties": [
          "dankbaar",
          "geduldig",
          "geschrokken"
        ],
        "goed": "dankbaar",
        "uitleg": "In de tekst staat dat Amir zich dankbaar voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de sleutel lag binnen op de tafel",
          "de pen was helemaal leeg",
          "het touw was om een tak gedraaid"
        ],
        "goed": "de pen was helemaal leeg",
        "uitleg": "De tekst zegt: dat kwam doordat de pen was helemaal leeg."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Samen kom je er sneller uit",
          "Zelf iets maken geeft een trots gevoel",
          "Met een slim idee kom je verder"
        ],
        "goed": "Samen kom je er sneller uit",
        "uitleg": "Het verhaal laat zien: samen kom je er sneller uit."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Jara op zolder: omgevallen emmer verf",
    "tekst": "Jara rommelde op zolder. Plotseling was daar een omgevallen emmer verf. Dat kwam doordat iemand tegen de ladder was gestoten. Jara was geschrokken en wist even niet wat te doen. Na een tijdje bedacht Jara een plan: Jara maakte alles schoon met water. Achteraf vertelde Jara het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Jara liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "op zolder",
          "op het strand"
        ],
        "goed": "op zolder",
        "uitleg": "In het verhaal staat dat Jara rommelde op zolder."
      },
      {
        "vraag": "Wat deed Jara om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "maakte alles schoon met water",
          "belde thuis om het voor te lezen"
        ],
        "goed": "maakte alles schoon met water",
        "uitleg": "Jara maakte alles schoon met water; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Jara zich?",
        "opties": [
          "vrolijk",
          "blij",
          "geschrokken"
        ],
        "goed": "geschrokken",
        "uitleg": "In de tekst staat dat Jara zich geschrokken voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "iemand was tegen de ladder gestoten",
          "de sleutel lag binnen op de tafel",
          "de pen was helemaal leeg"
        ],
        "goed": "iemand was tegen de ladder gestoten",
        "uitleg": "De tekst zegt: dat kwam doordat iemand was tegen de ladder gestoten."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Eerlijk opruimen na een ongelukje",
          "Van een misser kun je iets nieuws maken",
          "Delen maakt iets leuker"
        ],
        "goed": "Eerlijk opruimen na een ongelukje",
        "uitleg": "Het verhaal laat zien: eerlijk opruimen na een ongelukje."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Sem in het zwembad: berg wortels die te veel was",
    "tekst": "Sem zwom in het zwembad. Plotseling was daar een berg wortels die te veel was. Dat kwam doordat de oogst groter was dan verwacht. Sem wist even niet wat te doen. Na een tijdje bedacht Sem een plan: Sem deelde ze met de buren. Toen het gelukt was, voelde Sem zich vrolijk. Achteraf vertelde Sem het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Sem liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "in de bibliotheek",
          "in het zwembad"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Sem zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Sem om het op te lossen?",
        "opties": [
          "gebruikte een lange stok",
          "belde thuis om het voor te lezen",
          "deelde ze met de buren"
        ],
        "goed": "deelde ze met de buren",
        "uitleg": "Sem deelde ze met de buren; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sem zich?",
        "opties": [
          "geschrokken",
          "vindingrijk",
          "vrolijk"
        ],
        "goed": "vrolijk",
        "uitleg": "In de tekst staat dat Sem zich vrolijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "hij was nieuw en kende niemand",
          "het hondje was door een gat in het hek gekropen",
          "de oogst was groter dan verwacht"
        ],
        "goed": "de oogst was groter dan verwacht",
        "uitleg": "De tekst zegt: dat kwam doordat de oogst was groter dan verwacht."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Delen maakt iets leuker",
          "Samen kom je er sneller uit",
          "Zelf iets maken geeft een trots gevoel"
        ],
        "goed": "Delen maakt iets leuker",
        "uitleg": "Het verhaal laat zien: delen maakt iets leuker."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Nour in de dierentuin: verdwaalde puppy",
    "tekst": "Nour wandelde door de dierentuin. Plotseling was daar een verdwaalde puppy. Dat kwam doordat het hondje door een gat in het hek was gekropen. Nour wist even niet wat te doen. Na een tijdje bedacht Nour een plan: Nour zocht het baasje met een foto. Toen het gelukt was, voelde Nour zich blij. Achteraf vertelde Nour het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Nour liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de speeltuin",
          "in de dierentuin",
          "op het strand"
        ],
        "goed": "in de dierentuin",
        "uitleg": "In het verhaal staat dat Nour wandelde door de dierentuin."
      },
      {
        "vraag": "Wat deed Nour om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "vroeg hem mee te spelen",
          "zocht het baasje met een foto"
        ],
        "goed": "zocht het baasje met een foto",
        "uitleg": "Nour zocht het baasje met een foto; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Nour zich?",
        "opties": [
          "blij",
          "trots",
          "vrolijk"
        ],
        "goed": "blij",
        "uitleg": "In de tekst staat dat Nour zich blij voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "het hondje was door een gat in het hek gekropen",
          "de oogst was groter dan verwacht",
          "iemand was tegen de ladder gestoten"
        ],
        "goed": "het hondje was door een gat in het hek gekropen",
        "uitleg": "De tekst zegt: dat kwam doordat het hondje was door een gat in het hek gekropen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Delen maakt iets leuker",
          "Rustig nadenken lost meer op dan zoeken",
          "Doorzetten helpt om iets op te lossen"
        ],
        "goed": "Doorzetten helpt om iets op te lossen",
        "uitleg": "Het verhaal laat zien: doorzetten helpt om iets op te lossen."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Kees op het strand: vastgelopen vlieger",
    "tekst": "Kees speelde op het strand. Plotseling was daar een vastgelopen vlieger. Dat kwam doordat het touw om een tak was gedraaid. Kees wist even niet wat te doen. Na een tijdje bedacht Kees een plan: Kees gebruikte een lange stok. Toen het gelukt was, voelde Kees zich vindingrijk. Achteraf vertelde Kees het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Kees liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "in de dierentuin",
          "op zolder"
        ],
        "goed": "op het strand",
        "uitleg": "In het verhaal staat dat Kees speelde op het strand."
      },
      {
        "vraag": "Wat deed Kees om het op te lossen?",
        "opties": [
          "deelde ze met de buren",
          "plakte de band met een setje",
          "gebruikte een lange stok"
        ],
        "goed": "gebruikte een lange stok",
        "uitleg": "Kees gebruikte een lange stok; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Kees zich?",
        "opties": [
          "trots",
          "vindingrijk",
          "blij"
        ],
        "goed": "vindingrijk",
        "uitleg": "In de tekst staat dat Kees zich vindingrijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de kat was voor een hond weggerend",
          "het hondje was door een gat in het hek gekropen",
          "het touw was om een tak gedraaid"
        ],
        "goed": "het touw was om een tak gedraaid",
        "uitleg": "De tekst zegt: dat kwam doordat het touw was om een tak gedraaid."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Samen kom je er sneller uit",
          "Met een slim idee kom je verder",
          "Rustig blijven werkt beter dan trekken"
        ],
        "goed": "Met een slim idee kom je verder",
        "uitleg": "Het verhaal laat zien: met een slim idee kom je verder."
      }
    ]
  },
  {
    "niveau": 5,
    "titel": "Lotte bij de sloot: omgevallen emmer verf",
    "tekst": "Lotte keek bij de sloot. Plotseling was daar een omgevallen emmer verf. Dat kwam doordat iemand tegen de ladder was gestoten. Lotte was geschrokken en wist even niet wat te doen. Na een tijdje bedacht Lotte een plan: Lotte maakte alles schoon met water. Achteraf vertelde Lotte het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Lotte liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "bij de sloot",
          "bij de markt"
        ],
        "goed": "bij de sloot",
        "uitleg": "In het verhaal staat dat Lotte keek bij de sloot."
      },
      {
        "vraag": "Wat deed Lotte om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "zette voer onderaan de boom",
          "maakte alles schoon met water"
        ],
        "goed": "maakte alles schoon met water",
        "uitleg": "Lotte maakte alles schoon met water; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lotte zich?",
        "opties": [
          "opgelucht",
          "trots",
          "geschrokken"
        ],
        "goed": "geschrokken",
        "uitleg": "In de tekst staat dat Lotte zich geschrokken voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de vogel was tegen een raam gevlogen",
          "iemand was tegen de ladder gestoten",
          "de kat was voor een hond weggerend"
        ],
        "goed": "iemand was tegen de ladder gestoten",
        "uitleg": "De tekst zegt: dat kwam doordat iemand was tegen de ladder gestoten."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Eerlijk opruimen na een ongelukje",
          "Iemand erbij vragen kost weinig en helpt veel",
          "Doorzetten helpt om iets op te lossen"
        ],
        "goed": "Eerlijk opruimen na een ongelukje",
        "uitleg": "Het verhaal laat zien: eerlijk opruimen na een ongelukje."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Yara op het strand: verdwaalde puppy",
    "tekst": "Yara speelde op het strand. Plotseling was daar een verdwaalde puppy. Dat kwam doordat het hondje door een gat in het hek was gekropen. Yara wist even niet wat te doen. Na een tijdje bedacht Yara een plan: Yara zocht het baasje met een foto. Toen het gelukt was, voelde Yara zich blij. Achteraf vertelde Yara het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Yara liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de dierentuin",
          "bij de markt",
          "op het strand"
        ],
        "goed": "op het strand",
        "uitleg": "In het verhaal staat dat Yara speelde op het strand."
      },
      {
        "vraag": "Wat deed Yara om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "leende een pen van de buurman",
          "zocht het baasje met een foto"
        ],
        "goed": "zocht het baasje met een foto",
        "uitleg": "Yara zocht het baasje met een foto; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Yara zich?",
        "opties": [
          "rustig",
          "trots",
          "blij"
        ],
        "goed": "blij",
        "uitleg": "In de tekst staat dat Yara zich blij voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de wind had het papier meegenomen",
          "de pen was helemaal leeg",
          "het hondje was door een gat in het hek gekropen"
        ],
        "goed": "het hondje was door een gat in het hek gekropen",
        "uitleg": "De tekst zegt: dat kwam doordat het hondje was door een gat in het hek gekropen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Doorzetten helpt om iets op te lossen",
          "Samen kom je er sneller uit",
          "Van een misser kun je iets nieuws maken"
        ],
        "goed": "Doorzetten helpt om iets op te lossen",
        "uitleg": "Het verhaal laat zien: doorzetten helpt om iets op te lossen."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Hoe een brug blijft staan (verdieping)",
    "tekst": "Een boogbrug leidt het gewicht naar de zijkanten. Bij een hangbrug hangt het wegdek aan dikke kabels. Dat is niet altijd zo gebleven: omdat ijzer uitzet in de warmte zitten er dilatatievoegen in het wegdek. Wie er iets aan wil doen, heeft één simpele stap: kijk eens naar de vorm van bruggen in je omgeving.",
    "vragen": [
      {
        "vraag": "Wat lees je over bruggen?",
        "opties": [
          "Een computer werkt alleen met de cijfers nul en één",
          "Een boogbrug leidt het gewicht naar de zijkanten",
          "Sommige vogels vliegen duizenden kilometers naar het zuiden"
        ],
        "goed": "Een boogbrug leidt het gewicht naar de zijkanten",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "passen twee cijfers precies bij die techniek",
          "zitten er dilatatievoegen in het wegdek",
          "is waterbeheer hier extra belangrijk"
        ],
        "goed": "zitten er dilatatievoegen in het wegdek",
        "uitleg": "De tekst legt uit dat hierdoor zitten er dilatatievoegen in het wegdek."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat ijzer uitzet in de warmte",
          "omdat er steeds meer bos wordt gekapt",
          "omdat er minder wilde bloemen zijn"
        ],
        "goed": "omdat ijzer uitzet in de warmte",
        "uitleg": "In de tekst staat: omdat ijzer uitzet in de warmte."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Kijk eens naar de vorm van bruggen in je omgeving",
          "Gooi papier, glas en plastic in de juiste bak",
          "Gooi geen doekjes of vet in het toilet"
        ],
        "goed": "Kijk eens naar de vorm van bruggen in je omgeving",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Yara op zolder: omgevallen emmer verf",
    "tekst": "Yara rommelde op zolder. Plotseling was daar een omgevallen emmer verf. Dat kwam doordat iemand tegen de ladder was gestoten. Yara was geschrokken en wist even niet wat te doen. Na een tijdje bedacht Yara een plan: Yara maakte alles schoon met water. Achteraf vertelde Yara het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Yara liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "op het strand",
          "op zolder"
        ],
        "goed": "op zolder",
        "uitleg": "In het verhaal staat dat Yara rommelde op zolder."
      },
      {
        "vraag": "Wat deed Yara om het op te lossen?",
        "opties": [
          "maakte alles schoon met water",
          "vroeg hem mee te spelen",
          "plakte de stukken met tape"
        ],
        "goed": "maakte alles schoon met water",
        "uitleg": "Yara maakte alles schoon met water; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Yara zich?",
        "opties": [
          "geschrokken",
          "vrolijk",
          "opgelucht"
        ],
        "goed": "geschrokken",
        "uitleg": "In de tekst staat dat Yara zich geschrokken voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "iemand was tegen de ladder gestoten",
          "de sleutel lag binnen op de tafel",
          "het lijstje was uit de zak gevallen"
        ],
        "goed": "iemand was tegen de ladder gestoten",
        "uitleg": "De tekst zegt: dat kwam doordat iemand was tegen de ladder gestoten."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Eerlijk opruimen na een ongelukje",
          "Iemand erbij vragen kost weinig en helpt veel",
          "Van een misser kun je iets nieuws maken"
        ],
        "goed": "Eerlijk opruimen na een ongelukje",
        "uitleg": "Het verhaal laat zien: eerlijk opruimen na een ongelukje."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Sanne bij de markt: boodschappenlijstje dat weg was",
    "tekst": "Sanne hielp op de markt. Plotseling was daar een boodschappenlijstje dat weg was. Dat kwam doordat het lijstje uit de zak was gevallen. Sanne was rustig en wist even niet wat te doen. Na een tijdje bedacht Sanne een plan: Sanne belde thuis om het voor te lezen. Achteraf vertelde Sanne het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Sanne liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de markt",
          "in het bos",
          "bij de sloot"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Sanne hielp op de markt."
      },
      {
        "vraag": "Wat deed Sanne om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "belde thuis om het voor te lezen",
          "leende een pen van de buurman"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Sanne belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sanne zich?",
        "opties": [
          "bezorgd",
          "geschrokken",
          "rustig"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Sanne zich rustig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "het touw was om een tak gedraaid",
          "het lijstje was uit de zak gevallen",
          "het hondje was door een gat in het hek gekropen"
        ],
        "goed": "het lijstje was uit de zak gevallen",
        "uitleg": "De tekst zegt: dat kwam doordat het lijstje was uit de zak gevallen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Iemand erbij vragen kost weinig en helpt veel",
          "Rustig nadenken lost meer op dan zoeken",
          "Delen maakt iets leuker"
        ],
        "goed": "Rustig nadenken lost meer op dan zoeken",
        "uitleg": "Het verhaal laat zien: rustig nadenken lost meer op dan zoeken."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Waarom we afval scheiden (verdieping)",
    "tekst": "Van oud papier kan nieuw papier gemaakt worden. Plastic dat in de natuur belandt, blijft daar honderden jaren liggen. Dat is niet altijd zo gebleven: omdat grondstoffen niet oneindig zijn scheelt hergebruik veel energie. Wie er iets aan wil doen, heeft één simpele stap: gooi papier, glas en plastic in de juiste bak.",
    "vragen": [
      {
        "vraag": "Wat lees je over afval?",
        "opties": [
          "Bijen brengen stuifmeel van de ene bloem naar de andere",
          "Een waterschap houdt dijken en sluizen in de gaten",
          "Van oud papier kan nieuw papier gemaakt worden"
        ],
        "goed": "Van oud papier kan nieuw papier gemaakt worden",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "is waterbeheer hier extra belangrijk",
          "scheelt hergebruik veel energie",
          "is windstroom goedkoper dan olie"
        ],
        "goed": "scheelt hergebruik veel energie",
        "uitleg": "De tekst legt uit dat hierdoor scheelt hergebruik veel energie."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat wind gratis en onbeperkt is",
          "omdat grondstoffen niet oneindig zijn",
          "omdat licht van een scherm je wakker houdt"
        ],
        "goed": "omdat grondstoffen niet oneindig zijn",
        "uitleg": "In de tekst staat: omdat grondstoffen niet oneindig zijn."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Beweeg elke dag; botten worden sterker van gebruik",
          "Gooi papier, glas en plastic in de juiste bak",
          "Volg altijd de waarschuwingen van deskundigen"
        ],
        "goed": "Gooi papier, glas en plastic in de juiste bak",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Wat doet een waterschap? (verdieping)",
    "tekst": "Een waterschap houdt dijken en sluizen in de gaten. Ook maken ze rioolwater weer schoon. Dat is niet altijd zo gebleven: omdat een groot deel van Nederland laag ligt is waterbeheer hier extra belangrijk. Wie er iets aan wil doen, heeft één simpele stap: gooi geen doekjes of vet in het toilet.",
    "vragen": [
      {
        "vraag": "Wat lees je over waterschappen?",
        "opties": [
          "Een waterschap houdt dijken en sluizen in de gaten",
          "Een computer werkt alleen met de cijfers nul en één",
          "De zon verwarmt water in zeeën en rivieren"
        ],
        "goed": "Een waterschap houdt dijken en sluizen in de gaten",
        "uitleg": "Dit feit staat in de eerste zin van de tekst."
      },
      {
        "vraag": "Wat is het gevolg?",
        "opties": [
          "is waterbeheer hier extra belangrijk",
          "zitten er dilatatievoegen in het wegdek",
          "scheelt hergebruik veel energie"
        ],
        "goed": "is waterbeheer hier extra belangrijk",
        "uitleg": "De tekst legt uit dat hierdoor is waterbeheer hier extra belangrijk."
      },
      {
        "vraag": "Wat is de oorzaak?",
        "opties": [
          "omdat wind gratis en onbeperkt is",
          "omdat een groot deel van Nederland laag ligt",
          "omdat je botten kalk nodig hebben"
        ],
        "goed": "omdat een groot deel van Nederland laag ligt",
        "uitleg": "In de tekst staat: omdat een groot deel van Nederland laag ligt."
      },
      {
        "vraag": "Wat raadt de schrijver aan?",
        "opties": [
          "Leg je telefoon een uur voor bedtijd weg",
          "Vang regenwater op voor de plantjes",
          "Gooi geen doekjes of vet in het toilet"
        ],
        "goed": "Gooi geen doekjes of vet in het toilet",
        "uitleg": "De laatste zin geeft dit advies."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Bo in de schuur: klasgenoot die alleen stond",
    "tekst": "Bo zocht iets in de schuur. Plotseling was daar een klasgenoot die alleen stond. Dat kwam doordat hij nieuw was en niemand kende. Bo was behulpzaam en wist even niet wat te doen. Na een tijdje bedacht Bo een plan: Bo vroeg hem mee te spelen. Achteraf vertelde Bo het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Bo liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "in de schuur",
          "op zolder"
        ],
        "goed": "in de schuur",
        "uitleg": "In het verhaal staat dat Bo zocht iets in de schuur."
      },
      {
        "vraag": "Wat deed Bo om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "vroeg hem mee te spelen",
          "deelde ze met de buren"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Bo vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Bo zich?",
        "opties": [
          "vindingrijk",
          "behulpzaam",
          "dankbaar"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Bo zich behulpzaam voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de sleutel lag binnen op de tafel",
          "hij was nieuw en kende niemand",
          "er zat een scherf glas in de band"
        ],
        "goed": "hij was nieuw en kende niemand",
        "uitleg": "De tekst zegt: dat kwam doordat hij was nieuw en kende niemand."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Iemand erbij vragen kost weinig en helpt veel",
          "Om hulp vragen is geen zwakte",
          "Met een slim idee kom je verder"
        ],
        "goed": "Iemand erbij vragen kost weinig en helpt veel",
        "uitleg": "Het verhaal laat zien: iemand erbij vragen kost weinig en helpt veel."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Iris bij de sloot: dichte deur zonder sleutel",
    "tekst": "Iris keek bij de sloot. Plotseling was daar een dichte deur zonder sleutel. Dat kwam doordat de sleutel binnen op de tafel lag. Iris was verlegen en wist even niet wat te doen. Na een tijdje bedacht Iris een plan: Iris vroeg de buurvrouw om hulp. Achteraf vertelde Iris het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Iris liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de sloot",
          "op zolder",
          "in het zwembad"
        ],
        "goed": "bij de sloot",
        "uitleg": "In het verhaal staat dat Iris keek bij de sloot."
      },
      {
        "vraag": "Wat deed Iris om het op te lossen?",
        "opties": [
          "vroeg de buurvrouw om hulp",
          "zette voer onderaan de boom",
          "zocht het baasje met een foto"
        ],
        "goed": "vroeg de buurvrouw om hulp",
        "uitleg": "Iris vroeg de buurvrouw om hulp; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Iris zich?",
        "opties": [
          "geschrokken",
          "blij",
          "verlegen"
        ],
        "goed": "verlegen",
        "uitleg": "In de tekst staat dat Iris zich verlegen voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "het lijstje was uit de zak gevallen",
          "de sleutel lag binnen op de tafel",
          "de wind had het papier meegenomen"
        ],
        "goed": "de sleutel lag binnen op de tafel",
        "uitleg": "De tekst zegt: dat kwam doordat de sleutel lag binnen op de tafel."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Om hulp vragen is geen zwakte",
          "Eerlijk opruimen na een ongelukje",
          "Rustig blijven werkt beter dan trekken"
        ],
        "goed": "Om hulp vragen is geen zwakte",
        "uitleg": "Het verhaal laat zien: om hulp vragen is geen zwakte."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Zoë op de camping: klasgenoot die alleen stond",
    "tekst": "Zoë kampeerde op de camping. Plotseling was daar een klasgenoot die alleen stond. Dat kwam doordat hij nieuw was en niemand kende. Zoë was behulpzaam en wist even niet wat te doen. Na een tijdje bedacht Zoë een plan: Zoë vroeg hem mee te spelen. Achteraf vertelde Zoë het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Zoë liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de dierentuin",
          "op zolder",
          "op de camping"
        ],
        "goed": "op de camping",
        "uitleg": "In het verhaal staat dat Zoë kampeerde op de camping."
      },
      {
        "vraag": "Wat deed Zoë om het op te lossen?",
        "opties": [
          "plakte de band met een setje",
          "vroeg hem mee te spelen",
          "belde de dierenambulance"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Zoë vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Zoë zich?",
        "opties": [
          "rustig",
          "behulpzaam",
          "bezorgd"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Zoë zich behulpzaam voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "het hondje was door een gat in het hek gekropen",
          "de sleutel lag binnen op de tafel",
          "hij was nieuw en kende niemand"
        ],
        "goed": "hij was nieuw en kende niemand",
        "uitleg": "De tekst zegt: dat kwam doordat hij was nieuw en kende niemand."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Help een dier, maar op de juiste manier",
          "Om hulp vragen is geen zwakte",
          "Iemand erbij vragen kost weinig en helpt veel"
        ],
        "goed": "Iemand erbij vragen kost weinig en helpt veel",
        "uitleg": "Het verhaal laat zien: iemand erbij vragen kost weinig en helpt veel."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Jara op de camping: lekke fietsband",
    "tekst": "Jara kampeerde op de camping. Plotseling was daar een lekke fietsband. Dat kwam doordat er een scherf glas in de band zat. Jara wist even niet wat te doen. Na een tijdje bedacht Jara een plan: Jara plakte de band met een setje. Toen het gelukt was, voelde Jara zich trots. Achteraf vertelde Jara het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Jara liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de bibliotheek",
          "op de camping",
          "op het strand"
        ],
        "goed": "op de camping",
        "uitleg": "In het verhaal staat dat Jara kampeerde op de camping."
      },
      {
        "vraag": "Wat deed Jara om het op te lossen?",
        "opties": [
          "plakte de band met een setje",
          "deelde ze met de buren",
          "vroeg hem mee te spelen"
        ],
        "goed": "plakte de band met een setje",
        "uitleg": "Jara plakte de band met een setje; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Jara zich?",
        "opties": [
          "geduldig",
          "rustig",
          "trots"
        ],
        "goed": "trots",
        "uitleg": "In de tekst staat dat Jara zich trots voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de wind had het papier meegenomen",
          "er zat een scherf glas in de band",
          "de vogel was tegen een raam gevlogen"
        ],
        "goed": "er zat een scherf glas in de band",
        "uitleg": "De tekst zegt: dat kwam doordat er zat een scherf glas in de band."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Zelf iets maken geeft een trots gevoel",
          "Help een dier, maar op de juiste manier",
          "Samen kom je er sneller uit"
        ],
        "goed": "Zelf iets maken geeft een trots gevoel",
        "uitleg": "Het verhaal laat zien: zelf iets maken geeft een trots gevoel."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Lotte in het bos: gescheurde tekening",
    "tekst": "Lotte liep door het bos. Plotseling was daar een gescheurde tekening. Dat kwam doordat de wind het papier had meegenomen. Lotte wist even niet wat te doen. Na een tijdje bedacht Lotte een plan: Lotte plakte de stukken met tape. Toen het gelukt was, voelde Lotte zich opgelucht. Achteraf vertelde Lotte het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Lotte liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het zwembad",
          "op het strand",
          "in het bos"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Lotte liep door het bos."
      },
      {
        "vraag": "Wat deed Lotte om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "deelde ze met de buren",
          "vroeg de buurvrouw om hulp"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Lotte plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Lotte zich?",
        "opties": [
          "opgelucht",
          "trots",
          "geduldig"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Lotte zich opgelucht voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de wind had het papier meegenomen",
          "de oogst was groter dan verwacht",
          "het touw was om een tak gedraaid"
        ],
        "goed": "de wind had het papier meegenomen",
        "uitleg": "De tekst zegt: dat kwam doordat de wind had het papier meegenomen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Met een slim idee kom je verder",
          "Zelf iets maken geeft een trots gevoel",
          "Van een misser kun je iets nieuws maken"
        ],
        "goed": "Van een misser kun je iets nieuws maken",
        "uitleg": "Het verhaal laat zien: van een misser kun je iets nieuws maken."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Jara in de speeltuin: omgevallen emmer verf",
    "tekst": "Jara was in de speeltuin. Plotseling was daar een omgevallen emmer verf. Dat kwam doordat iemand tegen de ladder was gestoten. Jara was geschrokken en wist even niet wat te doen. Na een tijdje bedacht Jara een plan: Jara maakte alles schoon met water. Achteraf vertelde Jara het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Jara liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de speeltuin",
          "op het strand",
          "in de schuur"
        ],
        "goed": "in de speeltuin",
        "uitleg": "In het verhaal staat dat Jara was in de speeltuin."
      },
      {
        "vraag": "Wat deed Jara om het op te lossen?",
        "opties": [
          "plakte de band met een setje",
          "maakte alles schoon met water",
          "plakte de stukken met tape"
        ],
        "goed": "maakte alles schoon met water",
        "uitleg": "Jara maakte alles schoon met water; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Jara zich?",
        "opties": [
          "geschrokken",
          "dankbaar",
          "bezorgd"
        ],
        "goed": "geschrokken",
        "uitleg": "In de tekst staat dat Jara zich geschrokken voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "het touw was om een tak gedraaid",
          "iemand was tegen de ladder gestoten",
          "de vogel was tegen een raam gevlogen"
        ],
        "goed": "iemand was tegen de ladder gestoten",
        "uitleg": "De tekst zegt: dat kwam doordat iemand was tegen de ladder gestoten."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Help een dier, maar op de juiste manier",
          "Eerlijk opruimen na een ongelukje",
          "Van een misser kun je iets nieuws maken"
        ],
        "goed": "Eerlijk opruimen na een ongelukje",
        "uitleg": "Het verhaal laat zien: eerlijk opruimen na een ongelukje."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Roos bij de markt: vogel met een gebroken vleugel",
    "tekst": "Roos hielp op de markt. Plotseling was daar een vogel met een gebroken vleugel. Dat kwam doordat de vogel tegen een raam was gevlogen. Roos was bezorgd en wist even niet wat te doen. Na een tijdje bedacht Roos een plan: Roos belde de dierenambulance. Achteraf vertelde Roos het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Roos liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de bibliotheek",
          "bij de markt",
          "in het bos"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Roos hielp op de markt."
      },
      {
        "vraag": "Wat deed Roos om het op te lossen?",
        "opties": [
          "maakte alles schoon met water",
          "belde de dierenambulance",
          "gebruikte een lange stok"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Roos belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Roos zich?",
        "opties": [
          "bezorgd",
          "behulpzaam",
          "verlegen"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Roos zich bezorgd voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de vogel was tegen een raam gevlogen",
          "de wind had het papier meegenomen",
          "de oogst was groter dan verwacht"
        ],
        "goed": "de vogel was tegen een raam gevlogen",
        "uitleg": "De tekst zegt: dat kwam doordat de vogel was tegen een raam gevlogen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Help een dier, maar op de juiste manier",
          "Doorzetten helpt om iets op te lossen",
          "Zelf iets maken geeft een trots gevoel"
        ],
        "goed": "Help een dier, maar op de juiste manier",
        "uitleg": "Het verhaal laat zien: help een dier, maar op de juiste manier."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Nour bij de markt: boodschappenlijstje dat weg was",
    "tekst": "Nour hielp op de markt. Plotseling was daar een boodschappenlijstje dat weg was. Dat kwam doordat het lijstje uit de zak was gevallen. Nour was rustig en wist even niet wat te doen. Na een tijdje bedacht Nour een plan: Nour belde thuis om het voor te lezen. Achteraf vertelde Nour het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Nour liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de markt",
          "op zolder",
          "in het bos"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Nour hielp op de markt."
      },
      {
        "vraag": "Wat deed Nour om het op te lossen?",
        "opties": [
          "plakte de band met een setje",
          "gebruikte een lange stok",
          "belde thuis om het voor te lezen"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Nour belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Nour zich?",
        "opties": [
          "trots",
          "dankbaar",
          "rustig"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Nour zich rustig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "hij was nieuw en kende niemand",
          "de vogel was tegen een raam gevlogen",
          "het lijstje was uit de zak gevallen"
        ],
        "goed": "het lijstje was uit de zak gevallen",
        "uitleg": "De tekst zegt: dat kwam doordat het lijstje was uit de zak gevallen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Eerlijk opruimen na een ongelukje",
          "Rustig nadenken lost meer op dan zoeken",
          "Iemand erbij vragen kost weinig en helpt veel"
        ],
        "goed": "Rustig nadenken lost meer op dan zoeken",
        "uitleg": "Het verhaal laat zien: rustig nadenken lost meer op dan zoeken."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Iris in het zwembad: klasgenoot die alleen stond",
    "tekst": "Iris zwom in het zwembad. Plotseling was daar een klasgenoot die alleen stond. Dat kwam doordat hij nieuw was en niemand kende. Iris was behulpzaam en wist even niet wat te doen. Na een tijdje bedacht Iris een plan: Iris vroeg hem mee te spelen. Achteraf vertelde Iris het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Iris liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de sloot",
          "in het bos",
          "in het zwembad"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Iris zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Iris om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "vroeg hem mee te spelen",
          "plakte de band met een setje"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Iris vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Iris zich?",
        "opties": [
          "vindingrijk",
          "bezorgd",
          "behulpzaam"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Iris zich behulpzaam voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de pen was helemaal leeg",
          "hij was nieuw en kende niemand",
          "de wind had het papier meegenomen"
        ],
        "goed": "hij was nieuw en kende niemand",
        "uitleg": "De tekst zegt: dat kwam doordat hij was nieuw en kende niemand."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Om hulp vragen is geen zwakte",
          "Iemand erbij vragen kost weinig en helpt veel",
          "Zelf iets maken geeft een trots gevoel"
        ],
        "goed": "Iemand erbij vragen kost weinig en helpt veel",
        "uitleg": "Het verhaal laat zien: iemand erbij vragen kost weinig en helpt veel."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Kees op het schoolplein: pen die niet meer schreef",
    "tekst": "Kees stond op het schoolplein. Plotseling was daar een pen die niet meer schreef. Dat kwam doordat de pen helemaal leeg was. Kees wist even niet wat te doen. Na een tijdje bedacht Kees een plan: Kees leende een pen van de buurman. Toen het gelukt was, voelde Kees zich dankbaar. Achteraf vertelde Kees het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Kees liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de speeltuin",
          "op zolder",
          "op het schoolplein"
        ],
        "goed": "op het schoolplein",
        "uitleg": "In het verhaal staat dat Kees stond op het schoolplein."
      },
      {
        "vraag": "Wat deed Kees om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "maakte alles schoon met water",
          "leende een pen van de buurman"
        ],
        "goed": "leende een pen van de buurman",
        "uitleg": "Kees leende een pen van de buurman; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Kees zich?",
        "opties": [
          "geduldig",
          "dankbaar",
          "vindingrijk"
        ],
        "goed": "dankbaar",
        "uitleg": "In de tekst staat dat Kees zich dankbaar voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "er zat een scherf glas in de band",
          "het lijstje was uit de zak gevallen",
          "de pen was helemaal leeg"
        ],
        "goed": "de pen was helemaal leeg",
        "uitleg": "De tekst zegt: dat kwam doordat de pen was helemaal leeg."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Delen maakt iets leuker",
          "Van een misser kun je iets nieuws maken",
          "Samen kom je er sneller uit"
        ],
        "goed": "Samen kom je er sneller uit",
        "uitleg": "Het verhaal laat zien: samen kom je er sneller uit."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Roos in de speeltuin: vogel met een gebroken vleugel",
    "tekst": "Roos was in de speeltuin. Plotseling was daar een vogel met een gebroken vleugel. Dat kwam doordat de vogel tegen een raam was gevlogen. Roos was bezorgd en wist even niet wat te doen. Na een tijdje bedacht Roos een plan: Roos belde de dierenambulance. Achteraf vertelde Roos het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Roos liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "in de speeltuin",
          "op de camping"
        ],
        "goed": "in de speeltuin",
        "uitleg": "In het verhaal staat dat Roos was in de speeltuin."
      },
      {
        "vraag": "Wat deed Roos om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "plakte de stukken met tape",
          "maakte alles schoon met water"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Roos belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Roos zich?",
        "opties": [
          "bezorgd",
          "rustig",
          "geduldig"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Roos zich bezorgd voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de oogst was groter dan verwacht",
          "het touw was om een tak gedraaid",
          "de vogel was tegen een raam gevlogen"
        ],
        "goed": "de vogel was tegen een raam gevlogen",
        "uitleg": "De tekst zegt: dat kwam doordat de vogel was tegen een raam gevlogen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Help een dier, maar op de juiste manier",
          "Met een slim idee kom je verder",
          "Iemand erbij vragen kost weinig en helpt veel"
        ],
        "goed": "Help een dier, maar op de juiste manier",
        "uitleg": "Het verhaal laat zien: help een dier, maar op de juiste manier."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Kees in het zwembad: lekke fietsband",
    "tekst": "Kees zwom in het zwembad. Plotseling was daar een lekke fietsband. Dat kwam doordat er een scherf glas in de band zat. Kees wist even niet wat te doen. Na een tijdje bedacht Kees een plan: Kees plakte de band met een setje. Toen het gelukt was, voelde Kees zich trots. Achteraf vertelde Kees het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Kees liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de markt",
          "in de dierentuin",
          "in het zwembad"
        ],
        "goed": "in het zwembad",
        "uitleg": "In het verhaal staat dat Kees zwom in het zwembad."
      },
      {
        "vraag": "Wat deed Kees om het op te lossen?",
        "opties": [
          "plakte de band met een setje",
          "belde thuis om het voor te lezen",
          "zocht het baasje met een foto"
        ],
        "goed": "plakte de band met een setje",
        "uitleg": "Kees plakte de band met een setje; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Kees zich?",
        "opties": [
          "dankbaar",
          "trots",
          "geduldig"
        ],
        "goed": "trots",
        "uitleg": "In de tekst staat dat Kees zich trots voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "het lijstje was uit de zak gevallen",
          "de wind had het papier meegenomen",
          "er zat een scherf glas in de band"
        ],
        "goed": "er zat een scherf glas in de band",
        "uitleg": "De tekst zegt: dat kwam doordat er zat een scherf glas in de band."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Zelf iets maken geeft een trots gevoel",
          "Rustig blijven werkt beter dan trekken",
          "Help een dier, maar op de juiste manier"
        ],
        "goed": "Zelf iets maken geeft een trots gevoel",
        "uitleg": "Het verhaal laat zien: zelf iets maken geeft een trots gevoel."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Sem bij de markt: vogel met een gebroken vleugel",
    "tekst": "Sem hielp op de markt. Plotseling was daar een vogel met een gebroken vleugel. Dat kwam doordat de vogel tegen een raam was gevlogen. Sem was bezorgd en wist even niet wat te doen. Na een tijdje bedacht Sem een plan: Sem belde de dierenambulance. Achteraf vertelde Sem het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Sem liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het schoolplein",
          "op de camping",
          "bij de markt"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Sem hielp op de markt."
      },
      {
        "vraag": "Wat deed Sem om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "zocht het baasje met een foto",
          "vroeg hem mee te spelen"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Sem belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sem zich?",
        "opties": [
          "dankbaar",
          "bezorgd",
          "blij"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Sem zich bezorgd voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de vogel was tegen een raam gevlogen",
          "de pen was helemaal leeg",
          "de oogst was groter dan verwacht"
        ],
        "goed": "de vogel was tegen een raam gevlogen",
        "uitleg": "De tekst zegt: dat kwam doordat de vogel was tegen een raam gevlogen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Iemand erbij vragen kost weinig en helpt veel",
          "Help een dier, maar op de juiste manier",
          "Doorzetten helpt om iets op te lossen"
        ],
        "goed": "Help een dier, maar op de juiste manier",
        "uitleg": "Het verhaal laat zien: help een dier, maar op de juiste manier."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Jara in de schuur: boodschappenlijstje dat weg was",
    "tekst": "Jara zocht iets in de schuur. Plotseling was daar een boodschappenlijstje dat weg was. Dat kwam doordat het lijstje uit de zak was gevallen. Jara was rustig en wist even niet wat te doen. Na een tijdje bedacht Jara een plan: Jara belde thuis om het voor te lezen. Achteraf vertelde Jara het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Jara liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "bij de sloot",
          "op zolder"
        ],
        "goed": "in de schuur",
        "uitleg": "In het verhaal staat dat Jara zocht iets in de schuur."
      },
      {
        "vraag": "Wat deed Jara om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "belde thuis om het voor te lezen",
          "maakte alles schoon met water"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Jara belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Jara zich?",
        "opties": [
          "rustig",
          "opgelucht",
          "vindingrijk"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Jara zich rustig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de wind had het papier meegenomen",
          "het lijstje was uit de zak gevallen",
          "de oogst was groter dan verwacht"
        ],
        "goed": "het lijstje was uit de zak gevallen",
        "uitleg": "De tekst zegt: dat kwam doordat het lijstje was uit de zak gevallen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Delen maakt iets leuker",
          "Iemand erbij vragen kost weinig en helpt veel",
          "Rustig nadenken lost meer op dan zoeken"
        ],
        "goed": "Rustig nadenken lost meer op dan zoeken",
        "uitleg": "Het verhaal laat zien: rustig nadenken lost meer op dan zoeken."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Yara in het bos: boodschappenlijstje dat weg was",
    "tekst": "Yara liep door het bos. Plotseling was daar een boodschappenlijstje dat weg was. Dat kwam doordat het lijstje uit de zak was gevallen. Yara was rustig en wist even niet wat te doen. Na een tijdje bedacht Yara een plan: Yara belde thuis om het voor te lezen. Achteraf vertelde Yara het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Yara liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in het bos",
          "in de speeltuin",
          "in het zwembad"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Yara liep door het bos."
      },
      {
        "vraag": "Wat deed Yara om het op te lossen?",
        "opties": [
          "maakte alles schoon met water",
          "leende een pen van de buurman",
          "belde thuis om het voor te lezen"
        ],
        "goed": "belde thuis om het voor te lezen",
        "uitleg": "Yara belde thuis om het voor te lezen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Yara zich?",
        "opties": [
          "blij",
          "rustig",
          "opgelucht"
        ],
        "goed": "rustig",
        "uitleg": "In de tekst staat dat Yara zich rustig voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "iemand was tegen de ladder gestoten",
          "de wind had het papier meegenomen",
          "het lijstje was uit de zak gevallen"
        ],
        "goed": "het lijstje was uit de zak gevallen",
        "uitleg": "De tekst zegt: dat kwam doordat het lijstje was uit de zak gevallen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Om hulp vragen is geen zwakte",
          "Rustig nadenken lost meer op dan zoeken",
          "Doorzetten helpt om iets op te lossen"
        ],
        "goed": "Rustig nadenken lost meer op dan zoeken",
        "uitleg": "Het verhaal laat zien: rustig nadenken lost meer op dan zoeken."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Sanne in de bibliotheek: dichte deur zonder sleutel",
    "tekst": "Sanne koos een boek in de bibliotheek. Plotseling was daar een dichte deur zonder sleutel. Dat kwam doordat de sleutel binnen op de tafel lag. Sanne was verlegen en wist even niet wat te doen. Na een tijdje bedacht Sanne een plan: Sanne vroeg de buurvrouw om hulp. Achteraf vertelde Sanne het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Sanne liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de bibliotheek",
          "bij de sloot",
          "op het strand"
        ],
        "goed": "in de bibliotheek",
        "uitleg": "In het verhaal staat dat Sanne koos een boek in de bibliotheek."
      },
      {
        "vraag": "Wat deed Sanne om het op te lossen?",
        "opties": [
          "maakte alles schoon met water",
          "vroeg de buurvrouw om hulp",
          "leende een pen van de buurman"
        ],
        "goed": "vroeg de buurvrouw om hulp",
        "uitleg": "Sanne vroeg de buurvrouw om hulp; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sanne zich?",
        "opties": [
          "geduldig",
          "opgelucht",
          "verlegen"
        ],
        "goed": "verlegen",
        "uitleg": "In de tekst staat dat Sanne zich verlegen voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de sleutel lag binnen op de tafel",
          "het touw was om een tak gedraaid",
          "de kat was voor een hond weggerend"
        ],
        "goed": "de sleutel lag binnen op de tafel",
        "uitleg": "De tekst zegt: dat kwam doordat de sleutel lag binnen op de tafel."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Om hulp vragen is geen zwakte",
          "Rustig blijven werkt beter dan trekken",
          "Help een dier, maar op de juiste manier"
        ],
        "goed": "Om hulp vragen is geen zwakte",
        "uitleg": "Het verhaal laat zien: om hulp vragen is geen zwakte."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Amir op zolder: vastgelopen vlieger",
    "tekst": "Amir rommelde op zolder. Plotseling was daar een vastgelopen vlieger. Dat kwam doordat het touw om een tak was gedraaid. Amir wist even niet wat te doen. Na een tijdje bedacht Amir een plan: Amir gebruikte een lange stok. Toen het gelukt was, voelde Amir zich vindingrijk. Achteraf vertelde Amir het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Amir liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de dierentuin",
          "op zolder",
          "op het schoolplein"
        ],
        "goed": "op zolder",
        "uitleg": "In het verhaal staat dat Amir rommelde op zolder."
      },
      {
        "vraag": "Wat deed Amir om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "gebruikte een lange stok",
          "belde thuis om het voor te lezen"
        ],
        "goed": "gebruikte een lange stok",
        "uitleg": "Amir gebruikte een lange stok; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Amir zich?",
        "opties": [
          "rustig",
          "behulpzaam",
          "vindingrijk"
        ],
        "goed": "vindingrijk",
        "uitleg": "In de tekst staat dat Amir zich vindingrijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "iemand was tegen de ladder gestoten",
          "het lijstje was uit de zak gevallen",
          "het touw was om een tak gedraaid"
        ],
        "goed": "het touw was om een tak gedraaid",
        "uitleg": "De tekst zegt: dat kwam doordat het touw was om een tak gedraaid."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Van een misser kun je iets nieuws maken",
          "Rustig blijven werkt beter dan trekken",
          "Met een slim idee kom je verder"
        ],
        "goed": "Met een slim idee kom je verder",
        "uitleg": "Het verhaal laat zien: met een slim idee kom je verder."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Yara in de bibliotheek: berg wortels die te veel was",
    "tekst": "Yara koos een boek in de bibliotheek. Plotseling was daar een berg wortels die te veel was. Dat kwam doordat de oogst groter was dan verwacht. Yara wist even niet wat te doen. Na een tijdje bedacht Yara een plan: Yara deelde ze met de buren. Toen het gelukt was, voelde Yara zich vrolijk. Achteraf vertelde Yara het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Yara liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op het strand",
          "bij de markt",
          "in de bibliotheek"
        ],
        "goed": "in de bibliotheek",
        "uitleg": "In het verhaal staat dat Yara koos een boek in de bibliotheek."
      },
      {
        "vraag": "Wat deed Yara om het op te lossen?",
        "opties": [
          "belde thuis om het voor te lezen",
          "belde de dierenambulance",
          "deelde ze met de buren"
        ],
        "goed": "deelde ze met de buren",
        "uitleg": "Yara deelde ze met de buren; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Yara zich?",
        "opties": [
          "trots",
          "vrolijk",
          "vindingrijk"
        ],
        "goed": "vrolijk",
        "uitleg": "In de tekst staat dat Yara zich vrolijk voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de oogst was groter dan verwacht",
          "het hondje was door een gat in het hek gekropen",
          "het touw was om een tak gedraaid"
        ],
        "goed": "de oogst was groter dan verwacht",
        "uitleg": "De tekst zegt: dat kwam doordat de oogst was groter dan verwacht."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Met een slim idee kom je verder",
          "Delen maakt iets leuker",
          "Eerlijk opruimen na een ongelukje"
        ],
        "goed": "Delen maakt iets leuker",
        "uitleg": "Het verhaal laat zien: delen maakt iets leuker."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Roos op de camping: pen die niet meer schreef",
    "tekst": "Roos kampeerde op de camping. Plotseling was daar een pen die niet meer schreef. Dat kwam doordat de pen helemaal leeg was. Roos wist even niet wat te doen. Na een tijdje bedacht Roos een plan: Roos leende een pen van de buurman. Toen het gelukt was, voelde Roos zich dankbaar. Achteraf vertelde Roos het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Roos liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "op de camping",
          "in de speeltuin",
          "op zolder"
        ],
        "goed": "op de camping",
        "uitleg": "In het verhaal staat dat Roos kampeerde op de camping."
      },
      {
        "vraag": "Wat deed Roos om het op te lossen?",
        "opties": [
          "zocht het baasje met een foto",
          "leende een pen van de buurman",
          "plakte de stukken met tape"
        ],
        "goed": "leende een pen van de buurman",
        "uitleg": "Roos leende een pen van de buurman; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Roos zich?",
        "opties": [
          "dankbaar",
          "rustig",
          "geduldig"
        ],
        "goed": "dankbaar",
        "uitleg": "In de tekst staat dat Roos zich dankbaar voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "het touw was om een tak gedraaid",
          "de kat was voor een hond weggerend",
          "de pen was helemaal leeg"
        ],
        "goed": "de pen was helemaal leeg",
        "uitleg": "De tekst zegt: dat kwam doordat de pen was helemaal leeg."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Zelf iets maken geeft een trots gevoel",
          "Help een dier, maar op de juiste manier",
          "Samen kom je er sneller uit"
        ],
        "goed": "Samen kom je er sneller uit",
        "uitleg": "Het verhaal laat zien: samen kom je er sneller uit."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Kees bij de markt: klasgenoot die alleen stond",
    "tekst": "Kees hielp op de markt. Plotseling was daar een klasgenoot die alleen stond. Dat kwam doordat hij nieuw was en niemand kende. Kees was behulpzaam en wist even niet wat te doen. Na een tijdje bedacht Kees een plan: Kees vroeg hem mee te spelen. Achteraf vertelde Kees het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Kees liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de markt",
          "in de bibliotheek",
          "op het schoolplein"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Kees hielp op de markt."
      },
      {
        "vraag": "Wat deed Kees om het op te lossen?",
        "opties": [
          "plakte de band met een setje",
          "gebruikte een lange stok",
          "vroeg hem mee te spelen"
        ],
        "goed": "vroeg hem mee te spelen",
        "uitleg": "Kees vroeg hem mee te spelen; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Kees zich?",
        "opties": [
          "behulpzaam",
          "vindingrijk",
          "dankbaar"
        ],
        "goed": "behulpzaam",
        "uitleg": "In de tekst staat dat Kees zich behulpzaam voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "hij was nieuw en kende niemand",
          "de vogel was tegen een raam gevlogen",
          "het touw was om een tak gedraaid"
        ],
        "goed": "hij was nieuw en kende niemand",
        "uitleg": "De tekst zegt: dat kwam doordat hij was nieuw en kende niemand."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Delen maakt iets leuker",
          "Rustig nadenken lost meer op dan zoeken",
          "Iemand erbij vragen kost weinig en helpt veel"
        ],
        "goed": "Iemand erbij vragen kost weinig en helpt veel",
        "uitleg": "Het verhaal laat zien: iemand erbij vragen kost weinig en helpt veel."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Jara in het bos: vogel met een gebroken vleugel",
    "tekst": "Jara liep door het bos. Plotseling was daar een vogel met een gebroken vleugel. Dat kwam doordat de vogel tegen een raam was gevlogen. Jara was bezorgd en wist even niet wat te doen. Na een tijdje bedacht Jara een plan: Jara belde de dierenambulance. Achteraf vertelde Jara het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Jara liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "in het bos",
          "in de dierentuin"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Jara liep door het bos."
      },
      {
        "vraag": "Wat deed Jara om het op te lossen?",
        "opties": [
          "zocht het baasje met een foto",
          "belde de dierenambulance",
          "zette voer onderaan de boom"
        ],
        "goed": "belde de dierenambulance",
        "uitleg": "Jara belde de dierenambulance; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Jara zich?",
        "opties": [
          "bezorgd",
          "dankbaar",
          "verlegen"
        ],
        "goed": "bezorgd",
        "uitleg": "In de tekst staat dat Jara zich bezorgd voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de vogel was tegen een raam gevlogen",
          "de kat was voor een hond weggerend",
          "de oogst was groter dan verwacht"
        ],
        "goed": "de vogel was tegen een raam gevlogen",
        "uitleg": "De tekst zegt: dat kwam doordat de vogel was tegen een raam gevlogen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Help een dier, maar op de juiste manier",
          "Om hulp vragen is geen zwakte",
          "Van een misser kun je iets nieuws maken"
        ],
        "goed": "Help een dier, maar op de juiste manier",
        "uitleg": "Het verhaal laat zien: help een dier, maar op de juiste manier."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Sanne op de camping: omgevallen emmer verf",
    "tekst": "Sanne kampeerde op de camping. Plotseling was daar een omgevallen emmer verf. Dat kwam doordat iemand tegen de ladder was gestoten. Sanne was geschrokken en wist even niet wat te doen. Na een tijdje bedacht Sanne een plan: Sanne maakte alles schoon met water. Achteraf vertelde Sanne het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Sanne liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de schuur",
          "op de camping",
          "op het schoolplein"
        ],
        "goed": "op de camping",
        "uitleg": "In het verhaal staat dat Sanne kampeerde op de camping."
      },
      {
        "vraag": "Wat deed Sanne om het op te lossen?",
        "opties": [
          "belde de dierenambulance",
          "maakte alles schoon met water",
          "deelde ze met de buren"
        ],
        "goed": "maakte alles schoon met water",
        "uitleg": "Sanne maakte alles schoon met water; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Sanne zich?",
        "opties": [
          "vrolijk",
          "geschrokken",
          "opgelucht"
        ],
        "goed": "geschrokken",
        "uitleg": "In de tekst staat dat Sanne zich geschrokken voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "iemand was tegen de ladder gestoten",
          "er zat een scherf glas in de band",
          "de pen was helemaal leeg"
        ],
        "goed": "iemand was tegen de ladder gestoten",
        "uitleg": "De tekst zegt: dat kwam doordat iemand was tegen de ladder gestoten."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Doorzetten helpt om iets op te lossen",
          "Rustig blijven werkt beter dan trekken",
          "Eerlijk opruimen na een ongelukje"
        ],
        "goed": "Eerlijk opruimen na een ongelukje",
        "uitleg": "Het verhaal laat zien: eerlijk opruimen na een ongelukje."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Kees bij de markt: dichte deur zonder sleutel",
    "tekst": "Kees hielp op de markt. Plotseling was daar een dichte deur zonder sleutel. Dat kwam doordat de sleutel binnen op de tafel lag. Kees was verlegen en wist even niet wat te doen. Na een tijdje bedacht Kees een plan: Kees vroeg de buurvrouw om hulp. Achteraf vertelde Kees het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Kees liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "bij de markt",
          "op het strand",
          "in de dierentuin"
        ],
        "goed": "bij de markt",
        "uitleg": "In het verhaal staat dat Kees hielp op de markt."
      },
      {
        "vraag": "Wat deed Kees om het op te lossen?",
        "opties": [
          "vroeg de buurvrouw om hulp",
          "deelde ze met de buren",
          "zette voer onderaan de boom"
        ],
        "goed": "vroeg de buurvrouw om hulp",
        "uitleg": "Kees vroeg de buurvrouw om hulp; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Kees zich?",
        "opties": [
          "behulpzaam",
          "geduldig",
          "verlegen"
        ],
        "goed": "verlegen",
        "uitleg": "In de tekst staat dat Kees zich verlegen voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "er zat een scherf glas in de band",
          "de wind had het papier meegenomen",
          "de sleutel lag binnen op de tafel"
        ],
        "goed": "de sleutel lag binnen op de tafel",
        "uitleg": "De tekst zegt: dat kwam doordat de sleutel lag binnen op de tafel."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Met een slim idee kom je verder",
          "Om hulp vragen is geen zwakte",
          "Delen maakt iets leuker"
        ],
        "goed": "Om hulp vragen is geen zwakte",
        "uitleg": "Het verhaal laat zien: om hulp vragen is geen zwakte."
      }
    ]
  },
  {
    "niveau": 6,
    "titel": "Iris in het bos: gescheurde tekening",
    "tekst": "Iris liep door het bos. Plotseling was daar een gescheurde tekening. Dat kwam doordat de wind het papier had meegenomen. Iris wist even niet wat te doen. Na een tijdje bedacht Iris een plan: Iris plakte de stukken met tape. Toen het gelukt was, voelde Iris zich opgelucht. Achteraf vertelde Iris het thuis. Niet iedereen zou het zo hebben aangepakt, maar het probleem was in ieder geval opgelost. Iris liep tevreden naar huis.",
    "vragen": [
      {
        "vraag": "Waar gebeurt dit verhaal?",
        "opties": [
          "in de bibliotheek",
          "in het zwembad",
          "in het bos"
        ],
        "goed": "in het bos",
        "uitleg": "In het verhaal staat dat Iris liep door het bos."
      },
      {
        "vraag": "Wat deed Iris om het op te lossen?",
        "opties": [
          "plakte de stukken met tape",
          "vroeg hem mee te spelen",
          "zette voer onderaan de boom"
        ],
        "goed": "plakte de stukken met tape",
        "uitleg": "Iris plakte de stukken met tape; daardoor kwam het goed."
      },
      {
        "vraag": "Hoe voelde Iris zich?",
        "opties": [
          "verlegen",
          "opgelucht",
          "geduldig"
        ],
        "goed": "opgelucht",
        "uitleg": "In de tekst staat dat Iris zich opgelucht voelde."
      },
      {
        "vraag": "Waardoor kwam het probleem?",
        "opties": [
          "de oogst was groter dan verwacht",
          "de wind had het papier meegenomen",
          "de vogel was tegen een raam gevlogen"
        ],
        "goed": "de wind had het papier meegenomen",
        "uitleg": "De tekst zegt: dat kwam doordat de wind had het papier meegenomen."
      },
      {
        "vraag": "Wat is de hoofdgedachte?",
        "opties": [
          "Delen maakt iets leuker",
          "Rustig nadenken lost meer op dan zoeken",
          "Van een misser kun je iets nieuws maken"
        ],
        "goed": "Van een misser kun je iets nieuws maken",
        "uitleg": "Het verhaal laat zien: van een misser kun je iets nieuws maken."
      }
    ]
  }
];
if (typeof module !== 'undefined') module.exports = LEZEN;
