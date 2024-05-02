//Lexical scope and Global Scope

//Try using uncommenting const myVar at line 8 and 11

const myVar = "value1";

function myApp(){
    const myVar = "value22";

    function funcFirst(){
        // const myVar = "value33";
        console.log("Inside funcFirst", myVar);

        /*
        whenever a variable is used inside a function, js first tries to find that variable inside own function and uses the same
        variable.
        If such variable is not available inside the function, then js tries to find that varible inside the Lexical environment.
        here funcFirst() is defined inside the myApp(), so for funcFirst(), myApp() is lexical scope
        if it is not found even inside lexical scope(or lexical environment), it will start searching in the lexical scope of myApp()
        or global scope
        */

    }

    console.log(myVar); //if js doesnt find myVar inside myApp(), then it will start searching such variable inside the global scope
    funcFirst();

}

myApp();