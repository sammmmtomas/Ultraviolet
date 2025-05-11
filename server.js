import express from "express";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(join(__dirname, "dist")));

app.get("*", async (req, res) => {
  const indexHtml = await readFile(join(__dirname, "dist", "index.html"), "utf-8");
  res.set("Content-Type", "text/html").send(indexHtml);
});

createServer(app).listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
