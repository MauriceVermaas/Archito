// data/config.js — alle instelbare "knoppen" op één plek, buiten de spellogica.
// Wijzig hier zonder in index.html te hoeven zoeken. Wordt (net als de andere
// databestanden) vóór het hoofdscript geladen; de app leest deze waarden uit CONFIG.
var CONFIG = {
  // --- Publicatie / freemium ---
  testmodus: true,                     // true = tijdens de testronde is alles gratis en ontgrendeld
  feedbackEmail: "mvermaas@nsecure.nl", // ontvanger van de feedback-knop

  // --- Beloningslus / bouwmodus ---
  drempelBouwen: 10,                   // zoveel moet een kind eerst verdienen voordat de bouwmodus opengaat
  oogstOpbrengst: 1,                   // diamanten per geoogst gewas
  oogstMaxPerDag: 10,                  // max. diamanten per dag uit oogsten (leren blijft de hoofdbron)
  hakMaxPerDag: 10,                    // max. diamanten per dag terugverdienen met weghakken
  gewasKans: 0.06,                     // groeikans per beweegtik per akker
  wezenPrijs: 3                        // kosten van een bij te kopen maatje
};
if (typeof module !== "undefined") module.exports = CONFIG;
