const input = document.getElementById('input');
const todolist = document.getElementById('todolist');
todolist.innerHTML = localStorage.getItem('todos');
let todoNumber = localStorage.getItem('todoCounter');
const body = document.querySelector('body');
const deleteAllButton = document.getElementById('deleteAll');
if(todolist.innerHTML === '') {
    todoNumber = 0;
    deleteAllButton.classList.add('toggleUnvisible');
}

input.addEventListener("keyup", enterClick);
function enterClick(e) {
    if (e.keyCode == 13) {
        addTodo();
    };
}

function addTodo() {
    if (input.value !== '') {
        deleteAllButton.classList.remove('toggleUnvisible');
        todoNumber++;
        todolist.innerHTML += `<p class='todoEntries' id='todo${todoNumber}'><img src='../img/delete.svg' class='button' title='Aufgabe löschen' onclick='removeTodo(${todoNumber})'>${input.value}</p>`;
        input.value = '';
        localStorage.setItem('todoCounter', todoNumber);
        localStorage.setItem('todos', todolist.innerHTML);
    } else {
        alert('Du kannst keine leeren Aufgaben hinzufügen! Bitte füge Text in das Eingabefeld!');
    };

}

function removeTodo(number) {
    let acceptDelete1 = confirm('Möchtest du diese Aufgabe wirklich löschen? Die Aktion kann nicht rückgängig gemacht werden!');
    if (acceptDelete1) {
        todo = document.getElementById('todo' + number);
        todo.remove();
        if (todolist.innerHTML === '') {
            removeAll();
        } else {
            localStorage.setItem('todos', todolist.innerHTML);
        };
    };
}

function removeAll() {
    acceptDeleteAll = confirm('Möchtest du wirklich alle Aufgaben löschen? Die Aktion kann nicht rückgängig gemacht werden!');
    if (acceptDeleteAll) {
        todolist.innerHTML = '';
        todoNumber = 0;
        input.value = '';
        localStorage.removeItem('todos');
        localStorage.removeItem('todoCounter')
        deleteAllButton.classList.add('toggleUnvisible');
    };
};