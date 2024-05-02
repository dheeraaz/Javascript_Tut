//this keyword
//run this code through html-go live

/*
//run this code in browser

console.log(this); //it provides window object //window object has many methods, i.e alert, cconfirm

//this === window
*/

// "use strict" //yo uncomment garyo vani, window.func() is not equivalent to myfunc()

function myfunc(){
    console.log(this);
}

myfunc();
window.myfunc(); //both are same

/*
myfunc() function kunai pani object, kunai pani class bhitra defined xaina,i.e it is a global function
tesaile- myfunc() function window object ma add vayo
now, myfunc() call garnu ra window.myfunc() call garnu eutai ho
aba inside myfunc() there is this keyword
yo this keyword vaneko object calling the method ho, i.e this===window
this matra print garnu vaneko, object calling it print garnu ho, which is window
*/