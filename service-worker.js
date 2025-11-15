// 【重要】每次更新 PWA 時，請手動增加此版本號！
const CACHE_NAME = 'astra-chat-cache-v2'; // 版本號已更新

// 定義要快取的檔案 (已包含您提供的新檔案列表)
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
];

// Service Worker 安裝事件：快取新版本的檔案
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log(`Service Worker: 開啟並快取新檔案到 ${CACHE_NAME}`);
        return cache.addAll(urlsToCache);
      })
  );
});

// Service Worker 啟動事件：刪除所有舊版本的快取
self.addEventListener('activate', event => {
  console.log('Service Worker: 正在啟動並清理舊版本快取...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // 如果快取名稱不是當前的 CACHE_NAME，就刪除它
          if (cacheName !== CACHE_NAME) {
            console.log(`Service Worker: 刪除舊快取: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Service Worker 攔截網路請求事件：優先從快取提供資源
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
