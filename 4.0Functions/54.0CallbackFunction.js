//Callback function

function myfunc(a){
    console.log(a);
    console.log("hello,world!");
}

myfunc("abc");
console.log("---------------");
myfunc(55);
console.log("---------------");
myfunc({"firstName":"Dhiraj","age":23});
console.log("--------*********************-------");

//The value of a can be anything: string, numbers, array, objects
//but can it be a function?

//you can name the argument as of your choice: myChoice and while calling it-myChoice()
//but it is better to use its name as callback
function myMyFunc(callback){
    console.log("printing from myMyFunc() function");
    callback("Dhiraj");
    
}

function check(name){
    console.log(`printing from check() function-your name is ${name}`);
}

//important: while passing function as an argument, pass it without parenthesis
myMyFunc(check);