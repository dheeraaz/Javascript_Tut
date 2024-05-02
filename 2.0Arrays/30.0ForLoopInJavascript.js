//For Loop in Javascript

let fruits = ["apple", "mango", "grapes", "banana"];
let FRUITS=[];
/*
fruits indexing === 0 to 3;
fruits.length === 4
last index of fruits === fruits(fruits.length-1)
*/

for(let i =0;i<fruits.length;i++){
    console.log("your fruit "+(i+1)+" is " + fruits[i].toUpperCase());
}

//copying an array to another using for loop

for(let i=0;i<fruits.length;i++){
    FRUITS.push(fruits[i].toUpperCase());
}

console.log(FRUITS);