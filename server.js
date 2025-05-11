import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { uvHandler } from "./dist/uv.handler.js";

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// serve frontend
app.use(express.static(path.join(__dirname, "dist")));

// ultraviolet proxy middleware
app.use("/service/", uvHandler);

// fallback route
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
