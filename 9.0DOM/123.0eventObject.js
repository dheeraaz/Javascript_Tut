//Event Object -- important feature 
//--use with clickEvent.html

const firstButton = document.querySelector("#b1");

/*
firstButton.addEventListener("click", function(){
    console.log(this); //yesma this ko meaning, object calling it ho,i.e firstButton
})
*/

/*
- jaba pani kunai element ma eventlistener add garinxa, then browser keeps tracking whether a user performs any event or not
- and whenever browser knows that user has performed some event then browser performs following two major tasks:
    1. browser sends callback function(addEventListener()) to the js engine
    2. along with callback function, browser sends the information about the events performed to the js engine
          --> yo information lai object ko form ma send garxa
          --> yo information lai receive pani garni sakinxa, see code below: infoCode

- js engine --> line by line executes js code
- browser --> js engine + extra features
- browser --> js engine + WebApi
*/


/*
firstButton.addEventListener("click", function(infoCode){
    console.log(infoCode); //infoCode browser pass gareko information ho, which we are receiving
})
*/

//euta event performed huda browser sends an object to the js engine

const allButtons = document.querySelectorAll(".my-buttons button");

for(let button of allButtons){
    button.addEventListener("click", function(e){
        console.log(e); //yo e browser ley send gareko object ho
        console.log(e.target);
        console.log(e.currentTarget);
        console.log(this.textContent);
    })
}

/*
after printing the eventObject created by browser, see the two important key value pair of this object:
  1. target: target ko matlab kun element ley event lai trigger gareko
  2. currentTarget : yesko matlab kun element ma event listener add garem hamile

*/