const { createProxyMiddleware } = require('http-proxy-middleware');

function createProxy(path = "", target = "") {
    return createProxyMiddleware(path, {
        target,
        changeOrigin: true,
        pathRewrite: { [`^/${path}`]: '' }
    })
}

module.exports = function (app) {
    app.use(
        createProxy('/api', 'http://localhost:8080'),
        createProxy('/api2', 'http://localhost:9090'),
    );
};