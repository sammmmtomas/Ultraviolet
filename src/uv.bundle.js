class Ultraviolet {
  constructor() {
    console.log("✅ UV Ready");
  }
  encodeUrl(url) {
    return "/service/" + encodeURIComponent(url);
  }
}
self.Ultraviolet = Ultraviolet;