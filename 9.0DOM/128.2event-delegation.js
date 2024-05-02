//event-delegation

const grandparent = document.querySelector(".grandparent");

//first uncomment this one
/* 
grandparent.addEventListener("click", ()=>{
    console.log("you clicked grandparent");
})
*/

//even on clicking child: the output is - you clicked grandparent

/*
- after clicking child
- the browser starts checking event capturing-> from body to child: result: no captured event
- after that
- the browser starts checking event bubbling-> from child to body: finds click event in grandparent: result: runs callback function of grandparent

//this effect is called event delegation
*/ 

//merits: no need to add separate eventlistener for child, parent and grandparent

//then comment/uncomment this one
// /*
grandparent.addEventListener("click", (e)=>{
    console.log(e.target); //yesle exactly kun element lai click gareko xa, tesko purai html content dinxa
    console.log(e.target.textContent);
    console.log("-----------------------");
    console.log(e.target.innerText);
})
// */