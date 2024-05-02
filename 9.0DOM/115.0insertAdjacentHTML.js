/*
- insertAdjacentElement
- beforebegin
- afterbegin
- beforeend
- afterend
*/ 
//These methods also does the same job as 114.0 
// It is recommended to use append, prepend ,etc as mentioned in 114.0 and 114.1

const todoList = document.querySelector(".todo-list");

//yesma chai element create garirakhna pardaina

todoList.insertAdjacentHTML("beforeend", "<li>Start Gym</li>"); 
todoList.insertAdjacentHTML("afterbegin","<li>Quit Gym</li>"); 


/*

<- beforebegin
<ul>  <-- This element is selected by querySelector
    <- afterbegin
    <li></li>
    <li></li>
    <li></li>
    <- beforeend
</ul>
<- afterend

*/