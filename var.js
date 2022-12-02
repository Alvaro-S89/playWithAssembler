
// variables user name
let userNameInput = document.getElementById("user-name");
let userNameBtn = document.querySelector("#username button");

let player = {
  name: "",
  score: "Currently Playing",
};

let keyPlayer = 1;


// variables cuenta atrás
let btnstartGame = document.querySelector(".btn-startGame");
let countdownTotal = 10;



// Escuchadore de eventos
btnstartGame.addEventListener('click', updateClock);
userNameInput.addEventListener("change", changeValue);
userNameBtn.addEventListener("click", saveLocalStorageInfo);