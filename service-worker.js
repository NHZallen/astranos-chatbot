// 【重要】每次更新 PWA 時，請手動增加此版本號！
const CACHE_NAME = 'astra-chat-cache-v5'; // <-- 我們將版本升到 v5

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
  console.log('Service Worker v5: 正在安裝...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log(`Service Worker v5: 預先快取核心檔案到 ${CACHE_NAME}`);
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Service Worker 啟動事件
self.addEventListener('activate', event => {
  console.log('Service Worker v5: 正在啟動並清理舊版本快取...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log(`Service Worker v5: 刪除舊快取: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      ).then(() => {
        console.log('Service Worker v5: 已取得控制權。');
        return self.clients.claim();
      });
    })
  );
});

// Service Worker 攔截網路請求事件 - 【Stale-While-Revalidate 策略核心】
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      // 1. 立即從快取中尋找回應
      return cache.match(event.request).then(cachedResponse => {
        // 2. 在背景中，總是去網路請求最新版本
        const fetchPromise = fetch(event.request).then(networkResponse => {
          // 如果成功獲取，就更新快取
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });

        // 3. 如果快取中有資料，就立即回傳快取版本；否則，等待網路請求完成
        return cachedResponse || fetchPromise;
      });
    })
  );
});
