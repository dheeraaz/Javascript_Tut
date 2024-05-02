// static list vs live list

/*

const listItems = document.querySelectorAll(".todo-list li");
console.log(listItems)

const sixthLi = document.createElement("li");
sixthLi.className = "todo-item";
sixthLi.textContent = "List item 6";

const ul = document.querySelector(".todo-list");
console.log(ul);
ul.append(sixthLi);
console.log(listItems) 

*/

//list item 6 ta browser ma dekhiyo but ahile pani console.log(listItems) ko output 5 nai xa

//this is because, querySelectorAll gives us static list dinxa
//getElementsBySomething gives live list


const listItems = document.getElementsByClassName("todo-item");
console.log(listItems)

const sixthLi = document.createElement("li");
sixthLi.className = "todo-item"; //live list ma dekhina newly added element ko pani same class huna parxa
sixthLi.textContent = "List item 6";

const ul = document.querySelector(".todo-list");
console.log(ul);
ul.append(sixthLi);
console.log(listItems) 

//downside of live list = it takes additional space

/*
- ul.document.getElementsByTagName("li");
- yesari list item access gareko xa vaney, no need to give same class name to newly added element for it to be 
reflected in live list

*/
