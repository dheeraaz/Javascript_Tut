
//yettikai use garni ho vaney error aauxa
//html file ma gayera, script tag ma add new attribute: type= "module"

//yeslai named export vanxa
import { age } from "./utils/age.js";

//yesari pani import garna sakinxa
import { firstName as fname} from "./utils/fname.js";

//export garni bela ma default keyword use gareko xa vaney, no need to use curly braces during the import
//yeslai default export vaninxa
//Yesma simply Person ko thau ma PN wa j pani lekhna painxa
import Person  from "./utils/person.js";

//eutai file bata multiple import garna xa vaney
// import {var1}, {var2}, {var3} from './root-directory/file-name';

const lastName = "Acharya";

//using firstName from utils/fname.js and age from utils/age.js
console.log(`my name is ${fname} ${lastName} and my age is ${age}`);

const person1 = new Person("John", "Doe", 22);
person1.info();