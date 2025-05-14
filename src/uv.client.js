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

    if (!window.__uv) return alert("Ultraviolet core not loaded.");
    const encoded = window.__uv.url.encode(normalizedUrl);
    location.href = __uv$config.prefix + encoded;
  });
});
