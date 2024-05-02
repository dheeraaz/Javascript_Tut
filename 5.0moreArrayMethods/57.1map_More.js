const users = [
    {"firstName":"Dhiraj", "age":23},
    {"firstName":"Ram", "age":13},
    {"firstName":"Shyam", "age":20},
    {"firstName":"Hari", "age":31},
]

//now i want an array containing only firstName

const firstNameArray = users.map((value)=>{
    return value["firstName"];
})

console.log(firstNameArray);