//Function Expression
//assigning function to a variable

/*
function first(){
    console.log("Hello, World!");
}
*/

const first = function(){
    console.log("Hello,World!");
}

first();

const sum2=function(a,b){
    return a+b;
}

console.log("The sum of 5 and 3 is: ",sum2(5,3));

console.log("-----------------------");

const isEven = function(num){
    if(num%2===0){
        return true;
    }
    return false
    //or this is best approach
    // return num%2===0;
}

let chkNum = 6;
if(isEven(chkNum)){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}