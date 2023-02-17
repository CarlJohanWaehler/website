let radizieren = false;
const resultArea = document.getElementById('resultArea');
const interimResultArea = document.getElementById('interimResult');
let exponent = false;
let wurzelRemove = false;

resultArea.addEventListener("keyup", pressEnter);

function pressEnter(e) {
    if (e.keyCode == 13) {
        calculateResult();
    } else {
        interimResult();
    }
}
function selectOperations(operation) {
    if (radizieren) {
        let radikantExponent = prompt("Welchen Exponent soll der Radikant (Zahl vor dem Klick auf das Wurzelsymbol) haben? Standardmäßig beträgt dieser Wert 1.");
        resultArea.value += operation + radikantExponent + " / ";
        let wurzelExponent = prompt("Welchen Wert soll der Wurzelexponent haben? Wenn du beispielsweise die 3. Wurzel ziehen möchtest, gib 3 ein.");
        resultArea.value += wurzelExponent + ")";
        radizieren = false;
    } else {
        resultArea.value += operation;
    }
    interimResult();
}

function calculateResult() {
    interimResultArea.innerHTML = resultArea.value;
    for (let i = 0; i < resultArea.value.length; i++) {
        resultArea.value = resultArea.value.replace(',', '.');
        resultArea.value = resultArea.value.replace('^', '**');
        resultArea.value = resultArea.value.replace('𝛑', Math.PI);
    }
    let result = eval(resultArea.value);
    resultArea.value = result;
    for (let i = 2; i < 10; i++) {
        if (resultArea.value.endsWith(i) && result > 10 ** -10) {
            resultArea.value = result.toFixed(10);
        }
    }
    resultArea.value = resultArea.value.replace('.', ',');
    resultArea.value = resultArea.value.replace('e', ' * 10 ^ ');
    resultArea.value = resultArea.value.replace('+', '');
    while (resultArea.value.endsWith('0') && resultArea.value.match(',')) {
        resultArea.value = resultArea.value.slice(0, -1);
    }
    if (resultArea.value.endsWith(',')) {
        resultArea.value = resultArea.value.slice(0, -1);
    }
    if (result === Infinity) {
        alert("Mathematischer Fehler: Division durch 0 ist nicht möglich!");
        resultArea.value = "";
    } else if (result === undefined) {
        alert("Bitte gib eine Zahl ein!");
        resultArea.value = "";
    }
}

function deleteLast() {
    if (resultArea.value.endsWith(' ')) {
        if (exponent) {
            resultArea.value = resultArea.value.slice(0, -4);
            exponent = false;
        } else {
            resultArea.value = resultArea.value.slice(0, -3);
        }
    } else if (resultArea.value.endsWith('(')) {
        if (wurzelRemove) {
            resultArea.value = resultArea.value.slice(0, -5);
            wurzelRemove = false;
        } else {
            resultArea.value = resultArea.value.slice(0, -1);
        }
    } else {
        resultArea.value = resultArea.value.slice(0, -1);
    }
    interimResult()
}

function deleteAll() {
    resultArea.value = "";
    interimResultArea.innerHTML = '';
}

function interimResult() {
    interimResultArea.innerHTML = resultArea.value;
    for (let i = 0; i < resultArea.value.length; i++) {
        interimResultArea.innerHTML = interimResultArea.innerHTML.replace(',', '.');
        interimResultArea.innerHTML = interimResultArea.innerHTML.replace('^', '**');
        interimResultArea.innerHTML = interimResultArea.innerHTML.replace('𝛑', Math.PI);
    }
    try {
        let interim = eval(interimResultArea.innerHTML);
        interimResultArea.innerHTML = interim;
        for (let i = 2; i < 10; i++) {
            if (interimResultArea.innerHTML.endsWith(i) && result > 10 ** -10) {
                interimResultArea.innerHTML = interim.toFixed(10);
            }
        }
        interimResultArea.innerHTML = interimResultArea.innerHTML.replace('.', ',');
        if (interimResultArea.innerHTML === 'Infinity') {
            interimResultArea.innerHTML = 'Division durch 0 nicht möglich!';
        } else if (interimResultArea.innerHTML === 'undefined') {
            interimResultArea.innerHTML = '';
        } else if (interimResultArea.innerHTML === 'NaN') {
            interimResultArea.innerHTML = 'Bitte prüfe deine Eingabe!';
        }
        interimResultArea.innerHTML = interimResultArea.innerHTML.replace('e', ' * 10 ^ ');
        interimResultArea.innerHTML = interimResultArea.innerHTML.replace('+', '');
        while (interimResultArea.innerHTML.endsWith('0') && interimResultArea.innerHTML.match(',')) {
            interimResultArea.innerHTML = interimResultArea.innerHTML.slice(0, -1);
        }
        if (interimResultArea.innerHTML.endsWith(',')) {
            interimResultArea.innerHTML = interimResultArea.innerHTML.slice(0, -1);
        }
    } catch (error) {
        interimResultArea.innerHTML = resultArea.value;
    }
}