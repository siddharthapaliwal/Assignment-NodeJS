const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

// Secret key for signing JWT
const JWT_SECRET_KEY = 'your-secret-key';

// Middleware to verify JWT
const jwtMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];  // Extract token from 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.user = decoded;
    next();
  });
};

// Route to login and get a token
app.post('/api/login', (req, res) => {
  const username = 'admin';
  const password = 'password123';

  if (req.body.username === username && req.body.password === password) {
    const token = jwt.sign({ username }, JWT_SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({ message: 'Login successful', token });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

// Public route (no authentication required)
app.get('/api/public', (req, res) => {
  res.status(200).json({ message: 'This is a public route' });
});

// Protected route (authentication required)
app.get('/api/secure', jwtMiddleware, (req, res) => {
  res.status(200).json({ message: 'This is a secured route', user: req.user });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
