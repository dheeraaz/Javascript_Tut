//Block Scope and Function Scope

let myName = "globalName";

{ //block 1
    let myName = "block1_name";
    console.log(myName);
}

{//block2
    let myName = "block2_name"; //if let keyword removed, this will update the value of global variable myName = "block2_name"
    console.log(myName);
}

{//block3
    console.log("******",myName);
}


console.log(myName);

/*
using var, variable defined inside block can be accessed from outside the block.

if the variable is created using var keyword, the block will take the latest value of that variable
output of above code will be(if all the let keywords are replaced by var):
block1_name
block2_name
****** block2_name
block2_name
*/
