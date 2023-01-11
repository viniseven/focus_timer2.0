import Controls from "./controls.js"
import Timer from "./timer.js"
import { elements } from "./elements.js"
import Events from "./events.js"


const {
    minutesTimer,
    secondsTimer,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonAddMinutes,
    buttonRemoveMinutes
} = elements

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonAddMinutes,
    buttonRemoveMinutes
})

const timer = Timer({
    minutesTimer,
    secondsTimer
})


Events({controls, timer})







