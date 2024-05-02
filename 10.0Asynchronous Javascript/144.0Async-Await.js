//consume promise using async and await

//its basically using async/await syntax instead of .then()/.catch()

const URL = "https://jsonplaceholder.typicode.com/posts";

/*
fetch(URL)
    .then(response=>response.json())
    .then(data=>{console.log(data);})
*/

//yo function aba normal function rahena, yesle aba jahile pani promise return garxa
/*
async function getPosts1(){

}

const returnedData1 = getPosts1();
console.log(returnedData1);
*/

async function getPosts(){
    const response = await fetch(URL); //await waits till the promise resolves with some value
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
    //huna chai yeha hamilai json data paisakem, tara return huni bela promise return hunxa
}
/*
const myData = getPosts();
console.log(myData);
//yesko result pani promise nai hunxa
*/

getPosts()
    .then(myData=>{
        console.log(myData);
    })
    .catch(error=>{
        console.log(error);
    })


/*
//async keyword using arrow function

const getPosts = async()=>{
 const response = await fetch(URL); 
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
}

*/