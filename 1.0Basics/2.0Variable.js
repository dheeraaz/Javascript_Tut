"use strict";
//this line doesnt allow us to create varible without declaring
//if we donot use line:1, we can create variable without using "var" keyword, which can create problem later

/*
suppose we have created a variable;
    let names = "dhiraj";

at some point of time, i want to change the value of names, but i accidently made type error:
    
    name = "ram"; //here, instead of throwing an error, javscript will create a global variable as: var name = "ram"

so it is always recommended to use, "use strict";
*/
/*
similarly loop banauda, yedi hamle let keyword use garna birseu vaney pani yesle prevent garxa
*/

//declaring a variable
var firstName =  "Dhiraj" , lastName = "Acharya";
//Using a varible
console.log(firstName + " " + lastName); 
//changing the value of variable
firstName = "Dheeraaz";
console.log(firstName + " " + lastName); 

/*
myVar = "Check";
console.log(myVar);
*/
