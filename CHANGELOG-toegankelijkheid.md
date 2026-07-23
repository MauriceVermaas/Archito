# Archito v3.33.0 — toegankelijkheid voor de doelgroep

Alle 12 stories uit het UX-rapport zijn verwerkt, rechtstreeks in deze projectmap. Gewijzigde bestanden: `index.html`, `sw.js` (cacheversie), `tests/test.js` (2 tests aangepast aan de nieuwe gate-flow + 3 nieuwe tests). De databestanden (`data/*.js`) en beeld-assets zijn ongemoeid. De app blijft één single-file PWA zonder buildstap; er zijn geen libraries toegevoegd (OpenDyslexic is een optioneel webfont).

## Per story

**US-01 Leesfont** — `h1/h2/h3`, `.steenblok` (som), `.beeldopdracht` (opdracht) en `.statnum` staan nu in de leesfont; `Press Start 2P` alleen nog op het decoratieve logo (`.pix`).

**US-02 Zoom** — `user-scalable=no` en `maximum-scale` verwijderd uit de viewport-meta.

**US-03 Toetsenbord + screenreader** — centrale laag: een `MutationObserver` geeft elk klikbaar element automatisch `role="button"`, `tabindex="0"` en Enter/Spatie-bediening; zichtbare `:focus-visible`; focus-trap + focus-terugkeer op overlays; `aria-live` op feedback; `aria-label`s.

**US-04 Voorlezen los van geluid** — `zeg()` luistert naar `voorlezenAan` (default aan). Toggle in het ☰-menu én in het instellingenscherm, los van geluidseffecten en muziek. Bestaande profielen migreren automatisch naar `voorlezenAan=true`.

**US-05 Zelf verder** — auto-advance in álle spellen (rekenen, spelling, verhaal, flits, talen, denken, beeldlab én het leesavontuur) vervangen door een `Verder ▶`-knop. Scherm blijft onbeperkt staan, keuzeknoppen bevriezen, Verder onderbreekt het voorlezen netjes.

**US-06 Rustige modus** — schakelaar: startscherm terug naar één activiteit + "Kies zelf", HUD tot naam + menu, animaties uit. Resttijd-teller ook los verbergbaar.

**US-07 Premium achter ouder-PIN** — de Premium-knop is uit het kind-☰-menu gehaald; Premium staat nu in het oudergedeelte (achter de drempel). De pedagogische "eerst verdienen"-gate voor bouwen blijft ongewijzigd.

**US-08 Oudergate + eigen dialogen** — zonder PIN nu een lichte rekendrempel i.p.v. vrije toegang; onboarding vraagt actief om een PIN; alle `confirm()`/`prompt()` vervangen door eigen overlays (`vraagOuderGate`, `bevestig`). Ouders, +10 min, profiel verwijderen en reset zitten achter de drempel.

**US-09 Contrast** — `.klein`/`.reset` met vaste kleuren i.p.v. opacity; HUD-chips donkerder vlak achter witte tekst.

**US-10 Fouten verbergen** — `toonFout()` toont niets meer aan het kind; fouten worden stil gelogd (console + `S.foutenLog`, zichtbaar in het oudergedeelte). Blokkerende fout → neutrale boodschap.

**US-11 Leescomfort** — instelbare tekstgrootte, regelafstand, woordafstand en leesletter (Andika / Lexend / OpenDyslexic), per profiel bewaard.

**US-12 Voorlezen van UI-labels** — lang indrukken leest het label voor; profielnaam wordt voorgelezen bij aanraken en met een eigen 🔊-knop; iconen op tekstknoppen.

## Verificatie
- `node tests/test.js` — 125 tests groen (2 aangepast, 3 nieuw).
- Real-DOM smoke-test (jsdom) — 14 checks groen, incl. het leesavontuur.
- `node --check` op de inline JS — OK.

## Fixes na testfeedback (v3.33.0)
- **Verder-knop viel buiten beeld** na een goed antwoord (leek vastgelopen / "som laadt niet"). De knop is nu *sticky* onderaan het scherm en scrollt automatisch in beeld, dus altijd zichtbaar.
- **Vastlopen bij effecten**: de toegankelijkheids-observer draait niet meer over de juice-/deeltjeslaag, wat jank tijdens combo-effecten voorkomt.
- **'Mijn muur'**: kreeg een duidelijke Terug-knop (naar het spel, of naar het oudergedeelte als je daar vandaan kwam).

## Bouwmodus uitgebreid (v3.34.0)
- **Nieuwe bouwitems** (op verzoek van de kids): 🧱 muur, 🪟 raam, 🚪 deur, 🚧 hek, 🪜 trap, 🔺 dak, plus 🔥 kampvuur, ⛲ fontein, 🏮 lantaarn, 📮 brievenbus, 🚗 auto, ⛺ tent, ⛄ sneeuwpop, 🌵 cactus, 🍄 paddenstoel, 🌈 regenboog, ⭐ ster, ❤️ hart. Allemaal emoji — geen nieuwe tekeningen nodig.
- **Blok-kiezer pop-up met categorieën** (Grond / Huis bouwen / Natuur / Dieren / Deco): de lange rij blokken is uit beeld gehaald en zit nu achter één "Kies blok…"-knop, in de eigen afgeronde app-stijl. Zo blijft het **speelveld zichtbaar** in plaats van weggedrukt door de knoppen.
- **Dag & nacht**: 🌙/☀️-knop per wereld die het veld in nachtsfeer zet (blijft bewaard per wereld).

Nog op de wensenlijst (volgende stap): blokken kunnen kleuren (verfkwast) en bouwsels bewaren/delen.

## Automatisch verder (v3.35.0)
Naast de Verder-knop kan het spel na een instelbaar aantal seconden (2–12, standaard 5) automatisch doorgaan, met een zichtbaar aftellen. Instelbaar via ⚙️ Instellingen → Rust & focus. In de rustige modus gaat het nooit vanzelf verder (dan blijft alleen de Verder-knop), zodat kinderen die meer tijd nodig hebben de regie houden.

## Navigatie: onderbalk i.p.v. hamburger (v3.36.0)
Geïnspireerd op Squla. Het ☰-menu bovenin (dat achter de iPhone-camera kon vallen) is vervangen door een **vaste onderbalk** die alleen op het startscherm verschijnt: 🏠 Thuis · 🎨 Wereld · ⭐ Stickers · 👤 Kind · ☰ Meer. Duimvriendelijk, altijd zichtbaar, en met safe-area onderin (niet achter de home-balk). De bovenbalk is nu puur status (naam, diamanten, XP). Tijdens een spel is de balk verborgen (daar is de Terug-knop). "Meer" opent het bestaande menu met de overige opties (thema, stem, geluid, ouders, installeren).

## Aandachtspunt voor deploy
OpenDyslexic laadt nu via CDN. Voor volledig offline gebruik: lever het `.woff2`-bestand lokaal mee en vervang de CDN-URL in de `@font-face`-regel door een relatief pad. Andika/Lexend werken zoals voorheen via de bestaande Google-Fonts-link.
