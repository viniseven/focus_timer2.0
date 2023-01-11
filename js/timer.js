export default function Timer({
    minutesTimer,
    secondsTimer
}){

let timerTimeOut
let minutes = Number(minutesTimer.textContent)

function resetTimer(){
    updateTimer(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countdown(){
    timerTimeOut = setTimeout(function(){
       let seconds = Number(secondsTimer.textContent)
       let minutes = Number(minutesTimer.textContent)
       
       if(seconds == 0){
           seconds = 60
           --minutes
       }
       updateTimer(minutes, String(seconds - 1))

       countdown()
    }, 1000)
    
}

function updateTimer(newMinutes, seconds){
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds == undefined ? 0 : seconds
    minutesTimer.textContent = String(newMinutes).padStart(2, "0")
    secondsTimer.textContent = String(seconds).padStart(2, "0")
}

function pauseTimer(){
    clearInterval(timerTimeOut)
}

function addMinutesTimer(newMinutes){
    if(minutesTimer.textContent < 60){
    minutesTimer.textContent = String(Number(minutesTimer.textContent)+5).padStart(2, "0")
    newMinutes = minutesTimer.textContent
    }
}

function removeMinutesTimer(newMinutes){
    if(minutesTimer.textContent > 5){
        minutesTimer.textContent = String(Number(minutesTimer.textContent)-5).padStart(2, "0")
        newMinutes = minutesTimer.textContent
    }
}

function verifyTimer(newMinutes){
    newMinutes = minutesTimer.textContent
    if(newMinutes == 0){
        alert('Insira algum minuto no temporizador')
    return false
    }
    return true
}

    return {
        resetTimer,
        countdown,
        updateTimer,
        pauseTimer,
        addMinutesTimer,
        removeMinutesTimer,
        verifyTimer
    }
}