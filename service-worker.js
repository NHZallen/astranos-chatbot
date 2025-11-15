// 定義要快取的檔案
const CACHE_NAME = 'astra-chat-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/i18n.js',
  '/update-logs.js',
  '/demo-conversations.js',
  '/astras-data.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
  // 注意：您的 HTML 檔案中引用的其他重要 JS/CSS 也可以加進來
];

// Service Worker 安裝事件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('快取已開啟');
        return cache.addAll(urlsToCache);
      })
  );
});

// Service Worker 攔截網路請求事件
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果快取中有對應的資源，就直接回傳
        if (response) {
          return response;
        }
        // 否則，就透過網路去請求
        return fetch(event.request);
      })
  );
});
