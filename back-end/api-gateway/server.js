const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use("/users", createProxyMiddleware({ target: "http://user-service:5000", changeOrigin: true }));
app.use("/restaurants", createProxyMiddleware({ target: "http://restaurant-service:5001", changeOrigin: true }));

app.listen(8000, () => console.log("API Gateway running on port 8000"));
