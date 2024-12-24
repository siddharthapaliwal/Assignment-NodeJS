// Load environment variables from .env file
require('dotenv').config();

// Import Express
const express = require('express');

// Initialize Express app
const app = express();

// Get environment variables
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;
const SECRET_KEY = process.env.SECRET_KEY;

// Set up a simple route
app.get('/', (req, res) => {
  res.send(`Welcome to my app!`);
});

// Example route that uses the DATABASE_URL
app.get('/database', (req, res) => {
  res.send(`Connecting to database at: ${DATABASE_URL}`);
});

// Example route that uses the SECRET_KEY
app.get('/secret', (req, res) => {
  res.send(`The secret key is: ${SECRET_KEY}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
