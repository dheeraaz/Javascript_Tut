//XHR Practice and Error Handling

//yedi api exists gardaina vaney error handling garni

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) { //200 ra 300 ko bich ma sahi output aauxa
        const data = JSON.parse(xhr.response); //fetching data and converting json file into javascipt object
        console.log(data);

        //now accessing particular post
        /*
        const selectedPost = data[3];
        console.log(selectedPost);
        */
       
        //requesting the whole posts from given id
       
        const id = data[3].id; //getting the id of fourth posts
        
        const URL2 = `${URL}/${id}`; //adds id of particular posts to the API link

        const xhr2 = new XMLHttpRequest();
        xhr2.open("GET", URL2)

        xhr2.onload = ()=>{
            const newPost = JSON.parse(xhr2.response);
            console.log("--------");
            console.log(newPost);
        }

        xhr2.send();

        

    }else{
        console.log("something went wrong"); //try by making some mistake in url
    }
}

//yo teti bela matrai run hunxa, jati bela network error aauxa: not reaching to the server, internet connection problem
xhr.onerror = ()=>{
    console.log("network related error"); //try by turning off the wifi
}

xhr.send()
