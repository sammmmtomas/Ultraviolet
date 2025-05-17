self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

importScripts("/uv.bundle.js", "/uv.config.js");

const proxyOrigin = self.__uv$config.prefix || "/service/";

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.startsWith(proxyOrigin)) {
    event.respondWith(
      fetch(event.request).catch(() => new Response("🔒 Proxy failed.", { status: 502 }))
    );
  }
});