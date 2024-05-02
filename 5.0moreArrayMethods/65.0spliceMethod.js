//splice method

const myArray = [0,2,4,6,8,10,12,14];
console.log(myArray);
console.log("----------------");

const myArray2=myArray.slice(1,4); //slice method doesn't change the original array //it slices myArray from index 1 to index (4-1) 
console.log(myArray);              // and assigns to myArray2
console.log("----------------");
console.log(myArray2);

console.log("--------********************--------");

//splice method is used when some element is to be added or deleted from betweens of the array
//agadi paxadi bata delete/add garna ta shift/unshift , push/pop chadai xa ni
//unlike slice method, splice method mutates the original array

/*
argument---> start, delete, insert

for deletinng
array_name.splice(kun index bata delete garna suru garni, kati ota item delete garni, insert kehi garnu xaina vaney ignore this)

for inserting
array_name.splice(kun index bata insert garna suru garni, delete garna xaina vaney make this 0, kun kun item insert garni)

for inserting and deleting
array_name.splice(kun index bata insert/delete garni, suru ma kati ota item delete garni, tespaxi insert garna suru garxa)
*/
const myArray3 = ["item1", "item2", "item3", "item4"]
console.log(myArray3);
console.log("----------------");

//first delete some item from an array - item2,item3
const deletedItems = myArray3.splice(1,2);  // starting from index 1, delete 2 items //it also returns deleted items which you 
                       //can store or just ignore as you wish
console.log(myArray3);
console.log("deleted items", deletedItems);
console.log("----------------");
//inserting some item in an array

myArray3.splice(1,0,"inserted item2", "inserted item3");  // starting index 1, 0=no deletion, inserted items
console.log(myArray3);
console.log("----------------");

//deleting and inserting some item in an array
myArray3.splice(1,2,"inserted itemX", "inserted itemY");  // starting index 1, 2 = delete two items first, then insert following items from starting index
/*delete huni bittikai, deleted item return pani garna sakxa

const finalDelletedItems=myArray3.splice(1,2,"inserted itemX", "inserted itemY"); 
console.log(finalDeletedItems);

*/
console.log(myArray3);
console.log("----------------");


