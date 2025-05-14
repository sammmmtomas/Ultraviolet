self.__uv$config = {
  prefix: "/service/",
  bare: "https://raw.githubusercontent.com/titaniumnetwork-dev/bare/main/src",
  encodeUrl: (x) => x,
  decodeUrl: (x) => x,
  handler: "/uv.handler.js",
  bundle: "/uv.bundle.js",
  config: "/uv.config.js",
  sw: "/uv.sw.js",
};