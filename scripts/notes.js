const newNote = document.getElementById('newNote');
const notes = document.getElementById('notes');
const save = document.getElementById('save');
let editActive = false;
const fieldOpener = document.getElementById('fieldOpener');
const deleteAllButton = document.getElementById('deleteAll');
const message = document.getElementById('message');
const cancel = document.getElementById('cancel');
let actualEntry = '';
const styleElements = document.getElementById('styleElements');
const color = document.getElementById('color');
const unordered = document.getElementById('unordered');
const ordered = document.getElementById('ordered');
const listItem = document.getElementById('li');
const closeList = document.getElementById('closeList');
const fontSizeSelection = document.getElementById('fontSize');

notes.innerHTML = localStorage.getItem('notelist');
let counter = localStorage.getItem('count');
let selectionStart = '';
let selectionEnd = '';
let now = '';
if (notes.innerHTML === '') {
    deleteAllButton.classList.add('toggleUnvisible');
    counter = 0;
};

newNote.addEventListener('select', function () {
    selectionStart = newNote.selectionStart;
    selectionEnd = newNote.selectionEnd;
    if (selectionStart === selectionEnd) {
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
        styleElements.classList.remove('toggleUnvisible');
        cancel.addEventListener('click', function () {
            newNote.value = '';
            save.classList.add('toggleUnvisible');
            fieldOpener.classList.remove('toggleUnvisible');
            deleteAllButton.classList.remove('toggleUnvisible');
            newNote.classList.add('toggleUnvisible');
            notes.style.pointerEvents = 'all';
            cancel.classList.add('toggleUnvisible');
            styleElements.classList.add('toggleUnvisible');
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
        selectionStart = field.selectionStart;
        let textBefore = field.value.substring(0, selectionStart);
        let textAfter = field.value.substring(selectionStart);
        let index = '';
        if (element === 'ul' || element === 'ol') {
            field.value = textBefore + '<' + element + '>\n \n</' + element + '>' + textAfter;
            if (element.length === 2) {
                index = field.value.length - textAfter.length - 6;
            } else if (element.length === 3) {
                index = field.value.length - textAfter.length - 7;
            } else {
                index = field.value.length - textAfter.length - 8;
            }
            listItem.classList.remove('toggleUnvisible');
            closeList.classList.remove('toggleUnvisible');
        } else {
            field.value = textBefore + '<' + element + '></' + element + '>' + textAfter;
            if (element.length === 2) {
                index = field.value.length - textAfter.length - 5;
            } else if (element.length === 3) {
                index = field.value.length - textAfter.length - 6;
            } else {
                index = field.value.length - textAfter.length - 4;
            }
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
        submitTime();
        let content = newNote.value;
        content = content.replace(/\n\r?/g, '<br>');
        notes.innerHTML += `<div id='entry${counter}' class='notesEntry'><span id='time'>${now}</span><span id='note${counter}'>${content}</span><img src="../img/edit_note.svg" alt="" class="button" id="edit${counter}" title="Notiz bearbeiten" onclick="editNote(${counter})">
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
        styleElements.classList.add('toggleUnvisible');
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
        styleElements.classList.add('toggleUnvisible');
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
        styleElements.classList.remove('toggleUnvisible');
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
            if (selectionStart === selectionEnd) {
                selectionStart = '';
            }
        });
        cancelEdit.addEventListener('click', function () {
            content = content.replace(/\n\r?/g, '<br/>');
            note.innerHTML = content;
            editButton.classList.remove('toggleUnvisible');
            deleteAllButton.classList.remove('toggleUnvisible');
            fieldOpener.classList.remove('toggleUnvisible');
            styleElements.classList.add('toggleUnvisible');
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
    submitTime();
    changeMessage.innerHTML = 'Notiz zuletzt geändert: ' + now;
    localStorage.setItem('notelist', notes.innerHTML);
    actualEntry = '';
    styleElements.classList.add('toggleUnvisible');
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

function endList() {
    listItem.classList.add('toggleUnvisible');
    closeList.classList.add('toggleUnvisible');
}

function changeColor() {
    fontChange('<span style="color:' + color.value + '">');
}

function changeFontSize() {
    let size = fontSizeSelection.value;
    if (size === 'user') {
        size = prompt('Gib die gewünschte Schriftgröße ein:');
    }
    fontChange('<span style="font-size:' + size + 'pt">');
}

function fontChange(element) {
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
        field.value = field.value.slice(selectionStart, 0) + textBefore + element + selected + '</span>' + textAfter;
        selectionStart = '';
        selectionEnd = '';
    } else {
        selectionStart = field.selectionStart;
        let textBefore = field.value.substring(0, selectionStart);
        let textAfter = field.value.substring(selectionStart);
        field.value = textBefore + element + '</span>' + textAfter;
        let index = field.value.length - textAfter.length - 7;
        field.focus();
        field.setSelectionRange(index, index);
        selectionStart = '';

    }
}

function submitTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    let time = hours + ':' + minutes;
    let day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let year = date.getFullYear();
    let fullDate = day + '.' + month + '.' + year;
    now = fullDate + ' ' + time;
}