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