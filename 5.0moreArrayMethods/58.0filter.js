// filter method

const numbers = [1,3,2,6,4,8];

const isEven = function(number){
    return number%2==0; //this will return either true or false
}
//filter ko callback function ley jahile pani ya ta true ya ta false return garna parxa

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers)

//yesma suru ma filter method ley 1 pass garxa
//tyo 1 isEven callback function ma pass hunxa ra callback function return either true or false depending upon the condition
//yedi true return vayo vani 1, evenNumbers ma store hunxa, false return garyo vani store gardaina
//filter function now pass 3 to the callback function
