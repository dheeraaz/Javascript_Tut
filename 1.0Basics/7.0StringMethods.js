/*
trim()
toUpperCase()
toLowerCase()
slice()
*/

let firstName = " dhiraj ";
//to remove the spaces before and after the string, we use trim()
console.log("Length of the string with spaces is " + firstName.length);
firstName.trim();
console.log("Length of the string is " + firstName.length);
//this will still give the value = 8, because firstName.trim() gives the new string
//In that case, either we use same firstName to store the new string or we can create another variable

firstName = firstName.trim();
console.log("Length of the string without spaces is " + firstName.length);

//Imp: Trim function ley agadi ra paxadi ko matra space hatauxa, bich tira ko hataudaina

//Now changing the dhiraj to upppercase

firstName = firstName.toUpperCase();
console.log("Converting 'dhiraj' to uppercase " + firstName);

firstName = firstName.toLowerCase();
console.log("Converting 'DHIRAJ' to uppercase " + firstName);

// newString = oldString.slice(startIndex, endIndex);
// it will slice the string between startIndex and endIndex

firstName = firstName.slice(3,6);
console.log("slicing dhiraj from index 3 to 6 " + firstName);


