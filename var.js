let userNameInput = document.getElementById("user-name");
let userNameBtn = document.querySelector("#username button");

let player = {
  name: "",
  score: "Currently Playing",
};

let keyPlayer = 1;

userNameInput.addEventListener("change", changeValue);
userNameBtn.addEventListener("click", saveLocalStorageInfo);
