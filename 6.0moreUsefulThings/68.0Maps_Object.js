//Maps object in javascript
//dont get confused with .map method of javascript, it is Maps object

/*
Maps
- map is an iterable
- store data in ordered fashion
- store key value pair (like object)
- duplicate keys are not allowed like objects
*/

/*
Difference betweeen maps and object

- objects can only have string or symbol as key
- in maps, we can use anything as key, like: array, number, string
*/

//below is also called object literals
//most of the time: key->string
//simetimes: key->symbols
const person = {
    firstName: "dhraj",
    age: 7,
    1:"one",
}

console.log(person.firstName);
console.log(person["firstName"]);
console.log("-----------------------------1");
for(let key in person){
    console.log(typeof key); // all the keys are in string format
}
console.log("-----------------------------2");

//------------------Now time for Map-----------------------------------

//in map, you can have the key of any data type

const person2 = new Map();

person2.set("firstName2", "Dhiraj"); //adding key value pair to the oject/map
person2.set("age", 7); //adding key value pair to the oject/map
person2.set(1, "one"); //adding key value pair to the oject/map

console.log(person2);

//accessing key-value pair of map
// Map.get(key)
console.log(person2.get("firstName2"));
console.log(person2.get(1));
console.log("-----------------------------3");

//for getting all the keys of Maps

console.log(person2.keys());

for(let key of person2.keys()){
    // console.log(person2.get(key));
    console.log(typeof key);
}