class Ultraviolet {
  constructor(config) {
    this.config = config;
    console.log("✅ Ultraviolet ready with config:", config);
  }

  config = {
    encodeUrl(url) {
      return this.config.prefix + encodeURIComponent(url);
    },
    decodeUrl(encoded) {
      return decodeURIComponent(encoded.replace(this.config.prefix, ""));
    }
  };
}
if (typeof self === 'object') {
  self.Ultraviolet = Ultraviolet;
  self.__uv = new Ultraviolet(self.__uv$config);
}