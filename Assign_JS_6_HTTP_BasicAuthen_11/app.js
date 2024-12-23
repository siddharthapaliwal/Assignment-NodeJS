const express = require('express');
const app = express();

// In-memory storage for users (for demonstration purposes)
const users = {
  'admin': 'password123',  // example username: admin, password: password123
  'user1': 'securepass456' // example username: user1, password: securepass456
};

// Middleware to check for Basic Authentication
const basicAuth = (req, res, next) => {
  // Get the 'Authorization' header
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized: No credentials provided' });
  }

  // Decode the 'Authorization' header (format: Basic base64encoded(username:password))
  const [authType, encodedCredentials] = authHeader.split(' ');

  if (authType !== 'Basic' || !encodedCredentials) {
    return res.status(401).json({ message: 'Unauthorized: Invalid authentication format' });
  }

  // Decode the base64 encoded username:password
  const credentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8');
  const [username, password] = credentials.split(':');

  // Validate the credentials
  if (users[username] && users[username] === passfword) {
    return next();  // If valid, proceed to the next middleware or route handler
  } else {
    return res.status(401).json({ message: 'Unauthorized: Invalid username or password' });
  }
};

// Example route to test basic authentication
app.get('/api/protected', basicAuth, (req, res) => {
  res.json({ message: 'You have accessed a protected route!' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
