//Ternary Operator 

let age = 12;
let drink; //drink == milk if age<10 and drink == coffe if age>10

// (age>=10)?(drink="coffee"):(drink="milk");
drink = (age>=10)?"coffee":"milk";

console.log("you can drink " + drink);

// finding greatest number among three variables using ternary operator

// let a = 8, b =10, c = 12, g;
let a = 8, b =10, c = 9, g;

// (a>b)?((a>c)?(g=a):(g=c)):((a>c)?(g=b):((b>c)?(g=b):(g=c)));
g = (a>b)?((a>c)?a:c):((a>c)?b:(b>c)?b:c);
// g = (a>b)?((a>c)?a:c):((b>c)?b:c); //this one is better solution

console.log("The greatest number is "+g);