const fields = document.querySelectorAll('button');
const win = document.getElementById('win');
const winText = document.getElementById('winText');
const newGame = document.getElementById('newGame');
newGame.innerHTML = 'Neues Spiel';
const player1Win = document.getElementById('player1Win');
const winCounter1 = localStorage.getItem('winCounter1');
const player = document.getElementById('player');
player.innerHTML = 'Spieler 1 (0) ist am Zug!';
player1Win.innerHTML = winCounter1;
if(player1Win.innerHTML === '') {
    player1Win.innerHTML = 0;
}

const undecidedCount = document.getElementById('undecidedCount');
undecidedCount.innerHTML = 0;
const undecidedCounter = localStorage.getItem('undecidedCounter');
undecidedCount.innerHTML = undecidedCounter;
if(undecidedCount.innerHTML === '') {
    undecidedCount.innerHTML = 0;
}

const player2Win = document.getElementById('player2Win');
const winCounter2 = localStorage.getItem('winCounter2');
player2Win.innerHTML = winCounter2;
if(player2Win.innerHTML === '') {
    player2Win.innerHTML = 0;
}

const winQuote1 = document.getElementById('winQuote1');
const winQuote2 = document.getElementById('winQuote2');
winQuoting();

let player2 = false;
let end = false;
let noWinner = [];
let counter = 0;
let undecided = true;


function setPlay(field) {
    let area = field-1;
    if(!player2) {
        fields[area].innerHTML = '0';
        fields[area].disabled = true;
        player2 = true;
        undecided = true;
        winGame(area);  
        player.innerHTML = 'Spieler 2 (X) ist am Zug!';
    } else{
        fields[area].innerHTML = 'X';
        fields[area].disabled = true;
        player2 = false;
        undecided = true;
        winGame(area);
        player.innerHTML = 'Spieler 1 (0) ist am Zug!';
    }
}


function winGame(noWin) {
    if((fields[0].innerHTML === '0' && fields[1].innerHTML === '0' && fields[2].innerHTML === '0') || 
    (fields[0].innerHTML === '0' && fields[3].innerHTML === '0' && fields[6].innerHTML === '0') || 
    (fields[0].innerHTML === '0' && fields[4].innerHTML === '0' && fields[8].innerHTML === '0') || 
    (fields[2].innerHTML === '0' && fields[5].innerHTML === '0' && fields[8].innerHTML === '0') || 
    (fields[1].innerHTML === '0' && fields[4].innerHTML === '0' && fields[7].innerHTML === '0') ||
    (fields[3].innerHTML === '0' && fields[4].innerHTML === '0' && fields[5].innerHTML === '0') ||
    (fields[6].innerHTML === '0' && fields[7].innerHTML === '0' && fields[8].innerHTML === '0') ||
    (fields[2].innerHTML === '0' && fields[4].innerHTML === '0' && fields[6].innerHTML === '0')) {
        winText.innerHTML = 'Spieler 1 hat gewonnen!';
        winText.classList.add('player1Win');
        player1Win.innerHTML++;
        localStorage.setItem('winCounter1', player1Win.innerHTML);
        end = true;
        undecided = false;

    } else if((fields[0].innerHTML === 'X' && fields[1].innerHTML === 'X' && fields[2].innerHTML === 'X') || 
    (fields[0].innerHTML === 'X' && fields[3].innerHTML === 'X' && fields[6].innerHTML === 'X') || 
    (fields[0].innerHTML === 'X' && fields[4].innerHTML === 'X' && fields[8].innerHTML === 'X') || 
    (fields[2].innerHTML === 'X' && fields[5].innerHTML === 'X' && fields[8].innerHTML === 'X') || 
    (fields[1].innerHTML === 'X' && fields[4].innerHTML === 'X' && fields[7].innerHTML === 'X') ||
    (fields[3].innerHTML === 'X' && fields[4].innerHTML === 'X' && fields[5].innerHTML === 'X') ||
    (fields[6].innerHTML === 'X' && fields[7].innerHTML === 'X' && fields[8].innerHTML === 'X') ||
    (fields[2].innerHTML === 'X' && fields[4].innerHTML === 'X' && fields[6].innerHTML === 'X')) {
        winText.innerHTML = 'Spieler 2 hat gewonnen!';
        winText.classList.add('player2Win');
        player2Win.innerHTML++;
        localStorage.setItem('winCounter2', player2Win.innerHTML);
        end = true;
        undecided = false;
    };
    noWinner.push(noWin);
    if(noWinner.length === 9 && undecided) {
        winText.innerHTML = 'Unentschieden!';
        winText.classList.add('undecided');
        undecidedCount.innerHTML++;
        localStorage.setItem('undecidedCounter', undecidedCount.innerHTML);
        end = true;
    }
    if(end) {
        player2 = false;
        end = false;
        for (const area of fields) {
            area.disabled = true;
        };
        fields[9].disabled = false;
        while (counter < 9) {
            noWinner.pop();
            counter++;
        };
        win.classList.remove('toggleUnvisible');
        footer.classList.add('disabled');
        newGame.innerHTML = 'Neues Spiel';
    };
    winQuoting();
}

function startNewGame() {
    for (const area of fields) {
        area.disabled = false;
        area.innerHTML = '';
    };
    counter = 0;
    win.classList.add('toggleUnvisible');
    winText.innerHTML = '';
    winText.classList = '';
    player.innerHTML = 'Spieler 1 (0) ist am Zug!';
    footer.classList.remove('disabled');
}

function resetStatistics() {
    localStorage.removeItem('winCounter1');
    localStorage.removeItem('winCounter2');
    localStorage.removeItem('undecidedCounter');
    player1Win.innerHTML = 0;
    undecidedCount.innerHTML = 0;
    player2Win.innerHTML = 0;
    winQuote1.innerHTML = '-';
    winQuote2.innerHTML = '-';
}

function winQuoting() {
    winQuote1.innerHTML = Math.floor(parseInt(player1Win.innerHTML) / (parseInt(player1Win.innerHTML) + parseInt(undecidedCount.innerHTML) + parseInt(player2Win.innerHTML)) * 100) + '%';
    winQuote2.innerHTML = Math.floor(parseInt(player2Win.innerHTML) / (parseInt(player1Win.innerHTML) + parseInt(undecidedCount.innerHTML) + parseInt(player2Win.innerHTML)) * 100) + '%';
}