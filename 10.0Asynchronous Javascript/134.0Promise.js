//promise 
//promise asynchronously kaam garxa

//Promise euta yesto value ho jun hamilai ahile thaha xaina tara future ma thaha hunxa
//Promise represents future value


/*
promise to make fried rice

Status : Pending
value  : undefined

1. go to kitchen->see bucket-> all the ingredinets are present 
make fried rice and keep the promise

status : fulfilled/resolve
value  : fried rice

2. go to kitchen->see bucket-> all the ingredinets are NOT present 
cannot make fried rice

status : reject
value  : message ->{rice not present}
*/

//new Promise() -> creates promise
//Promise(()) contains one function called executer function
//() executer function contains two parameters called resolve and reject
//resolve and reject are also functions

//producing promise
const bucket = ['coffee', 'chips', 'vegetable', 'salt', 'rice'];

const friedRicePromise = new Promise((resolve, reject)=>{
    if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice");
    }else{
        reject("No Fried Rice");
    }
}) 

//consuming promise

friedRicePromise.then((myFriedRice)=>{ //"myFriedRice" sent by resolve
    console.log("lets eat ", myFriedRice);
}, (error)=>{
    console.log(error); //error sent by reject
}) 

/*

promiseName.then(()=>{}, ()=>{}) takes two callback function 
-> first callback function is for resolve 
-> second callback function is for reject

friedRicePromise.then(null, (error)=>{ //keep parameter null, if you dont want to use it
    console.log(error); //error sent by reject
}) 

*/

/*yesari pani garna milxa

friedRicePromise.then((myFriedRice)=>{
    console.log("lets eat ", myFriedRice);
}).catch((error)=>{
    console.log(error);
}) 

//promise resolve vayo vani .then wala code chalxa vaney, reject vayo vani .error wala code chalxa


*/

