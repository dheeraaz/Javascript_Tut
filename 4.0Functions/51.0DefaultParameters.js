//Default Parameters

function addTwo(a,b=2){
    return a+b;
}
console.log(addTwo(2));

function addThree(a=1,b,c){//always place default parameters value at the lasts
    return a+b+c;
}

// console.log(addThree(2,3)); // this will give error as: a=2,b=3,c=undefinded