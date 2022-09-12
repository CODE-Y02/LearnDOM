// Traversing Dom
// let itemList = document.querySelector("#items");

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
/*
console.log(itemList.lastChild);

//lastelementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello last";
*/

let itemList = document.querySelector("#items");
/*
// nextsibling
console.log(itemList.nextSibling);
// next ele sibling
console.log(itemList.nextElementSibling);

//previous sibling
console.log(itemList.previousSibling);

//previous element sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";
*/

// Create element
/*
//create div
var newDiv = document.createElement("div");
// add class
newDiv.className = "hello";
//add id
newDiv.id = "hello1";

//add attr
newDiv.setAttribute("title", "hello div");

// create text node
let newDivText = document.createTextNode("Hello DOM");
// add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

// insertbefore

console.log(newDiv);

container.insertBefore(newDiv, h1);


*/

// Tasks
// Now go head and add HEllo word before Item Lister
let newEle = document.createElement("h1");
let eleText = document.createTextNode("HEllo word");
newEle.appendChild(eleText);
// console.log(newEle)
let container = document.querySelector("header .container");
let itemLister = document.getElementById("header-title");

container.insertBefore(newEle, itemLister);

// Now go head and add HEllo word before Item 1

let ul = document.getElementById("items");
console.log(ul);

let li = document.querySelector(".list-group-item");

// ul.firstElementChild(newEle);

ul.insertBefore(newEle, li[0]);

let newli = document.createElement("li");
newli.innerText = "hello world";
ul.firstElementChild(newli)

