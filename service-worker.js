const timestamp = 1646681954250;
const build = [
  "/_app/start-8ea2a365.js",
  "/_app/assets/start-464e9d0a.css",
  "/_app/pages/__layout.svelte-b3279b71.js",
  "/_app/error.svelte-2e155d22.js",
  "/_app/pages/index.svelte-c1f44984.js",
  "/_app/pages/_locale_/__layout.svelte-0d7a9ab3.js",
  "/_app/pages/_locale_/__error.svelte-1980f1a9.js",
  "/_app/pages/_locale_/index.svelte-dcb1dc9a.js",
  "/_app/pages/_locale_/gallery.svelte-eef7a5d4.js",
  "/_app/pages/_locale_/about/index.svelte-618ab04b.js",
  "/_app/pages/_locale_/about/key-persons.svelte-1c0e6d11.js",
  "/_app/pages/_locale_/about/bpf.svelte-3d9bdb3f.js",
  "/_app/pages/_locale_/join/index.svelte-387dcc5b.js",
  "/_app/pages/_locale_/join/eligibility.svelte-bf541b8a.js",
  "/_app/pages/_locale_/join/inspector.svelte-5d7d851d.js",
  "/_app/pages/_locale_/join/syllabus.svelte-43c915e0.js",
  "/_app/pages/_locale_/join/posts.svelte-974e8356.js",
  "/_app/pages/_locale_/join/faq.svelte-a3a8caf7.js",
  "/_app/pages/_locale_/join/si.svelte-af5b3df1.js",
  "/_app/pages/_locale_/_...no_route_.svelte-99147737.js",
  "/_app/chunks/vendor-c55a0f62.js",
  "/_app/chunks/singletons-a42a5e91.js",
  "/_app/chunks/paths-28a87002.js",
  "/_app/chunks/navigation-c71191e7.js",
  "/_app/chunks/stores-fdbce727.js",
  "/_app/chunks/i18n-33397680.js",
  "/_app/chunks/config-102d0cfa.js",
  "/_app/chunks/Meta-80e1b05c.js"
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
  "/assets/images/img-10.jpeg",
  "/assets/images/img-11.jpeg",
  "/assets/images/img-12.jpeg",
  "/assets/images/img-13.jpeg",
  "/assets/images/img-14.jpeg",
  "/assets/images/img-15.jpeg",
  "/assets/images/img-16.jpeg",
  "/assets/images/img-17.jpeg",
  "/assets/images/img-18.jpeg",
  "/assets/images/img-2.jpeg",
  "/assets/images/img-3.jpeg",
  "/assets/images/img-4.jpeg",
  "/assets/images/img-5.jpeg",
  "/assets/images/img-6.jpeg",
  "/assets/images/img-7.jpeg",
  "/assets/images/img-8.jpeg",
  "/assets/images/img-9.jpeg",
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
