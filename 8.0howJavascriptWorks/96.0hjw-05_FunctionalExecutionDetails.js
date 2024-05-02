//Functional Execution Context in details

/*
2. Execution Phase
    2.1 Memory Creation Phase
        - window: {key-value pairs}
        - this : window
        - foo: Uniniatilized
        - getFullName: {as it is}
        - personName: uninitialized
    2.2 Code Execution Phase 
        - after line 1 -> in MCP, foo: "foo"
        - after line 2 -> from MCP, it fetched foo and prints it value
        - after line 3 -> in MCP, already stored

        - In Line 4 -> a function is called, so new functional execution context is created
            -> again two phase:
                f.1 Local Memory Creation phase
                    - It has array like object(has indexing and length), i.e arguments = stores all the arguments passed
                    - parameter(or local variable) firstName: first argument "Dhiraj"
                    - lastName: "Acharya"
                    - myvar: uniniatilzed
                    - fullName : uniniatilzed

                f.2 Code Execution Phase
                    - after line 3.1 -> from LMCP, prints array like object, i.e arguments -> arguments = ["Dhiraj", "Acharya"]
                    - after line 3.2 -> In LMCP, mvVar: "var inside func"
                    - after line 3.3 -> from LMCP, fetch myVar and Console it
                    - after line 3.4 -> In LMCP, fullName: "Dhiraj" + " " + "Acharya" -> "Dhiraj Acharya"
                    - after line 3.5 -> return fullName to MCP(personName)
        
        - after Line 4 -> function execution function is deleted, In MCP, personName: "Dhiraj Acharya"
        - after line 5 -> from MCP, it fetches personName and prints it value(Dhiraj Acharya)


*/

let foo = "foo"; //1
console.log(foo); //2
function getFullName(firstName, lastName){ //3 function declaration vayekole as it is store hunxa
    console.log(arguments); //3.1
    let myVar = "var inside func"; //3.2
    console.log(myVar); //3.3
    const fullName = firstName + " " + lastName; //3.4
    return fullName; //3.5
}

const personName = getFullName("Dhiraj", "Acharya"); //4
console.log(personName); //5