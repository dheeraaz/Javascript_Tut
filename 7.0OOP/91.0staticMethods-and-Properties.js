// static method and properties

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.info = "sdfjal;jflskd";
    }
    
    get fullname(){
        return `${this.firstName} ${this.lastName}`;
    }

    tellAge(){
        rerturn `The age of ${this.firstName} is ${this.age}`;
    }

    //static method
    static classInfo(){
        return 'this is Person Class';
    }

    //static property
    static desc = "j vaye pani lekhdiye";
    
}

//I cannot call above methods without using object(instances)
// all the methods are related with the objects

//I can also create the methods which is not related to objects, rather i can call them using class(for that use static keyword)
//static methods are not callable by objects

console.log(Person.classInfo()); //this works perfectly

const person1 = new Person("dhiraj", "acharya", 23);
console.log(person1.fullname);
// console.log(person1.classInfo()); this will give an error as classInfo is static method

//static property similar to static method: callable using class, no need of object

console.log(Person.desc);
// console.log(person1.desc); //gives undefined output

console.log(person1.info);

