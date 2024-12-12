/*
1. Run Command to install express - npm install express
2. npm i nodemon -g for nodemon
3. Execute following code for server output.
*/


const express = require('express');
const app = express();
const port = 3000;

// A simple route to respond to GET requests
app.get('/', (req, res) => {
    res.send('Hello, Node.js with Express and Nodemon!');
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});