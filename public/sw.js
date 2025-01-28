// This is the service worker with the Cache-first network
const CACHE = "pwabuilder-precache";

// Add list of files to cache here.
const precacheFiles = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener("install", function (event) {
  console.log("[PWA Builder] Install Event processing");

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      console.log("[PWA Builder] Cached offline page during install");
      return cache.addAll(precacheFiles);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch(function (error) {
        console.log('Fetch failed:', error);
      })
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
}); 