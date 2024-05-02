//iterate elements

// const navItems = document.getElementsByClassName("a"); //HTMLCollection

//since i want to work in navlist - home, todo signup which is written inside li(className nav-item)
//so malai exactly typ item lai select garna parni vayekoley all anchor tag select gareko
// yo website ma 2 ota matrai anchor tag xa, so its easy


const navItems = document.getElementsByTagName("a"); //HTMLCollection
console.log(navItems);

// HTMLCollection: array like objects: indexing, length property
/*
using loop:
1. Simple for loop 
2. for loop

- But we cannot use forEach loop
*/

for(let i=0;i<navItems.length;i++){
    const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    console.log(navItem);
}

for (let navItem of navItems){
    navItem.style.fontWeight = "bold";
}

//but we cannot use forEach method in HTMLCollection

//But HTMLCollection can be converted into array and then forEach method can be used along with other array methods
/*

navItems = Array.from(navItems); //yesko lagi mathi navItems lai let banauna parxa

navItems.forEach((navItem)=>{
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
})

*/


const navItems2 = document.querySelectorAll(".nav-item"); //Nodelist
console.log(navItems2);


