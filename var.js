// variablesUN
const userNameInput = document.getElementById("user-name");
const userNameBtn = document.querySelector("#username button");

let player = {
  name: "",
  score: "Currently Playing",
};

let keyPlayer = Number(localStorage.length);

const buttonClick = document.getElementById("click-here-btn");
const clickCounter = document.getElementById("click-counter");

let counter = 0;
let gameover = false;

// variables cuenta atrás
let btnstartGame = document.querySelector(".btn-startGame");
const countDown = document.querySelector(".countdown");
let countdownTotal = 10;

//variables playAgain

const playAgainBtn = document.querySelector(".playAgain");
// Variables ranking

let players = []
let infoRanking = document.querySelector(".infoRanking")







// Escuchadore de eventos
btnstartGame.addEventListener("click", updateClock);
userNameBtn.addEventListener("click", saveLocalStorageInfo);
buttonClick.addEventListener("click", countClicks);
playAgainBtn.addEventListener("click", playAgain);
buttonClick.addEventListener("click",moveButton);



