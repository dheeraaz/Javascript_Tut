//forEach Method
//forEach is optional but map,reduce and filter is important

const num = [40, 100, 1, 5];
console.log(num);

function myFunc(number, index){
    console.log(`index is ${index} and number is ${number}`);
}

/*
for(let i=0;i<num.length;i++){
    myFunc(i, num[i]);
}
*/

//.forEach exactly does same as the above for loop
//it works for every element of array

//.forEach method takes a function as an argument(callback function)

num.forEach(myFunc);
console.log("***********************");

//instead of declaring and then passing a function into .forEach, you can create Anonymous function

num.forEach(function(number,index){
    console.log(`index is ${index} and number is ${number}`);
})