//some method 
// while every method in javascript returns true only when every single item of an array satisfies the condition provided by the callback,
// some method returns true even when a single item of an array satisfies the condition provided by the callback function

const numbers = [3,5,8,9];

const isEven = numbers.some(number=>number%2===0);
/*
const res = numbers.some((number)=>{
    return number%2===0
})
*/


/*
function hasEven(number){
    return number%2===0
}

const res = numbers.some(hasEven);

*/
console.log(isEven);

const isOdd = numbers.some(number=>number!==0);
console.log(isOdd);