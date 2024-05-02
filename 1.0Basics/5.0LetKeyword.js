//starting of let keywords
// var and let are similar, but one should use let more than var

let firstName = "Dhiraj", lastName = "Acharya";
console.log(firstName + " " + lastName);

/*
1. redeclaration 

This doesnt give error:
var firstName = "Dhiraj";
var firstName = "Acharya";
This gives error:
let firstName = "Dhiraj";
let firstName = "Acharya";
*/

/*
2. scope | for extra information see: 50.0BlockAndFunctionScope.js

for(let i=0; i<10;i++){
    yesari declare gareko i, yehi loop bhitra matra use hunxa
}


for(var i=0; i<10;i++){
    yesari declare gareko i, loop sakkepaxi, loop vanda bahira pani use hunxa,
}
console.log(i); //this code will output: 9
*/

/*
3. hoisting

- huna chai both var and (let, const) hoisted hunxa
- var chai undefined vayera basxa vaney (let, const) uninitialized vayera basxa

matlab;
x = 5;
console.log(x);
var x; //hoisting; yo declaration chai code ko top ma janxa as x is undefined, so above code will work - tespaxi x = 5 hunxa, ani console wala code successfully chalxa

x = 5;
console.log(x);
let x; 

//yesma chai, let x; top ma gayera basxa, tara x = uninitialized
//since x is uninitialized, x ma 5 assign garna didaina, untill / let x / wala line samma aai pugdaina
//still x is uninitialized, console garni bela error throw garxa

*/