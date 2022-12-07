// variablesUN
const userNameInput = document.getElementById("user-name");
const userNameBtn = document.querySelector("#username button");

let player = {
  name: "",
  score: "Currently Playing",
  level: "",
};

let keyPlayer = Number(localStorage.length);

const buttonClick = document.getElementById("click-here-btn");
const clickCounterElements = document.querySelectorAll(".click-counter");

let counter = 0;
let gameover = false;

// variables cuenta atrás

const countDown = document.querySelector(".countdown");
let countdownTotal = 10;

//variables playAgain

const playAgainBtn = document.querySelector(".playAgain");
// Variables ranking

let infoRanking = document.querySelector(".infoRanking");
let topThree = document.querySelector(".topThree");

// Variables escoger modo
let btnEasyGame = document.querySelector(".btnEasyGame")
let btnHardGame = document.querySelector(".btnHardGame")

// Escuchadore de eventos


userNameBtn.addEventListener("click", saveLocalStorageInfo);
buttonClick.addEventListener("click", countClicks);
playAgainBtn.addEventListener("click", playAgain);
btnEasyGame.addEventListener("click", startEasyGame);
btnHardGame.addEventListener("click", startHardGame);

//Listener carga de pagina
window.addEventListener("load", getUserAndScore);
window.addEventListener("load", threePlayer);


