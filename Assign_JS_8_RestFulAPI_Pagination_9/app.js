const express = require('express');
const app = express();
const port = 3000;

// Sample data - this could be replaced with a database query
const items = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
}));

// Pagination middleware
app.get('/api/items', (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default page is 1 if not specified
  const limit = parseInt(req.query.limit) || 10; // Default limit is 10 if not specified
  const offset = (page - 1) * limit;

  // Get the paginated items
  const paginatedItems = items.slice(offset, offset + limit);

  // Calculate the total number of pages
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / limit);

  // Send the response
  res.json({
    page,
    limit,
    totalPages,
    totalItems,
    items: paginatedItems,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
