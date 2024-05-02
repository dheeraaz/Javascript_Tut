/*
- some old methods to support Internet Explorer 
- Internet explorer didnt use to support append, prepend, before, after
- So to support in internet explorer, we needed to use:
        - appendChild
        - insertBefore
        - replaceChild
        - removeChild
- since there is no internet explorer now, and almost all browser support append and other methods        

*/

const ul = document.querySelector(".todo-list");

const li = document.createElement("li");
li.textContent = "new todo";

// ul.appendChild(li); //yesle simple append ko jasto kaam garxa

//now to insert element before Todo1 we need its reference too 

const referenceTodo1 = document.querySelector(".first-todo");
// ul.insertBefore(li, referenceTodo1); //insert li before referenceTodo1 

//todo1 lai new todo ley replace garni

// ul.replaceChild(li, referenceTodo1); //(nayachild, puranoChild)

// ul.removeChild(referenceTodo1);

