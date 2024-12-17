// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Convert the string to lowercase to make the check case-insensitive
    str = str.toLowerCase();

    // Reverse the string
    let reversedStr = str.split('').reverse().join('');

    // Compare the original string with the reversed string
    if (str === reversedStr) {
        return true;
    } else {
        return false;
    }
}

// Prompt the user for input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string to check if it's a palindrome: ", function (str) {
    // Call the isPalindrome function
    if (isPalindrome(str)) {
        console.log(`'${str}' is a palindrome.`);
    } else {
        console.log(`'${str}' is not a palindrome.`);
    }

    rl.close();
});
// node Node34.JS  