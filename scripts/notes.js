let newNote = document.getElementById('newNote');
let notes = document.getElementById('notes');
let save = document.getElementById('save');
let editActive = false;
let fieldOpener = document.getElementById('fieldOpener');
let deleteAllButton = document.getElementById('deleteAll');
let message = document.getElementById('message');
let cancel = document.getElementById('cancel');

notes.innerHTML = localStorage.getItem('notelist');
let counter = localStorage.getItem('count');

if (notes.innerHTML === '') {
    deleteAllButton.classList.add('toggleUnvisible');
    counter = 0;
};

function noteField() {
    if (newNote.classList.contains('toggleUnvisible')) {
        deleteAllButton.classList.add('toggleUnvisible');
        newNote.classList.remove('toggleUnvisible');
        fieldOpener.classList.add('toggleUnvisible');
        save.classList.remove('toggleUnvisible');
        cancel.classList.remove('toggleUnvisible');
        notes.style.pointerEvents = 'none';
        cancel.addEventListener('click', function () {
            newNote.value = '';
            save.classList.add('toggleUnvisible');
            fieldOpener.classList.remove('toggleUnvisible');
            deleteAllButton.classList.remove('toggleUnvisible');
            newNote.classList.add('toggleUnvisible');
            notes.style.pointerEvents = 'all';
            cancel.classList.add('toggleUnvisible');
            if (notes.innerHTML === '') {
                deleteAllButton.classList.add('toggleUnvisible');
            };
        })
    }
}

function addNote() {
    if (newNote.value !== '') {
        counter++;
        deleteAllButton.classList.remove('toggleUnvisible');
        let miliseconds = new Date();
        let minutes = miliseconds / 1000 / 60;
        let hours = minutes / 60;
        let hoursLeft = Math.floor(hours % 24 + 1);
        let minutesLeft = Math.floor(minutes % 60);
        if (minutesLeft < 10) {
            minutesLeft = '0' + minutesLeft;
        };
        if (hoursLeft < 10) {
            hoursLeft = '0' + hoursLeft;
        }
        let timeLeft = hoursLeft + ':' + minutesLeft;
        let month = miliseconds.getUTCMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        };
        let day = miliseconds.getUTCDate();
        if (day < 10) {
            day = '0' + day;
        };
        let year = miliseconds.getUTCFullYear();
        let today = day + '.' + month + '.' + year;
        let content = newNote.value;
        content = content.replace(/\n\r?/g, '<br/>');
        notes.innerHTML += `<div id='entry${counter}' class='notesEntry'><span id='time'>${today} ${timeLeft}</span><span id='note${counter}'>${content}</span><img src="../img/edit_note.svg" alt="" class="button" id="edit${counter}" title="Notiz bearbeiten" onclick="editNote(${counter})">
        <img src="../img/delete.svg" alt="" class="button" id="delete${counter}" onclick="deleteNote(${counter})" title="Notiz löschen"><br><p id='changeMessage${counter}' class='changes'></p>
        </div>`
        newNote.value = '';
        newNote.classList.add('toggleUnvisible');
        fieldOpener.classList.remove('toggleUnvisible');
        save.classList.add('toggleUnvisible');
        cancel.classList.add('toggleUnvisible');
        notes.style.pointerEvents = 'all';
        localStorage.setItem('notelist', notes.innerHTML);
        localStorage.setItem('count', counter);
    } else {
        alert('Bitte füge Text in das Eingabefeld! Du kannst keine Notizen ohne Inhalt anlegen!');
    }
}

function deleteNote(number) {
    let note = document.getElementById('entry' + number);
    let acceptionDeleteNote = confirm('Willst du die Notiz wirklich löschen? Dies kann nicht rückgängig gemacht werden.');
    if (acceptionDeleteNote) {
        note.remove();
        fieldOpener.classList.remove('toggleUnvisible');
        deleteAllButton.classList.remove('toggleUnvisible');
    }
    if (notes.innerHTML === '') {
        localStorage.removeItem('count');
        localStorage.removeItem('notelist');
        counter = 0;
        deleteAllButton.classList.add('toggleUnvisible');
    } else {
        localStorage.setItem('notelist', notes.innerHTML);
    }
}

function editNote(number) {
    if (!editActive) {
        editActive = true;
        let note = document.getElementById('note' + number);
        fieldOpener.classList.add('toggleUnvisible');
        let editButton = document.getElementById('edit' + number);
        editButton.classList.add('toggleUnvisible');
        deleteAllButton.classList.add('toggleUnvisible');
        let content = note.innerText;
        note.innerHTML = `<textarea class='editFields' id='editNode${number}' name='' placeholder='Notiz hier einfügen ...'>${content}</textarea><img src="../img/check.svg" alt="" class="button" title="Änderungen abspeichern" onclick="editFinish(${number})"><img src="../img/close.svg" alt="" class="button" id="cancelEdit" title="Abbrechen">`
        let cancelEdit = document.getElementById('cancelEdit');
        cancelEdit.addEventListener('click', function () {
            content = content.replace(/\n\r?/g, '<br/>');
            note.innerHTML = content;
            editButton.classList.remove('toggleUnvisible');
            deleteAllButton.classList.remove('toggleUnvisible');
            fieldOpener.classList.remove('toggleUnvisible');
            editActive = false;
            cancelEdit.remove();
        });
    }
}

function editFinish(number) {
    editActive = false;
    let cancelEdit = document.getElementById('cancelEdit');
    cancelEdit.remove();
    fieldOpener.classList.remove('toggleUnvisible');
    let editField = document.getElementById('editNode' + number);
    let note = document.getElementById('note' + number);
    let content = editField.value;
    content = content.replace(/\n\r?/g, '<br/>');
    note.innerHTML = content;
    let editButton = document.getElementById('edit' + number);
    editButton.classList.remove('toggleUnvisible');
    deleteAllButton.classList.remove('toggleUnvisible');
    let changeMessage = document.getElementById('changeMessage' + number);
    let miliseconds = new Date();
    let minutes = miliseconds / 1000 / 60;
    let hours = minutes / 60;
    let hoursLeft = Math.floor(hours % 24 + 1);
    let minutesLeft = Math.floor(minutes % 60);
    if (minutesLeft < 10) {
        minutesLeft = '0' + minutesLeft;
    };
    if (hoursLeft < 10) {
        hoursLeft = '0' + hoursLeft;
    }
    let timeLeft = hoursLeft + ':' + minutesLeft;
    let month = miliseconds.getUTCMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    };
    let day = miliseconds.getUTCDate();
    if (day < 10) {
        day = '0' + day;
    };
    let year = miliseconds.getUTCFullYear();
    let today = day + '.' + month + '.' + year;
    changeMessage.innerHTML = 'Notiz zuletzt geändert am ' + today + ' um ' + timeLeft + '.';
    localStorage.setItem('notelist', notes.innerHTML);
}

function deleteAll() {
    let acceptDeleteAll = confirm('Bist du sicher, dass du alle Notizen löschen willst? Du kannst die Aktion nicht rückgängig machen!');
    if (acceptDeleteAll) {
        deleteAllButton.classList.add('toggleUnvisible');
        counter = 0;
        notes.innerHTML = '';
        localStorage.removeItem('notelist');
        localStorage.removeItem('count');
    }
}