import Controls from "./controls.js"
import Timer from "./timer.js"
import { elements } from "./elements.js"
import Events from "./events.js"
import Sounds from "./sounds.js"


const {
    minutesTimer,
    secondsTimer,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonAddMinutes,
    buttonRemoveMinutes,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundShop,
    buttonSoundFire,
    buttonDarkMode,
    buttonLightMode
} = elements

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonAddMinutes,
    buttonRemoveMinutes,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundShop,
    buttonSoundFire,
    buttonDarkMode,
    buttonLightMode
})

const timer = Timer({
    minutesTimer,
    secondsTimer
})

const sound = Sounds()



Events({controls, timer, sound})







