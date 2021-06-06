/* eslint-disable no-restricted-globals */
const cacheName = 'pepes-pet-shop';
const filesToCache = [
  '/images/Logo.png',
  '/images/about-image.jpg',
  '/images/about-portret.jpg',
  '/images/map.png',
  '/images/notfound.png',
  '/images/carousel/first-normal.jpg',
  '/images/carousel/first-small.jpg',
  '/images/carousel/second-normal.jpg',
  '/images/carousel/second-small.jpg',
  '/images/carousel/third-normal.jpg',
  '/images/carousel/third-smalll.jpg',
  '/images/categories/accessories.jpg',
  '/images/categories/bed.jpg',
  '/images/categories/bowl.jpg',
  '/images/categories/food.jpg',
  '/images/categories/health.jpg',
  '/images/categories/leashes.jpg',
  '/images/categories/toy.jpg',
  '/images/categories/vitamins.jpg',
  '/index.html',
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});

