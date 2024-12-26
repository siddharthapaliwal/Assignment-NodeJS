// Simulate fetching data with a timeout of 1 second (returns a promise)
function fetchData1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data from fetchData1 (resolved in 1 second)");
      }, 1000); // 1 second delay
    });
  }
  
  // Simulate fetching data with a timeout of 3 seconds (returns a promise)
  function fetchData2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data from fetchData2 (resolved in 3 seconds)");
      }, 3000); // 3 seconds delay
    });
  }
  
  // Use Promise.race() to get the result of the first promise that resolves
  Promise.race([fetchData1(), fetchData2()])
    .then((result) => {
      console.log("Winning Promise Result:", result); // Log the result of the winning promise
    })
    .catch((error) => {
      console.error("Error encountered:", error); // Handle any rejection (if any promise rejects)
    });
  