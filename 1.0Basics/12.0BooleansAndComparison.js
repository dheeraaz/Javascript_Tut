// Booleans and Comparsion Operator

let num1 = 7, num2 = 5, num3 = 9, num4 = 7;

console.log(num1>num2);
console.log(num1>num3);
console.log(num1==num4);

console.log("*****************************");


//difference between == and ===
let num5 = "7";
let num6 = 7;

console.log(num5==num6);
//the output is true because == operator only checks the value, it doesnt compare the data types

//**if you want to check value as well as data types, use ===  **//
console.log(num5===num6);

//similarly, != and !== checks (value only) and (both value and data types) respectively