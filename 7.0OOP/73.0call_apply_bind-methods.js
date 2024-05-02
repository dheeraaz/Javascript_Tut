//call , apply and bind methods

/*
function hello(){
    console.log("Hello, world");
}

hello();
hello.call(); //both are same

*/

const user1 = {
    firstName: "Dhiraj",
    age:23,
    about:function(hobby,favsong){
        console.log(this.firstName, this.age,hobby,favsong);
    }
}
user1.about("singing","kehitakehiho");

const user2 = {
    firstName: "Raj",
    age:3,
}
//I want to take about of user1 using user2 without copying 
console.log("------------------------");

user1.about.call(user2,"arkosinging","thahaxaina");
// user1.about.call(); //yesko output undefined hunxa, user1 ko lagi chainxa vane, pass user1 inside call

/*
suru ma about vanni user1 ma xa, we need user1 to call about
user1.about(); //yesto garda about bhitra vako this vaneko user1 ho, so

user1.about.call(user2); //yesko matlab, about bhitra vako this, user1 navayera user2 ho hai vanna khojeko

*/
