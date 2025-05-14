document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("uv-form");
  const input = document.getElementById("uv-address");

  if (!window.__uv && window.Ultraviolet) {
    window.__uv = new Ultraviolet({
      ...__uv$config,
      window,
    });

    __uv$config.encodeUrl = (input) => window.__uv.urlCodec.encode(input);
    __uv$config.decodeUrl = (input) => window.__uv.urlCodec.decode(input);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = input.value.trim();
    if (!url) return;

    const normalizedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url : "https://" + url;

    location.href = __uv$config.prefix + __uv$config.encodeUrl(normalizedUrl);
  });
});
