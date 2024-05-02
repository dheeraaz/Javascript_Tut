// optional chaining

const user = {
    firstName: "Dhiraj",
    address: {houseNumber: "1234"}, //try comment and uncomment 
    // contact: {phone: 981234},
}

console.log(user.firstName);
// console.log(user["firstName"]);
console.log(user.address);
// console.log(user["address"]);

console.log("-----------------------");
/*
yedi mathi object ma: address: {houseNumber: "1234"}, nahuni ho vaney both the lines below gives an error
yedi mathi object ma: address: {houseNumber: "1234"}, nahuni ho vaney, error ko satta ma undefined output aaos like
    we will get if we write: console.log(user.naam); or console.log(user["ramdom_key"]);


*/
console.log(user.address.houseNumber);
console.log(user["address"]["houseNumber"]); //yedi address undefined xa vaney-it cannot read houseNumber of undefined
console.log(user.naam);
console.log("-----------------------");

//yesko solution vaneko optional chaining ho-> ?. operator

console.log(user?.random);
// console.log(user.contact.phone); //this will give an error

console.log(user?.contact?.phone); //this wont give an error

let user2;

console.log(user2?.firstName);