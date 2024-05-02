const navItems2 = document.querySelectorAll(".nav-item"); //Nodelist
console.log(navItems2);

/*Nodelist is also an array like object

1. unlike HTMLCollection, you can use all three types of for loop in NOdelist
    - Simple for loop
    - for of loop 
    - forEach loop
*/

for(let i=0;i<navItems2.length;i++){
    const navItem = navItems2[i];
    navItem.style.backgroundColor = "#ffff";
}

for(let navItem of navItems2){
    navItem.style.color = "green";
}

navItems2.forEach((navItem)=>{
    navItem.style.fontWeight = "bold";
})

//similar to HTMLCollection Nodelist can also be converted into array and then other array methods can be used

let newArray = Array.from(navItems2);
console.log(Array.isArray(newArray));