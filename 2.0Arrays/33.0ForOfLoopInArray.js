//For of Loop in Array

const fruits = ["apple", "mango", "grapes", "mango"];
const FRUITS = [];

for(let newFruit of fruits){
    console.log(newFruit);
}
console.log("-------------------------------");
for(let i of fruits){
    FRUITS.push(i.toUpperCase());
    console.log(FRUITS);
}

//this is similar to for loop which runs till the length of fruits
//during first iteration: apple of fruits is stored in newFruit and console.log(newFruit) prints it
//similarly, during second iteration: mango of fruits is stored in  newFruit