//first solution to the problems associated with factory function

const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} years old.`;
    },

    is18: function(){
        return this.age>=18;
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

    return user;
}

let user1 = createUser("dhiraj","acharya","email@gmail.com", "23", "myLocation");
console.log(user1);
console.log(user1.about());

let user2 = createUser("dhi","thapa","email@gmail.com", "32", "myLocation");
console.log(user2);
console.log(user2.about());

let user3 = createUser("raj","chck","email@gmail.com", "22", "myLocation");
console.log(user3);
console.log(user3.about());

