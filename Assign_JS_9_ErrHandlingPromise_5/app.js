// Simulate fetching data and randomly throw an error

function fetchData() {
    return new Promise((resolve, reject) => {
      const shouldFail = Math.random() < 0.5; // 50% chance of failure
      
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error("Something went wrong while fetching data!"));
        } else {
            
          resolve("Data fetched successfully!");
        }
      }, 1000); // Simulate a delay of 1 second
    });
  }
  
  // Calling the fetchData function and handling errors with .catch()
  fetchData()
    .then((result) => {
      console.log(result); // Log success message if no error occurs
      
    })
    .catch((error) => {
      console.error("Error encountered:", error.message); // Log the error message if there's an error
      
    });
  