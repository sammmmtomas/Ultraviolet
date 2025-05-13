// src/uv.middleware.js
import { createProxyMiddleware } from "http-proxy-middleware";

export const uvHandler = createProxyMiddleware({
  changeOrigin: true,
  pathRewrite: (path) => {
    try {
      const url = decodeURIComponent(path.replace(/^\/service\//, ""));
      const u = new URL(url);
      return u.pathname + u.search;
    } catch {
      return "/";
    }
  },
  router: (req) => {
    try {
      const url = decodeURIComponent(req.path.replace(/^\/service\//, ""));
      const u = new URL(url);
      return u.origin;
    } catch {
      return "https://example.com";
    }
  },
});
