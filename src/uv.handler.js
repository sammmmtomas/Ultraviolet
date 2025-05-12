import { createProxyMiddleware } from "http-proxy-middleware";

export const uvHandler = createProxyMiddleware({
  changeOrigin: true,

  pathRewrite: (path, req) => {
    try {
      const raw = decodeURIComponent(req.originalUrl.replace(/^\/service\//, ""));
      const u = new URL(raw);
      return u.pathname + u.search;
    } catch (err) {
      console.error("❌ pathRewrite error:", err.message);
      return "/";
    }
  },

  router: (req) => {
    try {
      const raw = decodeURIComponent(req.originalUrl.replace(/^\/service\//, ""));
      const u = new URL(raw);
      return u.origin;
    } catch (err) {
      console.error("❌ router error:", err.message);
      return "https://example.com"; // fallback ที่จะเกิดหาก URL พัง
    }
  },
});