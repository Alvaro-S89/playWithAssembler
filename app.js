// funcion para contar los clicks
const countClicks = () => {
  counter++;
  clickCounter.innerText = counter;
};

// funcion para almacenar el nombre en el objeto player
function changeValue() {
  player.name = userNameInput.value;
}

// funcion para almacenar el jugador en localStorage
function saveLocalStorageInfo(e) {
  e.preventDefault();

  if (!localStorage.key(localStorage.length - 1)) {
    keyPlayer = 1;
  } else {
    keyPlayer += 1;
  }
  localStorage.setItem(keyPlayer, JSON.stringify(player));
  getUserAndScore()
}

// esta funcion es la cuenta atrás para el número de click
function updateClock() {
  document.querySelector(".countdown").innerHTML = countdownTotal;
  if (countdownTotal == 0) {
    console.log("Final");
  } else {
    countdownTotal -= 1;
    setTimeout("updateClock()", 1000);
}
}

// función para coger el nombre y la puntuación de localstorage

function getUserAndScore() {
    players = [];
    for(let i = localStorage.length; i > localStorage.length - 5; i--) {
        let playerName = JSON.parse(localStorage.getItem(i))
        players.push(playerName)
      }
      while (infoRanking.firstChild) {
        infoRanking.removeChild(infoRanking.firstChild)
      }
        for (let i = 0; i < players.length; i++) {
          if(players[i] != null) {
            let h3 = document.createElement("h3");
            h3.innerHTML = players[i].name
            infoRanking.appendChild(h3);
            let h4 = document.createElement("h4");
            h4.innerHTML = players[i].score
            infoRanking.appendChild(h4);
          }
        }
}

