//fill method
//it takes three argument--->value,start,end
//it mutates the original array

//make an array of length of 10, whose all values are -1
const myArray = new Array(10).fill(-1);
console.log(myArray);

const newArray = [1,2,3,4,5,6,7,8];
//change the value of array element having index:2,3,4 to 0;
newArray.fill(0,2,5); //kun value ley fill garni, starting index(included), ending index(not included)
console.log(newArray);


