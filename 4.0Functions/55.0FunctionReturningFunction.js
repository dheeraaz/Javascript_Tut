//Function Returning Function

//a function can return anything: string, num , array, objects
//but can it return a function??
function myFunc(){
    return "Dhiraj";
}
let myName = myFunc();
console.log(myName)
console.log("--------------------");

function someFunc(){
    function hello(){
        return "Hello Dhiraj"
    }
    return hello;
}
/* this is also right
function someFunc(){
    return function(){
        return "Hello Dhiraj"
    }
}
*/
const res = someFunc(); //here someFunc() will return a function, which is then stored in a variable(const) 
const res2 = res(); //correct way of calling function
console.log(res2);

console.log(res());
/*
if you are accepting function as input(callback function) or returning a function or doing both at the same time, then it is 
called higher order function
*/
