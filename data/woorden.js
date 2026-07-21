// data/woorden.js — spellingwoorden voor de Smederij.
// Voor ouders: elk woord is { w, delen:[...], extra:[...], niveau }.
// 'delen' samengevoegd vormt exact het woord (klankgroepen als één blok: ei/ij/au/ou/sch/ng/nk/cht/aai/ooi/oei).
// 'extra' zijn instinkerblokken die NOOIT in het woord voorkomen. Niveau 1 = klankzuiver, met spiegelletter-instinkers (b/d/p).

var WOORDEN = [
  {
    "w": "bak",
    "delen": [
      "b",
      "a",
      "k"
    ],
    "extra": [
      "d"
    ],
    "niveau": 1
  },
  {
    "w": "dak",
    "delen": [
      "d",
      "a",
      "k"
    ],
    "extra": [
      "b"
    ],
    "niveau": 1
  },
  {
    "w": "pad",
    "delen": [
      "p",
      "a",
      "d"
    ],
    "extra": [
      "b"
    ],
    "niveau": 1
  },
  {
    "w": "bos",
    "delen": [
      "b",
      "o",
      "s"
    ],
    "extra": [
      "d"
    ],
    "niveau": 1
  },
  {
    "w": "pot",
    "delen": [
      "p",
      "o",
      "t"
    ],
    "extra": [
      "b"
    ],
    "niveau": 1
  },
  {
    "w": "bus",
    "delen": [
      "b",
      "u",
      "s"
    ],
    "extra": [
      "d"
    ],
    "niveau": 1
  },
  {
    "w": "dop",
    "delen": [
      "d",
      "o",
      "p"
    ],
    "extra": [
      "b"
    ],
    "niveau": 1
  },
  {
    "w": "bal",
    "delen": [
      "b",
      "a",
      "l"
    ],
    "extra": [
      "d"
    ],
    "niveau": 1
  },
  {
    "w": "das",
    "delen": [
      "d",
      "a",
      "s"
    ],
    "extra": [
      "b"
    ],
    "niveau": 1
  },
  {
    "w": "pen",
    "delen": [
      "p",
      "e",
      "n"
    ],
    "extra": [
      "b"
    ],
    "niveau": 1
  },
  {
    "w": "pil",
    "delen": [
      "p",
      "i",
      "l"
    ],
    "extra": [
      "b"
    ],
    "niveau": 1
  },
  {
    "w": "kip",
    "delen": [
      "k",
      "i",
      "p"
    ],
    "extra": [
      "b"
    ],
    "niveau": 1
  },
  {
    "w": "vis",
    "delen": [
      "v",
      "i",
      "s"
    ],
    "extra": [
      "b"
    ],
    "niveau": 1
  },
  {
    "w": "bed",
    "delen": [
      "b",
      "e",
      "d"
    ],
    "extra": [
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "bon",
    "delen": [
      "b",
      "o",
      "n"
    ],
    "extra": [
      "d"
    ],
    "niveau": 1
  },
  {
    "w": "map",
    "delen": [
      "m",
      "a",
      "p"
    ],
    "extra": [
      "b"
    ],
    "niveau": 1
  },
  {
    "w": "tak",
    "delen": [
      "t",
      "a",
      "k"
    ],
    "extra": [
      "d"
    ],
    "niveau": 1
  },
  {
    "w": "sok",
    "delen": [
      "s",
      "o",
      "k"
    ],
    "extra": [
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "kam",
    "delen": [
      "k",
      "a",
      "m"
    ],
    "extra": [
      "b"
    ],
    "niveau": 1
  },
  {
    "w": "jas",
    "delen": [
      "j",
      "a",
      "s"
    ],
    "extra": [
      "d"
    ],
    "niveau": 1
  },
  {
    "w": "lip",
    "delen": [
      "l",
      "i",
      "p"
    ],
    "extra": [
      "b"
    ],
    "niveau": 1
  },
  {
    "w": "rok",
    "delen": [
      "r",
      "o",
      "k"
    ],
    "extra": [
      "d"
    ],
    "niveau": 1
  },
  {
    "w": "gum",
    "delen": [
      "g",
      "u",
      "m"
    ],
    "extra": [
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "net",
    "delen": [
      "n",
      "e",
      "t"
    ],
    "extra": [
      "d"
    ],
    "niveau": 1
  },
  {
    "w": "trein",
    "delen": [
      "t",
      "r",
      "ei",
      "n"
    ],
    "extra": [
      "ij"
    ],
    "niveau": 2
  },
  {
    "w": "reis",
    "delen": [
      "r",
      "ei",
      "s"
    ],
    "extra": [
      "ij"
    ],
    "niveau": 2
  },
  {
    "w": "fijn",
    "delen": [
      "f",
      "ij",
      "n"
    ],
    "extra": [
      "ei"
    ],
    "niveau": 2
  },
  {
    "w": "huis",
    "delen": [
      "h",
      "ui",
      "s"
    ],
    "extra": [
      "ei"
    ],
    "niveau": 2
  },
  {
    "w": "koud",
    "delen": [
      "k",
      "ou",
      "d"
    ],
    "extra": [
      "au"
    ],
    "niveau": 2
  },
  {
    "w": "pauw",
    "delen": [
      "p",
      "au",
      "w"
    ],
    "extra": [
      "ou"
    ],
    "niveau": 2
  },
  {
    "w": "boom",
    "delen": [
      "b",
      "oo",
      "m"
    ],
    "extra": [
      "aa"
    ],
    "niveau": 2
  },
  {
    "w": "maan",
    "delen": [
      "m",
      "aa",
      "n"
    ],
    "extra": [
      "oo"
    ],
    "niveau": 2
  },
  {
    "w": "boek",
    "delen": [
      "b",
      "oe",
      "k"
    ],
    "extra": [
      "ie"
    ],
    "niveau": 2
  },
  {
    "w": "vuur",
    "delen": [
      "v",
      "uu",
      "r"
    ],
    "extra": [
      "oo"
    ],
    "niveau": 2
  },
  {
    "w": "deur",
    "delen": [
      "d",
      "eu",
      "r"
    ],
    "extra": [
      "ui"
    ],
    "niveau": 2
  },
  {
    "w": "neus",
    "delen": [
      "n",
      "eu",
      "s"
    ],
    "extra": [
      "ui"
    ],
    "niveau": 2
  },
  {
    "w": "ring",
    "delen": [
      "r",
      "i",
      "ng"
    ],
    "extra": [
      "nk"
    ],
    "niveau": 2
  },
  {
    "w": "bank",
    "delen": [
      "b",
      "a",
      "nk"
    ],
    "extra": [
      "ng"
    ],
    "niveau": 2
  },
  {
    "w": "long",
    "delen": [
      "l",
      "o",
      "ng"
    ],
    "extra": [
      "nk"
    ],
    "niveau": 2
  },
  {
    "w": "tuin",
    "delen": [
      "t",
      "ui",
      "n"
    ],
    "extra": [
      "ei"
    ],
    "niveau": 2
  },
  {
    "w": "zeil",
    "delen": [
      "z",
      "ei",
      "l"
    ],
    "extra": [
      "ij"
    ],
    "niveau": 2
  },
  {
    "w": "muis",
    "delen": [
      "m",
      "ui",
      "s"
    ],
    "extra": [
      "au"
    ],
    "niveau": 2
  },
  {
    "w": "goud",
    "delen": [
      "g",
      "ou",
      "d"
    ],
    "extra": [
      "au"
    ],
    "niveau": 2
  },
  {
    "w": "vijf",
    "delen": [
      "v",
      "ij",
      "f"
    ],
    "extra": [
      "ei"
    ],
    "niveau": 2
  },
  {
    "w": "bijl",
    "delen": [
      "b",
      "ij",
      "l"
    ],
    "extra": [
      "ei"
    ],
    "niveau": 2
  },
  {
    "w": "kous",
    "delen": [
      "k",
      "ou",
      "s"
    ],
    "extra": [
      "au"
    ],
    "niveau": 2
  },
  {
    "w": "duif",
    "delen": [
      "d",
      "ui",
      "f"
    ],
    "extra": [
      "ei"
    ],
    "niveau": 2
  },
  {
    "w": "school",
    "delen": [
      "sch",
      "oo",
      "l"
    ],
    "extra": [
      "cht"
    ],
    "niveau": 3
  },
  {
    "w": "schip",
    "delen": [
      "sch",
      "i",
      "p"
    ],
    "extra": [
      "cht"
    ],
    "niveau": 3
  },
  {
    "w": "nacht",
    "delen": [
      "n",
      "a",
      "cht"
    ],
    "extra": [
      "sch"
    ],
    "niveau": 3
  },
  {
    "w": "licht",
    "delen": [
      "l",
      "i",
      "cht"
    ],
    "extra": [
      "sch"
    ],
    "niveau": 3
  },
  {
    "w": "vecht",
    "delen": [
      "v",
      "e",
      "cht"
    ],
    "extra": [
      "sch"
    ],
    "niveau": 3
  },
  {
    "w": "haai",
    "delen": [
      "h",
      "aai"
    ],
    "extra": [
      "ooi"
    ],
    "niveau": 3
  },
  {
    "w": "mooi",
    "delen": [
      "m",
      "ooi"
    ],
    "extra": [
      "aai"
    ],
    "niveau": 3
  },
  {
    "w": "kooi",
    "delen": [
      "k",
      "ooi"
    ],
    "extra": [
      "aai"
    ],
    "niveau": 3
  },
  {
    "w": "roei",
    "delen": [
      "r",
      "oei"
    ],
    "extra": [
      "aai"
    ],
    "niveau": 3
  },
  {
    "w": "groei",
    "delen": [
      "g",
      "r",
      "oei"
    ],
    "extra": [
      "aai"
    ],
    "niveau": 3
  },
  {
    "w": "draai",
    "delen": [
      "d",
      "r",
      "aai"
    ],
    "extra": [
      "ooi"
    ],
    "niveau": 3
  },
  {
    "w": "schaap",
    "delen": [
      "sch",
      "aa",
      "p"
    ],
    "extra": [
      "cht"
    ],
    "niveau": 3
  },
  {
    "w": "schoen",
    "delen": [
      "sch",
      "oe",
      "n"
    ],
    "extra": [
      "cht"
    ],
    "niveau": 3
  },
  {
    "w": "vracht",
    "delen": [
      "v",
      "r",
      "a",
      "cht"
    ],
    "extra": [
      "sch"
    ],
    "niveau": 3
  },
  {
    "w": "gracht",
    "delen": [
      "g",
      "r",
      "a",
      "cht"
    ],
    "extra": [
      "sch"
    ],
    "niveau": 3
  },
  {
    "w": "bocht",
    "delen": [
      "b",
      "o",
      "cht"
    ],
    "extra": [
      "sch"
    ],
    "niveau": 3
  },
  {
    "w": "zucht",
    "delen": [
      "z",
      "u",
      "cht"
    ],
    "extra": [
      "sch"
    ],
    "niveau": 3
  },
  {
    "w": "vlooi",
    "delen": [
      "v",
      "l",
      "ooi"
    ],
    "extra": [
      "aai"
    ],
    "niveau": 3
  },
  {
    "w": "kraai",
    "delen": [
      "k",
      "r",
      "aai"
    ],
    "extra": [
      "ooi"
    ],
    "niveau": 3
  },
  {
    "w": "kat",
    "delen": [
      "kat"
    ],
    "extra": [
      "g",
      "l"
    ],
    "niveau": 1
  },
  {
    "w": "hond",
    "delen": [
      "hond"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "koe",
    "delen": [
      "koe"
    ],
    "extra": [
      "g",
      "l"
    ],
    "niveau": 1
  },
  {
    "w": "paard",
    "delen": [
      "paard"
    ],
    "extra": [
      "k",
      "n"
    ],
    "niveau": 1
  },
  {
    "w": "varken",
    "delen": [
      "va",
      "rken"
    ],
    "extra": [
      "l",
      "s"
    ],
    "niveau": 1
  },
  {
    "w": "eend",
    "delen": [
      "eend"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 1
  },
  {
    "w": "konijn",
    "delen": [
      "ko",
      "nijn"
    ],
    "extra": [
      "m",
      "s"
    ],
    "niveau": 1
  },
  {
    "w": "beer",
    "delen": [
      "beer"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 2
  },
  {
    "w": "leeuw",
    "delen": [
      "leeuw"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "tijger",
    "delen": [
      "ti",
      "jger"
    ],
    "extra": [
      "m",
      "s"
    ],
    "niveau": 2
  },
  {
    "w": "olifant",
    "delen": [
      "o",
      "li",
      "fant"
    ],
    "extra": [
      "p",
      "v"
    ],
    "niveau": 2
  },
  {
    "w": "aap",
    "delen": [
      "aap"
    ],
    "extra": [
      "g",
      "k"
    ],
    "niveau": 2
  },
  {
    "w": "giraf",
    "delen": [
      "gi",
      "raf"
    ],
    "extra": [
      "l",
      "p"
    ],
    "niveau": 3
  },
  {
    "w": "zebra",
    "delen": [
      "ze",
      "bra"
    ],
    "extra": [
      "k",
      "n"
    ],
    "niveau": 3
  },
  {
    "w": "slang",
    "delen": [
      "slang"
    ],
    "extra": [
      "k",
      "r"
    ],
    "niveau": 2
  },
  {
    "w": "kikker",
    "delen": [
      "ki",
      "kker"
    ],
    "extra": [
      "l",
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "schildpad",
    "delen": [
      "schi",
      "ldpad"
    ],
    "extra": [
      "v",
      "b"
    ],
    "niveau": 2
  },
  {
    "w": "vlinder",
    "delen": [
      "vli",
      "nder"
    ],
    "extra": [
      "p",
      "w"
    ],
    "niveau": 2
  },
  {
    "w": "bij",
    "delen": [
      "bij"
    ],
    "extra": [
      "h",
      "m"
    ],
    "niveau": 2
  },
  {
    "w": "mier",
    "delen": [
      "mier"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 2
  },
  {
    "w": "vogel",
    "delen": [
      "vo",
      "gel"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "uil",
    "delen": [
      "uil"
    ],
    "extra": [
      "g",
      "k"
    ],
    "niveau": 2
  },
  {
    "w": "pinguin",
    "delen": [
      "pi",
      "nguin"
    ],
    "extra": [
      "m",
      "t"
    ],
    "niveau": 2
  },
  {
    "w": "dolfijn",
    "delen": [
      "do",
      "lfijn"
    ],
    "extra": [
      "s",
      "w"
    ],
    "niveau": 2
  },
  {
    "w": "walvis",
    "delen": [
      "wa",
      "lvis"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 3
  },
  {
    "w": "krab",
    "delen": [
      "krab"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "octopus",
    "delen": [
      "o",
      "cto",
      "pus"
    ],
    "extra": [
      "l",
      "r"
    ],
    "niveau": 3
  },
  {
    "w": "vos",
    "delen": [
      "vos"
    ],
    "extra": [
      "g",
      "k"
    ],
    "niveau": 2
  },
  {
    "w": "wolf",
    "delen": [
      "wolf"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "hert",
    "delen": [
      "hert"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 3
  },
  {
    "w": "slak",
    "delen": [
      "slak"
    ],
    "extra": [
      "h",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "kameel",
    "delen": [
      "ka",
      "meel"
    ],
    "extra": [
      "n",
      "s"
    ],
    "niveau": 3
  },
  {
    "w": "poes",
    "delen": [
      "poes"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 1
  },
  {
    "w": "hamster",
    "delen": [
      "ha",
      "mster"
    ],
    "extra": [
      "n",
      "w"
    ],
    "niveau": 2
  },
  {
    "w": "kalkoen",
    "delen": [
      "ka",
      "lkoen"
    ],
    "extra": [
      "p",
      "t"
    ],
    "niveau": 3
  },
  {
    "w": "appel",
    "delen": [
      "a",
      "ppel"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 1
  },
  {
    "w": "banaan",
    "delen": [
      "ba",
      "naan"
    ],
    "extra": [
      "l",
      "r"
    ],
    "niveau": 1
  },
  {
    "w": "druiven",
    "delen": [
      "drui",
      "ven"
    ],
    "extra": [
      "m",
      "t"
    ],
    "niveau": 1
  },
  {
    "w": "sinaasappel",
    "delen": [
      "si",
      "naa",
      "sa",
      "ppel"
    ],
    "extra": [
      "w",
      "d"
    ],
    "niveau": 2
  },
  {
    "w": "aardbei",
    "delen": [
      "aa",
      "rdbei"
    ],
    "extra": [
      "n",
      "t"
    ],
    "niveau": 2
  },
  {
    "w": "citroen",
    "delen": [
      "ci",
      "troen"
    ],
    "extra": [
      "l",
      "s"
    ],
    "niveau": 2
  },
  {
    "w": "kers",
    "delen": [
      "kers"
    ],
    "extra": [
      "h",
      "m"
    ],
    "niveau": 2
  },
  {
    "w": "peer",
    "delen": [
      "peer"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 2
  },
  {
    "w": "meloen",
    "delen": [
      "me",
      "loen"
    ],
    "extra": [
      "k",
      "s"
    ],
    "niveau": 3
  },
  {
    "w": "ananas",
    "delen": [
      "a",
      "na",
      "nas"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 3
  },
  {
    "w": "perzik",
    "delen": [
      "pe",
      "rzik"
    ],
    "extra": [
      "l",
      "s"
    ],
    "niveau": 3
  },
  {
    "w": "brood",
    "delen": [
      "brood"
    ],
    "extra": [
      "l",
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "kaas",
    "delen": [
      "kaas"
    ],
    "extra": [
      "h",
      "m"
    ],
    "niveau": 1
  },
  {
    "w": "melk",
    "delen": [
      "melk"
    ],
    "extra": [
      "h",
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "taart",
    "delen": [
      "taart"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 2
  },
  {
    "w": "koekje",
    "delen": [
      "koe",
      "kje"
    ],
    "extra": [
      "m",
      "r"
    ],
    "niveau": 2
  },
  {
    "w": "ijs",
    "delen": [
      "ijs"
    ],
    "extra": [
      "g",
      "l"
    ],
    "niveau": 1
  },
  {
    "w": "snoep",
    "delen": [
      "snoep"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 2
  },
  {
    "w": "chocola",
    "delen": [
      "cho",
      "co",
      "la"
    ],
    "extra": [
      "n",
      "s"
    ],
    "niveau": 2
  },
  {
    "w": "pizza",
    "delen": [
      "pi",
      "zza"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 1
  },
  {
    "w": "wortel",
    "delen": [
      "wo",
      "rtel"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "tomaat",
    "delen": [
      "to",
      "maat"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "mais",
    "delen": [
      "mais"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 2
  },
  {
    "w": "champignon",
    "delen": [
      "cha",
      "mpi",
      "gnon"
    ],
    "extra": [
      "w",
      "d"
    ],
    "niveau": 2
  },
  {
    "w": "broccoli",
    "delen": [
      "bro",
      "cco",
      "li"
    ],
    "extra": [
      "p",
      "v"
    ],
    "niveau": 3
  },
  {
    "w": "aardappel",
    "delen": [
      "aa",
      "rda",
      "ppel"
    ],
    "extra": [
      "t",
      "z"
    ],
    "niveau": 2
  },
  {
    "w": "druif",
    "delen": [
      "druif"
    ],
    "extra": [
      "l",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "hamburger",
    "delen": [
      "ha",
      "mbu",
      "rger"
    ],
    "extra": [
      "v",
      "d"
    ],
    "niveau": 2
  },
  {
    "w": "frietjes",
    "delen": [
      "frie",
      "tjes"
    ],
    "extra": [
      "p",
      "z"
    ],
    "niveau": 2
  },
  {
    "w": "appelsap",
    "delen": [
      "a",
      "ppe",
      "lsap"
    ],
    "extra": [
      "n",
      "v"
    ],
    "niveau": 2
  },
  {
    "w": "honing",
    "delen": [
      "ho",
      "ning"
    ],
    "extra": [
      "m",
      "s"
    ],
    "niveau": 3
  },
  {
    "w": "zon",
    "delen": [
      "zon"
    ],
    "extra": [
      "g",
      "k"
    ],
    "niveau": 1
  },
  {
    "w": "ster",
    "delen": [
      "ster"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 1
  },
  {
    "w": "wolk",
    "delen": [
      "wolk"
    ],
    "extra": [
      "h",
      "n"
    ],
    "niveau": 1
  },
  {
    "w": "regen",
    "delen": [
      "re",
      "gen"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "sneeuw",
    "delen": [
      "sneeuw"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "bloem",
    "delen": [
      "bloem"
    ],
    "extra": [
      "k",
      "r"
    ],
    "niveau": 1
  },
  {
    "w": "blad",
    "delen": [
      "blad"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "gras",
    "delen": [
      "gras"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 2
  },
  {
    "w": "berg",
    "delen": [
      "berg"
    ],
    "extra": [
      "k",
      "n"
    ],
    "niveau": 3
  },
  {
    "w": "water",
    "delen": [
      "wa",
      "ter"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 1
  },
  {
    "w": "regenboog",
    "delen": [
      "re",
      "ge",
      "nboog"
    ],
    "extra": [
      "t",
      "z"
    ],
    "niveau": 2
  },
  {
    "w": "cactus",
    "delen": [
      "ca",
      "ctus"
    ],
    "extra": [
      "k",
      "n"
    ],
    "niveau": 3
  },
  {
    "w": "palmboom",
    "delen": [
      "pa",
      "lmboom"
    ],
    "extra": [
      "s",
      "w"
    ],
    "niveau": 3
  },
  {
    "w": "bliksem",
    "delen": [
      "bli",
      "ksem"
    ],
    "extra": [
      "r",
      "w"
    ],
    "niveau": 3
  },
  {
    "w": "druppel",
    "delen": [
      "dru",
      "ppel"
    ],
    "extra": [
      "n",
      "v"
    ],
    "niveau": 2
  },
  {
    "w": "schelp",
    "delen": [
      "schelp"
    ],
    "extra": [
      "m",
      "t"
    ],
    "niveau": 3
  },
  {
    "w": "vulkaan",
    "delen": [
      "vu",
      "lkaan"
    ],
    "extra": [
      "p",
      "t"
    ],
    "niveau": 3
  },
  {
    "w": "raam",
    "delen": [
      "raam"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 2
  },
  {
    "w": "stoel",
    "delen": [
      "stoel"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "lamp",
    "delen": [
      "lamp"
    ],
    "extra": [
      "h",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "klok",
    "delen": [
      "klok"
    ],
    "extra": [
      "h",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "sleutel",
    "delen": [
      "sleu",
      "tel"
    ],
    "extra": [
      "m",
      "r"
    ],
    "niveau": 2
  },
  {
    "w": "schaar",
    "delen": [
      "schaar"
    ],
    "extra": [
      "l",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "tas",
    "delen": [
      "tas"
    ],
    "extra": [
      "g",
      "k"
    ],
    "niveau": 2
  },
  {
    "w": "ballon",
    "delen": [
      "ba",
      "llon"
    ],
    "extra": [
      "m",
      "s"
    ],
    "niveau": 1
  },
  {
    "w": "cadeau",
    "delen": [
      "ca",
      "deau"
    ],
    "extra": [
      "l",
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "paraplu",
    "delen": [
      "pa",
      "ra",
      "plu"
    ],
    "extra": [
      "m",
      "t"
    ],
    "niveau": 2
  },
  {
    "w": "bril",
    "delen": [
      "bril"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "hoed",
    "delen": [
      "hoed"
    ],
    "extra": [
      "k",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "shirt",
    "delen": [
      "shirt"
    ],
    "extra": [
      "k",
      "n"
    ],
    "niveau": 1
  },
  {
    "w": "broek",
    "delen": [
      "broek"
    ],
    "extra": [
      "l",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "telefoon",
    "delen": [
      "te",
      "le",
      "foon"
    ],
    "extra": [
      "r",
      "w"
    ],
    "niveau": 2
  },
  {
    "w": "camera",
    "delen": [
      "ca",
      "me",
      "ra"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "potlood",
    "delen": [
      "po",
      "tlood"
    ],
    "extra": [
      "n",
      "v"
    ],
    "niveau": 1
  },
  {
    "w": "kroon",
    "delen": [
      "kroon"
    ],
    "extra": [
      "j",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "auto",
    "delen": [
      "au",
      "to"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 1
  },
  {
    "w": "fiets",
    "delen": [
      "fiets"
    ],
    "extra": [
      "k",
      "n"
    ],
    "niveau": 1
  },
  {
    "w": "boot",
    "delen": [
      "boot"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 2
  },
  {
    "w": "vliegtuig",
    "delen": [
      "vlie",
      "gtuig"
    ],
    "extra": [
      "r",
      "z"
    ],
    "niveau": 2
  },
  {
    "w": "raket",
    "delen": [
      "ra",
      "ket"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "tractor",
    "delen": [
      "tra",
      "ctor"
    ],
    "extra": [
      "l",
      "p"
    ],
    "niveau": 3
  },
  {
    "w": "brandweer",
    "delen": [
      "bra",
      "ndweer"
    ],
    "extra": [
      "t",
      "f"
    ],
    "niveau": 3
  },
  {
    "w": "politie",
    "delen": [
      "po",
      "li",
      "tie"
    ],
    "extra": [
      "m",
      "s"
    ],
    "niveau": 3
  },
  {
    "w": "helikopter",
    "delen": [
      "he",
      "li",
      "ko",
      "pter"
    ],
    "extra": [
      "z",
      "f"
    ],
    "niveau": 3
  },
  {
    "w": "motor",
    "delen": [
      "mo",
      "tor"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 3
  },
  {
    "w": "hand",
    "delen": [
      "hand"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "voet",
    "delen": [
      "voet"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 2
  },
  {
    "w": "oog",
    "delen": [
      "oog"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 1
  },
  {
    "w": "oor",
    "delen": [
      "oor"
    ],
    "extra": [
      "g",
      "k"
    ],
    "niveau": 2
  },
  {
    "w": "mond",
    "delen": [
      "mond"
    ],
    "extra": [
      "j",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "tand",
    "delen": [
      "tand"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 2
  },
  {
    "w": "hart",
    "delen": [
      "hart"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 1
  },
  {
    "w": "baby",
    "delen": [
      "ba",
      "by"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 1
  },
  {
    "w": "jongen",
    "delen": [
      "jo",
      "ngen"
    ],
    "extra": [
      "m",
      "s"
    ],
    "niveau": 1
  },
  {
    "w": "meisje",
    "delen": [
      "mei",
      "sje"
    ],
    "extra": [
      "l",
      "r"
    ],
    "niveau": 1
  },
  {
    "w": "oma",
    "delen": [
      "o",
      "ma"
    ],
    "extra": [
      "g",
      "k"
    ],
    "niveau": 2
  },
  {
    "w": "opa",
    "delen": [
      "o",
      "pa"
    ],
    "extra": [
      "g",
      "k"
    ],
    "niveau": 2
  },
  {
    "w": "mama",
    "delen": [
      "ma",
      "ma"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 1
  },
  {
    "w": "papa",
    "delen": [
      "pa",
      "pa"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 1
  },
  {
    "w": "rood",
    "delen": [
      "rood"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 1
  },
  {
    "w": "blauw",
    "delen": [
      "blauw"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "geel",
    "delen": [
      "geel"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 1
  },
  {
    "w": "groen",
    "delen": [
      "groen"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "paars",
    "delen": [
      "paars"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 2
  },
  {
    "w": "oranje",
    "delen": [
      "o",
      "ra",
      "nje"
    ],
    "extra": [
      "l",
      "s"
    ],
    "niveau": 2
  },
  {
    "w": "zwart",
    "delen": [
      "zwart"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 2
  },
  {
    "w": "wit",
    "delen": [
      "wit"
    ],
    "extra": [
      "g",
      "k"
    ],
    "niveau": 2
  },
  {
    "w": "voetbal",
    "delen": [
      "voe",
      "tbal"
    ],
    "extra": [
      "n",
      "s"
    ],
    "niveau": 2
  },
  {
    "w": "muziek",
    "delen": [
      "mu",
      "ziek"
    ],
    "extra": [
      "l",
      "r"
    ],
    "niveau": 2
  },
  {
    "w": "gitaar",
    "delen": [
      "gi",
      "taar"
    ],
    "extra": [
      "l",
      "p"
    ],
    "niveau": 3
  },
  {
    "w": "trommel",
    "delen": [
      "tro",
      "mmel"
    ],
    "extra": [
      "n",
      "v"
    ],
    "niveau": 3
  },
  {
    "w": "vlieger",
    "delen": [
      "vlie",
      "ger"
    ],
    "extra": [
      "n",
      "t"
    ],
    "niveau": 3
  },
  {
    "w": "blokje",
    "delen": [
      "blo",
      "kje"
    ],
    "extra": [
      "p",
      "t"
    ],
    "niveau": 1
  },
  {
    "w": "puzzel",
    "delen": [
      "pu",
      "zzel"
    ],
    "extra": [
      "k",
      "r"
    ],
    "niveau": 2
  },
  {
    "w": "robot",
    "delen": [
      "ro",
      "bot"
    ],
    "extra": [
      "k",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "vlag",
    "delen": [
      "vlag"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 1
  },
  {
    "w": "tafel",
    "delen": [
      "ta",
      "fel"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 3
  },
  {
    "w": "trap",
    "delen": [
      "trap"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 2
  },
  {
    "w": "muur",
    "delen": [
      "muur"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 3
  },
  {
    "w": "straat",
    "delen": [
      "straat"
    ],
    "extra": [
      "k",
      "n"
    ],
    "niveau": 1
  },
  {
    "w": "plein",
    "delen": [
      "plein"
    ],
    "extra": [
      "j",
      "r"
    ],
    "niveau": 2
  },
  {
    "w": "schuur",
    "delen": [
      "schuur"
    ],
    "extra": [
      "l",
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "zolder",
    "delen": [
      "zo",
      "lder"
    ],
    "extra": [
      "m",
      "s"
    ],
    "niveau": 2
  },
  {
    "w": "kelder",
    "delen": [
      "ke",
      "lder"
    ],
    "extra": [
      "n",
      "t"
    ],
    "niveau": 3
  },
  {
    "w": "gang",
    "delen": [
      "gang"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 1
  },
  {
    "w": "keuken",
    "delen": [
      "keu",
      "ken"
    ],
    "extra": [
      "l",
      "r"
    ],
    "niveau": 2
  },
  {
    "w": "bad",
    "delen": [
      "bad"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 3
  },
  {
    "w": "douche",
    "delen": [
      "dou",
      "che"
    ],
    "extra": [
      "m",
      "r"
    ],
    "niveau": 1
  },
  {
    "w": "spiegel",
    "delen": [
      "spie",
      "gel"
    ],
    "extra": [
      "n",
      "v"
    ],
    "niveau": 2
  },
  {
    "w": "kast",
    "delen": [
      "kast"
    ],
    "extra": [
      "h",
      "m"
    ],
    "niveau": 3
  },
  {
    "w": "mand",
    "delen": [
      "mand"
    ],
    "extra": [
      "j",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "emmer",
    "delen": [
      "e",
      "mmer"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 3
  },
  {
    "w": "bezem",
    "delen": [
      "be",
      "zem"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "doek",
    "delen": [
      "doek"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "zeep",
    "delen": [
      "zeep"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 3
  },
  {
    "w": "borstel",
    "delen": [
      "bo",
      "rstel"
    ],
    "extra": [
      "n",
      "w"
    ],
    "niveau": 2
  },
  {
    "w": "handdoek",
    "delen": [
      "ha",
      "nddoek"
    ],
    "extra": [
      "s",
      "w"
    ],
    "niveau": 3
  },
  {
    "w": "laars",
    "delen": [
      "laars"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "muts",
    "delen": [
      "muts"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 3
  },
  {
    "w": "want",
    "delen": [
      "want"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 1
  },
  {
    "w": "sjaal",
    "delen": [
      "sjaal"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "knoop",
    "delen": [
      "knoop"
    ],
    "extra": [
      "j",
      "r"
    ],
    "niveau": 3
  },
  {
    "w": "rits",
    "delen": [
      "rits"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 1
  },
  {
    "w": "zak",
    "delen": [
      "zak"
    ],
    "extra": [
      "g",
      "l"
    ],
    "niveau": 2
  },
  {
    "w": "riem",
    "delen": [
      "riem"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 3
  },
  {
    "w": "veter",
    "delen": [
      "ve",
      "ter"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 1
  },
  {
    "w": "hemd",
    "delen": [
      "hemd"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "jurk",
    "delen": [
      "jurk"
    ],
    "extra": [
      "h",
      "n"
    ],
    "niveau": 1
  },
  {
    "w": "trui",
    "delen": [
      "trui"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 2
  },
  {
    "w": "vest",
    "delen": [
      "vest"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 3
  },
  {
    "w": "slof",
    "delen": [
      "slof"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 1
  },
  {
    "w": "pantoffel",
    "delen": [
      "pa",
      "nto",
      "ffel"
    ],
    "extra": [
      "v",
      "b"
    ],
    "niveau": 2
  },
  {
    "w": "juf",
    "delen": [
      "juf"
    ],
    "extra": [
      "h",
      "m"
    ],
    "niveau": 1
  },
  {
    "w": "meester",
    "delen": [
      "mee",
      "ster"
    ],
    "extra": [
      "l",
      "v"
    ],
    "niveau": 2
  },
  {
    "w": "bord",
    "delen": [
      "bord"
    ],
    "extra": [
      "k",
      "n"
    ],
    "niveau": 3
  },
  {
    "w": "krijt",
    "delen": [
      "krijt"
    ],
    "extra": [
      "l",
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "schrift",
    "delen": [
      "schrift"
    ],
    "extra": [
      "n",
      "w"
    ],
    "niveau": 2
  },
  {
    "w": "liniaal",
    "delen": [
      "li",
      "niaal"
    ],
    "extra": [
      "m",
      "s"
    ],
    "niveau": 1
  },
  {
    "w": "rugzak",
    "delen": [
      "ru",
      "gzak"
    ],
    "extra": [
      "m",
      "s"
    ],
    "niveau": 2
  },
  {
    "w": "koffie",
    "delen": [
      "ko",
      "ffie"
    ],
    "extra": [
      "m",
      "r"
    ],
    "niveau": 3
  },
  {
    "w": "thee",
    "delen": [
      "thee"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 1
  },
  {
    "w": "suiker",
    "delen": [
      "sui",
      "ker"
    ],
    "extra": [
      "l",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "zout",
    "delen": [
      "zout"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 3
  },
  {
    "w": "peper",
    "delen": [
      "pe",
      "per"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 1
  },
  {
    "w": "boter",
    "delen": [
      "bo",
      "ter"
    ],
    "extra": [
      "k",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "jam",
    "delen": [
      "jam"
    ],
    "extra": [
      "g",
      "l"
    ],
    "niveau": 3
  },
  {
    "w": "hagelslag",
    "delen": [
      "ha",
      "ge",
      "lslag"
    ],
    "extra": [
      "t",
      "z"
    ],
    "niveau": 1
  },
  {
    "w": "beschuit",
    "delen": [
      "be",
      "schuit"
    ],
    "extra": [
      "p",
      "w"
    ],
    "niveau": 2
  },
  {
    "w": "cracker",
    "delen": [
      "cra",
      "cker"
    ],
    "extra": [
      "m",
      "s"
    ],
    "niveau": 3
  },
  {
    "w": "soep",
    "delen": [
      "soep"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 1
  },
  {
    "w": "saus",
    "delen": [
      "saus"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 2
  },
  {
    "w": "rijst",
    "delen": [
      "rijst"
    ],
    "extra": [
      "k",
      "n"
    ],
    "niveau": 3
  },
  {
    "w": "pasta",
    "delen": [
      "pa",
      "sta"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 1
  },
  {
    "w": "patat",
    "delen": [
      "pa",
      "tat"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 2
  },
  {
    "w": "sla",
    "delen": [
      "sla"
    ],
    "extra": [
      "g",
      "k"
    ],
    "niveau": 3
  },
  {
    "w": "komkommer",
    "delen": [
      "ko",
      "mko",
      "mmer"
    ],
    "extra": [
      "s",
      "w"
    ],
    "niveau": 1
  },
  {
    "w": "paprika",
    "delen": [
      "pa",
      "pri",
      "ka"
    ],
    "extra": [
      "m",
      "t"
    ],
    "niveau": 2
  },
  {
    "w": "knoflook",
    "delen": [
      "kno",
      "flook"
    ],
    "extra": [
      "s",
      "w"
    ],
    "niveau": 1
  },
  {
    "w": "prei",
    "delen": [
      "prei"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 2
  },
  {
    "w": "spinazie",
    "delen": [
      "spi",
      "na",
      "zie"
    ],
    "extra": [
      "m",
      "v"
    ],
    "niveau": 3
  },
  {
    "w": "erwt",
    "delen": [
      "erwt"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 1
  },
  {
    "w": "boon",
    "delen": [
      "boon"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 2
  },
  {
    "w": "linze",
    "delen": [
      "li",
      "nze"
    ],
    "extra": [
      "j",
      "p"
    ],
    "niveau": 3
  },
  {
    "w": "strand",
    "delen": [
      "strand"
    ],
    "extra": [
      "l",
      "v"
    ],
    "niveau": 1
  },
  {
    "w": "zee",
    "delen": [
      "zee"
    ],
    "extra": [
      "g",
      "k"
    ],
    "niveau": 2
  },
  {
    "w": "golf",
    "delen": [
      "golf"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 3
  },
  {
    "w": "zand",
    "delen": [
      "zand"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 1
  },
  {
    "w": "duin",
    "delen": [
      "duin"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 2
  },
  {
    "w": "kwal",
    "delen": [
      "kwal"
    ],
    "extra": [
      "h",
      "n"
    ],
    "niveau": 1
  },
  {
    "w": "garnaal",
    "delen": [
      "ga",
      "rnaal"
    ],
    "extra": [
      "p",
      "v"
    ],
    "niveau": 3
  },
  {
    "w": "vuurtoren",
    "delen": [
      "vuu",
      "rto",
      "ren"
    ],
    "extra": [
      "p",
      "z"
    ],
    "niveau": 1
  },
  {
    "w": "pier",
    "delen": [
      "pier"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 2
  },
  {
    "w": "haven",
    "delen": [
      "ha",
      "ven"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 3
  },
  {
    "w": "anker",
    "delen": [
      "a",
      "nker"
    ],
    "extra": [
      "j",
      "p"
    ],
    "niveau": 1
  },
  {
    "w": "vloot",
    "delen": [
      "vloot"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 3
  },
  {
    "w": "kapitein",
    "delen": [
      "ka",
      "pi",
      "tein"
    ],
    "extra": [
      "r",
      "w"
    ],
    "niveau": 1
  },
  {
    "w": "matroos",
    "delen": [
      "ma",
      "troos"
    ],
    "extra": [
      "l",
      "v"
    ],
    "niveau": 2
  },
  {
    "w": "vlot",
    "delen": [
      "vlot"
    ],
    "extra": [
      "h",
      "m"
    ],
    "niveau": 3
  },
  {
    "w": "roeiboot",
    "delen": [
      "roei",
      "boot"
    ],
    "extra": [
      "n",
      "v"
    ],
    "niveau": 1
  },
  {
    "w": "mast",
    "delen": [
      "mast"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 3
  },
  {
    "w": "kade",
    "delen": [
      "ka",
      "de"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 1
  },
  {
    "w": "sluis",
    "delen": [
      "sluis"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "brug",
    "delen": [
      "brug"
    ],
    "extra": [
      "k",
      "n"
    ],
    "niveau": 3
  },
  {
    "w": "draak",
    "delen": [
      "draak"
    ],
    "extra": [
      "l",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "dinosaurus",
    "delen": [
      "di",
      "no",
      "sau",
      "rus"
    ],
    "extra": [
      "v",
      "b"
    ],
    "niveau": 2
  },
  {
    "w": "eenhoorn",
    "delen": [
      "ee",
      "nhoorn"
    ],
    "extra": [
      "p",
      "v"
    ],
    "niveau": 2
  },
  {
    "w": "spook",
    "delen": [
      "spook"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "worm",
    "delen": [
      "worm"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 2
  },
  {
    "w": "worst",
    "delen": [
      "worst"
    ],
    "extra": [
      "j",
      "m"
    ],
    "niveau": 2
  },
  {
    "w": "popcorn",
    "delen": [
      "po",
      "pcorn"
    ],
    "extra": [
      "l",
      "t"
    ],
    "niveau": 2
  },
  {
    "w": "donut",
    "delen": [
      "do",
      "nut"
    ],
    "extra": [
      "k",
      "p"
    ],
    "niveau": 2
  },
  {
    "w": "kerstboom",
    "delen": [
      "ke",
      "rstboom"
    ],
    "extra": [
      "w",
      "f"
    ],
    "niveau": 2
  },
  {
    "w": "sneeuwpop",
    "delen": [
      "sneeu",
      "wpop"
    ],
    "extra": [
      "r",
      "z"
    ],
    "niveau": 2
  },
  {
    "w": "kaars",
    "delen": [
      "kaars"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 2
  },
  {
    "w": "tent",
    "delen": [
      "tent"
    ],
    "extra": [
      "h",
      "l"
    ],
    "niveau": 2
  },
  {
    "w": "ski",
    "delen": [
      "ski"
    ],
    "extra": [
      "g",
      "l"
    ],
    "niveau": 3
  },
  {
    "w": "kompas",
    "delen": [
      "ko",
      "mpas"
    ],
    "extra": [
      "l",
      "t"
    ],
    "niveau": 3
  },
  {
    "w": "viool",
    "delen": [
      "viool"
    ],
    "extra": [
      "j",
      "n"
    ],
    "niveau": 3
  },
  {
    "w": "trompet",
    "delen": [
      "tro",
      "mpet"
    ],
    "extra": [
      "l",
      "v"
    ],
    "niveau": 3
  },
  {
    "w": "microfoon",
    "delen": [
      "mi",
      "cro",
      "foon"
    ],
    "extra": [
      "t",
      "z"
    ],
    "niveau": 3
  },
  {
    "w": "koptelefoon",
    "delen": [
      "ko",
      "pte",
      "le",
      "foon"
    ],
    "extra": [
      "b",
      "h"
    ],
    "niveau": 3
  },
  {
    "w": "parachute",
    "delen": [
      "pa",
      "ra",
      "chu",
      "te"
    ],
    "extra": [
      "s",
      "z"
    ],
    "niveau": 3
  }
];
if (typeof module !== 'undefined') module.exports = WOORDEN;
