self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

// ถ้า __uv$config ไม่มี ให้ใช้ default path ไปยัง bundle
importScripts("/uv.bundle.js", "/uv.config.js");

const proxyOrigin = self.__uv$config.prefix || "/service/";

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // ต้องตรง scope ที่ config ไว้ เช่น "/service/"
  if (url.pathname.startsWith(proxyOrigin)) {
    event.respondWith(
      fetch(event.request).catch(() => new Response("🔒 Proxy failed.", { status: 502 }))
    );
  }
});