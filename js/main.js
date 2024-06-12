const awaaCat = document.getElementById("awaa-cat")
const notButton = document.getElementById("not-button")
const yesButton = document.getElementById("yes-button")
const overlay = document.getElementById('overlay')
const btnExit = document.getElementById('btn-exit')

var meow = new Audio()
meow.src = "audio/awaa-meow.mp3"

awaaCat.addEventListener('click', () => {
    meow.play()
})

btnExit.addEventListener('click', () => {
    overlay.classList.remove('show');
    overlay.classList.add('hidden');
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
    overlay.classList.add('hidden');
})

yesButton.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    overlay.classList.add('show');
})

notButton.addEventListener('click', () => {
    alert("Você não tem essa opção, KKKKKKKKKKK!")
})