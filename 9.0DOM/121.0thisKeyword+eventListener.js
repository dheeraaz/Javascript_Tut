//This keyword inside eventListener callback

const btn = document.querySelector(".btn-headline");

btn.addEventListener("click", function(){
    console.log("You clicked me");
    console.log(this);

    //function lai bhitra wa bahira jata banayepani, this function yo case haru - object calling it,i,e button aafai ho
})

/*
btn.addEventListener("click", ()=>{
    console.log("You clicked me");
    console.log(this);
})

//yo case ma this vaneko window function ho - as this keyword inside arrow function ley ek level up ko object lai represent garxa

*/

