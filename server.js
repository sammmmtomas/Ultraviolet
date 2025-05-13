import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { uvHandler } from "./src/uv.handler.js"; // 👈 ตรงนี้ถูกแล้ว

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// เพิ่ม middleware หรือ route handlers ที่จำเป็น

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


app.use(express.static(path.join(__dirname, "dist")));
app.use("/service/", uvHandler);

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});