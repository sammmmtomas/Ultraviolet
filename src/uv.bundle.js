export default class Ultraviolet {
  constructor(config) {
    this.config = config;
    console.log("✅ Ultraviolet ready with config:", config);
  }

  url = {
    encode(url) {
      return this.config.prefix + encodeURIComponent(url);
    },
    decode(encoded) {
      return decodeURIComponent(encoded.replace(this.config.prefix, ""));
    }
  };
}
