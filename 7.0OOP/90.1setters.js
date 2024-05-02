class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    get fullname(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullname(fullname){
        const [firstName, lastName] = fullname.split(" ");
        /*
        fullname = "Ram Thapa"
        const[firstName, lastName] = [Ram, Thapa]
        */

        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new Person("dhiraj", "acharya", 23);
console.log(person1.fullname);

// person1.fullname = "Ram Thapa"; //initially this line doesnt work, but i somehow want to use this type of functionality

person1.fullname = "Ram Thapa";
console.log(person1.fullname);


/*
class myclass{
    constructor(num){
        this.num = num;
    }

    get myNum(){
        return this.num;
    }

    set myNum(num){
        this.num = num;
        return this.num;
    }

}

let myClass1 = new myclass(23);
console.log(myClass1.myNum);

myClass1.myNum = 3;
console.log(myClass1.myNum);
*/