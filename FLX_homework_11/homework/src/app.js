let rootN = document.getElementById('root');
const max = 10;
let n = 0;
let header;
let notice;
let formS;
let inputF;
let addButt;
let todoL;
let footer;
let img;

function createElement(tag, inputText, attributes) {
    tag = document.createElement(tag);
    tag.innerHTML = inputText;

    for (let key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            tag.setAttribute(key, attributes[key]);
        }
    }
    return tag;
}
function addListItem(labelText) {
    const checkIcon = createElement('i', 'check_box_outline_blank', { 'class': 'material-icons' });
    const deleteIcon = createElement('i', 'delete', { 'class': 'material-icons' });
    const label = createElement('span', labelText, {});
    const checkboxBtn = createElement('button', '', { 'class': 'checkbox-item' });
    const deleteBtn = createElement('button', '', { 'class': 'remove-item' });
    const listItem = createElement('li', '', { 'class': 'list-item', 'draggable': 'true' });
    checkboxBtn.appendChild(checkIcon);
    checkboxBtn.appendChild(label);
    deleteBtn.appendChild(deleteIcon);
    listItem.appendChild(checkboxBtn);
    listItem.appendChild(deleteBtn);
    todoL.appendChild(listItem);

    checkboxBtn.addEventListener('click', () => {
        checkIcon.textContent = 'check_box';
    });

    deleteBtn.addEventListener('click', () => {
        listItem.remove();
        n--;
        inputF.disabled = false;
        notice.style.display = 'none';
    });

    if (++n >= max) {
        inputF.disabled = true;
        notice.style.display = 'block';
    }
    inputF.value = '';
    addButt.disabled = true;

    let dragAndDrop = null;

    listItem.addEventListener('dragstart', e => {
        dragAndDrop = e.target;
        dragAndDrop.style.cursor = 'pointer';
        e.dataTransfer.setData('text', dragAndDrop.className);
        e.dataTransfer.dropEffect = 'move';
        e.dataTransfer.effectAllowed = 'move';
    });

    todoL.addEventListener('dragover', e => {
        if (e.target.className === 'list-item') {
            e.preventDefault();
            e.target.style.transform = 'translate(10px)';
        }
    });

    todoL.addEventListener('dragleave', e => {
        e.preventDefault();
        e.target.style.transform = '';
    });

    todoL.addEventListener('drop', e => {
        const className = e.dataTransfer.getData('text');
        if (e.target.className === 'list-item') {
            e.preventDefault();
            e.target.style.transform = '';
            const coords = e.target.getBoundingClientRect();
            const halfHeight = 0.5;
            const elemCenterY = coords.top + halfHeight * e.target.offsetHeight;
            const clickY = e.clientY;
            if (clickY > elemCenterY) {
                todoL.insertBefore(dragAndDrop, e.target.nextSibling);
            } else {
                todoL.insertBefore(dragAndDrop, e.target);
            }
        }
    });
}
header = createElement('header', '<h1>TODO Cat List</h1>', { 'class': 'todo-header' });
notice = createElement('p', 'Maximum item per list are created', { 'class': 'max-msg' });
header.appendChild(notice);
formS = createElement('div', '', { 'class': 'todo-add' });
inputF = createElement('input', '',
    {
        'class': 'add-input',
        'type': 'text',
        'name': 'inputField',
        'placeholder': 'Add New Action',
        'autofocus': 'true'
    });
addButt = createElement('button', '<i class="material-icons">add_box</i>',
    {
        'class': 'add-btn',
        'disabled': 'true'
    });
todoL = createElement('ul', '', { 'class': 'todo-list' });
footer = createElement('footer', '', { 'class': 'todo-footer' });
img = createElement('img', '', { 'class': 'todo-img', 'src': 'assets/img/cat.png', 'alt': 'Todo-cat' });

footer.appendChild(img);
formS.appendChild(inputF);
formS.appendChild(addButt);
rootN.appendChild(header);
rootN.appendChild(formS);
rootN.appendChild(todoL);
rootN.appendChild(footer);

inputF.addEventListener('change', event => {
    const text = inputF.value;
    addButt.disabled = !text;
    if (event.code === 'Enter' && text) {
        addListItem(text.trim());
    }
});

inputF.addEventListener('keyup', event => {
    const text = inputF.value;
    addButt.disabled = !text;
    if (event.code === 'Enter' && text) {
        addListItem(text.trim());
    }
});

addButt.addEventListener('click', () => {
    addListItem(inputF.value.trim());
});