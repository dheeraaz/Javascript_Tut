// data types (primitives data types)
// string, number, booleans, undefined, null
// BigInt, Symbol

/*
Primitives data types: 1. They are fundamental data types provided by javascript 
                          itself.
                       2. They are built in data types
                       3. There are seven primitives data types:
                            N:Null
                            N:Number
                            B:Boolean
                            B:Big Int
                            S:Symbol
                            S:String
                            U:Undefined

                        4. tricks to remember: BUNS7-->BBUNNSS7


*/

let age = 23, firstName = "Dhiraj";
console.log("Demonstration of typeof operator");
console.log(typeof(age));
console.log(typeof(firstName));
console.log(typeof("Ram"));


console.log("converting number to string");
//converting number to string
//--> add empty string to number 
age = age + "";
console.log(age);
console.log(typeof age);

console.log("converting string to number");
//converting string to number
//put + or - operator before string
let myString = "34";
console.log(myString);
console.log(typeof myString);
myString = +"34";
console.log(typeof myString);


//simple method of converting string to number and vice-versa
let str = "100";
let num = 32;
console.log(str);
console.log(typeof str);
console.log(num);
console.log(typeof num);
console.log("Now conversion starts");

str = Number(str);
console.log(str);
console.log(typeof str);

num = String(num);
console.log(num);
console.log(typeof num);
