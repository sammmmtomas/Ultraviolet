// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { uvHandler } from "./dist/uv.handler.js";

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// serve static assets like uv.bundle.js, uv.client.js
app.use(express.static(path.join(__dirname, "dist")));

// Ultraviolet proxy handler (rewriting URLs)
app.use("/service/", uvHandler);

// fallback: always serve index.html for other paths (important!)
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});