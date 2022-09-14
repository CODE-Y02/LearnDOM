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
    if (confirm("Email already exist !! Overwrite it ? ")) {
      removeUser(user.email);
    } else {
      return;
    }
  }

  showUserOnScreen(user);

  name.value = "";
  email.value = "";
});

function showUserOnScreen(user) {
  localStorage.setItem(user.email, JSON.stringify(user));
  const parentNode = document.getElementById("userList");
  const childHtml = `<li class="userInfo" id='${user.email}' > ${user.name} ${user.email}  <button class="btn edit" >Edit</button><button class="btn del" >Delete</button></li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHtml;
}

//delete and edit
let ul = document.getElementById("userList");
ul.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.classList.contains("del"));
  if (e.target.classList.contains("del")) {
    let li = e.target.parentElement;
    // console.log(li.id) --> email
    removeUser(li.id);
  }
  if (e.target.classList.contains("edit")) {
    let li = e.target.parentElement;
    // console.log(li.id) --> email

    let user = JSON.parse(localStorage.getItem(li.id));
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    removeUser(li.id);
  }
});

//remove user
function removeUser(email) {
  // new li has id of user's email
  const li = document.getElementById(email);

  if (li) {
    localStorage.removeItem(email);
    li.remove();
  }
}
