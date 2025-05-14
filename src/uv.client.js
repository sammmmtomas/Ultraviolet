// ✅ uv.client.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("uv-form");
  const input = document.getElementById("uv-address");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = input.value.trim();

    if (!url || typeof __uv$config?.encodeUrl !== "function") {
      console.warn("❌ __uv$config.encodeUrl is not available.");
      return;
    }

    const normalizedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    location.href = __uv$config.prefix + __uv$config.encodeUrl(normalizedUrl);
  });
});