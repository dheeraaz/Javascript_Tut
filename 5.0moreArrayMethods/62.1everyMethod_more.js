const userCart = [
    {productId:1, productName: "laptop", productPrice:5},
    {productId:2, productName: "tv", productPrice:25},
    {productId:3, productName: "mobile", productPrice:35},
    // {productId:4, productName: "mobile2", productPrice:51},
]

//check price of every product less than 50

const res = userCart.every(cartItem=>cartItem["productPrice"]<50);
console.log(res);