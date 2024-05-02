//keypress event
//mouseover event

//use with HTML&CSS -> index.html
const body = document.body; //this also selects the body

//activates whenever any keyboard button is pressed
body.addEventListener("keypress", (e)=>{
    console.log(e);
    console.log(e.key);
})

//open: console-->press any keyboard button-->keyboardEvent(output)-->see key:

//mouseover event -> gets triggered on hovering

const mainButton = document.querySelector(".btn-headline");

console.log(mainButton);

mainButton.addEventListener("mouseover", ()=>{
    console.log("mouseover event occured");
})

//gets triggerd when after hovering
mainButton.addEventListener("mouseleave", ()=>{
    console.log("mouseleave event occured");
})