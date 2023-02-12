const navigation = document.querySelector('nav');
const footer = document.querySelector('footer');
createMenu();
createFooterMenu();

function createMenu() {
    navigation.innerHTML = `<p id="toggleMain" onclick="openMain()"></p>
    <ul id="navbar" class="unvisible">
        <li><a href="../index.html">Home</a></li>
        <li id="subOpener" onmouseover="subOpen()" onmouseleave="subClose()" onclick="openSubMobile()">Über mich
            <span id="toggleSub"></span>
            <ul id="sub" class="unsichtbar unvisible">
                <li><a href="../vorstellung.html">Wer bin ich?</a></li>
                <li><a href="../tools.html">Meine verwendeten Tools</a></li>
            </ul>
        </li>
        <li><a href="../projekte.html">Projekte</a></li>
        <li><a href="../tipps.html">Tipps für den Computer</a></li>
    </ul>`;
}

function createFooterMenu() {
    let date = new Date();
    let year = date.getFullYear()
    footer.innerHTML = `<p id="copyright">@ ${year} Carl-Johan Wähler. Alle Rechte vorbehalten.</p>
    <ul id="footerBar">
        <li><a href="../impressum.html">Impressum</a> |</li>
        <li><a href="../datenschutz.html">Datenschutz</a> |</li>
        <li><a href="../kontakt.html">Kontakt</a></li>
    </ul>`;
}

const sub = document.getElementById('sub');
const toggleSub = document.getElementById('toggleSub');
toggleSub.innerHTML = '▼';
const toggleMain = document.getElementById('toggleMain');
toggleMain.innerHTML = '≡';
const mainMenu = document.getElementById('navbar');
let mainOpened = false;
let subOpened = false;
let subCloser = true;
let subOpener = document.getElementById('subOpener');

function subOpen() {
    if (subCloser) {
        sub.classList.remove('unsichtbar');
        sub.classList.add('sichtbar');
        toggleSub.innerHTML = '▲';
    }
}

function subClose() {
    if (subCloser) {
        sub.classList.add('unsichtbar');
        sub.classList.remove('sichtbar');
        toggleSub.innerHTML = '▼';
    }
}

function openMain() {
    if (!mainOpened) {
        mainMenu.classList.remove('unvisible');
        mainOpened = true;
        toggleMain.innerHTML = '✕';
        subCloser = false;
    } else {
        mainMenu.classList.add('unvisible');
        mainOpened = false;
        toggleMain.innerHTML = '≡';
        subCloser = true;
    }
}

function openSubMobile() {
    if (!subOpened) {
        sub.classList.add('visible');
        sub.classList.remove('unvisible');
        subOpened = true;
        toggleSub.innerHTML = '▲';
        subOpener.classList.add('disabled');
    } else {
        sub.classList.add('unvisible');
        sub.classList.remove('visible');
        subOpened = false;
        toggleSub.innerHTML = '▼';
        subOpener.classList.remove('disabled');
    }
}