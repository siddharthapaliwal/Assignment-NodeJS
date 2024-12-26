// Import the axios library
const axios = require('axios');

// Create an async function to fetch data from a public API
async function fetchData() {
  try {
    // Fetch data from JSONPlaceholder API (for example, fetching posts)
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // Log the fetched data to the console
    console.log('Fetched Data:', response.data);
  } catch (error) {
    // Log any errors that occur
    console.error('Error fetching data:', error.message);
  }
}

// Call the fetchData function
fetchData();
