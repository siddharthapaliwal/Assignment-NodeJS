const express = require('express');
const app = express();

// In-memory store to track request counts
let requestCounts = {};

// Middleware to limit requests
const rateLimit = (req, res, next) => {
  const userIP = req.ip;  // Track user by IP address (for simplicity)
  const currentTime = Date.now();
  const timeWindow = 60 * 1000; // 1 minute in milliseconds
  const requestLimit = 5; // Limit: 5 requests per minute

  if (!requestCounts[userIP]) {
    requestCounts[userIP] = {
      count: 1,
      firstRequestTime: currentTime,
    };
  } else {
    const userRequests = requestCounts[userIP];
    const timeDiff = currentTime - userRequests.firstRequestTime;

    // If the request is within the time window
    if (timeDiff < timeWindow) {
      if (userRequests.count >= requestLimit) {
        // Limit exceeded
        return res.status(429).json({
          message: 'Too many requests. Please try again later.',
        });
      }
      // Increment the count
      userRequests.count += 1;
    } else {
      // Reset the count if the time window has passed
      requestCounts[userIP] = {
        count: 1,
        firstRequestTime: currentTime,
      };
    }
  }

  // Proceed to the next middleware or route handler
  next();
};

// Apply rate-limiting middleware globally
app.use(rateLimit);

// Sample route to test rate-limiting
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
