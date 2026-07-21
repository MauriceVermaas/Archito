# Blokwereld publiceren voor de kids-test (freemium)

Deze gids brengt Blokwereld online zodat kinderen het op **iPhone én Android** kunnen testen. Tijdens de test is alles gratis en volledig ontgrendeld; de Premium-knop is aanwezig om interesse te peilen (er wordt niets afgeschermd en niets verkocht).

Er is **geen app store** nodig: Blokwereld is een PWA (web-app). Kinderen openen een link en zetten die op hun beginscherm.

---

## 1. Zet de app online (GitHub Pages, gratis + https)

1. Maak een gratis account op github.com (als je dat nog niet hebt).
2. Maak een nieuwe repository, bijvoorbeeld `blokwereld`. Zet die op **Public**.
3. Upload de **inhoud van deze map** naar de repository (sleep de bestanden in de browser naar *Add file → Upload files*, of gebruik git). De bestanden `index.html`, `installeren.html`, `manifest.json`, `sw.js`, de mappen `data/` en `icons/` moeten in de **hoofdmap** van de repo staan.
4. Ga naar **Settings → Pages**. Zet *Build and deployment → Source* op **GitHub Actions**. De meegeleverde workflow draait eerst de tests en publiceert daarna automatisch bij elke push naar `main`.
5. Na een paar minuten staat de app op:
   - App: `https://<jouw-gebruikersnaam>.github.io/blokwereld/`
   - Uitleg voor ouders: `https://<jouw-gebruikersnaam>.github.io/blokwereld/installeren.html`

> Werkt de eerste keer nog niet? Wacht 1–2 minuten en ververs. Controleer dat *Pages → Source* op *GitHub Actions* staat.

Andere hosts (Netlify, Vercel, Cloudflare Pages) werken net zo goed: sleep de map erin. Enige eis voor "op beginscherm zetten" + offline is dat het via **https** draait.

## 2. Deel de testlink

Stuur ouders de link naar **`installeren.html`**. Die pagina legt uit wat de test is, hoe je de app op iPhone en Android op het beginscherm zet, en heeft een knop om feedback te mailen.

Tip: maak eventueel een QR-code van die link (bijv. via een gratis QR-generator) voor in een brief of appje.

## 3. Zo installeren kinderen/ouders de app

**iPhone / iPad (Safari):** open de link → deel-icoon ⬆️ → *Zet op beginscherm* → *Voeg toe*.

**Android (Chrome):** open de link → menu ⋮ → *App installeren* (of *Toevoegen aan startscherm*). Vaak verschijnt ook vanzelf onderin een balkje "App installeren".

De app onthoudt naam, leeftijd en voortgang op het toestel zelf. Onderaan kun je alles wissen met **Reset**.

## 4. Wat testers zien (freemium)

- De **⭐-knop** bovenin opent het Premium-scherm met wat de volledige versie straks biedt, plus een knop *"Ja, hier heb ik interesse in"* en een *Feedback sturen*-knop.
- Tijdens de test is **alles gratis en ontgrendeld** (in `index.html` staat `var TESTMODUS = true;`).
- Wil je later echt afschermen? Zet `TESTMODUS = false;` en bouw de gewenste grens in (bijv. premium vereist voor niveau 2/3 of het Beeldlab). De haak `heeftPremium()` staat er al klaar.

## 5. Feedback verzamelen

- De **Feedback sturen**-knop (in het Premium-scherm en op `installeren.html`) opent een e-mail naar `mvermaas@nsecure.nl` met een paar vaste vragen. Pas dat adres aan in `index.html` (`FEEDBACK_EMAIL`) en in `installeren.html` als je wilt.
- Er is **geen tracking**: privacy-by-design, niets gaat automatisch naar internet. Feedback komt alleen binnen als een ouder de knop gebruikt.

## 6. Nieuwe versie uitbrengen tijdens de test

1. Pas iets aan.
2. Verhoog **beide**: `APP_VERSIE` in `index.html` en `CACHE_VERSIE` in `sw.js` (ze moeten gelijk zijn; de testsuite bewaakt dit).
3. Push naar `main`. De app werkt zichzelf bij: bij de eerstvolgende keer openen wordt de nieuwe versie automatisch geladen (de service worker is netwerk-eerst voor de pagina).

## Checklist vóór je de link deelt

- [ ] `node tests/test.js` is volledig groen
- [ ] App opent op een telefoon via de https-link
- [ ] "Op beginscherm zetten" werkt op iPhone (Safari) en Android (Chrome)
- [ ] Icoon en naam zien er goed uit op het beginscherm
- [ ] ⭐ Premium-scherm en ✉️ Feedback-knop werken
- [ ] `installeren.html` opent en de stappen kloppen
- [ ] Reset wist de gegevens (privacycheck)
