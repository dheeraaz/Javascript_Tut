const users = [
    {userId:1,userName:"Dhiraj"},
    {userId:2,userName:"byarish"},
    {userId:3,userName:"harish"},
    {userId:4,userName:"Hari"},
    {userId:5,userName:"Shyam"},
    {userId:6,userName:"Ram"},
]
let searchValue = "Ram";
//finding the userId of that object whose userName is "Hari"
const res = users.find((user)=>{
    return user["userName"]===searchValue;
})
console.log(res["userId"]);