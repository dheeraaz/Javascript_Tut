//write a function to add all the parameters provided

function addAll(...nums){
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum = sum + nums[i];
    }
    return sum;
}

// function addAll(...nums){
//     let sum = 0;
//     for(let num of nums){
//         sum = sum + num;
//     }
//     return sum;
// }

let result = addAll(1,2,3,4,5);
// let result = addAll(1,2);
// let result = addAll(1,2,5);
// let result = addAll(9);

console.log(result);