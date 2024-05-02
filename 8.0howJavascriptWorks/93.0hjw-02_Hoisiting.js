//Hoisting
/*
-> To access and use the variable(var keyword) and function(function declaration using function keyword) before they are
defined/declared is called hoisting.
-> This is possible because of global context creation during the execution of code
    -> Global context create huda, global memory ma var keyword use garera banako variable suru maii undefined vayera 
       store hunxa ra paxi line by line code execute huda, tyo variable ko value change hunxa.
    -> Similarly, function keyword use garera declare gareko function as it is global memory ma store hunxa, jasle garda 
       yesto function lai suru maii call garna, access garna milxa
NOTE: Let, Const, function expression and arrow function  are not hoisted [actaully they are also hoisted, but slightly in a different
way, let, const, function expression, arrow function are hoisted at top as 'uninitialized'].

function myFuntion(){
    console.log("This is my function");
}
yesari function declare gareko xa vane, Global Context Execution ko creation phase ma yo function as it is store hunxa

var myFunc = function(){
    console.log("This is my function");
}
tara yesari var use garera function expression create gareko xa vaney, creation phase ma suru ma myFunc = undefined store hunxa
ra paxi code execution phase ma, mathi ko code execute vayepaxi matrai myFunc = {console.log('This is my function);} store hunxa

so...
console.log(myFunc); yesle undefined output dinxa
myFunc(); this will give error as, tala ko line execute navaye samma, myFunc is a var which is equal to undefined, myFunc() function banekai xaina
var myFunc = function(){
    console.log("This is my function");
}
console.log(myFunc); yesle purai myFunc() function print gardinxa
myFunc(); yesle function call gardinxa, ra o/p: This is my function
*/
console.log(this);
console.log(window);
console.log(myFunction);
myFunction();
console.log(fullName);
//function declaration
function myFunction(){
    console.log("This is my function");
}


var firstName = "dhiraj";
var lastName = "Acharya";
var fullName = firstName + " " + lastName;
console.log(fullName);

//run this code in browser

