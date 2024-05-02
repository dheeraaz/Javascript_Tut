//introduction to events
//-reaction to certain action
//-action is events - clicking button, scrolling

//event -> mouse event -> onclick

//there are three ways to add event : 

/*1. firing event on html
<button class="btn btn-headline" onclick="console.log('you clicked me')">Learn More</button>
-bahira double quote xa vaney bhitra single quote halni
- This is old method of firing event
*/

/*2. first selecting an element and then assigning a function to it

const btn = document.querySelector(".btn-headline");
btn.onclick = function(){
    console.log("You clicked me");
}

//This method is also not recommended as we can not trigger function more than one
*/

//method 3 ---> add event listener

const btn = document.querySelector(".btn-headline");

function clickMe(){
    console.log("you clicked me");
}

btn.addEventListener("click", clickMe); //("eventName", functionName_without-parenthesis)

/*
btn.addEventListener("click", function(){
    console.log("You clicked me");
})

//arrow function

btn.addEventListener("click", ()=>{
    console.log("You Clicked me");
})

*/

