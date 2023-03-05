const task = document.getElementById('task');
const message = document.getElementById('message');
let searchedNumber = 0;
const difficultySetting = document.getElementById('difficultySetting');
let multiplicatorSelected = false;
const numberField = document.getElementById('numberField');
const setGuess = document.getElementById('setGuess');
const newGameDialoge = document.getElementById('newGame');
const winText = document.getElementById('winText');
let noDifficulty = false;
let tries = 0;
let maximum = 0;
let lastGuess = '';
const startButton = document.getElementById('startButton');
numberField.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        checkNumber();
    }
})

function startGame() {
    level = difficultySetting.value;
    if (level === 'easy') {
        task.innerHTML = '<img src="../img/info.svg" alt="" class="headlineIcon"> Gesucht wird eine ganze Zahl zwischen 0 und 50! Viel Spaß beim Raten!';
        searchedNumber = Math.floor(Math.random() * 51);
        selection = false;
        noDifficulty = false;
        maximum = 50;
    } else if (level === 'medium') {
        task.innerHTML = '<img src="../img/info.svg" alt="" class="headlineIcon"> Gesucht wird eine ganze Zahl zwischen 0 und 100! Viel Spaß beim Raten!';
        searchedNumber = Math.floor(Math.random() * 101);
        selection = false;
        noDifficulty = false;
        maximum = 100;
    } else if (level === 'hard') {
        task.innerHTML = '<img src="../img/info.svg" alt="" class="headlineIcon"> Gesucht wird eine ganze Zahl zwischen 0 und 1000! Viel Spaß beim Raten!';
        searchedNumber = Math.floor(Math.random() * 1001);
        selection = false;
        noDifficulty = false;
        maximum = 1000;
    } else if (level === 'user') {
        let userMaximum = parseInt(prompt('Gib das Maximum des Ratebereiches ein. Dieses muss mindestens den Wert 10 haben.'));
        if (userMaximum >= 10) {
            multiplicatorSelected = true;
            noDifficulty = false;
        }
        while (!multiplicatorSelected) {
            alert('Nicht erlaubte Eingabe getätigt! Bitte gib einen gültigen Wert ein!');
            userMaximum = parseInt(prompt('Gib das Maximum des Ratebereiches ein. Dieses muss mindestens den Wert 10 haben.'));
            if (userMaximum >= 10) {
                multiplicatorSelected = true;
                noDifficulty = false;
            }
        };
        task.innerHTML = `<img src="../img/info.svg" alt="" class="headlineIcon"> Gesucht wird eine ganze Zahl zwischen 0 und ${userMaximum}! Viel Spaß beim Raten!`;
        searchedNumber = Math.floor(Math.random() * (userMaximum + 1));
        maximum = userMaximum;
    } else {
        noDifficulty = true;
    }
    if (!noDifficulty) {
        difficultySetting.classList.add('disabled');
        startButton.classList.add('disabled');
        numberField.classList.remove('toggleUnvisible');
        setGuess.classList.remove('toggleUnvisible');
    }

}

function checkNumber() {
    let number = parseInt(numberField.value);
    if (number === searchedNumber) {
        tries++;
        endScreen();
    } else if (number < 0 || number >= maximum) {
        message.innerHTML = 'Deine Zahl liegt nicht im vorgegebenen Intervall!';
    } else if(lastGuess === number) {
        message.innerHTML = 'Du hast die Zahl ' + number + ' schon eingegeben und sie war falsch. Bitte gib eine andere Zahl ein!';
    } else if (searchedNumber < number) {
        tries++;
        message.innerHTML = 'Die gesuchte Zahl ist kleiner als deine eingegebene. Deine eingegebene Zahl war ' + number + '.';
        lastGuess = number;
    } else if (searchedNumber > number) {
        tries++;
        message.innerHTML = 'Die gesuchte Zahl ist größer als deine eingegebene. Deine eingegebene Zahl war ' + number + '.';
        lastGuess = number;
    }
}

function endScreen() {
    newGameDialoge.classList.remove('toggleUnvisible');
    message.innerHTML = '';
    numberField.value = '';
    footer.classList.add('disabled');
    winText.innerHTML = `<img class="headlineIcon" src="../img/info.svg"> Du hast gewonnen! Deine benötigten Versuche: ${tries}`;
}

function newGame() {
    difficultySetting.classList.remove('disabled');
    startButton.classList.remove('disabled');
    numberField.classList.add('toggleUnvisible');
    setGuess.classList.add('toggleUnvisible');
    task.innerHTML = '';
    newGameDialoge.classList.add('toggleUnvisible');
    tries = 0;
    footer.classList.remove('disabled');
}