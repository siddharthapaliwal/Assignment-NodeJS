const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a Week Number : ", (input) => {
  let chnNum = parseInt(input);

  function calculateAge(chkwno) {
    let wkno;

   switch (chkwno)
   {
        case 1:
            wkno ="Monday";
            break;
        case 2:
            wkno ="Tuesday";
            break;
        case 3:
            wkno ="Wednesday";
            break;
        case 4:
            wkno ="Thursday";
            break;
        case 5:
            wkno ="Friday";
            break;
        case 6:
            wkno ="Saturday";
            break;
        case 7:
            wkno ="Sunday";
            break;
        default:
            wkno ="Wrong Choice";
   }

    return wkno;
  }

  if (!isNaN(chnNum)) {
    const perChk = calculateAge(chnNum);
    console.log(`Day is: ${perChk}`);
  } 
  else {
    console.log("Please enter a valid number.");
  }

  rl.close();
});