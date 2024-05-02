//Promise - working as aysnchronously, i.e. promise is not the function provided by javascript but rather it is provided by browser

console.log("script start");

const bucket = ['coffee', 'chips', 'vegetable', 'salt', 'rice'];


const friedRicePromise = new Promise((resolve, reject)=>{
    if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice");
    }else{
        reject("No Fried Rice");
    }
})

friedRicePromise.then((myFriedRice)=>{
    console.log("lets eat ", myFriedRice);
}).catch((error)=>{
    console.log(error);
})

setTimeout(()=>{
    console.log("calling from settimeout");
},0)

for(let i=0;i<=20;i++){
    console.log(Math.random(),i);
}

console.log("script ends");

/*
- suru ma "script starts" print hunxa
- const bucket javascript ko memory ma store hunxa
- promise = friedRicePromise is also object, so yo pani javascript ko memory store hunxa
- but .then wala ra .catch wala kaam chai browser ley garxa ra result chai friedRicePromise lai dinxa
    -> **browser ley garni kaam callstack queue -> event queue -> hudai GEC(calltack) ma janxa {callstack queue ma haina "Microtask queue"}
    -> browser ley garni kaam Microstack queue -> event queue(checks GEC callstack) -> hudai GEC(calltack) ma janxa [promise ko kaam microstack ma jaxa]
    -> callstack ma pugna lai suru ma callstack khali huna parxa
-> promise = friedRicePromise, javascript ko memory ma store vayexi, tespaxi ko line, setimeout wala code ma janxa
    -> yo pani browser ko kaam vayera browser ma janxa
    -> Browser->Callstack Queue->Event Queue(keeps checking GEC)->Callstack

-> setTimeout ley garni kaaam browser lai diyepaxi, javascript keeps running other code, i.e For loop
-> tespaxi "script ends" print hunxa
-> callstack khali hunxa, so aba .then ra .catch wala code GEC(callstack) ma gayera run hunxa -> Suru ma microStack ko callback function 
    ley priority pauxa
-> tespaxi, callstack queue ko callback function GEC ma janxa [micrtask queue>(higher priority)callstack queue]

*/

