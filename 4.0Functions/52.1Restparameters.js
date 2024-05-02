// Rest parameters

function myFunc(a,b,c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    // console.log(`d is ${d}`); //i havent defined d as argument
}

myFunc(3,4,5,6,7,8,9); // only 3,4,5 will be printed, but what about other parameters
console.log("----------------");

function myFunc2(a,b,...c){
    //here c will get all the rest parameters as an array
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c} and type of c is ${typeof(c)} and is c an array- ${Array.isArray(c)}`);
    console.log(a[0]);
    console.log(c[0]);
}
myFunc2(10,11,12,13,14,15,16); 
myFunc2(20,21,22);
