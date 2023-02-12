const clickSliders = document.getElementById('projectClick');
const sliderContent = document.getElementById('sliderContent');
const sliders = sliderContent.getElementsByTagName('div');
const projectButtons = clickSliders.getElementsByTagName('span');
let openSlider = 0;
projectButtons[0].classList.add('activeProject');
let autoSwitcher = true;
const shiftOn = document.getElementById('shiftOn');
const shiftOff = document.getElementById('shiftOff');

let autoSwitch = setInterval(sliderRight, 8000);
function sliderLeft() {
    sliders[openSlider].classList = 'sliderDisabled';
    projectButtons[openSlider].classList.remove('activeProject');
    openSlider--;
    if (openSlider === -1) {
        openSlider = sliders.length - 1;
    }
    projectButtons[openSlider].classList.add('activeProject');
    sliders[openSlider].classList = 'sliderEnabled';
    if (autoSwitcher) {
        clearInterval(autoSwitch);
        autoSwitch = setInterval(sliderRight, 8000);
    }
}

function sliderRight() {
    sliders[openSlider].classList = 'sliderDisabled';
    projectButtons[openSlider].classList.remove('activeProject');
    openSlider++;
    if (openSlider === sliders.length) {
        openSlider = 0;
    }
    sliders[openSlider].classList = 'sliderEnabled';
    projectButtons[openSlider].classList.add('activeProject');
    if (autoSwitcher) {
        clearInterval(autoSwitch);
        autoSwitch = setInterval(sliderRight, 8000);
    }
}

function chooseSlider(sliderNumber) {
    sliders[openSlider].classList = 'sliderDisabled';
    projectButtons[openSlider].classList.remove('activeProject');
    sliders[sliderNumber].classList = 'sliderEnabled';
    projectButtons[sliderNumber].classList.add('activeProject');
    openSlider = sliderNumber;
    if (autoSwitcher) {
        clearInterval(autoSwitch);
        autoSwitch = setInterval(sliderRight, 8000);
    }
}

function disableAutoSwitch() {
    if (autoSwitcher) {
        clearInterval(autoSwitch);
        autoSwitcher = false;
        shiftOn.classList.add('toggleUnvisible');
        shiftOff.classList.remove('toggleUnvisible');
    } else {
        shiftOn.classList.remove('toggleUnvisible');
        shiftOff.classList.add('toggleUnvisible');
        autoSwitcher = true;
        autoSwitch = setInterval(sliderRight, 8000);
    }
}