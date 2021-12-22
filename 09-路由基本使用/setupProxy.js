const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:8080',
            changeOrigin: true,
            pathRewrite: { "^/api": '' }
        }),
        createProxyMiddleware('/api2', {
            target: 'http://localhost:8800',
            changeOrigin: true,
            pathRewrite: { "^/api2": '' }
        })
    );
};