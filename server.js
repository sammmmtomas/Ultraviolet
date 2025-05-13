// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8080;

// Serve static files (dist folder)
app.use(express.static(path.join(__dirname, "dist")));

// Fallback: serve index.html
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

// ✅ ✅ ✅ ต้องมี listen
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});