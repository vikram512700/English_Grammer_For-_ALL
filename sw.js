/* ============================================================
   sw.js – Service Worker for English Master Pro PWA
   ============================================================ */
const CACHE_NAME = 'emp-v2';
const ASSETS = [
  './',
  'index.html',
  'css/index.css',
  'css/dashboard.css',
  'css/modules.css',
  'css/quiz.css',
  'css/animations.css',
  'js/data.js',
  'js/db.js',
  'js/gamification.js',
  'js/quiz.js',
  'js/lessons.js',
  'js/modules.js',
  'js/progress.js',
  'js/extras.js',
  'js/app.js',
  'js/sw-register.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).catch(() => caches.match('/index.html'));
    })
  );
});
