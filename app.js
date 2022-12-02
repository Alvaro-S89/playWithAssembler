const buttonClick = document.getElementById('click-here-btn')
const clickCounter = document.getElementById('click-counter')

let counter = 0
const countClicks = () => {
    counter++
    clickCounter.innerText = counter
}


buttonClick.addEventListener('click', countClicks)
// funcion para almacenar el nombre en el objeto player
function changeValue() {
  player.name = userNameInput.value;
}
// funcion para almacenar el jugador en localStorage
function saveLocalStorageInfo(e) {
  e.preventDefault();
  localStorage.setItem(keyPlayer, JSON.stringify(player));
  keyPlayer++;
}
// esta funcion es la cuenta atrás para el número de click
function updateClock() {
    document.querySelector('.countdown').innerHTML = countdownTotal;
    if(countdownTotal==0){
      console.log('Final');
    }else{
      countdownTotal-=1;
      setTimeout("updateClock()",1000);
    }
  }
