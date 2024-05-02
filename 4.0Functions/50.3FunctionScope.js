function myApp(){
    if(true){
        let firstName = "dhiraj";
        console.log(firstName);
    }
    // console.log(firstName);
    /*
    This will give an error as let is block scope;
    */
}

myApp();
console.log("-------------------");
//but using var keyword, if it is decleared inside the function, it can be accessed anywhere inside the function
function myApp2(){
    if(true){
        var firstName2 = "Ram";
        console.log(firstName2);
    }

    console.log(firstName2);
    
    if(true){
        console.log(firstName2);
    }
}
myApp2();

// console.log(firstName2);
/*
This will give error as variable created inside function(using var or let) cannot be accessed from outside the function
*/
