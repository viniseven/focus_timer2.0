import { elements } from "./elements.js";


export default function({
    controls, timer, sound
}){
    elements.buttonPlay.addEventListener('click', () =>{
        controls.playTimer()
        if(timer.verifyTimer(true)){
            timer.countdown()
        }else{
            controls.reset()
        }
    })

    elements.buttonPause.addEventListener('click', () =>{
        controls.pauseTimer()

    })

    elements.buttonStop.addEventListener('click', () => {
        controls.stopTimer()
        timer.resetTimer()
    })

    elements.buttonSet.addEventListener('click', () => {
        let newMinutes = controls.getMinutes()
        
        if(!newMinutes){
            timer.resetTimer()
            return
        }

        timer.updateTimer(newMinutes, 0)
        timer.updateTimer(newMinutes)
    })

    elements.buttonAddMinutes.addEventListener('click', () => {
        timer.addMinutesTimer()
    })

    elements.buttonRemoveMinutes.addEventListener('click', () => {
        timer.removeMinutesTimer()
    })

    elements.buttonSoundForest.addEventListener('click', () => {
        sound.soundForest()
    })

    elements.buttonSoundRain.addEventListener('click', () => {
        sound.soundRain()
    })

    elements.buttonSoundShop.addEventListener('click', () => {
        sound.soundShop()
    })

    elements.buttonSoundFire.addEventListener('click', () => {
        sound.soundFire()
    })
}