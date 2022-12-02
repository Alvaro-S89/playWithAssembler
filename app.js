const buttonClick = document.getElementById('click-here-btn')
const clickCounter = document.getElementById('click-counter')

let counter = 0
const countClicks = () => {
    counter++
    clickCounter.innerText = counter
}


buttonClick.addEventListener('click', countClicks)
