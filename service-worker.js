const CACHE_NAME = "meu-pwa-v3"; // Aumente o número toda vez que fizer mudanças
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// Instala e adiciona arquivos ao cache
self.addEventListener("install", (event) => {
  console.log("[SW] Instalando...");
  self.skipWaiting(); // força o SW a ativar imediatamente

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativa o novo SW e limpa caches antigos
self.addEventListener("activate", (event) => {
  console.log("[SW] Ativando e limpando caches antigos...");

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[SW] Deletando cache antigo:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );

  return self.clients.claim(); // faz o novo SW assumir controle imediatamente
});

// Intercepta fetchs e serve do cache (se disponível)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resposta) => {
      return (
        resposta ||
        fetch(event.request).catch(() =>
          caches.match("/offline.html") // opcional
        )
      );
    })
  );
});
