// Simulate fetching user data from a database using Promise
function getUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId <= 0) {
          reject("Invalid user ID");
          return;
        }
        const user = { id: userId, name: "Siddharth Paliwal" }; // Simulated user data
        resolve(user); // Resolving the user object as the promise result
      }, 1000); // Simulate delay of 1 second
    });
  }
  
  // Simulate fetching posts of a user using Promise
  function getPosts(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId <= 0) {
          reject("Invalid user ID for posts");
          return;
        }
        const posts = [
          { userId, title: "Post 1" },
          { userId, title: "Post 2" }
        ]; // Simulated posts
        resolve(posts); // Resolving the posts as the promise result
      }, 1000); // Simulate delay of 1 second
    });
  }
  
  // Main function to fetch user and posts data using promises
  function fetchUserData(userId) {
    return getUser(userId)
      .then((user) => {
        console.log("User fetched:", user);
        return getPosts(user.id); // Returning the promise for fetching posts
      })
      .then((posts) => {
        console.log("Posts fetched:", posts);
        return { user, posts }; // Returning user and posts data together
      })
      .catch((err) => {
        console.error("Error:", err); // Handling errors (from either getUser or getPosts)
      });
  }
  
  // Call the fetchUserData function to simulate fetching data for user ID 1
  fetchUserData(1)
    .then((data) => {
      if (data) {
        console.log("Final data:", data); // Display the final user and posts data
      }
    })
    .catch((err) => {
      console.error("Final error:", err); // Catch any final errors
    });
  