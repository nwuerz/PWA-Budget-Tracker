const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/style.css',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
];

//install service worker
self.addEventListener('install', evt => {
    // console.log('service worker has been installed');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

//activate event
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
});

// fetch event
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
});