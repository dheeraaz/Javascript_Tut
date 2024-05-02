//program to find hcf and lcm of a number

// a = +prompt("Enter first number");
let a=16, b=12; 
let x=a, y=b, p = x*y;
while(b!=0){
    let r = a%b;
    a = b;
    b=r;
}
let l = p/a;
console.log(`The HCF of ${x} and ${y} is ${a}`);
console.log(`The LCM of ${x} and ${y} is ${l}`);