// version.js — DE ENIGE plek voor het versienummer.
// index.html én sw.js lezen hier allebei uit, dus je hoeft nooit meer twee
// plekken gelijk te houden. Gebruik `node release.js <versie>` om dit te zetten.
var APP_VERSIE = "3.76.0";
if (typeof module !== "undefined") module.exports = APP_VERSIE;
