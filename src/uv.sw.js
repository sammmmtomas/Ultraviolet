self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

importScripts("/uv.bundle.js", "/uv.config.js");

if (!self.__uv && self.Ultraviolet) {
  self.__uv = new Ultraviolet({
    ...self.__uv$config,
    window: self,
  });
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.startsWith(self.__uv$config.prefix)) {
    event.respondWith(fetch(event.request));
  }
});
