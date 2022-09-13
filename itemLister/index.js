// get lists and form
let form = document.getElementById("addForm");
let list = document.getElementById("items");

// create submit function
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("submitted");

  //get new item
  let input = document.getElementById("newitem");

  if (input.value == "") {
    alert("INVALID INPUT");
    return -1;
  }
  //   console.log(input.value);
  // create new li
  const li = document.createElement("li");
  li.className = "item";
  li.innerText = input.value;

  // create btns
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn";
  deleteBtn.id = "deleteBtn";
  deleteBtn.innerText = "X";

  let editBtn = document.createElement("button");
  editBtn.className = "btn";
  editBtn.id = "editBtn";
  editBtn.innerText = "Edit";

  // add btns to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  //append new li to ul
  list.appendChild(li);

  // clear input
  input.value = "";
});

// create delete function
list.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.id === "deleteBtn") {
    e.target.parentElement.remove();
  }
});
