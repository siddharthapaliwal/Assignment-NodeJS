const express = require('express'); // Import Express module
const app = express(); // Initialize Express application

const PORT = process.env.PORT || 3000; // Set port to 3000 or use the environment port if available

// Define a simple GET route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API!' }); // Send a JSON response
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
