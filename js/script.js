const startBtn = document.querySelector('.start')
const pausetBtn = document.querySelector('.pause')
const stoptBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

let countTime;
let seconds = 0;
let minutes = 0;
let timesArr = []
const handleStart = () =>{
    clearInterval(countTime)
    countTime = setInterval(()=>{
        
        
        if(seconds <9){
            seconds++
            stopwatch.textContent = `${minutes}:0${seconds}`
        } else if( seconds>=9 && seconds<59){
            seconds++
            stopwatch.textContent = `${minutes}:${seconds}`

        } else{
            minutes++
            seconds = 0;
            stopwatch.textContent = `${minutes}:00`
        }
    }, 1000);
    

}

const handlePause = ()=>{
    clearInterval(countTime)
}

const handleStop = () =>{
     time.innerHTML =`Ostatni czas ${stopwatch.textContent}`


    if(stopwatch.textContent !== '0:00'){
        time.style.visibility = 'visible'
        timesArr.push(stopwatch.textContent)
    }
    clearStuff()

}
const handleReste= ()=>{
    time.style.visibility = 'hidden'
    timesArr = []
    clearStuff()

}
const clearStuff = () =>{
    clearInterval(countTime)
    stopwatch.textContent = '0:00'
    timeList.textContent = ''
    seconds= 0
    minutes= 0
}
const showHistory = ()=>{
    timeList.textContent = ''
    let num = 1;

    timesArr.forEach(time=>{
        const newTime = document.createElement('li')
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`

        timeList.appendChild(newTime)
        num++

    })
}

const showModal = () =>{
    if(!(modalShadow.style.display === 'block')){
        modalShadow.style.display = 'block'
    }else{
        modalShadow.style.display = 'none'
    }
    modalShadow.classList.toggle('model-animation')
}

startBtn.addEventListener('click', handleStart)
pausetBtn.addEventListener('click', handlePause)
stoptBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReste)
historyBtn.addEventListener('click', showHistory)

infoBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', showModal)
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false)