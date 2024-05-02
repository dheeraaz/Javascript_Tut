const num = [40, 100, 1, 5, 25, 10];
console.log(num)

//now for accecessing each element of an array, we can use forEach method
//.forEach takes a function as an argument(callback function) which takes three parameters(value,index,array)
//argument: function call garni bela pass garni value
//parameter: function declare garni bela use gareko value
//it is used to operate in each element of array
num.forEach((value)=>{
    console.log(value**2);
})
console.log(num)
//'array' vanni argument ma kehi change nagare samma original array ma kehi change hudaina

console.log("--------------------------*1")
num.forEach((value,index,array)=>{
    array[index]=value*2
})
console.log(num)

//mathi ko ma array vaneko original num array ho {array = num vako hunxa}. since arrays are mutable num array also changes
//index ley element ko index dinxa
console.log("--------------------------*2")