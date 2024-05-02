//setInterval

//setTimeout -> certain time(minimum time) wait garxa, ani purai code run vayepaxi callback function run hunxa

console.log("Script Starts");

const id = setInterval(()=>{
    console.log(Math.random());
},1000)

console.log("Script Ends");

/*
- same as setTimeout, suru ma callstack ma GEC create hunxa and then prints "Scripts Starts"
- setInterval(time is minimum time) is givn to browser asking to return its callback function after minimum of 1000ms
- code continue
- callback queue 
- event loop checks callback queue and callstack
- finally into callstack
- starts executing callback function in every interval of given time(1000ms)

*/



