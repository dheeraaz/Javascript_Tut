//Arrow Function
//it is similar to function expression except for the change that instead of using function, we use arrow 
// it is mainly used in reactjs


/*
function first(){
    console.log("Hello, World!");
}
*/

const first = ()=>{
    console.log("Hello,World!");
}

first();

const sum2 = (a,b)=>{
    return a+b;
}
/*
if the function is returning only item without other code, then we can create the function using arrow function as below:

const sum2 = (a,b)=>a+b;

*/

console.log("The sum of 5 and 3 is: ",sum2(5,3));
console.log("The sum of 3 and 3 is: ",sum2(3,3));

console.log("-----------------------");

const isEven = (num)=>{
    if(num%2===0){
        return true;
    }
    return false
    //or this is best approach
    // return num%2===0;
}

/*
best example of arrow function
if the function is taking only one argument and returning something without extra code, 
you can remove parenthesis() of argument, curly braces{} and return keyword

const isEven = num => num%2===0;

*/

// const isEven = num => num%2===0;

let chkNum = 6;
if(isEven(chkNum)){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}