const getRndInteger=(min,max)=>{
    return Math.floor((Math.random()*(max-min+1))+min)
}

console.log("The random number is: "+getRndInteger(100,1000));