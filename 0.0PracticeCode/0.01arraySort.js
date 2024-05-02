//array sorting without using sort function

const num = [40, 100, 1, 5, 0, 25, 10];

for(let i =0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
        if(num[i]>num[j]){
            [num[j],num[i]] = [num[i],num[j]]; //swapping using array destructuring
        }
    }
}

console.log(num);