//------------ event-bubbling / event propagation ---------------
// event-capturing
// event-delegation

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//-------------just click on child-------------------
//---------------note: capturing occurs before bubbling------------


//suru ma yo matrai huda, child ma click garda, yesai ko callback function run hunthyo
child.addEventListener("click", ()=>{
    console.log("you clicked on child")
})


//now after adding this eventlistener, child ma click garda: duitai: you clicked on child + you clicked on parent aaira xa
parent.addEventListener("click", ()=>{
    console.log("you clicked on parent")
})
 

/*
whenever click event is performed in child, then browser checks whether the same event(i.e click event) is applied to its parent  
element or not and if there exists such event, then browser itself calls the callback function associated with parent elements too

*/

grandparent.addEventListener("click", ()=>{
    console.log("you clicked on grandparent")
})
/*
- on clicking child
you clicked on child
you clicked on parent
you clicked on grandparent

-on clicking parent
you clicked on parent
you clicked on grandparent

*/
document.body.addEventListener("click", ()=>{
    console.log("you clicked on document.body")
})


//mathi ko phenomenon lai event bubbling/ event propagation vanxa
