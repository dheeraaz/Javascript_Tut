//solution using object.create

/*
const obj1 = {
    key1: "value1",
    key2: "value2",
}

const obj2 = {
    key3: "value3",
}

console.log(obj1.key1); //this perfectly works
console.log(obj2.key3); // this will also perfectly works) 

console.log(obj2.key1); //this doesnt work and the output is undefined

//now i want that, whenever i'm calling obj2.key1, if it finds key1 in obj2 print it else go to obj1 on itself and use the key1 of obj1

*/

/*
ways to create empty onbject

const obj1 = {};

const obj2 = Object.create(obj1);

*/

const obj1 = {
    key1: "value1",
    key2: "value2",
}

const obj2 = Object.create(obj1);
console.log(obj2); // the output is empty object 🤔, it doesnt output obj1
console.log("---------------------------");

//const obj2 = Object.create(obj1) //rerturns empty object to obj2

obj2.key3 = "value3";
console.log(obj2.key3); //we know how it works

//it also works, suru ma obj2 ma key1 khojxa, obj2 ma vettayena vani create ko parenthesis bhitra lekheko object ma key1 khojxa
console.log(obj2.key1);

console.log("---------------------------");

obj2.key1="unique";
console.log(obj2.key1);

console.log("----------000000-----------------");
console.log(obj2.__proto__);

/*
yesma obj2 create huda tesma __proto__ hunxa jun bhitra gayera obj1 basxa (__proto__ is created only when we use Object.create())
so aafu ma key vettayena vani __proto__ ma gayera check garxa ra tesma pani vettayena vani undefined dekhauxa 

__proto__ and [[prototype]] are same, but, 

__proto__ and prototype are completely different


*/