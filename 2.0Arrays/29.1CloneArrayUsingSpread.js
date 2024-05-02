//new and easy method of copying/cloning an array 

//for this we use spread operator
// spread operator==> ...

let array1 = ["item1", "item2"];
let array2 = [...array1];

console.log("before push operation");

console.log(array1);
console.log(array2);

console.log("after pushing item3 to array1 and item4 to array2");

array1.push("item3");
array2.push("item4");

console.log(array1);
console.log(array2);