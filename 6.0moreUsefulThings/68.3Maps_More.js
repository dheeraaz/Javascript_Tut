const person = {
    id: 1,
    firstName: "dhiraj",
}

//setting object as key in Maps and setting object as the value

const extraInfo = new Map();
extraInfo.set(person,{age: 23, gender: "male"})

console.log(extraInfo);

console.log("-------------------------");
console.log(person["id"]);

// {id:1, firstName:"dhiraj"}=>{age:23, gender:"male"}

console.log(extraInfo.get(person)); //it returns the value of person, i.e {age:23, gender:"male"}

console.log("-------------------------");

//now if i need only gender from extraInfo

console.log(extraInfo.get(person)["gender"]);
console.log(extraInfo.get(person).age);