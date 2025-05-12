import { rimraf } from "rimraf";
import { copyFile, mkdir } from "node:fs/promises";
import { build } from "esbuild";

const isDev = process.argv.includes("--dev");

await rimraf("dist");
await mkdir("dist", { recursive: true });

await copyFile("src/uv.config.js", "dist/uv.config.js");
await copyFile("src/uv.sw.js", "dist/uv.sw.js");

await build({
  entryPoints: {
    "uv.bundle": "./src/uv.bundle.js",
    "uv.client": "./src/uv.client.js"
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
    js: "self.Ultraviolet = Ultraviolet;"
  }
});

console.log("✅ Build complete.");