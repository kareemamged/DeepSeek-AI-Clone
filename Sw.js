const CACHE_NAME = "offline-cache-v1";
const urlsToCache = [
    "/",            
    "/index.html",  
    "/styles.css",
    "/script.js", 
    "/sw.js"
];

// تثبيت Service Worker وتخزين الملفات
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Caching assets...");
            return cache.addAll(urlsToCache);
        })
    );
});

// اعتراض الطلبات وإرجاع الملفات من الكاش إذا كان المستخدم Offline
self.addEventListener("fetch", event => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});

// تحديث الكاش عند وجود تغييرات
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cache => cache !== CACHE_NAME).map(cache => caches.delete(cache))
            );
        })
    );
});
