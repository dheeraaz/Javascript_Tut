//using at method - one of the array method to access last element of an array
//it supports negative indexes also

const myArray = [78,23,1,9,15,67];

//old method

let lastValue = myArray[myArray.length-1];
console.log("using old method, last value of array is: ",lastValue);

lastValue = myArray.at(-1);
console.log("using at keyword, last value of array is: ", lastValue);

for(let i=1; i<=myArray.length;i++){
    console.log(myArray.at(-i));
}