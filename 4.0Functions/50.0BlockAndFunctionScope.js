//Block Scope and Function Scope

//let and const are block scope
//var is function scope(or global scope)

// let firstName = "Ram"; //try by commenting and uncommenting this line
{ //block 1
    let firstName = "Dhiraj"; //try by commenting and uncommenting this line
    console.log(firstName);
}

// console.log(firstName); 

/*
This will give an error(if line 6 is commented) as let and const and block scope,i.e they can only be accessed inside the 
same block where they are defined
But they also support lexical and global scope
*/

/*
if firstName variable was created using var keyword, it can be accessed outside the block too.

tara function bhitra var use gareko xa vaney chai, function bahira use garna mildaina
*/


{//block2

}