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
/*
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";
*/

// FirstChild
/*
console.log(itemList.firstChild)

// first child and child nodes workds similar , they also counts whitespace 
*/

// First ele child
/*
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent ="Hello DOM";
*/

// Lastchild --> works similar to firstChild
console.log(itemList.lastChild);

//lastelementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello last";
