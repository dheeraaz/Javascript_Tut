let age = +prompt("Enter your age: ");
console.log(typeof age);
//prompt always takes input as a string 
//so convert age to number using number function or use (+)operator before prompt
// age = Number(age);


if(age<0){
    alert("first you should born😂");
}
if(age<18 && age>=0){
alert("you cannot watch movies, go and drink your milk kiddy");
}
else if(age>=18 && age<30){
alert("you can watch movies, enjoy your life");
}
else if(age>=30 && age<=110){
alert("you should take care of your health and wealth");
}
else if(age>110){
    alert("GHOST!!! GHOST!!! GHOST!!!")
}