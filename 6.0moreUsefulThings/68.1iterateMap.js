//Map is an iterable, i.e we can apply for-of loop
//object ma--only for-in loop matra lagauna milxa

const person = new Map();

person.set("firstName", "Dhiraj");
person.set("age", 7); 
person.set(1, "one"); 

console.log(person); 
console.log("--------------------------");

for (let key_value of person){
    console.log(key_value); //for-of loop returns key-value(array) pair in Map
}
console.log("--------------------------");

for(let [key, value] of person){ //destructureing array
    console.log(key,value);
}