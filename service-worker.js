// 【重要】每次更新 PWA 時，請手動增加此版本號！
const CACHE_NAME = 'astra-chat-cache-v5'; // <-- 版本號增加到 v5

// 靜態資源，可以長期快取
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/i18n.js',
  '/demo-conversations.js',
  '/astras-data.js'
];

// 核心檔案，需要優先從網路獲取
const CORE_FILES = [
  '/index.html',
  '/update-logs.js',
  '/version.json' // <-- 新增：將版本檔案也加入核心列表
];

// Service Worker 安裝事件
self.addEventListener('install', event => {
  console.log('Service Worker: 正在安裝...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log(`Service Worker: 快取靜態資源到 ${CACHE_NAME}`);
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      // 在安裝時，就立即執行一次更新檢查
      console.log('Service Worker: 安裝完成，立即檢查更新...');
      checkForUpdates();
    })
  );
  self.skipWaiting();
});

// Service Worker 啟動事件
self.addEventListener('activate', event => {
  console.log('Service Worker: 正在啟動並清理舊版本快取...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log(`Service Worker: 刪除舊快取: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      ).then(() => {
        console.log('Service Worker: 已取得控制權。');
        // 當 Service Worker 啟動時，設定一個定時器，每小時檢查一次更新
        setInterval(checkForUpdates, 3600000); // 3600000 毫秒 = 1 小時
        return self.clients.claim();
      });
    })
  );
});

// Service Worker 攔截網路請求事件
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (CORE_FILES.some(path => url.pathname.endsWith(path))) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }) // <-- 修改：確保核心檔案總是從網路獲取最新
      .then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => {
        return caches.match(event.request);
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// ✨✨✨ 這就是魔法發生的地方：檢查更新並顯示通知的函式 ✨✨✨
async function checkForUpdates() {
    console.log('Service Worker: 正在檢查更新...');
    try {
        // 1. 從伺服器獲取最新的版本資訊 (絕不使用快取)
        const response = await fetch('/version.json', { cache: 'no-store' });
        const serverVersionInfo = await response.json();
        const serverVersion = serverVersionInfo.version;

        // 2. 從 Service Worker 的儲存中讀取當前已知的版本
        const client = await self.clients.get( (await self.clients.matchAll())[0]?.id );
        if (!client) {
            console.log("沒有可用的客戶端，暫停檢查。");
            return;
        }

        const currentVersion = (await caches.match('/version.json')) ? (await (await caches.match('/version.json')).json()).version : null;
        
        console.log(`伺服器版本: ${serverVersion}, 當前版本: ${currentVersion}`);

        // 3. 比較版本號
        if (currentVersion && compareVersions(serverVersion, currentVersion) > 0) {
            console.log('Service Worker: 發現新版本！準備顯示通知。');
            
            // 4. 發現新版本，去獲取詳細的更新日誌
            const logsResponse = await fetch('/update-logs.js', { cache: 'no-store' });
            const logsText = await logsResponse.text();
            
            // 從日誌文字中解析出最新一筆的內容 (簡易解析)
            const latestLogMatch = logsText.match(/version":\s*"([^"]+)"[\s\S]*?content":\s*\[([^\]]+)\]/);
            let updateBody = `Astra ${serverVersion} 已發布，點擊查看詳情！`;
            if (latestLogMatch && latestLogMatch[1] === serverVersion) {
                 const content = latestLogMatch[2].replace(/<[^>]*>/g, '').replace(/&[a-z]+;/g, ' ').replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
                 updateBody = `版本 ${serverVersion}：${content.substring(0, 100)}...`;
            }
            
            // 5. 顯示通知！
            self.registration.showNotification('新版本已推出', { // <-- 您指定的標題
                body: updateBody,
                icon: './icon-192.png',
                badge: './icon-192.png',
            });
            
            // 6. 更新快取中的 version.json
            const cache = await caches.open(CACHE_NAME);
            await cache.put('/version.json', new Response(JSON.stringify(serverVersionInfo)));
        }
    } catch (error) {
        console.error('Service Worker: 檢查更新失敗:', error);
    }
}

// 輔助函式：比較版本號 (例如 '15.10.0' vs '15.9.1')
function compareVersions(v1, v2) {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);
    const len = Math.max(parts1.length, parts2.length);
    for (let i = 0; i < len; i++) {
        const p1 = parts1[i] || 0;
        const p2 = parts2[i] || 0;
        if (p1 > p2) return 1;
        if (p1 < p2) return -1;
    }
    return 0;
}


// 點擊通知後的行為
self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
            if (clientList.length > 0) {
                let client = clientList[0];
                for (let i = 0; i < clientList.length; i++) {
                    if (clientList[i].focused) {
                        client = clientList[i];
                    }
                }
                // 順便發個訊息給 App，告訴它使用者是從通知點進來的
                client.postMessage({ type: 'NOTIFICATION_CLICKED' });
                return client.focus();
            }
            return clients.openWindow('/');
        })
    );
});
