//converting callback hell(133.0___.js and 133.1____.js) into flat code
//use with 133.0callbackDemo.html

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

//same function as in 133.1callback-InAsynchronousP.js
function changeText(element, text, color, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject("element not found");
            }
        }, time)
    })
}

/*
const returnedPromise = changeText(heading1, "heading1", "violet", 1000)

returnedPromise.then(()=>{
    changeText(heading2, "heading2", "red", 2000)
})

*/

/*
changeText(heading1, "heading1", "violet", 1000).then(()=>{again_call_another_promise}).catch(()=>{error_message})
*/

/*
const returnedPromise = changeText(heading1, "heading1", "violet", 1000);

    returnedPromise.then(()=>{
        return changeText(heading2,"heading2", "red", 2000);
    })
    .then(()=>{
        return changeText(heading3,"heading3", "pink", 2000);
    })
    .then(()=>{
        return changeText(heading4, "heading4", "green", 1000);
    })
    .then(()=>{
        return changeText(heading5, "heading5", "orange", 1000);
    })
    .then(()=>{
        return changeText(heading6, "heading6", "blue", 1000);
    })
    .then(()=>{
        changeText(heading7, "heading7", "cyan", 1000);
    })
*/

/*
changeText(heading1, "heading1", "violet", 1000)
    .then(()=>{
        return changeText(heading2,"heading2", "red", 2000);
    })
    .then(()=>{
        return changeText(heading3,"heading3", "pink", 2000);
    })
    .then(()=>{
        return changeText(heading4, "heading4", "green", 1000);
    })
    .then(()=>{
        return changeText(heading5, "heading5", "orange", 1000);
    })
    .then(()=>{
        return changeText(heading6, "heading6", "blue", 1000);
    })
    .then(()=>{
        changeText(heading7, "heading7", "cyan", 1000);
    })
*/
changeText(heading1, "heading1", "violet", 1000)
    .then(()=>changeText(heading2,"heading2", "red", 2000)) //arrow functio ma bich ma kehi nagari direct return gareko xa venry return keyword lekhirakhna pardaina
    .then(()=>changeText(heading3,"heading3", "pink", 2000)) 
    .then(()=>changeText(heading4, "heading4", "green", 1000)) 
    .then(()=>changeText(heading5, "heading5", "orange", 1000)) 
    .then(()=>changeText(heading6, "heading6", "blue", 1000)) 
    .then(()=>changeText(heading7, "heading7", "cyan", 1000)) 
    .catch((error)=>{console.log(error)})

//for catch-> change-> const heading4 = document.querySelector(".headingX");
