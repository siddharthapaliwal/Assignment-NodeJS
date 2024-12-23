const express = require('express');
const app = express();

// Middleware to parse URL-encoded form data (typical for HTML forms)
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h2>Contact Form</h2>
        <form action="/submit" method="POST">
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

// Handle the form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body;

  // Respond with the submitted data
  res.send(`
    <h2>Form Submission Successful!</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
  `);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
