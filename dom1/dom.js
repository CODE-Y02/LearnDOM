//  Examin the Document Objects
// console.dir(document);
/*
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log((document.all[10].textContent = "hello"));

*/
/*
// console.log(document.forms)
// console.log(document.links);
// console.log(document.images);
*/

// get ele by ID
// console.log(document.getElementById("header-title"));
let headerTitle = document.getElementById("header-title");
let header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = "hello";
// headerTitle.innerText = "BYE BYE";

// NOTE :---- Inner text pays attention to style

// headerTitle.innerHTML = "<h5>Hello</h5>";

// headerTitle.style.color = "black";
// headerTitle.innerText = "HELLO DOM";
// document.title = "DOM 1";

header.style.borderBottom = "solid 3px black";

// Get ele by class name
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";

// items[1].style.background = "yellow";

let titles = document.getElementsByClassName("title");
// console.log(titles);
let addItem = titles[0];
// console.log(addItem);
addItem.style.fontWeight = "bold";
addItem.style.color ="green";
