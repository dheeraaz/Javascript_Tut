//closures example 3

function myFunction(power){
    return function(base){
         console.log(base**power);
    }
    // return base=>console.log(base**power);
}

// const myFunction=power=>base=>console.log(base**power);

const square = myFunction(2);
square(3);

const cube = myFunction(3);
cube(2);