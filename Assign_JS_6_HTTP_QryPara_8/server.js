const http = require('http');
const url = require('url'); // to parse the URL and query parameters

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the incoming request URL
  const parsedUrl = url.parse(req.url, true);
  
  // Check if the request is a GET request to /api/search
  if (parsedUrl.pathname === '/api/search' && req.method === 'GET') {
    // Get the query parameter 'q'
    const searchQuery = parsedUrl.query.q;

    // Check if the query parameter is provided
    if (searchQuery) {
      // Respond with a JSON object containing the search query and message
      const responseObject = {
        message: `You searched for: ${searchQuery}`,
        query: searchQuery
      };

      // Set the response content type to JSON and send the response
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(responseObject));
    } else {
      // If no query parameter is provided, return an error message
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing query parameter q' }));
    }
  } else {
    // Handle 404 for other routes
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

// Start the server on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
