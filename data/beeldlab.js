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
      "opdracht": "Zet op volgorde: klein naar groot",
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
    }
  ]
};
if (typeof module !== 'undefined') module.exports = BEELDLAB;
