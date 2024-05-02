function first(){
    console.log("Hello, World!");
}

first();
first();
first();

function sum2(a,b){
    return a+b;
}

function sum3(a,b,c){
    return a+b+c;
}

console.log("The sum of 5 and 3 is: ",sum2(5,3));

//odd or even
console.log("-----------------------");

function isEven(num){
    if(num%2===0){
        return true;
    }
    return false
    //or this is best approach
    // return num%2===0;
}

let chkNum = 9;
if(isEven(chkNum)){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}

/*
fuction:
input:string
output:firstCharacter
*/
console.log("-----------------------*2");

function getFirstChar(mystr){
    return mystr[0].toLowerCase();
}

console.log(getFirstChar("Dhiraj"));

/*
function
input: array, target(number)
output: index of target if target present in array
*/
console.log("-----------------------*3");

function getIndex(arr, target){
    for(let index in arr){
        if(arr[index]===target){
            return (Number(index)+1);
            //yesma index ko type string hunxa, so index+1 garda "4"+1 = 41 hunxa
        }
    }
    return -1;
}

const arr=[1,4,5,6,7,9,10,13,15];
let target = 9;
let result = getIndex(arr,target);
if(result===-1){
    console.log("Target not found");
}else{
    console.log("The target is at index", result);
}