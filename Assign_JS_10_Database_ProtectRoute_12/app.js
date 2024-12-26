const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const authenticateToken = require('./middleware/authMiddleware');

// Initialize Express app
const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON

// Simulate a user database (For demonstration)
const users = [
  { id: 1, username: 'Siddharth', email: 'sid.paliwal1989@gmail.com' },
  { id: 2, username: 'Rohit', email: 'rohit@gmail.com' },
];

// Route to simulate login and generate a JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // In a real-world scenario, you would validate the username and password with a database.
  if (username === 'Siddharth' && password === 'password123') {
    const user = { username };
    const token = jwt.sign(user, 'your_jwt_secret_key', { expiresIn: '1h' });
    return res.json({ message: 'Login successful', token });
  } else {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
});

// Protected /users route that only authenticated users can access
app.get('/users', authenticateToken, (req, res) => {
  // Only authenticated users can access the /users route
  res.json({ message: 'Access granted to users data', users: users, user: req.user });
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
