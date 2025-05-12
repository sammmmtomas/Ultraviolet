import { createProxyMiddleware } from "http-proxy-middleware";

export const uvHandler = createProxyMiddleware({
  target: "https://example.com", // dummy, will be replaced dynamically
  changeOrigin: true,
  pathRewrite: (path, req) => {
    const realUrl = decodeURIComponent(path.replace(/^\/service\//, ""));
    return new URL(realUrl).pathname + new URL(realUrl).search;
  },
  router: (req) => {
    const url = decodeURIComponent(req.path.replace(/^\/service\//, ""));
    const hostname = new URL(url).origin;
    return hostname;
  },
});