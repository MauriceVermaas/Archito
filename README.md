# Blokwereld

Nederlandstalige leer-webapp voor de basisschool (groep 3 t/m 5+), gericht op **beelddenkers** en kinderen met (mogelijke) **dyslexie**. De app combineert oefenen (rekenen, spelling, lezen, talen, kritisch denken) met een game-beloningslus in blokjes-bouwstijl. Alles draait in één `index.html`, zonder framework en zonder build-stap.

Versie: **3.25.0** (zichtbaar in de footer).

Nieuw in **3.25.0** — *uitgebreide oudersectie: zonder scherm spelen*: in het 👪 Ouders-scherm (achter de PIN) zit nu een sectie **"Zonder scherm oefenen"** met praktische tips & spelletjes om samen te spelen zónder telefoon of tablet. Gericht op beelddenkers en dyslexie (samen, met de handen, multisensorieel), verdeeld over rekenen, klanken/spelling, luisteren/begrijpen, beelddenken, geheugen en bewegen — met per spelletje wat je nodig hebt en hoe je het doet. De inhoud staat in `data/oudertips.js` en is vrij uit te breiden.

Nieuw in **3.24.0** — *betrouwbaarder geluid*: de audio-ontgrendeling is steviger gemaakt. Bij élke tik/toets wordt de audiocontext wakker gemaakt (niet alleen de allereerste keer), met een stille buffer die iOS echt ontgrendelt, en de audio wordt opnieuw geactiveerd zodra je terugkeert in de app (na wegklikken of schermvergrendeling). Dat lost het "geluid werkt niet altijd" op mobiel grotendeels op. Controleer wel dat het geluid aanstaat (🔔 in het ☰-menu).

Nieuw in **3.23.0** — *weghakken geeft punten terug*: als je een blok weghakt krijg je nu de waarde ervan terug (in plaats van dat het 1 kost). Zo kun je vrij bouwen en verbouwen zonder verlies. Om eindeloos grinden te voorkomen zit er — net als bij oogsten — een dagelijkse grens op wat je met weghakken kunt terugverdienen (max 10 per dag).

Nieuw in **3.22.0** — *bouwen werkt weer intuïtief én ziet er 3D uit*: je kunt nu gewoon **op de grond tikken** om daar een blok te plaatsen (of weg te hakken), naast lopen met de pijltjes en ✋. De bouwmodus start meteen in **bouw-stand** en er staat een korte tip in beeld. Blokken worden nu getekend als echte **isometrische kubussen** met gearceerde zijkanten, dus torens en heuvels zien er duidelijk 3D uit in plaats van platte ruitjes.

Nieuw in **3.21.0** — *rustiger menu, profiel kiezen, en duidelijke uitleg*: de vele knopjes bovenin zitten nu netjes achter één **☰ hamburgermenu** (wissel kind, thema, stickerboek, geluid, muziek, voorleesstem, ouders, premium, installeren). Bij **terugkomen** kies je eerst met welk kind je verder gaat (als er meerdere profielen zijn). Elk spel heeft nu een **ℹ️ spelregels**-knop met korte, voorgelezen uitleg, en een **💡 hint**-knop die niet het antwoord verklapt maar uitlegt hóe je het aanpakt.

Nieuw in **3.20.0** — *feedback-fixes*: de **onboarding en alle pop-ups** verschijnen weer als een nette gecentreerde modal (een CSS-regel zette de overlay per ongeluk onderaan als blok — opgelost). De **bouwwereld oogt weer 3D**: de startwerelden krijgen zacht terreinreliëf (heuvels van grondblokken), zonder objecten toe te voegen. **Water glinstert** nu (zachte animatie, reduced-motion-veilig). Er is een **🚩 vlag-blok** (en 🗼 toren) zodat opdrachten als "bouw een toren met een vlag" ook echt kunnen. En er zit nu een **dagelijkse grens** op wat je met oogsten kunt verdienen (max 10 per dag), zodat leren de hoofdbron blijft.

Nieuw in **3.19.0** — *coolere spelnamen*: alle spellen hebben nu stoerdere, avontuurlijkere namen, per thema passend. Craft bijvoorbeeld: Diamantmijn (rekenen), Woordsmederij (spelling), Leesavontuur (begrijpend lezen), Bliksemflits (flitslezen), Schatgeheugen (memory), Mysteriegrot (denken), Blokrijk (bouwen); plus themavrij Engelse/Spaanse Expeditie en Puzzellab. Elk van de zes thema's (Craft, Galaxy, Power-Up, Unicorn, Voetbal, Zeemeermin) kreeg een eigen set. Alleen de namen zijn veranderd; de spellen zelf blijven gelijk.

Nieuw in **3.18.0** — *Begrijpend lezen (📚)*: een nieuw leerspel speciaal voor kinderen die moeite hebben met lezen. Het korte verhaal wordt **voorgelezen** (zodat het ontcijferen niet de drempel is), staat in **grote, rustige leesletter**, en daarna volgen **begripsvragen** met tikbare antwoorden (letterlijk, oorzaak-gevolg, gevoel en hoofdgedachte). Bij een goed antwoord komt er **uitleg** ("Goed! …") die ook wordt voorgelezen; bij een fout hoor je "luister nog eens goed" en wordt het verhaal opnieuw voorgelezen. Beschikbaar in **alle groepen** (ook groep 3), met beloning en levels zoals de andere spellen. De verhalen staan in `data/lezen.js` — makkelijk uit te breiden met stof op maat.

Nieuw in **3.17.0** — *een echte onboarding bij de eerste keer*: start je de app voor het eerst, dan krijg je nu een vriendelijke, stap-voor-stap onboarding — **naam → leeftijd → poppetje (avatar)** — groot, visueel, voorgelezen en met voortgangsstipjes. Je kunt niet verder zonder naam, en er wordt altijd een avatar ingevuld (met terugval). De onboarding verschijnt **alleen de eerste keer**; daarna onthoudt de app alles en pas je het aan via 👤. (Voorheen was dit één dicht formulier.)

Nieuw in **3.16.0** — *missies, mini-games en stickers (de 5 gouden regels)*: er is nu een **verhaallijn met missies** (`data/missies.js`) die het oefenen een doel geven ("Bram wil bouwen!", "De boerderij ontwaakt", …). Elke missie heeft een voortgangsbalk op het startscherm en levert bij voltooiing diamanten én een sticker op. Na een level-up verschijnt soms een korte **mini-game** (schatkist kiezen of alle diamanten tikken) voor een bonus. En er is een **stickerboek** (🏅 in de balk, `data/stickers.js`): verzamel stickers via missies, levels en mini-games. Alles is data-gestuurd en gedekt door nieuwe tests.

Nieuw in **3.15.0** — *akkerbouw + eigen avatar*: er is een nieuw **akker**-blok. Plaats je een akker, dan groeit daar vanzelf **groente en fruit** (🌱 → 🥕🍓🌽🍎🍇🍅) terwijl je in de bouwwereld bent. Loop je erover (of gebruik ✋), dan **oogst** je het voor **+1** — bewust klein gehouden, zodat de meeste diamanten met de leerspellen verdiend blijven worden. Daarnaast kiest het kind nu zijn **eigen avatar**: in het profielscherm kies je uit een set poppetjes; die avatar is meteen het **bestuurbare poppetje** in de bouwwereld en de afbeelding op de profielkaart (met terugval op het thema-poppetje). Gedekt door nieuwe tests.

Nieuw in **3.14.0** — *bouwen moet je verdienen*: een kind start nu met **0 credits** en de bouwmodus is **op slot**. Pas na **10 verdiende credits** (via oefenen) gaat de bouwwereld open — met een duidelijk ontgrendel-signaal; daarna blijft hij open (ook als je alles uitgeeft). De bouwwereld start voortaan **helemaal kaal** (alleen basisgrond): het kind bouwt en koopt zelf leven met wat het verdient. Er is een prominent **“punten verdiend”-signaal** bij elke afronding (level-up, dagquest, challenge) — bruikbaar voor toekomstige toetsen — en als de credits **op** zijn verschijnt een duidelijke melding dat er eerst nieuwe verdiend moeten worden, met een snelkoppeling naar oefenen. Op het startscherm toont de bouwtegel een slot met “nog X te gaan”. Gedekt door nieuwe tests.

Nieuw in **3.13.0** — *je eigen poppetje + eigen diertjes*: het **bestuurbare poppetje** is nu duidelijk gemarkeerd met de **eigen naam van het kind** erboven en een eigen wip, zodat het opvalt tussen de rondlopende poppetjes — je loopt er weer makkelijk zelf mee (pijltjes of ⬅️➡️⬆️⬇️). De rondlopende dieren en poppetjes zijn nu **data-gestuurd** (`data/wezens.js`) en volledig **in het beheerscherm aan te passen**: er is een nieuw tabblad **"Dieren"** waar je per wereld (en voor "Te koop") figuurtjes toevoegt/verwijdert, de emoji wijzigt of een **eigen afbeelding uploadt** (zoals bij de mascottes; met dezelfde formaat-/maatcontrole). Een eigen plaatje vervangt de emoji, ook voor de figuurtjes die je bijkoopt.

Nieuw in **3.12.0** — *een levende bouwwereld*: de bouwmodus heeft nu een aparte **levende laag** waarin **dieren én poppetjes vanzelf rondlopen** — ze glijden soepel van vakje naar vakje en wippen zachtjes, zodat er altijd actie in de wereld zit. Elke wereld wordt automatisch bevolkt (boerderijdieren in de Blokwereld, krab/meeuw op het strand, hond/eend/eekhoorn in het park, kat thuis) en **meer ruimte = meer leven**. Je kunt **losse maatjes bijkopen** (🐾-rij) die meteen gaan rondlopen. Het **land uitbreiden** kan nu verder (max **30×30**) en er staat een duidelijke **➕ Groter**-knop bij de wereldkiezer. Het poppetje beweegt voortaan via zijn eigen figuurtje (vloeiend, geen volledige hertekening meer per stap). Alles respecteert `prefers-reduced-motion` (geen glide/gewip, rustiger tempo). Gedekt door nieuwe tests.

Nieuw in **3.11.0** — *juice-laag: het voelt nu als een game*: elk goed antwoord geeft nu een **deeltjes-burst** (blokjes spatten weg), een korte **screen-pop** en een **stijgende toon** — hoe langer je goed hebt, hoe blijer het klinkt. Er is een **combo/reeks-teller** in de HUD (🔥): elke **5 goede antwoorden op rij** geeft een bonus in valuta en een groot combo-moment; je **beste reeks** wordt onthouden en de mascotte daagt je uit die te kraken. De mascotte **juicht en sprankelt** als je erop tikt. Nieuw is optionele, rustige **achtergrondmuziek** (🎵-knop in de balk, standaard uit; zachte pentatonische loop, geen bestanden). De hele app kreeg een **moderne pixel/flat-laag**: een subtiele voxel-gridtextuur, blok-achtige knoppen met highlight en een gehouwen-steen-look voor het rekenblok. Alles respecteert `prefers-reduced-motion` en de toegankelijkheid (leesfont, contrast) blijft ongewijzigd. Volledig gedekt door nieuwe tests.

Nieuw in **3.10.0** — *meerdere kinderen in één app*: via 👤 open je een **profielkiezer** met een kaart per kind (Squla-achtig). Elk kind heeft een **eigen profiel en eigen voortgang** (levels, valuta, thema, werelden) en je wisselt met één tik. Zoveel kinderen als je wilt, **zonder extra kosten**. Het 👪 Ouders-scherm toont nu **alle kinderen** met hun voortgang. Onder water bewaart de app alle profielen in één opslag-sleutel (met automatische migratie van een bestaand enkel profiel); privacy blijft hetzelfde: alles lokaal, geen accounts.

Nieuw in **3.9.0** — *feedback uit de eerste testronde verwerkt*: geluidseffecten spelen nu betrouwbaar (ook bij het afronden van een spel) doordat de audio op mobiel bij de eerste tik wordt "wakker gemaakt"; **grotere, prominentere afbeeldingen/tegels** in memory, talen, beelddenken en Beeldlab (Squla-achtig); een apart **👪 Ouders-scherm** (achter de ouder-PIN) met **voortgang per onderdeel** (levels, oefendagen, XP, valuta) los van het kind-profiel (👤); en twee nieuwe thema's: **⚽ Voetbalveld** en **🧜‍♀️ Zeemeermin**, elk met eigen kleuren en mascotte.

Nieuw in **3.8.0** — *klaar voor de kids-test (freemium)*: de app is voorbereid op een testronde op **iPhone en Android** als PWA. Er is een **Premium-scherm** (⭐ in de balk) als fake-door om interesse te peilen — tijdens de test is alles gratis en ontgrendeld (`TESTMODUS = true`; de haak `heeftPremium()` staat klaar voor later afschermen). Nieuw: een **installatie-tip** en install-knop (Android-installprompt + iOS "zet op beginscherm"), iOS-thuisscherm-meta, een **feedbackknop** (mailt naar `FEEDBACK_EMAIL`), en een aparte ouderpagina **`installeren.html`** met stap-voor-stap uitleg per platform. Zie **`PUBLICEREN.md`** voor de volledige publicatie- en testgids. De hele app heeft een zachte, ronde, speelse pastel-look (Toca-geïnspireerd, eigen stijl — geen merkassets).

Nieuw in **3.7.0** — *veel meer content*: alle spellen zijn minstens **verviervoudigd** zodat de app lang uitdagend blijft. Grofweg: rekenen ~1780 sommen (4×), spelling ~314 woorden, flitswoorden ~287, memory ~183, talen ~194, denken ~193, beelddenken ~345, Beeldlab ~152 puzzels en ~180 creatieve opdrachten. De rekenopgaven komen uit `gen_sommen.js`; de overige uitbreiding uit `gen_content.js` (gecureerde woordenschat + template-generatie, met dezelfde validatie als de testsuite). Draai `node gen_content.js` om nog meer te genereren.

Nieuw in **3.6.0** — *beter beheer + afbeeldingen*: het beheerscherm (`beheer.html`) is opnieuw opgebouwd met een **overzichtelijk tabblad-menu** (één onderdeel tegelijk in beeld) in plaats van één lange lijst. Nieuw is een volwaardig **afbeeldingssysteem**: je kunt eigen plaatjes uploaden voor **memory**, **talen**, de **mascottes** en de **app-iconen**, met per plek de juiste **formaten, maten en gewichten**. Het beheer controleert elke upload op formaat (PNG/WebP/SVG/JPG/GIF), afmetingen en bestandsgrootte, en **weigert** wat niet voldoet (waarschuwen én blokkeren). App-iconen moeten exact 192×192 of 512×512 PNG zijn. De app toont voortaan een eigen afbeelding waar die is ingesteld, met de emoji als terugval.

Nieuw in **3.5.0** — *doe-puzzels voor beelddenkers*: er is een nieuw onderdeel **Beeldlab** (🧩) met vier activiteiten die verder gaan dan aanwijzen: **Op volgorde** (tik de beelden in de juiste volgorde, bv. klein → groot), **Na-bouwen** (bouw een klein kleurpatroon na op een raster), **Geheugen** (kijk kort naar een rij, dan verdwijnt hij — welke zag je?) en **Zoekplaat** (tik alle doelen in een veld — visueel scannen). Weinig tekst, alles voorleesbaar, eigen level en beloning. De inhoud staat in `data/beeldlab.js`. Dit verschuift het denken van *herkennen* naar *doen en verbeelden*.

Nieuw in **3.4.0** — *eigen content beheren*: er is nu een lokaal **beheerscherm (CMS)**, `beheer.html`. Daarmee wijzig je alle leerstof (rekenen, spelling, flitswoorden, memory, talen, tekst-denken, beelddenken en de creatieve opdrachten) én de **mascottes** — inclusief het uploaden van een **eigen mascotte-afbeelding** per thema. Het beheerscherm controleert je invoer met dezelfde regels als de testsuite en weigert de export bij een fout. Je exporteert de bijgewerkte `data/…js`-bestanden en zet ze terug in de map `data/`. Er is geen server en er gaat niets naar internet. Zie *Beheer / eigen content* verderop. De mascottes zijn hiervoor verhuisd naar `data/mascottes.js`.

Nieuw in **3.3.0** — *focus op de beelddenker*: de **Denkgrot** is omgebouwd tot een echt rechterbrein-onderdeel. In plaats van tekstvragen die je moet lezen, krijgt het kind nu **visuele puzzels** met grote, tikbare beeldtegels en minimale tekst (alles ook voorgelezen): *hoort er niet bij*, *maak de rij af*, *draai-/pijlpatroon*, *spiegelen*, *zoek dezelfde*, *grootste/kleinste* en *ontbrekend stuk*. De puzzels staan in `data/beelddenken.js` en zijn even eenvoudig uit te breiden als de overige content. Visuele puzzels staan centraal in de flow; de oude tekst-denkopgaven en de wondervraag komen af en toe nog langs voor variatie.

Nieuw in **3.2.0**: elk thema heeft nu een eigen **mascotte** op het startscherm — een groot, zachtjes bewegend figuurtje met een spraakbubbel dat het kind bij naam begroet en aanmoedigt. Tik erop en het maatje praat (voorlezen via de systeemstem). De mascotte wisselt automatisch mee met het gekozen thema: 🦫 Bram (Craft), 👽 Kosmo (Galaxy), 🍄 Turbo (Power-Up) en 🦄 Fee (Unicorn). De animatie respecteert `prefers-reduced-motion`.

---

## Starten

Er is geen installatie of build nodig.

- **Snel proberen:** dubbelklik op `index.html` — de app werkt via `file://`.
- **Aanbevolen (PWA/offline/voorlezen):** serveer de map via een statische server, bijvoorbeeld:

  ```bash
  cd blokwereld
  python3 -m http.server 8000
  # open http://localhost:8000
  ```

  Via `https` (bijv. GitHub Pages) werkt de app na het eerste bezoek ook **offline** en is hij **installeerbaar** (iOS: Deel → *Zet op beginscherm*; Android: menu → *App installeren*).

De eerste keer vraagt de app om een naam, leeftijd, speeltijd en (optioneel) een ouder-PIN. Onderaan staat een **Reset**-link die alle gegevens wist.

## Deployen (GitHub Pages)

De app is een statische map en is klaar om te publiceren. De aanbevolen route is **GitHub Pages** (gratis, `https` → offline + installeerbaar):

1. Maak een GitHub-repository en push de **inhoud van deze map** naar de `main`-branch (de bestanden `index.html`, `manifest.json`, `sw.js`, `data/`, `icons/` staan dan in de repo-root).
2. Ga in de repo naar **Settings → Pages** en zet *Source* op **GitHub Actions**.
3. De meegeleverde workflow `.github/workflows/deploy.yml` draait bij elke push naar `main` eerst de testsuite (`node tests/test.js`) en publiceert daarna automatisch. **Bij een gefaalde test wordt niet gedeployed.**
4. Na de eerste run staat de app op `https://<gebruiker>.github.io/<repo>/`.

Omdat de service worker met relatieve paden werkt (`scope: "./"`), werkt de app zowel op een projectsubpad (`/repo/`) als op een eigen (sub)domein zonder aanpassing.

**Andere hosts** (Netlify, Vercel, Cloudflare Pages, of een eigen webserver): upload simpelweg de hele map als statische site. Er is geen build-stap. Enige vereiste voor PWA-functies (offline + installeren) is dat de site via **`https`** wordt geserveerd. Google Fonts wordt via een CDN geladen als *progressive enhancement*; valt die weg (bv. offline), dan schakelt de app netjes terug op systeemfonts. De service worker laat cross-origin verzoeken (zoals de fonts) ongemoeid en cachet alleen de eigen bestanden.

**Deploychecklist:** `node tests/test.js` groen · `APP_VERSIE` (index.html) = `CACHE_VERSIE` (sw.js) · `manifest.json` geldig met maskable iconen · serveren via `https`.

## Testen

De volledige testsuite draait headless met Node (< 1 seconde):

```bash
node tests/test.js
```

De suite dekt drie lagen:

1. **Contentvalidatie** — antwoorden kloppen en zijn positieve gehele getallen, geen dubbele sommen, woorddelen vormen exact het woord, instinker zit nooit in het woord, goed-antwoord staat in de opties, lookalikes bevatten het woord niet, verplichte velden aanwezig.
2. **Knop→functie-dekking** — elke `onclick`/`onchange` in `index.html` verwijst naar een bestaande functie (vangt kapotte knoppen vóór de gebruiker dat doet).
3. **Headless scenario-tests** — met een stateful DOM-stub (`tests/harness.js`) wordt elk spel doorgespeeld: Rekenmijn (12 goede antwoorden met level-ups, fout registreert, hints voor álle somtypes, Mijn muur, adaptief model), Smederij (foto→bouwen→achterstevoren, ook dubbele klankdelen), Bouwmeester (verhaaltjessommen + analoge klok), Woordflitser, Fotomemory, beide talen, Denkgrot (gewone puzzel én geforceerde wondervraag), Bouwmodus (bouwen/weghakken kosten, avontuur gratis, verstopte schat, challenge, verhaal), alle 4 thema's, alle leeftijden 5–12, dagquest→kist en de schermtijd-limiet.

**Definition of done:** een wijziging is pas klaar als (a) `node tests/test.js` volledig groen is, (b) bij nieuwe functionaliteit ook nieuwe tests zijn toegevoegd, en (c) `APP_VERSIE` (in `index.html`) én `CACHE_VERSIE` (in `sw.js`) zijn opgehoogd.

## Content aanvullen

Alle leerstof staat in losse databestanden in `data/`, die vóór het hoofdscript geladen worden. Elk bestand heeft een uitlegheader voor ouders/redacteuren. Houd het formaat exact aan; `node tests/test.js` bewaakt de correctheid.

| Bestand | Formaat |
|---|---|
| `data/sommen.js` | `{ a, op:"+"\|"−"\|"×"\|":"\|"½", b, niveau:1-3 }` — antwoorden altijd positief en geheel, geen dubbelen |
| `data/woorden.js` | `{ w, delen:[...], extra:[...], niveau }` — delen samengevoegd = `w`; instinker (`extra`) nooit in het woord |
| `data/flitswoorden.js` | `{ w, alt:[2 lookalikes], niveau }` — lookalikes bevatten `w` niet |
| `data/memory.js` | `{ w, plaatje, niveau }` |
| `data/talen.js` | `{ nl, en, es, plaatje, niveau }` |
| `data/denken.js` | `{ soort, vraag, opties[], goed, uitleg, niveau }` — `goed` staat letterlijk in `opties` (tekst-denkopgaven) |
| `data/beelddenken.js` | `{ soort, opdracht, toon?[], opties[], goed, uitleg, niveau }` — visuele puzzels; `goed` staat uniek in `opties`, `toon` mag `"❓"` als gat bevatten |
| `data/mascottes.js` | `MASCOTTES` per thema: `{ emoji, naam, zinnen:[...], afbeelding? }` — afbeelding (pad of data-URL) vervangt de emoji |
| `data/creatief.js` | `CHALLENGE_DATA`, `WONDER_DATA`, `STARTZIN_DATA` (open opdrachten) |

## Beheer / eigen content (`beheer.html`)

Naast de kinderapp zit er een lokaal **beheerscherm**: open `beheer.html` in je browser (dubbelklikken mag, of via dezelfde http-server als de app). Hiermee kun je zonder programmeren:

- alle leerstof toevoegen, wijzigen of verwijderen (rekenen, spelling, flitswoorden, memory, talen, tekst-denken, beelddenken en de creatieve opdrachten);
- de vier **mascottes** aanpassen: emoji, naam, aanmoedigingen, en een **eigen afbeelding uploaden** per thema (de afbeelding vervangt dan de emoji in de app).

Het beheerscherm valideert je invoer live met dezelfde regels als de testsuite en **weigert de export bij een fout**. Klik per onderdeel op *Exporteer* (of onderaan *Exporteer alles*); je downloadt dan de bijgewerkte `data/…js`-bestanden. Zet die terug in de map `data/` (overschrijven) en ververs de app. Alles blijft op je eigen computer — er is geen server en geen internet nodig. Dit is de eenvoudige, statische beheeroplossing; het uitgebreide online CMS met inlog, rollen en workflow is de aparte commerciële fase (zie *Beheerportaal* onderaan).

`niveau` 1 = groep 3, 2 = groep 4, 3 = groep 5+. Content t/m het eigen niveau doet mee; lagere niveaus draaien als herhaling.

`gen_sommen.js` genereert `data/sommen.js` systematisch per leerlijn (`node gen_sommen.js`); handmatig aanvullen mag ook.

## Profiel & niveaus

Bij de eerste start (en via de 👤-knop) kiest het kind naam + leeftijd (5–12) + speeltijd + optionele ouder-PIN. Leeftijd → groep: ≤6→3, 7→4, 8→5, 9→6, ≥10→7. Groep → contentniveau 1/2/3. Verhaaltjessommen verschijnen pas vanaf groep 4; het spellingspel is er óók voor groep 3 (klankzuivere woorden). Kinderen hebben géén account: naam/leeftijd blijven op het toestel (privacy by design, alles in één `localStorage`-sleutel).

## Levels & adaptief model

100 levels per spel per groepsniveau (talen per taal), apart opgeslagen. Elke 5 goede antwoorden = level +1 (+2 valuta; +10 bij elk tiende level; 👑 bij 100). De stof groeit mee. De Rekenmijn gebruikt een **Bareka-geïnspireerd** model: per som goed/fout-tellers en een gewogen gemiddelde antwoordtijd (EMA). Status verloopt van *nieuw* → *nog oefenen* → *bijna* → *power* (≥3× goed) → *speed* (power én snel genoeg). De selectie weegt fout-sommen zwaarder, traint langzame power-sommen op snelheid en onderhoudt speed-sommen licht. Het **Mijn muur**-scherm toont dit als trots-overzicht met gekleurde chips.

## Stemtips (voorlezen)

De app leest voor via de Web Speech API (`nl-NL`, plus `en-GB`/`es-ES` voor de talen). De 🗣️-knop opent een stemkiezer met testknop. Voor het mooiste geluid: installeer een premium/enhanced Nederlandse stem via de instellingen van je toestel (iOS: *Toegankelijkheid → Gesproken materiaal → Stemmen*; Android: *Instellingen → Toegankelijkheid → Tekst-naar-spraak*). De app kiest automatisch de beste beschikbare stem. Er zijn geen audiobestanden nodig; ook de geluidseffecten zijn gesynthetiseerd (Web Audio).

## Roadmap

- ~~Hosting op GitHub Pages (https → offline + installeerbaar).~~ ✅ gereed (zie *Deployen*).
- PWA verder aankleden (splash, maskable icons per thema).
- Optionele ingesproken kinderstem-audio naast de systeemstem.
- Uitgebreider ouderscherm (voortgang per domein, Mijn muur exporteren).
- Optionele sync via een **anonieme koppelcode** (nooit kindaccounts).

## Beheerportaal (aparte, commerciële fase)

De kinderapp is bewust een statische `file://`-app zonder server en zonder kinddata online. Het **CMS/beheerportaal** uit de specificatie (§11–13) is server-side software en zit daarom **niet** in deze map. De beoogde architectuur:

- Apart beheerportaal op een eigen subdomein, gescheiden van de kinderapp.
- Editors per contenttype met dezelfde validatie als de testsuite (opslaan geweigerd bij een fout) + CSV-import; thema-editor; mediabibliotheek met beeldpipeline (auto-verkleinen naar WebP in 64/256/1024px).
- Workflow concept → preview → publiceren, met versiegeschiedenis en één-klik terugdraaien. Het CMS genereert **statische, ondertekende JSON-contentbestanden** die de app alleen leest (one-way); de laatste versie blijft lokaal gecachet zodat de app offline werkt.
- Admins: e-mail + sterk wachtwoord (argon2) + **verplichte MFA**, rollen beheerder/redacteur, audit log, security-headers (CSP/HSTS), rate limiting. OWASP ASVS als checklist; pentest vóór lancering.

Aanbevolen uitbreiding van de kwaliteitsborging bij de commerciële herbouw: unit tests per module, Playwright end-to-end tests (dagquest/bouwplaats/profiel op desktop + tablet), CI die de suite bij elke push draait en deploy blokkeert bij rood, een toegankelijkheidscheck (contrast, focus, schermlezer-labels) en periodieke handmatige kindtests.

## Mapstructuur

```
blokwereld/
├── index.html          # de complete app (HTML + CSS + JS)
├── manifest.json       # PWA-manifest
├── sw.js               # service worker (cache-first, offline)
├── gen_sommen.js       # generator voor data/sommen.js
├── icons/              # app-iconen 192/512
├── data/               # leerstof (7 bestanden)
└── tests/
    ├── test.js         # de testsuite  (node tests/test.js)
    └── harness.js      # DOM-stub + loader
```

## Bouwmodus: werelden, winkel en uitbreiden

De bouwmodus is een isometrische wereld waarin het kind zijn verdiende valuta uitgeeft. Nieuw sinds 3.1.0:

- **Meerdere werelden** — naast de start-Blokwereld kun je een Strand, Park en Huis erbij hebben en met de wereldkiezer (de icoontjes bovenin) tussen je werelden wisselen. Elke wereld heeft een eigen landschap, poppetje-positie en opgeslagen bouwsels.
- **Bij kunnen kopen (🛒 Winkel)** — met je valuta koop je een **groter bouwveld** (+2 per keer, wordt telkens wat duurder, tot 24×24) of een **nieuwe wereld** erbij. Zo is uitbreiden onderdeel van de beloningslus.
- **Groter & scrollbaar veld** — het bouwveld schaalt mee en zit in een scrollbaar venster, zodat ook grote werelden werken op een klein scherm.
- **Meer speelse items** — naast de bouwblokken en dieren zijn er decoraties en meubels (bloem, struik, bankje, palmboom, boot, bed, tafel, lamp, ballon).

Uitbreidbaar door ontwikkelaars/CMS: een nieuw wereldtype is *alleen* een generatorfunctie + een regel in `bwDef(...)`; een nieuw item is *alleen* een regel in `BLOKKEN`. Dat sluit aan op de datagestuurde opzet en de latere thema-/palet-editor in het CMS.

## Privacy in het kort

Geen server met kinddata, geen tracking, geen analytics van derden, geen advertenties. Alle gegevens blijven op het toestel; ouderfuncties (schermtijd, verlenging) zitten achter een lokale PIN. AVG-proof voor kinderen.
