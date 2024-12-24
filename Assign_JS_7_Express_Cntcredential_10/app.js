// server.js

const express = require('express');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Middleware to parse JSON data from request body
app.use(bodyParser.json());

// Hardcoded credentials (for simplicity)
const validCredentials = {
  username: 'admin',
  password: 'password123'
};

// Set up a POST route for login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Validate if both username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Check if credentials match the hardcoded values
  if (username === validCredentials.username && password === validCredentials.password) {
    return res.status(200).json({ message: 'Login successful!' });
  } else {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Set up the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
