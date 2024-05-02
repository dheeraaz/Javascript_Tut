//Intro to hoisting
//Hoisting is a feature/behavour of javascript that it moves declaration to the top.
//Declaration can be of declaration of variable, function and class

//Now Hoisting of function simply refers to using the function before actually declaring it. It only works with function declaration but not with function expression and arrow function

hello(); //This will not give an error because of hoisting
         //The interpreter moves the function declaration at the top
         //This cannot be used with function expression and arrow function

function hello(){
    console.log("Hello, World");
}

// console.log(isEven()); //This gives an error

const isEven = num => num%2===0;
console.log(isEven());


//Hoisting of variable; only works with var keyword but doesnt work with let and const keywords
//here we are assigning and using x-value before declaring it

x = 5; //x ma value assigned vaisakyo
console.log(x); //we are using the value of x which is 5 //output:5
var x;  //finally decalring it

console.log(y); //output:undefined //reason: var y lai top ma ta lagyo tara value assign vaisakeko xaina so it is undefined
var y;
y=6;
 