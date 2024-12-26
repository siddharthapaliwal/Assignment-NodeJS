// Simulate fetching user data from a "database" using async/await
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
  
  // Simulate fetching posts for a user using async/await
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
  
  // Simulate fetching comments for a post using async/await
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
  
  // Main function using async/await to chain the operations
  async function fetchUserPostsAndComments(userId) {
    try {
      // Fetch user data
      const user = await getUser(userId);
      console.log("User fetched:", user);
  
      // Fetch posts for the user
      const posts = await getPosts(user.id);
      console.log("Posts fetched:", posts);
  
      // Fetch comments for the first post
      const comments = await getComments(posts[0].postId);
      console.log("Comments fetched:", comments);
  
      // Return final data
      return { user, posts, comments };
    } catch (error) {
      // Handle any errors that occur in the async/await chain
      console.error("Error:", error);
    }
  }
  
  // Call the async function to fetch data for userId 1
  fetchUserPostsAndComments(1)
    .then((data) => {
      if (data) {
        console.log("Final data:", data); // Display the final data
      }
    })
    .catch((error) => {
      console.error("Final error:", error); // Catch any errors at the end
    });
  