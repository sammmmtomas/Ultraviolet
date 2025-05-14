
class Ultraviolet {
  constructor(config) {
    this.config = config;
    this.url = {
      encode: (url) => encodeURIComponent(url),
      decode: (str) => decodeURIComponent(str)
    };
  }
}
if (typeof self === 'object' && typeof Ultraviolet === 'function') {
  self.__uv = new Ultraviolet(self.__uv$config || {});
}
