// Simulate fetching data from source 1 (returns a promise)
function fetchData1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() < 0.8; // 80% chance of success
        if (isSuccess) {
          resolve("Data from source 1");
        } else {
          reject("Failed to fetch data from source 1");
        }
      }, 1000); // Simulate 1-second delay
    });
  }
  
  // Simulate fetching data from source 2 (returns a promise)
  function fetchData2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() < 0.8; // 80% chance of success
        if (isSuccess) {
          resolve("Data from source 2");
        } else {
          reject("Failed to fetch data from source 2");
        }
      }, 1500); // Simulate 1.5-second delay
    });
  }
  
  // Simulate fetching data from source 3 (returns a promise)
  function fetchData3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() < 0.8; // 80% chance of success
        if (isSuccess) {
          resolve("Data from source 3");
        } else {
          reject("Failed to fetch data from source 3");
        }
      }, 2000); // Simulate 2-second delay
    });
  }
  
  // Use Promise.all() to wait for all promises to resolve
  Promise.all([fetchData1(), fetchData2(), fetchData3()])
    .then((results) => {
      console.log("All promises resolved:");
      console.log(results); // Log the results of all resolved promises
    })
    .catch((error) => {
      console.error("Error encountered:", error); // Log the first error encountered
    });
  