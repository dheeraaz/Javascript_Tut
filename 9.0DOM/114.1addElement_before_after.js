//before and after methods

//append and prepend ley given element ko bhitra patti desired element add garthyo

//before and after ley chai given element vanda agadi wa paxadi desired element add garxa

const newTodoItem = document.createElement("li");
newTodoItem.append("hello I am fresh"); //yesari pani text lekhna milxa, as append ley element bhitra arko kunai element halxa
// newTodoItem.textContent = "hello I am frsh";
const todoList  = document.querySelector(".todo-list");

todoList.before(newTodoItem);

/*After

const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "hello I am frsh";
const todoList  = document.querySelector(".todo-list");

todoList.after(newTodoItem);


*/