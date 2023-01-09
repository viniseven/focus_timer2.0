export default function Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
}){

    function playTimer(){
        buttonPause.classList.remove('hide')
        buttonPlay.classList.add('hide')
    }
    
    function pauseTimer(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function setTimer(){
        buttonStop.classList.remove('hide')
        buttonSet.classList.add('hide')
    }

    function stopTimer(){
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
    }

    function addMinutesTimer(){
        
    }

    return {
        playTimer,
        pauseTimer,
        setTimer,
        stopTimer
    }
}
