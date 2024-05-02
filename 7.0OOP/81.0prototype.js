//Prototype
//__proto__ and prototype are different

/*
javascript function can be treated as both function and object.
*/


function hello(){
    console.log("hello world");
}

console.log(hello.name); //the syntax is similar to object
//it prints the name of function

//you can add your own properties too

hello.myOwnProperty = "very very unique string";

console.log(hello.myOwnProperty);

//function provides an empty space/object called prototype

console.log(hello.prototype);

//only functions provide prototype property