// Offline support for the app's own files. Network first so updates arrive; cache when offline.
const CACHE = "frogpond-v4";
const FILES = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  const own = u.origin === location.origin, font = u.hostname.endsWith("fonts.googleapis.com") || u.hostname.endsWith("fonts.gstatic.com");
  if (e.request.method !== "GET" || !(own || font)) return; // Firebase, Gemini etc. go straight to the network
  e.respondWith(fetch(e.request).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); } return r; })
    .catch(() => caches.match(e.request).then(m => m || (e.request.mode === "navigate" ? caches.match("index.html") : Response.error()))));
});
