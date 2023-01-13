export default function Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonDarkMode,
    buttonLightMode  
}){

function playTimer(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
}

function pauseTimer(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
}

function reset(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
}

function stopTimer(){    
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
}

function getMinutes(){    
    let newMinutes = prompt('Insira um tempo para começar')
    if(!newMinutes){
        alert('Insira um valor')
        return false
    }
    return newMinutes
}

function toggleMode(){
    buttonDarkMode.classList.toggle('hide')
    buttonLightMode.classList.toggle('hide')
}

    return{
        playTimer,
        pauseTimer,
        reset,
        stopTimer,
        getMinutes,
        toggleMode
    } 
}