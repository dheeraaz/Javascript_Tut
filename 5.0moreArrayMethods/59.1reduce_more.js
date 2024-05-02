//reduce example
  
const userCart = [
    {productId:1, productName: "laptop", productPrice:5},
    {productId:2, productName: "tv", productPrice:25},
    {productId:3, productName: "mobile", productPrice:35},
]

const totalPrice = userCart.reduce((total,currentValue)=>{
    return total + currentValue["productPrice"];
},0)
console.log(totalPrice);

//const totalPrice = userCart.reduce(()=>{},0) //yo 0 ko meaning vaneko, total ko value suruma 0 rakh vaneko ani
                                               // currentValue vaneko first object ho
                                               // currentValue["productPrice"] ley suru ma 5 linxa tespaxi 25, 35 linxa         