//Array Push Pop 
//for performing operation in the last index of an array


//push function pushes the required element in the last index of array
//similarly pop function pops the last element of an array
let fruits = ["apple", "mango", "banana", "grapes"];
console.log(fruits);
//Push Operation in Array
console.log("After pushing operation");

fruits.push("Orange");  //Array is a mutable function, i.e this function can change the original array
console.log(fruits);

console.log("Now performing pop operation");

fruits.pop(); //it pops and returns the popped the element
console.log(fruits);

let poppedFruit = fruits.pop();
console.log("Popped fruit is "+poppedFruit);