// Change the style of elements

// const mainHeading = document.querySelector("main-heading");
//yeslai yesari select garna milxa - similar to css selector

const mainHeading = document.querySelector("div.headline h2");
console.log(mainHeading);
console.log(mainHeading.style);

mainHeading.style.color = "Red"; //yesari css property jasko naam single xa, e.g: color, margin, width, display, yesto ma kehi problem xaina

//tara yesto css property jasko naam ma "-" xa, tyo use garda chai, be cautious as "-" in javascipt variable is an error, e.g: background-color

mainHeading.style.backgroundColor = "blue"; // "-" hatayera paxadi ko variable ko naam Capital bata start garni, camelCase
mainHeading.style.border = "4px solid orange"

