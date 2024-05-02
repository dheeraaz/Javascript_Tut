//problems with factory function 
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
let user2 = createUser("dhi","thapa","email@gmail.com", "32", "myLocation");
let user3 = createUser("raj","chck","email@gmail.com", "22", "myLocation");

/*
harek choti user (object using factory function) banira xa, tetti nai choti factory function bhitra vayeko 
methods-about() ra is18() pani create vaira xa jaba ki for every user, both methods(function) is same
yesle bekkar ma space liraheko xa

*/
