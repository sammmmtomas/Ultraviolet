// src/uv.handler.js
import { createProxyMiddleware } from "http-proxy-middleware";

export const uvHandler = createProxyMiddleware({
  changeOrigin: true,
  pathRewrite: (path) => {
    try {
      const decoded = decodeURIComponent(path.replace(/^\/service\//, ""));
      const url = new URL(decoded);
      return url.pathname + url.search;
    } catch {
      return "/";
    }
  },
  router: (req) => {
    try {
      const decoded = decodeURIComponent(req.path.replace(/^\/service\//, ""));
      const url = new URL(decoded);
      return url.origin;
    } catch {
      return "https://example.com";
    }
  },
});