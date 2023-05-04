let radizieren = false;
const resultArea = document.getElementById('resultArea');
const interimResultArea = document.getElementById('interimResult');
const calculatorMenu = document.getElementById('calculatorMenu');
const control = document.getElementById('control');
const additionalFeatures = document.getElementById('additionalFeatures');
const angle = document.getElementById('angle');
const history = document.getElementById('history');
const historyContent = document.getElementById('boxContent');
const converter = document.getElementById('converter');
const calculatorMenuToggle = document.getElementById('calculatorMenuToggle');
const angleDisplay = document.getElementById('angleDisplay');
let additionalFeaturesOpened = false;
const body = document.body;
const PI = Math.PI;
const E = Math.E;
let calculatorMenuOpen = false;
let operator = false;
let interimResultOld = 0;
let additionalCloseClips = [];
let addCloseClip = false;
let trigonometry = false;
let inputNumber = '';
let historyOpen = false;
let converterOpen = false;
let counter = 1;

displayAngle();

body.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        calculateResult();
    } else {
        interimResult();
    }
});

function openCalculatorMenu() {
    if (!calculatorMenuOpen) {
        calculatorMenuOpen = true;
        calculatorMenu.classList.remove('toggleUnvisible');
        control.classList.add('disabled');
        navigation.classList.add('disabled');
        control.classList.add('disabled');
    } else {
        calculatorMenuOpen = false;
        calculatorMenu.classList.add('toggleUnvisible');
        control.classList.remove('disabled');
        navigation.classList.remove('disabled');
        control.classList.remove('disabled');
    }
}

function openAdditionalFeatures() {
    if (!additionalFeaturesOpened) {
        additionalFeatures.classList.remove('toggleUnvisible');
        body.style.overflow = 'hidden';
        additionalFeaturesOpened = true;
        openCalculatorMenu();
    } else {
        additionalFeatures.classList.add('toggleUnvisible');
        additionalFeaturesOpened = false;
        body.style.overflow = 'initial';
    }
}

function changeAngle() {
    if (angle.innerHTML === 'DEG') {
        angle.innerHTML = 'RAD';
    } else if (angle.innerHTML === 'RAD') {
        angle.innerHTML = 'DEG';
    };
    displayAngle();
}

function selectOperations(operation) {
    if (operation === '(') {
        addCloseClip = false;
    } else if (operation === ')') {
        trigonometry = false;
        addCloseClip = false;
    } else if (operation === 1 || operation === 2 || operation === 3 || operation === 4 || operation === 5 || operation === 6 || operation === 7 || operation === 8 || operation === 9 || operation === 0) {
        inputNumber += operation;
    } else if (operation === '!') {
        faculty(parseInt(inputNumber));
    }
    if (radizieren) {
        let radikantExponent = prompt("Welchen Exponent soll der Radikant (Zahl vor dem Klick auf das Wurzelsymbol) haben? Standardmäßig beträgt dieser Wert 1.");
        resultArea.value += operation + radikantExponent + " / ";
        let wurzelExponent = prompt("Welchen Wert soll der Wurzelexponent haben? Wenn du beispielsweise die 3. Wurzel ziehen möchtest, gib 3 ein.");
        resultArea.value += wurzelExponent + ")";
        radizieren = false;
    } else if (operator && !addCloseClip) {
        resultArea.value += operation;
        operator = false;
        inputNumber = '';
    } else if (addCloseClip && operator) {
        additionalCloseClips.push(resultArea.value.length);
        operator = false;
        resultArea.value += operation;
        addCloseClip = false;
    } else {
        resultArea.value += operation;
        resultArea.value = resultArea.value.replace('!', '');
    }
    interimResult();
    if (additionalFeaturesOpened) {
        openAdditionalFeatures();
    };
}

function calculateResult() {
    interimResultArea.innerHTML = resultArea.value;
    correction = false;
    calculation();
    if (resultArea.value === 'Infinity') {
        alert('Mathematischer Fehler: Division durch 0 ist nicht möglich!');
        resultArea.value = '';
    } else if (resultArea.value === 'undefined') {
        alert('Bitte gib eine Zahl ein!');
        resultArea.value = '';
        interimResultArea.innerHTML = '';
    }
    inputChange = true;
    inputNumber = '';
    if (resultArea.value !== '') {
        historyContent.innerHTML += `<div onclick='restoreCalculation(${counter})'><p id='calculation${counter}' class='calculation'>${interimResultArea.innerHTML}</p><p id='result${counter}' class='result'>${resultArea.value}</p></div>`
        counter++;
    }
}

function deleteLast() {
    if (resultArea.value.endsWith(' ')) {
        resultArea.value = resultArea.value.slice(0, -3);
    } else if (resultArea.value.endsWith('asin (') || resultArea.value.endsWith('acos (') || resultArea.value.endsWith('atan (')) {
        resultArea.value = resultArea.value.slice(0, -6);
        trigonometry = false;
    } else if (resultArea.value.endsWith('sin (') || resultArea.value.endsWith('cos (') || resultArea.value.endsWith('tan (') || resultArea.value.endsWith('cot (') || resultArea.value.endsWith('abs (')) {
        resultArea.value = resultArea.value.slice(0, -5);
        trigonometry = false;
    } else if (resultArea.value.endsWith('rand')) {
        resultArea.value = resultArea.value.slice(0, -4);
    } else if (resultArea.value.endsWith('√')) {
        resultArea.value = resultArea.value.slice(0, -1);
        if (!addCloseClip) {
            additionalCloseClips.pop();
        }
        addCloseClip = false;
    }
    else {
        resultArea.value = resultArea.value.slice(0, -1);
        inputNumber = inputNumber.slice(0, -1);
    }
    operator = false;
    correction = false;
    interimResult();
    if(interimResultArea.innerHTML === 'undefined') {
        interimResultArea.innerHTML = '';
    }
}

function deleteAll() {
    resultArea.value = "";
    interimResultArea.innerHTML = '';
    operator = false;
    addOpenClip = false;
    addCloseClip = false;
    additionalCloseClips = [];
    inputNumber = '';
}

function calculation() {
    replaceFirst(resultArea);
    let result = eval(resultArea.value);
    resultArea.value = result;
    for (let i = 1; i < 10; i++) {
        if (resultArea.value.endsWith(i) && result > 10 ** -10) {
            resultArea.value = result.toFixed(10);
        }
    }
    resultArea.value = resultArea.value.replace('.', ',');
    if(resultArea.value !== 'undefined') {
        resultArea.value = resultArea.value.replace('e', ' * 10 ^ ');
    }
    resultArea.value = resultArea.value.replace('+', '');
    while (resultArea.value.endsWith('0') && resultArea.value.match(',')) {
        resultArea.value = resultArea.value.slice(0, -1);
    }
    if (resultArea.value.endsWith(',')) {
        resultArea.value = resultArea.value.slice(0, -1);
    }
}

function interimResult() {
    let input = resultArea.value;
    interimResultArea.innerHTML = resultArea.value;
    resultArea.value = input;
    try {
        calculation();
        interimResultArea.innerHTML = resultArea.value;
        resultArea.value = input;
        interimResultOld = interimResultArea.innerHTML;
    } catch (error) {
        interimResultArea.innerHTML = interimResultOld;
    }
}

function replaceFirst(area) {
    if (addCloseClip || trigonometry) {
        area.value += ')';
    }
    for (const closeClip of additionalCloseClips) {
        area.value = area.value.replaceAt(closeClip, ')');
    };
    for (let i = 0; i <= area.value.length; i++) {
        if (angle.innerHTML === 'DEG') {
            area.value = area.value.replace('asin (', '180 / 𝛑 * Math.asin(');
            area.value = area.value.replace('acos (', '180 / 𝛑 * Math.acos(');
            area.value = area.value.replace('atan (', '180 / 𝛑 * Math.atan(');
            area.value = area.value.replace('sin (', 'Math.sin(𝛑 / 180 * ');
            area.value = area.value.replace('cos (90)', '0');
            area.value = area.value.replace('cos (270)', '0');
            area.value = area.value.replace('cos (', 'Math.cos(𝛑 / 180 * ');
            area.value = area.value.replace('tan (', 'Math.tan(𝛑 / 180 * ');
            area.value = area.value.replace('cot (', '1 / Math.tan(𝛑 / 180 * ');
        } else if (angle.innerHTML === 'RAD') {
            area.value = area.value.replace('asin (', 'Math.asin(');
            area.value = area.value.replace('acos (', 'Math.acos(');
            area.value = area.value.replace('atan (', 'Math.atan(');
            area.value = area.value.replace('sin (', 'Math.sin(');
            area.value = area.value.replace('cos (', 'Math.sin(');
            area.value = area.value.replace('cos (', 'Math.cos(');
            area.value = area.value.replace('tan (', 'Math.tan(');
            area.value = area.value.replace('cot (', '1 / Math.tan(');
        }
        area.value = area.value.replace('√', 'Math.sqrt(');
        area.value = area.value.replace(',', '.');
        area.value = area.value.replace('abs (', 'Math.abs(')
        area.value = area.value.replace('^', '**');
        area.value = area.value.replace('𝛑', PI);
        area.value = area.value.replace('E', E);
        area.value = area.value.replace(' % ', ' * 0.01');
        area.value = area.value.replace('rand', Math.random());
    }
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function changeInputs() {
    resultArea.value = interimResultArea.innerHTML;
    interimResult();
}

function showHistory() {
    if (historyOpen) {
        history.classList.add('toggleUnvisible');
        historyOpen = false;
        control.classList.remove('disabled');
        navigation.classList.remove('disabled');
        calculatorMenuToggle.classList.remove('disabled');
        body.style.overflow = 'initial';
    } else {
        history.classList.remove('toggleUnvisible');
        historyOpen = true;
        openCalculatorMenu();
        control.classList.add('disabled');
        navigation.classList.add('disabled');
        calculatorMenuToggle.classList.add('disabled');
        body.style.overflow = 'hidden';
    }
}

function showConverter() {
    if (converterOpen) {
        converter.classList.add('toggleUnvisible');
        converterOpen = false;
        control.classList.remove('disabled');
        navigation.classList.remove('disabled');
        calculatorMenuToggle.classList.remove('disabled');
        body.style.overflow = 'initial';
    } else {
        converter.classList.remove('toggleUnvisible');
        converterOpen = true;
        openCalculatorMenu();
        control.classList.add('disabled');
        navigation.classList.add('disabled');
        calculatorMenuToggle.classList.add('disabled');
        body.style.overflow = 'hidden';
    }
}

function faculty(number) {
    resultArea.value = resultArea.value.slice(0, -number.length);
    let facultyResult = 1;
    for (let i = 1; i <= number; i++) {
        facultyResult = facultyResult * i;
    };
    number = facultyResult;
    resultArea.value += number;
}

function deleteHistory() {
    historyContent.innerHTML = '';
}

function restoreCalculation(number) {
    let calc = document.getElementById('calculation' + number);
    let result = document.getElementById('result' + number);
    resultArea.value = result.innerHTML;
    interimResultArea.innerHTML = calc.innerHTML;
    showHistory();
}

function displayAngle() {
    angleDisplay.innerHTML = angle.innerHTML;
}