// Traversing DOM tree - use for newIndex.html

//task: select h1 tag first, and then traverse to its parent(-div) and change its background color and text color

const h1 = document.querySelector("h1");
// console.log(h1.parentNode);

const h1Parent = h1.parentNode;

h1Parent.style.color = "white";
h1Parent.style.backgroundColor = "#222222";

//again to the parent of div -> body

const body = h1Parent.parentNode;

body.style.backgroundColor = "black";

//body directly pani select garna milxa

const body2 = document.body;
console.log(body2)

//ekchoti kuni element select gari sake paxi, tyo element bhitra matrai pani query selector use garna milxa
// yesto garda tyo element bhitra matrai search garxa

const head = document.querySelector("head") //purai document bhitra head search and select garr
console.log(head);

const title = head.querySelector("title"); //purai head bhitra title element search and select garrr
console.log(title);

console.log(title.childNodes);

//If i want only the element node as a child node ignoring the text node

const container = document.querySelector(".container");
console.log(container.childNodes);
console.log(container.children) //children is a property which only gives the child element node
