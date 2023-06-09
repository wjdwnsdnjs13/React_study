const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/note",
    createProxyMiddleware({
      target: "http://localhost:80",
      changeOrigin: true,
    })
  );
};