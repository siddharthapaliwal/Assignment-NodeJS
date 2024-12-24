// Import required modules
const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();

// Enable CORS for all routes and all domains
app.use(cors());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Example of a restricted CORS configuration (only allows a specific domain)
const corsOptions = {
  origin: 'https://your-frontend-domain.com', // Replace with your allowed domain
  methods: ['GET', 'POST'], // Allow only GET and POST methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
};

// Apply CORS with the custom options to a specific route
app.get('/restricted', cors(corsOptions), (req, res) => {
  res.send('This is a restricted route with CORS enabled.');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
