//Intro to arrays
/*
-Arrays are reference type data type whereas int, float, etc are primitive data type
-Ordered collection of items
*/

let fruits = ["apple", "mango", "banana", "grapes"];
let numbers = [1,5,8,9,12];
let mixed = [1,2,5,8,"string", null, undefined];
 
console.log(fruits[1]);
console.log(numbers);
console.log(mixed);

//changing the value of element in any index
console.log(fruits);

fruits[2] = "ORANGE";
console.log(fruits);
console.log("******************");
console.log(typeof(fruits)); //this shows-object, since there are many objects in javascript, how would we know whether it is an array or not 

// using the function - Array.isArray(array_name) , we can know whether it is an array or not 
console.log(Array.isArray(fruits));