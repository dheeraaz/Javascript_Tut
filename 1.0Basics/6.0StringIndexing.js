let firstName = "dhiraj";
let length;
/* 
d   h   i   r   a   j
0   1   2   3   4   5
*/
/* 
length of string
firstName.length
*/
/*
firstIndex = firstName[0]
lastIndex = length - 1;
*/

length = firstName.length;

console.log("your string is: " + "'" + firstName + "'");
console.log("length of the string is " + length);
console.log("first index of your string is " + firstName[0]);
console.log("last index of your string is " + firstName[(length-1)]);

//yesle name ko latest index dinxa
let checkLine = "My name is Dhiraj name";
let checkValue;

checkValue = checkLine.lastIndexOf("name");
console.log(checkValue);
