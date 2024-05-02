// lexical environment, scope chain
// ALSO READ FROM THIS BLOG: https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/
/*
1. compilation Phase

2. Execution Phase
    2.1 Creation Phase -> Memory Creation Phase
        -> Global Execution context
        -> Functional Execution context
    2.2 Line By Line code execution

2. Execution Phase
    2.1 Memory Creation Phase
        - window: {key-value pairs}
        - this : window
        - lastName: uniniatilized
        - printName: uniniatlized (as it is function expression)
    2.2 Code Execution Phase
        - after line 1, In MCP, lastName: "Acharya"
        - after line 2, In MCP, printName : function(){as it is}

        - in line 3, a function is called, so function execution context is created
            -> again two phase
                f.1 Local Memory Creation phase
                    - array like object of arguments is created
                    - firstName: uniniatilzed

                f.2 Code Execution Phase
                    - after line 2.1, In LMCP, firstName: "Dhiraj"
                    - after line 2.2, from LMCP, fetch firstName and console it
                    --> in line 2.2, since last name is not in LMCP, so it will go to its parent execution phase
                         and search in its memory (i.e MCP of global execution context)  
                            --> So lastName is lexically present in Global Memory
                            --> if lastName was inide myFunction2() which itself was inside printName(), tehi pani because of 
                                scope chain of lexical environment, we could access lastName
    
*/

const lastName = "Acharya"; //1

const printName = function(){ //2
    const firstName = "Dhiraj"; //2.1
    console.log(firstName); //2.2
    console.log(lastName); //2.3
}

printName(); //3
