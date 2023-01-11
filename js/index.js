const minutesTimer = document.querySelector('.minutes')
const secondsTimer = document.querySelector('.seconds')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonAddMinutes = document.querySelector('.addMinutes')
const buttonRemoveMinutes = document.querySelector('.removeMinutes')

const buttonSoundForest = document.querySelector('soundForest')
const buttonSoundRain = document.querySelector('soundRain')
const buttonSoundShop = document.querySelector('soundShop')
const buttonSoundFire = document.querySelector('soundFire')

let newMinutes
let minutes
let seconds
let timerTimeOut

function resetTimer(){
    minutesTimer.textContent = String(newMinutes).padStart(2, "0")
    seconds = 0 
    secondsTimer.textContent = String(seconds).padStart(2, "0")
}

function countdown(){
     timerTimeOut = setTimeout(function(){
        seconds = Number(secondsTimer.textContent)
        minutes = Number(minutesTimer.textContent)
        
        if(seconds == 0){
            seconds = 60
            --minutes
        }
        secondsTimer.textContent = String(Number(seconds - 1)).padStart(2,"0")
        minutesTimer.textContent = String(minutes).padStart(2, "0")

        countdown()
     }, 1000)
     
}

function playTimer(){    
    if(!newMinutes){
        alert('Insira algum tempo para começar')
    }else{ 
    buttonPause.classList.remove('hide')
    buttonPlay.classList.add('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
    countdown()
    }
}

function pauseTimer(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    clearTimeout(timerTimeOut)
}

function setTimer(){
    newMinutes = prompt('Insira os minutos')
    if(!newMinutes){
        alert('Insira algum número')
    }else{
        minutesTimer.textContent = String(newMinutes).padStart(2,"0")
    }
}

function stopTimer(){
    resetTimer()
    clearTimeout(timerTimeOut)
    
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')

    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')

}

function addMinutesTimer(){
    if(minutesTimer.textContent < 60){
    minutesTimer.textContent = String(Number(minutesTimer.textContent)+5).padStart(2, "0")
    newMinutes = minutesTimer.textContent
    }
}

function removeMinutesTimer(){
    if(minutesTimer.textContent > 5){
        minutesTimer.textContent = String(Number(minutesTimer.textContent)-5).padStart(2, "0")
        newMinutes = minutesTimer.textContent
    }
}

buttonPlay.addEventListener('click', () => {
    playTimer()
} )

buttonPause.addEventListener('click', () => {
    pauseTimer()
})

buttonSet.addEventListener('click', () => {
    setTimer()
})

buttonStop.addEventListener('click', () => {
    stopTimer()
})

buttonAddMinutes.addEventListener('click', () => {
    addMinutesTimer()
})

buttonRemoveMinutes.addEventListener('click', () => {
    removeMinutesTimer()
})



