//iterables and array like objects

//iterables 
//data types on which we can apply for of loop
//string, array are iterables

const firstName = "Dhiraj";

for(let char of firstName){
    console.log(char);
}
console.log("-------------");

const items = ["item1", "item2", "item3"];

for(let item of items){
    console.log(item)
}
console.log("-------------");
//for of loop is not applicable to objects,so it is not iterables


//array like objects
//which has length property
//and which we can access using index
//example: string

console.log(firstName.length);
console.log("-------------");
console.log(items.length);
console.log("-------------");


console.log(firstName[2].toUpperCase());
console.log("-------------");
console.log(items[2]);
console.log("-------------");
