const express = require('express');
const app = express();

// Custom middleware for logging request details
function logRequestDetails(req, res, next) {
  const method = req.method; // GET, POST, etc.
  const url = req.originalUrl; // Full URL of the request
  const timestamp = new Date().toISOString(); // Timestamp in ISO format

  console.log(`[${timestamp}] ${method} request to ${url}`);
  
  next(); // Proceed to the next middleware or route handler
}

// Apply the custom logging middleware globally
app.use(logRequestDetails);

// Example route to test the logging middleware
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Example POST route
app.post('/contact', (req, res) => {
  res.send('Thank you for contacting us!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
