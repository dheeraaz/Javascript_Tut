//create your own methods

//methods -> function inside objects is called methods

const person={
    firstName: "dhiraj",
    age: 23,
    aboutThis:function(){
        console.log(this);
    },
    about:function(){
        console.log(`person name is ${this.firstName} and his age is ${this.age}`);
    },
}

console.log(person.firstName);
console.log("-------------------------");

person.aboutThis();
console.log("-------------------------");

//from this we are clear that, "this" is nothing but the object itself


person.about();
console.log("-------------------------");
console.log("-------------------------");
//----------------------------------------------------------


function personInfo(){
    console.log(`persona name is ${this.firstName} and his age is ${this.age}`);
}

const person2 = {
    firstName: "Dhiraj2",
    age: 233,
    about:personInfo,
}
const person3 = {
    firstName: "Dhiraj3",
    age: 333,
    about:personInfo,
}

person2.about();
person3.about();
