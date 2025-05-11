// build.js
import { build } from "esbuild";
import { mkdir, copyFile } from "fs/promises";
import { rimraf } from "rimraf";
import path from "path";

const isDev = process.argv.includes("--dev");

await rimraf("dist");
await mkdir("dist", { recursive: true });

// copy static config files
await copyFile("src/uv.config.js", "dist/uv.config.js");
await copyFile("src/uv.sw.js", "dist/uv.sw.js");
await copyFile("src/index.html", "dist/index.html");

await build({
  entryPoints: {
    "uv.bundle": "./src/rewrite/index.js",
    "uv.client": "./src/client/index.js",
    "uv.handler": "./src/uv.handler.js",
  },
  bundle: true,
  minify: !isDev,
  sourcemap: isDev,
  outdir: "dist",
  platform: "browser",
  target: "esnext",
  define: {
    "process.env.NODE_ENV": JSON.stringify(isDev ? "development" : "production"),
  },
  logLevel: "info",
});
