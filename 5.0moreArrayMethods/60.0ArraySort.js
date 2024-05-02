//Array sort method: array_name.sort()

/*
sort function in javascript only works for strings(or sorts according to ASCII Value).
It will sort the strings in asscending order.
For sorting in desceding order, first use array_name.sort(), then use array_name.reverse()
*/ 

const fruits = ["Banana", "Orange", "apple", "Mango"];
fruits.sort(); //it will change(mutate) the original array //suru ma capital bata start huni aauxa ani small bata start hunin sort garxa
console.log(fruits);

/*
Now for sorting numeric values.
since, sort function works for strings, 
yeha tala suru ma 0 bata start huney number haru rakhxa, tespaxi 1 bata start huni sabai number rakhxa, tespaxi 2 bata start huni and so on
*/

const num = [40, 100, 1, 5, 0, 25, 10];
num.sort();
console.log(num);

console.log("-------------------------");
/*
Now if you want to use sort function for numeric values, you have to 
pass compare function as an argunment
or sort function will require callback function to sort numeric array
*/

//sorting in ascending order
const num2 = [4, 10, 100, 50, 0, 205, 110];

const compare = (a,b)=>{
    return a-b;
}
/*
a-b--->if positive(a is greater than b) then place b before a 
a-b--->if negative(b is greater than a) keep as it is (a agadi b paxadi)

suru ma a=4 hunxa, b = 10,100,50.....iterably agadi badxa and keeps the smallest value at index 0 , i.e 0
tespaxi a = index 1(say 10) hunxa ani b ko value iterably agadi badxa, keeping second smallest value at index 1, i.e 4
*/
num2.sort(compare);
console.log(num2);

console.log("-------------------------");

//sorting in descending order
const num3 = [42, 13, 10, 55, 0, 5, 10];

num3.sort((a,b)=>{
    return b-a;
});
// num3.sort((a,b)=>b-a);
console.log(num3);