const mainButton = document.querySelector("button");
const body = document.querySelector("body");
const colorName = document.querySelector(".color-name");

/*
const colorName = document.getElementsByClassName("color-name")[0]; //yesma indexing pani garna parxa as it is returning html collection - this is done to select element
console.log(colorName.textContent);
*/


//main concept: the value of rgb color lies between 0 to 255

function randomColorGenerator(){
    const red = Math.floor(Math.random()*256); //generates number between 0 to 255(256 is exclusive)
    const green = Math.floor(Math.random()*256); 
    const blue = Math.floor(Math.random()*256); 

    return `rgb(${red},${green},${blue})`;
}

mainButton.addEventListener("click", ()=>{
    const randomColor = randomColorGenerator(); //gets random color: rgb(xx,xx,xx);
    body.style.backgroundColor = randomColor;
    colorName.textContent = randomColor;

})
