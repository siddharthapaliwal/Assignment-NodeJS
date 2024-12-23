const express = require('express');
const app = express();



// Custom error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);  // Log the error stack to the console

  // Send the error response with the appropriate status and message
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    stack: err.stack,  // Optionally include the stack trace (only in development)
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
