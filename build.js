import { build } from "esbuild";
import { mkdir, writeFile } from "fs/promises";
import { rimraf } from "rimraf";

const isDev = process.argv.includes("--dev");

await rimraf("dist");
await mkdir("dist", { recursive: true });

// mock uv.bundle.js
await writeFile("dist/uv.bundle.js", `(() => {
  console.log("uv.bundle loaded");
})()`, "utf-8");

// mock uv.client.js
await writeFile("dist/uv.client.js", `(() => {
  console.log("uv.client loaded");
  document.getElementById("uv-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let input = document.getElementById("uv-address").value.trim();
    if (!input.startsWith("http")) input = "https://" + input;
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(input);
  });
})()`, "utf-8");

// mock uv.config.js
await writeFile("dist/uv.config.js", `self.__uv$config = {
  prefix: "/service/",
  encodeUrl: (input) => btoa(input),
  decodeUrl: (input) => atob(input),
  handler: "/uv.handler.js",
  client: "/uv.client.js",
  bundle: "/uv.bundle.js",
  config: "/uv.config.js",
  sw: "/uv.sw.js"
};`, "utf-8");

// mock uv.sw.js
await writeFile("dist/uv.sw.js", `self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});`, "utf-8");

// mock uv.handler.js (placeholder)
await writeFile("dist/uv.handler.js", `export const uvHandler = (req, res) => {
  res.end("Proxy handler placeholder");
};`, "utf-8");

console.log("✅ Mock build completed.");