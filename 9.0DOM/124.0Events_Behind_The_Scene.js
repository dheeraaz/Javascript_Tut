//Scenes behind the event --see the video
//use with clickEvent.html


console.log("starting of js");

const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let sum = 0;
        for(let i=0;i<1000000000;i++){
            sum+=i;
        }
        console.log(e.currentTarget.textContent,sum); //this use garna matrai sochna parni ho, inside arrow function
    })
})

let outerVar = 0;
for(let i=0;i<100000000;i++){
    outerVar+=i;
}
console.log("value of outerVar", outerVar);
console.log("starting of js");

//I want certain time before executing : console.log(e.currentTarget.textContent);
//This can be achieved by using loop before this code


/*
Browser has two important components:
    1. JS Engine -->different for different browser-->but implementation of all js engine is similar
    2. WebApi
*/

//see video 