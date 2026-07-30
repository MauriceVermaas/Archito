// gen_audio_index.js — kijkt welke opnames er echt in de map audio/ staan en schrijft
// data/audio-index.js. De app gebruikt die index om te weten of er voor een tekst een
// ingesproken bestand is; zo niet, dan leest de toestelstem hem voor.
// Draaien (na het plaatsen van de mp3-bestanden):  node gen_audio_index.js
"use strict";
const fs = require('fs'), path = require('path');
const ROOT = __dirname;
const MAPPEN = ['fien', 'daan', 'taal'];

const index = {};
let totaal = 0, bytes = 0;
MAPPEN.forEach(map => {
  index[map] = {};
  const dir = path.join(ROOT, 'audio', map);
  if(!fs.existsSync(dir)) return;
  fs.readdirSync(dir).filter(f => /\.(mp3|m4a|ogg)$/i.test(f)).forEach(f => {
    const sleutel = f.replace(/\.(mp3|m4a|ogg)$/i, '');
    index[map][sleutel] = 1;
    totaal++;
    try{ bytes += fs.statSync(path.join(dir, f)).size; }catch(e){}
  });
});

const kop = `// data/audio-index.js — welke vooraf ingesproken opnames er in de map audio/ staan.
// AUTOMATISCH GEGENEREERD met: node gen_audio_index.js  — niet met de hand bijwerken.
// Staat een tekst hier niet in, dan leest de app hem voor met de stem van het toestel.
// Vorm: { fien:{ "nl-<hash>":1, ... }, daan:{ ... }, taal:{ "en-<hash>":1, "es-<hash>":1 } }
`;
fs.writeFileSync(path.join(ROOT, 'data', 'audio-index.js'),
  kop + 'var AUDIO_INDEX = ' + JSON.stringify(index) + ';\n'
  + "if (typeof module !== 'undefined') module.exports = AUDIO_INDEX;\n");

console.error('audio-index: ' + totaal + ' opnames'
  + (totaal ? ' (' + Math.round(bytes/1024/1024*10)/10 + ' MB)' : '')
  + ' · ' + MAPPEN.map(m => m + '=' + Object.keys(index[m]||{}).length).join(' · '));
if(!totaal){
  console.error('Nog geen audio gevonden in audio/fien, audio/daan of audio/taal.');
  console.error('Zie _export-te-vervangen/audio/LEESMIJ.md — de app gebruikt tot die tijd de toestelstem.');
}
