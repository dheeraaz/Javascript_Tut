// Traversing DOM tree - use for newIndex.html

const rootNode = document.getRootNode();
console.log(rootNode);

//for getting the childnodes of rootnode

console.log(rootNode.childNodes); //euta matrai child elements xa, i.e html as childnode

const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);

//child nodes of html
console.log(htmlElementNode.childNodes); //3 ota child node-> head, text, body

//Now again for child nodes of head
//htmlElementNode.childNodes[0] -> head
console.log(htmlElementNode.childNodes[0].childNodes);

//child node of title
console.log(htmlElementNode.childNodes[0].childNodes[1].childNodes[0]); //output "DOM Traversing"

//something.childNodes -> gives NodeList -> array like object
//someething.childNodes[0] -> gives the value/data of that particular child