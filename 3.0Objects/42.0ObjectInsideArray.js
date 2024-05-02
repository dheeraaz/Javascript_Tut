//Objects inside array
//very useful in real world application

//example: ann array of user should store multiple information of particular user

const users = [
    {"userId": 1, "firstName":"Dhiraj", "gender":"male"},
    {"userId": 2, "firstName":"Ram", "gender":"male"},
    {"userId": 3, "firstName":"Shyam", "gender":"male"},
]

console.log(users);

//using loop

for(let user of users){
    console.log(`The user ID of ${user["firstName"]} is ${user["userId"]}`)
}