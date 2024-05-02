/*
= Sets(it is iterable but not a array like objects)
- Store Data
- sets also have its own methods
= No index-bases access
- order is not guaranteed
= unique items only (no duplictates allowed), if duplicates present, it simply ignores/removes the duplicate values
*/

const numbers = new Set([1,2,3,4,5]); //inside Set("string") pani rakhna milxa since string is also iterables
console.log(numbers);
console.log("-------------");

for(let value of numbers){
    console.log(value);
}
console.log("-------------");

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); //yo add hudaina
console.log(mySet);
console.log("-------------");

//we can add diiferent data types in set

const items = ["item1", "item2", "item3"];

const mySet2 = new Set();
mySet2.add(5);
mySet2.add(9);
mySet2.add(items);
mySet2.add(19);
console.log(mySet2)
console.log("-------------");




