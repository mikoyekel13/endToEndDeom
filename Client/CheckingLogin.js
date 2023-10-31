const submitbtn = document.querySelector("#submitbtn");
function checkValid() {
  const pwrd = document.getElementById("pwrd");
  const userName = document.getElementById("userName");
  const users = JSON.parse(localStorage.getItem("users"));
  const loginForm = document.getElementById("login");
  function checkValidUP(event) {
    event.preventDefault();
    for (let i = 0; i < users.length; i++) {
      const name = users[i].username;
      const password = users[i].password;
      if (name === userName.value && password === pwrd.value) {
        showContent(pages.appPage);
        return true;
      }
    }
    console.log("name or password is worng");
    return false;
  }
  loginForm.onsubmit = function (event) {
    checkValidUP(event);
  };
}
submitbtn.addEventListener("click", checkValid);
