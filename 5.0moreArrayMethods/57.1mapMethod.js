//map function is also similar to .forEach method except .forEach is used to operate on each element of array whereas 
//map function returns a value(or returns an array)
// forEach function ma kehi return nagarda pani hunxa tara map method ma return garanai parxa
//new array ma kun value halni vanera return garna parxa, operation purano array element ma hunxa

const num = [3,4,6,1,8]; 

const newa = num.map((value,index)=>{
    return value + index;
})
console.log(newa)

console.log("--------------------------*3")

const sqnum = [1,4,9,16,25,36];

const mysqrt = sqnum.map(Math.sqrt)
console.log(mysqrt)