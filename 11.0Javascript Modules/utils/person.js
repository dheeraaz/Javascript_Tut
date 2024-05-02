export default class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    info(){
        console.log(this.firstName, this.lastName, this.age);
    }
}

//NOTE: EXPORT DEFAULT EUTA FILE MA EKCHOTI MATRAI USE GARNA MILXA
