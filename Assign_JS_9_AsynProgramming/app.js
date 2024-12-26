const getUser = (userId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = { id: userId, name: "Siddharth Paliwal" };
        resolve(user); // Resolving the user object
      }, 1000);
    });
  };
  
  const getPosts = (userId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const posts = [
          { userId, title: "Post 1" },
          { userId, title: "Post 2" },
        ];
        resolve(posts); // Resolving the posts
      }, 1000);
    });
  };
  
  // Using Async/Await
  const fetchUserAndPosts = async (userId) => {
    try {
      const user = await getUser(userId); // Wait for getUser to resolve
      console.log("User fetched:", user);
      
      const posts = await getPosts(user.id); // Wait for getPosts to resolve
      console.log("Posts fetched:", posts);
    } catch (err) {
      console.log("Error:", err); // Error handling
    }
  };
  
  // Calling the async function
  fetchUserAndPosts(1);
  