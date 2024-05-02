//get and set attribute in javascript 

//basically i am trying to select the anchor tag - "home"
const link = document.querySelector("a");
console.log(link);


//this object.getAttribute("attribute_name") is used to get the particular attributes' value-href,type,id,class,name,placeholder, etc  
console.log(link.getAttribute("href"));

//now changing the attribute value of link
link.setAttribute("href", "https://www.w3schools.com/")
console.log(link.getAttribute("href"));

// link.setAttribute("target", "_self");
link.setAttribute("target", "_blank");
console.log(getAttribute("target"))

console.log("--------------------");
//todo form ko first input

const inputElement = document.querySelector(".todo-form input");
console.log(inputElement);
console.log(inputElement.getAttribute("type"));


