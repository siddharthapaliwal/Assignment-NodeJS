let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log("1st Arrey Before Combine - ")
console.log(arr1); 
console.log("2nd Arrey Before Combine - ")
console.log(arr2); 



let combineArr = [...arr1, ...arr2];
console.log("Arrey After Combine using spread op - ")
console.log(combineArr); // [1, 2, 3, 4, 5, 6]

