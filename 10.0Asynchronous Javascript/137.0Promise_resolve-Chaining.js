//Promise.resolve 
// Promise chaining

/*
const numPromise = new Promise((resolve)=>{
    resolve(5);
})
numPromise.then((myNum)=>{
    console.log(myNum);
})
*/

const numPromise = Promise.resolve(5);

numPromise.then(myNum=>{
    console.log(myNum);
})

console.log("-------------------------");

// then()
//then method always returns promise - adavantage: we can do chains of promise


function newPromise(){
    return new Promise((resolve, reject)=>{
        resolve("dhiraj");
    })
}

newPromise()
    .then(value=>{
        console.log(value);
        value+=" acharya"; //updating the value of "value inside the newPromise"
        return value; //it is actually returning the whole promise
        //return value nagreko vaye undefined return hunthyo 
        // return Promise.resolve(value) //internally yesto vaira ko xa
    })
    .then(newValue=>{
        console.log(newValue);
        newValue+= " another";
        return newValue;
    })
    .then(value=>{
        console.log(value);
    })

//.then() ko chaining garna agadi ko then ley promise(or value) return garna parxa