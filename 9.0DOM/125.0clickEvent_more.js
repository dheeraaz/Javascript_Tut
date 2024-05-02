//practice with click events
//use with clickEvent.html

//kunai pani button ma thichda tesko background change huna paryo

const allButtons = document.querySelectorAll(".my-buttons button");

/*

allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        this.style.backgroundColor = "red";
        this.style.color = "white";
    })
})

*/

allButtons.forEach(button=>{
    button.addEventListener("click",(e)=>{
        // console.log(e.target);
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "white";
    })
})


