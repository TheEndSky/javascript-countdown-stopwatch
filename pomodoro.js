//Variables 

const startBtn  = document.querySelector('#start');

const skipBtn = document.querySelector('#skip');

const bottomTextLine = document.querySelector('#encourage-text');

const textButton = document.getElementById('start')

const startBtnContainer = document.querySelector('.start-btn-container')


//Time

let startingMinutes = 25;
let startingMinutesShort = 5;
let startingMinutesLong = 15;
let timeSeconds = startingMinutes * 60;






//timer
let timerStatus = 'off';
let timerInterval = null;


function stopwatch() {

    if (timeSeconds < 1) {
        
        document.querySelector('#time').textContent = '00:00'
        clearInterval(timerInterval())
    }
    let minutes = Math.floor(timeSeconds/60)
    let seconds = timeSeconds % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    document.querySelector('#time').textContent = minutes + ':' + seconds
    timeSeconds--
}

startBtn.addEventListener('click',function(){
    if(timerStatus ==='off') {
        timerInterval = window.setInterval(stopwatch,1000);
        timerStatus ='on';
        skipBtn.style.display = 'block'
        startBtn.textContent = 'Pause'
        startBtnContainer.style.transform = 'scale(0.9)'
        startBtnContainer.style.boxShadow = '0 0 3px black'
    } else {
        window.clearInterval(timerInterval);
        timerStatus = 'off';
        startBtn.textContent ='Start'
        skipBtn.style.display = 'none'
        startBtnContainer.style.transform = 'scale(1)'
        startBtnContainer.style.boxShadow = 'none'
    }
})

//Skips to the end and restarts the timer.
skipBtn.addEventListener('click',function(){
    
    window.clearInterval(timerInterval)
    document.querySelector('#time').textContent = '00:00'
    checkStatus();

    if(timerStatus ==='on') {
        window.clearInterval(timerInterval);
        timerStatus = 'off';
        startBtn.textContent ='Start'
        skipBtn.style.display = 'none'
        startBtnContainer.style.boxShadow = 'none'
        startBtnContainer.style.transform = 'scale(1)'
    } 
})

//Functionality Buttons
let currentActive = null 

const pomodoroTime = document.getElementById('study');
const longTime = document.getElementById('long-break');
const shortTime = document.getElementById('short-break');







pomodoroTime.addEventListener('click',function(){
    
    textButton.style.color = 'orangered'
    
    pomodoroTime.style.background = 'rgba(0,0,0,0.3)'
    longTime.style.background = 'transparent';
    shortTime.style.background = 'transparent';
    document.body.style.background = 'orangered'
    
    currentActive = 'study'
    checkStatus()
    document.querySelector('#time').textContent = '25:00'
    
    bottomTextLine.textContent = 'Time to focus!'

    if(timerStatus ==='on') {
        window.clearInterval(timerInterval);
        timerStatus = 'off';
        startBtn.textContent ='Start'
        skipBtn.style.display = 'none'
        startBtnContainer.style.boxShadow = 'none'
        startBtnContainer.style.transform = 'scale(1)'
    } 
    
})




shortTime.addEventListener('click',function(){
    
    textButton.style.color = 'rgb(71, 198, 154)'

    shortTime.style.background = 'rgba(0,0,0,0.3)';
    longTime.style.background = 'transparent';
    pomodoroTime.style.background = 'transparent';
    document.body.style.background = 'rgb(71, 198, 154)'
    
    currentActive = 'short'
    checkStatus()
    document.querySelector('#time').textContent = '05:00'

    bottomTextLine.textContent = 'Time for a break!'

    if(timerStatus ==='on') {
        window.clearInterval(timerInterval);
        timerStatus = 'off';
        startBtn.textContent ='Start'
        skipBtn.style.display = 'none'
        startBtnContainer.style.boxShadow = 'none'
        startBtnContainer.style.transform = 'scale(1)'
    } 
})


longTime.addEventListener('click',function(){
    textButton.style.color='rgb(37, 177, 224)';

    longTime.style.background = 'rgba(0,0,0,0.3)';
    shortTime.style.background = 'transparent';
    pomodoroTime.style.background = 'transparent';
    document.body.style.background = 'rgb(37, 177, 224)';
    
    currentActive = 'long';
    checkStatus();
    document.querySelector('#time').textContent = '15:00';

    bottomTextLine.textContent = 'Time for a break!';

    if(timerStatus ==='on') {
        window.clearInterval(timerInterval);
        timerStatus = 'off';
        startBtn.textContent ='Start'
        skipBtn.style.display = 'none'
        startBtnContainer.style.boxShadow = 'none'
        startBtnContainer.style.transform = 'scale(1)'
    } 
})


//Change the Initial time depending on mode
const checkStatus = function() {
    
    
    window.clearInterval(timerInterval)

    if(currentActive === 'long') {
        timeSeconds = startingMinutesLong * 60
        
    } else if(currentActive === 'short') {
        timeSeconds = startingMinutesShort * 60
    } else {
        timeSeconds = startingMinutes * 60;
    }
}