
//selecting todo form
 const todoForm = document.querySelector(".todo-form");

/*
//yeti matrai garni ho vaney, enter/add todo garni bittikai page refresh hunxa

 todoForm.addEventListener("submit", ()=>{
    console.log("Hello")
})
*/

//selecting todo form bhitra ko input button jasko type text ho
const todoFormInput = document.querySelector(".todo-form input[type='text']");

const todoList = document.querySelector(".todo-list"); //.todo-list/ul select 

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault(); //prevents page from reloading
    // console.log(todoFormInput.value); // prints the input field value

    const newTodoText = todoFormInput.value; //stroring input field value

    const newLi = document.createElement("Li"); //creating new li element


    //li element bhitra ko html lai as a string banako
    const newLiInnerHtml = `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="done todo-btn">Done</button>
        <button class="remove todo-btn">Remove</button>
    </div>`

    newLi.innerHTML = newLiInnerHtml; //li bhitra html(as a string) haleko
    // console.log(newLi);

    todoList.append(newLi);

    todoFormInput.value = ""; //input field ma type gareko content chai clear hunxa

})

//using the concept of event delegation 

todoList.addEventListener("click", (e)=>{
    // console.log(e.target);
    // console.log(e.target.textContent);
    // console.log(e.target.classList);

    //check if user clicked on done button
    
    if(e.target.classList.contains("done")){
        // console.log("Something done");
        const liSpan = e.target.parentNode.previousElementSibling; 
        /*
        done ma click vayepaxi(ensured by if condition)
        tesko parentNode(i.e div) ma jani ra tesko agadiko sibling select garni
        */
       liSpan.style.textDecoration= "line-through";
    }

    if(e.target.classList.contains("remove")){
        // console.log("Something removed");

        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }

})