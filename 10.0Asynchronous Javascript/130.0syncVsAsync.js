//synchronous programming vs asynchronous programming

//synchronous programming

/*
-> everything we have practiced till now, is synchronous programming

-> Line by execution of program, in which the next line doesn't execute untill and unless the previous line has executed completely
is called synchronous programming.
*/
/*

console.log("script start");

for(let i=0;i<=10;i++){
    console.log("inside for loop");
}

console.log("Script end"); //this line executes only after the complete execution of above code
*/

/*
-> synchronous programming ma code block huna sakxa, yeti agadi ko code run huna time lagaira xa vaney
-> "backend fetching, processing vaira xa vaney, frontend ma wa backend mai pani crucial code run huna napaunu 

*/

//JAVASCRIPT ITSELF IS A SYNCHRONOUS PROGRAMMING LANGUAGE AND IT HAS A SINGLE THREAD
//SINGLE THREAD EXECUTES CODE LINE BY LINE
//SO JAVASCRIPT IS A SINGLE THREADED SYNCHRONOUS PRGORAMMING LANGUAGE

//JAVASCRIPT PROVIDES SOME FEATURES WHICH ENABLES US TO DO ASYNCHRONOUS PROGRAMMING

// -------------setTimeout-------------

console.log("Script Start");
/*
function hello(){
    console.log("Hello, World!");
}

setTimeout(hello, 1000); //yo line ko meaning, kam se kam 1000ms/1sec paxi hello function run hoss
*/
setTimeout(()=>{ 
    console.log("Hello, world!"); //yesari pani lekhna sakinxa
}, 1000)


console.log("Script Ends");

/*
-> suruma callsatack ma GEC(Global Execution Context) create hunxa, which runs all the files or code
-> first line: console.log("Scripts Starts") simply GEC ma janxa ra run hunxa
-> setTimeout() function is not provided by j avascript but it is actually provided by browser
-> since setTimeout() function is not present in javacscript rather provided by browser, it forwards this function to 
    browser[Web APIs provided By Browser]
-> And javascript tells the browser to provide the callback function after 1000ms and continues to execute normally
-> Now, javascript prints: comnsole.log("Scripts Ends") 
-> Browser was keeping track of time, and as soon as 1000ms reached, it sends the callback function to "Callback Queue"
-> "Event Loop" keeps checking the current execution of javascript code(inside callstack) and callback queue.
-> As soon as, current line gets executed(no line being executed inside callstack), event loop sends callback function from  callback queue to Gloabl Execution Context
-> Now, GEC ma callback function: console.log("hello, world!") run hunxa
*/