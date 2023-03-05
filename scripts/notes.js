let newNote = document.getElementById('newNote');
let notes = document.getElementById('notes');
let save = document.getElementById('save');
let editActive = false;
let fieldOpener = document.getElementById('fieldOpener');
let deleteAllButton = document.getElementById('deleteAll');
let message = document.getElementById('message');
let cancel = document.getElementById('cancel');
let actualEntry = '';
const palette = document.getElementById('palette');

notes.innerHTML = localStorage.getItem('notelist');
let counter = localStorage.getItem('count');
let selectionStart = '';
let selectionEnd = '';

if (notes.innerHTML === '') {
    deleteAllButton.classList.add('toggleUnvisible');
    counter = 0;
};

newNote.addEventListener('select', function () {
    selectionStart = newNote.selectionStart;
    selectionEnd = newNote.selectionEnd;
    if(selectionStart === selectionEnd) {
        selectionStart = '';
    }
});

function noteField() {
    if (newNote.classList.contains('toggleUnvisible')) {
        deleteAllButton.classList.add('toggleUnvisible');
        newNote.classList.remove('toggleUnvisible');
        fieldOpener.classList.add('toggleUnvisible');
        save.classList.remove('toggleUnvisible');
        cancel.classList.remove('toggleUnvisible');
        notes.style.pointerEvents = 'none';
        palette.classList.remove('toggleUnvisible');
        cancel.addEventListener('click', function () {
            newNote.value = '';
            save.classList.add('toggleUnvisible');
            fieldOpener.classList.remove('toggleUnvisible');
            deleteAllButton.classList.remove('toggleUnvisible');
            newNote.classList.add('toggleUnvisible');
            notes.style.pointerEvents = 'all';
            cancel.classList.add('toggleUnvisible');
            palette.classList.add('toggleUnvisible');
            if (notes.innerHTML === '') {
                deleteAllButton.classList.add('toggleUnvisible');
            };
        })
    }
}

function specialStyle(element) {
    let field = '';
    if (editActive) {
        field = document.getElementById('editNode' + actualEntry);
    } else {
        field = newNote;
    }
    if (selectionStart !== '') {
        let textBefore = field.value.substring(0, selectionStart);
        let selected = field.value.substring(selectionStart, selectionEnd);
        let textAfter = field.value.substring(selectionEnd);
        field.value = field.value.slice(selectionStart, 0) + textBefore + '<' + element + '>' + selected + '</' + element + '>' + textAfter;
        selectionStart = '';
        selectionEnd = '';
    } else {
        field.value += '<' + element + '></' + element + '>';
        let index = '';

        if (element === 'h1' || element === 'h2' || element === 'h3') {
            index = field.value.length - 5;
        } else if (element === 'sub' || element === 'sup') {
            index = field.value.length - 6;
        } else {
            index = field.value.length - 4;
        }
        field.focus();
        field.setSelectionRange(index, index);
        selectionStart = '';
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
        content = content.replace(/\n\r?/g, '<br>');
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
        selectionStart = '';
        selectionEnd = '';
        palette.classList.add('toggleUnvisible');
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
        palette.classList.add('toggleUnvisible');
        actualEntry = '';
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
        actualEntry = number;
        palette.classList.remove('toggleUnvisible');
        let note = document.getElementById('note' + number);
        fieldOpener.classList.add('toggleUnvisible');
        let editButton = document.getElementById('edit' + number);
        editButton.classList.add('toggleUnvisible');
        deleteAllButton.classList.add('toggleUnvisible');
        let content = note.innerHTML;
        for (let i = 0; i < content.length; i++) {
            content = content.replace('<br>', '\n');
        }
        note.innerHTML = `<textarea class='editFields' id='editNode${number}' name='' placeholder='Notiz hier einfügen ...'>${content}</textarea><img src="../img/check.svg" alt="" class="button" title="Änderungen abspeichern" onclick="editFinish(${number})"><img src="../img/close.svg" alt="" class="button" id="cancelEdit" title="Abbrechen">`
        let cancelEdit = document.getElementById('cancelEdit');
        const editNode = document.getElementById('editNode' + number);
        editNode.addEventListener('select', function () {
            selectionStart = editNode.selectionStart;
            selectionEnd = editNode.selectionEnd;
            if(selectionStart === selectionEnd) {
                selectionStart = '';
            }
        });
        cancelEdit.addEventListener('click', function () {
            content = content.replace(/\n\r?/g, '<br/>');
            note.innerHTML = content;
            editButton.classList.remove('toggleUnvisible');
            deleteAllButton.classList.remove('toggleUnvisible');
            fieldOpener.classList.remove('toggleUnvisible');
            palette.classList.add('toggleUnvisible');
            editActive = false;
            cancelEdit.remove();
            actualEntry = '';
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
    actualEntry = '';
    palette.classList.add('toggleUnvisible');
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