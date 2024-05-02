

const names = ["dhiraj", "ram", "shyam", "hari"];

console.log(names[1]); //this one works, which is normals

console.log("-----------------------");

console.log(names["1"]); //array ma string pass garda pani kaam garxa, which is definitely not normal


console.log("-----------------------");

//so when we use, ForIn loop, tesma use huney index(or key) string ma hunxa ; see 34.0ForInLoopInArray.js

for(let key in names){
    console.log(names[key]);
}

console.log("-----------------------");

for(let index in names){

    console.log(typeof index);
}

