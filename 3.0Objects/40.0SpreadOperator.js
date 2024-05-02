//spread operator in array(revision) and strings

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = [...array1, ...array2, 89,"myName"];
console.log(newArray);

//we can also spread strings into individual array elements

//yesle Dhiraj ko individual character lai array ma store garxa
const strArray = [..."Dhiraj"];
console.log(strArray);

console.log("--------------------------");
for(let i of strArray){
    console.log(i.toUpperCase());
}

console.log("--------------------------");

let myAnotherName = "Samarpan";
const anotherArray = [...myAnotherName]; //spreading string variable

console.log(anotherArray);
console.log(anotherArray[3]);

console.log("-------------***********************------------");

const num1 = [1, 2, 3, 4, "Ram"];
const num2 = [101, 102, 3, 104, "Ram"];

const num3 = [...num1, ...num2]; //This doesnt remove duplication 
console.log(num3); 

console.log("--------------------------");

const num4 = [...new Set([...num1, ...num2])]; //This removes duplicate
console.log(num4);
//see the output in browser: Go live then F12