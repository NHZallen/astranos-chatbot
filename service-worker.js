// 【重要】每次更新 PWA 時，請手動增加此版本號！
const CACHE_NAME = 'astra-chat-cache-v3'; // <-- 我們將版本升到 v3 來觸發這次更新

// 定義要快取的檔案
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

// Service Worker 安裝事件
self.addEventListener('install', event => {
  console.log('Service Worker v3: 正在安裝...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log(`Service Worker v3: 快取新檔案到 ${CACHE_NAME}`);
      return cache.addAll(urlsToCache);
    })
  );
  // 【新增】讓新的 Service Worker 安裝後立即取代舊的
  self.skipWaiting();
});

// Service Worker 啟動事件
self.addEventListener('activate', event => {
  console.log('Service Worker v3: 正在啟動...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log(`Service Worker v3: 刪除舊快取: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      ).then(() => {
        console.log('Service Worker v3: 已取得控制權，並準備通知頁面。');
        // 【新增】讓 Service Worker 立即控制當前頁面
        return self.clients.claim();
      }).then(() => {
        // 【新增】向所有受控的頁面發送更新通知
        return self.clients.matchAll().then(clients => {
          clients.forEach(client => client.postMessage({ type: 'NEW_VERSION_ACTIVATED' }));
        });
      })
    })
  );
});

// Service Worker 攔截網路請求事件
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
