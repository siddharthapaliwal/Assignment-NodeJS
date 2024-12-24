// Import required modules
const express = require('express');
const rateLimit = require('express-rate-limit');

// Initialize Express app
const app = express();

// Rate limiting middleware configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
  headers: true,
});

// Apply rate-limiting middleware to all routes
app.use(limiter);

// Set up a simple route
app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

// Example of another route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Here is your data!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
