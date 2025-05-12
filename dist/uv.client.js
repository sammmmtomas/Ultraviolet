(() => {
  console.log("uv.client loaded");
  document.getElementById("uv-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let input = document.getElementById("uv-address").value.trim();
    if (!input.startsWith("http")) input = "https://" + input;
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(input);
  });
})()