//closures exxampple 2

function hello(x){ //1
    const a = "varA"; //1.1
    const b = "varB"; //1.2

    return function(){ //1.3
        console.log(a, b, x); //1.3.1
    }
}

const ans = hello("arg"); //2
ans(); //3
/*
1. Global Context Exection
    1.1 Memory Creation Phase
        - window: {key value pairs}
        - this: window
        - hello: {as it is} //function declaration using function keyword
        - ans: uniniatilized

    1.2 Code Execution Phase
        - after line 1, since hello(x) is already present in MCP , so no change
        - after line 2, in MCP, ans = hello("arg"){as it is}
        - in Line 3, a function is called, so a function execution context is created
            ->again in two phase
                f1.1 Local Memory Creation phase1
                    - an array like object of arguments is created, i.e arguments = ["arg",]
                    - x: arg
                    - a: uniniatilized
                    - b: uniniatilized
                    - anonymous function: {as it is} 
                f1.2 Code Execution Phase1
                    - after line 1.1, a: "varA"
                    - after line 1.2, b: "varB" 
                    - after line 1.3, a function is returned to ans of GMCP, not just function but also the LMCP1 [a:"varA", b:"varB", x:"arg"] is returned to ans as closure

        -after Line3, ans(){console.log(a,b,x)} is created along with LMCP1, so function execution context is created for ans()
            ->again in two phase
                f2.1 Local Memory Creation phase2
                    - an array like ibject of arguments is created, i.e arguments = [empty]
                f2.2 Code Execution Phase2
                    - after line 1.3.1, it searches for a, b, x in lexical Memory(LMCP2)
                      but it is not found, so it searches in closures memory, i.e inside LMCP1[a:"varA", b:"varB", x:"arg"] and prints from it 

 



*/
