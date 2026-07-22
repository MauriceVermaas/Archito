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

## Aandachtspunt voor deploy
OpenDyslexic laadt nu via CDN. Voor volledig offline gebruik: lever het `.woff2`-bestand lokaal mee en vervang de CDN-URL in de `@font-face`-regel door een relatief pad. Andika/Lexend werken zoals voorheen via de bestaande Google-Fonts-link.
