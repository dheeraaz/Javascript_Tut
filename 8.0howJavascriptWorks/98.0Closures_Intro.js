//closures in javascript
// https://www.w3schools.com/js/js_function_closures.asp

//info: a function can return a function
/*
function outerFunction(){
    function innerFunction(){
        console.log("hello, world");
    }
    
    return innerFunction;
}

const ans = outerFunction();
console.log(ans); //outputs whole function
ans(); //consoles "hello, world"
*/


//try to analyze the below code like we did previously,i.e global execution context
function printFullName(firstName, lastName){ //1
    function printName(){ //1.1
        console.log(firstName, lastName);//1.1.1
    }
    return printName; //1.2
}

const ans = printFullName("Dhiraj", "Acharya"); //2
ans(); //3

/*
1. Global Context Exection
    1.1 Memory Creation Phase
        - window: {key value pairs}
        - this: window
        - printFullName: {as it is} //function declaration using function keyword
        - ans: uniniatilized

    1.2 Code Execution Phase
        - after line 1, since printFullName is already present in MCP , so no change
        - after line 2, in MCP, ans = printFullName(){as it is}
        - in Line 3, a function is called, so a function execution context is created
            ->again in two phase
                f1.1 Local Memory Creation phase1
                    - an array like object of arguments is created, i.e arguments = ["dhiraj", "acharya"]
                    - firstName: "Dhiraj"
                    - lastName: "Acharya"
                    - printName: {as it is} 
                f1.2 Code Execution Phase1
                    - after line 1.1, no change as, In LMCP1, printName function is present
                    - after line 1.2, printName(){as it is} is returned to ans of G-MCP, and this function execution context is ended

        -after Line3, ans(){console.log(firstName, lastName)} is created, so function execution context is created for ans()
            ->again in two phase
                f2.1 Local Memory Creation phase2
                    - an array like ibject of arguments is create, i.e arguments = [empty]
                f2.2 Code Execution Phase2
                    - after line 1.1.1, it searches for firstName and lastName in lexical Memory(LMCP2)
                      but it is not found, so it searches in GMCP and as we know, firstName and lastName is not present in CMCP
                      but this code works how????
                      -> jaba CEP1 ma printName() function was returned to ans, not only function but LMCP1 was also returned
                         so, it CEP2 ma firstName ra lastName LMCP1 bata access garxa(not from GMCP, not from LMCP2)

    so jaba printName(){ console.log(firstName, lastName); } return vayo tyo sangai LMCP1{arguments=["dhiraj", "acharya"],firstName:.....}
    pani return vayo, yo sabailai closure vaninxa



*/