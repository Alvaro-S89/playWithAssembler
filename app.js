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
