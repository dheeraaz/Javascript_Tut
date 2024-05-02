//Are let and const are hoisted??
/*
var firstName = "Dhiraj";
->yesari variable create garda, global context execution ko creation phase(global memory) ma suru ma firstName = undefined store hunxa
-> ra tespaxi code execution phase ma janxa ra, firstName = "Dhiraj" line execute vayepaxi firstName undefined bata Dhiraj set hunxa

let firstName = "Dhiraj";
->yesko case ma chai, creation phase ma firstName=uninitialized set hunxa
->now code execution phase ma gayepxai
-> console.log(firstName); aba firstName global memory ma herxa, which is uniniatilzed dekhxa ra error show garxa
-> jaba samma uninitialized variable lai initialize garidaina, taba samma tyo variable use garna mildaina
same for const
*/

//yes const and let are hoisted(global context memory ma present hunu) but they are uninitialized 


console.log(firstName); //Uncaught ReferenceError: Cannot access 'firstName' before initialization
let firstName = "Dhiraj";
console.log(firstName);

/*
//this is legit code

let myVar1;
console.log(myVar1); // o/p undefined aauxa
*/

/*
//this gives error

const myVar1;
console.log(myVar1); // o/p: error
*/