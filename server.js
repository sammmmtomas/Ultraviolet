import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { uvHandler } from "./src/uv.handler.js"; // ✅ เพิ่ม

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8080;

// ✅ proxy handler ก่อน static
app.use("/service/", uvHandler);

// ✅ serve static
app.use(express.static(path.join(__dirname, "dist")));

// ✅ fallback ทุก route ที่เหลือ
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on ${PORT}`);
});