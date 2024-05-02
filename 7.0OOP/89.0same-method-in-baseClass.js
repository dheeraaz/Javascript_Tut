//same methods in base class
class Animal{ 
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

class Dog extends Animal{ 

    constructor(name, age, speed){
        super(name,age); //name ra age ko lagi parent class ko constructor use garr
        this.speed = speed;
    }

    eat(){
        return `modified Eat: ${this.name} is eating`
    }

   run(){
        return `${this.name} is running with speed ${this.speed}`
   }
}

const dog1 = new Dog("tommy", 2);
console.log(dog1.eat()) //kunai method aafnai class ma xa vaney tehi use garxa, it doesnt use the methods from parent class
console.log(dog1.isSuperCute())