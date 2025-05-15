import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { uvHandler } from "./src/uv.handler.js";
app.use("/service/", uvHandler);

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on ${PORT}`);
});