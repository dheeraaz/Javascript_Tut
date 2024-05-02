// a word is said to be anagrram of another if it is formed by rearranging the alphabet of another word
//e.g: dictionary--> indicatory, testing --> setting

function isAnagramWrong(str1, str2){
    let array1 = [...str1].sort();
    let array2 = [...str2].sort();

    return array1===array2; 
    /*
    - this will always give false although two arrays have same length and same values
    - this is because array1 = 0x111 (since array1 holds the address of first element of array1) and array2 = 0x222
    - and these two pointers will always have the different values 
    */
}

function isAnagramRight(str1, str2){
    str1 = [...str1].sort().join(""); //first converts to array, sorts all the elements alphabetically and then again converts to string
    str2 = [...str2].sort().join("");

    return str1===str2;
}

let str1 = "indicatory";
let str2 = "dictionary";
console.log(isAnagramWrong(str1, str2));
console.log("----------------------");

if(str1.length!==str2.length){
    console.log("invalid inputs");
}else{
    console.log(isAnagramRight(str1, str2));
}