//counter using closure

function increase(){    
    let counter = 0;
    return function(){ //since yo function bhitra counter declare gareko xaina, while this function is being returned it takes counter = 0 with it
        console.log(counter); // yo counter vaneko bahira ko counter ho
        counter++; //yesle bahira ko counter lai update garxa
    }

}




const add = increase()
add()
add()
add()
add()