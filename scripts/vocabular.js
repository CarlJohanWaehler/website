let german = [];
let english = [];
let savedGerman = localStorage.getItem("savedGerman");
if (savedGerman === null) {
    savedGerman = "";
} else {
    german = JSON.parse(savedGerman);
}
let savedEnglish = localStorage.getItem("savedEnglish");
if (savedEnglish === null) {
    savedEnglish = "";
} else {
    english = JSON.parse(savedEnglish);
}

// English into German
const eng_ger = document.getElementById("eng_ger");
const englishWord = document.getElementById("english_word");
const germanTranslation = document.getElementById("germanTranslation");
const germanCheck = document.getElementById("germanCheck");
let eng_ger_opened = false;
let ger_eng_opened = false;
let random = "";
germanTranslation.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        checkTranslation_ger();
    }
})
function english_german() {
    if (german[0] !== undefined && english[0] !== undefined) {
        if (ger_eng_opened) {
            ger_eng_opened = false;
            ger_eng.classList.add("toggleUnvisible");
        }
        eng_ger.classList.remove("toggleUnvisible");
        eng_ger_opened = true;
        random = Math.floor(Math.random() * german.length);
        englishWord.innerHTML = '<img src="../img/help.svg" class="headlineIcon"> Was ist die deutsche Übersetzung von "' + english[random] + '"?';
    } else {
        alert("Du hast keine Vokabeln eingetragen! Bitte füge Vokabeln hinzu und versuche es danach erneut.");
    }
}

function checkTranslation_ger() {
    if (germanTranslation.value === german[random]) {
        germanCheck.innerHTML = "Richtiges Ergebnis!";
        english_german();
    } else if (germanTranslation.value === "") {
        germanCheck.innerHTML = "Bitte gib die Übersetzung ein! Leere Eingaben zählen nicht ;)"
    } else {
        germanCheck.innerHTML = "Falsch! Bitte versuche es erneut.";
    }
    germanTranslation.value = "";
}

// German into English
const ger_eng = document.getElementById("ger_eng");
const germanWord = document.getElementById("german_word");
const englishTranslation = document.getElementById("englishTranslation");
const englishCheck = document.getElementById("englishCheck");
englishTranslation.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        checkTranslation_eng();
    }
})
function german_english() {
    if (german[0] !== undefined && english[0] !== undefined) {
        if (eng_ger_opened) {
            ger_eng_opened = false;
            eng_ger.classList.add("toggleUnvisible");
        }
        ger_eng.classList.remove("toggleUnvisible");
        ger_eng_opened = true;
        random = Math.floor(Math.random() * german.length);
        germanWord.innerHTML = '<img src="../img/help.svg" class="headlineIcon"> Was ist die englische Übersetzung von "' + german[random] + '"?';
    } else {
        alert("Du hast keine Vokabeln eingetragen! Bitte füge Vokabeln hinzu und versuche es danach erneut.");
    }
}

function checkTranslation_eng() {
    if (englishTranslation.value === english[random]) {
        englishCheck.innerHTML = "Richtiges Ergebnis!";
        german_english();
    } else if (germanTranslation.value === "") {
        englishCheck.innerHTML = "Bitte gib die Übersetzung ein! Leere Eingaben zählen nicht ;)"
    } else {
        englishCheck.innerHTML = "Falsch! Bitte versuche es erneut.";
    }
    englishTranslation.value = "";
}

// Save vocabular
const englishVocabular = document.getElementById("english");
const germanVocabular = document.getElementById("german");
const dictonaryWindow = document.getElementById("dictonary");
const dictonaryOpener = document.getElementById("dictonaryOpener");
const dictonaryOverview = document.getElementById("dictonaryOverview");
const intoGerman = document.getElementById("intoGerman");
let dictonaryOpen = false;
englishVocabular.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        saveVocabulary();
    }
})

germanVocabular.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        saveVocabulary();
    }
})

function openVocabulary() {
    if (!dictonaryOpen) {
        dictonaryWindow.classList.remove("toggleUnvisible");
        dictonaryOpener.classList.add("buttonDisabled");
        dictonaryOverview.classList.add("buttonDisabled");
        intoGerman.classList.add("buttonDisabled");
        dictonaryOpen = true;
    } else {
        dictonaryWindow.classList.add("toggleUnvisible");
        dictonaryOpener.classList.remove("buttonDisabled");
        dictonaryOverview.classList.remove("buttonDisabled");
        intoGerman.classList.remove("buttonDisabled");
        dictonaryOpen = false;
    }
}

function saveVocabulary() {
    if (germanVocabular.value !== "" && englishVocabular.value !== "") {
        german.push(germanVocabular.value);
        localStorage.setItem("savedGerman", JSON.stringify(german));
        savedGerman = localStorage.getItem("savedGerman");
        english.push(englishVocabular.value);
        localStorage.setItem("savedEnglish", JSON.stringify(english));
        savedEnglish = localStorage.getItem("savedEnglish");
        germanVocabular.value = "";
        englishVocabular.value = "";
        alert("Das Vokabelpaar wurde erfolgreich eingespeichert!");
    } else {
        alert("Ungültige Eingabe! Es müssen beide Eingabefelder gefüllt sein!");
    }
}

// Show and delete vocabulary
const vocabList = document.getElementById("vocab-list");
const vocabTable_body = document.getElementById("tableBody");
let vocablistOpen = false;
function showDictonary() {
    if (!vocablistOpen) {
        vocabList.classList.remove("toggleUnvisible");
        dictonaryOpener.classList.add("buttonDisabled");
        dictonaryOverview.classList.add("buttonDisabled");
        intoGerman.classList.add("buttonDisabled");
        vocablistOpen = true;
        for (let i = 0; i < german.length; i++) {
            vocabTable_body.innerHTML += `<tr><td>${english[i]}</td><td>${german[i]}</td><td><img src="../img/delete.svg" title="Vokabelpaar löschen" class="button" onclick="deleteVocab(${i})"></td></tr>`;
        }
    } else {
        vocabList.classList.add("toggleUnvisible");
        dictonaryOpener.classList.remove("buttonDisabled");
        dictonaryOverview.classList.remove("buttonDisabled");
        intoGerman.classList.remove("buttonDisabled");
        vocablistOpen = false;
        vocabTable_body.innerHTML = "";
    }
}

function deleteVocab(index) {
    german.splice(index, 1);
    english.splice(index, 1);
    vocabTable_body.innerHTML = "<tr><td colspan='3'>Wird gelöscht ...</td></tr>";
    setTimeout(function () {
        vocabTable_body.innerHTML = "";
        for (let i = 0; i < german.length; i++) {
            vocabTable_body.innerHTML += `<tr><td>${english[i]}</td><td>${german[i]}</td><td><img src="../img/delete.svg" title="Vokabelpaar löschen" class="button" onclick="deleteVocab(${i})"></td></tr>`;
        }
    }, 400);
    localStorage.setItem("savedGerman", JSON.stringify(german));
    localStorage.setItem("savedEnglish", JSON.stringify(english));
}