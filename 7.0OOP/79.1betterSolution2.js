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
    // const user = {} //create object
    const user = Object.create(userMethods); //yeti gari sake paxi, yo factory function ma methods banauna pani pardaina ra reference dina pani pardaina
    //yesle empty object pani create garirako xa ra it is creating bond betn user and userMethods

    user["firstName"] = firstName; //adds key-value pair
    user["lastName"] = lastName;
    user.email = email;
    user.age = age;
    user.address = address;


    return user;
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