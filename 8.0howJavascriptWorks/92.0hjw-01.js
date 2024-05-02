// How Javascript Works?

/*
code execution of javascript:
    1. Code Compilation
        1.1 Tokenizing/Lexing
        1.2 Parsing
        1.3 Code Generation
    2. Code Execution

1.Compilation Phase
    1.1 Tokennizing/Lexing
        - Breaking codes into small portions/chunks called tokens.
    1.2 Parsing
        - In this step, all these tokens are inspected and AST(Abstract Syntax Tree) is generated.
    1.3 Code Generation
        - Using AST, an executable code is generated

EcamaScript ko official documentation ma compile garna parxa vanera lekeheko ta xaina tara early errror checking huna parxa vanera
vaneko xa.

!imp
In ES Documentation, following two information can be found:
    Before Executing the code:
        - Early Error Checking
        - Determining Appropriate Scope for variable
    +For performing these two operations, parsing is necessary

Compiling is different for different browser

2. Execution Phase
- In JS, code executes inside execution context

- The very first exection context which is created is global execution context
    Global Execution context
        - Creation Phase(Global Execution Context)
        - Code Execution Phase.

    2.0Code Execution Phase                                         1. Creation Phase(Global Memory) [creation of Global Execution context]
|------------------------------------------------------------------------------------------------------|
| - Line By Execution(Synchronous Programming Lang)      |  window : {key-Value}                       |
|                                                        |                                             |
|  1. console.log(this);                                 |  this: {} (for nodejs env)                  |
|  2. console.log(window);                               |  this: window (for browser)                 |
|  3. console.log(firstName);                            |  firstName: Undefined (only for var)        |
|          o/p: Undefined (from global Context)          |                                             |
|  4. var firstName = "dhiraj";                          |  [suru ma global scope ma vako variables    |
|      - this sets firstName = "dhiraj" in Global-contxt |   lai lerayera yeha rakhxa, var lai         |
|  5. console.log(firstName);                            |   undefined rakhxa, then during execution of|
|          o/p: dhiraj (from global Context)             |   code, variable ko value change garxa]     |
|                                                        |                                             |                                                          
|                                                        |         |-function_name------|              |
|                                                        |         | {purai function    |              |
|                                                        |         |  save hunxa}       |              |
|                                                        |         |                    |              |
|                                                        |         |--------------------|              |
|                                                        |                                             |
--------------------------------------------------------------------------------------------------------  

+Javascript itself is a Synchronous Programming Language - While first line of program is executing, the second line doesn't
start its execution.
+Aynchronous feature of javascript is provided by browser.
*/

console.log(this);
console.log(window);
console.log(firstName);
var firstName = "dhiraj";
console.log(firstName);

hello();

function hello(){
    console.log("Hello");
}

//run this code in browser