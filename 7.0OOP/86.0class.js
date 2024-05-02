//class in javascript
//all the previous job were tedious and can be replaced using class keyword
//in javascript classes are fake, lekhda class lekhepani internally constructor function/factory function use gareraii kaamm garira hunxa

class CreateUser{
    constructor(firstName, lastName, email, age, address) {
        console.log("construtor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        console.log(this.num);
        return `${this.firstName} is ${this.age} years old.`;
    }

    is18() {
        return this.age>=18;
    }

    sing(){
        return "jham jham paryo panni";
    }
    func(a){
        console.log(a);
    }
}

const user1 = new CreateUser("dhiraj", "acharya", "check@check.com", 23, "sankhadeevi");
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());
user1.func("aaaaaaaaaaaa");