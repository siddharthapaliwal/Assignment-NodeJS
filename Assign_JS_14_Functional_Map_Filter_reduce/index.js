
//Use of Map

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);

console.log("Arry using Map - ")
console.log(doubled); // [2, 4, 6, 8]

console.log("Arry using filter - ")
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); 

console.log("Arry using reduce - ")
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum);