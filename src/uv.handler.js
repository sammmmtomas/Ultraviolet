// src/uv.handler.js
import { createProxyMiddleware } from "http-proxy-middleware";

export const uvHandler = createProxyMiddleware({
  changeOrigin: true,
  pathRewrite: (path) => {
    try {
      const realUrl = decodeURIComponent(path.replace(/^\/service\//, ""));
      const parsed = new URL(realUrl); // validate URL
      return parsed.pathname + parsed.search;
    } catch (e) {
      console.error("Invalid URL in pathRewrite:", e.message);
      return "/"; // fallback
    }
  },
  router: (req) => {
    try {
      const url = decodeURIComponent(req.path.replace(/^\/service\//, ""));
      const parsed = new URL(url); // validate URL
      return parsed.origin;
    } catch (e) {
      console.error("Invalid URL in router:", e.message);
      return "https://example.com"; // fallback safe host
    }
  },
});