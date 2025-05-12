/* global __uv$config */
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});