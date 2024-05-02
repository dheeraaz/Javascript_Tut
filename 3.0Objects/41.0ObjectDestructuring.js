//Object Destructuring

const band = {
    "bandName": "Led Zeppelin",
    "year": 1968,
    "famousSong": "stairway to heaven"
}

/*
const newBandName = band["bandName"];
const newFamousSong = band["famousSong"];
console.log(`The famous song of ${newBandName} is ${newFamousSong}`);
*/

/*
let {a, b} = band; // This will not work as the new variable name must match with the key name of object
console.log(`The famous song of ${a} is ${b}`);

*/

//This will work as the name of variable is same as the key name
let {bandName, famousSong} = band;
console.log(`The famous song of ${bandName} is ${famousSong}`);

console.log("-----------------------------")
//if i want the variable name someother than the key name

let{bandName:a, famousSong:b} = band;
console.log(`The famous song of ${a} is ${b}`);

//we can also change variable value
 a = "Nepathya"
 console.log(a);
