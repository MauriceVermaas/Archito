// data/memory.js — plaatje↔woord-paren; 'afb' = tegel-afbeelding (valt terug op emoji als leeg).
var MEMORY = [
  {
    "w": "kat",
    "plaatje": "🐱",
    "afb": "tegels/tegel-kat.png",
    "niveau": 1
  },
  {
    "w": "hond",
    "plaatje": "🐶",
    "afb": "tegels/tegel-hond.png",
    "niveau": 1
  },
  {
    "w": "vis",
    "plaatje": "🐟",
    "afb": "tegels/tegel-vis.png",
    "niveau": 1
  },
  {
    "w": "koe",
    "plaatje": "🐮",
    "afb": "tegels/tegel-koe.png",
    "niveau": 1
  },
  {
    "w": "boom",
    "plaatje": "🌳",
    "afb": "tegels/tegel-boom.png",
    "niveau": 1
  },
  {
    "w": "bloem",
    "plaatje": "🌸",
    "afb": "tegels/tegel-bloem.png",
    "niveau": 1
  },
  {
    "w": "zon",
    "plaatje": "☀️",
    "afb": "tegels/tegel-zon.png",
    "niveau": 1
  },
  {
    "w": "maan",
    "plaatje": "🌙",
    "afb": "tegels/tegel-maan.png",
    "niveau": 1
  },
  {
    "w": "huis",
    "plaatje": "🏠",
    "afb": "tegels/tegel-huis.png",
    "niveau": 1
  },
  {
    "w": "auto",
    "plaatje": "🚗",
    "afb": "tegels/tegel-auto.png",
    "niveau": 1
  },
  {
    "w": "bal",
    "plaatje": "⚽",
    "afb": "tegels/tegel-bal.png",
    "niveau": 1
  },
  {
    "w": "appel",
    "plaatje": "🍎",
    "afb": "tegels/tegel-appel.png",
    "niveau": 1
  },
  {
    "w": "boot",
    "plaatje": "⛵",
    "afb": "tegels/tegel-boot.png",
    "niveau": 2
  },
  {
    "w": "trein",
    "plaatje": "🚂",
    "afb": "tegels/tegel-trein.png",
    "niveau": 2
  },
  {
    "w": "vogel",
    "plaatje": "🐦",
    "afb": "tegels/tegel-vogel.png",
    "niveau": 2
  },
  {
    "w": "paard",
    "plaatje": "🐴",
    "afb": "tegels/tegel-paard.png",
    "niveau": 2
  },
  {
    "w": "schaap",
    "plaatje": "🐑",
    "afb": "tegels/tegel-schaap.png",
    "niveau": 2
  },
  {
    "w": "taart",
    "plaatje": "🎂",
    "afb": "tegels/tegel-taart.png",
    "niveau": 2
  },
  {
    "w": "ster",
    "plaatje": "⭐",
    "afb": "tegels/tegel-ster.png",
    "niveau": 2
  },
  {
    "w": "paraplu",
    "plaatje": "☂️",
    "afb": "tegels/tegel-paraplu.png",
    "niveau": 2
  },
  {
    "w": "kikker",
    "plaatje": "🐸",
    "afb": "tegels/tegel-kikker.png",
    "niveau": 3
  },
  {
    "w": "vlinder",
    "plaatje": "🦋",
    "afb": "tegels/tegel-vlinder.png",
    "niveau": 3
  },
  {
    "w": "raket",
    "plaatje": "🚀",
    "afb": "tegels/tegel-raket.png",
    "niveau": 3
  },
  {
    "w": "regenboog",
    "plaatje": "🌈",
    "afb": "tegels/tegel-regenboog.png",
    "niveau": 3
  },
  {
    "w": "varken",
    "plaatje": "🐷",
    "afb": "tegels/tegel-varken.png",
    "niveau": 1
  },
  {
    "w": "kip",
    "plaatje": "🐔",
    "afb": "tegels/tegel-kip.png",
    "niveau": 1
  },
  {
    "w": "eend",
    "plaatje": "🦆",
    "afb": "tegels/tegel-eend.png",
    "niveau": 1
  },
  {
    "w": "konijn",
    "plaatje": "🐰",
    "afb": "tegels/tegel-konijn.png",
    "niveau": 1
  },
  {
    "w": "muis",
    "plaatje": "🐭",
    "afb": "tegels/tegel-muis.png",
    "niveau": 1
  },
  {
    "w": "beer",
    "plaatje": "🐻",
    "afb": "tegels/tegel-beer.png",
    "niveau": 2
  },
  {
    "w": "leeuw",
    "plaatje": "🦁",
    "afb": "tegels/tegel-leeuw.png",
    "niveau": 2
  },
  {
    "w": "tijger",
    "plaatje": "🐯",
    "afb": "tegels/tegel-tijger.png",
    "niveau": 2
  },
  {
    "w": "olifant",
    "plaatje": "🐘",
    "afb": "tegels/tegel-olifant.png",
    "niveau": 2
  },
  {
    "w": "aap",
    "plaatje": "🐵",
    "afb": "tegels/tegel-aap.png",
    "niveau": 2
  },
  {
    "w": "giraf",
    "plaatje": "🦒",
    "afb": "tegels/tegel-giraf.png",
    "niveau": 3
  },
  {
    "w": "zebra",
    "plaatje": "🦓",
    "afb": "tegels/tegel-zebra.png",
    "niveau": 3
  },
  {
    "w": "slang",
    "plaatje": "🐍",
    "afb": "tegels/tegel-slang.png",
    "niveau": 2
  },
  {
    "w": "schildpad",
    "plaatje": "🐢",
    "afb": "tegels/tegel-schildpad.png",
    "niveau": 2
  },
  {
    "w": "bij",
    "plaatje": "🐝",
    "afb": "tegels/tegel-bij.png",
    "niveau": 2
  },
  {
    "w": "mier",
    "plaatje": "🐜",
    "afb": "tegels/tegel-mier.png",
    "niveau": 2
  },
  {
    "w": "uil",
    "plaatje": "🦉",
    "afb": "tegels/tegel-uil.png",
    "niveau": 2
  },
  {
    "w": "pinguin",
    "plaatje": "🐧",
    "afb": "tegels/tegel-pinguin.png",
    "niveau": 2
  },
  {
    "w": "dolfijn",
    "plaatje": "🐬",
    "afb": "tegels/tegel-dolfijn.png",
    "niveau": 2
  },
  {
    "w": "walvis",
    "plaatje": "🐋",
    "afb": "tegels/tegel-walvis.png",
    "niveau": 3
  },
  {
    "w": "haai",
    "plaatje": "🦈",
    "afb": "tegels/tegel-haai.png",
    "niveau": 3
  },
  {
    "w": "krab",
    "plaatje": "🦀",
    "afb": "tegels/tegel-krab.png",
    "niveau": 2
  },
  {
    "w": "octopus",
    "plaatje": "🐙",
    "afb": "tegels/tegel-octopus.png",
    "niveau": 3
  },
  {
    "w": "vos",
    "plaatje": "🦊",
    "afb": "tegels/tegel-vos.png",
    "niveau": 2
  },
  {
    "w": "wolf",
    "plaatje": "🐺",
    "afb": "tegels/tegel-wolf.png",
    "niveau": 2
  },
  {
    "w": "hert",
    "plaatje": "🦌",
    "afb": "tegels/tegel-hert.png",
    "niveau": 3
  },
  {
    "w": "slak",
    "plaatje": "🐌",
    "afb": "tegels/tegel-slak.png",
    "niveau": 2
  },
  {
    "w": "kameel",
    "plaatje": "🐫",
    "afb": "tegels/tegel-kameel.png",
    "niveau": 3
  },
  {
    "w": "poes",
    "plaatje": "🐈",
    "afb": "tegels/tegel-poes.png",
    "niveau": 1
  },
  {
    "w": "hamster",
    "plaatje": "🐹",
    "afb": "tegels/tegel-hamster.png",
    "niveau": 2
  },
  {
    "w": "kalkoen",
    "plaatje": "🦃",
    "afb": "tegels/tegel-kalkoen.png",
    "niveau": 3
  },
  {
    "w": "banaan",
    "plaatje": "🍌",
    "afb": "tegels/tegel-banaan.png",
    "niveau": 1
  },
  {
    "w": "druiven",
    "plaatje": "🍇",
    "afb": "tegels/tegel-druiven.png",
    "niveau": 1
  },
  {
    "w": "sinaasappel",
    "plaatje": "🍊",
    "afb": "tegels/tegel-sinaasappel.png",
    "niveau": 2
  },
  {
    "w": "aardbei",
    "plaatje": "🍓",
    "afb": "tegels/tegel-aardbei.png",
    "niveau": 2
  },
  {
    "w": "citroen",
    "plaatje": "🍋",
    "afb": "tegels/tegel-citroen.png",
    "niveau": 2
  },
  {
    "w": "kers",
    "plaatje": "🍒",
    "afb": "tegels/tegel-kers.png",
    "niveau": 2
  },
  {
    "w": "peer",
    "plaatje": "🍐",
    "afb": "tegels/tegel-peer.png",
    "niveau": 2
  },
  {
    "w": "meloen",
    "plaatje": "🍉",
    "afb": "tegels/tegel-meloen.png",
    "niveau": 3
  },
  {
    "w": "ananas",
    "plaatje": "🍍",
    "afb": "tegels/tegel-ananas.png",
    "niveau": 3
  },
  {
    "w": "perzik",
    "plaatje": "🍑",
    "afb": "tegels/tegel-perzik.png",
    "niveau": 3
  },
  {
    "w": "brood",
    "plaatje": "🍞",
    "afb": "tegels/tegel-brood.png",
    "niveau": 1
  },
  {
    "w": "kaas",
    "plaatje": "🧀",
    "afb": "tegels/tegel-kaas.png",
    "niveau": 1
  },
  {
    "w": "ei",
    "plaatje": "🥚",
    "afb": "tegels/tegel-ei.png",
    "niveau": 1
  },
  {
    "w": "melk",
    "plaatje": "🥛",
    "afb": "tegels/tegel-melk.png",
    "niveau": 1
  },
  {
    "w": "koekje",
    "plaatje": "🍪",
    "afb": "tegels/tegel-koekje.png",
    "niveau": 2
  },
  {
    "w": "ijs",
    "plaatje": "🍦",
    "afb": "tegels/tegel-ijs.png",
    "niveau": 1
  },
  {
    "w": "snoep",
    "plaatje": "🍬",
    "afb": "tegels/tegel-snoep.png",
    "niveau": 2
  },
  {
    "w": "chocola",
    "plaatje": "🍫",
    "afb": "tegels/tegel-chocola.png",
    "niveau": 2
  },
  {
    "w": "pizza",
    "plaatje": "🍕",
    "afb": "tegels/tegel-pizza.png",
    "niveau": 1
  },
  {
    "w": "wortel",
    "plaatje": "🥕",
    "afb": "tegels/tegel-wortel.png",
    "niveau": 2
  },
  {
    "w": "tomaat",
    "plaatje": "🍅",
    "afb": "tegels/tegel-tomaat.png",
    "niveau": 1
  },
  {
    "w": "mais",
    "plaatje": "🌽",
    "afb": "tegels/tegel-mais.png",
    "niveau": 2
  },
  {
    "w": "champignon",
    "plaatje": "🍄",
    "afb": "tegels/tegel-champignon.png",
    "niveau": 2
  },
  {
    "w": "broccoli",
    "plaatje": "🥦",
    "afb": "tegels/tegel-broccoli.png",
    "niveau": 3
  },
  {
    "w": "aardappel",
    "plaatje": "🥔",
    "afb": "tegels/tegel-aardappel.png",
    "niveau": 2
  },
  {
    "w": "druif",
    "plaatje": "🍇",
    "afb": "tegels/tegel-druif.png",
    "niveau": 2
  },
  {
    "w": "hamburger",
    "plaatje": "🍔",
    "afb": "tegels/tegel-hamburger.png",
    "niveau": 2
  },
  {
    "w": "frietjes",
    "plaatje": "🍟",
    "afb": "tegels/tegel-frietjes.png",
    "niveau": 2
  },
  {
    "w": "appelsap",
    "plaatje": "🧃",
    "afb": "tegels/tegel-appelsap.png",
    "niveau": 2
  },
  {
    "w": "honing",
    "plaatje": "🍯",
    "afb": "tegels/tegel-honing.png",
    "niveau": 3
  },
  {
    "w": "wolk",
    "plaatje": "☁️",
    "afb": "tegels/tegel-wolk.png",
    "niveau": 1
  },
  {
    "w": "regen",
    "plaatje": "🌧️",
    "afb": "tegels/tegel-regen.png",
    "niveau": 2
  },
  {
    "w": "sneeuw",
    "plaatje": "❄️",
    "afb": "tegels/tegel-sneeuw.png",
    "niveau": 2
  },
  {
    "w": "blad",
    "plaatje": "🍃",
    "afb": "tegels/tegel-blad.png",
    "niveau": 2
  },
  {
    "w": "gras",
    "plaatje": "🌱",
    "afb": "tegels/tegel-gras.png",
    "niveau": 2
  },
  {
    "w": "berg",
    "plaatje": "⛰️",
    "afb": "tegels/tegel-berg.png",
    "niveau": 3
  },
  {
    "w": "vuur",
    "plaatje": "🔥",
    "afb": "tegels/tegel-vuur.png",
    "niveau": 2
  },
  {
    "w": "water",
    "plaatje": "💧",
    "afb": "tegels/tegel-water.png",
    "niveau": 1
  },
  {
    "w": "cactus",
    "plaatje": "🌵",
    "afb": "tegels/tegel-cactus.png",
    "niveau": 3
  },
  {
    "w": "palmboom",
    "plaatje": "🌴",
    "afb": "tegels/tegel-palmboom.png",
    "niveau": 3
  },
  {
    "w": "bliksem",
    "plaatje": "⚡",
    "afb": "tegels/tegel-bliksem.png",
    "niveau": 3
  },
  {
    "w": "druppel",
    "plaatje": "💧",
    "afb": "tegels/tegel-druppel.png",
    "niveau": 2
  },
  {
    "w": "schelp",
    "plaatje": "🐚",
    "afb": "tegels/tegel-schelp.png",
    "niveau": 3
  },
  {
    "w": "vulkaan",
    "plaatje": "🌋",
    "afb": "tegels/tegel-vulkaan.png",
    "niveau": 3
  },
  {
    "w": "deur",
    "plaatje": "🚪",
    "afb": "tegels/tegel-deur.png",
    "niveau": 1
  },
  {
    "w": "raam",
    "plaatje": "🪟",
    "afb": "tegels/tegel-raam.png",
    "niveau": 2
  },
  {
    "w": "stoel",
    "plaatje": "🪑",
    "afb": "tegels/tegel-stoel.png",
    "niveau": 2
  },
  {
    "w": "bed",
    "plaatje": "🛏️",
    "afb": "tegels/tegel-bed.png",
    "niveau": 1
  },
  {
    "w": "bank",
    "plaatje": "🛋️",
    "afb": "tegels/tegel-bank.png",
    "niveau": 2
  },
  {
    "w": "lamp",
    "plaatje": "💡",
    "afb": "tegels/tegel-lamp.png",
    "niveau": 2
  },
  {
    "w": "klok",
    "plaatje": "🕐",
    "afb": "tegels/tegel-klok.png",
    "niveau": 2
  },
  {
    "w": "sleutel",
    "plaatje": "🔑",
    "afb": "tegels/tegel-sleutel.png",
    "niveau": 2
  },
  {
    "w": "boek",
    "plaatje": "📖",
    "afb": "tegels/tegel-boek.png",
    "niveau": 1
  },
  {
    "w": "pen",
    "plaatje": "🖊️",
    "afb": "tegels/tegel-pen.png",
    "niveau": 2
  },
  {
    "w": "schaar",
    "plaatje": "✂️",
    "afb": "tegels/tegel-schaar.png",
    "niveau": 2
  },
  {
    "w": "tas",
    "plaatje": "👜",
    "afb": "tegels/tegel-tas.png",
    "niveau": 2
  },
  {
    "w": "ballon",
    "plaatje": "🎈",
    "afb": "tegels/tegel-ballon.png",
    "niveau": 1
  },
  {
    "w": "cadeau",
    "plaatje": "🎁",
    "afb": "tegels/tegel-cadeau.png",
    "niveau": 1
  },
  {
    "w": "bril",
    "plaatje": "👓",
    "afb": "tegels/tegel-bril.png",
    "niveau": 2
  },
  {
    "w": "hoed",
    "plaatje": "👒",
    "afb": "tegels/tegel-hoed.png",
    "niveau": 2
  },
  {
    "w": "schoen",
    "plaatje": "👟",
    "afb": "tegels/tegel-schoen.png",
    "niveau": 1
  },
  {
    "w": "sok",
    "plaatje": "🧦",
    "afb": "tegels/tegel-sok.png",
    "niveau": 2
  },
  {
    "w": "jas",
    "plaatje": "🧥",
    "afb": "tegels/tegel-jas.png",
    "niveau": 2
  },
  {
    "w": "shirt",
    "plaatje": "👕",
    "afb": "tegels/tegel-shirt.png",
    "niveau": 1
  },
  {
    "w": "broek",
    "plaatje": "👖",
    "afb": "tegels/tegel-broek.png",
    "niveau": 2
  },
  {
    "w": "telefoon",
    "plaatje": "📱",
    "afb": "tegels/tegel-telefoon.png",
    "niveau": 2
  },
  {
    "w": "camera",
    "plaatje": "📷",
    "afb": "tegels/tegel-camera.png",
    "niveau": 2
  },
  {
    "w": "potlood",
    "plaatje": "✏️",
    "afb": "tegels/tegel-potlood.png",
    "niveau": 1
  },
  {
    "w": "kroon",
    "plaatje": "👑",
    "afb": "tegels/tegel-kroon.png",
    "niveau": 2
  },
  {
    "w": "bus",
    "plaatje": "🚌",
    "afb": "tegels/tegel-bus.png",
    "niveau": 1
  },
  {
    "w": "fiets",
    "plaatje": "🚲",
    "afb": "tegels/tegel-fiets.png",
    "niveau": 1
  },
  {
    "w": "vliegtuig",
    "plaatje": "✈️",
    "afb": "tegels/tegel-vliegtuig.png",
    "niveau": 2
  },
  {
    "w": "tractor",
    "plaatje": "🚜",
    "afb": "tegels/tegel-tractor.png",
    "niveau": 3
  },
  {
    "w": "brandweer",
    "plaatje": "🚒",
    "afb": "tegels/tegel-brandweer.png",
    "niveau": 3
  },
  {
    "w": "politie",
    "plaatje": "🚓",
    "afb": "tegels/tegel-politie.png",
    "niveau": 3
  },
  {
    "w": "helikopter",
    "plaatje": "🚁",
    "afb": "tegels/tegel-helikopter.png",
    "niveau": 3
  },
  {
    "w": "motor",
    "plaatje": "🏍️",
    "afb": "tegels/tegel-motor.png",
    "niveau": 3
  },
  {
    "w": "hand",
    "plaatje": "✋",
    "afb": "tegels/tegel-hand.png",
    "niveau": 1
  },
  {
    "w": "voet",
    "plaatje": "🦶",
    "afb": "tegels/tegel-voet.png",
    "niveau": 2
  },
  {
    "w": "oog",
    "plaatje": "👁️",
    "afb": "tegels/tegel-oog.png",
    "niveau": 1
  },
  {
    "w": "oor",
    "plaatje": "👂",
    "afb": "tegels/tegel-oor.png",
    "niveau": 2
  },
  {
    "w": "neus",
    "plaatje": "👃",
    "afb": "tegels/tegel-neus.png",
    "niveau": 2
  },
  {
    "w": "mond",
    "plaatje": "👄",
    "afb": "tegels/tegel-mond.png",
    "niveau": 2
  },
  {
    "w": "tand",
    "plaatje": "🦷",
    "afb": "tegels/tegel-tand.png",
    "niveau": 2
  },
  {
    "w": "hart",
    "plaatje": "❤️",
    "afb": "tegels/tegel-hart.png",
    "niveau": 1
  },
  {
    "w": "baby",
    "plaatje": "👶",
    "afb": "tegels/tegel-baby.png",
    "niveau": 1
  },
  {
    "w": "jongen",
    "plaatje": "👦",
    "afb": "tegels/tegel-jongen.png",
    "niveau": 1
  },
  {
    "w": "meisje",
    "plaatje": "👧",
    "afb": "tegels/tegel-meisje.png",
    "niveau": 1
  },
  {
    "w": "oma",
    "plaatje": "👵",
    "afb": "tegels/tegel-oma.png",
    "niveau": 2
  },
  {
    "w": "opa",
    "plaatje": "👴",
    "afb": "tegels/tegel-opa.png",
    "niveau": 2
  },
  {
    "w": "mama",
    "plaatje": "👩",
    "afb": "tegels/tegel-mama.png",
    "niveau": 1
  },
  {
    "w": "papa",
    "plaatje": "👨",
    "afb": "tegels/tegel-papa.png",
    "niveau": 1
  },
  {
    "w": "rood",
    "plaatje": "🔴",
    "afb": "tegels/tegel-rood.png",
    "niveau": 1
  },
  {
    "w": "blauw",
    "plaatje": "🔵",
    "afb": "tegels/tegel-blauw.png",
    "niveau": 1
  },
  {
    "w": "geel",
    "plaatje": "🟡",
    "afb": "tegels/tegel-geel.png",
    "niveau": 1
  },
  {
    "w": "groen",
    "plaatje": "🟢",
    "afb": "tegels/tegel-groen.png",
    "niveau": 1
  },
  {
    "w": "paars",
    "plaatje": "🟣",
    "afb": "tegels/tegel-paars.png",
    "niveau": 2
  },
  {
    "w": "oranje",
    "plaatje": "🟠",
    "afb": "tegels/tegel-oranje.png",
    "niveau": 2
  },
  {
    "w": "zwart",
    "plaatje": "⚫",
    "afb": "tegels/tegel-zwart.png",
    "niveau": 2
  },
  {
    "w": "wit",
    "plaatje": "⚪",
    "afb": "tegels/tegel-wit.png",
    "niveau": 2
  },
  {
    "w": "voetbal",
    "plaatje": "⚽",
    "afb": "tegels/tegel-voetbal.png",
    "niveau": 2
  },
  {
    "w": "muziek",
    "plaatje": "🎵",
    "afb": "tegels/tegel-muziek.png",
    "niveau": 2
  },
  {
    "w": "gitaar",
    "plaatje": "🎸",
    "afb": "tegels/tegel-gitaar.png",
    "niveau": 3
  },
  {
    "w": "trommel",
    "plaatje": "🥁",
    "afb": "tegels/tegel-trommel.png",
    "niveau": 3
  },
  {
    "w": "vlieger",
    "plaatje": "🪁",
    "afb": "tegels/tegel-vlieger.png",
    "niveau": 3
  },
  {
    "w": "blokje",
    "plaatje": "🧱",
    "afb": "tegels/tegel-blokje.png",
    "niveau": 1
  },
  {
    "w": "puzzel",
    "plaatje": "🧩",
    "afb": "tegels/tegel-puzzel.png",
    "niveau": 2
  },
  {
    "w": "robot",
    "plaatje": "🤖",
    "afb": "tegels/tegel-robot.png",
    "niveau": 2
  },
  {
    "w": "draak",
    "plaatje": "🐉",
    "afb": "tegels/tegel-draak.png",
    "niveau": 2
  },
  {
    "w": "dinosaurus",
    "plaatje": "🦕",
    "afb": "tegels/tegel-dinosaurus.png",
    "niveau": 2
  },
  {
    "w": "eenhoorn",
    "plaatje": "🦄",
    "afb": "tegels/tegel-eenhoorn.png",
    "niveau": 2
  },
  {
    "w": "spook",
    "plaatje": "👻",
    "afb": "tegels/tegel-spook.png",
    "niveau": 2
  },
  {
    "w": "worm",
    "plaatje": "🪱",
    "afb": "tegels/tegel-worm.png",
    "niveau": 2
  },
  {
    "w": "worst",
    "plaatje": "🌭",
    "afb": "tegels/tegel-worst.png",
    "niveau": 2
  },
  {
    "w": "popcorn",
    "plaatje": "🍿",
    "afb": "tegels/tegel-popcorn.png",
    "niveau": 2
  },
  {
    "w": "donut",
    "plaatje": "🍩",
    "afb": "tegels/tegel-donut.png",
    "niveau": 2
  },
  {
    "w": "kerstboom",
    "plaatje": "🎄",
    "afb": "tegels/tegel-kerstboom.png",
    "niveau": 2
  },
  {
    "w": "sneeuwpop",
    "plaatje": "⛄",
    "afb": "tegels/tegel-sneeuwpop.png",
    "niveau": 2
  },
  {
    "w": "kaars",
    "plaatje": "🕯️",
    "afb": "tegels/tegel-kaars.png",
    "niveau": 2
  },
  {
    "w": "tent",
    "plaatje": "⛺",
    "afb": "tegels/tegel-tent.png",
    "niveau": 2
  },
  {
    "w": "ski",
    "plaatje": "🎿",
    "afb": "tegels/tegel-ski.png",
    "niveau": 3
  },
  {
    "w": "anker",
    "plaatje": "⚓",
    "afb": "tegels/tegel-anker.png",
    "niveau": 3
  },
  {
    "w": "kompas",
    "plaatje": "🧭",
    "afb": "tegels/tegel-kompas.png",
    "niveau": 3
  },
  {
    "w": "viool",
    "plaatje": "🎻",
    "afb": "tegels/tegel-viool.png",
    "niveau": 3
  },
  {
    "w": "trompet",
    "plaatje": "🎺",
    "afb": "tegels/tegel-trompet.png",
    "niveau": 3
  },
  {
    "w": "microfoon",
    "plaatje": "🎤",
    "afb": "tegels/tegel-microfoon.png",
    "niveau": 3
  },
  {
    "w": "koptelefoon",
    "plaatje": "🎧",
    "afb": "tegels/tegel-koptelefoon.png",
    "niveau": 3
  },
  {
    "w": "parachute",
    "plaatje": "🪂",
    "afb": "tegels/tegel-parachute.png",
    "niveau": 3
  }
];
if (typeof module !== 'undefined') module.exports = MEMORY;
