let alarm = new Audio('https://chipper-souffle-94ae56.netlify.app/sounds/alarm1.wav');
let sound1 = new Audio('https://chipper-souffle-94ae56.netlify.app/sounds/alarm1.wav');
let sound2 = new Audio('https://chipper-souffle-94ae56.netlify.app/sounds/alarm2.wav');
let sound3 = new Audio('https://chipper-souffle-94ae56.netlify.app/sounds/alarm3.wav');

let start = document.getElementById('submit');
let pause = document.getElementById('break');
let end = document.getElementById('end');
let reset = document.getElementById('reset');
let minutesInput = document.getElementById('minutes');
minutesInput.value = '00';
let secondsInput = document.getElementById('seconds');
secondsInput.value = '00';
let sound = localStorage.getItem('audio');
let soundSelection = document.getElementById('sounds');
let menu = false;
let p = document.querySelectorAll('p');
let timerMenu = false;
const timerSelection = document.getElementById('savedTimers');
const timerSelectionContent = document.getElementById('boxContent');
timerSelectionContent.innerHTML = localStorage.getItem('timers');
const nav = document.querySelector('nav');
const footerbar = document.querySelector('footer');

let save = document.getElementById('save');
let restore = document.getElementById('restore');
let timerCounter = localStorage.getItem('timerCounter');
if (timerSelectionContent.innerHTML === '') {
    timerCounter = 0;
}


if (sound === 'audio3') {
    alarm = sound3;
    p[2].classList.add('active');
} else if (sound === 'audio2') {
    alarm = sound2;
    p[1].classList.add('active');
} else {
    alarm = sound1;
    p[0].classList.add('active');
}

let resetTime = false;


function startTimer() {
    let seconds = secondsInput.value * 1000;
    let minutes = minutesInput.value * 60 * 1000;
    let timeResult = minutes + seconds;
    let now = new Date().getTime();
    let endTime = now + timeResult;
    reset.classList.remove('unsichtbar');
    if (!resetTime) {
        minutesText = minutesInput.value;
        secondsText = secondsInput.value;
    }
    start.classList.add('unsichtbar');
    pause.classList.remove('unsichtbar');
    end.classList.remove('unsichtbar');
    save.classList.add('disabled');
    restore.classList.add('disabled');
    soundSelection.classList.add('unsichtbar');
    menu = false;

    let x = setInterval(function () {
        pause.addEventListener('click', function () {
            start.classList.remove('unsichtbar');
            pause.classList.add('unsichtbar');
            minutesInput.style.pointerEvents = 'all';
            secondsInput.style.pointerEvents = 'all';
            clearInterval(x);
            resetTime = false;
            save.classList.remove('disabled');
            restore.classList.remove('disabled');
        })

        end.addEventListener('click', function () {
            start.classList.remove('unsichtbar');
            minutesInput.style.pointerEvents = 'all';
            minutesInput.value = '00';
            secondsInput.style.pointerEvents = 'all';
            secondsInput.value = '00';
            end.classList.add('unsichtbar');
            pause.classList.add('unsichtbar');
            reset.classList.add('unsichtbar');
            clearInterval(x);
            resetTime = false;
            save.classList.remove('disabled');
            restore.classList.remove('disabled');
        })

        reset.addEventListener('click', function () {
            minutesInput.value = minutesText;
            secondsInput.value = secondsText;
            minutesInput.style.pointerEvents = 'all';
            secondsInput.style.pointerEvents = 'all';
            pause.classList.add('unsichtbar');
            reset.classList.add('unsichtbar');
            start.classList.remove('unsichtbar');
            clearInterval(x);
            resetTime = true;
            save.classList.remove('disabled');
            restore.classList.remove('disabled');
        })

        let timeLeft = endTime - new Date().getTime();
        if (timeLeft > 0) {
            minutesInput.style.pointerEvents = 'none';
            secondsInput.style.pointerEvents = 'none';
            minutes = timeLeft / (1000 * 60);
            minutes = Math.floor(minutes);
            seconds = (timeLeft / 1000) % 60;
            seconds = Math.round(seconds);
            if (seconds < 10) {
                secondsInput.value = '0' + seconds;
            } else if (seconds === 60) {
                minutes += 1;
                minutesInput.value = minutes;
                secondsInput.value = '00';
            } else {
                secondsInput.value = seconds;
            }

            if (minutes < 10) {
                minutesInput.value = '0' + minutes;
            } else {
                minutesInput.value = minutes;
            }

        } else {
            secondsInput.value = '00';
            minutesInput.style.pointerEvents = 'all';
            secondsInput.style.pointerEvents = 'all';
            pause.classList.add('unsichtbar');
            reset.classList.add('unsichtbar');
            alarm.play();
            resetTime = false;
            save.classList.remove('disabled');
            restore.classList.remove('disabled');
        }
    }, 1000);
}

function saveTimer() {
    timerCounter++;
    if (minutesInput.value < 10 && minutesInput.value[0] !== '0') {
        minutesInput.value = 0 + minutesInput.value;
    } else if (minutesInput.value === '0') {
        minutesInput.value += 0;
    }
    if (secondsInput.value < 10 && secondsInput.value[0] !== '0') {
        secondsInput.value = 0 + secondsInput.value;
    } else if (secondsInput.value === 0) {
        secondsInput.value += 0;
    }
    timerSelectionContent.innerHTML += `<p onclick='selectTimer(${timerCounter})' id='timer${timerCounter}'><span id='minutes${timerCounter}'>${minutesInput.value}</span> : <span id='seconds${timerCounter}'>${secondsInput.value}</span><span onclick='removeTimer(${timerCounter})' class='remove' title='Timer löschen'>X</span></p>`
    localStorage.setItem('timers', timerSelectionContent.innerHTML);
    localStorage.setItem('timerCounter', timerCounter);
    alert('Folgende Zeit wurde erfolgreich eingespeichert: ' + minutesInput.value + ' : ' + secondsInput.value);
}

function soundMenu() {
    if (!menu) {
        soundSelection.classList.remove('unsichtbar');
        menu = true;
    } else {
        soundSelection.classList.add('unsichtbar');
        menu = false;
    }
}

function chooseSound(soundTrack) {
    if (soundTrack === 1) {
        alarm = sound1;
        alarm.play();
        sound = localStorage.setItem('audio', 'audio1');
        p[0].classList.add('active');
        p[1].classList.remove('active');
        p[2].classList.remove('active');
    } else if (soundTrack === 2) {
        alarm = sound2;
        alarm.play();
        sound = localStorage.setItem('audio', 'audio2');
        p[1].classList.add('active');
        p[0].classList.remove('active');
        p[2].classList.remove('active');
    } else {
        alarm = sound3;
        alarm.play();
        sound = localStorage.setItem('audio', 'audio3');
        p[2].classList.add('active');
        p[0].classList.remove('active');
        p[1].classList.remove('active');
    }
}

function openTimerSelection() {
    if (!timerMenu) {
        timerSelection.classList.remove('unsichtbar');
        timerMenu = true;
        nav.classList.add('disabled');
        footerbar.classList.add('disabled');
        secondsInput.classList.add('disabled');
    } else {
        timerSelection.classList.add('unsichtbar');
        timerMenu = false;
        nav.classList.remove('disabled');
        footerbar.classList.remove('disabled');
        secondsInput.classList.remove('disabled');
    }
}

function selectTimer(timerNumber) {
    let minutes = document.getElementById('minutes' + timerNumber).innerHTML;
    let seconds = document.getElementById('seconds' + timerNumber).innerHTML;
    minutesInput.value = minutes;
    secondsInput.value = seconds;
    resetTime = false;
    openTimerSelection();
}

function removeTimer(timerNumber) {
    let selectedTimer = document.getElementById('timer' + timerNumber);
    selectedTimer.remove();
    if (timerSelectionContent.innerHTML === '') {
        localStorage.removeItem('timerCounter');
        localStorage.removeItem('timers');
        timerCounter = 0;
    } else {
        localStorage.setItem('timers', timerSelectionContent.innerHTML);
    }
}

function deleteAllTimers() {
    timerSelectionContent.innerHTML = '';
    timerCounter = 0;
    localStorage.removeItem('timerCounter');
    localStorage.removeItem('timers');
}