// Simulating fetching data from an API using async/await
async function fetchData() {
  // Simulate API call with a timeout to mock delay
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: 'Fetched data from mock API' });
    }, 2000);
  });
}

// Async function to fetch and log the data
async function getData() {
  try {
    const result = await fetchData();  // Wait for the promise to resolve
    console.log(result.data); // Output: Fetched data from mock API
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

// Call the getData function
getData();
