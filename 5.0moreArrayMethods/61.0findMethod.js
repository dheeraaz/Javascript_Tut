//find Method
//it also requires callback function to operate
//it doesnt mutate the original array
//it returns exactly one value by checking the condition provided in callback function 
// it returns very first element matching the condition
const myArray = ["hello", "cat", "dog", "sea-horse","Everest"];

function isLength(mystr){
    return mystr.length === 3;
}

const check = myArray.find(isLength);
console.log(check);

const check2 = myArray.find((a)=>{
    for(let i =0;i<a.length;i++){
        if(a[i]==="-"){
            return a;
        }
    }
})
console.log(check2);

const check3 = myArray.find((a)=>{
    return a.length===7;
})
console.log(check3);