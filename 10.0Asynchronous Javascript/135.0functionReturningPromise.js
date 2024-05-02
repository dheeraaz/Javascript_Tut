//function returning promise

const bucket = ['coffee', 'chips', 'vegetable', 'salt', 'rice'];

function ricePromise(){
    return new Promise((resolve, reject)=>{
        if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("Fried rice");
        }else{
            reject("Not Fried Rice");
        }
    })
}


//yeha promise lai function jasari call garni
ricePromise().then((myFriedRice)=>{
    console.log("lets eat", myFriedRice);
}).catch((error)=>{
    console.log(error);
})