// primitive vs reference type

//primitive type
let num1 = 6;
let num2 = num1;

console.log("value of num1 is", num1);
console.log("value of num2 is", num2);

num1++;
console.log("after incrementing num1");
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);

console.log("------------------------------");

//reference type
let array1 = ["item1", "item2"];
let array2 = array1;

console.log("array1", array1);
console.log("array2", array2);

array1.push("item3");

console.log("Pushing item3 at the end of array1 only");

console.log("array1", array1);
console.log("array2", array2);

/*
here array1 and array2 are same array.
first of all, array1 is stored in heap and in stack array1 has the address of first element of an array1
now after assigning array1 to array2, the address of first element of array1 is assigned to array2
now both array1 and array2 has the address of first element of array1
in heap memory, there is only one array


array1--------------> ["item1", "item2"]
                   |
array2-------------|

using the name array1 or array2, we are actually accessing the same array
*/