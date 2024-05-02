//printing prime numbers
function isPrime(num){
    let flag = true;
    for(let i=2;i<Math.floor((num+2)/2);i++){
        if(num%i===0){
            flag = false;
            return flag;
        }
    }
    return flag;
}

let rangeNum = 10;
const pri = [], com = [];

for(let i=2;i<=rangeNum;i++){
    if(isPrime(i)){
        pri.push(i);
    }else{
        com.push(i);
    }
}

console.log(pri);
console.log(com);