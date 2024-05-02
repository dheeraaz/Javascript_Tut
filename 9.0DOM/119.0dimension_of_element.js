// how to get the dimension of an element 
// height width 

const todoSection = document.querySelector(".todo-section");
const info= todoSection.getBoundingClientRect();
console.log(info);

/*
const info = todoSection.getBoundingClientRect().height; //for only height
*/