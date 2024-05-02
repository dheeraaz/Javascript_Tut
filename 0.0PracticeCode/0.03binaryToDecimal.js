//convert binary to decimal
let binValue = 101000001;

function toDecimal(binValue){
    binValue = String(binValue);
    let n1 = binValue.length;
    let n2 = n1;
    let sum = 0;
    for(let i=0;i<n1;i++,n2--){
        sum = sum + Number(binValue[i])*(2**(n2-1));
    }
    return sum;
}

console.log(toDecimal(binValue));