const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse the form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form at the root URL
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Submit Form</title>
    </head>
    <body>
        <h2>Submit Your Details</h2>
        <form method="POST" action="/submit">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            <input type="submit" value="Submit">
        </form>
    </body>
    </html>
  `);
});

// Handle form submission at /submit
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // Respond with a success message including the submitted data
  res.send(`<h2>Success!</h2><p>Thank you, ${name}. We have received your email: ${email}</p>`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
