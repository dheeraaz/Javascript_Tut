
const body = document.body;
const button = document.getElementsByTagName("button");
console.log(button[0])


const id = setInterval(()=>{

    const red = Math.floor(Math.random()*256); 
    const green = Math.floor(Math.random()*256); 
    const blue = Math.floor(Math.random()*256); 

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
},1000)

button[0].addEventListener("click", ()=>{
    clearInterval(id);
    button[0].textContent = body.style.backgroundColor;
})

