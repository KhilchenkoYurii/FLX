const rootNode = document.getElementById('root');
const todoItems = [];
let counter = 0;
let header;
let textNode;
let caption;
let msg;
let inputField;
let addNewTaskButt;
let saveChangeButt;
let canselButt;
let todoList;
let listItem;
let blankIcon;
let checkboxIcon;
let removeIcon;
let blankBtn;
let checkboxButt;
let removeBtn;
let todoItem;
let conteiner;
let wrap;
const ZERO = 0;

function Clear(conteiner) {
    let content = document.getElementsByClassName(conteiner)[ZERO];
    if (content) {
        rootNode.removeChild(content);
    }
}

function hashHandler() {
    let hash = window.location.hash;
    addNewTask();
}

function addListItem(index) {
    checkboxButt = document.createElement('button');
    checkboxButt.className = 'checkbox-item';
    checkboxIcon = document.createElement('img');

    if (!todoItems[index].isDone) {
        checkboxIcon.setAttribute('src', './assets/img/todo-s.png');
        checkboxIcon.setAttribute('alt', 'Blank');
    } else {
        checkboxIcon.setAttribute('src', './assets/img/done-s.png');
        checkboxIcon.setAttribute('alt', 'Checked');
    }

    checkboxButt.appendChild(checkboxIcon);
    removeBtn = document.createElement('button');
    removeBtn.setAttribute('class', 'remove-item');
    removeIcon = document.createElement('img');
    removeIcon.setAttribute('src', './assets/img/remove-s.jpg');
    removeIcon.setAttribute('alt', 'Done');
    removeBtn.appendChild(removeIcon);
    todoItem = document.createElement('p');
    todoItem.innerHTML = todoItems[index].description;
    listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.appendChild(checkboxButt);
    listItem.appendChild(todoItem);
    listItem.appendChild(removeBtn);
    todoList.appendChild(listItem);

    checkboxButt.addEventListener('click', () => {
        checkboxIcon.setAttribute('src', './assets/img/done-s.png');
        checkboxIcon.setAttribute('alt', 'Checked');
        todoItems[index].isDone = true;
        const first = 0;
        todoItems.push(todoItems.splice(index, 1)[first]);
        Clear('wrapper');
        window.history.back();
        createMainPage();
    });

    removeBtn.addEventListener('click', () => {
        todoList.remove(listItem);
        counter--;
        const removed = todoItems.splice(index, 1);

        if (counter <= ZERO) {
            msg.style.display = 'block';
        } else {
            msg.style.display = 'none';
        }
        Clear('wrapper');
        window.history.back();
        createMainPage();
    });

    todoItem.addEventListener('click', () => {
        let hash = window.location.href;
        if (window.location.hash === '') {
            hash += '#/modify/:' + todoItems[index].id;
            window.location.href = hash;
        }
        Clear('wrapper');
        addNewTask('Modify item');
    });
}

function addNewTask(title) {
    wrap = document.createElement('div');
    wrap.setAttribute('class', 'wrapper');
    conteiner = document.createElement('div');
    conteiner.setAttribute('class', 'todo-content');
    header = document.createElement('header');
    caption = document.createElement('h1');
    textNode = document.createTextNode(title);
    caption.appendChild(textNode);
    header.appendChild(caption);
    inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('autofocus', 'true');
    canselButt = document.createElement('input');
    canselButt.setAttribute('type', 'button');
    canselButt.setAttribute('class', 'add-btn');
    canselButt.setAttribute('value', 'Cansel');
    saveChangeButt = document.createElement('input');
    saveChangeButt.setAttribute('type', 'button');
    saveChangeButt.setAttribute('class', 'add-btn');
    saveChangeButt.setAttribute('value', 'Save changes');
    conteiner.appendChild(inputField);
    conteiner.appendChild(saveChangeButt);
    conteiner.appendChild(canselButt);
    wrap.appendChild(header);
    wrap.appendChild(conteiner);
    rootNode.appendChild(wrap);

    saveChangeButt.addEventListener('click', () => {
        let hash = window.location.href;
        const text = inputField.value;

        if (text) {
            if (window.location.hash === '' || window.location.hash === '#/add') {
                let itemID = counter;
                let item = { isDone: false, id: itemID, description: text };
                let i = 0;
                while (i < counter && todoItems[i].isDone !== true) {
                    i++;
                }
                if (i === counter) {
                    todoItems.push(item);
                } else {
                    const toDel = 0;
                    todoItems.splice(i, toDel, item);
                }
                counter++;
            } else {
                let itemID = window.location.hash[window.location.hash.length - 1];
                todoItems[itemID].description = text;
            }
        }

        window.history.back();
        Clear('wrapper');
        createMainPage();
    });

    canselButt.addEventListener('click', () => {
        Clear('wrapper');
        window.history.back();
        createMainPage();
    });
}

function createMainPage() {
    wrap = document.createElement('div');
    wrap.setAttribute('class', 'wrapper');
    header = document.createElement('header');
    header.innerHTML = '<h1>Simple TODO application</h1>';
    conteiner = document.createElement('div');
    conteiner.setAttribute('class', 'todo-content');
    addNewTaskButt = document.createElement('input');
    addNewTaskButt.setAttribute('type', 'button');
    addNewTaskButt.setAttribute('class', 'add-btn');
    addNewTaskButt.setAttribute('value', 'Add new task');
    msg = document.createElement('p');
    msg.setAttribute('class', 'msg');
    msg.innerHTML = 'TODO is empty';
    todoList = document.createElement('ul');
    todoList.setAttribute('class', 'todo-list');
    conteiner.appendChild(addNewTaskButt);
    conteiner.appendChild(msg);
    for (let i = 0; i < todoItems.length; i++) {
        addListItem(i);
    }
    if (todoItems.length === ZERO) {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';
        conteiner.appendChild(todoList);
    }
    wrap.appendChild(header);
    wrap.appendChild(conteiner);
    rootNode.appendChild(wrap);

    addNewTaskButt.addEventListener('click', () => {
        let hash = window.location.href;
        if (window.location.hash === '') {
            hash += '#/add';
            window.location.href = hash;
        }
        Clear('wrapper');
        addNewTask('Add new item');
    });
}

createMainPage();