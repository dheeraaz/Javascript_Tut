// XHR (XML HTTP Request)
//using this api to practice: https://jsonplaceholder.typicode.com/
//all these operation is aynchronous,i.e handled by browser

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);


//step1 : using open method
// search: "mdn xhr readystate" on browser to learn about readystate

// console.log(xhr.readyState);


//two arguments: first->Type of request: get, put, patch, delete | second->from where:URL
xhr.open("GET", URL);

// console.log(xhr.readyState);

xhr.onreadystatechange = function(){ //yo function xhr ko readystate change huda call hunxa
    // console.log(xhr.readyState);
    if(xhr.readyState === 4){
        console.log("------------------*1");
        console.log(typeof xhr.response);
        // console.log(xhr.response);

        //ready state 4 vayepaxi, response aauxa
        //response json file ho, yeslai string jasari aaira xa, 
        //yo json lai parse garera javascript object ma convert garna parxa

        const response = xhr.response;
        const data = JSON.parse(response); //yesle aayeko json lai parse garera javascript object ma convert gardinxa

        console.log("------------------*2");
        console.log(typeof data);

        console.log("------------------*3");
        console.log(data);

    }
}
//readystate 4 vayepaxi matrai xhr request painxa

xhr.send()