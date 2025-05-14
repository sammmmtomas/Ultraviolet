// build.js
import { build } from "esbuild";
import { rimraf } from "rimraf";
import { mkdir, writeFile, copyFile } from "fs/promises";

// Clean
await rimraf("dist");
await mkdir("dist", { recursive: true });

// Bundle UV core
await build({
  entryPoints: ["src/uv.bundle.js"],
  outfile: "dist/uv.bundle.js",
  bundle: true,
  format: "iife",
  target: "es2020",
  platform: "browser",
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  footer: {
    js: "self.Ultraviolet = Ultraviolet;",
  },
});

// Copy static files
await Promise.all([
  copyFile("src/uv.config.js", "dist/uv.config.js"),
  copyFile("src/uv.client.js", "dist/uv.client.js"),
  copyFile("src/uv.sw.js", "dist/uv.sw.js"),
  copyFile("src/index.html", "dist/index.html"),
]);

console.log("✅ Build done.");