// is there any connection between __proto__ and prototype?
//->till now, no...but we will create a connection between them 
//also see 79.1betterSolution2.js

//since every function has prototype object, factory function also has prototype object
//then why we need to create some other object then use it as __proto__ to the factory function

/* we dont need this object anymore

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
*/

function createUser(firstName, lastName, email, age, address){
    // const user = {} //create object
    const user = Object.create(createUser.prototype); 

    user["firstName"] = firstName; //adds key-value pair
    user["lastName"] = lastName;
    user.email = email;
    user.age = age;
    user.address = address;


    return user;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
} 

createUser.prototype["is18"] = function(){
    return this.age>=18;
}
createUser.prototype["sing"] = function(){
    return "jham jham paryo panni"
}


let user1 = createUser("dhiraj","acharya","email@gmail.com", "23", "myLocation");
console.log(user1);
console.log(user1.about()); //suru ma about() user ma khojxa, tesma navetey paxi userMethods ma khojxa
console.log(user1.sing());

let user2 = createUser("dhi","thapa","email@gmail.com", "32", "myLocation");
console.log(user2);
console.log(user2.about());
console.log(user2.sing());

let user3 = createUser("raj","chck","email@gmail.com", "22", "myLocation");
console.log(user3);
console.log(user3.about());