// build.js
import { rimraf } from "rimraf";
import { mkdir, copyFile } from "node:fs/promises";
import { build } from "esbuild";

const isDev = process.argv.includes("--dev");

await rimraf("dist");
await mkdir("dist", { recursive: true });

// ✅ อย่าลืม index.html ด้วย
await copyFile("src/index.html", "dist/index.html");
await copyFile("src/uv.config.js", "dist/uv.config.js");
await copyFile("src/uv.sw.js", "dist/uv.sw.js");

// ✅ build UV scripts
await build({
  entryPoints: {
    "uv.bundle": "./src/uv.bundle.js",
    "uv.client": "./src/uv.client.js",
  },
  bundle: true,
  outdir: "dist",
  platform: "browser",
  minify: !isDev,
  sourcemap: isDev,
  target: "esnext",
  footer: {
    js: "self.Ultraviolet = Ultraviolet;",
  },
  external: [
    "events", "idb", "parse5", "set-cookie-parser", "astring",
    "meriyah", "@mercuryworkshop/bare-mux"
  ],
});

console.log("✅ Build complete.");