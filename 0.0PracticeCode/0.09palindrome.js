
// let mystr = "level"; 
// let mystr = "peep"; 
let mystr = "dhiraj";

for(let i=0;i<mystr.length;i++){
    if(mystr[0]!==mystr.at(-1)){ //compares first and last index
        break;
    }
    mystr = mystr.slice(1,-1); //removes first and last character from string
}

if(mystr.length===0||mystr.length===1){
    console.log("The given string is palindrome")
}else{
    console.log("not palindrome");
}