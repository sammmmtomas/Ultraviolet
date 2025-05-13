(()=>{document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("uv-form"),n=document.getElementById("uv-address");e.addEventListener("submit",o=>{o.preventDefault();let t=n.value.trim();if(!t)return;let r=t.startsWith("http://")||t.startsWith("https://")?t:"https://"+t;location.href=__uv$config.prefix+__uv$config.encodeUrl(r)})});document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("uv-form"),n=document.getElementById("uv-address");e.addEventListener("submit",o=>{o.preventDefault();let t=n.value.trim();if(!t)return;let r=t.startsWith("http://")||t.startsWith("https://")?t:"https://"+t;location.href=__uv$config.prefix+__uv$config.encodeUrl(r)})});})();
self.Ultraviolet = Ultraviolet;

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