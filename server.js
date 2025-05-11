import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// เสิร์ฟ static จาก dist หรือ public แล้วแต่โครงสร้าง
app.use(express.static(path.join(__dirname, "public")));

// ถ้าหน้าไหนไม่มี → ให้ส่ง index.html กลับไป (สำหรับ SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`✅ UV proxy running on port ${port}`);
});
