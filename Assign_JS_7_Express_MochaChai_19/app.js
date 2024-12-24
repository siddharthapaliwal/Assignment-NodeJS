const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for JSON requests
app.use(express.json());

// A sample route: GET /hello
app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

// A sample route: POST /data
app.post('/data', (req, res) => {
  const { name, age } = req.body;
  
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }

  res.status(201).json({ message: 'Data received', data: { name, age } });
});

// A route that causes an error: GET /error
app.get('/error', (req, res) => {
  throw new Error('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Export the app for testing
