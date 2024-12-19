const calculator = require('./calc');
const prinjs = require('./print');
const ser = require('./series');


let x = 50, y = 20;

console.log("Addition of "+ x + " and "+ y + " is "
    + calculator.add(x, y));

console.log("Sub of "+ x + " and "+ y + " is "
    + calculator.sub(x, y));

console.log("Multiplication of "+ x + " and "+ y + " is "
    + calculator.mult(x, y));

console.log("Division of "+ x + " and "+ y + " is "
    + calculator.div(x, y));

    prinjs.print("Hello this is second module");
    ser.print(5);