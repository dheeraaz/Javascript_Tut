//Difference between dot notation and bracket notation
const key = "email";
const person = {
    name: "Dhiraj", 
    age: 22,
    // person age: 23  //this gives an error
    "person age": 34,
    address: "lubhu", 
    hobbies: ["movies", "chess", "music"],
}

// console.log(person.person age); //this also gives error
console.log(person["person age"]);

//so bracket notation is useful in accessing the key name that has spaces in between them

// person.key = "dhiraj@gmail.com"; // this will add the key named "key" in person object
// console.log(person);

//but we want to add the key name which is stored in variable "key"

person[key] = "dhiraj@gmail.com";
console.log(person);

/*
So to be in safe side:
1. always use: const myobj= {
                                "key1": value1,
                                "key2": value2
                            }
2. use bracket notation to access key-value pair from objects
*/