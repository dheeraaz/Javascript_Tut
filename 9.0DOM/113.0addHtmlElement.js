//add new HTML Element Using JAvasccript

const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);

/*
-yesle purano innerHtml lai hatayer naya html rakhxa
*/
// todoList.innerHTML = "<li>New Todo</li>" ; 
// console.log(todoList.innerHTML);

//now pahila ko html plus naya add garnu xa vaney;

todoList.innerHTML += "<li>New Todo</li>";
todoList.innerHTML += "<li>New Todo2</li>";

/*when you shouldn't use it

- The above method is not recommended to add new html element as every time i am adding new innerHTML, the browser is 
rendering the previous HTML too, which creates the performance issue. 

*/


/* when you should use it
- when you have to change the whole inner HTML and then replace it by new one, then use it
*/


