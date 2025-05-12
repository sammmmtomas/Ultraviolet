/* global Ultraviolet */
self.__uv$config = {
  prefix: "/service/",
  encodeUrl: Ultraviolet.codec?.xor?.encode || ((x) => x),
  decodeUrl: Ultraviolet.codec?.xor?.decode || ((x) => x),
  handler: "/uv.handler.js",
  client: "/uv.client.js",
  bundle: "/uv.bundle.js",
  config: "/uv.config.js",
  sw: "/uv.sw.js",
};