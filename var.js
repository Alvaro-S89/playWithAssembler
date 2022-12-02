// variablesUN
let userNameInput = document.getElementById("user-name");
let userNameBtn = document.querySelector("#username button");

let player = {
  name: "",
  score: "Currently Playing",
};

let keyPlayer = Number(localStorage.length);

const buttonClick = document.getElementById("click-here-btn");
const clickCounter = document.getElementById("click-counter");

let counter = 0;
let gameover = false

// variables cuenta atrás
let btnstartGame = document.querySelector(".btn-startGame");
let countdownTotal = 10;

// Escuchadore de eventos
btnstartGame.addEventListener("click", updateClock);
userNameInput.addEventListener("change", changeValue);
userNameBtn.addEventListener("click", saveLocalStorageInfo);
buttonClick.addEventListener("click", countClicks);
