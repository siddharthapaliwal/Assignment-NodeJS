const http = require('http');
const fs = require('fs');
const path = require('path');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Define the base directory for static files
  const publicDirectory = path.join(__dirname, 'public');

  // Set the file path based on the URL requested
  let filePath = path.join(publicDirectory, req.url === '/' ? 'index.html' : req.url);

  // Get the file extension to set the correct content type
  const extname = path.extname(filePath);
  let contentType = 'text/html';

  switch (extname) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'application/javascript';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.gif':
      contentType = 'image/gif';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    default:
      contentType = 'text/html';
  }

  // Check if the file exists
  fs.exists(filePath, (exists) => {
    if (exists) {
      // Serve the file if it exists
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(data);
        }
      });
    } else {
      // Return 404 if the file does not exist
      res.writeHead(404);
      res.end('File Not Found');
    }
  });
});

// Listen for incoming requests
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});