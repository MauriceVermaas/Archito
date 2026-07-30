// gen_audio_teksten.js — verzamelt ÁLLE teksten die de app voorleest, met de bestandsnaam
// die de app straks verwacht. Daarmee laat je de audio één keer maken (neurale stem of
// stemacteur) en lever je de bestanden mee: tijdens het spelen gaat er niets naar internet.
//
// Draaien:  node gen_audio_teksten.js
// Levert in _export-te-vervangen/audio/:
//   opnamelijst.json  — alles wat opgenomen moet worden (bestandsnaam + tekst + taal + stem)
//   opnamelijst.csv   — zelfde lijst voor een studio of batch-tool (Excel-vriendelijk)
//   LEESMIJ.md        — hoe je de bestanden maakt en waar ze heen moeten
//
// De hash moet exact gelijk zijn aan die in index.html (FNV-1a → base36).
"use strict";
const fs = require('fs'), path = require('path');
const ROOT = __dirname;
const R = f => require(path.join(ROOT, 'data', f));
const UIT = path.join(ROOT, '_export-te-vervangen', 'audio');

function hash36(str){
  let h = 0x811c9dc5;
  for(let i=0;i<str.length;i++){ h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  return (h >>> 0).toString(36);
}
const normaliseer = t => String(t==null?"":t).replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();
const sleutel = (tekst, taal) => (taal||"nl") + "-" + hash36(normaliseer(tekst));

/* Elke regel: { bestand, tekst, taal, stem, waar }
   stem: "beide" = opnemen met Fien én Daan (dan twee bestanden), "taal" = één keer in en/es. */
const regels = [];
const gezien = new Set();
function voegToe(tekst, taal, stem, waar){
  const t = normaliseer(tekst);
  if(!t || t.length < 2) return;
  const sl = sleutel(t, taal);
  const key = stem + "|" + sl;
  if(gezien.has(key)) return;
  gezien.add(key);
  if(stem === "beide"){
    ["fien","daan"].forEach(p => regels.push({ bestand:"audio/"+p+"/"+sl+".mp3", stem:p, taal, tekst:t, waar }));
  } else {
    regels.push({ bestand:"audio/taal/"+sl+".mp3", stem:"taal-"+taal, taal, tekst:t, waar });
  }
}

/* ---------- 1) losse woorden: Memory, Spelling, Klankenjacht ---------- */
R('memory.js').forEach(m => voegToe(m.w, "nl", "beide", "memory"));
R('woorden.js').forEach(w => voegToe(w.w, "nl", "beide", "spelling"));
R('klankletter.js').forEach(k => voegToe(k.woord, "nl", "beide", "klankenjacht"));

/* ---------- 2) Talen: het Nederlandse woord + de vertaling in de doeltaal ---------- */
R('talen.js').forEach(t => {
  voegToe(t.nl, "nl", "beide", "talen-nl");
  voegToe(t.en, "en", "taal", "talen-en");
  voegToe(t.es, "es", "taal", "talen-es");
});

/* ---------- 3) Begrijpend lezen: de teksten, de vragen en de uitleg ---------- */
R('lezen.js').forEach(v => {
  voegToe(v.tekst, "nl", "beide", "lezen-tekst");
  (v.vragen||[]).forEach(q => {
    voegToe(q.vraag, "nl", "beide", "lezen-vraag");
    if(q.uitleg) voegToe(q.uitleg, "nl", "beide", "lezen-uitleg");
  });
});

/* ---------- 4) Denken, beelddenken en Rekentoppers: vraag + uitleg ---------- */
R('denken.js').forEach(d => { voegToe(d.vraag, "nl", "beide", "denken"); voegToe(d.uitleg, "nl", "beide", "denken-uitleg"); });
R('beelddenken.js').forEach(d => { voegToe(d.opdracht, "nl", "beide", "beelddenken"); voegToe(d.uitleg, "nl", "beide", "beelddenken-uitleg"); });
R('rekentop.js').forEach(d => { voegToe(d.vraag, "nl", "beide", "rekentoppers"); voegToe(d.uitleg, "nl", "beide", "rekentoppers-uitleg"); });

/* ---------- 5) Beeldlab-opdrachten ---------- */
const bl = R('beeldlab.js');
['sorteer','nabouw','geheugen','zoek'].forEach(k => (bl[k]||[]).forEach(p => voegToe(p.opdracht, "nl", "beide", "beeldlab-"+k)));

/* ---------- 6) App-teksten: spelregels, hints, feedback, mascottes ---------- */
const idx = fs.readFileSync(path.join(ROOT,'index.html'),'utf8');
function pakBlok(naam){
  const m = idx.match(new RegExp("var\\s+"+naam+"\\s*=\\s*\\{([\\s\\S]*?)\\n\\};"));
  return m ? m[1] : "";
}
["SPELREGELS","HINTS"].forEach(naam => {
  (pakBlok(naam).match(/"((?:[^"\\]|\\.){10,})"/g) || []).forEach(t =>
    voegToe(t.slice(1,-1).replace(/\\"/g,'"'), "nl", "beide", naam.toLowerCase()));
});
// feedbackzinnen en 'tekort'-melding per thema
(idx.match(/goed:\[([^\]]*)\]/g) || []).concat(idx.match(/bijna:\[([^\]]*)\]/g) || []).forEach(blok => {
  (blok.match(/"([^"]{4,})"/g) || []).forEach(t => voegToe(t.slice(1,-1), "nl", "beide", "feedback"));
});
R('mascottes.js') && Object.values(R('mascottes.js')).forEach(m => {
  voegToe(m.naam, "nl", "beide", "mascotte-naam");
  (m.zinnen||[]).forEach(z => voegToe(z, "nl", "beide", "mascotte"));
});
R('oudertips.js'); // niet voorgelezen; alleen ter volledigheid overgeslagen
// vaste app-zinnen die de code letterlijk voorleest
[ "Voorlezen staat aan.", "Ik lees nu rustiger voor.", "Ik lees nu op normale snelheid voor.",
  "Hoi! Ik ben Fien. Ik lees straks alles voor.", "Hoi! Ik ben Daan. Ik lees straks alles voor.",
  "Kies een schatkist!", "Alle paren gevonden! Goed gedaan!", "luister nog eens goed"
].forEach(t => voegToe(t, "nl", "beide", "app"));

/* ---------- wegschrijven ---------- */
fs.mkdirSync(UIT, { recursive:true });
fs.writeFileSync(path.join(UIT,'opnamelijst.json'), JSON.stringify(regels, null, 2));
const csvEsc = v => '"' + String(v).replace(/"/g,'""') + '"';
fs.writeFileSync(path.join(UIT,'opnamelijst.csv'),
  "bestand,stem,taal,waar,tekst\n" + regels.map(r =>
    [r.bestand, r.stem, r.taal, r.waar, r.tekst].map(csvEsc).join(",")).join("\n"));

const perStem = {}, perWaar = {};
let tekens = 0;
regels.forEach(r => { perStem[r.stem] = (perStem[r.stem]||0)+1; perWaar[r.waar] = (perWaar[r.waar]||0)+1; tekens += r.tekst.length; });
const minuten = Math.round(tekens / 14 / 60);      // ~14 tekens per seconde spraak

fs.writeFileSync(path.join(UIT,'LEESMIJ.md'), `# Archito — audio laten inspreken

Deze map bevat **alles wat de app voorleest**. Laat de bestanden één keer maken en zet ze in de
app; daarna gaat er tijdens het spelen niets meer naar internet.

## Cijfers
- Op te nemen bestanden: **${regels.length}**
- Tekens totaal: **${tekens.toLocaleString('nl-NL')}** → ruwe schatting **±${minuten} minuten** audio
- Per stem: ${Object.entries(perStem).map(([k,v]) => `${k} = ${v}`).join(' · ')}

## Werkwijze
1. Open \`opnamelijst.csv\` (of \`.json\`). Elke regel heeft een **bestand**, de **stem** en de **tekst**.
2. Laat de audio maken:
   - **Neurale TTS** (goedkoopst, klinkt natuurlijk): Azure Speech, Google Cloud TTS of ElevenLabs.
     Kies per stem één vaste voice — bijvoorbeeld een warme vrouwenstem voor *fien* en een
     rustige mannenstem voor *daan*. Gebruik voor \`taal-en\` en \`taal-es\` een moedertaalstem.
   - **Stemacteurs**: geef de studio dit CSV; de kolom *bestand* is de bestandsnaam die moet
     worden opgeleverd.
3. Lever aan als **MP3, mono, 32-48 kbps, 22 kHz** (kleine bestanden, ruim voldoende voor spraak).
4. Zet de bestanden in de app volgens het pad in de kolom *bestand*, dus:
   \`audio/fien/…\`, \`audio/daan/…\`, \`audio/taal/…\`
5. Draai daarna: \`node gen_audio_index.js\`
   Dat maakt \`data/audio-index.js\`, zodat de app weet welke opnames er zijn.

## Belangrijk
- **De bestandsnaam mag niet veranderen.** Die is een hash van de tekst; de app berekent hem
  opnieuw en zoekt exact dat bestand.
- Wijzigt een tekst later, dan verandert de hash en valt die tekst terug op de toestelstem.
  Draai dit script dan opnieuw en neem alleen de nieuwe regels op.
- Een ontbrekend bestand is nooit een probleem: de app leest die tekst dan voor met de stem
  van het toestel.
- Spreek de tekst **letterlijk** in, zonder toevoegingen — anders klopt het niet met wat er op
  het scherm staat.
`);

console.error('opnamelijst: ' + regels.length + ' bestanden · ' + tekens.toLocaleString('nl-NL')
  + ' tekens ≈ ' + minuten + ' min audio');
console.error('per stem: ' + Object.entries(perStem).map(([k,v]) => k+'='+v).join(' · '));
console.error('geschreven naar _export-te-vervangen/audio/');
