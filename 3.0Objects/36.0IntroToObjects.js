// Non-primitives data type = Objects
//Objects : reference type data type
// arrays are good but not sufficient 
// objects are for real world data
// object store key value pairs
// objects dont have index

// how to create objects

// const person = {name:"Dhiraj", age:22, address:"lubhu"};

const person = {
    name: "Dhiraj", //this is called key value pair
    // "name": "Dhiraj", //yesari lekhda pani hunxa
    age: 22,
    address: "lubhu", 
    hobbies: ["movies", "chess", "music"]
}

console.log(person);
console.log(typeof(person));

//how to access data from objects
console.log(person.name);
console.log(person.age);
console.log(person.address);
console.log(person.hobbies);

//how to add key value pairs to object

person.gender = "male";
console.log(person);

//method of accessing data from object
// using dot notation and using bracket notation

console.log("-----------------------");
console.log(person.age);
console.log(person["age"]); //by default object ma key-name string ma store huni vayekole we use string to access data

/*
important!
you cannot change objects to primitives
for e.g: all below code are invalid
person = "myName"
person = 50

similarly, the below code is also invalid:
    person = {
        name: "Dhiraj"
    }

    person = {}

you can edit objects only through key-value pair operation
*/