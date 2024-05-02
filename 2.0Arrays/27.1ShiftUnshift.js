//Shift and unshift in an array
//for adding and deleting element from the starting 

let fruits = ["apple", "mango", "banana", "grapes"];
console.log(fruits);

//for adding element from the starting

fruits.unshift("ORANGE-X", "ORANGE");
console.log(fruits);

//for removing element from the starting
fruits.shift();
console.log(fruits);

let removedFruit = fruits.shift();
console.log(removedFruit);
console.log(fruits);

/* 
NOTE:
-push and pop operation is relatively faster than shift and unshift
-This because push/pop method operates in last index of an array and can directly add and remove element from the last index
-But shift/unshift method operates in first index of an array, so whenever any element is to be added ,every other element of an  has to shift their position by one and so for deleting element from first index
 
*/
