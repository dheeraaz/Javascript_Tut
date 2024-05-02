//classList, add and remove, toggle classes

const todoSection = document.querySelector(".todo-section");
console.log(todoSection);

console.log(todoSection.classList); //DOMTokenList(2) //todoSection ma 2 ota classes diyeko xam, 1. todo-section 2. cotainer

/*
//add new class

todoSection.classList.add("bg-dark");
console.log(todoSection.classList)

//now to remove the classes

todoSection.classList.remove("bg-dark"); 
console.log(todoSection.classList)

//comment and uncomment remove and add code simultaneously
*/


//check if the particular class exist or not in the given element
console.log(todoSection.classList.contains("container")); //returns true/false

todoSection.classList.toggle("bg-dark");
//what it does is, yedi bg-dark class already xa vaney remove garxa, yedi already xaina vaney chai bg-dark class add garxa

console.log(todoSection.classList);

todoSection.classList.toggle("bg-dark");
console.log(todoSection.classList);



const header = document.querySelector(".header");
console.log(header.classList);
header.classList.add("bg-dark"); 
console.log(header.classList);


