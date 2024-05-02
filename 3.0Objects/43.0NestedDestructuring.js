//Nested Destructuring


const users = [
    {"userId": 1, "firstName":"Dhiraj", "gender":"male"},
    {"userId": 2, "firstName":"Ram", "gender":"male"},
    {"userId": 3, "firstName":"Shyam", "gender":"male"},
    {"userId": 4, "firstName":"yam", "gender":"male"},
    {"userId": 5, "firstName":"Sam", "gender":"female"},
]

const [user1, ...baakiSabaiInArray] = users; //suru ma type of variable(let,const), tespaxi k bata destructure garni {}forObject and []foraArray, equals to k bata destructure garni

console.log(user1);
console.log(baakiSabaiInArray);

console.log("----------------------------------")

//baakiSabaiInArray is an array containing rest of the objects

//now array bata destructure garera objects aauxa ra feri tyo objects lai pani destructure garni

const [{firstName:naam,userId:myId}, , user4, {gender:g}] = baakiSabaiInArray;

//yesma suru ma baakiSabaiInArray ko first object(i.e Ram) lai destructure garera const firstName:naam ma rakhxa
// second object(i.e Shyam) lai skip garxa
// third object (i.e yam) lai user4 object ma rakhxa
// fourth object(i.e sam) lai destructure garera gender as g varaible ma rakhxa

console.log(naam);
console.log(myId);

console.log(user4);
console.log(g);


