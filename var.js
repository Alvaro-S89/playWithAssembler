// variablesUN
const userNameInput = document.getElementById("user-name");
const userNameBtn = document.querySelector(".username button");

let player = {
  name: "",
  score: "Currently Playing",
};

let keyPlayer = Number(localStorage.length);

const buttonClick = document.getElementById("click-here-btn");
const clickCounterElements = document.querySelectorAll(".click-counter");

let counter = 0;
let gameover = false;

// variables cuenta atrás
let btnEasyGame = document.querySelector(".btnEasyGame");
const countDown = document.querySelector(".countdown");
let countdownTotal = 10;

//variables playAgain

const playAgainBtn = document.querySelector(".playAgain");
// Variables ranking

let infoRanking = document.querySelector(".infoRanking");

// Escuchadore de eventos
btnEasyGame.addEventListener("click", updateClock);
userNameBtn.addEventListener("click", saveLocalStorageInfo);
buttonClick.addEventListener("click", countClicks);
playAgainBtn.addEventListener("click", playAgain);
playAgainBtn.addEventListener("click", redirectHome);
buttonClick.addEventListener("click", moveButton);

//Listener carga de pagina
window.addEventListener("load", getUserAndScore);

//Listenerscrollpages



//pages/sections


const btnHardGame= document.querySelector('.btnHardGame');

btnEasyGame.addEventListener('click', navigateToPlay);
btnHardGame.addEventListener('click', navigateToPlay);

