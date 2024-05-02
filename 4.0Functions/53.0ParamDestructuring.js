// Parameter Destructuring
//used with objects and mainly used in react

const person ={
    "firstName":"Dhiraj",
    "gender": "male",
}

/*
function printDetails(obj){
    console.log(obj["firstName"]);
    console.log(obj["gender"]);
    console.log(obj["age"]); // there is no age, so it will be undefined
}
*/

//If I already know, the parameter is object, i can destructure it while passing object as an argument

function printDetails2({firstName,gender,age}){ //(let {firtName,gender,male}=person)
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

// printDetails(person);
printDetails2(person);