// URL for the JSONPlaceholder posts API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch and log titles of posts
async function fetchPosts() {
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        const posts = await response.json();

        // Loop through the posts and log the title of each post
        posts.forEach(post => {
            console.log(post.title); // Log the title of each post
        });
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching posts:', error);
    }
}

// Call the fetchPosts function
fetchPosts();