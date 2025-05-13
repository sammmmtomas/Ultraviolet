import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 8080;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// เสิร์ฟไฟล์จาก dist
app.use(express.static(path.join(__dirname, "dist")));

// fallback ทั้งหมดให้กลับไป index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Ultraviolet running at http://localhost:${PORT}`);
});