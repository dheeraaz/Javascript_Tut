//getting unique string

let myString = "Samparpan";
console.log(myString);
console.log("-------------");

let uniqueString = new Set(myString);
console.log(uniqueString);
console.log("-------------");

// uniqueString = [...uniqueString]; //now unique string is converted to array
// uniqueString = Array.from(uniqueString).join(""); 

uniqueString = [...uniqueString].join(""); //.join("") joins all the element of an array with ""->no space, " "-->with space, "+"-->using plus sign
console.log(uniqueString);
