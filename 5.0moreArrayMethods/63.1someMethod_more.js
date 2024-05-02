const userCart = [
    {productId:1, productName: "laptop", productPrice:5},
    {productId:2, productName: "tv", productPrice:25},
    {productId:3, productName: "mobile", productPrice:35},
    // {productId:4, productName: "mobile2", productPrice:51},
]

//check if there exist any product whose price range in between 30 and 50

const res = userCart.some(useritem=>{ //res = true as productprice = 35 satisfies the provided condition //try changing 35 to 5
    return useritem["productPrice"]>=30 && useritem["productPrice"];
})

console.log(res); 