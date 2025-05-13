// uv.client.js
const uv = new Ultraviolet(__uv$config); // 👈 ให้ Ultraviolet รู้จัก config
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("uv-form");
  const input = document.getElementById("uv-address");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = input.value.trim();

    if (!url) return;

    const normalizedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    location.href = uv.prefix + uv.encodeUrl(normalizedUrl);
  });
});