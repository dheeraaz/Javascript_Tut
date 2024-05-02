//getters and setters in javascript

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    get fullname(){
        return `${this.firstName} ${this.lastName}`
    }

    changeName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("dhiraj", "acharya", 23);
// console.log(person1.fullname());

// console.log(person1.firstName); //yo garda firstName return garxa as firstName is property
// console.log(person1.fullname);  //it prints whole function but i want this method as if it is property
// for that put get infront of method, aba method jasari call garna pani mildaina

console.log(person1.fullname);
console.log("--------------------------");

//methods of changing names
person1.firstName = "ram";
person1.lastName = "thapa";

console.log(person1.fullname)
console.log("--------------------------");

person1.changeName("shyam", "kumar");

console.log(person1.fullname);
console.log("--------------------------");

