//the code we wrote in 82.0use-prototype.js, can be written using more efficiently using new keyword
//factory function + new keyword

//future ma kunai function call garda new keyword compulsory use garnu xa vane, it is better to wite its name starting form Capital-Letter
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this["lastName"] = lastName;
    this.email = email;
    this.age = age;
    this.address;
}

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
}

CreateUser.prototype["is18"] = function(){
    return this.age>=18;
}

CreateUser.prototype.sing = function(){
    return "jham jham paryo panni";
}

let user1 = new CreateUser("dhiraj","acharya","email@gmail.com", "23", "myLocation");
console.log(user1);
console.log(user1.about());
const sing = user1.sing();
console.log(sing);
console.log("----------------------------");

let user2 = new CreateUser("dhi","thapa","email@gmail.com", "32", "myLocation");
console.log(user2);
console.log(user2.about());
console.log(user2.sing());
console.log("----------------------------");

let user3 = new CreateUser("raj","chck","email@gmail.com", "22", "myLocation");
console.log(user3);
console.log(user3.about());
