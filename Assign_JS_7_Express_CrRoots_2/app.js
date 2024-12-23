const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route 1: Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Home page!');
});

// Route 2: About page
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Route 3: Contact page (GET)
app.get('/contact', (req, res) => {
  res.send('This is the Contact page.');
});



// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
