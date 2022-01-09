const timestamp = 1641737032572;
const build = [
  "/_app/start-ec662d65.js",
  "/_app/assets/start-464e9d0a.css",
  "/_app/pages/__layout.svelte-fb9de70f.js",
  "/_app/pages/__error.svelte-404d3900.js",
  "/_app/pages/index.svelte-b0016e18.js",
  "/_app/pages/gallery.svelte-b5b5de0a.js",
  "/_app/pages/about.svelte-03d908a5.js",
  "/_app/chunks/vendor-b5968c1f.js",
  "/_app/chunks/config-1ca8ca8b.js",
  "/_app/chunks/Meta-9a00f251.js"
];
const files = [
  "/.nojekyll",
  "/assets/icons/android/144x144.png",
  "/assets/icons/android/192x192.png",
  "/assets/icons/android/36x36.png",
  "/assets/icons/android/48x48.png",
  "/assets/icons/android/72x72.png",
  "/assets/icons/android/96x96.png",
  "/assets/icons/apple/touch.png",
  "/assets/icons/favicon-16x16.png",
  "/assets/icons/favicon-32x32.png",
  "/assets/icons/favicon.ico",
  "/assets/images/img-1.jpeg",
  "/assets/images/img-2.jpeg",
  "/assets/images/img-3.jpeg",
  "/assets/images/img-4.jpeg",
  "/assets/images/img-5.jpeg",
  "/assets/images/img-6.jpeg",
  "/assets/images/mr-surendra-pal.jpeg",
  "/assets/logo-full.png",
  "/assets/logo.png",
  "/CNAME",
  "/global.css",
  "/robots.txt",
  "/tailwind.css",
  "/web.manifest.json"
];
const CACHED_ASSESTS = `cache-${timestamp}`;
const TO_CACHE = build.concat(files);
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHED_ASSESTS).then((cache) => cache.addAll(TO_CACHE)));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (!key.includes(timestamp))
        caches.delete(key);
    }
    self.clients.claim();
  }));
});
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (!(request.url.indexOf("http") === 0))
    return;
  if (request.method !== "GET" || request.headers.has("range") || request.cache === "only-if-cached" && request.mode !== "same-origin")
    return;
  const url = new URL(request.url);
  const cached = caches.match(request);
  if (url.origin === location.origin && TO_CACHE.includes(url.pathname)) {
    event.respondWith(cached);
  } else if (url.protocol === "https:" || location.hostname === "localhost") {
    const promise = fetch(request);
    promise.then((response) => {
      if (response.ok && response.type === "basic") {
        const clone = response.clone();
        caches.open(CACHED_ASSESTS).then((cache) => {
          cache.put(request, clone);
        });
      }
    });
    event.respondWith(promise.catch(() => cached || promise));
  }
});
