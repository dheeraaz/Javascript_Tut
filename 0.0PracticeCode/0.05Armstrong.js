// printing Armstrong numbers
// for n length number
// if number = firstdigit^n + seconddigit^n+.............lastdigit^n

function isArm(num){
    const num_copy = num;
    num = String(num);
    const n = num.length;
    let sum = 0;
    for(let i =0;i<n;i++){
        sum = sum + num[i]**n;
    }
    return sum===num_copy;
}

const armRange = 10000;
const armNumbers = [];

for(let i = 1;i<armRange;i++){
    if(isArm(i)){
        armNumbers.push(i);
    }
}
console.log(armNumbers);

