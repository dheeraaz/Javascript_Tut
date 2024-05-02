//XHR using Promise

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = function(){
            if(xhr.status>= 200 && xhr.status < 300){
                resolve(xhr.response);
            }else{
                reject(new Error("Something went wrong"));
            }
        }

        xhr.onerror = function(){
            reject(new Error("Something went wrong"));
        }

        xhr.send()
    })
}

/*
const whatIsThis = sendRequest("GET", URL); //returns promise
console.log(whatIsThis);
*/

sendRequest("GET", URL)
    .then(response=>{
        // console.log(response);
        const data = JSON.parse(response);
        console.log(data);
        console.log("-----------");
        return data;
    })
    .then(data=>{
        const id = data[3].id;
        return id;
    })
    .then(id=>{
        console.log(id);
        const url2 = `${URL}/${id}`;
        return sendRequest("GET", url2);
    })
    .then(newResponse=>{
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(error=>{
        console.log(error);
    })