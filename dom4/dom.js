let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

// form submit events
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", removeItem);
// console.log(itemList);

// addItem
function addItem(e) {
  e.preventDefault();

  // get input value
  let newItem = document.getElementById("item").value;

  // create new li element
  let li = document.createElement("li");
  // add class
  li.className = "list-group-item";

  // console.log(li);

  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //create dl button ele
  let deleteBtn = document.createElement("button");

  // add class to del btn
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // appednd text node
  deleteBtn.appendChild(document.createTextNode("X"));

  //create edit btn
  let editBtn = document.createElement("button");
  // add class to edit btn
  editBtn.className = "btn btn-sm float-right edit";

  // create text node
  editBtn.innerText = "Edit";

  // apppednd btn to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  itemList.appendChild(li);

  // clear
  document.getElementById("item").value = "";
}

// remove Item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    // console.log("hello");

    if (confirm("Are yoy sure ?")) {
      let li = e.target.parentElement;
      li.remove();
    }
  }
}
