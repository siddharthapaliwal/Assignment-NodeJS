const express = require('express');
const app = express();

// Custom Middleware 1: Log request details
function logRequestDetails(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} request made to: ${req.originalUrl}`);
  next();  // Pass control to the next middleware or route handler
}

// Custom Middleware 2: Validate if the user is logged in
function checkAuthentication(req, res, next) {
  const isAuthenticated = req.headers['authorization']; // Check for 'authorization' header
  
  if (isAuthenticated) {
    console.log('User authenticated!');
    next();  // User is authenticated, pass control to the next middleware or route handler
  } else {
    res.status(403).send('Unauthorized: No token provided');
  }
}

// Use custom middleware for all routes
app.use(logRequestDetails);

// Route 1: Home page (Accessible without authentication)
app.get('/', (req, res) => {
  res.send('Welcome to the Home page!');
});

// Route 2: About page (Accessible without authentication)
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Route 3: Protected page (Requires authentication)
app.get('/protected', checkAuthentication, (req, res) => {
  res.send('This is the protected page, only accessible if authenticated.');
});

// Route 4: Custom route to log additional information
app.get('/log-example', (req, res) => {
  res.send('This route logs additional info using custom middleware.');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
