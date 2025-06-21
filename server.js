// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8080;

// เปลี่ยนจาก public → dist
app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist/index.js"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});