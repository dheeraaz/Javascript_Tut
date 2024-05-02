//.map Method 
// map also takes callback function as a input
// unlike forEach method it returns an array
const numbers = [3,4,6,1,8]; 

const square = function(number){
    return number*number;
}

const newNumbers = numbers.map(square);
console.log(newNumbers);

/*
const newNumbers = myNumbers.map((value,index,array)=>{
    array[index] = value**2;
    return value*2;
})

console.log(newNumbers);
console.log(myNumbers);

*/