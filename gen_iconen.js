// gen_iconen.js — genereert de neo-brutalist icoon-set (SVG → PNG via macOS QuickLook).
// Zelfde bestandsnamen als de bestaande ui/*.png, zodat alle <img src="ui/..."> in de app
// automatisch de nieuwe iconen tonen (geen HTML/JS-wijziging nodig).
//   node gen_iconen.js            → rendert naar _export-te-vervangen/nieuwe-iconen/ (staging)
//   node gen_iconen.js --install  → kopieert daarna naar ui/ (overschrijft)
// Vereist macOS (qlmanage). Draai lokaal; commit de PNG-output.
"use strict";
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = __dirname;
const SVGDIR = path.join(ROOT, "_export-te-vervangen", "svg-iconen");
const OUT = path.join(ROOT, "_export-te-vervangen", "nieuwe-iconen");
const UI = path.join(ROOT, "ui");
const INK = "#0f172a";

// Geen witte tegel meer: alleen het embleem (met eigen #0f172a-contour) op transparant,
// zodat het strak op de gekleurde knop/kaart zit i.p.v. een 'doosje in een doosje'.
// Het embleem wordt iets vergroot zodat het de icoonruimte mooi vult.
function tile(bg, inner){
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">'
    + '<g transform="translate(128 128) scale(1.16) translate(-128 -128)">' + inner + '</g></svg>';
}
function plain(inner){ return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">'+inner+'</svg>'; }

const bulb = '<circle cx="128" cy="112" r="54" fill="#fcd34d" stroke="'+INK+'" stroke-width="13"/><rect x="104" y="160" width="48" height="24" rx="6" fill="'+INK+'"/><rect x="112" y="184" width="32" height="16" rx="7" fill="'+INK+'"/>';
const bubbleGlobe = function(bubble){ return ''
  + '<polygon points="92,150 92,198 134,156" fill="'+bubble+'" stroke="'+INK+'" stroke-width="13" stroke-linejoin="round"/>'
  + '<rect x="34" y="54" width="188" height="106" rx="22" fill="'+bubble+'" stroke="'+INK+'" stroke-width="13"/>'
  + '<circle cx="128" cy="107" r="34" fill="#ffffff" stroke="'+INK+'" stroke-width="9"/>'
  + '<path d="M94 107 H162 M128 73 V141" fill="none" stroke="'+INK+'" stroke-width="7"/>'
  + '<path d="M128 73 Q104 107 128 141 M128 73 Q152 107 128 141" fill="none" stroke="'+INK+'" stroke-width="7"/>'; };

const ICONS = {
  // ---- sectie / spel (wit tegeltje, kleurrijk embleem) ----
  "menu-reken":    tile("#fff", '<rect x="74" y="74" width="108" height="108" rx="22" fill="#38bdf8" stroke="'+INK+'" stroke-width="14"/><rect x="120" y="96" width="16" height="64" rx="5" fill="'+INK+'"/><rect x="96" y="120" width="64" height="16" rx="5" fill="'+INK+'"/>'),
  "menu-spelling": tile("#fff", '<g transform="rotate(45 128 128)"><rect x="110" y="58" width="36" height="118" fill="#fbbf24" stroke="'+INK+'" stroke-width="12"/><rect x="110" y="58" width="36" height="26" fill="#f472b6" stroke="'+INK+'" stroke-width="12"/><polygon points="110,176 146,176 128,208" fill="#fde68a" stroke="'+INK+'" stroke-width="12" stroke-linejoin="round"/></g>'),
  "menu-lezen":    tile("#fff", '<path d="M46 82 Q128 64 128 84 L128 190 Q128 172 46 190 Z" fill="#4ade80" stroke="'+INK+'" stroke-width="13" stroke-linejoin="round"/><path d="M210 82 Q128 64 128 84 L128 190 Q128 172 210 190 Z" fill="#86efac" stroke="'+INK+'" stroke-width="13" stroke-linejoin="round"/>'),
  "menu-verhaal":  tile("#fff", '<path d="M46 82 Q128 64 128 84 L128 190 Q128 172 46 190 Z" fill="#a78bfa" stroke="'+INK+'" stroke-width="13" stroke-linejoin="round"/><path d="M210 82 Q128 64 128 84 L128 190 Q128 172 210 190 Z" fill="#c4b5fd" stroke="'+INK+'" stroke-width="13" stroke-linejoin="round"/><rect x="150" y="70" width="18" height="52" fill="#f472b6" stroke="'+INK+'" stroke-width="8"/>'),
  "menu-flits":    tile("#fff", '<polygon points="150,44 84,138 122,138 104,212 176,108 136,108" fill="#fde047" stroke="'+INK+'" stroke-width="13" stroke-linejoin="round"/>'),
  "menu-memory":   tile("#fff", '<rect x="58" y="82" width="82" height="112" rx="12" fill="#fca5a5" stroke="'+INK+'" stroke-width="12" transform="rotate(-10 99 138)"/><rect x="120" y="72" width="82" height="112" rx="12" fill="#a78bfa" stroke="'+INK+'" stroke-width="12" transform="rotate(9 161 128)"/><g transform="rotate(9 161 128)"><path d="M143 116 Q143 94 165 94 Q188 94 188 116 Q188 134 165 142 V152" fill="none" stroke="#fff" stroke-width="14" stroke-linecap="round"/><circle cx="165" cy="174" r="9" fill="#fff"/></g>'),
  "menu-denken":   tile("#fff", bulb),
  "menu-engels":   tile("#fff", bubbleGlobe("#3b82f6")),
  "menu-spaans":   tile("#fff", bubbleGlobe("#f87171")),
  "menu-beeldlab": tile("#fff", '<rect x="102" y="46" width="52" height="16" rx="5" fill="'+INK+'"/><polygon points="112,62 144,62 144,108 188,196 68,196 112,108" fill="#e879f9" stroke="'+INK+'" stroke-width="13" stroke-linejoin="round"/><circle cx="112" cy="176" r="9" fill="#fff"/><circle cx="150" cy="184" r="7" fill="#fff"/>'),
  "menu-bouw":     tile("#fff", '<rect x="92" y="150" width="72" height="48" rx="8" fill="#fca5a5" stroke="'+INK+'" stroke-width="12"/><rect x="100" y="104" width="56" height="46" rx="8" fill="#fde047" stroke="'+INK+'" stroke-width="12"/><rect x="110" y="60" width="40" height="44" rx="8" fill="#38bdf8" stroke="'+INK+'" stroke-width="12"/>'),
  "menu-slot":     tile("#fff", '<rect x="78" y="118" width="100" height="88" rx="16" fill="#cbd5e1" stroke="'+INK+'" stroke-width="14"/><path d="M98 118 V94 Q98 64 128 64 Q158 64 158 94 V118" fill="none" stroke="'+INK+'" stroke-width="16"/><circle cx="128" cy="156" r="12" fill="'+INK+'"/><rect x="122" y="160" width="12" height="28" rx="5" fill="'+INK+'"/>'),
  "menu-klankletter": tile("#fff", '<path d="M128 58 L96 200 M128 58 L160 200 M110 152 H146" fill="none" stroke="'+INK+'" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/><circle cx="128" cy="58" r="9" fill="#f43f5e"/>'),
  "menu-springen": tile("#fff", '<rect x="30" y="176" width="86" height="30" rx="8" fill="#4ade80" stroke="'+INK+'" stroke-width="11"/>'
    +'<rect x="150" y="140" width="86" height="66" rx="8" fill="#4ade80" stroke="'+INK+'" stroke-width="11"/>'
    +'<path d="M74 158 Q128 68 190 122" fill="none" stroke="'+INK+'" stroke-width="8" stroke-linecap="round" stroke-dasharray="14 12"/>'
    +'<circle cx="128" cy="72" r="24" fill="#f43f5e" stroke="'+INK+'" stroke-width="11"/>'
    +'<circle cx="120" cy="68" r="5" fill="'+INK+'"/><circle cx="136" cy="68" r="5" fill="'+INK+'"/>'),
  "menu-renlezer": tile("#fff", '<circle cx="152" cy="64" r="20" fill="#38bdf8" stroke="'+INK+'" stroke-width="11"/><path d="M152 88 L118 136 M118 136 L84 150 M118 136 L148 156 M148 156 L112 202 M148 156 L180 192" fill="none" stroke="'+INK+'" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>'),

  // ---- systeem / menu-acties (wit tegeltje, donker glyph) ----
  "mi-terug":      tile("#fff", '<path d="M156 66 L92 128 L156 190" fill="none" stroke="'+INK+'" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>'),
  "mi-play":       tile("#fff", '<polygon points="98,74 192,128 98,182" fill="#4ade80" stroke="'+INK+'" stroke-width="15" stroke-linejoin="round"/>'),
  "mi-info":       tile("#fff", '<circle cx="128" cy="128" r="68" fill="#38bdf8" stroke="'+INK+'" stroke-width="15"/><circle cx="128" cy="98" r="11" fill="'+INK+'"/><rect x="117" y="118" width="22" height="52" rx="9" fill="'+INK+'"/>'),
  "mi-hint":       tile("#fff", bulb),
  "mi-sticker":    tile("#fff", '<polygon points="128,58 150,110 206,114 163,150 178,204 128,174 78,204 93,150 50,114 106,110" fill="#fde047" stroke="'+INK+'" stroke-width="13" stroke-linejoin="round"/>'),
  "mi-kinderen":   tile("#fff", '<path d="M56 200 Q56 150 96 150 Q136 150 136 200 Z" fill="#fca5a5" stroke="'+INK+'" stroke-width="12" stroke-linejoin="round"/><circle cx="96" cy="100" r="28" fill="#fca5a5" stroke="'+INK+'" stroke-width="12"/><path d="M128 200 Q128 154 166 154 Q204 154 204 200 Z" fill="#38bdf8" stroke="'+INK+'" stroke-width="12" stroke-linejoin="round"/><circle cx="164" cy="106" r="26" fill="#38bdf8" stroke="'+INK+'" stroke-width="12"/>'),
  "mi-thema":      tile("#fff", '<circle cx="128" cy="122" r="66" fill="#fde047" stroke="'+INK+'" stroke-width="13"/><circle cx="104" cy="100" r="11" fill="#f87171" stroke="'+INK+'" stroke-width="5"/><circle cx="152" cy="100" r="11" fill="#38bdf8" stroke="'+INK+'" stroke-width="5"/><circle cx="116" cy="148" r="11" fill="#4ade80" stroke="'+INK+'" stroke-width="5"/><circle cx="158" cy="142" r="11" fill="#a78bfa" stroke="'+INK+'" stroke-width="5"/>'),
  "mi-wissel":     tile("#fff", '<path d="M70 108 H176 M150 84 L182 108 L150 132" fill="none" stroke="'+INK+'" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M186 156 H80 M106 132 L74 156 L106 180" fill="none" stroke="'+INK+'" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>'),
  "mi-stem":       tile("#fff", '<polygon points="86,150 86,196 126,156" fill="#38bdf8" stroke="'+INK+'" stroke-width="13" stroke-linejoin="round"/><rect x="30" y="58" width="196" height="102" rx="20" fill="#38bdf8" stroke="'+INK+'" stroke-width="13"/><circle cx="84" cy="109" r="9" fill="'+INK+'"/><circle cx="128" cy="109" r="9" fill="'+INK+'"/><circle cx="172" cy="109" r="9" fill="'+INK+'"/>'),
  "mi-ouders":     tile("#fff", '<path d="M128 56 L188 82 V138 Q188 186 128 206 Q68 186 68 138 V82 Z" fill="#a78bfa" stroke="'+INK+'" stroke-width="14" stroke-linejoin="round"/><circle cx="128" cy="116" r="20" fill="none" stroke="'+INK+'" stroke-width="12"/><rect x="122" y="130" width="12" height="40" fill="'+INK+'"/>'),
  "mi-premium":    tile("#fff", '<path d="M64 178 L64 104 L100 138 L128 88 L156 138 L192 104 L192 178 Z" fill="#fde047" stroke="'+INK+'" stroke-width="13" stroke-linejoin="round"/><rect x="60" y="178" width="136" height="22" rx="6" fill="#fde047" stroke="'+INK+'" stroke-width="13"/>'),
  "mi-install":    tile("#fff", '<rect x="118" y="56" width="20" height="82" rx="6" fill="'+INK+'"/><path d="M92 112 L128 152 L164 112" fill="none" stroke="'+INK+'" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/><rect x="66" y="176" width="124" height="22" rx="8" fill="'+INK+'"/>'),
  "mi-geluid-aan": tile("#fff", '<path d="M70 104 H100 L138 74 V182 L100 152 H70 Z" fill="#38bdf8" stroke="'+INK+'" stroke-width="13" stroke-linejoin="round"/><path d="M158 100 Q178 128 158 156 M180 84 Q212 128 180 172" fill="none" stroke="'+INK+'" stroke-width="13" stroke-linecap="round"/>'),
  "mi-geluid-uit": tile("#fff", '<path d="M70 104 H100 L138 74 V182 L100 152 H70 Z" fill="#cbd5e1" stroke="'+INK+'" stroke-width="13" stroke-linejoin="round"/><path d="M162 104 L206 152 M206 104 L162 152" stroke="'+INK+'" stroke-width="15" stroke-linecap="round"/>'),
  "mi-muziek-aan": tile("#fff", '<circle cx="96" cy="176" r="26" fill="#a78bfa" stroke="'+INK+'" stroke-width="12"/><circle cx="168" cy="160" r="26" fill="#a78bfa" stroke="'+INK+'" stroke-width="12"/><rect x="116" y="66" width="16" height="112" fill="'+INK+'"/><rect x="188" y="50" width="16" height="112" fill="'+INK+'"/><path d="M116 66 L204 50 V80 L116 96 Z" fill="'+INK+'"/>'),
  "mi-muziek-uit": tile("#fff", '<circle cx="96" cy="176" r="26" fill="#cbd5e1" stroke="'+INK+'" stroke-width="12"/><circle cx="168" cy="160" r="26" fill="#cbd5e1" stroke="'+INK+'" stroke-width="12"/><rect x="116" y="66" width="16" height="112" fill="'+INK+'"/><rect x="188" y="50" width="16" height="112" fill="'+INK+'"/><path d="M116 66 L204 50 V80 L116 96 Z" fill="'+INK+'"/><path d="M56 202 L200 58" stroke="'+INK+'" stroke-width="15" stroke-linecap="round"/>'),

  // ---- navigatie (onderbalk) ----
  "mi-home": tile("#fff", '<path d="M128 52 L40 130 H70 V200 H186 V130 H216 Z" fill="#facc15" stroke="'+INK+'" stroke-width="13" stroke-linejoin="round"/><rect x="108" y="150" width="40" height="50" rx="5" fill="'+INK+'"/>'),
  "mi-wereld": tile("#fff", '<circle cx="128" cy="128" r="78" fill="#38bdf8" stroke="'+INK+'" stroke-width="13"/><path d="M50 128 H206 M128 50 V206" fill="none" stroke="'+INK+'" stroke-width="8"/><path d="M128 50 Q84 128 128 206 M128 50 Q172 128 128 206" fill="none" stroke="'+INK+'" stroke-width="8"/>'),
  "mi-meer": tile("#fff", '<rect x="58" y="86" width="140" height="18" rx="9" fill="'+INK+'"/><rect x="58" y="119" width="140" height="18" rx="9" fill="'+INK+'"/><rect x="58" y="152" width="140" height="18" rx="9" fill="'+INK+'"/>'),

  "mi-gear": tile("#fff", '<rect x="56" y="84" width="144" height="12" rx="6" fill="'+INK+'"/><circle cx="104" cy="90" r="17" fill="#38bdf8" stroke="'+INK+'" stroke-width="9"/><rect x="56" y="122" width="144" height="12" rx="6" fill="'+INK+'"/><circle cx="152" cy="128" r="17" fill="#f472b6" stroke="'+INK+'" stroke-width="9"/><rect x="56" y="160" width="144" height="12" rx="6" fill="'+INK+'"/><circle cx="96" cy="166" r="17" fill="#4ade80" stroke="'+INK+'" stroke-width="9"/>'),
  "mi-pencil": tile("#fff", '<g transform="rotate(45 128 128)"><rect x="112" y="58" width="34" height="116" fill="#fbbf24" stroke="'+INK+'" stroke-width="12"/><rect x="112" y="58" width="34" height="24" fill="#f472b6" stroke="'+INK+'" stroke-width="12"/><polygon points="112,174 146,174 129,206" fill="#fde68a" stroke="'+INK+'" stroke-width="12" stroke-linejoin="round"/></g>'),
  "mi-target": tile("#fff", '<circle cx="128" cy="128" r="74" fill="#f87171" stroke="'+INK+'" stroke-width="12"/><circle cx="128" cy="128" r="46" fill="#ffffff" stroke="'+INK+'" stroke-width="10"/><circle cx="128" cy="128" r="20" fill="#f87171" stroke="'+INK+'" stroke-width="9"/>'),
  "mi-brein": tile("#fff", '<circle cx="102" cy="116" r="46" fill="#f9a8d4" stroke="'+INK+'" stroke-width="12"/><circle cx="154" cy="116" r="46" fill="#f9a8d4" stroke="'+INK+'" stroke-width="12"/><rect x="118" y="112" width="20" height="78" rx="8" fill="#f9a8d4" stroke="'+INK+'" stroke-width="12"/><path d="M128 88 V176 M100 104 Q116 128 100 150 M156 104 Q140 128 156 150" fill="none" stroke="'+INK+'" stroke-width="6"/>'),
  "mi-offline": tile("#fff", '<rect x="92" y="50" width="72" height="156" rx="16" fill="#cbd5e1" stroke="'+INK+'" stroke-width="12"/><rect x="106" y="72" width="44" height="100" rx="5" fill="#ffffff" stroke="'+INK+'" stroke-width="7"/><path d="M68 210 L188 46" stroke="'+INK+'" stroke-width="14" stroke-linecap="round"/>'),

  // ---- HUD ----
  "hud-dagen": tile("#fff", '<rect x="60" y="76" width="136" height="128" rx="16" fill="#4ade80" stroke="'+INK+'" stroke-width="13"/><path d="M60 110 H196" stroke="'+INK+'" stroke-width="13"/><rect x="88" y="56" width="14" height="34" rx="6" fill="'+INK+'"/><rect x="154" y="56" width="14" height="34" rx="6" fill="'+INK+'"/><circle cx="98" cy="150" r="9" fill="'+INK+'"/><circle cx="128" cy="150" r="9" fill="'+INK+'"/><circle cx="158" cy="150" r="9" fill="'+INK+'"/><circle cx="98" cy="178" r="9" fill="'+INK+'"/><circle cx="128" cy="178" r="9" fill="'+INK+'"/>'),
  "hud-tijd":  tile("#fff", '<circle cx="128" cy="132" r="72" fill="#fef9c3" stroke="'+INK+'" stroke-width="14"/><rect x="120" y="80" width="16" height="60" rx="6" fill="'+INK+'"/><rect x="124" y="128" width="52" height="15" rx="6" fill="'+INK+'"/>'),

  // ---- puzzel ----
  "pz-sorteer": tile("#fff", '<rect x="66" y="150" width="34" height="52" rx="6" fill="#38bdf8" stroke="'+INK+'" stroke-width="11"/><rect x="112" y="112" width="34" height="90" rx="6" fill="#fde047" stroke="'+INK+'" stroke-width="11"/><rect x="158" y="74" width="34" height="128" rx="6" fill="#f87171" stroke="'+INK+'" stroke-width="11"/>'),
  "pz-zoek":    tile("#fff", '<circle cx="114" cy="112" r="52" fill="#eff6ff" stroke="'+INK+'" stroke-width="15"/><rect x="150" y="150" width="58" height="22" rx="10" fill="'+INK+'" transform="rotate(45 150 150)"/>'),

  // ---- valuta (geen tegel; los embleem in de HUD-chip) ----
  "val-diamant": plain('<polygon points="128,44 196,108 128,212 60,108" fill="#38bdf8" stroke="'+INK+'" stroke-width="16" stroke-linejoin="round"/><polygon points="128,44 128,212 60,108" fill="#7dd3fc"/><polygon points="128,44 196,108 128,212 60,108" fill="none" stroke="'+INK+'" stroke-width="16" stroke-linejoin="round"/><path d="M60 108 H196 M96 74 L128 108 L160 74" fill="none" stroke="'+INK+'" stroke-width="9"/>'),
  "val-ster":    plain('<polygon points="128,40 156,104 226,110 172,156 190,224 128,186 66,224 84,156 30,110 100,104" fill="#fde047" stroke="'+INK+'" stroke-width="16" stroke-linejoin="round"/>'),
  "val-munt":    plain('<circle cx="128" cy="128" r="86" fill="#facc15" stroke="'+INK+'" stroke-width="16"/><circle cx="128" cy="128" r="58" fill="none" stroke="'+INK+'" stroke-width="9"/><rect x="118" y="98" width="20" height="60" rx="8" fill="'+INK+'"/>'),
  "val-hart":    plain('<path d="M128 200 Q44 132 44 92 Q44 58 78 58 Q108 58 128 96 Q148 58 178 58 Q212 58 212 92 Q212 132 128 200 Z" fill="#f472b6" stroke="'+INK+'" stroke-width="16" stroke-linejoin="round"/>'),
  "val-schelp":  plain('<path d="M34 190 Q34 58 128 58 Q222 58 222 190 Z" fill="#fca5a5" stroke="'+INK+'" stroke-width="16" stroke-linejoin="round"/><path d="M128 64 V186 M94 70 Q84 130 74 186 M162 70 Q172 130 182 186" fill="none" stroke="'+INK+'" stroke-width="11"/>'),
  "val-bal":     plain('<circle cx="128" cy="128" r="88" fill="#ffffff" stroke="'+INK+'" stroke-width="16"/><polygon points="128,92 158,114 146,150 110,150 98,114" fill="'+INK+'"/><path d="M128 92 V60 M158 114 L190 104 M146 150 L168 178 M110 150 L88 178 M98 114 L66 104" stroke="'+INK+'" stroke-width="9"/>')
};

// ---- schrijven + renderen ----
fs.mkdirSync(SVGDIR, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });
const namen = Object.keys(ICONS);
namen.forEach(function(n){ fs.writeFileSync(path.join(SVGDIR, n + ".svg"), ICONS[n]); });
console.error("SVG geschreven:", namen.length);

// QuickLook rendert alle svg's in één keer naar <naam>.svg.png
execSync('qlmanage -t -s 256 -o "' + OUT + '" "' + SVGDIR + '"/*.svg', { stdio: "ignore" });
// hernoem <naam>.svg.png → <naam>.png
namen.forEach(function(n){
  const src = path.join(OUT, n + ".svg.png");
  const dst = path.join(OUT, n + ".png");
  if (fs.existsSync(src)) fs.renameSync(src, dst);
});
// QuickLook rendert op wit; achtergrond transparant maken (wit BINNEN het embleem blijft)
execSync('python3 "' + path.join(ROOT, "tools", "witweg.py") + '" "' + OUT + '"/*.png', { stdio: "ignore" });
const gerenderd = namen.filter(function(n){ return fs.existsSync(path.join(OUT, n + ".png")); });
console.error("PNG gerenderd:", gerenderd.length, "/", namen.length);

if (process.argv.indexOf("--install") >= 0) {
  gerenderd.forEach(function(n){ fs.copyFileSync(path.join(OUT, n + ".png"), path.join(UI, n + ".png")); });
  console.error("Geïnstalleerd in ui/:", gerenderd.length);
} else {
  console.error("Staging klaar in _export-te-vervangen/nieuwe-iconen/ — draai met --install om naar ui/ te kopiëren.");
}
