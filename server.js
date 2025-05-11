import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static assets from the "dist" directory
app.use(express.static(path.join(__dirname, "dist")));

// Default fallback to index.html (if needed)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Ultraviolet is running at http://localhost:${PORT}`);
});
