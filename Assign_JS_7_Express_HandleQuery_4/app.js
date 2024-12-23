const express = require('express');
const app = express();

// Route to handle query parameters
app.get('/search', (req, res) => {
  // Access query parameters using req.query
  const { term, category, page } = req.query;
  
  // If no query parameters are provided, set default values
  if (!term) {
    return res.status(400).send('Missing required query parameter: term');
  }
  
  // Create a response based on the query parameters
  const response = {
    searchTerm: term,
    category: category || 'All categories',  // Default to 'All categories' if not provided
    page: page || 1,                         // Default to page 1 if not provided
  };

  res.json(response);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
