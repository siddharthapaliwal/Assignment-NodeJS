// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create a list of user objects
const users = [
  { id: 1, name: 'Siddharth Paliwal', email: 'siddharth.paliwal@gmail.com' },
  { id: 2, name: 'Amit Kumar', email: 'amit@gmail.com' },
  { id: 3, name: 'Roshni Jain', email: 'roshni.jain@gmail.com' }
];

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Check if the request is a GET request to /api/users
  if (req.method === 'GET' && req.url === '/api/users') {
    // Set the response HTTP header with status code 200 and content type application/json
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    
    // Send the JSON array of users as a response
    res.end(JSON.stringify(users));
  } else {
    // Handle routes that don't match /api/users or methods other than GET
    res.statusCode = 404; // Not Found
    res.setHeader('Content-Type', 'text/plain');
    res.end('Route not found');
  }
});

// Start the server and listen on the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
