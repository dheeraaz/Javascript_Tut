// add new html element - preffered approach

/*
- document.createElement()
- append
- prepend
- remove
*/

/*
- Todo1
*/

const newTodoItem = document.createElement("li"); //it creates new li tag

const newTodoItemText = document.createTextNode("Start Gym"); //it creates text

//now i want to add text inside li tag
newTodoItem.appendChild(newTodoItemText);
// console.log(newTodoItem); 

//now i want to add li tag inside .todo-list
const todoList  = document.querySelector(".todo-list");
todoList.append(newTodoItem); //this will add new todo item to the list

/*
- Todo 1
- Start Gym
*/

//----------------------------------------------------------------
//The above method was longer approach, we can make it shorter + prepend
 
const newTodoItem2 = document.createElement("li"); 
newTodoItem2.textContent = "Quit Gym"; 

// const todoList  = document.querySelector(".todo-list"); //yo line mathi lekheko vayera nalekheko natra lekhna parxa

todoList.prepend(newTodoItem2); //yesle sabai vanda suru ma lager jodxa

/*
- Quit Gym
- Todo 1
- Start Gym
*/

//remove - i want to remove todo1, for that first select it
const todoItemTORemove = document.querySelector(".todo-list li:nth-child(2)");
todoItemTORemove.remove();


/*
- Quit Gym
- Start Gym
*/
