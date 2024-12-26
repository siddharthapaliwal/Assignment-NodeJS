// Import the required libraries
const express = require('express');

// Initialize the Express app
const app = express();

// Define the port to listen on
const PORT = process.env.PORT || 3000; // Default to port 3000 if not specified in environment variables

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
