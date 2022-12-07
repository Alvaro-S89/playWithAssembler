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
    nextPage('score')
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
    level: "",
  };

  keyPlayer = Number(localStorage.length);
  countdownTotal = 10;
  counter = 0;
  gameover = false;

  userNameInput.value = "";
  countDown.innerHTML = "";
  for (let element of clickCounterElements) {
    element.innerText = "";
  }
  buttonClick.style.cssText = "position: relative; left: 0; top: 0; padding: 0";
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
    score: counter + " clicks",
  };
  localStorage.setItem(localStorage.length, JSON.stringify(player));
}

//function to scroll pages
const nextBtn= document.getElementById('next-btn');
const pages= document.querySelectorAll('section');
for(const page of pages){
   if(!page.classList.contains('username')) page.classList.add('non-visible')
}
const nextPage= (visiblePage)=> {
    for(const page of pages){
   if(!page.classList.contains(visiblePage)) page.classList.add('non-visible')
   else page.classList.remove('non-visible')
}
  }
  nextBtn.addEventListener('click', () => nextPage('startgame'));
 
 const navigateToPlay =  () => nextPage('play')


const redirectHome= ()=> nextPage('username')


//Funciones para meter en el objeto el nivel al que se juega


function startEasyGame() {
  player = {
    ...player,
    level: "Easy"
  }
  localStorage.setItem(localStorage.length, JSON.stringify(player))
buttonClick.removeEventListener("click", moveButton)
  updateClock()
}

function startHardGame() {
  player = {
    ...player,
    level: "Hard"
  }
  localStorage.setItem(localStorage.length, JSON.stringify(player))
  
  buttonClick.addEventListener("click", moveButton);
  updateClock()
}


