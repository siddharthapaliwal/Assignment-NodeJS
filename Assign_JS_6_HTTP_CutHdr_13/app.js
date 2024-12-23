const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set custom headers
  res.setHeader('X-Powered-By', 'Node.js');
  res.setHeader('Content-Type', 'text/plain');

  // Log the headers to the console
  console.log('Response Headers:', res.getHeaders());

  // Respond with a message
  res.writeHead(200); // HTTP status code 200 (OK)
  res.end('Hello, World! Custom headers have been set.');
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
