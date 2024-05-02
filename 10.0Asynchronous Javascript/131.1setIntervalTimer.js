console.log("Scripts Starts");

const myTimer = document.querySelector(".myTimer");
setInterval(()=>{
    const date = new Date();
    myTimer.textContent = date.toLocaleTimeString();
},1000)

console.log("Scripts Ends");

/*
Add this code to HTML body:

    <p>Digital Timer</p>
    <p class="myTimer"></p>
*/