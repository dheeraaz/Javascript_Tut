//fetch API 

const URL = "https://jsonplaceholder.typicode.com/posts";

//it does everything, it requests on its own, 
//it does getRequest
//since it is a function, it returns something
//it returns promise

/*
const whatIsthis = fetch(URL);
console.log(whatIsthis); 
//output promise: so we can use .then() function
*/

/*
fetch(URL)
    .then(response=>{
        console.log(response); //yesle pani agadi diyeko jasto json data didaina
        //tesko lagi response dangai json method use garna parxa
    })
*/

/*
fetch(URL)
    .then(response=>{
        // console.log(response.json()); //response.json() pani promise return garxa, 
        //since it is a promise, it gets resolved
        //so return it, so that we can apply chaining

        return response.json();
    })
    .then(data=>{
        console.log(data);
    })
*/

//this is the correct way of using fetch
fetch(URL)
    .then(response=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error("Something went wrong"); //this is for url related error
         }
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{
        //yo fetch ma catch teti bela matrai chalxa, jatibela network(wifi/internet) related issue aauxa
        //.catch url ma error vayo vani chaldaina
        //url bigrida: response ma ok ko value false aauxa
        console.log(error);
    })


//ahile samma hamile get request type ko kaam matrai gareko xam, ra most of the time hamile
//get request nai garirakheko hunxau
//tara there are other type of requests also: put, post, patch, delete
//post: for creating a resource
