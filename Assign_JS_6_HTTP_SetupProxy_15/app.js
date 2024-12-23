const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// The external API URL you want to proxy to
const API_URL = 'https://jsonplaceholder.typicode.com';  // Example: JSONPlaceholder API

// Proxy route
app.use('/api', createProxyMiddleware({
  target: API_URL,    // External API to proxy to
  changeOrigin: true,  // Adjust the origin of the request (needed for some APIs)
  pathRewrite: {
    '^/api': '',  // Remove '/api' from the URL path before forwarding it to the target API
  },
  logLevel: 'debug', // Logs requests and responses for debugging (optional)
}));

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
