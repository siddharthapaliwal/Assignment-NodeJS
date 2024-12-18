// Define an array of objects representing different books
const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Moby Dick', author: 'Herman Melville', year: 1851 }
];

// Use a loop to display the title of each book in the array
console.log('Book Titles:');
for (let i = 0; i < books.length; i++) {
    console.log(books[i].title);
}