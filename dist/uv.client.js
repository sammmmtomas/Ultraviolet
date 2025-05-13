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

    const target = __uv$config.encodeUrl(normalizedUrl);
    location.href = target;
  });
});