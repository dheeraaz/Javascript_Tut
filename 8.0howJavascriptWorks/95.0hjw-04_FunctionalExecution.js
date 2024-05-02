//Functional Execution Context

/*
How Javascript WWorks?
-> In two phases:
    1. Compilation Phase
        1.1 Early Error Checking
        1.2 Determining Appropriate Scope for variable
    2. Execution Phase
        - In order to execute JS code, JS creates execution context;
            2.1 Creation(of execution context) Phase ->(after) Memory Creation [combinely, lets say memory creation phase]
                2.1.1 Global Execution Context
                2.1.2 Functional Execution Context ##
            2.2 Line by Line Code Execution [lets say, code execution phase]

Compilation Phase
-> In early error checking phase, compiler doesnt find any error in the following code
-> In varaible scope determination, compiler sets the scope of firstName, lastName and myFunction() as global scope.
    -> For var1 and var2, compiler sets the scope as functional scope.

*/


console.log("Hello World");
let firstName = "Dhiraj";
let lastName = "Acharya";

const myFunction = function(){
    let varl = "First Variable";
    let var2 = "Second Variable";
    console.log(varl);
    console.log(var2);
}

myFunction();