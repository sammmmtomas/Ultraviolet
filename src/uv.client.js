document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("uv-form");
  const input = document.getElementById("uv-address");

  if (!window.__uv && window.Ultraviolet) {
    window.__uv = new Ultraviolet({
      ...__uv$config,
      window,
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = input.value.trim();
    if (!url) return;

    const encoded = window.__uv.url.encode(
      url.startsWith("http") ? url : "https://" + url
    );
    location.href = encoded;
  });
});
