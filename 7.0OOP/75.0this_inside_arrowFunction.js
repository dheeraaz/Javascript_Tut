//this inside arrow function
//arrow function
//simply be very very cautious while using this keyword inside arrow function
const user1 = {
    firstName: "Dhiraj",
    age: 8,
    about: ()=>{
        console.log(this.firstName, this.age);
    }
}

user1.about(); //arrow function ko this, object calling it hudaina, yesko this vaneko ek-level up ko object hunxa
user1.about.call(user1); //you cannot bind(or call) this with other object

/*
yedi arrow funciton ko satta ma aru normal function declaration hunthyo vani:
user1.about() garda about bhitra vako this vaneko user1 hunthyo
tara arrow function use gareko vayera aba this vaneko user1 vanda eklevel up ko object hunxa, which is window object
*/