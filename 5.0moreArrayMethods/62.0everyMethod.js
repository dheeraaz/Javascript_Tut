//every method
//every method return either true or false
//every method returns true provided that every element of an array satisfies the condition provided in the callbacck function

const numbers = [2,4,6,10,11];
// const numbers = [2,4,6,10];

const res=numbers.every((number)=>{
    return number%2===0;
});

console.log(res);

// callback function---->returns true/false (boolean)
// finally, every method ----> returns true/false (boolean)

function isEven(number){
    return number%2===0;
}

console.log(numbers.every(isEven));
