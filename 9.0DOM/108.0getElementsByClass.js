//1. get multiple elements by get elements by class name
//2. get multiple elements by queryselectorAll

const navItems = document.getElementsByClassName("nav-item");
console.log(navItems);
console.log("---------------------*1")
/*
- It returns the HTMLCollection which is "array like objects"
- array indexing use garna milxa
- for loop use garna milyo
- tara aru array methods like: map, forEach, etc use garna mildaina
*/
console.log(navItems[1]);
console.log("---------------------*2")

for (let navitem of navItems){
    console.log(navitem);
}

console.log("---------------------*2")

const navItems2 = document.querySelectorAll(".nav-item"); //query selector use garda class ho ki, id ho ki, element ho tehi anusar attribute pass garna parxa
console.log(navItems2);
console.log("---------------------*3")

/*
-It returns the NodeList
- It is also array like object
*/

console.log(navItems2[1]);
console.log("---------------------*4")


/* DIFFERENCE BETWEEN getElementsByClassName AND querySelectorAll
    SEE IN 109.JS FILE
*/

