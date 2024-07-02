import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open('v1').then(cache => {
//       return cache.addAll([
//         '/',
//         '/index.html',
//         '/styles.css',
//         '/script.js',
//         '/images/icons/icon-192x192.png',
//         '/images/icons/icon-512x512.png'
//       ]);
//     })
//   );
// });

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       return response || fetch(event.request);
//     })
//   );
// });
