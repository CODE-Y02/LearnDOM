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
