//filter method


const numbers = [45, 23, 21, 0, 3,5];
//now if i want the numbers less than 10

const filteredNumbers = numbers.filter((value)=>{
    return value<10; // it will either return true or false
});
console.log(filteredNumbers);

//it simply filters out the values/element by checking the condition given in return functison and creates a new array
// filter method's callback function should always return boolean value, either true or false
// if the calback function return true, then particular value is stored in newarray else it is not added

console.log("--------------------------*1")

const myNumbers = [3,4,6,1,8,9,10,0,16,-4]; 

//filter function to select perfect square number;
const newNumbers = myNumbers.filter(value=>Math.sqrt(value)%1===0&&value>0);
/*
const newNumbers = myNumbers.filter((value)=>{
    return (Math.sqrt(value)%1===0&&value>0);
})

*/
console.log(newNumbers);