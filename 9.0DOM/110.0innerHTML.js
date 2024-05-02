//inner HTML

//header tag bhitra ko sabai, header tag ko lagi inner html ho
//testai div.headline bhitra lekheko sabai, tesko lagi inner html ho


const headline = document.querySelector(".headline");
console.log(headline.innerHTML);

//aba innerhtml change pani garna milxa

headline.innerHTML = "<h1>Inner HTML Changed</h1>";
headline.innerHTML += "<button class=\"btn btn-headline\">Learn More</button>";


//string ko bhitra string lekhna, escape quotes use garna parxa, i.e
// "string started \"inside escape quptes\" and ended"

console.log(headline.innerHTML);