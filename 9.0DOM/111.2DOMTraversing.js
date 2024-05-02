// Traversing DOM tree - use for newIndex.html


const rootNode = document.getRootNode();
console.log("--------------*1");
console.log(rootNode);



console.log("--------------*2");
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);
//console.log(htmlELementNode.childNodes); //NodeList(3) [head, text, body]

const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2]

//for finding parent node

console.log(headElementNode.parentNode);

//sibling relationships

console.log(headElementNode.nextSibling);
console.log(headElementNode.nextSibling.nextSibling);

// (\n+Space) wala text node chaiyena tara next element node matrai chaiyeko xa vaney--

console.log(headElementNode.nextElementSibling); //yo line ley bich ko text node skip garera next element node dinxa

//childnodes of headElementNode

console.log(headElementNode.childNodes);




