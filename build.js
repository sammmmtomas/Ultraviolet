import { rimraf } from "rimraf";
import { copyFile, mkdir } from "node:fs/promises";
import { build } from "esbuild";

const isDev = process.argv.includes("--dev");

await rimraf("dist");
await mkdir("dist", { recursive: true });

// copy static files
await copyFile("src/uv.config.js", "dist/uv.config.js");
await copyFile("src/uv.sw.js", "dist/uv.sw.js");

// bundle source files
await build({
  entryPoints: {
    "uv.bundle": "./src/uv.bundle.js",
    "uv.client": "./src/uv.client.js",
    "uv.handler": "./src/uv.handler.js",
  },
  bundle: true,
  minify: !isDev,
  sourcemap: isDev,
  outdir: "dist",
  target: "esnext",
  platform: "browser", // อย่าเปลี่ยนเป็น node
  logLevel: "info",
  define: {
    "process.env.NODE_ENV": JSON.stringify(isDev ? "development" : "production"),
  },
  footer: {
    js: "self.Ultraviolet = Ultraviolet;",
  },
  external: [
    "events",               // 💥 แก้ตรงนี้
    "idb",
    "parse5",
    "set-cookie-parser",
    "astring",
    "meriyah",
    "@mercuryworkshop/bare-mux",
  ]
});