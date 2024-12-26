// Importing necessary modules
const express = require('express');
const app = express();
const port = 3000;

// Logging Middleware
const logRequest = (req, res, next) => {
  const method = req.method;        // The HTTP method (GET, POST, etc.)
  const url = req.originalUrl;       // The requested URL
  const timestamp = new Date().toISOString();  // The current timestamp in ISO format

  // Log the request details to the console
  console.log(`[${timestamp}] ${method} ${url}`);

  // Call the next middleware/handler in the stack
  next();
};

// Apply the logging middleware globally to all incoming requests
app.use(logRequest);

// Sample route: GET request
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Another route: GET request
app.get('/api/users', (req, res) => {
  res.json({ message: 'List of users' });
});

// POST request route
app.post('/api/users', (req, res) => {
  res.json({ message: 'User created successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
