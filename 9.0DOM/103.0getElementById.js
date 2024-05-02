// select element by using get element by id

// document.getElementById("main-heading"); //does nothing
console.log(document.getElementById("main-heading"));
//this shows as if it is resturning a whole html element-element associated with main-heading tag
// But actual ma it is returning an object

console.dir(document.getElementById("main-heading"));
//actual ma k return gareko vanera yo code ley dekhauxa
//actual ma object return garira xa

console.log(typeof document.getElementById("main-heading"));

const mainheading = document.getElementById("main-heading")
console.log(mainheading);
