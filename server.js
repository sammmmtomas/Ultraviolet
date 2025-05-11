import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static assets from "dist" first
app.use(express.static(path.join(__dirname, "dist")));

// Then fallback any other route to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Ultraviolet running at http://localhost:${PORT}`);
});
