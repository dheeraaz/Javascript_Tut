//some sets method

const numbers = new Set();
numbers.add(1);
numbers.add(3);
numbers.add(6);
numbers.add(2);
numbers.add(9);
console.log(numbers);
console.log("-------------1");

let res = numbers.has(3); //returns true if numbers set has value = 3;
console.log(res);
console.log("-------------2");

for(let value of numbers){
    console.log(value);
} //this proves set is iterable
console.log("-------------3");

//adding 1 to each element of sets

numbers.forEach((value)=>{
    console.log(value**2);
}) //it doesnt change the original set

console.log(numbers);
console.log("-------------4");

//set can be used to remove duplicates from string and array

const myArray = [0,0,1,2,1,4,2,4,5];
const uniqueArray = new Set(myArray);
console.log(myArray);
console.log(uniqueArray);
console.log("-------------5");

const myString = "Samparpan";
let uniqueString = new Set(myString);
console.log(myString);
console.log(uniqueString);
console.log(uniqueString.size); //size method gives the length of set
 