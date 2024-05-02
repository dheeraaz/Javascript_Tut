// Promise and timeout together
//basically resolving or rejecting after 2 sec

console.log("Script Start");

function myPromise(){
    return new Promise((resolve, reject)=>{
        // const value = true;
        const value = false;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000)
    })
}

// myPromise().then(()=>{}).catch(()=>{})

myPromise().then(()=>{
    console.log("resolved");
}).catch(()=>{
    console.log("not resolved");
})

console.log("Script Ends");
