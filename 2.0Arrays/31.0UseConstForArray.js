const fruits = ["apple", "mango", "grapes", "banana"];

/*
actual ma; fruits = 0x11 (address) ho
hamile fruits array ma kunai element push garera fruits ko address change gareko xainam
tesaile push sajilai sanga hunxa

array methods like: push pop shift unshift slice etc use garna painxa
 */
fruits.push("newFruits");
console.log(fruits);
fruits.unshift("newFruits1");
console.log(fruits);
fruits.shift();
console.log(fruits);

/*
but if we do:
fruits = ["newfruits", "newFruits"];
yesto garem vaney chai fruits ko address change hunxa, so const array ma yesari change garan paidaina

let use garem vaney, yesari paxi gayera change garna painxa
*/

//NOTE: IT IS ALWAYS BEST PRACTICE TO USE CONST KEYWORD WHILE CREATING AN ARRAY
