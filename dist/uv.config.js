self.__uv$config = {
  prefix: "/service/",
  encodeUrl: (input) => btoa(input),
  decodeUrl: (input) => atob(input),
  handler: "/uv.handler.js",
  client: "/uv.client.js",
  bundle: "/uv.bundle.js",
  config: "/uv.config.js",
  sw: "/uv.sw.js"
};