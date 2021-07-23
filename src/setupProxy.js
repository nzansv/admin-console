const { createProxyMiddleware } = require('http-proxy-middleware');


const OPTIONS = {
    /* Development mode */
    dev: {
        target: 'https://test.post.kz',
        changeOrigin: true,
        logLevel: 'debug',
        secure: false,
    },
};

const proxies = new Map([
    ['/auth/web/auth', OPTIONS.dev], // Reverse proxy for the auth by a username
    ['/mail-app', OPTIONS.dev], // Reverse proxy for the auth by a username
]);

module.exports = function (app) {
        proxies.forEach((value, key, _) => {
            app.use(key, createProxyMiddleware(value));
        });
};