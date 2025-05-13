// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { uvHandler } from "./src/uv.middleware.js"; // 👈 เปลี่ยนตรงนี้

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8080;

app.use("/service/", uvHandler); // 👈 ใช้ middleware ก่อน static

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});