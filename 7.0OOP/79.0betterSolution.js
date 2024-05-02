//better solution to memory related issue with factory function

/*
what's the problem now??
- now i want a new method inside createUser, for that i have to create method inside userMethods and 
- again provide the reference of method inside userMethods to the createUser factory function
- when the no. of required methods increases, the task becomes tedious

--> the solution is to use Object.create()
--> first see 80.0object_dot_create.js and then go to 79.1betterSolution2.js
*/

const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} years old.`;
    },

    is18: function(){
        return this.age>=18;
    },

    sing: function(){
        return "jham jham paryo panni"
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = {} //create object

    user["firstName"] = firstName; //adds key-value pair
    user["lastName"] = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user["about"] = userMethods.about; //yesari lekhda, user["about"] ma userMethods.about ko reference store vaira xa
    user.is18 = userMethods.is18;
    user["sing"] = userMethods.sing;

    return user;
}

let user1 = createUser("dhiraj","acharya","email@gmail.com", "23", "myLocation");
console.log(user1);
console.log(user1.about());
console.log(user1.sing());

let user2 = createUser("dhi","thapa","email@gmail.com", "32", "myLocation");
console.log(user2);
console.log(user2.about());
console.log(user2.sing());

let user3 = createUser("raj","chck","email@gmail.com", "22", "myLocation");
console.log(user3);
console.log(user3.about());