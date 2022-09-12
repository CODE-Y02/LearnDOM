let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

// form submit events
form.addEventListener("submit", addItem);

// addItem
function addItem(e) {
  e.preventDefault();

  // get input value
  let newItem = document.getElementById("item");

  // create new li element
  let li = document.createElement("li");
  // add class
  li.className = "list-group-item";

  console.log(li);
}
