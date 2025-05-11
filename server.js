import express from "express";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(join(__dirname, "dist")));
app.use(express.static(join(__dirname, "public"))); // เสิร์ฟ index.html จาก public

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Ultraviolet running on port ${port}`);
});
