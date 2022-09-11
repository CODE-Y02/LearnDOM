// Traversing Dom
let itemList = document.querySelector("#items");

// parentNode
/*
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "lightgreen";

console.log(itemList.parentNode.parentNode.parentNode);
*/

// ParentElement
/*
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "lightgreen";

console.log(itemList.parentElement.parentElement);
*/

// childnodes
// console.log(itemList.childNodes)

// Children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";
