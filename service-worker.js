const timestamp = 1641816719535;
const build = [
  "/_app/start-57fde6a6.js",
  "/_app/assets/start-464e9d0a.css",
  "/_app/pages/__layout.svelte-8e828a4f.js",
  "/_app/pages/__error.svelte-8bd8d582.js",
  "/_app/pages/index.svelte-4742b37b.js",
  "/_app/pages/gallery.svelte-396073a2.js",
  "/_app/pages/about.svelte-06a1ed08.js",
  "/_app/pages/join.svelte-379bfdc5.js",
  "/_app/chunks/vendor-6e9ec4a4.js",
  "/_app/chunks/config-461e69f5.js",
  "/_app/chunks/Meta-9a6d1d6d.js"
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
