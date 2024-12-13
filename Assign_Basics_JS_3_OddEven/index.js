const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a Number : ", (input) => {
  let chnNum = parseInt(input);

  function calculateAge(oddevenno) {
    let chkno;

    if (oddevenno % 2 == 0 ) {
      chkno = "Even";
    } else {
      chkno = "Odd"; // Handle out-of-range scores
    }

    return chkno;
  }

  if (!isNaN(chnNum)) {
    const perChk = calculateAge(chnNum);
    console.log(`No is: ${perChk}`);
  } 
  else {
    console.log("Please enter a valid number.");
  }

  rl.close();
});