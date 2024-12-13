const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Your age : ", (input) => {
  let studentAge = parseInt(input);

  function calculateAge(age) {
    let perAge;

    if (age >= 0 && age <= 12) {
        perAge = "Child";
    } else if (age >= 13 && age <= 19) {
        perAge = "Teen";
    } else if (age >= 20 && age <= 64) {
        perAge = "Adult";
    } else if (age >= 60) {
        perAge = "Senior";
    }
        else {
        perAge = "Invalid score"; // Handle out-of-range scores
    }

    return perAge;
  }

  if (!isNaN(studentAge)) {
    const perAge = calculateAge(studentAge);
    console.log(`Your Age Group is: ${perAge}`);
  } 
  else {
    console.log("Please enter a valid number.");
  }

  rl.close();
});