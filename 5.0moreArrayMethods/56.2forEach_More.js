const users = [
    {"firstName":"Dhiraj", "age":23},
    {"firstName":"Ram", "age":13},
    {"firstName":"Shyam", "age":20},
    {"firstName":"Hari", "age":31},
]

users.forEach(user=>{
    console.log(user["firstName"]);
})
/*
users.forEach((user,index)=>{
    console.log(user["firstName"],index);
})
*/
/*

for(let user of users){
    console.log(user["firstName"]);
}

*/