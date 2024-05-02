

function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this["lastName"] = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
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
let user2 = new CreateUser("dhi","thapa","email@gmail.com", "32", "myLocation");
let user3 = new CreateUser("raj","chck","email@gmail.com", "22", "myLocation");

for(let key in user1){
    console.log(key); 
}

//it shows all the keys available in user1 object including all the keys inside __proto__ (__proto__ bhitra prototype object assigned xa)
// but i only want the direct keys of user1 object, not the keys of its prototype object

console.log("---------------------");

for(let key in user1){
    if(user1.hasOwnProperty(key)){ //direct key ho vaney user1.hasOwnPropert(key) returns true
        console.log(key);
    }
}