document.getElementById("uv-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("uv-address").value.trim();
  if (!input) return;
  location.href = `/service/?url=${encodeURIComponent(input)}`;
});