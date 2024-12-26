const axios = require('axios');
const fs = require('fs').promises;

// Simulate an asynchronous function that reads a file
async function readFile(fileName) {
  try {
    const data = await fs.readFile(fileName, 'utf8');
    console.log('File content:', data);
  } catch (error) {
    console.error('Error reading file:', error.message);
  }
}

// Simulate an asynchronous function that makes an HTTP request
async function fetchDataFromAPI(url) {
  try {
    const response = await axios.get(url);
    console.log('API Response:', response.data);
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
  }
}

// Simulate an asynchronous function with Promise rejection
function fetchDataWithPromise(url) {
  axios.get(url)
    .then(response => {
      console.log('API Response:', response.data);
    })
    .catch(error => {
      console.error('Error fetching data with Promise:', error.message);
    });
}

// Function to simulate some asynchronous tasks
async function runApp() {
  // Read from a file (assuming `sample.txt` exists in the same directory)
  await readFile('sample.txt');

  // Fetch data from a sample API (JSONPlaceholder)
  await fetchDataFromAPI('https://jsonplaceholder.typicode.com/posts/1');

  // Simulate another async operation with promise handling
  fetchDataWithPromise('https://jsonplaceholder.typicode.com/posts/2');
}

runApp().catch(error => {
  console.error('An unexpected error occurred in runApp:', error.message);
});
