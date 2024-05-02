// how to clone array
//how to conacatenate two arrays

//old methods

//method1

/*
let array1 = ["item1", "item2"];
let array2 = ["item1", "item2"];

//here array1 and array2 are two different arrays
*/

//method2

/*

let array1 = ["item1", "item2"];
let array2 = array1.slice(0);   

//it slices array1 from index0 to index_last and copies to array2

*/

//method3

let array1 = ["item1", "item2"];
let array2 = [].concat(array1);

//here we have concatenated the array1 to empty array and then stored in array2
//so array1 and array2 are different arrays, any change made to array1 is independent to change in array2



