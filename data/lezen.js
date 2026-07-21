// data/lezen.js — Begrijpend lezen. Korte verhaaltjes die worden VOORGELEZEN, met
// begripsvragen en tikbare antwoorden (weinig leeslast → geschikt voor beelddenkers/dyslexie).
// { niveau:1-3, titel, tekst, vragen:[ { vraag, opties:[...], goed, uitleg } ] }
// Regels (bewaakt door de testsuite): 'goed' staat letterlijk én uniek in 'opties'; elke vraag heeft uitleg.
// niveau 1 = groep 3, 2 = groep 4-5, 3 = groep 6+. Voeg gerust eigen verhalen toe.
var LEZEN = [
  // ---------- niveau 1 (groep 3): kort, concreet ----------
  { niveau:1, titel:"De kat op het dak",
    tekst:"Tom de kat zit op het dak. Hij ziet een vogel. De vogel vliegt snel weg. Tom miauwt zachtjes.",
    vragen:[
      { vraag:"Waar zit Tom?", opties:["Op het dak","In de tuin","Op de bank"], goed:"Op het dak", uitleg:"In het verhaal zit Tom op het dak." },
      { vraag:"Wat ziet Tom?", opties:["Een vogel","Een hond","Een vis"], goed:"Een vogel", uitleg:"Tom ziet een vogel die wegvliegt." },
      { vraag:"Waarom miauwt Tom zachtjes?", opties:["De vogel is weg","Hij heeft honger","Hij gaat slapen"], goed:"De vogel is weg", uitleg:"De vogel vloog weg, dus Tom kon hem niet pakken." }
    ] },
  { niveau:1, titel:"Sara en de bal",
    tekst:"Sara speelt met haar rode bal in de tuin. De bal rolt onder de struik. Sara kruipt erachteraan en pakt hem. Ze lacht blij.",
    vragen:[
      { vraag:"Welke kleur heeft de bal?", opties:["Rood","Blauw","Groen"], goed:"Rood", uitleg:"In het verhaal is de bal rood." },
      { vraag:"Waar rolt de bal heen?", opties:["Onder de struik","In het water","Op straat"], goed:"Onder de struik", uitleg:"De bal rolt onder de struik." },
      { vraag:"Hoe voelt Sara zich aan het eind?", opties:["Blij","Verdrietig","Boos"], goed:"Blij", uitleg:"Sara lacht, dus ze is blij dat ze de bal heeft." }
    ] },
  { niveau:1, titel:"Regen",
    tekst:"Het regent buiten. Bram pakt zijn laarzen en zijn jas. Hij springt in de plassen. Zijn broek wordt helemaal nat.",
    vragen:[
      { vraag:"Wat voor weer is het?", opties:["Regen","Zon","Sneeuw"], goed:"Regen", uitleg:"Het regent buiten." },
      { vraag:"Wat pakt Bram?", opties:["Laarzen en jas","Zijn fiets","Een paraplu"], goed:"Laarzen en jas", uitleg:"Bram pakt zijn laarzen en zijn jas." },
      { vraag:"Waarom wordt zijn broek nat?", opties:["Hij springt in plassen","Hij valt in het gras","Hij wast zijn broek"], goed:"Hij springt in plassen", uitleg:"Door in de plassen te springen wordt zijn broek nat." }
    ] },
  // ---------- niveau 2 (groep 4-5): oorzaak/gevolg, gevoel ----------
  { niveau:2, titel:"De verjaardag",
    tekst:"Lisa wordt vandaag acht jaar. Ze krijgt een cadeau van oma: een doos met verf. Lisa houdt heel veel van tekenen. Daarom is ze superblij. Ze maakt meteen een mooie tekening voor oma.",
    vragen:[
      { vraag:"Hoe oud wordt Lisa?", opties:["Acht","Zeven","Tien"], goed:"Acht", uitleg:"Lisa wordt vandaag acht jaar." },
      { vraag:"Wat zit er in het cadeau?", opties:["Verf","Een boek","Snoep"], goed:"Verf", uitleg:"In de doos van oma zit verf." },
      { vraag:"Waarom is Lisa zo blij met het cadeau?", opties:["Ze houdt van tekenen","Ze wil snoep","Ze houdt van lezen"], goed:"Ze houdt van tekenen", uitleg:"Lisa houdt van tekenen, en met verf kan ze tekenen." }
    ] },
  { niveau:2, titel:"De verdwaalde hond",
    tekst:"Op straat loopt een hond helemaal alleen, zonder baasje. Milan ziet dat de hond een bandje draagt met een telefoonnummer. Samen met zijn moeder belt hij dat nummer. Even later komt het baasje blij de hond ophalen.",
    vragen:[
      { vraag:"Wat draagt de hond om zijn nek?", opties:["Een bandje met een nummer","Een sjaal","Een riem"], goed:"Een bandje met een nummer", uitleg:"De hond draagt een bandje met een telefoonnummer." },
      { vraag:"Wat doet Milan als hij het nummer ziet?", opties:["Hij belt het nummer","Hij rent weg","Hij aait de hond"], goed:"Hij belt het nummer", uitleg:"Milan belt met zijn moeder het nummer op het bandje." },
      { vraag:"Waarom kon het baasje worden gevonden?", opties:["Door het nummer op het bandje","Door de kleur van de hond","Door te blaffen"], goed:"Door het nummer op het bandje", uitleg:"Dankzij het telefoonnummer konden ze het baasje bellen." }
    ] },
  { niveau:2, titel:"Storm op zee",
    tekst:"De vissers varen uit met hun boot. Maar de lucht wordt steeds donkerder. De wind wordt sterker en de golven worden hoger. De kapitein besluit snel terug te varen naar de haven. Als ze veilig aankomen, is iedereen opgelucht.",
    vragen:[
      { vraag:"Wat gebeurt er met het weer?", opties:["Het wordt storm","Het wordt mooi weer","Het gaat sneeuwen"], goed:"Het wordt storm", uitleg:"De lucht wordt donker, de wind sterker en de golven hoger: storm." },
      { vraag:"Wat besluit de kapitein?", opties:["Terugvaren naar de haven","Verder de zee op","Gaan vissen"], goed:"Terugvaren naar de haven", uitleg:"De kapitein vaart terug naar de haven." },
      { vraag:"Waarom varen ze terug?", opties:["Het is te gevaarlijk","Ze hebben genoeg vis","Het is etenstijd"], goed:"Het is te gevaarlijk", uitleg:"Door de storm is het te gevaarlijk om te blijven." }
    ] },
  // ---------- niveau 3 (groep 6+): inzicht, hoofdgedachte, waarom ----------
  { niveau:3, titel:"De uitvinding van Noor",
    tekst:"Noor knutselt graag. Ze merkt dat haar kleine broertje steeds zijn knuffel kwijt is en dan huilt. Daarom maakt Noor een klein belletje dat ze aan de knuffel hangt. Nu horen ze meteen waar de knuffel ligt. Haar broertje is dolblij.",
    vragen:[
      { vraag:"Welk probleem lost Noor op?", opties:["Haar broertje raakt zijn knuffel kwijt","De knuffel is stuk","Het belletje is te hard"], goed:"Haar broertje raakt zijn knuffel kwijt", uitleg:"Het broertje was steeds zijn knuffel kwijt; dat lost Noor op." },
      { vraag:"Hoe lost ze het op?", opties:["Een belletje aan de knuffel","Een nieuwe knuffel kopen","De knuffel verstoppen"], goed:"Een belletje aan de knuffel", uitleg:"Door een belletje hoor je waar de knuffel is." },
      { vraag:"Wat voor kind is Noor waarschijnlijk?", opties:["Vindingrijk en behulpzaam","Lui","Verlegen"], goed:"Vindingrijk en behulpzaam", uitleg:"Ze bedenkt zelf een slimme oplossing om te helpen." }
    ] },
  { niveau:3, titel:"De wedstrijd",
    tekst:"Sam traint elke dag hard voor de grote hardloopwedstrijd. Tijdens de race struikelt hij en valt hard op de grond. Toch staat hij weer op en rent door tot de finish. Hij wint niet, maar iedereen klapt heel hard voor hem.",
    vragen:[
      { vraag:"Wat gebeurt er tijdens de race?", opties:["Sam struikelt en valt","Sam stopt met rennen","Sam wint de race"], goed:"Sam struikelt en valt", uitleg:"Sam struikelt en valt, maar staat weer op." },
      { vraag:"Waarom klapt iedereen voor Sam?", opties:["Omdat hij niet opgaf","Omdat hij won","Omdat hij het snelst was"], goed:"Omdat hij niet opgaf", uitleg:"Hij won niet, maar gaf niet op — dat vindt iedereen knap." },
      { vraag:"Wat leert dit verhaal ons?", opties:["Doorzetten is belangrijk","Rennen is gevaarlijk","Winnen is het enige dat telt"], goed:"Doorzetten is belangrijk", uitleg:"De hoofdgedachte is: blijven doorzetten, ook na een tegenslag." }
    ] },
  { niveau:3, titel:"Het geheim van de tuin",
    tekst:"Elke ochtend vindt opa verse tomaten in zijn tuin, terwijl hij zelf niets heeft geplant. Hij snapt er niets van. Op een nacht kijkt hij stiekem uit het raam. Dan ziet hij de buurvrouw die zachtjes plantjes neerzet als verrassing. Opa glimlacht en zegt de volgende dag niets.",
    vragen:[
      { vraag:"Wat vindt opa elke ochtend?", opties:["Verse tomaten","Bloemen","Een brief"], goed:"Verse tomaten", uitleg:"Opa vindt elke ochtend verse tomaten." },
      { vraag:"Wie zet de plantjes neer?", opties:["De buurvrouw","Opa zelf","De postbode"], goed:"De buurvrouw", uitleg:"'s Nachts ziet opa de buurvrouw plantjes neerzetten." },
      { vraag:"Waarom zegt opa er niets over?", opties:["Om de verrassing niet te bederven","Hij is het vergeten","Hij is boos"], goed:"Om de verrassing niet te bederven", uitleg:"Opa glimlacht; hij wil de lieve verrassing van de buurvrouw laten bestaan." }
    ] }
];
if (typeof module !== 'undefined') module.exports = LEZEN;
