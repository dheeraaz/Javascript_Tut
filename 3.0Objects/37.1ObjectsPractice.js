let newKey = "firstKey";
const person = {
    "name": "Dhiraj",
    "age": 23,
    "Address": "lubhu",
    "hobbies": ["movies", "chess", "music"],
    "my email":"dheeraazacharya@gmail.com"
}

console.log(person);
console.log(person["name"]);

person["age"]=54;
console.log(person);

person[newKey]="check";
console.log(person);

person["newKey"]="Hello";
console.log(person);

person["newKey"]="hola";
console.log(person);
