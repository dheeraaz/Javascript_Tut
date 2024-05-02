const products=[
    {productId:1,productName:"p1",price:300},
    {productId:2,productName:"p2",price:40},
    {productId:3,productName:"p3",price:110},
    {productId:4,productName:"p4",price:10},
    {productId:5,productName:"p5",price:14},
    {productId:6,productName:"p6",price:512},
]
console.log(products);
//sort price high to low
 
const highToLow = [...products].sort((a,b)=>{ //this, first clones products array to highToLow array and then sorts according
    return b["price"]-a["price"];             // doing this doesnt change original array
})

console.log(highToLow);

//sort price low to high
 
const lowToHigh = [...products].sort((a,b)=>{ 
    return a["price"]-b["price"];
})

console.log(lowToHigh);