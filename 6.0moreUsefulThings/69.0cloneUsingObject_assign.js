//clone using Object.assign

//both array and object are reference type data 

const obj = {
    key1: "value1",
    key2: "value2",
}

const obj2 = obj;

obj["key3"]= "value3";

//although I added new key-value, i.e key3:"value3" to obj, it will appear in obj2 as well because obj2 is holding the same address as obj
console.log(obj2);

console.log("----------------------------");

//so we need to clone object

//method 1
/*
const obj3 = {...obj};

//try to use this method while cloning
//yo new method ho
*/

//object.assign({}, <from_which_to_clone>); //This is old method

const obj3 = Object.assign({}, obj);
obj3.key4 = "value4";
console.log(obj);
console.log(obj3);