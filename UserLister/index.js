let form = document.getElementsByClassName("userForm")[0];
// console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");

  let user = {
    name: name.value,
    email: email.value,
  };
  if (localStorage.getItem(user.email)) {
    // if email alreay exist
    alert("Email Already exist");
    return -1;
  }
  localStorage.setItem(user.email, JSON.stringify(user));
  showUserOnScreen(user);

  name.value = "";
  email.value = "";
});

function showUserOnScreen(user) {
  const parentNode = document.getElementById("userList");
  const childHtml = `<li class="userInfo"> ${user.name} <span>${user.email}  </span><button class="del btn">Delete</button></li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHtml;
}

// delete funcion
let ul = document.getElementById("userList");
ul.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.target.classList.contains("del"));
  if (e.target.classList.contains("del")) {
    //perform delete
    let li = e.target.parentElement;
    // console.log(li.children[0].innerText);
    let userEmail = li.children[0].innerText;
    localStorage.removeItem(userEmail);

    li.remove();
  }
});
