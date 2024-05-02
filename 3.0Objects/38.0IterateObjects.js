//how to iterate objects
// For in Loop 
// object.keys

const person = {
    name: "Dhiraj", 
    age: 22,
    address: "lubhu", 
    hobbies: ["movies", "chess", "music"]
}


for(let key in person){
    // console.log(key);  // this will give key name
    // console.log(person[key]);
    // console.log(`${key}: ${person[key]}`);
    // console.log(key, " : ", person[key]);
    console.log(key + " : " + person[key]);
    // console.log(person.key); // this will give an error
}
console.log("----------------");

console.log(Object.keys(person));

console.log(typeof(Object.keys(person)));
console.log(Array.isArray(Object.keys(person)));

console.log("--------------");

for(let k of Object.keys(person)){
    console.log(person[k]);
}

console.log("---------------------")
