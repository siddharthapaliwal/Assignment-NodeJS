// Simulate fetching user data from a "database"
function getUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId <= 0) {
          reject("Invalid user ID");
          return;
        }
        const user = { id: userId, name: "Siddharth Paliwal" };
        resolve(user); // Resolve with the user object
      }, 1000); // Simulate 1-second delay
    });
  }
  
  // Simulate fetching posts for a user
  function getPosts(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId <= 0) {
          reject("Invalid user ID for posts");
          return;
        }
        const posts = [
          { postId: 1, userId, title: "Post 1" },
          { postId: 2, userId, title: "Post 2" },
        ];
        resolve(posts); // Resolve with the posts
      }, 1000); // Simulate 1-second delay
    });
  }
  
  // Simulate fetching comments for a post
  function getComments(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (postId <= 0) {
          reject("Invalid post ID for comments");
          return;
        }
        const comments = [
          { commentId: 1, postId, text: "Great post!" },
          { commentId: 2, postId, text: "Very informative." },
        ];
        resolve(comments); // Resolve with the comments
      }, 1000); // Simulate 1-second delay
    });
  }
  
  // Main function that chains the operations together
  function fetchUserPostsAndComments(userId) {
    getUser(userId)
      .then((user) => {
        console.log("User fetched:", user);
        return getPosts(user.id); // Fetch posts after user is fetched
      })
      .then((posts) => {
        console.log("Posts fetched:", posts);
        return getComments(posts[0].postId); // Fetch comments for the first post
      })
      .then((comments) => {
        console.log("Comments fetched:", comments);
      })
      .catch((error) => {
        console.error("Error:", error); // Handle any error in the chain
      });
  }
  
  // Call the function to fetch data for userId 1
  fetchUserPostsAndComments(1);
  