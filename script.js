let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmEle = document.getElementById("confirm");
let abc = document.getElementById("abc");
var a = document.getElementById("xyz");
var btnEle = document.getElementById("btn");
var divbg = document.getElementById("divbg");

confirmEle.addEventListener("click", function () {
  abc.style.display = "none";
});

password.addEventListener("click", function () {
  abc.style.display = "none";
});

function data() {
  var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (!regularExpression.test(password.value) == true) {
    alert(
      "password should contain atleast one number and one special character"
    );
  } else {
    if (password.value != confirmEle.value) abc.style.display = "block";
    else {
      btnEle.innerHTML = "Submitted";
      username.value = "";
      email.value = "";
      password.value = "";
      confirmEle.value = "";
      divbg.style.background = "green";
    }
  }
  return false;
}
