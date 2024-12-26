// Import the required libraries
const express = require('express');
const axios = require('axios');

// Create an instance of the Express app
const app = express();

// Set the port for the server
const port = 3000;

// Create a route that fetches data from an external API
app.get('/fetch-posts', async (req, res) => {
  try {
    // Fetch data from JSONPlaceholder API (posts data)
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    // Return the fetched data as a JSON response
    res.json(response.data);
  } catch (error) {
    // Handle any errors and send an error response
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from the external API' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
