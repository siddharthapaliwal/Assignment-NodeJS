// Simulate fetching user data from a database
function getUser(userId, callback) {
    setTimeout(() => {
      const user = { id: userId, name: "Siddharth Paliwal" }; // Simulated user data
      callback(null, user); // null for no error, and user data as second argument
    }, 1000); // Simulate delay of 1 second
  }
  
  // Simulate fetching posts of a user
  function getPosts(userId, callback) {
    setTimeout(() => {
      const posts = [
        { userId, title: "Post 1" },
        { userId, title: "Post 2" }
      ]; // Simulated posts
      callback(null, posts); // null for no error, and posts data as second argument
    }, 1000); // Simulate delay of 1 second
  }
  
  // Main function to fetch user and posts data
  function fetchUserData(userId, callback) {
    getUser(userId, (err, user) => {
      if (err) {
        return callback(err); // If error, return callback with error
      }
  
      console.log("User fetched:", user);
  
      getPosts(user.id, (err, posts) => {
        if (err) {
          return callback(err); // If error, return callback with error
        }
  
        console.log("Posts fetched:", posts);
        callback(null, { user, posts }); // Return user and posts data to final callback
      });
    });
  }
  
  // Call the fetchUserData function to simulate fetching data for user ID 1
  fetchUserData(1, (err, data) => {
    if (err) {
      return console.error("Error:", err); // Handle any errors
    }
  
    console.log("Final data:", data); // Show final data
  });
  