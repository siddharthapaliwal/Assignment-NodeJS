// URL for the JSONPlaceholder posts API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch and display posts
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

        // Log or process the posts data
        console.log(posts);
        
        // Optionally, you can display the posts in the browser, e.g., on the webpage:
        displayPosts(posts);
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching posts:', error);
    }
}

// Function to display posts on the webpage (optional)
function displayPosts(posts) {
    const postsContainer = document.getElementById('postsContainer');

    // Loop through the posts and create elements for them
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Call the fetchPosts function when the page loads
document.addEventListener('DOMContentLoaded', fetchPosts);
