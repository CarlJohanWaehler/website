const canvas = document.getElementById('canvas');
const pointDisplay = document.getElementById('pointDisplay');
const highscoreDisplay = document.getElementById('highscoreDisplay');
const loseDialog = document.getElementById('newGame');
const loseText = document.getElementById('loseText');
const highscoreText = document.getElementById('highscoreText');
const stopButton = document.getElementById('stop');
const ctx = canvas.getContext('2d');
let direction = '';
let highscore = '';
let vertical = false;
let horizontal = false;
let snake = [{
    x: 5,
    y: 5
}];

let rows = 20;
let cols = 20;
let food;
let lost = false;
let x;
let pause = false;
const maxWidth = window.matchMedia('(max-width: 500px)');
changeSize(maxWidth);
changeSpeed(maxWidth);
function changeSize(maxWidth) {
    if (maxWidth.matches) {
        canvas.width = 250;
        canvas.height = 250;
        rows = 16;
        cols = 16;
    } 
  }
const cellWidth = canvas.width / cols;
const cellHeight = canvas.height / rows;

placeFood();
function changeSpeed(maxWidth) {
    if(maxWidth.matches) {
        x = setInterval(gameLoop, 300);
    }
    else {
        x = setInterval(gameLoop, 200);
    }
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 37 && !horizontal) {
        direction = 'Left';
        horizontal = true;
        vertical = false;
    } else if (e.keyCode === 38 && !vertical) {
        direction = 'Up';
        vertical = true;
        horizontal = false;
    } else if (e.keyCode === 39 && !horizontal) {
        direction = 'Right';
        horizontal = true;
        vertical = false;
    } else if (e.keyCode === 40 && !vertical) {
        direction = 'Down';
        vertical = true;
        horizontal = false;
    } else if(e.keyCode === 32) {
        stopSnake();
    }
});

draw();

function shiftSnake() {
    for (let i = snake.length - 1; i > 0; i--) {
        const part = snake[i];
        const lastPart = snake[i - 1];
        part.x = lastPart.x;
        part.y = lastPart.y;
    }
}

function gameLoop() {
    testGameOver();
    shiftSnake();
    if (direction === 'Left') {
        snake[0].x--;
    } else if (direction === 'Right') {
        snake[0].x++;
    } else if (direction === 'Up') {
        snake[0].y--;
    } else if (direction === 'Down') {
        snake[0].y++;
    }
    if (snake[0].x === food.x && snake[0].y === food.y) {
        snake = [{
            x: snake[0].x,
            y: snake[0].y
        }, ...snake];
        placeFood();
        draw();
    }
    displayPoints();
}

function placeFood() {
    let randomX = (Math.floor(Math.random() * cols));
    let randomY = (Math.floor(Math.random() * rows));
    food = {
        x: randomX,
        y: randomY
    };
    for (let i = snake.length - 1; i >= 0; i--) {
        while (snake[i].x && snake[i].y === food.x && food.y) {
            placeFood();
            draw();
        }
    }
}

function draw() {
    ctx.fillStyle = '#282828';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    snake.forEach(part => add(part.x, part.y));
    ctx.fillStyle = 'yellow';
    add(food.x, food.y);
    requestAnimationFrame(draw);
}

function add(x, y) {
    ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth - 1, cellHeight - 1);
}

function displayPoints() {
    if (direction === '') {
        pointDisplay.innerHTML = 'Drücke bitte eine Richtungstaste, um das Spiel zu starten!';
        highscoreDisplay.innerHTML = '';
    } else {
        pointDisplay.innerHTML = `Punkte: ${snake.length - 1}`;
    }
    if (direction !== '' && highscore !== '') {
        highscoreDisplay.innerHTML = 'Rekord: ' + highscore + ' Punkte';
    }
}

function testGameOver() {
    if (snake[0].x < 0 || snake[0].x > cols - 1 || snake[0].y < 0 || snake[0].y > rows - 1) {
        lost = true;

    }
    for (let i = snake.length - 1; i > 1; i--) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            lost = true;
        }
    }
    if (lost) {
        loseText.innerHTML = `<img class="headlineIcon" src="../img/info.svg"> Du hast verloren! Du hast ${snake.length - 1} Punkte erreicht!`;
        loseDialog.classList.remove('toggleUnvisible');
        calculateHighScore();
        clearInterval(x);
        direction = '';
        snake = [{
            x: 5,
            y: 5
        }];
    }
}

function newGame() {
    loseDialog.classList.add('toggleUnvisible');
    lost = false;
    changeSpeed(maxWidth);
    vertical = false;
    horizontal = false;
}

function calculateHighScore() {
    if (highscore === '') {
        highscore = snake.length - 1;
        highscoreText.innerHTML = `Der Rekord liegt jetzt bei ${highscore} Punkten. Schaffst du jetzt bei deinem 2. Spiel noch mehr?`;
    } else if (highscore < snake.length - 1) {
        highscore = snake.length - 1;
        highscoreText.innerHTML = `Du hast den Rekord gebrochen! Er liegt jetzt bei ${highscore} Punkten. Schaffst du beim nächsten Mal noch mehr?`;
    } else {
        highscoreText.innerHTML = `Dein Rekord liegt bei ${highscore} Punkten. Schaffst du es, ihn zu brechen?`;
    }
}

function stopSnake() {
    if(!pause) {
        clearInterval(x);
        pause = true;
        pointDisplay.innerHTML = 'Pause! Zum Fortsetzen bitte erneut die Leertaste drücken!';
        highscoreDisplay.innerHTML = '';
        stopButton.innerHTML = '<img src="../img/play.svg" alt="" class="headlineIcon">'
    } else{
        changeSpeed(maxWidth);
        pause = false;
        stopButton.innerHTML = '<img src="../img/stop.svg" alt="" class="headlineIcon">';
    }
}