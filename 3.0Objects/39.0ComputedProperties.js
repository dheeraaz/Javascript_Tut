//computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myValue1";
const value2 = "myValue2";

// i want something like below, but using above variables;
/*
const obj = {
    "objkey1":"myValue1",
    "objkey2":"myValue2"
}
console.log(obj);
*/

//This will not give the desired output

/*
//key1 and key2 ramains as key name, variable bata value assign hudaina
//tara value1 ra value2 ma chai variable bata value assign hunxa

const obj ={
    key1 : value1,
    key2 : value2
}

console.log(obj); 

//output : { key1: 'myValue1', key2: 'myValue2' }

*/

//so we use computed properties to resolve this issue

const obj = {
    [key1] : value1,
    [key2] : value2
}

console.log(obj);
