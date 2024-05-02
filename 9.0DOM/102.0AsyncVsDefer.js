//async vs defer : correct way of lining javascript file

console.dir(document);

// <script src="102.0DOM_intro.js"></script> 

/* 1 Not good method
mathi ko javasript file HTML ko <head></head> bhitra halni ho vaney:
- Browser starts parsing the HTML File and as soon as it reaches the line containing <script src="102.0DOM_intro.js"></script>, it 
loads it and starts executing it.
- But that javascript file may be using some DOM manipulation code to handle HTML's tags(form, input, div, header), tara HTML ta 
completely load vakai xaina, so it will give an error. 

--> So above method of linking javascript is completely wrong
*/

/*2 Not good method
mathi ko javascript file, HTML ko </body> tag end hunu vanda just mathi link garni:
-Yo method ma HTML ko sabai contents haru pahila parse  hunxa tespaxi balla at the end javascript ko file load and execute hunxa,
which doesn't give any error as long as javascipt file has no error.

--> BUt this method also has some problem, which is:
- 1. HTML > parse -------------- Takes some time
- 2. Javascript > Load --------- Takes some time
- 3. Javascript > Execute ------ Takes some time

- MAthi ko steps haru synchronous way(one step another) ma vako vayera, time badhi lagira xa 
- If we some how manage to above steps executing in asynchronous way, we can improve the performance.
*/

/* 3 Not good method - async
<head>
<script src="102.0DOM_intro.js" async></script> 
<title></title>
</head>

-> yo method ma script tag contains one extra attribute - async

- yo method ma browser keeps parsing the html file and as soon as it sees script tag containing async attribute, 
it starts loading javascript file and parsing of HTML file doesnt stop.

- So parsing of HTML reaches some line of HTML code (say 90), ra tyo line ma pugda javascript file pani load vaisakxa 
- aba browser parsing ko kaam rokera, javascript file execute garna tarfa lagxa.

- yo method ma HTML file partially matrai parse vako xa, so still there is possibility of having error during the execution of
javascript file.

--> Parsing of HTML 
--> Loading of javascript(parsing stops) --> Execution of Javacript (might give error) --> Parsing of HTML continues                   
*/ 

/* 4 best method - defer
<head>
<script src="102.0DOM_intro.js" defer></script> 
<title></title>
</head>

-> yo method ma script tag contains one extra attribute - defer

- somewhere similar to above, parsing of HTML keeps happening simultaneously with the loading, tara loading sakkiyepaxi instead of 
starting to execute javascript(by stopping the parsing of html) -> yesma chai loading of javascript ra parsing of html sang
sangai chalira hunxa, ra javascript load vayepaxi, parsing continue hunxa, ra balla last ma loaded javascript execute hunxa

--> Parsing of HTML---------------------parsing chalira xa-------end of parsing --> Execution of Javacript 
--> Loading of javascript--|

- 1. HTML > parse -------------- Takes some time
- 2. Javascript > Load --------- parse huni time ma load hunxa, so takes no time
- 3. Javascript > Execute ------ Takes some time
*/


