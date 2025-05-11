import express from "express";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "dist")));

app.get("/service/:path(*)", async (req, res) => {
  const html = await readFile(path.join(__dirname, "dist", "index.html"), "utf-8");
  res.setHeader("Content-Type", "text/html");
  res.send(html);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
