document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("uv-form");
  const input = document.getElementById("uv-address");

  let uvReady = false;

  const waitForUV = setInterval(() => {
    if (window.__uv && typeof window.__uv.config?.encodeUrl === "function") {
      uvReady = true;
      clearInterval(waitForUV);
      console.log("✅ UV ready in uv.client.js");
    }
  }, 100);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!uvReady) {
      alert("❌ Ultraviolet ยังโหลดไม่เสร็จ ลองรอสักครู่แล้วกดใหม่");
      return;
    }

    const url = input.value.trim();
    if (!url) return;

    const normalizedUrl =
      url.startsWith("http://") || url.startsWith("https://")
        ? url
        : "https://" + url;

    const encoded = window.__uv.config.encodeUrl(normalizedUrl);
    location.href = window.__uv.config.prefix + encoded;
  });
});