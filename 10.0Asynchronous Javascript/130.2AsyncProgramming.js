//Asynchronous programming
/*
-> tala ko code ma, setTimeout() bhitra vako code ley aru code lai block gareko xaina -> asynchronous programming
*/

console.log("Script Start");

//setTimeout returns an ID
const id = setTimeout(()=>{ 
    console.log("Hello, world!"); 
}, 1000)

for(let i=0;i<10;i++){
    console.log(".......");
}

console.log("Script id is", id);

console.log("clearing time out");
clearTimeout(id);

console.log("Script Ends");

/*
-> setTimeout() ley return gareko id store garera, teslai clearTimeout() ma rakhni ho 
    tyo particular callback function run huna paudaina 

-> "hello world" run vayena
*/