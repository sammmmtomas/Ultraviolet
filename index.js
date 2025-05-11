import express from "express";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 8080;

app.use("/uv.sw.js", express.static(path.join(__dirname, "dist", "uv.sw.js")));
app.use("/uv.bundle.js", express.static(path.join(__dirname, "dist", "uv.bundle.js")));
app.use("/uv.handler.js", express.static(path.join(__dirname, "dist", "uv.handler.js")));
app.use("/uv.client.js", express.static(path.join(__dirname, "dist", "uv.client.js")));
app.use("/uv.config.js", express.static(path.join(__dirname, "dist", "uv.config.js")));
app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/", async (req, res) => {
  const html = await readFile(path.join(__dirname, "static", "index.html"), "utf8");
  res.send(html);
});

app.listen(port, () => {
  console.log(`✅ Ultraviolet running on port ${port}`);
});
