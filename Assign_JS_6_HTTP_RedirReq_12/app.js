const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Redirect from /old-page to /new-page
  if (req.url === '/old-page') {
    // Set status code to 302 (Found) for temporary redirection
    res.writeHead(302, {
      'Location': '/new-page' // The URL to redirect to
    });
    res.end();
  }
  // Handle the /new-page route
  else if (req.url === '/new-page') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('You have been redirected to the new page!');
  }
  // Handle the root route (for testing)
  else if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the home page!');
  }
  // Handle any other routes
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
