const countClicks = () => {
  if (gameover) return;
  counter++;
  for (const element of clickCounterElements) {
    element.innerText = counter;
  }
};

// funcion para almacenar el jugador en localStorage
function saveLocalStorageInfo(e) {
  e.preventDefault();
  if (userNameInput.value === "") {
    alert("Enter your username");
  } else {
    player.name = userNameInput.value;
    keyPlayer++;
    localStorage.setItem(keyPlayer, JSON.stringify(player));
  }
  getUserAndScore();
}

// esta funcion es la cuenta atrás para el número de click
function updateClock() {
  countDown.innerHTML = countdownTotal;
  if (countdownTotal == 0) {
    gameover = true;
    modRanking();
  } else {
    countdownTotal -= 1;
    setTimeout("updateClock()", 1000);
  }
}

//esta funcion es para jugar de nuevo
function playAgain() {
  player = {
    name: "",
    score: "Currently Playing",
  };

  keyPlayer = Number(localStorage.length);
  countdownTotal = 10;
  counter = 0;
  gameover = false;

  userNameInput.value = "";
  countDown.innerHTML = "";
  clickCounter.innerText = "";
}

// función para coger el nombre y la puntuación de localstorage
function getUserAndScore() {
  let players = [];
  for (let i = localStorage.length; i > localStorage.length - 5; i--) {
    let playerName = JSON.parse(localStorage.getItem(i));
    players.push(playerName);
  }
  while (infoRanking.firstChild) {
    infoRanking.removeChild(infoRanking.firstChild);
  }
  for (let i = 0; i < players.length; i++) {
    if (players[i] != null) {
      let h3 = document.createElement("h3");
      h3.innerHTML = players[i].name;
      infoRanking.appendChild(h3);
      let h4 = document.createElement("h4");
      h4.innerHTML = players[i].score;
      infoRanking.appendChild(h4);
    }
  }
}

// funcion para sacar los tres mejores jugadores
function threePlayer() {
  let topPlayers = [];

  for (let i = 1; i<= localStorage.length; i++) {
    let playerName = JSON.parse(localStorage.getItem(i));
    topPlayers.push(playerName);
  }


  topPlayers.sort((a,b) => b.score - a.score);
  console.log(topPlayers);


  while (topThree.firstChild) {
    topThree.removeChild(topThree.firstChild);
  }

  for (let i = 0; i < topPlayers.length; i++) {
    if (topPlayers[i] != null) {
      let h3 = document.createElement("h3");
      h3.innerHTML = topPlayers[i].name;
      topThree.appendChild(h3);
      let h4 = document.createElement("h4");
      h4.innerHTML = topPlayers[i].score;
      topThree.appendChild(h4);
    }
  }

}

// funcion para mover boton de posicion
function moveButton() {
  let button = document.getElementById("click-here-btn");
  let left = Math.floor(Math.random() * 70);
  let top = Math.floor(Math.random() * 70);
  let size = Math.floor(Math.random() * 150);
  button.style.position = "absolute";
  button.style.left = left + "vw";
  button.style.top = top + "vh";
  button.style.padding = size + "px";
}

//funcion para actualizar las puntuaciones al pulsar el boton de volver a jugar
function modRanking() {
  player = {
    ...player,
    score: counter,
  };
  localStorage.setItem(localStorage.length, JSON.stringify(player));
}
