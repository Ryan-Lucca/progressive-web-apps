const CACHE_NAME = 'cache-v1.0';

const URLS_TO_CACHE = [
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/img/img1.jpeg',
  '/img/img2.jpeg',
  '/img/img3.jpeg',
  '/img/img4.jpeg',
];

// Instala e adiciona ao cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativa e remove caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      // Limpar caches antigos
      const keys = await caches.keys();
      await Promise.all(
        keys.map(key => key !== CACHE_NAME && caches.delete(key))
      );

      // Mostrar notificação
      self.registration.showNotification('opa... aí vem novidades', {
        body: 'O app foi atualizado com sucesso!',
        icon: '/icons/icon-192.png'
      });

      self.clients.claim();
    })()
  );
});


// Intercepta e responde às requisições
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then(networkResponse => {
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== 'basic'
          ) {
            return networkResponse;
          }

          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });

          return networkResponse;
        })
        .catch(() => {
          // opcional: retorno alternativo (ex: página offline)
        });
    })
  );
});