//super keyword

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

    isBark(){
        return true;
   }

   run(){
        return `${this.name} is running with speed ${this.speed}`
   }
}

const dog1 = new Dog("tom", 3,45);
console.log(dog1.eat())
console.log(dog1.isSuperCute())
console.log(dog1.run())