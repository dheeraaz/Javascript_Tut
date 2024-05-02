//For in Loop in array

const fruits = ["apple", "mango", "grapes", "mango"];
const FRUITS = [];

for(let index in fruits){
    console.log(index);
}
//This loops gives the value of index of array
//if you want proper value of array then write;
console.log("--------------");
for(let index in fruits){
   FRUITS.push(fruits[index].toUpperCase());
//    console.log(FRUITS);
   console.log(FRUITS[index]);
}