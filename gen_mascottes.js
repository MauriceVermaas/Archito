// gen_mascottes.js — 6 mascottes als neo-brutalist "blok-buddy" (app-icoon-stijl).
// SVG → PNG via macOS QuickLook. Zelfde blok-kop + blok-oogjes + scheve lach als het app-icoon.
//   node gen_mascottes.js            → staging in _export-te-vervangen/mascottes-nb/
//   node gen_mascottes.js --install  → kopieert naar mascottes/ (mascotte-<key>-nb.png)
"use strict";
const fs=require("fs"), path=require("path"), {execSync}=require("child_process");
const ROOT=__dirname, INK="#0f172a";
const SVGDIR=path.join(ROOT,"_export-te-vervangen","svg-mascottes");
const OUT=path.join(ROOT,"_export-te-vervangen","mascottes-nb");
const MAP=path.join(ROOT,"mascottes");

const EYES='<rect x="96" y="120" width="16" height="22" rx="6" fill="'+INK+'"/><rect x="138" y="120" width="16" height="22" rx="6" fill="'+INK+'"/>';
const CHEEKS='<circle cx="80" cy="162" r="9" fill="#f9a8d4"/><circle cx="170" cy="162" r="9" fill="#f9a8d4"/>';
const SMILE='<path d="M100 168 Q125 190 150 168" fill="none" stroke="'+INK+'" stroke-width="11" stroke-linecap="round" transform="rotate(-8 125 178)"/>';
function buddy(kleur, behind, front){
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">'
    + (behind||'')
    + '<rect x="58" y="86" width="150" height="126" rx="30" fill="'+INK+'"/>'
    + '<rect x="50" y="78" width="150" height="126" rx="30" fill="'+kleur+'" stroke="'+INK+'" stroke-width="12"/>'
    + EYES + CHEEKS + SMILE + (front||'') + '</svg>';
}

const MASC={
  // galaxy — groene alien met antennes
  kosmo: buddy("#86efac",
    '<path d="M96 80 Q86 48 78 36" fill="none" stroke="'+INK+'" stroke-width="10" stroke-linecap="round"/>'
    +'<path d="M160 80 Q170 48 178 36" fill="none" stroke="'+INK+'" stroke-width="10" stroke-linecap="round"/>'
    +'<circle cx="76" cy="32" r="11" fill="#fde047" stroke="'+INK+'" stroke-width="9"/>'
    +'<circle cx="180" cy="32" r="11" fill="#fde047" stroke="'+INK+'" stroke-width="9"/>', ''),

  // craft — bruine bever: ronde oren, grote knaagtanden, kleine bouwhelm ertussen
  bram: buddy("#c49a6c",
    '<circle cx="70" cy="74" r="23" fill="#c49a6c" stroke="'+INK+'" stroke-width="11"/>'
    +'<circle cx="70" cy="74" r="9" fill="#a97c4f"/>'
    +'<circle cx="186" cy="74" r="23" fill="#c49a6c" stroke="'+INK+'" stroke-width="11"/>'
    +'<circle cx="186" cy="74" r="9" fill="#a97c4f"/>',
    '<rect x="120" y="40" width="16" height="12" rx="4" fill="#fbbf24" stroke="'+INK+'" stroke-width="8"/>'
    +'<path d="M86 90 Q86 54 128 54 Q170 54 170 90 Z" fill="#fbbf24" stroke="'+INK+'" stroke-width="11" stroke-linejoin="round"/>'
    +'<rect x="78" y="85" width="100" height="16" rx="8" fill="#fbbf24" stroke="'+INK+'" stroke-width="11"/>'),

  // powerup — rode paddenstoel (rode hoed + witte stippen, crème stam-kop)
  turbo: buddy("#fde9c8", '',
    '<path d="M34 102 Q34 42 128 42 Q222 42 222 102 Z" fill="#f43f5e" stroke="'+INK+'" stroke-width="12" stroke-linejoin="round"/>'
    +'<circle cx="82" cy="80" r="13" fill="#ffffff"/><circle cx="152" cy="72" r="11" fill="#ffffff"/><circle cx="120" cy="92" r="8" fill="#ffffff"/>'),

  // unicorn — witte kop met hoorn, oortjes en regenbooglok
  fee: buddy("#fdf2ff",
    '<polygon points="72,88 58,50 100,76" fill="#fdf2ff" stroke="'+INK+'" stroke-width="9" stroke-linejoin="round"/>'
    +'<polygon points="184,88 198,50 156,76" fill="#fdf2ff" stroke="'+INK+'" stroke-width="9" stroke-linejoin="round"/>',
    '<polygon points="128,26 114,72 142,72" fill="#fde047" stroke="'+INK+'" stroke-width="10" stroke-linejoin="round"/>'
    +'<rect x="78" y="84" width="15" height="30" rx="7" fill="#f472b6" stroke="'+INK+'" stroke-width="6"/>'
    +'<rect x="98" y="82" width="15" height="30" rx="7" fill="#fbbf24" stroke="'+INK+'" stroke-width="6"/>'
    +'<rect x="143" y="82" width="15" height="30" rx="7" fill="#38bdf8" stroke="'+INK+'" stroke-width="6"/>'
    +'<rect x="163" y="84" width="15" height="30" rx="7" fill="#a78bfa" stroke="'+INK+'" stroke-width="6"/>'),

  // voetbal — sportieve buddy met hoofdband + bal
  spike: buddy("#fcd9a5",
    '<circle cx="212" cy="200" r="26" fill="#ffffff" stroke="'+INK+'" stroke-width="9"/>'
    +'<polygon points="212,185 225,195 220,210 204,210 199,195" fill="'+INK+'"/>',
    '<rect x="46" y="94" width="158" height="20" rx="6" fill="#16a34a" stroke="'+INK+'" stroke-width="10"/>'),

  // zeemeermin — peach kop, lang turquoise haar + een duidelijke staartvin onderaan
  luna: buddy("#fcd9a5",
    /* lang golvend haar links + rechts */
    '<path d="M50 96 Q14 152 36 214 Q46 176 58 150 Q50 196 78 210 Q66 172 66 130 Z" fill="#2dd4bf" stroke="'+INK+'" stroke-width="10" stroke-linejoin="round"/>'
    +'<path d="M200 96 Q236 152 214 214 Q204 176 192 150 Q200 196 172 210 Q184 172 184 130 Z" fill="#2dd4bf" stroke="'+INK+'" stroke-width="10" stroke-linejoin="round"/>'
    /* brede, gevulde vissenstaart die duidelijk onder de kop uitwaaiert = zeemeermin */
    +'<path d="M128 186 L52 256 Q98 232 128 228 Q158 232 204 256 Z" fill="#5eead4" stroke="'+INK+'" stroke-width="10" stroke-linejoin="round"/>',
    /* schelp-accessoire in het haar */
    '<path d="M176 72 Q156 72 152 96 H200 Q196 72 176 72 Z" fill="#f9a8d4" stroke="'+INK+'" stroke-width="8" stroke-linejoin="round"/>'
    +'<path d="M176 76 V96 M164 80 L160 96 M188 80 L192 96" stroke="'+INK+'" stroke-width="4" fill="none"/>')
};

fs.mkdirSync(SVGDIR,{recursive:true}); fs.mkdirSync(OUT,{recursive:true});
const namen=Object.keys(MASC);
namen.forEach(function(n){ fs.writeFileSync(path.join(SVGDIR,"mascotte-"+n+"-nb.svg"), MASC[n]); });
execSync('qlmanage -t -s 512 -o "'+OUT+'" "'+SVGDIR+'"/*.svg', {stdio:"ignore"});
namen.forEach(function(n){ var s=path.join(OUT,"mascotte-"+n+"-nb.svg.png"), d=path.join(OUT,"mascotte-"+n+"-nb.png"); if(fs.existsSync(s)) fs.renameSync(s,d); });
// QuickLook rendert op wit; achtergrond transparant maken
execSync('python3 "'+path.join(ROOT,"tools","witweg.py")+'" "'+OUT+'"/*.png', {stdio:"ignore"});
const ok=namen.filter(function(n){ return fs.existsSync(path.join(OUT,"mascotte-"+n+"-nb.png")); });
console.error("gerenderd:", ok.length, "/", namen.length);
if(process.argv.indexOf("--install")>=0){
  ok.forEach(function(n){ fs.copyFileSync(path.join(OUT,"mascotte-"+n+"-nb.png"), path.join(MAP,"mascotte-"+n+"-nb.png")); });
  console.error("geïnstalleerd in mascottes/:", ok.length);
} else { console.error("staging: _export-te-vervangen/mascottes-nb/ — draai met --install"); }
