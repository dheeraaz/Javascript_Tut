//factory function
//the function which is used to create multiple objects is called factory function.

/*
const user = {
    firstName: "Dhiraj",
    lastName:"Acharya",
    email:"chek@check.com",
    age:23,
    address: "myLocation",
    
    about: function(){
        return `${this.firstName} is ${this.age} years old.`;
    },

    is18: function(){
        return this.age>=18;
    },
}

const intro = user.about(); //unlike 74.0, here about function is returning something so storing it in variable
console.log(intro);

*/

//now if I want the multiple objects having different key-value pair, then i need a factory function
//factory function -> creates objects, adds key-value pair, returns that object

function createUser(firstName, lastName, email, age, address){
    const user = {} //create object

    user["firstName"] = firstName; //adds key-value pair
    user["lastName"] = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    user.about= function(){
        return `${this.firstName} is ${this.age} years old.`;
    }

    user["is18"] = function(){
        return this.age>=18;
    }

    return user;
}

let user1 = createUser("dhiraj","acharya","email@gmail.com", "23", "myLocation");
console.log(user1);
const user1about = user1.about();
console.log(user1about);
const isUser1Above18 = user1.is18();
console.log(isUser1Above18);

console.log("---------------------------------");

let user2 = createUser("Ram","Thapa","email2@gmail.com", "5", "hisLocation");
console.log(user2);
const user2about = user2.about();
console.log(user2about);
const isUser2Above18 = user2.is18();
console.log(isUser2Above18);