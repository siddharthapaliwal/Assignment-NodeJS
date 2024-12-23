const express = require('express');
const app = express();
const port = 3000;

// Middleware to handle parsing of JSON request bodies
app.use(express.json());

// Example route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Example route for another valid page
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// 404 middleware to handle undefined routes
app.use((req, res, next) => {
  res.status(404).send('404 Not Found - The requested route does not exist.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
