import { createProxyMiddleware } from "http-proxy-middleware";

export const uvHandler = createProxyMiddleware({
  changeOrigin: true,
  pathRewrite: (path, req) => {
    try {
      const url = decodeURIComponent(path.replace(/^\/service\//, ""));
      const u = new URL(url);
      return u.pathname + u.search;
    } catch (err) {
      return "/";
    }
  },
  router: (req) => {
    try {
      const raw = decodeURIComponent(req.path.replace(/^\/service\//, ""));
      const u = new URL(raw);
      return u.origin;
    } catch (err) {
      return "https://example.com"; // fallback
    }
  },
});