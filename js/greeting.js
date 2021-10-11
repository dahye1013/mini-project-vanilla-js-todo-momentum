const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

//반복되는 string은 대문자 변수로 저장하여 휴먼 에러 방지
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
/**
 * [Events]---------------------------------------------------
 */
function onLoginBtnClick() {
  const username = loginInput.value;
  //[validation]
  if (username === "") {
    alert("Please Write Yoursa name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove("flex");
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
// -----------------------------------------------------------

// [초기 실행]
const username = localStorage.getItem(USERNAME_KEY);
if (username === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greeting
  paintGreetings();
}

loginButton.addEventListener("click", onLoginBtnClick);
