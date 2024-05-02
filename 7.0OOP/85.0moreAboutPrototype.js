//more about prototype 
//yo information khasai kaam xaina

let numbers = [1, 2, 3];
/*
- this numbers array provide many methods such as: shift, unshift, push, pop, map
- all these methods are provided using prototype
- but prototype are only provided by function
- so internally above code is: let numbers = new Array(1,2,3)
- Array is a function which has many methods in prototypes

*/

Array.prototype["check"] = function(){
    console.log("my name is Dhiraj");
}

numbers.check();

console.log(Object.getPrototypeOf(numbers)); //see this line from browsers
//yesko output ma array of methods -> prototype
// in js array is also an object

console.log(typeof numbers);

console.log(numbers.prototype);
console.log(Array.prototype);