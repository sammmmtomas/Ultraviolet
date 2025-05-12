import { createProxyMiddleware } from "http-proxy-middleware";

export const uvHandler = createProxyMiddleware({
  changeOrigin: true,
  pathRewrite: (path, req) => {
    try {
      const raw = decodeURIComponent(path.replace(/^\/service\//, ""));
      const u = new URL(raw);
      return u.pathname + u.search;
    } catch {
      return "/";
    }
  },
  router: (req) => {
    try {
      const raw = decodeURIComponent(req.path.replace(/^\/service\//, ""));
      const u = new URL(raw);
      return u.origin;
    } catch {
      return "https://example.com";
    }
  },
});