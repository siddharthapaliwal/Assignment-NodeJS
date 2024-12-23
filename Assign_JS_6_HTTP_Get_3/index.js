// Import the http module
const http = require('http');

// Define the host and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Check if the request is a GET request
  if (req.method === 'GET') {
    // Set the response HTTP header with status code 200 and content type text/plain
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    // Send a response message
    res.end('Hello, World! This is a GET request handler.');
  } else {
    // Handle non-GET requests
    res.statusCode = 405; // Method Not Allowed
    res.setHeader('Content-Type', 'text/plain');
    res.end('Only GET requests are allowed.');
  }
});

// Start the server and listen on the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
