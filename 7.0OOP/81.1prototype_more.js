//more of prototype property

function hello(){
    console.log("Hello, World");
}

console.log(hello.prototype);

hello.prototype["key1"]="value1";
hello.prototype["key2"]="value2";
console.log(hello.prototype);
console.log(hello.prototype.key1);

console.log("-----------------------------");

hello.prototype.sing = function(){
    return "mera mann kehne laga hai";
}

console.log(hello.prototype.sing());
const mylyrics = hello.prototype.sing();
console.log(mylyrics);