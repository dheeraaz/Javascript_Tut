//short syntax for methods

/*

const user1 = {
    firstName: "Dhiraj",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }
}

*/  // no need to create methods inside objects as a key value pair

const user1 = {
    firstName: "Dhiraj",
    age:23,
    about(){
        console.log(this.firstName, this.age);
    }
}

user1.about();

const user2 = {
    firstName:"Ram",
    age: 54,
}

user1.about.call(user2);