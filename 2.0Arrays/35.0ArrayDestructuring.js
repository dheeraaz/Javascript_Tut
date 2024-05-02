//Array Destructuring 

const myArray = ["value1", "value2", "value3"];
let myVar1 = myArray[0];
let myVar2 = myArray[1];

console.log(`value of var1 is: ${myVar1} and var2 is ${myVar2}`);

console.log("The above task can be done using array destructuring in Javascript");

console.log("-----------------------------");

const fruits = ["apple", "mango", "banana", "grapes"];
let[fruit1, fruit2] = fruits;
console.log("your fruit 1 is: ", fruit1);
console.log("your fruit 2 is: ", fruit2);

//the variable formed by using array destructuring is similar to normal varibles

console.log("--------------------");
//Now if i want to store fruits[0] in f1 and fruits[2] in f2

let [f1, , f2] = fruits;
console.log("your fruit 1 is: ", f1);
console.log("your fruit 3 is: ", f2);

console.log("--------------");
//this will create the new array starting from index 1
let newFruits = fruits.slice(1);
console.log(newFruits);
