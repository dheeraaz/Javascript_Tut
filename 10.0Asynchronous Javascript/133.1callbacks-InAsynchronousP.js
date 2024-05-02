//Callbacks, callback hell, the pyramid of doom
//asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

/*
setTimeout(()=>{
    heading1.textContent = "Heading1";
    heading1.style.color = "violet";
},1000)
*/

//doing same job as 133.0___.js but using function

function changeText(element, text, color, time, onSuccessCallback, onFailurecallback){
    setTimeout(()=>{
        if(element){ //valid element ho ki haina check gareko
            element.style.color = color;
            element.textContent = text;

            if(onSuccessCallback){ //yedi callback function pathako xa vane kaam garr haina vaney nagar
                 onSuccessCallback()
            }

        }else{
            if(onFailurecallback){ //onFailureCallback call garna, tyo pass gareko huna paryo
                onFailurecallback();
            }
        }

    },time)
}

//heading1 change vako 2s paxi, i want to chage heading2
// changeText(heading1, "heading1", "violet", 1000)

/*
changeText(heading1, "heading1", "violet", 1000, ()=>{
    changeText(heading2, "heading2", "red", 2000)
}, ()=>{
    console.log("Your Element Doesn't Exist"); //try after changing ".heading$" to any random in queery selector
})


*/

//pyramid of doom --> not a good practice
changeText(heading1, "heading1", "violet", 1000, ()=>{
    changeText(heading2, "heading2", "red", 2000, ()=>{
        changeText(heading3, "heading3", "pink", 2000, ()=>{
            changeText(heading4, "heading4", "green", 1000, ()=>{
                changeText(heading5, "heading5", "orange", 1000, ()=>{
                    changeText(heading6, "heading6", "blue", 1000, ()=>{
                        changeText(heading7, "heading7", "cyan", 1000)

                    },()=>{console.log("Your Element Doesn't Exist"); })
                },()=>{console.log("Your Element Doesn't Exist"); })
            },()=>{console.log("Your Element Doesn't Exist"); })
        },()=>{console.log("Your Element Doesn't Exist"); })
    },()=>{console.log("Your Element Doesn't Exist"); })
},()=>{console.log("Your Element Doesn't Exist"); })
