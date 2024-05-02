//XHR continuation

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

//xhr.onload teti bela matrai chalxa jatibela, readystate 4 hunxa
//ready state 4 hunalai, xhr open, send dubai hunai parxa

xhr.onload = function(){
    const response = xhr.response; //api bata response vaisakyo
    console.log(typeof response); //response json file ko format ma aauxa(!=object)

    const data = JSON.parse(response);
    console.log(typeof data);
    console.log(data);
}

xhr.send();