// data/beeldlab.js — het BEELDLAB: doe-puzzels voor beelddenkers (rechterbrein).
// Vier modi, elk een eigen lijst. Weinig tekst, alles voorleesbaar, veel doen.
//
//  sorteer  — sleep/tik de beelden in de juiste volgorde.
//             { opdracht, items:[...], goed:[...], niveau }  (goed = juiste volgorde; items wordt geschud)
//  nabouw   — bouw een klein kleurpatroon na.
//             { opdracht, grid:[[kleur,...],...], niveau }   (kleur: "r","b","g","y","p","o" of "" = leeg)
//  geheugen — kijk kort naar een patroon, dan weg: welke zag je?
//             { opdracht, toon:[...], opties:[[...],[...],[...]], goed, niveau }  (goed = index 0..n)
//  zoek     — zoekplaat: tik alle doelen in het veld.
//             { opdracht, doel, veld:[...], niveau }  (veld bevat 'doel' meerdere keren + afleiders)

var BEELDLAB = {
  "sorteer": [
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🐜",
        "🐭",
        "🐕",
        "🐘"
      ],
      "goed": [
        "🐜",
        "🐭",
        "🐕",
        "🐘"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🌱",
        "🌿",
        "🌳"
      ],
      "goed": [
        "🌱",
        "🌿",
        "🌳"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Zet op volgorde: leeg naar vol",
      "items": [
        "🌑",
        "🌓",
        "🌕"
      ],
      "goed": [
        "🌑",
        "🌓",
        "🌕"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🐣",
        "🐤",
        "🐔"
      ],
      "goed": [
        "🐣",
        "🐤",
        "🐔"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Zet op volgorde: weinig naar veel",
      "items": [
        "🟦",
        "🟦🟦",
        "🟦🟦🟦"
      ],
      "goed": [
        "🟦",
        "🟦🟦",
        "🟦🟦🟦"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Zet op volgorde van de dag",
      "items": [
        "🌅",
        "☀️",
        "🌙"
      ],
      "goed": [
        "🌅",
        "☀️",
        "🌙"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Zet op volgorde: rups naar vlinder",
      "items": [
        "🥚",
        "🐛",
        "🦋"
      ],
      "goed": [
        "🥚",
        "🐛",
        "🦋"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🐟",
        "🐬",
        "🐋",
        "🦐"
      ],
      "goed": [
        "🦐",
        "🐟",
        "🐬",
        "🐋"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🦐",
        "🐟",
        "🐬",
        "🐋"
      ],
      "goed": [
        "🦐",
        "🐟",
        "🐬",
        "🐋"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Zet op volgorde: vroeg naar laat",
      "items": [
        "🕐",
        "🕑",
        "🕒",
        "🕓"
      ],
      "goed": [
        "🕐",
        "🕑",
        "🕒",
        "🕓"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🔈",
        "🔉",
        "🔊"
      ],
      "goed": [
        "🔈",
        "🔉",
        "🔊"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🥉",
        "🥈",
        "🥇"
      ],
      "goed": [
        "🥉",
        "🥈",
        "🥇"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🐒",
        "🦍"
      ],
      "goed": [
        "🐒",
        "🦍"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🍏",
        "🍎"
      ],
      "goed": [
        "🍏",
        "🍎"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "😴",
        "🙂",
        "😄"
      ],
      "goed": [
        "😴",
        "🙂",
        "😄"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "◽",
        "◻️",
        "⬜"
      ],
      "goed": [
        "◽",
        "◻️",
        "⬜"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "·",
        "•",
        "⚫"
      ],
      "goed": [
        "·",
        "•",
        "⚫"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🌰",
        "🍊",
        "🎃"
      ],
      "goed": [
        "🌰",
        "🍊",
        "🎃"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "💧",
        "🌊"
      ],
      "goed": [
        "💧",
        "🌊"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🪨",
        "⛰️"
      ],
      "goed": [
        "🪨",
        "⛰️"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🐁",
        "🐀"
      ],
      "goed": [
        "🐁",
        "🐀"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🚲",
        "🚗",
        "🚚"
      ],
      "goed": [
        "🚲",
        "🚗",
        "🚚"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "✏️",
        "🖊️",
        "🖋️"
      ],
      "goed": [
        "✏️",
        "🖊️",
        "🖋️"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🐝",
        "🐦",
        "🦅"
      ],
      "goed": [
        "🐝",
        "🐦",
        "🦅"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🍒",
        "🍎",
        "🍉"
      ],
      "goed": [
        "🍒",
        "🍎",
        "🍉"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🥄",
        "🍴",
        "🔪"
      ],
      "goed": [
        "🥄",
        "🍴",
        "🔪"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🕯️",
        "💡",
        "🔦"
      ],
      "goed": [
        "🕯️",
        "💡",
        "🔦"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "👶",
        "🧒",
        "🧑"
      ],
      "goed": [
        "👶",
        "🧒",
        "🧑"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🌙",
        "🌛",
        "🌕"
      ],
      "goed": [
        "🌙",
        "🌛",
        "🌕"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🥉",
        "🥈",
        "🥇",
        "👑"
      ],
      "goed": [
        "🥉",
        "🥈",
        "🥇",
        "👑"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "😢",
        "😐",
        "😊",
        "😁"
      ],
      "goed": [
        "😢",
        "😐",
        "😊",
        "😁"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🐜",
        "🐝",
        "🐭",
        "🐈",
        "🐕",
        "🐘"
      ],
      "goed": [
        "🐜",
        "🐝",
        "🐭",
        "🐈",
        "🐕",
        "🐘"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🌱",
        "🌿",
        "🪴",
        "🌳"
      ],
      "goed": [
        "🌱",
        "🌿",
        "🪴",
        "🌳"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "💧",
        "🌊",
        "🌧️",
        "🏔️"
      ],
      "goed": [
        "💧",
        "🌊",
        "🌧️",
        "🏔️"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🕐",
        "🕒",
        "🕕",
        "🕘",
        "🕛"
      ],
      "goed": [
        "🕐",
        "🕒",
        "🕕",
        "🕘",
        "🕛"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "📱",
        "💻",
        "🖥️",
        "🏢"
      ],
      "goed": [
        "📱",
        "💻",
        "🖥️",
        "🏢"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🔬",
        "🔭",
        "🛰️",
        "🌍"
      ],
      "goed": [
        "🔬",
        "🔭",
        "🛰️",
        "🌍"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🪨",
        "⛰️",
        "🌋"
      ],
      "goed": [
        "🪨",
        "⛰️",
        "🌋"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🐁",
        "🐀",
        "🐈",
        "🐕",
        "🐎"
      ],
      "goed": [
        "🐁",
        "🐀",
        "🐈",
        "🐕",
        "🐎"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🥄",
        "🍴",
        "🔪",
        "🪓"
      ],
      "goed": [
        "🥄",
        "🍴",
        "🔪",
        "🪓"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🕯️",
        "💡",
        "🔦",
        "🌞"
      ],
      "goed": [
        "🕯️",
        "💡",
        "🔦",
        "🌞"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🎈",
        "🎁",
        "📦",
        "🚚"
      ],
      "goed": [
        "🎈",
        "🎁",
        "📦",
        "🚚"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "💧",
        "🥛",
        "🪣",
        "🛁"
      ],
      "goed": [
        "💧",
        "🥛",
        "🪣",
        "🛁"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "📏",
        "📐",
        "🧮",
        "💻"
      ],
      "goed": [
        "📏",
        "📐",
        "🧮",
        "💻"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "🌱",
        "🌿",
        "🌳",
        "🌲"
      ],
      "goed": [
        "🌱",
        "🌿",
        "🌳",
        "🌲"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Zet op volgorde: klein naar groot",
      "items": [
        "⚛️",
        "🧪",
        "🔬",
        "🛰️"
      ],
      "goed": [
        "⚛️",
        "🧪",
        "🔬",
        "🛰️"
      ],
      "niveau": 6
    }
  ],
  "nabouw": [
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "b"
        ],
        [
          "b",
          "r"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "g"
        ],
        [
          "",
          "g"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "r",
          "y"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "b",
          "",
          ""
        ],
        [
          "b",
          "b",
          ""
        ],
        [
          "b",
          "b",
          "b"
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "b",
          "r"
        ],
        [
          "b",
          "r",
          "b"
        ],
        [
          "r",
          "b",
          "r"
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "y",
          "g"
        ],
        [
          "y",
          "p",
          "y"
        ],
        [
          "g",
          "y",
          "g"
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "b"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "o",
          ""
        ],
        [
          "",
          "p",
          "g"
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "p"
        ],
        [
          "o",
          ""
        ],
        [
          "b",
          "p"
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "p",
          "g"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "p"
        ],
        [
          "o",
          "r"
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "",
          "o"
        ],
        [
          "",
          "o",
          ""
        ],
        [
          "b",
          "",
          "g"
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "b",
          "o"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "",
          "y"
        ],
        [
          "p",
          "",
          ""
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "g"
        ],
        [
          "",
          "y"
        ],
        [
          "",
          "g"
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "b",
          "p"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "o"
        ],
        [
          "o",
          ""
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "o",
          "o",
          "p"
        ],
        [
          "b",
          "b",
          "y"
        ],
        [
          "",
          "p",
          "b"
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "",
          "o"
        ],
        [
          "r",
          "p",
          "b"
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "o",
          "g"
        ],
        [
          "",
          "o"
        ],
        [
          "p",
          "y"
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "o",
          "r"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "r"
        ],
        [
          "y",
          ""
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "",
          "g"
        ],
        [
          "",
          "",
          ""
        ],
        [
          "",
          "y",
          "y"
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          ""
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "o",
          "g"
        ],
        [
          "o",
          "b",
          "o"
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          ""
        ],
        [
          "y",
          "r"
        ],
        [
          "p",
          "o"
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "o",
          "b"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "o",
          "b"
        ],
        [
          "",
          "p"
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "p",
          "y"
        ],
        [
          "y",
          "p",
          ""
        ],
        [
          "o",
          "",
          "o"
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "b",
          ""
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "o",
          "p"
        ],
        [
          "p",
          "g",
          "y"
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "o",
          "r"
        ],
        [
          "r",
          "r"
        ],
        [
          "",
          ""
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "o",
          "r"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "y"
        ],
        [
          "o",
          "o"
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "",
          "r"
        ],
        [
          "b",
          "y",
          "r"
        ],
        [
          "b",
          "g",
          ""
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "o"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "g",
          ""
        ],
        [
          "o",
          "g",
          "y"
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "p"
        ],
        [
          "r",
          "y"
        ],
        [
          "b",
          "p"
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "b",
          "b",
          "g"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "b",
          "p"
        ],
        [
          "y",
          ""
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "b",
          "",
          "b"
        ],
        [
          "b",
          "o",
          "g"
        ],
        [
          "y",
          "r",
          "b"
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "y"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "g",
          "g"
        ],
        [
          "",
          "",
          "r"
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "p"
        ],
        [
          "",
          "b"
        ],
        [
          "p",
          "o"
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "b",
          ""
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "r"
        ],
        [
          "",
          "y"
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "o",
          "g",
          "g"
        ],
        [
          "g",
          "g",
          "b"
        ],
        [
          "o",
          "y",
          "r"
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "o"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "g",
          "r"
        ],
        [
          "g",
          "y",
          "o"
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "o",
          ""
        ],
        [
          "g",
          ""
        ],
        [
          "",
          ""
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "b",
          "o"
        ]
      ],
      "niveau": 1
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "o",
          "p"
        ],
        [
          "o",
          "r"
        ]
      ],
      "niveau": 2
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "",
          ""
        ],
        [
          "b",
          "",
          "p"
        ],
        [
          "y",
          "g",
          "y"
        ]
      ],
      "niveau": 3
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "p",
          "p"
        ],
        [
          "o",
          "o",
          "y"
        ],
        [
          "",
          "y",
          "y"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "b",
          "p",
          "g"
        ],
        [
          "",
          "o",
          "y",
          "r"
        ],
        [
          "",
          "o",
          "p",
          "r"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "y",
          "y",
          "r"
        ],
        [
          "o",
          "b",
          "p",
          "o"
        ],
        [
          "p",
          "b",
          "p",
          "p"
        ],
        [
          "g",
          "b",
          "b",
          "g"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "r",
          "b",
          "b",
          "y"
        ],
        [
          "g",
          "r",
          "y",
          "",
          "y"
        ],
        [
          "",
          "g",
          "o",
          "y",
          "p"
        ],
        [
          "r",
          "r",
          "",
          "y",
          "r"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "b",
          "",
          "p",
          "b"
        ],
        [
          "g",
          "",
          "o",
          "y",
          "r"
        ],
        [
          "b",
          "y",
          "o",
          "b",
          "r"
        ],
        [
          "",
          "o",
          "",
          "",
          "g"
        ],
        [
          "p",
          "g",
          "",
          "y",
          "o"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "",
          "y"
        ],
        [
          "r",
          "y",
          "b"
        ],
        [
          "",
          "p",
          "b"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "",
          "o",
          "y"
        ],
        [
          "r",
          "b",
          "y",
          "o"
        ],
        [
          "b",
          "r",
          "",
          "o"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "",
          "g"
        ],
        [
          "p",
          "g",
          ""
        ],
        [
          "y",
          "o",
          "g"
        ],
        [
          "",
          "y",
          "b"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "p",
          "y",
          "g"
        ],
        [
          "",
          "g",
          "g",
          ""
        ],
        [
          "o",
          "",
          "y",
          ""
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "b",
          "g",
          "",
          "b"
        ],
        [
          "y",
          "b",
          "o",
          "p"
        ],
        [
          "p",
          "",
          "r",
          "p"
        ],
        [
          "",
          "",
          "p",
          "o"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "",
          "y",
          "y",
          "r"
        ],
        [
          "p",
          "r",
          "",
          "p",
          ""
        ],
        [
          "g",
          "b",
          "",
          "r",
          ""
        ],
        [
          "r",
          "p",
          "o",
          "",
          "r"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "r",
          "p",
          "g",
          "y"
        ],
        [
          "b",
          "",
          "",
          "g",
          "r"
        ],
        [
          "p",
          "",
          "",
          "b",
          "r"
        ],
        [
          "g",
          "y",
          "",
          "",
          "y"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "",
          "b",
          "b",
          "p"
        ],
        [
          "r",
          "",
          "o",
          "o",
          "r"
        ],
        [
          "o",
          "r",
          "o",
          "r",
          "g"
        ],
        [
          "b",
          "o",
          "",
          "o",
          "b"
        ],
        [
          "g",
          "r",
          "o",
          "g",
          "b"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "p",
          "b",
          "r"
        ],
        [
          "g",
          "b",
          "",
          "y"
        ],
        [
          "b",
          "o",
          "b",
          "p"
        ],
        [
          "o",
          "g",
          "",
          "p"
        ],
        [
          "y",
          "",
          "",
          "o"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "g",
          "r"
        ],
        [
          "y",
          "b",
          "p"
        ],
        [
          "p",
          "y",
          "g"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "g",
          "g",
          ""
        ],
        [
          "o",
          "",
          "y",
          ""
        ],
        [
          "b",
          "g",
          "",
          "b"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "b",
          "o"
        ],
        [
          "p",
          "p",
          ""
        ],
        [
          "r",
          "p",
          ""
        ],
        [
          "",
          "p",
          "o"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "",
          "y",
          "y"
        ],
        [
          "r",
          "p",
          "r",
          ""
        ],
        [
          "p",
          "",
          "g",
          "b"
        ],
        [
          "",
          "r",
          "",
          "r"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "o",
          "",
          "r"
        ],
        [
          "p",
          "r",
          "p",
          "g"
        ],
        [
          "y",
          "b",
          "",
          ""
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "r",
          "p",
          ""
        ],
        [
          "",
          "b",
          "r",
          "g"
        ],
        [
          "y",
          "",
          "",
          "y"
        ],
        [
          "",
          "",
          "b",
          "b"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "r",
          "",
          "o",
          "o"
        ],
        [
          "r",
          "o",
          "r",
          "o",
          "r"
        ],
        [
          "g",
          "b",
          "o",
          "",
          "o"
        ],
        [
          "b",
          "g",
          "r",
          "o",
          "g"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "b",
          "g",
          "p"
        ],
        [
          "b",
          "r",
          "g"
        ],
        [
          "b",
          "",
          "y"
        ],
        [
          "b",
          "o",
          "b"
        ],
        [
          "p",
          "o",
          "g"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "p",
          "y",
          "",
          ""
        ],
        [
          "o",
          "o",
          "p",
          "b",
          ""
        ],
        [
          "",
          "o",
          "o",
          "o",
          "y"
        ],
        [
          "b",
          "b",
          "",
          "y",
          ""
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "o",
          "",
          "g",
          ""
        ],
        [
          "",
          "",
          "p",
          "p",
          "y"
        ],
        [
          "p",
          "y",
          "b",
          "",
          "y"
        ],
        [
          "",
          "p",
          "b",
          "g",
          "p"
        ],
        [
          "o",
          "p",
          "p",
          "g",
          "r"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "p",
          "y",
          "p"
        ],
        [
          "r",
          "y",
          "g",
          "o"
        ],
        [
          "p",
          "y",
          "b",
          "p"
        ],
        [
          "g",
          "",
          "y",
          "r"
        ],
        [
          "",
          "o",
          "g",
          "r"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "o",
          "",
          "",
          "",
          "y"
        ],
        [
          "b",
          "g",
          "",
          "p",
          "g"
        ],
        [
          "r",
          "y",
          "r",
          "b",
          "p"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "",
          "p"
        ],
        [
          "p",
          "y",
          "p"
        ],
        [
          "y",
          "b",
          ""
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "",
          "p",
          "b"
        ],
        [
          "g",
          "p",
          "o",
          "p"
        ],
        [
          "p",
          "g",
          "r",
          "g"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "y",
          "p"
        ],
        [
          "r",
          "y",
          "g"
        ],
        [
          "o",
          "p",
          "y"
        ],
        [
          "b",
          "p",
          "g"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "y",
          "r",
          ""
        ],
        [
          "o",
          "g",
          "r",
          "o"
        ],
        [
          "",
          "",
          "",
          "y"
        ],
        [
          "b",
          "g",
          "",
          "p"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "r",
          "y",
          "r"
        ],
        [
          "b",
          "p",
          "g",
          ""
        ],
        [
          "",
          "r",
          "p",
          "p"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "y",
          "",
          "o"
        ],
        [
          "r",
          "y",
          "p",
          "o"
        ],
        [
          "o",
          "r",
          "b",
          "g"
        ],
        [
          "g",
          "r",
          "y",
          ""
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "y",
          "p",
          "g",
          "r"
        ],
        [
          "p",
          "o",
          "y",
          "y",
          "p"
        ],
        [
          "o",
          "y",
          "r",
          "r",
          "b"
        ],
        [
          "g",
          "",
          "g",
          "",
          "g"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "",
          "g"
        ],
        [
          "o",
          "g",
          ""
        ],
        [
          "p",
          "g",
          "r"
        ],
        [
          "g",
          "",
          "o"
        ],
        [
          "o",
          "",
          "o"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "b",
          "",
          "y",
          "b"
        ],
        [
          "b",
          "b",
          "y",
          "r",
          "o"
        ],
        [
          "b",
          "",
          "p",
          "o",
          "p"
        ],
        [
          "r",
          "g",
          "r",
          "y",
          "o"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "",
          "p",
          "r",
          "r"
        ],
        [
          "p",
          "",
          "o",
          "o",
          "b"
        ],
        [
          "",
          "b",
          "p",
          "",
          ""
        ],
        [
          "",
          "",
          "r",
          "y",
          "p"
        ],
        [
          "r",
          "y",
          "g",
          "y",
          "r"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "o",
          "p",
          "b",
          ""
        ],
        [
          "g",
          "r",
          "p",
          "g"
        ],
        [
          "",
          "p",
          "y",
          "r"
        ],
        [
          "b",
          "p",
          "b",
          ""
        ],
        [
          "o",
          "b",
          "g",
          "g"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "b",
          "g",
          "g",
          "r",
          ""
        ],
        [
          "y",
          "",
          "p",
          "",
          "r"
        ],
        [
          "g",
          "",
          "r",
          "o",
          "y"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "o",
          ""
        ],
        [
          "",
          "",
          "y"
        ],
        [
          "b",
          "g",
          ""
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "g",
          "r",
          "y"
        ],
        [
          "r",
          "b",
          "p",
          "g"
        ],
        [
          "",
          "",
          "r",
          "p"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "g",
          "y"
        ],
        [
          "",
          "o",
          "r"
        ],
        [
          "y",
          "p",
          "o"
        ],
        [
          "o",
          "r",
          "b"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "g",
          "g",
          "r",
          "y"
        ],
        [
          "",
          "p",
          "y",
          "p"
        ],
        [
          "g",
          "r",
          "p",
          "o"
        ],
        [
          "y",
          "y",
          "p",
          "o"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "r",
          "r",
          "b"
        ],
        [
          "g",
          "",
          "g",
          ""
        ],
        [
          "g",
          "r",
          "",
          "g"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "o",
          "g",
          "",
          "p"
        ],
        [
          "g",
          "r",
          "g",
          ""
        ],
        [
          "o",
          "o",
          "",
          "o"
        ],
        [
          "",
          "b",
          "",
          "y"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "b",
          "b",
          "b",
          "y",
          "r"
        ],
        [
          "o",
          "b",
          "",
          "p",
          "o"
        ],
        [
          "p",
          "r",
          "g",
          "r",
          "y"
        ],
        [
          "o",
          "r",
          "",
          "p",
          "r"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "p",
          ""
        ],
        [
          "o",
          "o",
          "b"
        ],
        [
          "",
          "b",
          "p"
        ],
        [
          "",
          "",
          ""
        ],
        [
          "",
          "r",
          "y"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "r",
          "y",
          "g",
          "y"
        ],
        [
          "r",
          "o",
          "p",
          "b",
          ""
        ],
        [
          "g",
          "r",
          "p",
          "g",
          ""
        ],
        [
          "p",
          "y",
          "r",
          "b",
          "p"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "b",
          "",
          "o",
          "b",
          "g"
        ],
        [
          "g",
          "b",
          "g",
          "g",
          "r"
        ],
        [
          "",
          "y",
          "",
          "p",
          ""
        ],
        [
          "r",
          "g",
          "",
          "r",
          "o"
        ],
        [
          "y",
          "r",
          "b",
          "r",
          "g"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "g",
          "g",
          "y"
        ],
        [
          "y",
          "y",
          "b",
          "o"
        ],
        [
          "p",
          "p",
          "",
          ""
        ],
        [
          "",
          "g",
          "o",
          "p"
        ],
        [
          "y",
          "r",
          "p",
          "o"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "y",
          "",
          "",
          "b"
        ],
        [
          "b",
          "o",
          "y",
          "y",
          "g"
        ],
        [
          "",
          "r",
          "g",
          "",
          ""
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "b",
          "p",
          "g"
        ],
        [
          "",
          "",
          "r"
        ],
        [
          "p",
          "p",
          "g"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "",
          "o",
          "r"
        ],
        [
          "y",
          "p",
          "o",
          "o"
        ],
        [
          "r",
          "b",
          "g",
          "g"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "r",
          "y",
          ""
        ],
        [
          "p",
          "y",
          "p"
        ],
        [
          "g",
          "r",
          "p"
        ],
        [
          "o",
          "y",
          "y"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "p",
          "o",
          "y",
          "r"
        ],
        [
          "r",
          "b",
          "g",
          ""
        ],
        [
          "g",
          "",
          "g",
          "r"
        ],
        [
          "",
          "g",
          "o",
          "g"
        ]
      ],
      "niveau": 4
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "p",
          "g",
          "r"
        ],
        [
          "g",
          "",
          "o",
          "o"
        ],
        [
          "",
          "o",
          "",
          "b"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "y",
          "b",
          "b"
        ],
        [
          "b",
          "y",
          "r",
          "o"
        ],
        [
          "b",
          "",
          "p",
          "o"
        ],
        [
          "p",
          "r",
          "g",
          "r"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "o",
          "r",
          "",
          "p"
        ],
        [
          "r",
          "r",
          "p",
          "",
          "o"
        ],
        [
          "o",
          "b",
          "",
          "b",
          "p"
        ],
        [
          "",
          "",
          "",
          "",
          "r"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "y",
          "p",
          "r"
        ],
        [
          "y",
          "g",
          "y"
        ],
        [
          "r",
          "o",
          "p"
        ],
        [
          "b",
          "",
          "g"
        ],
        [
          "r",
          "p",
          "g"
        ]
      ],
      "niveau": 5
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "p",
          "y",
          "r",
          "b"
        ],
        [
          "p",
          "b",
          "",
          "o",
          "b"
        ],
        [
          "g",
          "g",
          "b",
          "g",
          "g"
        ],
        [
          "r",
          "",
          "y",
          "",
          "p"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "r",
          "g",
          "",
          "r"
        ],
        [
          "o",
          "y",
          "r",
          "b",
          "r"
        ],
        [
          "g",
          "",
          "g",
          "g",
          "y"
        ],
        [
          "y",
          "y",
          "b",
          "o",
          "p"
        ],
        [
          "p",
          "",
          "",
          "",
          "g"
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "o",
          "p",
          "y",
          "r"
        ],
        [
          "p",
          "o",
          "y",
          "y"
        ],
        [
          "",
          "",
          "b",
          "b"
        ],
        [
          "o",
          "y",
          "y",
          "g"
        ],
        [
          "",
          "r",
          "g",
          ""
        ]
      ],
      "niveau": 6
    },
    {
      "opdracht": "Bouw dit patroon na",
      "grid": [
        [
          "",
          "b",
          "r",
          "",
          "r"
        ],
        [
          "o",
          "o",
          "p",
          "b",
          "p"
        ],
        [
          "y",
          "y",
          "p",
          "p",
          "b"
        ]
      ],
      "niveau": 6
    }
  ],
  "geheugen": [
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔴",
        "🔵",
        "🟡"
      ],
      "opties": [
        [
          "🔴",
          "🔵",
          "🟡"
        ],
        [
          "🔵",
          "🔴",
          "🟡"
        ],
        [
          "🔴",
          "🟡",
          "🔵"
        ]
      ],
      "goed": 0,
      "niveau": 1
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🐶",
        "🐱"
      ],
      "opties": [
        [
          "🐱",
          "🐶"
        ],
        [
          "🐶",
          "🐱"
        ]
      ],
      "goed": 1,
      "niveau": 1
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "⭐",
        "🌙",
        "☀️"
      ],
      "opties": [
        [
          "🌙",
          "⭐",
          "☀️"
        ],
        [
          "⭐",
          "🌙",
          "☀️"
        ],
        [
          "☀️",
          "🌙",
          "⭐"
        ]
      ],
      "goed": 1,
      "niveau": 2
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🍎",
        "🍌",
        "🍇",
        "🍓"
      ],
      "opties": [
        [
          "🍎",
          "🍌",
          "🍇",
          "🍓"
        ],
        [
          "🍎",
          "🍇",
          "🍌",
          "🍓"
        ],
        [
          "🍌",
          "🍎",
          "🍇",
          "🍓"
        ]
      ],
      "goed": 0,
      "niveau": 2
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔺",
        "🟦",
        "🔻",
        "🟨"
      ],
      "opties": [
        [
          "🔺",
          "🟦",
          "🔻",
          "🟨"
        ],
        [
          "🔻",
          "🟦",
          "🔺",
          "🟨"
        ],
        [
          "🔺",
          "🟨",
          "🔻",
          "🟦"
        ]
      ],
      "goed": 0,
      "niveau": 3
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟨",
        "🔻",
        "🔵"
      ],
      "opties": [
        [
          "🟨",
          "🔻",
          "🔵"
        ],
        [
          "🟨",
          "🔵",
          "🔻"
        ],
        [
          "🔵",
          "🟨",
          "🔻"
        ]
      ],
      "goed": 0,
      "niveau": 1
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🐶",
        "🌙",
        "🍎",
        "🟡"
      ],
      "opties": [
        [
          "🐶",
          "🌙",
          "🍎",
          "🟡"
        ],
        [
          "🍎",
          "🟡",
          "🌙",
          "🐶"
        ],
        [
          "🌙",
          "🟡",
          "🍎",
          "🐶"
        ]
      ],
      "goed": 0,
      "niveau": 2
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔵",
        "🌙",
        "🔴",
        "🟣",
        "🔻"
      ],
      "opties": [
        [
          "🌙",
          "🟣",
          "🔵",
          "🔴",
          "🔻"
        ],
        [
          "🔴",
          "🟣",
          "🌙",
          "🔵",
          "🔻"
        ],
        [
          "🔵",
          "🌙",
          "🔴",
          "🟣",
          "🔻"
        ]
      ],
      "goed": 2,
      "niveau": 3
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔺",
        "🟣",
        "🍎"
      ],
      "opties": [
        [
          "🟣",
          "🔺",
          "🍎"
        ],
        [
          "🍎",
          "🟣",
          "🔺"
        ],
        [
          "🔺",
          "🟣",
          "🍎"
        ]
      ],
      "goed": 2,
      "niveau": 1
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟨",
        "🔻",
        "🌙",
        "🐱"
      ],
      "opties": [
        [
          "🔻",
          "🌙",
          "🟨",
          "🐱"
        ],
        [
          "🐱",
          "🟨",
          "🔻",
          "🌙"
        ],
        [
          "🟨",
          "🔻",
          "🌙",
          "🐱"
        ]
      ],
      "goed": 2,
      "niveau": 2
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🐱",
        "🔴",
        "🔻",
        "⭐",
        "🟦"
      ],
      "opties": [
        [
          "🐱",
          "🔴",
          "🔻",
          "⭐",
          "🟦"
        ],
        [
          "🔻",
          "🔴",
          "🐱",
          "⭐",
          "🟦"
        ],
        [
          "🔴",
          "🔻",
          "🟦",
          "⭐",
          "🐱"
        ]
      ],
      "goed": 0,
      "niveau": 3
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔻",
        "🟨",
        "🍌"
      ],
      "opties": [
        [
          "🟨",
          "🔻",
          "🍌"
        ],
        [
          "🍌",
          "🔻",
          "🟨"
        ],
        [
          "🔻",
          "🟨",
          "🍌"
        ]
      ],
      "goed": 2,
      "niveau": 1
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🍎",
        "🔴",
        "🔵",
        "🐱"
      ],
      "opties": [
        [
          "🍎",
          "🔴",
          "🔵",
          "🐱"
        ],
        [
          "🐱",
          "🍎",
          "🔴",
          "🔵"
        ],
        [
          "🍎",
          "🐱",
          "🔵",
          "🔴"
        ]
      ],
      "goed": 0,
      "niveau": 2
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🐶",
        "🍌",
        "🟢",
        "🟦",
        "🐱"
      ],
      "opties": [
        [
          "🟦",
          "🐱",
          "🟢",
          "🍌",
          "🐶"
        ],
        [
          "🟦",
          "🐶",
          "🍌",
          "🟢",
          "🐱"
        ],
        [
          "🐶",
          "🍌",
          "🟢",
          "🟦",
          "🐱"
        ]
      ],
      "goed": 2,
      "niveau": 3
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🐶",
        "⭐",
        "🟢"
      ],
      "opties": [
        [
          "🐶",
          "🟢",
          "⭐"
        ],
        [
          "⭐",
          "🐶",
          "🟢"
        ],
        [
          "🐶",
          "⭐",
          "🟢"
        ]
      ],
      "goed": 2,
      "niveau": 1
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🌙",
        "🟡",
        "🟣",
        "🟢"
      ],
      "opties": [
        [
          "🌙",
          "🟡",
          "🟣",
          "🟢"
        ],
        [
          "🌙",
          "🟢",
          "🟡",
          "🟣"
        ],
        [
          "🌙",
          "🟡",
          "🟢",
          "🟣"
        ]
      ],
      "goed": 0,
      "niveau": 2
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🐱",
        "🐶",
        "⭐",
        "🍎",
        "☀️"
      ],
      "opties": [
        [
          "🐶",
          "⭐",
          "☀️",
          "🐱",
          "🍎"
        ],
        [
          "🐱",
          "⭐",
          "☀️",
          "🍎",
          "🐶"
        ],
        [
          "🐱",
          "🐶",
          "⭐",
          "🍎",
          "☀️"
        ]
      ],
      "goed": 2,
      "niveau": 3
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟡",
        "🔴",
        "🔻"
      ],
      "opties": [
        [
          "🟡",
          "🔴",
          "🔻"
        ],
        [
          "🔻",
          "🔴",
          "🟡"
        ],
        [
          "🔴",
          "🔻",
          "🟡"
        ]
      ],
      "goed": 0,
      "niveau": 1
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟢",
        "🔴",
        "🐶",
        "🟣"
      ],
      "opties": [
        [
          "🐶",
          "🟣",
          "🔴",
          "🟢"
        ],
        [
          "🟢",
          "🔴",
          "🐶",
          "🟣"
        ],
        [
          "🔴",
          "🐶",
          "🟣",
          "🟢"
        ]
      ],
      "goed": 1,
      "niveau": 2
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🍌",
        "🔻",
        "🔴",
        "🐱",
        "🔺"
      ],
      "opties": [
        [
          "🍌",
          "🔻",
          "🔴",
          "🐱",
          "🔺"
        ],
        [
          "🍌",
          "🔴",
          "🔻",
          "🔺",
          "🐱"
        ],
        [
          "🍌",
          "🐱",
          "🔻",
          "🔺",
          "🔴"
        ]
      ],
      "goed": 0,
      "niveau": 3
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟢",
        "🐶",
        "🍎"
      ],
      "opties": [
        [
          "🐶",
          "🟢",
          "🍎"
        ],
        [
          "🟢",
          "🐶",
          "🍎"
        ],
        [
          "🍎",
          "🟢",
          "🐶"
        ]
      ],
      "goed": 1,
      "niveau": 1
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🐶",
        "☀️",
        "🐱",
        "🟨"
      ],
      "opties": [
        [
          "🐶",
          "☀️",
          "🐱",
          "🟨"
        ],
        [
          "🟨",
          "☀️",
          "🐶",
          "🐱"
        ],
        [
          "☀️",
          "🐶",
          "🐱",
          "🟨"
        ]
      ],
      "goed": 0,
      "niveau": 2
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟦",
        "🟡",
        "⭐",
        "☀️",
        "🟢"
      ],
      "opties": [
        [
          "🟦",
          "☀️",
          "🟢",
          "🟡",
          "⭐"
        ],
        [
          "🟦",
          "🟡",
          "⭐",
          "☀️",
          "🟢"
        ],
        [
          "🟦",
          "🟢",
          "☀️",
          "🟡",
          "⭐"
        ]
      ],
      "goed": 1,
      "niveau": 3
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔻",
        "🐶",
        "🟦"
      ],
      "opties": [
        [
          "🔻",
          "🐶",
          "🟦"
        ],
        [
          "🔻",
          "🟦",
          "🐶"
        ],
        [
          "🟦",
          "🔻",
          "🐶"
        ]
      ],
      "goed": 0,
      "niveau": 1
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🌙",
        "☀️",
        "🟢",
        "🐶"
      ],
      "opties": [
        [
          "🌙",
          "🐶",
          "☀️",
          "🟢"
        ],
        [
          "🌙",
          "☀️",
          "🟢",
          "🐶"
        ],
        [
          "☀️",
          "🟢",
          "🐶",
          "🌙"
        ]
      ],
      "goed": 1,
      "niveau": 2
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟨",
        "⭐",
        "🔵",
        "🍌",
        "🍎"
      ],
      "opties": [
        [
          "🔵",
          "🍎",
          "🍌",
          "⭐",
          "🟨"
        ],
        [
          "🟨",
          "⭐",
          "🔵",
          "🍌",
          "🍎"
        ],
        [
          "🍌",
          "🔵",
          "🍎",
          "🟨",
          "⭐"
        ]
      ],
      "goed": 1,
      "niveau": 3
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟣",
        "🟦",
        "🟡"
      ],
      "opties": [
        [
          "🟣",
          "🟡",
          "🟦"
        ],
        [
          "🟡",
          "🟦",
          "🟣"
        ],
        [
          "🟣",
          "🟦",
          "🟡"
        ]
      ],
      "goed": 2,
      "niveau": 1
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔴",
        "☀️",
        "🌙",
        "🍎"
      ],
      "opties": [
        [
          "🔴",
          "☀️",
          "🌙",
          "🍎"
        ],
        [
          "☀️",
          "🔴",
          "🌙",
          "🍎"
        ],
        [
          "🔴",
          "🌙",
          "☀️",
          "🍎"
        ]
      ],
      "goed": 0,
      "niveau": 2
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🍎",
        "🔴",
        "☀️",
        "🟣",
        "🐱"
      ],
      "opties": [
        [
          "🐱",
          "🔴",
          "🟣",
          "☀️",
          "🍎"
        ],
        [
          "🟣",
          "🍎",
          "🔴",
          "🐱",
          "☀️"
        ],
        [
          "🍎",
          "🔴",
          "☀️",
          "🟣",
          "🐱"
        ]
      ],
      "goed": 2,
      "niveau": 3
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟡",
        "🟣",
        "⭐"
      ],
      "opties": [
        [
          "🟡",
          "🟣",
          "⭐"
        ],
        [
          "🟣",
          "⭐",
          "🟡"
        ],
        [
          "⭐",
          "🟡",
          "🟣"
        ]
      ],
      "goed": 0,
      "niveau": 1
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🍎",
        "🔻",
        "🟢",
        "🔴"
      ],
      "opties": [
        [
          "🔻",
          "🔴",
          "🍎",
          "🟢"
        ],
        [
          "🍎",
          "🔻",
          "🟢",
          "🔴"
        ],
        [
          "🍎",
          "🟢",
          "🔴",
          "🔻"
        ]
      ],
      "goed": 1,
      "niveau": 2
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟢",
        "🍎",
        "🍌",
        "🐶",
        "🔻"
      ],
      "opties": [
        [
          "🍎",
          "🐶",
          "🍌",
          "🔻",
          "🟢"
        ],
        [
          "🟢",
          "🐶",
          "🍌",
          "🍎",
          "🔻"
        ],
        [
          "🟢",
          "🍎",
          "🍌",
          "🐶",
          "🔻"
        ]
      ],
      "goed": 2,
      "niveau": 3
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔵",
        "🔺",
        "🌙"
      ],
      "opties": [
        [
          "🔺",
          "🔵",
          "🌙"
        ],
        [
          "🌙",
          "🔺",
          "🔵"
        ],
        [
          "🔵",
          "🔺",
          "🌙"
        ]
      ],
      "goed": 2,
      "niveau": 1
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟣",
        "🍎",
        "🔵",
        "🔺"
      ],
      "opties": [
        [
          "🟣",
          "🍎",
          "🔵",
          "🔺"
        ],
        [
          "🍎",
          "🟣",
          "🔵",
          "🔺"
        ],
        [
          "🍎",
          "🔵",
          "🟣",
          "🔺"
        ]
      ],
      "goed": 0,
      "niveau": 2
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔴",
        "☀️",
        "🟢",
        "🟡",
        "🍌"
      ],
      "opties": [
        [
          "🟡",
          "☀️",
          "🔴",
          "🍌",
          "🟢"
        ],
        [
          "🍌",
          "🔴",
          "🟢",
          "🟡",
          "☀️"
        ],
        [
          "🔴",
          "☀️",
          "🟢",
          "🟡",
          "🍌"
        ]
      ],
      "goed": 2,
      "niveau": 3
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🍎",
        "🟨",
        "🌙"
      ],
      "opties": [
        [
          "🟨",
          "🌙",
          "🍎"
        ],
        [
          "🌙",
          "🍎",
          "🟨"
        ],
        [
          "🍎",
          "🟨",
          "🌙"
        ]
      ],
      "goed": 2,
      "niveau": 1
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟢",
        "🔴",
        "🟣",
        "🍌"
      ],
      "opties": [
        [
          "🟣",
          "🟢",
          "🔴",
          "🍌"
        ],
        [
          "🟢",
          "🔴",
          "🟣",
          "🍌"
        ],
        [
          "🍌",
          "🟢",
          "🟣",
          "🔴"
        ]
      ],
      "goed": 1,
      "niveau": 2
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟨",
        "🟡",
        "🌙",
        "🟦",
        "🔻"
      ],
      "opties": [
        [
          "🌙",
          "🟦",
          "🟡",
          "🟨",
          "🔻"
        ],
        [
          "🟨",
          "🟡",
          "🌙",
          "🟦",
          "🔻"
        ],
        [
          "🟦",
          "🟡",
          "🌙",
          "🟨",
          "🔻"
        ]
      ],
      "goed": 1,
      "niveau": 3
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🍌",
        "🔴",
        "🟣"
      ],
      "opties": [
        [
          "🍌",
          "🟣",
          "🔴"
        ],
        [
          "🟣",
          "🍌",
          "🔴"
        ],
        [
          "🍌",
          "🔴",
          "🟣"
        ]
      ],
      "goed": 2,
      "niveau": 1
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🐶",
        "🟡",
        "⭐",
        "🟦"
      ],
      "opties": [
        [
          "🐶",
          "🟡",
          "⭐",
          "🟦"
        ],
        [
          "⭐",
          "🟡",
          "🐶",
          "🟦"
        ],
        [
          "🟦",
          "🐶",
          "⭐",
          "🟡"
        ]
      ],
      "goed": 0,
      "niveau": 2
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟢",
        "🟦",
        "🔺",
        "🟡",
        "🟨"
      ],
      "opties": [
        [
          "🟦",
          "🟡",
          "🟨",
          "🔺",
          "🟢"
        ],
        [
          "🟦",
          "🟡",
          "🟢",
          "🟨",
          "🔺"
        ],
        [
          "🟢",
          "🟦",
          "🔺",
          "🟡",
          "🟨"
        ]
      ],
      "goed": 2,
      "niveau": 3
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔴",
        "🍌",
        "🐶",
        "🌙",
        "⭐"
      ],
      "opties": [
        [
          "🔴",
          "🍌",
          "🐶",
          "🌙",
          "⭐"
        ],
        [
          "⭐",
          "🌙",
          "🔴",
          "🍌",
          "🐶"
        ],
        [
          "🌙",
          "🔴",
          "⭐",
          "🐶",
          "🍌"
        ]
      ],
      "goed": 0,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟢",
        "🍌",
        "🐱",
        "🐶",
        "🔺"
      ],
      "opties": [
        [
          "🟢",
          "🔺",
          "🐱",
          "🐶",
          "🍌"
        ],
        [
          "🐶",
          "🐱",
          "🔺",
          "🟢",
          "🍌"
        ],
        [
          "🟢",
          "🍌",
          "🐱",
          "🐶",
          "🔺"
        ]
      ],
      "goed": 2,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟡",
        "🟣",
        "🍎",
        "🔺",
        "🟢",
        "🐶"
      ],
      "opties": [
        [
          "🟡",
          "🟣",
          "🍎",
          "🔺",
          "🟢",
          "🐶"
        ],
        [
          "🟣",
          "🟡",
          "🟢",
          "🍎",
          "🐶",
          "🔺"
        ],
        [
          "🐶",
          "🍎",
          "🟡",
          "🟣",
          "🟢",
          "🔺"
        ]
      ],
      "goed": 0,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "⭐",
        "🟣",
        "☀️",
        "🔺",
        "🌙",
        "🐱"
      ],
      "opties": [
        [
          "⭐",
          "🟣",
          "☀️",
          "🔺",
          "🌙",
          "🐱"
        ],
        [
          "🐱",
          "🔺",
          "☀️",
          "⭐",
          "🌙",
          "🟣"
        ],
        [
          "🐱",
          "🌙",
          "⭐",
          "☀️",
          "🔺",
          "🟣"
        ]
      ],
      "goed": 0,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔺",
        "🟣",
        "🍌",
        "⭐",
        "🔵",
        "🍎",
        "🟦"
      ],
      "opties": [
        [
          "🔺",
          "🟣",
          "🍌",
          "⭐",
          "🔵",
          "🍎",
          "🟦"
        ],
        [
          "🔵",
          "🍎",
          "⭐",
          "🟣",
          "🍌",
          "🟦",
          "🔺"
        ],
        [
          "🟣",
          "⭐",
          "🔺",
          "🔵",
          "🟦",
          "🍌",
          "🍎"
        ]
      ],
      "goed": 0,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔺",
        "🐱",
        "🌙",
        "🟢",
        "🟦"
      ],
      "opties": [
        [
          "🔺",
          "🐱",
          "🌙",
          "🟢",
          "🟦"
        ],
        [
          "🔺",
          "🌙",
          "🟢",
          "🐱",
          "🟦"
        ],
        [
          "🟦",
          "🌙",
          "🟢",
          "🔺",
          "🐱"
        ]
      ],
      "goed": 0,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟢",
        "☀️",
        "⭐",
        "🟣",
        "🍌"
      ],
      "opties": [
        [
          "🟢",
          "⭐",
          "☀️",
          "🟣",
          "🍌"
        ],
        [
          "🟢",
          "☀️",
          "⭐",
          "🟣",
          "🍌"
        ],
        [
          "🟢",
          "🟣",
          "🍌",
          "⭐",
          "☀️"
        ]
      ],
      "goed": 1,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔴",
        "🌙",
        "🟣",
        "🟢",
        "🟡"
      ],
      "opties": [
        [
          "🔴",
          "🌙",
          "🟢",
          "🟣",
          "🟡"
        ],
        [
          "🔴",
          "🟣",
          "🟡",
          "🌙",
          "🟢"
        ],
        [
          "🔴",
          "🌙",
          "🟣",
          "🟢",
          "🟡"
        ]
      ],
      "goed": 2,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔵",
        "🟦",
        "🍎",
        "🟣",
        "🟡",
        "🔴"
      ],
      "opties": [
        [
          "🔵",
          "🔴",
          "🍎",
          "🟡",
          "🟦",
          "🟣"
        ],
        [
          "🔵",
          "🟦",
          "🍎",
          "🟣",
          "🟡",
          "🔴"
        ],
        [
          "🔴",
          "🟦",
          "🟡",
          "🔵",
          "🍎",
          "🟣"
        ]
      ],
      "goed": 1,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔺",
        "🟦",
        "☀️",
        "🟣",
        "⭐",
        "🐱"
      ],
      "opties": [
        [
          "☀️",
          "🔺",
          "🐱",
          "🟦",
          "⭐",
          "🟣"
        ],
        [
          "🔺",
          "🟦",
          "☀️",
          "🟣",
          "⭐",
          "🐱"
        ],
        [
          "🐱",
          "🔺",
          "🟣",
          "⭐",
          "☀️",
          "🟦"
        ]
      ],
      "goed": 1,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟣",
        "🔺",
        "🟦",
        "🔴",
        "🍌",
        "⭐"
      ],
      "opties": [
        [
          "🟣",
          "🔺",
          "🟦",
          "🔴",
          "🍌",
          "⭐"
        ],
        [
          "🍌",
          "🟣",
          "⭐",
          "🔺",
          "🟦",
          "🔴"
        ],
        [
          "⭐",
          "🟦",
          "🔺",
          "🍌",
          "🔴",
          "🟣"
        ]
      ],
      "goed": 0,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🐶",
        "🔵",
        "🔺",
        "🟡",
        "🍌",
        "🟢",
        "☀️"
      ],
      "opties": [
        [
          "🐶",
          "🔵",
          "🔺",
          "🟡",
          "🍌",
          "🟢",
          "☀️"
        ],
        [
          "🟢",
          "🔺",
          "🔵",
          "☀️",
          "🟡",
          "🍌",
          "🐶"
        ],
        [
          "🐶",
          "🟢",
          "🟡",
          "🔵",
          "☀️",
          "🍌",
          "🔺"
        ]
      ],
      "goed": 0,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🌙",
        "🟡",
        "🔵",
        "🟢",
        "🐱",
        "🐶",
        "⭐"
      ],
      "opties": [
        [
          "🔵",
          "🟡",
          "⭐",
          "🟢",
          "🌙",
          "🐶",
          "🐱"
        ],
        [
          "🌙",
          "🟡",
          "⭐",
          "🐶",
          "🟢",
          "🔵",
          "🐱"
        ],
        [
          "🌙",
          "🟡",
          "🔵",
          "🟢",
          "🐱",
          "🐶",
          "⭐"
        ]
      ],
      "goed": 2,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟡",
        "🐱",
        "🔺",
        "🍎",
        "🌙",
        "☀️",
        "⭐"
      ],
      "opties": [
        [
          "🍎",
          "🐱",
          "🌙",
          "🟡",
          "☀️",
          "🔺",
          "⭐"
        ],
        [
          "⭐",
          "🍎",
          "🌙",
          "🟡",
          "☀️",
          "🔺",
          "🐱"
        ],
        [
          "🟡",
          "🐱",
          "🔺",
          "🍎",
          "🌙",
          "☀️",
          "⭐"
        ]
      ],
      "goed": 2,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔺",
        "🌙",
        "🍎",
        "🍌",
        "🟣"
      ],
      "opties": [
        [
          "🔺",
          "🌙",
          "🍎",
          "🍌",
          "🟣"
        ],
        [
          "🔺",
          "🌙",
          "🍌",
          "🍎",
          "🟣"
        ],
        [
          "🍌",
          "🟣",
          "🌙",
          "🔺",
          "🍎"
        ]
      ],
      "goed": 0,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟡",
        "☀️",
        "🔺",
        "🐶",
        "🔴"
      ],
      "opties": [
        [
          "🟡",
          "🔺",
          "🔴",
          "🐶",
          "☀️"
        ],
        [
          "🟡",
          "☀️",
          "🔺",
          "🐶",
          "🔴"
        ],
        [
          "☀️",
          "🟡",
          "🔺",
          "🔴",
          "🐶"
        ]
      ],
      "goed": 1,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔴",
        "🔵",
        "🐱",
        "🐶",
        "🟢"
      ],
      "opties": [
        [
          "🐶",
          "🔵",
          "🟢",
          "🐱",
          "🔴"
        ],
        [
          "🔴",
          "🔵",
          "🐱",
          "🐶",
          "🟢"
        ],
        [
          "🐱",
          "🔵",
          "🔴",
          "🟢",
          "🐶"
        ]
      ],
      "goed": 1,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟢",
        "⭐",
        "🌙",
        "🔺",
        "🟡"
      ],
      "opties": [
        [
          "🔺",
          "⭐",
          "🟡",
          "🟢",
          "🌙"
        ],
        [
          "🟢",
          "⭐",
          "🌙",
          "🔺",
          "🟡"
        ],
        [
          "🌙",
          "🟢",
          "🔺",
          "🟡",
          "⭐"
        ]
      ],
      "goed": 1,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "⭐",
        "🔵",
        "🟢",
        "🍎",
        "🟦",
        "🌙"
      ],
      "opties": [
        [
          "🟦",
          "🍎",
          "🔵",
          "🟢",
          "⭐",
          "🌙"
        ],
        [
          "🟢",
          "⭐",
          "🌙",
          "🟦",
          "🔵",
          "🍎"
        ],
        [
          "⭐",
          "🔵",
          "🟢",
          "🍎",
          "🟦",
          "🌙"
        ]
      ],
      "goed": 2,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟣",
        "🔵",
        "🍎",
        "🐶",
        "🟢",
        "🍌"
      ],
      "opties": [
        [
          "🟣",
          "🔵",
          "🍎",
          "🐶",
          "🟢",
          "🍌"
        ],
        [
          "🟢",
          "🍌",
          "🔵",
          "🟣",
          "🐶",
          "🍎"
        ],
        [
          "🍌",
          "🍎",
          "🟣",
          "🐶",
          "🟢",
          "🔵"
        ]
      ],
      "goed": 0,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "⭐",
        "🍌",
        "🟡",
        "🟣",
        "🌙",
        "🟦"
      ],
      "opties": [
        [
          "🟡",
          "🍌",
          "🟣",
          "🌙",
          "🟦",
          "⭐"
        ],
        [
          "🌙",
          "🍌",
          "🟡",
          "🟦",
          "🟣",
          "⭐"
        ],
        [
          "⭐",
          "🍌",
          "🟡",
          "🟣",
          "🌙",
          "🟦"
        ]
      ],
      "goed": 2,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟢",
        "🔺",
        "🔵",
        "🐱",
        "🍎",
        "🟦"
      ],
      "opties": [
        [
          "🟢",
          "🔺",
          "🔵",
          "🟦",
          "🍎",
          "🐱"
        ],
        [
          "🟢",
          "🐱",
          "🍎",
          "🔵",
          "🟦",
          "🔺"
        ],
        [
          "🟢",
          "🔺",
          "🔵",
          "🐱",
          "🍎",
          "🟦"
        ]
      ],
      "goed": 2,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟢",
        "🔺",
        "⭐",
        "🟦",
        "🔴",
        "🍌",
        "🟣"
      ],
      "opties": [
        [
          "🟦",
          "⭐",
          "🍌",
          "🟢",
          "🔺",
          "🟣",
          "🔴"
        ],
        [
          "🟢",
          "🔺",
          "⭐",
          "🟦",
          "🔴",
          "🍌",
          "🟣"
        ],
        [
          "⭐",
          "🟢",
          "🟦",
          "🟣",
          "🍌",
          "🔺",
          "🔴"
        ]
      ],
      "goed": 1,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔺",
        "🟦",
        "🐱",
        "☀️",
        "⭐",
        "🍎",
        "🟡"
      ],
      "opties": [
        [
          "🐱",
          "☀️",
          "🍎",
          "🟦",
          "🟡",
          "🔺",
          "⭐"
        ],
        [
          "🟡",
          "☀️",
          "🟦",
          "🐱",
          "⭐",
          "🍎",
          "🔺"
        ],
        [
          "🔺",
          "🟦",
          "🐱",
          "☀️",
          "⭐",
          "🍎",
          "🟡"
        ]
      ],
      "goed": 2,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🐱",
        "🔴",
        "🌙",
        "🟣",
        "🟡",
        "⭐",
        "☀️"
      ],
      "opties": [
        [
          "🟣",
          "🔴",
          "🐱",
          "⭐",
          "🌙",
          "☀️",
          "🟡"
        ],
        [
          "🔴",
          "🐱",
          "🌙",
          "🟡",
          "🟣",
          "☀️",
          "⭐"
        ],
        [
          "🐱",
          "🔴",
          "🌙",
          "🟣",
          "🟡",
          "⭐",
          "☀️"
        ]
      ],
      "goed": 2,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔵",
        "🟣",
        "🔺",
        "🍎",
        "🔴",
        "🟡",
        "🟢"
      ],
      "opties": [
        [
          "🔵",
          "🟣",
          "🔺",
          "🍎",
          "🔴",
          "🟡",
          "🟢"
        ],
        [
          "🔴",
          "🔵",
          "🍎",
          "🟣",
          "🔺",
          "🟡",
          "🟢"
        ],
        [
          "🔺",
          "🍎",
          "🔵",
          "🔴",
          "🟢",
          "🟡",
          "🟣"
        ]
      ],
      "goed": 0,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟣",
        "🟦",
        "🐱",
        "🍌",
        "🟢"
      ],
      "opties": [
        [
          "🟣",
          "🟦",
          "🐱",
          "🍌",
          "🟢"
        ],
        [
          "🟢",
          "🟣",
          "🟦",
          "🐱",
          "🍌"
        ],
        [
          "🟣",
          "🍌",
          "🟦",
          "🟢",
          "🐱"
        ]
      ],
      "goed": 0,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🌙",
        "🐶",
        "🍌",
        "🐱",
        "🟣"
      ],
      "opties": [
        [
          "🌙",
          "🐶",
          "🍌",
          "🐱",
          "🟣"
        ],
        [
          "🐱",
          "🌙",
          "🐶",
          "🍌",
          "🟣"
        ],
        [
          "🍌",
          "🐶",
          "🌙",
          "🐱",
          "🟣"
        ]
      ],
      "goed": 0,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "⭐",
        "🔴",
        "🍎",
        "🔺",
        "🟣"
      ],
      "opties": [
        [
          "🟣",
          "⭐",
          "🔴",
          "🔺",
          "🍎"
        ],
        [
          "🟣",
          "🔺",
          "🔴",
          "⭐",
          "🍎"
        ],
        [
          "⭐",
          "🔴",
          "🍎",
          "🔺",
          "🟣"
        ]
      ],
      "goed": 2,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🌙",
        "🟦",
        "🐱",
        "🔺",
        "🍌"
      ],
      "opties": [
        [
          "🌙",
          "🟦",
          "🐱",
          "🔺",
          "🍌"
        ],
        [
          "🌙",
          "🍌",
          "🐱",
          "🟦",
          "🔺"
        ],
        [
          "🌙",
          "🍌",
          "🟦",
          "🐱",
          "🔺"
        ]
      ],
      "goed": 0,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟣",
        "🟦",
        "🐶",
        "🔴",
        "☀️",
        "🌙"
      ],
      "opties": [
        [
          "🟣",
          "🟦",
          "🐶",
          "🔴",
          "☀️",
          "🌙"
        ],
        [
          "🟦",
          "🟣",
          "🐶",
          "🔴",
          "🌙",
          "☀️"
        ],
        [
          "🌙",
          "☀️",
          "🐶",
          "🔴",
          "🟣",
          "🟦"
        ]
      ],
      "goed": 0,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🍌",
        "🔵",
        "🟦",
        "🔺",
        "🟡",
        "🟢"
      ],
      "opties": [
        [
          "🍌",
          "🔵",
          "🟦",
          "🔺",
          "🟡",
          "🟢"
        ],
        [
          "🟡",
          "🔺",
          "🔵",
          "🟦",
          "🍌",
          "🟢"
        ],
        [
          "🍌",
          "🔵",
          "🟦",
          "🔺",
          "🟢",
          "🟡"
        ]
      ],
      "goed": 0,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "⭐",
        "🍎",
        "🌙",
        "☀️",
        "🔺",
        "🟡"
      ],
      "opties": [
        [
          "⭐",
          "🍎",
          "🌙",
          "☀️",
          "🔺",
          "🟡"
        ],
        [
          "🟡",
          "🔺",
          "⭐",
          "☀️",
          "🌙",
          "🍎"
        ],
        [
          "🔺",
          "🌙",
          "🟡",
          "☀️",
          "⭐",
          "🍎"
        ]
      ],
      "goed": 0,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔴",
        "☀️",
        "🍌",
        "🐶",
        "🟡",
        "🌙"
      ],
      "opties": [
        [
          "🌙",
          "🐶",
          "🟡",
          "🔴",
          "☀️",
          "🍌"
        ],
        [
          "🔴",
          "☀️",
          "🍌",
          "🐶",
          "🟡",
          "🌙"
        ],
        [
          "🌙",
          "🐶",
          "🔴",
          "☀️",
          "🍌",
          "🟡"
        ]
      ],
      "goed": 1,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟣",
        "🍌",
        "🌙",
        "⭐",
        "🟦",
        "🔵",
        "🟢"
      ],
      "opties": [
        [
          "🟣",
          "🍌",
          "🌙",
          "⭐",
          "🟦",
          "🔵",
          "🟢"
        ],
        [
          "🌙",
          "🔵",
          "🟦",
          "🟢",
          "🟣",
          "🍌",
          "⭐"
        ],
        [
          "🟣",
          "⭐",
          "🍌",
          "🟦",
          "🔵",
          "🌙",
          "🟢"
        ]
      ],
      "goed": 0,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🐱",
        "🌙",
        "🟦",
        "🔺",
        "🟡",
        "🍎",
        "🟢"
      ],
      "opties": [
        [
          "🍎",
          "🐱",
          "🟦",
          "🔺",
          "🟢",
          "🟡",
          "🌙"
        ],
        [
          "🟦",
          "🟢",
          "🔺",
          "🐱",
          "🍎",
          "🟡",
          "🌙"
        ],
        [
          "🐱",
          "🌙",
          "🟦",
          "🔺",
          "🟡",
          "🍎",
          "🟢"
        ]
      ],
      "goed": 2,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟦",
        "🍌",
        "🐶",
        "⭐",
        "🟡",
        "🟣",
        "🍎"
      ],
      "opties": [
        [
          "🐶",
          "🟡",
          "🟣",
          "🍌",
          "⭐",
          "🍎",
          "🟦"
        ],
        [
          "🍎",
          "⭐",
          "🟣",
          "🟦",
          "🐶",
          "🟡",
          "🍌"
        ],
        [
          "🟦",
          "🍌",
          "🐶",
          "⭐",
          "🟡",
          "🟣",
          "🍎"
        ]
      ],
      "goed": 2,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🍎",
        "🐱",
        "🐶",
        "☀️",
        "🌙",
        "🟣",
        "🔴"
      ],
      "opties": [
        [
          "☀️",
          "🟣",
          "🍎",
          "🐱",
          "🔴",
          "🐶",
          "🌙"
        ],
        [
          "🍎",
          "🐱",
          "🐶",
          "☀️",
          "🌙",
          "🟣",
          "🔴"
        ],
        [
          "☀️",
          "🍎",
          "🐶",
          "🔴",
          "🌙",
          "🟣",
          "🐱"
        ]
      ],
      "goed": 1,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟣",
        "🟦",
        "🐶",
        "🔴",
        "☀️"
      ],
      "opties": [
        [
          "🟣",
          "🟦",
          "🐶",
          "☀️",
          "🔴"
        ],
        [
          "🟣",
          "🟦",
          "🐶",
          "🔴",
          "☀️"
        ],
        [
          "🐶",
          "🟦",
          "🔴",
          "☀️",
          "🟣"
        ]
      ],
      "goed": 1,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🌙",
        "🍎",
        "🔵",
        "🟡",
        "⭐"
      ],
      "opties": [
        [
          "🌙",
          "🍎",
          "🔵",
          "⭐",
          "🟡"
        ],
        [
          "🌙",
          "🍎",
          "⭐",
          "🔵",
          "🟡"
        ],
        [
          "🌙",
          "🍎",
          "🔵",
          "🟡",
          "⭐"
        ]
      ],
      "goed": 2,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔵",
        "🟦",
        "🍌",
        "🟣",
        "☀️"
      ],
      "opties": [
        [
          "🟣",
          "🔵",
          "🍌",
          "☀️",
          "🟦"
        ],
        [
          "🔵",
          "🟦",
          "🍌",
          "🟣",
          "☀️"
        ],
        [
          "🟦",
          "🟣",
          "🔵",
          "🍌",
          "☀️"
        ]
      ],
      "goed": 1,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🐶",
        "🔵",
        "🟦",
        "☀️",
        "🟢",
        "🔺"
      ],
      "opties": [
        [
          "🔵",
          "🐶",
          "🔺",
          "🟢",
          "🟦",
          "☀️"
        ],
        [
          "🐶",
          "🔵",
          "🟦",
          "☀️",
          "🟢",
          "🔺"
        ],
        [
          "🟦",
          "🐶",
          "🟢",
          "🔵",
          "🔺",
          "☀️"
        ]
      ],
      "goed": 1,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "☀️",
        "⭐",
        "🌙",
        "🟦",
        "🔺",
        "🐱"
      ],
      "opties": [
        [
          "☀️",
          "⭐",
          "🌙",
          "🟦",
          "🔺",
          "🐱"
        ],
        [
          "☀️",
          "🌙",
          "🐱",
          "⭐",
          "🔺",
          "🟦"
        ],
        [
          "🐱",
          "☀️",
          "🌙",
          "🔺",
          "⭐",
          "🟦"
        ]
      ],
      "goed": 0,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔺",
        "🟦",
        "🌙",
        "☀️",
        "🔴",
        "🟣"
      ],
      "opties": [
        [
          "🌙",
          "🟦",
          "🟣",
          "🔴",
          "☀️",
          "🔺"
        ],
        [
          "🌙",
          "🟣",
          "🔺",
          "🟦",
          "🔴",
          "☀️"
        ],
        [
          "🔺",
          "🟦",
          "🌙",
          "☀️",
          "🔴",
          "🟣"
        ]
      ],
      "goed": 2,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔵",
        "🍌",
        "🐱",
        "🟡",
        "🐶",
        "🍎"
      ],
      "opties": [
        [
          "🍌",
          "🔵",
          "🍎",
          "🟡",
          "🐱",
          "🐶"
        ],
        [
          "🍎",
          "🐱",
          "🐶",
          "🔵",
          "🍌",
          "🟡"
        ],
        [
          "🔵",
          "🍌",
          "🐱",
          "🟡",
          "🐶",
          "🍎"
        ]
      ],
      "goed": 2,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🌙",
        "🍎",
        "🟦",
        "🐶",
        "⭐",
        "☀️",
        "🟢"
      ],
      "opties": [
        [
          "🍎",
          "🟢",
          "☀️",
          "🐶",
          "🟦",
          "⭐",
          "🌙"
        ],
        [
          "🌙",
          "🍎",
          "🟦",
          "🐶",
          "⭐",
          "☀️",
          "🟢"
        ],
        [
          "🍎",
          "🐶",
          "⭐",
          "🟦",
          "🌙",
          "☀️",
          "🟢"
        ]
      ],
      "goed": 1,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🍌",
        "🍎",
        "🔴",
        "🟢",
        "🐱",
        "🟦",
        "☀️"
      ],
      "opties": [
        [
          "🐱",
          "🟢",
          "🔴",
          "🍌",
          "🟦",
          "🍎",
          "☀️"
        ],
        [
          "🍎",
          "🟦",
          "🔴",
          "🟢",
          "🍌",
          "☀️",
          "🐱"
        ],
        [
          "🍌",
          "🍎",
          "🔴",
          "🟢",
          "🐱",
          "🟦",
          "☀️"
        ]
      ],
      "goed": 2,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟣",
        "🟦",
        "☀️",
        "🍌",
        "🟡",
        "⭐",
        "🔵"
      ],
      "opties": [
        [
          "🔵",
          "⭐",
          "☀️",
          "🟡",
          "🟦",
          "🟣",
          "🍌"
        ],
        [
          "☀️",
          "🟡",
          "🟣",
          "🟦",
          "⭐",
          "🍌",
          "🔵"
        ],
        [
          "🟣",
          "🟦",
          "☀️",
          "🍌",
          "🟡",
          "⭐",
          "🔵"
        ]
      ],
      "goed": 2,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🐱",
        "🟣",
        "🔵",
        "🟡",
        "🟢",
        "🍎",
        "⭐"
      ],
      "opties": [
        [
          "🔵",
          "🟣",
          "⭐",
          "🟢",
          "🟡",
          "🐱",
          "🍎"
        ],
        [
          "🐱",
          "🟣",
          "🔵",
          "🟡",
          "🟢",
          "🍎",
          "⭐"
        ],
        [
          "🔵",
          "🟣",
          "⭐",
          "🟡",
          "🍎",
          "🟢",
          "🐱"
        ]
      ],
      "goed": 1,
      "niveau": 6
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "⭐",
        "🐶",
        "🔺",
        "🌙",
        "🐱"
      ],
      "opties": [
        [
          "⭐",
          "🐱",
          "🔺",
          "🐶",
          "🌙"
        ],
        [
          "⭐",
          "🐶",
          "🔺",
          "🌙",
          "🐱"
        ],
        [
          "🔺",
          "🐶",
          "🌙",
          "🐱",
          "⭐"
        ]
      ],
      "goed": 1,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟦",
        "🔵",
        "🍌",
        "🟡",
        "🐶"
      ],
      "opties": [
        [
          "🟦",
          "🔵",
          "🍌",
          "🟡",
          "🐶"
        ],
        [
          "🐶",
          "🟡",
          "🔵",
          "🍌",
          "🟦"
        ],
        [
          "🟦",
          "🔵",
          "🍌",
          "🐶",
          "🟡"
        ]
      ],
      "goed": 0,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "⭐",
        "🍎",
        "🌙",
        "☀️",
        "🔺"
      ],
      "opties": [
        [
          "⭐",
          "🍎",
          "🌙",
          "☀️",
          "🔺"
        ],
        [
          "🔺",
          "🍎",
          "☀️",
          "⭐",
          "🌙"
        ],
        [
          "☀️",
          "⭐",
          "🌙",
          "🔺",
          "🍎"
        ]
      ],
      "goed": 0,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔴",
        "⭐",
        "☀️",
        "🟣",
        "🟡"
      ],
      "opties": [
        [
          "🟡",
          "🔴",
          "🟣",
          "☀️",
          "⭐"
        ],
        [
          "🟣",
          "🔴",
          "☀️",
          "🟡",
          "⭐"
        ],
        [
          "🔴",
          "⭐",
          "☀️",
          "🟣",
          "🟡"
        ]
      ],
      "goed": 2,
      "niveau": 4
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟡",
        "🟣",
        "☀️",
        "🌙",
        "🔴",
        "🍌"
      ],
      "opties": [
        [
          "🟡",
          "🌙",
          "🟣",
          "🔴",
          "🍌",
          "☀️"
        ],
        [
          "🟡",
          "🟣",
          "☀️",
          "🌙",
          "🔴",
          "🍌"
        ],
        [
          "🟡",
          "🍌",
          "🔴",
          "🟣",
          "🌙",
          "☀️"
        ]
      ],
      "goed": 1,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "☀️",
        "🟢",
        "🍌",
        "🌙",
        "🐱",
        "🟦"
      ],
      "opties": [
        [
          "🌙",
          "🐱",
          "☀️",
          "🟦",
          "🟢",
          "🍌"
        ],
        [
          "☀️",
          "🟢",
          "🍌",
          "🌙",
          "🐱",
          "🟦"
        ],
        [
          "🍌",
          "🟦",
          "☀️",
          "🌙",
          "🟢",
          "🐱"
        ]
      ],
      "goed": 1,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🟡",
        "🐶",
        "🔵",
        "🟣",
        "🔺",
        "🟦"
      ],
      "opties": [
        [
          "🔵",
          "🟣",
          "🟡",
          "🐶",
          "🟦",
          "🔺"
        ],
        [
          "🟡",
          "🐶",
          "🔵",
          "🟣",
          "🔺",
          "🟦"
        ],
        [
          "🐶",
          "🟦",
          "🔺",
          "🟣",
          "🔵",
          "🟡"
        ]
      ],
      "goed": 1,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🍎",
        "☀️",
        "🌙",
        "🟢",
        "🔺",
        "⭐"
      ],
      "opties": [
        [
          "☀️",
          "🍎",
          "⭐",
          "🟢",
          "🌙",
          "🔺"
        ],
        [
          "🍎",
          "☀️",
          "🌙",
          "🟢",
          "🔺",
          "⭐"
        ],
        [
          "🌙",
          "⭐",
          "🔺",
          "☀️",
          "🟢",
          "🍎"
        ]
      ],
      "goed": 1,
      "niveau": 5
    },
    {
      "opdracht": "Onthoud de rij",
      "toon": [
        "🔺",
        "🌙",
        "🟡",
        "🔴",
        "🔵",
        "🐱",
        "🟣"
      ],
      "opties": [
        [
          "🔺",
          "🐱",
          "🔵",
          "🔴",
          "🟡",
          "🟣",
          "🌙"
        ],
        [
          "🔵",
          "🟣",
          "🐱",
          "🔴",
          "🟡",
          "🔺",
          "🌙"
        ],
        [
          "🔺",
          "🌙",
          "🟡",
          "🔴",
          "🔵",
          "🐱",
          "🟣"
        ]
      ],
      "goed": 2,
      "niveau": 6
    }
  ],
  "zoek": [
    {
      "opdracht": "Tik alle appels",
      "doel": "🍎",
      "veld": [
        "🍐",
        "🍎",
        "🍊",
        "🍇",
        "🍎",
        "🍌",
        "🍎",
        "🍐",
        "🍊"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Tik alle sterren",
      "doel": "⭐",
      "veld": [
        "🌙",
        "⭐",
        "☀️",
        "⭐",
        "🌙",
        "⭐",
        "☁️",
        "⭐",
        "🌙"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Tik alle kikkers",
      "doel": "🐸",
      "veld": [
        "🐢",
        "🐸",
        "🦎",
        "🐸",
        "🐍",
        "🐸",
        "🐢",
        "🐸",
        "🦎",
        "🐸",
        "🐍",
        "🐢"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Tik alle rode hartjes",
      "doel": "❤️",
      "veld": [
        "💙",
        "❤️",
        "💛",
        "❤️",
        "💚",
        "❤️",
        "💜",
        "❤️",
        "💙",
        "❤️",
        "💛",
        "❤️",
        "💚",
        "❤️",
        "💜",
        "❤️"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Tik alle sterren",
      "doel": "⭐",
      "veld": [
        "🌙",
        "☁️",
        "☁️",
        "🌙",
        "⭐",
        "☀️",
        "⭐",
        "⭐",
        "☀️",
        "⭐"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Tik alle kikkers",
      "doel": "🐸",
      "veld": [
        "🐸",
        "🐸",
        "🐸",
        "🐸",
        "🐸",
        "🐢",
        "🐢",
        "🐍",
        "🐍",
        "🦎",
        "🦎"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Tik alle hartjes",
      "doel": "❤️",
      "veld": [
        "❤️",
        "💜",
        "💛",
        "💙",
        "💙",
        "💛",
        "💛",
        "💜",
        "💚",
        "❤️",
        "❤️",
        "💛"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Tik alle bijen",
      "doel": "🐝",
      "veld": [
        "🐜",
        "🐞",
        "🐝",
        "🐞",
        "🐜",
        "🦋",
        "🦋",
        "🐝",
        "🐞",
        "🐞",
        "🐜",
        "🐝",
        "🐝"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Tik alle bloemen",
      "doel": "🌸",
      "veld": [
        "🌵",
        "🌵",
        "🌸",
        "🌻",
        "🌵",
        "🍃",
        "🌵",
        "🌸",
        "🌵",
        "🌸",
        "🌻",
        "🌵",
        "🌸",
        "🌸"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Tik alle auto's",
      "doel": "🚗",
      "veld": [
        "✈️",
        "🚗",
        "🚌",
        "✈️",
        "🚲",
        "🚲",
        "🚗",
        "🚲",
        "✈️",
        "🚗",
        "🚲",
        "🚌",
        "🚌",
        "🚌",
        "🚌"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Tik alle blauwe",
      "doel": "🔵",
      "veld": [
        "🔵",
        "🔴",
        "🔴",
        "🟡",
        "🔴",
        "🔵",
        "🔵",
        "🔵",
        "🟡"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Tik alle ballonnen",
      "doel": "🎈",
      "veld": [
        "🎈",
        "⚽",
        "⚽",
        "🎈",
        "🎈",
        "🎁",
        "🎁",
        "🎈",
        "🎈",
        "🎁"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Tik alle visjes",
      "doel": "🐟",
      "veld": [
        "🐟",
        "🐙",
        "🐙",
        "🐙",
        "🐟",
        "🦀",
        "🐙",
        "🦀",
        "🐟",
        "🐙",
        "🐙"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Tik alle aardbeien",
      "doel": "🍓",
      "veld": [
        "🍅",
        "🍓",
        "🍅",
        "🍎",
        "🍓",
        "🍒",
        "🍎",
        "🍓",
        "🍎",
        "🍒",
        "🍅",
        "🍓"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Tik alle hondjes",
      "doel": "🐶",
      "veld": [
        "🐭",
        "🐱",
        "🐰",
        "🐶",
        "🐰",
        "🐰",
        "🐶",
        "🐶",
        "🐶",
        "🐰",
        "🐶",
        "🐭",
        "🐰"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Tik alle appels",
      "doel": "🍎",
      "veld": [
        "🍎",
        "🍇",
        "🍎",
        "🍊",
        "🍊",
        "🍎",
        "🍐",
        "🍐",
        "🍇"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Tik alle sterren",
      "doel": "⭐",
      "veld": [
        "🌙",
        "⭐",
        "☁️",
        "🌙",
        "⭐",
        "⭐",
        "☀️",
        "⭐",
        "☀️",
        "☀️"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Tik alle kikkers",
      "doel": "🐸",
      "veld": [
        "🐢",
        "🐢",
        "🐸",
        "🐍",
        "🐸",
        "🐸",
        "🦎",
        "🐍",
        "🐸",
        "🐸",
        "🐢"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Tik alle hartjes",
      "doel": "❤️",
      "veld": [
        "💙",
        "💙",
        "💙",
        "💛",
        "💙",
        "❤️",
        "💛",
        "❤️",
        "💛",
        "💜",
        "💚",
        "❤️"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Tik alle bijen",
      "doel": "🐝",
      "veld": [
        "🐜",
        "🐜",
        "🦋",
        "🐝",
        "🐜",
        "🦋",
        "🐜",
        "🐝",
        "🐜",
        "🐝",
        "🐞",
        "🐝",
        "🦋"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Tik alle bloemen",
      "doel": "🌸",
      "veld": [
        "🍃",
        "🌸",
        "🌵",
        "🌻",
        "🌸",
        "🌸",
        "🌸",
        "🍃",
        "🌵",
        "🌻",
        "🌻",
        "🌵",
        "🌸",
        "🍃"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Tik alle auto's",
      "doel": "🚗",
      "veld": [
        "🚗",
        "🚗",
        "✈️",
        "🚌",
        "🚌",
        "✈️",
        "🚲",
        "✈️",
        "✈️",
        "✈️",
        "🚗",
        "🚌",
        "✈️",
        "🚲",
        "🚌"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Tik alle blauwe",
      "doel": "🔵",
      "veld": [
        "🔵",
        "🔵",
        "🔴",
        "🔵",
        "🔴",
        "🔴",
        "🔵",
        "🔴",
        "🔴"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Tik alle ballonnen",
      "doel": "🎈",
      "veld": [
        "🎈",
        "⚽",
        "⚽",
        "🎈",
        "⚽",
        "🎈",
        "🎈",
        "🎈",
        "🎁",
        "⚽"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Tik alle visjes",
      "doel": "🐟",
      "veld": [
        "🦀",
        "🐟",
        "🐙",
        "🦀",
        "🐟",
        "🐬",
        "🐙",
        "🐬",
        "🦀",
        "🐙",
        "🐟"
      ],
      "niveau": 1
    },
    {
      "opdracht": "Tik alle aardbeien",
      "doel": "🍓",
      "veld": [
        "🍅",
        "🍓",
        "🍅",
        "🍓",
        "🍅",
        "🍒",
        "🍅",
        "🍒",
        "🍒",
        "🍓",
        "🍓",
        "🍅"
      ],
      "niveau": 2
    },
    {
      "opdracht": "Tik alle hondjes",
      "doel": "🐶",
      "veld": [
        "🐶",
        "🐭",
        "🐶",
        "🐰",
        "🐭",
        "🐰",
        "🐭",
        "🐰",
        "🐱",
        "🐶",
        "🐭",
        "🐶",
        "🐶"
      ],
      "niveau": 3
    },
    {
      "opdracht": "Tik alle appels",
      "doel": "🍎",
      "veld": [
        "🍒",
        "🍅",
        "🍎",
        "🍒",
        "🍅",
        "🍅",
        "🍒",
        "🍒",
        "🍎",
        "🍎",
        "🍅",
        "🍒",
        "🍒",
        "🍎",
        "🍅",
        "🍒"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle blauwe",
      "doel": "🔵",
      "veld": [
        "🟣",
        "🟣",
        "🟣",
        "🔷",
        "🔷",
        "🔵",
        "🟦",
        "🔵",
        "🟣",
        "🟦",
        "🔵",
        "🟣",
        "🔵",
        "🟦",
        "🔵",
        "🟣",
        "🟦",
        "🔷",
        "🟣",
        "🟦"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle bijen",
      "doel": "🐝",
      "veld": [
        "🦋",
        "🪰",
        "🪰",
        "🐝",
        "🪰",
        "🐝",
        "🐞",
        "🐝",
        "🐝",
        "🦋",
        "🪰",
        "🦋",
        "🐞",
        "🦋",
        "🦋",
        "🐞",
        "🐝"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle zessen",
      "doel": "6",
      "veld": [
        "8",
        "6",
        "8",
        "8",
        "8",
        "9",
        "0",
        "6",
        "9",
        "9",
        "0",
        "8",
        "0",
        "6",
        "6",
        "0",
        "8",
        "6"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle letters b",
      "doel": "b",
      "veld": [
        "q",
        "d",
        "q",
        "b",
        "q",
        "b",
        "b",
        "b",
        "p",
        "q",
        "p",
        "q",
        "p",
        "q",
        "d",
        "q"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle gouden sterren",
      "doel": "🌟",
      "veld": [
        "⭐",
        "💫",
        "✨",
        "🌟",
        "🌟",
        "💫",
        "🌟",
        "⭐",
        "💫",
        "✨",
        "⭐",
        "💫",
        "💫",
        "💫",
        "💫",
        "🌟",
        "✨",
        "💫",
        "✨"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle appels",
      "doel": "🍎",
      "veld": [
        "🍒",
        "🍅",
        "🍎",
        "🍒",
        "🍅",
        "🍎",
        "🍎",
        "🍅",
        "🍅",
        "🍒",
        "🍅",
        "🍎",
        "🍒",
        "🍅",
        "🍅",
        "🍅",
        "🍒",
        "🍎"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle blauwe",
      "doel": "🔵",
      "veld": [
        "🟣",
        "🔷",
        "🟣",
        "🟣",
        "🔵",
        "🟣",
        "🔵",
        "🟦",
        "🔷",
        "🔷",
        "🔷",
        "🟣",
        "🔷",
        "🟦",
        "🔵",
        "🔵",
        "🔷",
        "🔵",
        "🟦"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle paarden",
      "doel": "🐴",
      "veld": [
        "🐄",
        "🐴",
        "🐴",
        "🐴",
        "🐖",
        "🦌",
        "🐄",
        "🐖",
        "🐖",
        "🦌",
        "🐴",
        "🦌",
        "🦌",
        "🦌",
        "🐖",
        "🐄"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle bijen",
      "doel": "🐝",
      "veld": [
        "🦋",
        "🪰",
        "🪰",
        "🪰",
        "🪰",
        "🐝",
        "🐝",
        "🪰",
        "🐞",
        "🐝",
        "🐝",
        "🦋",
        "🐞",
        "🐞",
        "🐝",
        "🐞"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle zessen",
      "doel": "6",
      "veld": [
        "0",
        "8",
        "8",
        "9",
        "6",
        "8",
        "6",
        "9",
        "0",
        "8",
        "9",
        "6",
        "9",
        "9",
        "6",
        "0",
        "6"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle driehoeken omhoog",
      "doel": "🔺",
      "veld": [
        "🟥",
        "🔺",
        "🔺",
        "🟥",
        "🔸",
        "🔺",
        "🔺",
        "🟥",
        "🟥",
        "🔸",
        "🟥",
        "🟥",
        "🔺",
        "🟥",
        "🔻",
        "🟥"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle letters b",
      "doel": "b",
      "veld": [
        "q",
        "d",
        "d",
        "q",
        "b",
        "p",
        "b",
        "b",
        "q",
        "p",
        "q",
        "p",
        "p",
        "d",
        "q",
        "b",
        "q",
        "p",
        "p",
        "b"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle gouden sterren",
      "doel": "🌟",
      "veld": [
        "🌟",
        "🌟",
        "💫",
        "💫",
        "🌟",
        "🌟",
        "💫",
        "⭐",
        "⭐",
        "💫",
        "⭐",
        "💫",
        "⭐",
        "⭐",
        "✨",
        "✨",
        "⭐"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle negens",
      "doel": "9",
      "veld": [
        "9",
        "8",
        "9",
        "6",
        "4",
        "9",
        "6",
        "9",
        "6",
        "9",
        "6",
        "4",
        "4",
        "8",
        "4",
        "6"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle appels",
      "doel": "🍎",
      "veld": [
        "🍅",
        "🍎",
        "🍅",
        "🍅",
        "🍅",
        "🍅",
        "🍅",
        "🍅",
        "🍒",
        "🍎",
        "🍅",
        "🍒",
        "🍅",
        "🍅",
        "🍎",
        "🍅",
        "🍎",
        "🍎"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle blauwe",
      "doel": "🔵",
      "veld": [
        "🔷",
        "🟣",
        "🔷",
        "🔵",
        "🟣",
        "🔷",
        "🔷",
        "🟦",
        "🔷",
        "🟣",
        "🟣",
        "🔵",
        "🟣",
        "🟦",
        "🔵",
        "🔵",
        "🔵",
        "🔷",
        "🟣",
        "🟣"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle paarden",
      "doel": "🐴",
      "veld": [
        "🦌",
        "🐖",
        "🐖",
        "🐖",
        "🐄",
        "🐖",
        "🐖",
        "🐴",
        "🐖",
        "🐴",
        "🐴",
        "🐄",
        "🐴",
        "🐖",
        "🐄",
        "🐴",
        "🐄",
        "🐖"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle bijen",
      "doel": "🐝",
      "veld": [
        "🦋",
        "🐝",
        "🐝",
        "🐝",
        "🪰",
        "🪰",
        "🐝",
        "🐝",
        "🦋",
        "🦋",
        "🐞",
        "🐞",
        "🐞",
        "🐞",
        "🪰",
        "🦋"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle zessen",
      "doel": "6",
      "veld": [
        "6",
        "8",
        "6",
        "9",
        "6",
        "6",
        "8",
        "8",
        "9",
        "9",
        "0",
        "0",
        "0",
        "9",
        "0",
        "8",
        "8"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle driehoeken omhoog",
      "doel": "🔺",
      "veld": [
        "🟥",
        "🔸",
        "🔺",
        "🔸",
        "🔻",
        "🔺",
        "🔻",
        "🔺",
        "🟥",
        "🔸",
        "🔺",
        "🟥",
        "🟥",
        "🟥",
        "🔻",
        "🟥",
        "🔺",
        "🔻"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle letters b",
      "doel": "b",
      "veld": [
        "d",
        "q",
        "d",
        "p",
        "q",
        "b",
        "d",
        "q",
        "q",
        "d",
        "p",
        "q",
        "q",
        "p",
        "p",
        "b",
        "b",
        "b"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle gouden sterren",
      "doel": "🌟",
      "veld": [
        "✨",
        "💫",
        "✨",
        "⭐",
        "🌟",
        "💫",
        "💫",
        "💫",
        "💫",
        "🌟",
        "🌟",
        "⭐",
        "⭐",
        "🌟",
        "🌟",
        "✨",
        "✨",
        "✨"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle negens",
      "doel": "9",
      "veld": [
        "8",
        "9",
        "6",
        "4",
        "8",
        "9",
        "8",
        "6",
        "4",
        "6",
        "6",
        "8",
        "9",
        "8",
        "8",
        "9"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle appels",
      "doel": "🍎",
      "veld": [
        "🍅",
        "🍒",
        "🍅",
        "🍒",
        "🍅",
        "🍒",
        "🍅",
        "🍎",
        "🍒",
        "🍒",
        "🍅",
        "🍒",
        "🍅",
        "🍒",
        "🍎",
        "🍎",
        "🍎",
        "🍅",
        "🍅",
        "🍅"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle blauwe",
      "doel": "🔵",
      "veld": [
        "🔷",
        "🟣",
        "🔵",
        "🔷",
        "🔵",
        "🔵",
        "🟦",
        "🟣",
        "🔷",
        "🟦",
        "🔵",
        "🟣",
        "🟣",
        "🟣",
        "🟦",
        "🟣"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle paarden",
      "doel": "🐴",
      "veld": [
        "🐖",
        "🐄",
        "🐖",
        "🐄",
        "🦌",
        "🐴",
        "🐄",
        "🦌",
        "🐄",
        "🦌",
        "🐖",
        "🐴",
        "🐴",
        "🐖",
        "🐄",
        "🐄",
        "🐄",
        "🐴",
        "🐴"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle bijen",
      "doel": "🐝",
      "veld": [
        "🐝",
        "🐝",
        "🪰",
        "🐝",
        "🦋",
        "🐞",
        "🐞",
        "🪰",
        "🐝",
        "🦋",
        "🐝",
        "🪰",
        "🪰",
        "🪰",
        "🦋",
        "🦋"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle zessen",
      "doel": "6",
      "veld": [
        "6",
        "0",
        "6",
        "6",
        "0",
        "6",
        "9",
        "6",
        "8",
        "0",
        "9",
        "0",
        "8",
        "9",
        "9",
        "0"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle driehoeken omhoog",
      "doel": "🔺",
      "veld": [
        "🔻",
        "🔻",
        "🔸",
        "🔻",
        "🟥",
        "🔻",
        "🔸",
        "🔺",
        "🔺",
        "🔻",
        "🔻",
        "🔻",
        "🔺",
        "🔻",
        "🔻",
        "🟥",
        "🔺",
        "🔺"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle letters b",
      "doel": "b",
      "veld": [
        "d",
        "d",
        "b",
        "d",
        "d",
        "d",
        "q",
        "d",
        "b",
        "d",
        "b",
        "p",
        "d",
        "d",
        "b",
        "p",
        "d"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle gouden sterren",
      "doel": "🌟",
      "veld": [
        "⭐",
        "⭐",
        "🌟",
        "⭐",
        "🌟",
        "💫",
        "💫",
        "⭐",
        "🌟",
        "💫",
        "✨",
        "⭐",
        "⭐",
        "💫",
        "⭐",
        "⭐",
        "🌟",
        "✨",
        "⭐",
        "🌟"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle negens",
      "doel": "9",
      "veld": [
        "8",
        "9",
        "4",
        "6",
        "9",
        "9",
        "4",
        "8",
        "6",
        "9",
        "6",
        "6",
        "6",
        "6",
        "4",
        "9",
        "8",
        "6"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle appels",
      "doel": "🍎",
      "veld": [
        "🍒",
        "🍅",
        "🍎",
        "🍒",
        "🍒",
        "🍒",
        "🍒",
        "🍅",
        "🍅",
        "🍅",
        "🍎",
        "🍅",
        "🍒",
        "🍎",
        "🍅",
        "🍅",
        "🍎",
        "🍎",
        "🍒",
        "🍒"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle blauwe",
      "doel": "🔵",
      "veld": [
        "🟦",
        "🔵",
        "🟣",
        "🔷",
        "🟦",
        "🟦",
        "🟣",
        "🔵",
        "🔵",
        "🔷",
        "🔷",
        "🔷",
        "🟦",
        "🔷",
        "🔵",
        "🔵",
        "🔷",
        "🟣",
        "🔷"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle paarden",
      "doel": "🐴",
      "veld": [
        "🐄",
        "🐖",
        "🐖",
        "🐖",
        "🐴",
        "🐄",
        "🐖",
        "🐖",
        "🐖",
        "🦌",
        "🐴",
        "🐴",
        "🐄",
        "🐄",
        "🐴",
        "🐖",
        "🦌",
        "🐖",
        "🐖",
        "🐖"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle bijen",
      "doel": "🐝",
      "veld": [
        "🐝",
        "🦋",
        "🐞",
        "🐞",
        "🦋",
        "🐞",
        "🪰",
        "🦋",
        "🐝",
        "🐞",
        "🐞",
        "🦋",
        "🐞",
        "🐞",
        "🐝",
        "🐝"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle zessen",
      "doel": "6",
      "veld": [
        "9",
        "8",
        "6",
        "0",
        "0",
        "8",
        "8",
        "0",
        "0",
        "6",
        "6",
        "9",
        "8",
        "8",
        "9",
        "6",
        "0"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle driehoeken omhoog",
      "doel": "🔺",
      "veld": [
        "🟥",
        "🔻",
        "🔸",
        "🔺",
        "🔻",
        "🟥",
        "🔺",
        "🔸",
        "🟥",
        "🔸",
        "🟥",
        "🔺",
        "🔸",
        "🔻",
        "🔺",
        "🔸",
        "🔸",
        "🔸",
        "🔻"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle letters b",
      "doel": "b",
      "veld": [
        "p",
        "p",
        "p",
        "q",
        "b",
        "d",
        "p",
        "b",
        "p",
        "p",
        "d",
        "b",
        "d",
        "p",
        "b",
        "b",
        "d"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle gouden sterren",
      "doel": "🌟",
      "veld": [
        "✨",
        "🌟",
        "✨",
        "💫",
        "💫",
        "💫",
        "💫",
        "⭐",
        "✨",
        "🌟",
        "🌟",
        "✨",
        "🌟",
        "⭐",
        "⭐",
        "⭐"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle negens",
      "doel": "9",
      "veld": [
        "8",
        "8",
        "9",
        "8",
        "4",
        "9",
        "4",
        "8",
        "6",
        "6",
        "6",
        "8",
        "4",
        "9",
        "8",
        "4",
        "9",
        "8"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle appels",
      "doel": "🍎",
      "veld": [
        "🍎",
        "🍎",
        "🍅",
        "🍎",
        "🍅",
        "🍒",
        "🍅",
        "🍒",
        "🍎",
        "🍒",
        "🍎",
        "🍅",
        "🍒",
        "🍅",
        "🍒",
        "🍅",
        "🍒",
        "🍅"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle blauwe",
      "doel": "🔵",
      "veld": [
        "🔵",
        "🔷",
        "🔵",
        "🔵",
        "🔷",
        "🔵",
        "🟦",
        "🔵",
        "🟣",
        "🔷",
        "🟦",
        "🔷",
        "🟣",
        "🟦",
        "🟦",
        "🔷"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle paarden",
      "doel": "🐴",
      "veld": [
        "🦌",
        "🦌",
        "🐖",
        "🦌",
        "🐄",
        "🦌",
        "🐖",
        "🐴",
        "🐴",
        "🦌",
        "🦌",
        "🦌",
        "🐴",
        "🦌",
        "🦌",
        "🐄",
        "🐴",
        "🐴"
      ],
      "niveau": 4
    },
    {
      "opdracht": "Tik alle bijen",
      "doel": "🐝",
      "veld": [
        "🐞",
        "🐞",
        "🐝",
        "🐞",
        "🐞",
        "🐞",
        "🪰",
        "🐞",
        "🐝",
        "🐞",
        "🐝",
        "🦋",
        "🐞",
        "🐞",
        "🐝",
        "🦋",
        "🐞"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle zessen",
      "doel": "6",
      "veld": [
        "8",
        "8",
        "6",
        "8",
        "6",
        "0",
        "0",
        "8",
        "6",
        "0",
        "9",
        "8",
        "8",
        "0",
        "8",
        "8",
        "6",
        "9",
        "8",
        "6"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle driehoeken omhoog",
      "doel": "🔺",
      "veld": [
        "🟥",
        "🔺",
        "🔸",
        "🔻",
        "🔺",
        "🔺",
        "🔸",
        "🟥",
        "🔻",
        "🔺",
        "🔻",
        "🔻",
        "🔻",
        "🔻",
        "🔸",
        "🔺",
        "🟥",
        "🔻"
      ],
      "niveau": 5
    },
    {
      "opdracht": "Tik alle letters b",
      "doel": "b",
      "veld": [
        "q",
        "b",
        "d",
        "d",
        "b",
        "q",
        "q",
        "d",
        "p",
        "p",
        "d",
        "d",
        "d",
        "d",
        "q",
        "b",
        "p",
        "b",
        "q"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle gouden sterren",
      "doel": "🌟",
      "veld": [
        "✨",
        "✨",
        "✨",
        "💫",
        "💫",
        "💫",
        "🌟",
        "✨",
        "💫",
        "💫",
        "🌟",
        "💫",
        "🌟",
        "✨",
        "⭐",
        "🌟"
      ],
      "niveau": 6
    },
    {
      "opdracht": "Tik alle negens",
      "doel": "9",
      "veld": [
        "8",
        "6",
        "6",
        "8",
        "8",
        "8",
        "9",
        "8",
        "4",
        "9",
        "8",
        "4",
        "4",
        "9",
        "4",
        "6",
        "4",
        "9"
      ],
      "niveau": 6
    }
  ]
};
if (typeof module !== 'undefined') module.exports = BEELDLAB;
