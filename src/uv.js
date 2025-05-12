export default class Ultraviolet {
  constructor() {
    console.log("✅ Ultraviolet initialized");
  }

  static codec = {
    xor: {
      encode: (str) => btoa(str),
      decode: (str) => atob(str)
    }
  }
}