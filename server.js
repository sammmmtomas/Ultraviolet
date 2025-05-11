import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createBareServer } from "@mercuryworkshop/bare-mux";
import { uvHandler } from "./dist/uv.handler.js";

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static frontend files
app.use(express.static(path.join(__dirname, "dist")));

// Mount Ultraviolet proxy middleware at /service/
app.use("/service/", uvHandler);

// Fallback for SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
