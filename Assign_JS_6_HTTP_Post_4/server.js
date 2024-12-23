// Import the http and url modules
const http = require('http');
const { parse } = require('querystring');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Initialize an empty users array
let users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
];

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Handle POST requests to /api/users
  if (req.method === 'POST' && req.url === '/api/users') {
    let body = '';

    // Listen for incoming data chunks and accumulate them in the body variable
    req.on('data', chunk => {
      body += chunk;
    });

    // Once all data is received, parse the body and add a new user
    req.on('end', () => {
      try {
        // Parse the JSON body data
        const newUser = JSON.parse(body);

        // Ensure the new user has required fields
        if (newUser.name && newUser.email) {
          // Add a new user with an incremented ID
          const newId = users.length + 1;
          const userToAdd = { id: newId, ...newUser };
          users.push(userToAdd);

          // Respond with a success message and the newly added user
          res.statusCode = 201; // Created
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ message: 'User created successfully', user: userToAdd }));
        } else {
          // If the new user data is incomplete, respond with an error
          res.statusCode = 400; // Bad Request
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ message: 'Name and email are required fields' }));
        }
      } catch (error) {
        // Handle invalid JSON or other errors
        res.statusCode = 400; // Bad Request
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Invalid JSON format' }));
      }
    });
  } else {
    // Handle any other request types or routes
    res.statusCode = 404; // Not Found
    res.setHeader('Content-Type', 'text/plain');
    res.end('Route not found');
  }
});

// Start the server and listen on the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
