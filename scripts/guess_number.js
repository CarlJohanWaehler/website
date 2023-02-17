const task = document.getElementById('task');
const message = document.getElementById('message');
let searchedNumber = 0;
const difficultySetting = document.getElementById('diffcultySetting');
let multiplicatorSelected = false;
const numberField = document.getElementById('numberField');
const setGuess = document.getElementById('setGuess');
const newGameDialoge = document.getElementById('newGame');
const winText = document.getElementById('winText');
let tries = 0;
numberField.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        checkNumber();
    }
})

function difficulty(level) {
        if (level === 'easy') {
            task.innerHTML = '<img src="../img/info.svg" alt="" class="headlineIcon"> Gesucht wird eine ganze Zahl zwischen 0 und 50! Viel Spaß beim Raten!';
            searchedNumber = Math.floor(Math.random() * 51);
            selection = false;
        } else if (level === 'medium') {
            task.innerHTML = '<img src="../img/info.svg" alt="" class="headlineIcon"> Gesucht wird eine ganze Zahl zwischen 0 und 100! Viel Spaß beim Raten!';
            searchedNumber = Math.floor(Math.random() * 101);
            selection = false;
        } else if (level === 'hard') {
            task.innerHTML = '<img src="../img/info.svg" alt="" class="headlineIcon"> Gesucht wird eine ganze Zahl zwischen 0 und 1000! Viel Spaß beim Raten!';
            searchedNumber = Math.floor(Math.random() * 1001);
            selection = false;
        } else if (level === 'user') {
            let maximum = parseInt(prompt('Gib das Maximum des Ratebereiches ein. Dieses muss mindestens den Wert 10 haben.'));
            if(maximum >= 10) {
                multiplicatorSelected = true;
            }
            while(!multiplicatorSelected) {
                alert('Nicht erlaubte Eingabe getätigt! Bitte gib einen gültigen Wert ein!');
                maximum = parseInt(prompt('Gib das Maximum des Ratebereiches ein. Dieses muss mindestens den Wert 10 haben.'));
                if(maximum >= 10) {
                    multiplicatorSelected = true;
                }
            };
            task.innerHTML = `<img src="../img/info.svg" alt="" class="headlineIcon"> Gesucht wird eine ganze Zahl zwischen 0 und ${maximum}! Viel Spaß beim Raten!`;
            searchedNumber = Math.floor(Math.random() * (maximum + 1));
        }
    difficultySetting.classList.add('disabled');
    numberField.classList.remove('toggleUnvisible');
    setGuess.classList.remove('toggleUnvisible');
}

function checkNumber() {
    let number = parseInt(numberField.value);
    if(number === searchedNumber) {
        tries++;
        endScreen();
    } else if(searchedNumber < number) {
        tries++;
        message.innerHTML = 'Die gesuchte Zahl ist kleiner als deine eingegebene.';
    } else if(searchedNumber > number) {
        tries++;
        message.innerHTML = 'Die gesuchte Zahl ist größer als deine eingegebene.';
    }
}

function endScreen() {
    newGameDialoge.classList.remove('toggleUnvisible');
    message.innerHTML = '';
    numberField.value = '';
    winText.innerHTML = `<img class="headlineIcon" src="../img/info.svg"> Du hast gewonnen! Deine benötigten Versuche: ${tries}`;
}

function newGame() {
    difficultySetting.classList.remove('disabled');
    numberField.classList.add('toggleUnvisible');
    setGuess.classList.add('toggleUnvisible');
    task.innerHTML = '';
    newGameDialoge.classList.add('toggleUnvisible');
    tries = 0;
}