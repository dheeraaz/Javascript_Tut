
function checkCount(a,b){
    let count=0;
    for(let i=0;i<b.length;i++){
        if(b[i]===a){
            count++;
        }
    }
    return count
}

console.log(checkCount("a","Sagar"));

function checkWholeNumber(a){
    a = String(a)
    return (!a.includes("."))
}

console.log(checkWholeNumber(4));

function splitNumber(a){
    let res = [];
    a = String(a);

    for(let i = 0;i<a.length;i++){
        res.push(Number(a[i]))
    }
    return res;
}
console.log(splitNumber(4567));

function removeFromArray(a){
    let i =0;

    while(i<4){
        a.shift();
        i++;
    }
    return a;
}

console.log(removeFromArray([1,2,4,5,6,7]));
