//function inside function

function app(){ //function declaration
    console.log("Inside app");

    const myFunc = function(){ //function expression
        console.log("Hello from myFunc");
    }

    const addTwo = (num1,num2)=>{ //arrow function
        return num1+num2;
    }

    const mul = (num1,num2)=>num1*num2; //arrow function

    const sqNum = num => num**2; //arrow function

    //to run inside functions
    myFunc();
    console.log(addTwo(4,5));
    console.log(sqNum(4));
    //here i havent used mul function which is ok
}

app();
// console.log(addTwo(4,9)); //the functions which are inside the functions are not callable from outside