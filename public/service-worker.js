// This is the "Offline copy of pages" service worker

// Install stage sets up the index page (home page) in the cache and opens a new cache
self.addEventListener('install', (event) => {
  var indexPage = new Request('index.html');
  event.waitUntil(
    fetch(indexPage).then((response) => caches.open('pwabuilder-offline').then((cache) => (
      cache.put(indexPage, response)
    )
  )));
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener('fetch', (event) => {
  const updateCache = (request) => caches.open('pwabuilder-offline').then((cache) => (
    fetch(request).then((response) => cache.put(request, response)))
  );

  event.waitUntil(updateCache(event.request));

  event.respondWith(
    fetch(event.request).catch((error) => {
      console.log(`[PWA Builder] Network request Failed. Serving content from cache: ${error}`);

      return caches.open('pwabuilder-offline').then((cache) => {
        return cache.match(event.request).then((matching) => {
          const report = (!matching || matching.status == 404) ? Promise.reject('no-match') : matching;
          return report
        });
      });
    })
  );
})
