/* Blokwereld service worker — cache-first, offline na eerste (https) bezoek.
   CACHE_VERSIE loopt mee met APP_VERSIE zodat een nieuwe versie de oude cache vervangt. */
var CACHE_VERSIE = "archito-3.32.0";
var BESTANDEN = [
  "./", "./index.html", "./manifest.json",
  "./data/sommen.js", "./data/woorden.js", "./data/flitswoorden.js",
  "./data/memory.js", "./data/talen.js", "./data/denken.js", "./data/beelddenken.js",
  "./data/beeldlab.js", "./data/mascottes.js", "./data/wezens.js",
  "./data/missies.js", "./data/stickers.js", "./data/lezen.js", "./data/oudertips.js", "./data/creatief.js",
  "./icons/icon-192.png", "./icons/icon-512.png"
];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE_VERSIE).then(function(c){ return c.addAll(BESTANDEN); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k!==CACHE_VERSIE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
// Zet de nieuwe versie meteen actief als de pagina daarom vraagt.
self.addEventListener("message", function(e){ if(e.data==="SKIP_WACHTEN") self.skipWaiting(); });

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method!=="GET") return;
  // alleen eigen bestanden afhandelen; cross-origin (bv. Google Fonts) ongemoeid laten
  try{ if(new URL(req.url).origin !== self.location.origin) return; }catch(err){ return; }

  // De pagina zelf (navigaties + index.html): NETWERK-EERST, zodat een reload altijd
  // de nieuwste app krijgt. Offline valt het netjes terug op de cache.
  var isPagina = req.mode==="navigate" || (req.headers.get("accept")||"").indexOf("text/html")>=0;
  if(isPagina){
    e.respondWith(
      fetch(req).then(function(res){
        var kopie=res.clone(); caches.open(CACHE_VERSIE).then(function(c){ try{ c.put(req, kopie); }catch(err){} });
        return res;
      }).catch(function(){ return caches.match(req).then(function(h){ return h || caches.match("./index.html"); }); })
    );
    return;
  }

  // Overige eigen bestanden (data/, icons/, manifest): CACHE-EERST met achtergrond-update.
  e.respondWith(
    caches.match(req).then(function(hit){
      return hit || fetch(req).then(function(res){
        var kopie=res.clone(); caches.open(CACHE_VERSIE).then(function(c){ try{ c.put(req, kopie); }catch(err){} });
        return res;
      }).catch(function(){ return caches.match("./index.html"); });
    })
  );
});
