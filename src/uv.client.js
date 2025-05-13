document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("uv-form");
  const input = document.getElementById("uv-address");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = input.value.trim();

    if (!url) return;

    // ตรวจว่าเริ่มด้วย http/https หรือยัง
    const normalizedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    // เข้าผ่าน path ที่ proxy ใช้ (uv.config.js กำหนดไว้ prefix = "/service/")
    location.href = __uv$config.prefix + __uv$config.encodeUrl(normalizedUrl);
    navigator.serviceWorker.register("uv.sw.js", { type: "module" });
  });
});