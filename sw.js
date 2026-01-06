const CACHE_NAME = 'js-apuntes-v3';
const ASSETS_CACHE = 'js-assets-v3';

// Recursos estáticos conocidos que queremos precachear (mínimo esencial)
const PRECACHE_URLS = [
  './',
  './index.html',
  './favicon/favicon.ico',
  './site.webmanifest'
];

// Instalación: Precachear recursos críticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activación: Limpiar cachés antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== ASSETS_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Interceptar peticiones
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Ignorar peticiones que no sean http (ej: chrome-extension)
  if (!url.protocol.startsWith('http')) return;

  // Estrategia para Assets (Imágenes, Fuentes, CSS, JS de Vite) -> Cache First
  // Asumimos que los assets de Vite tienen hash en el nombre, así que si están en caché, sirven.
  if (url.pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot|css|js)$/)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        
        return fetch(event.request).then((response) => {
          // Clonar respuesta para guardar en caché
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(ASSETS_CACHE).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        });
      })
    );
    return;
  }

  // Estrategia para HTML y Navegación -> Network First (Stale while revalidate mejorado)
  // Intentar red primero para contenido fresco, si falla, ir a caché
  if (event.request.mode === 'navigate' || event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
          // Aquí podríamos retornar una página offline.html si la tuviéramos
        })
    );
    return;
  }

  // Por defecto: Network First
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
