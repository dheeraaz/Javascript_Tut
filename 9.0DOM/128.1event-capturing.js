const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


//capturing event -> how? by making third arguement of addEventListener true

//-------------just click on child-------------------

child.addEventListener("click", ()=>{
    console.log("Captured !!! child")
},true)

parent.addEventListener("click", ()=>{
    console.log("Captured !!! parent")
},true)

grandparent.addEventListener("click", ()=>{
    console.log("Captured !!! grandparent")
},true)

document.body.addEventListener("click", ()=>{
    console.log("Captured !!! document.body")
},true)


/*
- child ma click garni bittikai
- suru ma sabai vanda top ko hierarchy ko parent(i.e body) ko event capture gareko xa ki xaina check garxa
- yedi event capture gareko xa vane call back function perform garxa
- else tyo vanda next low level hierarchy ko parent(i.e grandparent) ko event capture garxa 
- tesma event capture gareko xa vaney tesko callback function run garxa 
- and so on....

-- kunai pani top most parent ma event capture gareko xa vaney, suru ma tesko callback function run hunxa
-- tespaxi clicked element ko callback function run hunxa
-- ra finally low-to-high parents haru ko callback function run hunxa
*/

/*
capturing -> top most parent to clicked element
bubbling  -> clicked element to top most parent
*/

//---------------note: capturing occurs before bubbling------------