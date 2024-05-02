//exercice: copy an array plus add some new elements

let array1 = ["item1", "item2"];
let array2 = ["item3", "item4"];

console.log("array1 before any changes");
console.log(array1);

console.log("merging array1 and array2");

array1 = [...array1,...array2];
console.log(array1);

console.log("manual concatenation");

let arrayx;

arrayx = [...array1].concat("itemx", "itemz");
console.log(arrayx);

console.log("printing arrayQ");
let arrayQ = [...array1, "itemP", "itemR"];
console.log(arrayQ);

let arrayU = [...array1,...array2, ...arrayx];
console.log(arrayU);


