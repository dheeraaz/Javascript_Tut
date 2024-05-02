// text content and Inner text - changing text

const mainHeading = document.getElementById("main-heading");
//since mainHeading is now object as getElementById returns an object, it also has various methods

console.log(mainHeading.textContent);
//Efficiently ko display none xa, but still textContent is returning everything

//now i want to change the content of main-heading using javascript


/* uncomment it to see the changes

mainHeading.textContent = "This is changed using Javascript";
console.log(mainHeading.textContent);

*/


//<------Inner Text------------>
console.log(mainHeading.textContent);
//Efficiently ko display none xa, but still textContent is returning everything
//textContent returns all the text present inside the selected element
console.log(mainHeading.innerText);
//But yesle just immediate text matrai return

