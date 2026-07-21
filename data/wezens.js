// data/wezens.js — rondlopend leven in de bouwmodus. { emoji, afbeelding }.
// 'afbeelding' vervangt de emoji (leeg = emoji). Bewerkbaar in beheer.html.
var WEZENS = {
  start: [{emoji:"🐔",afbeelding:"tegels/tegel-kip.png"},{emoji:"🐑",afbeelding:"tegels/tegel-schaap.png"},{emoji:"🐷",afbeelding:"tegels/tegel-varken.png"},{emoji:"🐴",afbeelding:"tegels/tegel-paard.png"},{emoji:"🐤",afbeelding:"tegels/tegel-kuiken.png"},{emoji:"🐕",afbeelding:"tegels/tegel-hond.png"},{emoji:"🧒",afbeelding:"tegels/tegel-kind.png"},{emoji:"🧑‍🌾",afbeelding:"tegels/tegel-boer.png"}],
  strand: [{emoji:"🦀",afbeelding:"tegels/tegel-krab.png"},{emoji:"🦆",afbeelding:"tegels/tegel-eend.png"},{emoji:"🐕",afbeelding:"tegels/tegel-hond.png"},{emoji:"🐤",afbeelding:"tegels/tegel-kuiken.png"},{emoji:"🧒",afbeelding:"tegels/tegel-kind.png"},{emoji:"🏄",afbeelding:"tegels/tegel-surfer.png"}],
  park: [{emoji:"🐕",afbeelding:"tegels/tegel-hond.png"},{emoji:"🐇",afbeelding:"tegels/tegel-konijn.png"},{emoji:"🦆",afbeelding:"tegels/tegel-eend.png"},{emoji:"🐿️",afbeelding:"tegels/tegel-eekhoorn.png"},{emoji:"🐈",afbeelding:"tegels/tegel-kat.png"},{emoji:"🧒",afbeelding:"tegels/tegel-kind.png"},{emoji:"🧑",afbeelding:"tegels/tegel-persoon.png"}],
  huis: [{emoji:"🐈",afbeelding:"tegels/tegel-kat.png"},{emoji:"🐕",afbeelding:"tegels/tegel-hond.png"},{emoji:"🐁",afbeelding:"tegels/tegel-muis.png"},{emoji:"🧒",afbeelding:"tegels/tegel-kind.png"}],
  koopbaar: [{emoji:"🐔",afbeelding:"tegels/tegel-kip.png"},{emoji:"🐑",afbeelding:"tegels/tegel-schaap.png"},{emoji:"🐕",afbeelding:"tegels/tegel-hond.png"},{emoji:"🐇",afbeelding:"tegels/tegel-konijn.png"},{emoji:"🐤",afbeelding:"tegels/tegel-kuiken.png"},{emoji:"🐈",afbeelding:"tegels/tegel-kat.png"},{emoji:"🧒",afbeelding:"tegels/tegel-kind.png"}]
};
if (typeof module !== 'undefined') module.exports = WEZENS;
