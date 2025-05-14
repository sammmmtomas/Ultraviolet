document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("uv-form");
  const input = document.getElementById("uv-address");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const url = input.value.trim();
    if (!url) return;

    const normalizedUrl =
      url.startsWith("http://") || url.startsWith("https://")
        ? url
        : "https://" + url;

    // ✅ ตรวจว่ามี __uv และ encodeUrl
    if (window.__uv && typeof window.__uv.config?.encodeUrl === "function") {
      const encoded = window.__uv.config.encodeUrl(normalizedUrl);
      location.href = window.__uv.config.prefix + encoded;
    } else {
      alert("❌ Ultraviolet ยังโหลดไม่เสร็จ");
    }
  });
});