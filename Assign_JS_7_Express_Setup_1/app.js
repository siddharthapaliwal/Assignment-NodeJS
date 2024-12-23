// Import the express module
const express = require('express');

// Create an instance of the express app
const app = express();

// Define a basic route that handles GET requests at the root ('/')
app.get('/', (req, res) => {
  res.send('Hello, World! This is a basic Express server.');
});

// Define another route for testing (e.g., '/about')
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
