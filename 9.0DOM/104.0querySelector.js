//select element using - query Selector

//unlike getElementByID which is capable of selecting only the ID, 
//query selector can select any element of javascipt


//selecting the id - since the id is always unique, it only selects the one element
const mainheading = document.querySelector("#main-heading"); //id select garnalai #id_name garna parxa
console.log(mainheading);

//selecting the class - if there are multiple classes, then it selects the very first classes

const navItem =  document.querySelector(".nav-item");
console.log(navItem);

//selecting the HTML element - if there are multiple elements, then it selects the very first element
const button = document.querySelector("button");
console.log(button); 

//<------if you want to select multiple available element with querySelector, then use querySelectorALl------->

const navItemAll = document.querySelectorAll(".nav-item");
console.log(navItemAll);

//querySelector returns the Nodelist which is like array but not an array
console.log(navItemAll[1])