//Click Event on Multiple buttons - work with clickEvent.html

/*works for only button

const firstButton = document.querySelector("#b1");

firstButton.addEventListener("click", ()=>{
    console.log("You clicked first button");
})
*/

//Now if I want to add eventListener to all the button

const allButtons = document.querySelectorAll(".my-buttons button");
/*

for(let button of allButtons){
    button.addEventListener("click", function(){
        console.log("You Clicked me");
    })
}

*/

//now i want it to be specific - for that we can use this keyword as the value of this is object calling it
//euta button click garda individual content print garni

/*

for(let button of allButtons){
    button.addEventListener("click", function(){
        console.log(this.textContent); //yesma arrow function banayo vani sabai gadabadh hunxa
    })
}

*/

//most of the time, developer use arrow function with addEventListener but we should really be careful while using 
// this keyword with an arrow function

//we can also use simple for loop also

//using forEach loop

allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this.textContent);
    })
})

