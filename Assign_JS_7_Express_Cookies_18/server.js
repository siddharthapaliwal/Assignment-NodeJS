const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse cookies
app.use(cookieParser());

// Middleware to manage sessions
app.use(session({
  secret: 'mySecret', // Secret key to sign the session ID cookie
  resave: false,      // Don't save session if it wasn't modified
  saveUninitialized: true, // Save session even if it's not initialized
  cookie: { secure: false } // For development (set to true if using https)
}));

// Set a cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'Siddharth Paliwal', { maxAge: 900000, httpOnly: true });
  res.send('Cookie has been set!');
});

// Get the cookie value
app.get('/get-cookie', (req, res) => {
  const username = req.cookies['username'];
  if (username) {
    res.send(`Hello, ${username}!`);
  } else {
    res.send('No cookie found!');
  }
});

// Set a session variable
app.get('/set-session', (req, res) => {
  req.session.username = 'JohnDoe';
  res.send('Session variable has been set!');
});

// Get session data
app.get('/get-session', (req, res) => {
  if (req.session.username) {
    res.send(`Hello, ${req.session.username}!`);
  } else {
    res.send('No session found!');
  }
});

// Increment a session counter (to show that session data persists across requests)
app.get('/increment-counter', (req, res) => {
  if (!req.session.counter) {
    req.session.counter = 0;
  }
  req.session.counter += 1;
  res.send(`Session counter: ${req.session.counter}`);
});

// Clear a session
app.get('/clear-session', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send('Error clearing session!');
    }
    res.send('Session has been cleared!');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
