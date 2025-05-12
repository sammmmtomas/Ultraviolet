/* global Ultraviolet */
self.__uv$config = {
  prefix: "/service/",
  encodeUrl: (input) => encodeURIComponent(input),
  decodeUrl: (input) => decodeURIComponent(input),
  handler: "/uv.handler.js",
  client: "/uv.client.js",
  bundle: "/uv.bundle.js",
  config: "/uv.config.js",
  sw: "/uv.sw.js",
};