// task 5
/*
// Add a new li element without the same class Name --> done in html

//And try editing it with getelementsbyclassname and then by getelementbytagname

let listItems = document.getElementsByClassName("list-group");
// console.log(listItems[0].children)
// lets edit new item
// listItems[0].children[4].classList.add("list-group-item");

listItems[0].children[4].style.listStyle = "none";
listItems[0].children[4].style.background = "black";
listItems[0].children[4].style.padding = "10px";
listItems[0].children[4].style.fontWeight = "bold";
listItems[0].children[4].style.color = "yellow";

const li = document.getElementsByTagName("li");
console.log(li);
console.log(li[4]);
li[4].innerText = "list ending";

li[4].style.textAlign = "center";
*/

// task 6

// Query selector
/*
let header = document.querySelector("#main-header");
// console.log(header);
header.style.borderBottom = "solid 4px #ccc";

let input = document.querySelector("input");
input.value = "hello gitHub";

let submit = document.querySelector('input[type="submit"]');
submit.style.background = "red";
submit.value = "SEND";

let item = document.querySelector(".list-group-item");
item.style.background = "lightgray";

// quary selector only changes first match element

let lastItem = document.querySelector(".list-group-item:last-child");
// console.log(lastItem);
lastItem.style.background = "lightgreen";

//selecting nth
let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// console.log(secondItem);
secondItem.style.background = "pink";
*/

// query selector all
/*
const titles = document.querySelectorAll(".title");
console.log(titles);
// titles.map((item) => (item.textContent = "hello"));

// titles.forEach((item) => {
//   console.log(item);
// //   item.innerText = "hello";
// // item.style.color ="blue"
// });

titles[0].textContent = "Hello";

let odd = document.querySelectorAll("li:nth-child(odd)");
console.log(odd);
odd.forEach((item) => (item.style.backgroundColor = "#f4f4f4"));

let even = document.querySelectorAll("li:nth-child(even)");
even.forEach((item) => (item.style.backgroundColor = "#ccc"));


// started task 6
*/
/*
//Make the 2nd item have green background color
let item2 = document.querySelector(".list-group-item:nth-child(2)");
// console.log(item);
item2.style.backgroundColor = "lightgreen";

//Make the 3rd item invisible
let item3 = document.querySelector(".list-group-item:nth-child(3)");
// console.log(item);
item3.style.display = "none";
*/

//Using QuerySelectorALL change the font color to green for 2nd item in the item list
let items = document.querySelectorAll(".list-group-item");
// console.log(items)

items[1].style.color = "green";
// items[1].style.background = "black";
// items[1].style.fontWeight = "bold";

//Choose all the odd elements and make their background green using QuerySelectorALL﻿

// let oddItem = document.querySelectorAll('.list-group-item')
