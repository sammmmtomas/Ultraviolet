import { rimraf } from "rimraf";
import { copyFile, mkdir } from "node:fs/promises";
import { build } from "esbuild"; // ✅ ต้องมีบรรทัดนี้

const isDev = process.argv.includes("--dev");

await rimraf("dist");
await mkdir("dist", { recursive: true });

// copy static files
await copyFile("src/uv.config.js", "dist/uv.config.js");
await copyFile("src/uv.sw.js", "dist/uv.sw.js");

// build frontend bundles only (no uv.handler.js)
await build({
  entryPoints: {
    "uv.bundle": "./src/uv.bundle.js",
    "uv.client": "./src/uv.client.js",
  },
  bundle: true,
  minify: !isDev,
  sourcemap: isDev,
  outdir: "dist",
  platform: "browser",
  target: "esnext",
  logLevel: "info",
  define: {
    "process.env.NODE_ENV": JSON.stringify(isDev ? "development" : "production"),
  },
  footer: {
    js: "self.Ultraviolet = Ultraviolet;",
  },
  external: [
    "events",
    "idb",
    "parse5",
    "set-cookie-parser",
    "astring",
    "meriyah",
    "@mercuryworkshop/bare-mux",
  ],
});

console.log("✅ Build complete.");