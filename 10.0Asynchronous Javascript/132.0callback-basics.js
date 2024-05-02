//understanding callback - basics of callback

//In synchronous programming

/*

function myFunc1(callback){
    console.log("Function is doing task 1");
    callback();
}

function myFunc2(){
    console.log("Function is doing task 2")
}

myFunc1(myFunc2);

*/

//function ko parameter declare garda, normal variable jasari garni
//function ma function as argument pass garda normal variable jasari pass garni
// finally function bhitra callback function call garda, function call gareko jasari nai call garni

/*
//above functions can be written as:

function myFunc1(callback){
    console.log("Function is doing task 1");
    callback();
}

myFunc1(()=>{
    console.log("Function is doing task 2");
})

*/ 

/*

function getTwoNumbers(number1, number2){
    console.log(number1, number2);
}

function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}

getTwoNumbers(4,5);
addTwoNumbers(4,5);

*/

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure){
    console.log(number1, number2);
    if(typeof number1 === "number" && typeof number2 === "number"){
        onSuccess(number1, number2);
    }else{
        onFailure();
    }
}
getTwoNumbersAndAdd(4,5,(num1,num2)=>{
    console.log(num1+num2);

}, ()=>{
    console.log("wrong Data");
});