document.getElementById("uv-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("uv-address");
  let url = input.value.trim();

  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  const encoded = encodeURIComponent(url);
  window.location.href = "/service/" + encoded;
});