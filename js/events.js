import { elements } from "./elements.js";

const {
    theme,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonAddMinutes,
    buttonRemoveMinutes,
    iconPlay,
    iconPause,
    iconStop,
    iconSet,
    iconAddMin,
    iconRemMin,
    iconForest,
    iconRain,
    iconShop,
    iconFire,
    colorTimer
} = elements


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
        timer.pauseTimer()
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
        iconForest.style.fill = '#FFFFFF'
        sound.soundForest()
    })

    elements.buttonSoundRain.addEventListener('click', () => {
        iconRain.style.fill = '#FFFFFF'
        sound.soundRain()
    })

    elements.buttonSoundShop.addEventListener('click', () => {
        iconShop.style.fill = '#FFFFFF'
        sound.soundShop()
    })

    elements.buttonSoundFire.addEventListener('click', () => {
        iconFire.style.fill = '#FFFFFF'
        sound.soundFire()
    })

    elements.buttonDarkMode.addEventListener('click', () => {
        theme.style.background = '#000000'
        
        buttonPlay.style.background = '#000000'
        buttonPause.style.background = '#000000'
        buttonSet.style.background = '#000000'
        buttonStop.style.background = '#000000'
        buttonAddMinutes.style.background = '#000000'
        buttonRemoveMinutes.style.background = '#000000'

        iconPlay.style.fill = '#FFFFFF'
        iconPause.style.fill = '#FFFFFF'
        iconSet.style.fill = '#FFFFFF'
        iconStop.style.fill = '#FFFFFF'
        iconAddMin.style.fill= '#FFFFFF'
        iconRemMin.style.fill = '#FFFFFF'

        colorTimer.style.color = '#FFFFFF'
    })

    elements.buttonLightMode.addEventListener('click', () => {
        theme.style.background = '#FFFFFF'

        buttonPlay.style.background = '#FFFFFF'
        buttonPause.style.background = '#FFFFFF'
        buttonSet.style.background = '#FFFFFF'
        buttonStop.style.background = '#FFFFFF'
        buttonAddMinutes.style.background = '#FFFFFF'
        buttonRemoveMinutes.style.background = '#FFFFFF'
        
        iconPlay.style.fill = '#000000'
        iconPause.style.fill = '#000000'
        iconSet.style.fill = '#000000'
        iconStop.style.fill = '#000000'
        iconAddMin.style.fill= '#000000'
        iconRemMin.style.fill = '#000000'


        colorTimer.style.color = '#000000'

       
    })

    elements.buttonLightMode.addEventListener('click', () => {
        controls.toggleMode()
    })

    elements.buttonDarkMode.addEventListener('click', () => {
        controls.toggleMode()
    })




}