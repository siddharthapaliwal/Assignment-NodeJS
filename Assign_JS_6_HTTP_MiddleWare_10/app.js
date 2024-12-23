const express = require('express');
const app = express();

// Middleware function to log the request method and URL
const logRequestDetails = (req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // Pass control to the next middleware or route handler
};

// Use the middleware for all incoming requests
app.use(logRequestDetails);

// Example route for the API
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Another example route
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Example POST route
app.post('/submit', (req, res) => {
  res.send('Form submitted!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
