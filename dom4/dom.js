let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");
// form submit events
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", removeItem);
// console.log(itemList);

// filter event
filter.addEventListener("keyup", filterItems);

// addItem
function addItem(e) {
  e.preventDefault();

  // get input value
  let newItem = document.getElementById("item");
  if (newItem.value == "") {
    alert("Enter Valid Item");
    return;
  }
  // get item desc
  let desc = document.getElementById("desc");

  // create new li element
  let li = document.createElement("li");
  // add class
  li.className = "list-group-item";

  // console.log(li);

  // add text node with input value
  // li.innerText = `${newItem.value}  ${desc.value}`;
  li.appendChild(document.createTextNode(newItem.value));
  li.appendChild(document.createTextNode(" "));

  li.appendChild(document.createTextNode(desc.value));

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
  desc.value = "";
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

function filterItems(e) {
  //convert text to lowercase
  let text = e.target.value.toLowerCase();

  // get all li in item list
  let items = itemList.getElementsByTagName("li");

  // console.log(items);
  //convert to arrays
  Array.from(items).forEach((item) => {
    // console.log(item.childNodes[0]);
    let itemName = item.firstChild.textContent;
    let itemDesc = item.childNodes[2].data;
    itemName = itemDesc.toLocaleLowerCase();
    itemDesc = itemDesc.toLocaleLowerCase();
    if (itemName.indexOf(text) !== -1 || itemDesc.indexOf(text) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
