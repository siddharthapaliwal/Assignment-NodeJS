const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route that might throw an error
app.get('/api/items', (req, res) => {
  // Simulate an error
  throw new Error('Something went wrong while fetching items!');
});

// Another route
app.get('/api/users', (req, res) => {
  res.status(200).json({ message: 'Users fetched successfully' });
});

// Simulated route for testing error handling
app.get('/api/test-error', (req, res) => {
  // Intentionally throwing an error
  throw new Error('This is a simulated error for testing.');
});

// Error-handling middleware (must be placed after all routes)
app.use((err, req, res, next) => {
  // Log the error (you can extend this to log to a file or an error tracking service)
  console.error(err);

  // Respond with a JSON error message
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
