//Callbacks, callback hell, the pyramid of doom
//asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

//If i want some changes in heading1 after one sec of page load and just after the one sec of change in heading 1, i want change in heading 2
//Then this method is not optimal 
//yesari garda timing yaaad garera calculate garirakhna parxa, agadi ko 1s badhauda, paxadi pani 1s badaudai jana parx

/*
setTimeout(()=>{
    heading1.textContent = "Heading1";
    heading1.style.color = "violet";
},1000)

setTimeout(()=>{
    heading2.textContent = "Heading2";
    heading2.style.color = "red";
},2000)
*/


//another method

//text                  Delay               time      

//heading1              1s                  Violet
//heading2              2s                  Purple
//heading3              2s                  red
//heading4              1s                  pink
//heading5              2s                  green

setTimeout(()=>{
    heading1.textContent = "Heading1";
    heading1.style.color = "violet";
    //heading1 change vako 2s paxi, heading2 change hunxs, yedi paxi, Heading1 ko timing change garey pani, Heading2, heading1 change vako 2s paxi nai change hunxa     
    setTimeout(()=>{
        heading2.textContent = "Heading2";
        heading2.style.color = "purple";

        setTimeout(()=>{
            heading3.textContent = "Heading3";
            heading3.style.color = "red";

            setTimeout(()=>{
                heading4.textContent = "Heading4";
                heading4.style.color = "pink";

                setTimeout(()=>{
                    heading5.textContent = "Heading5";
                    heading5.style.color = "green";
                },2000)

            },1000)

        },2000)

    },2000)

},1000)


//mathi jun function haru ko nesting vayo, tesailai nai callback hell vanxa, (nestng of callback function) -> it reduces the readabilty of code  