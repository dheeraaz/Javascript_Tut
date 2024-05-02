//setTimeout Continue

console.log("Script Start");

setTimeout(()=>{ 
    console.log("Hello, world!"); 
}, 0)

for(let i=0;i<10;i++){
    console.log(".......");
}


console.log("Script Ends");

/*
# yesma ajhai pani "Hello, world!" last ma print vaira xa, but why? time==0ms xa...

-> callsatack bhitra, GEC bhitra "Script Start" print hunxa
-> 2nd line ma setTimeout function dekhepaxi, javascript forwards this function to browser and tells the browser to provide callback 
    function after 0ms and moves to next lines.

-> javascript start executing for loop and at the same time(after 0ms) browser sends callback function to "callback queue"
-> since lines are being executing in GEC(inside callstack), "event loop" prevents callback function to move from callback queue to callstack

-> now callstack ma for loop + "script Ends" line run vaisakepaxi, callstack khali hunxa ra aghi ko callback function callstack ma gayera run hunxa 
*/

/*
-> Time jati rakhepani, setTimeout() bhitra ko callback function, sabai code run vayepaxi matrai, run hunxa
*/

/*
-> Teso vaye, time as an argument kina pass garna paryo ta?
-> time vaneko, minimum time ho, 
-> kam se kam, yetti time chai delay hos. tara actual ma yo time vanda pani badhi jana sakxa
    -> paxadi ko code chitto run huni vayekole, most of the cases ma, hamiley deko 1s, 2s paxi nai code run hunxa

-> ra duita setTimeout function xa vaney chai, tyo duita bich time difference garna sakinxa
*/