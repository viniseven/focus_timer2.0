export default function(){


const forestSound = new Audio('https://github.com/devgustavosantos/focus-timer-dark-mode/blob/main/assets/sound/forest.wav?raw=true')
const rainSound = new Audio('https://github.com/devgustavosantos/focus-timer-dark-mode/blob/main/assets/sound/rain.wav?raw=true')
const shopSound = new Audio('https://github.com/devgustavosantos/focus-timer-dark-mode/blob/main/assets/sound/coffee-shop.wav?raw=true')
const fireSound = new Audio('https://github.com/devgustavosantos/focus-timer-dark-mode/blob/main/assets/sound/fire-pit.wav?raw=true')
const alarmClock = new Audio('https://github.com/devgustavosantos/focus-timer-dark-mode/blob/main/assets/sound/alert.mp3?raw=true')

const volForest = document.querySelector('.volForest')
const volRain = document.querySelector('.volRain')
const volShop = document.querySelector('.volShop')
const volFire = document.querySelector('.volFire')  

function soundForest(){
    forestSound.play()
    rainSound.pause()
    shopSound.pause()
    fireSound.pause()
    forestSound.loop = true
}

function soundRain(){
    rainSound.play()
    forestSound.pause()
    shopSound.pause()
    fireSound.pause()
    forestSound.loop = true
}

function soundShop(){
    shopSound.play()
    forestSound.pause()
    rainSound.pause()
    fireSound.pause()
    forestSound.loop = true
}

function soundFire(){
    fireSound.play()
    forestSound.pause()
    rainSound.pause()
    shopSound.pause()
    forestSound.loop = true
}

function soundAlarm(){
    alarmClock.play()
    forestSound.loop = true
}

volForest.addEventListener('change', function(){
    forestSound.volume = this.value
})

volRain.addEventListener('change', function(){
    rainSound.volume = this.value
})

volShop.addEventListener('change', function(){
    shopSound.volume = this.value
})

volFire.addEventListener('change', function(){
    fireSound.volume = this.value
})


return{
    soundForest,
    soundRain,
    soundShop,
    soundFire,
    soundAlarm
}

}





