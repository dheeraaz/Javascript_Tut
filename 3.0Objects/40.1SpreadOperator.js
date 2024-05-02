//spread operator in objects

const obj1 = {
    "key1" : "value1",
    "key2" : "value2",
    "key5" : "oldValue"
}

const obj2 ={
    "key3" : "value3",
    "key4" : "value4",
    "key5" : "newValue"

}

//cloning obj1 into newObj

const newObj1 = {...obj1};
console.log(newObj1);
console.log("---------------------");

//co cating obj1 and obj2
const newObj2 = {...obj1, ...obj2, myKey:"myValue"}; //yesari concating garda, yedi same key xa vaney, pasadi ko wa latest key ko value store hunxa. objects always have unique keys.
console.log(newObj2);

console.log("----------***************-----------");

//yesle Dhiraj ko individual character lai Objects ma as a key-value pair store garxa
const strObject = {..."Dhiraj"};
console.log(strObject);