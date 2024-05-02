//undefined datatypes
console.log("THIS IS ABOUT UNDEFINED DATATYPES");
//You can create undefined variable using var and let keywords
//But you cannot create undefined variable with const keyword

var value1;
let value2;
// const value3; //This gives error

console.log(typeof value1);
console.log(typeof value2);

//if we donot assign any values to variable after creating it, then 
//such variable are called undefined

//after assigning value to undefined variable, their type becomes to value stored on them

value1 = 67;
value2 = "any Sentence";
console.log(value1);
console.log(typeof value1);
console.log(value2);
console.log(typeof value2);

//Null datatypes
console.log("THIS IS ABOUT NULL DATATYPES");

let myVariable = null;
console.log(myVariable);
console.log(typeof myVariable);
console.log(typeof null);
console.log("null = object, This is bug of javascript");

myVariable = "meroNaam";
console.log(myVariable);
console.log(typeof myVariable);


//BigInt datatype
console.log("THIS IS ABOUT BIGINT DATATYPES");

let myNumber = 243;
console.log("The maximum value of integer that can be stored in javascript is👇");
console.log(Number.MAX_SAFE_INTEGER);
console.log("if you want to store integer with larger length then use Bigint");

let myNumber2 = BigInt(1234556548465168461384156);
let sameNumber2 = 1234556548465168461384156n;
console.log(typeof myNumber2);
console.log(typeof sameNumber2);
console.log(myNumber2+sameNumber2);

let myNumber3 = BigInt(334);
let myNumber4 = 12;
console.log(myNumber3);
console.log(typeof myNumber3);

// console.log(myNumber3 + myNumber4);
console.log("You cannot perform arithmetic operation between int and bigint");
