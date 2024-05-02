//closure example 4 // this is important example

function func(){ //1
    let counter = 0; //1.1
    return function(){ //1.2
        if(counter<1){ //1.2.1
            console.log("Hi, You called me") //1.2.2
            counter++; //1.2.3
        }else{ 
            console.log("You already called me") //1.2.4
        }
    }
}





const myFunc = func() //2
myFunc(); //3
myFunc(); //4
myFunc();

console.log("----------------------");
const myFunc2 = func();
myFunc2()
myFunc2()

/*
1. Global Context Exection
    1.1 Memory Creation Phase
        - window: {key value pairs}
        - this: window
        - func: {as it is} //function declaration using function keyword
        - myFunc: uniniatilized

    1.2 Code Execution Phase
        - after line 1, since func() is already present in MCP , so no change
        - after line 2, in MCP, ans = func(){as it is}
        - in Line 3, a function is called, so a function execution context is created
            ->again in two phase
                f1.1 Local Memory Creation phase1
                    - an array like object of arguments is created, i.e arguments = []
                    - counter: uniniatilized
                    - anonymous function: {as it is} 
                f1.2 Code Execution Phase1
                    - after line 1.1, counter : 0
                    - after line 1.2, a function is returned to myFunc of GMCP, not just function but also the LMCP1 [counter=0] is returned to myFunc as closure

        -after Line3, myFunc(){.......} is created along with LMCP1 [counter=0], so function execution context is created for myFunc()
            ->again in two phase
                f2.1 Local Memory Creation phase2
                    - an array like ibject of arguments is created, i.e arguments = [empty]
                f2.2 Code Execution Phase2
                    - after line 1.2.1, it searches for counter in lexical Memory(LMCP2)
                      but it is not found, so it searches in closures memory, i.e inside LMCP1[counter=0] and gets the value of counter
                      which is 0;
                    - Now enters to if condition and prints("Hi, You called me") and increases counter by 1(counter=1)
                    - counter=1 is now stored in LMCP1
        
        - after line 4, myFunc(){.........} along with LMCP1 [counter = 1] is created, so function execution context is created for myFunc()
            ->again in two phase
                f2.1 Local Memory Creation phase2
                    - an array like ibject of arguments is created, i.e arguments = [empty]

                f2.2 Code Execution Phase2
                    - after line 1.2.1, it searches for counter in lexical Memory(LMCP2)
                      but it is not found, so it searches in closures memory, i.e inside LMCP1[counter=1] and gets the value of counter
                      which is 1;
                    - Now enters to else condition and prints("You already called me") and counter=1 remains same in LMCP1
                    
*/