//reduce method
//the reduce function takes four argument: (total,currentValue,currentIndex,arr)
//'total' argument takes first value and then previous total values
//'currentvalue' argument takes second value and afterwards value
//'currentIndex' argument takes index value starting from 0 to arr.length value

//.map and .filter returns array whereas reduce method returns accumulated value

//finding sum of all the numbers in an array

const numbers = [1,3,5,7,9];
//it doesnt change original array
const sum = numbers.reduce((total,currentValue)=>{
    return total+currentValue;
})
console.log(sum);

//now also adding index value to total sum

const sum2 = numbers.reduce((total,currentValue,currentIndex)=>{
    return total+currentValue+currentIndex;
})

console.log(sum2); // (1+3+1)+(5+5+2)+(12+7+3)+(22+9+4) = 35

console.log("--------------------------*")

const arr3 = [1,2,3,5,2,1];

const newSum = arr3.reduce((value1,value2,value3)=>{
    return value1+value2+value3;
});
console.log(newSum);

//yesma value1 vaneko first value pani ho ra result store garni variable pani ho
// so suru ma valu1 = 1 hunxa
// tespaxi value2 vaneko next value ho, suru ma 2 tespaxi 3, 5 hudai janxa
// value 3 vaneko index ho (index of currentValue)
// so, first iteration ma: value1(1), value(2) ra value3(1), yo 3 ota ko sum garera value1 ma halxa, i.e 4
//tespaxi value1(4)+value2(3)+value3(2), => value1(9)

//(1+2+1)+(4+3+2)+(9+5+3)+(17+2+4)+(23+1+5)=29