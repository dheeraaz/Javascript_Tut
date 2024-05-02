//clone nodes
   
/*
- Todo1
*/

const ul = document.querySelector(".todo-list");

const li = document.createElement("li");
li.textContent = "I am Dhiraj";

//yeha li ki ta append hunxa ki ta prepend hunxa
//since browser considers li as single node, it cannot be appended and prepended simultaneusly

ul.append(li);
ul.prepend(li);

/*
- I am Dhiraj
- Todo1
*/

//to solve above problem, we can use clone node method

/* This will not work perfectly, as only li node will be cloned, yesko child node haru-text node clone hudaina

const li2 = li.cloneNode();
ul.prepend(li2);

*/

//passing arguement-true to cloneNode() : deep clone : copies entire node along with child node(inlcuding text node)


const li3 = li.cloneNode(true);
ul.append(li3);

/*
- I am Dhiraj
- Todo1
- I am Dhiraj

*/