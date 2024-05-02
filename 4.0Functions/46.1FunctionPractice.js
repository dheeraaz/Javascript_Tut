//convert decimal to binary
let deciValue = 321;

function toBinary(deciValue){
    const rem = [];
    
    while(deciValue!==0){
        rem.unshift(deciValue%2) //insert to array from beginning
        deciValue = Math.floor(deciValue/2);
    }
    
    let binValue = rem.join(""); //converts to string by removing commas from array
    return Number(binValue);
}

console.log(toBinary(deciValue));

console.log("--------------------");

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