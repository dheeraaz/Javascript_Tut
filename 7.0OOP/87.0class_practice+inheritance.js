//class practice and extends(inheritance)

class Animal{ //parent class, base class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age<=2;
    }
    isCute(){
        return true;
    }
}

const animal1 = new Animal("tommy",3);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isSuperCute());
console.log(animal1.isCute());

console.log("-------------------");

class Dog extends Animal{  //derived class, subclass

   isBark(){
    return true;
   }
}

const dog1 = new Dog("tom",2); //yedi dog class ko constructor xaina vaney Animal class ko constructor use garxa
console.log(dog1);
console.log(dog1.eat());
console.log(dog1.isSuperCute());
console.log(dog1.isBark());