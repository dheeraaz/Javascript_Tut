// const arr = [1,9,34,23,42,11,78,21,44];
const arr = [-1,-9,-34,-23,-42,1,-78,-21,-44];

function findMax(myArr){
    let max = myArr[0];
    for(let i=1;i<myArr.length;i++){
        if(max<myArr[i]){
            max = myArr[i];
        }
    }
    return max;
}

console.log(findMax(arr));