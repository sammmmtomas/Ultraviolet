import { rimraf } from "rimraf";
import { copyFile, mkdir } from "node:fs/promises";
import { build } from "esbuild";

const isDev = process.argv.includes("--dev");

await rimraf("dist");
await mkdir("dist", { recursive: true });

// copy static files
await copyFile("src/sw.js", "dist/sw.js");
await copyFile("src/uv.config.js", "dist/uv.config.js");

await build({
  entryPoints: {
    "uv.bundle": "./src/rewrite/index.js",
    "uv.client": "./src/client/index.js",
    "uv.handler": "./src/uv.handler.js",
    "uv.sw": "./src/uv.sw.js",
  },
  bundle: true,
  minify: !isDev,
  sourcemap: isDev,
  outdir: "dist",
  define: {
    "process.env.NODE_ENV": JSON.stringify(isDev ? "development" : "production"),
  },
  target: "esnext",
  platform: "browser",
  logLevel: "info",
});
