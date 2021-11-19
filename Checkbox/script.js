'use strict';

const task = document.querySelector('.inputField');
const toDoTask = document.querySelector('.taskBox');
let counterDisplayElem = document.querySelector('.counter-display');
const board = document.getElementById('board');
var br = document.createElement('br');

function editLabel(label, input) {
  label.classList.add('hidden');
  input.classList.remove('hidden');
}

function finishEdit(label, input) {
  label.innerHTML = input.value;
  label.classList.remove('hidden');
  input.classList.add('hidden');
}

function deleteLabel(label, input, checkbox, btn, index) {
  board.removeChild(label);
  board.removeChild(input);
  board.removeChild(checkbox);
  board.removeChild(btn);
  taskArr.splice(index, 1);
  console.log(taskArr);
}

function increaseCounter() {
  counter++;
  counterDisplayElem.innerHTML = counter;
}
function decreaseCounter() {
  counter--;
  counterDisplayElem.innerHTML = counter;
}

const taskArr = [];
let counter = 0;
function checkd(x) {
  if (x) {
    alert('checked');
  } else {
    alert('unchecked!');
  }
}

for (let i = 0; i < taskArr.length; i++) {
  document.getElementById;
}

function addCheckbox() {
  taskArr.push(document.querySelector('.inputField').value);

  var index = taskArr.length - 1;

  //Create the checkbox
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `checkbox-${Number(taskArr.length - 1)}`;
  checkbox.checked = false;
  checkbox.addEventListener('click', function () {
    //checkd(checkbox.checked);
  });
  //Create labael for ^ checkbox
  var label = document.createElement('label');
  label.for = `checkbox-${Number(taskArr.length - 1)}`;
  label.id = `label-${Number(taskArr.length - 1)}`;
  label.appendChild(
    document.createTextNode(document.querySelector('.inputField').value)
  );
  //Create input field to change value of label
  var input = document.createElement('input');
  input.type = 'text';
  input.classList = 'hidden';
  input.id = `input-${Number(taskArr.length - 1)}`;

  label.addEventListener('click', function () {
    editLabel(
      document.getElementById(`label-${Number(taskArr.length - 1)}`),
      document.getElementById(`input-${Number(taskArr.length - 1)}`)
    );
  });

  input.addEventListener('keydown', function (button) {
    if (button.key === 'Escape') {
      finishEdit(
        document.getElementById(`label-${Number(taskArr.length - 1)}`),
        document.getElementById(`input-${Number(taskArr.length - 1)}`)
      );
    }
  });

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.id = `btn-${Number(taskArr.length - 1)}`;
  btn.innerHTML = 'X';
  btn.className = 'btn-styled';
  var calculatedIdLabel = `label-${Number(taskArr.length - 1)}`;
  var calculatedIdInput = `input-${Number(taskArr.length - 1)}`;
  var calculatedIdCheckbox = `checkbox-${Number(taskArr.length - 1)}`;
  var calculatedIdBtn = `btn-${Number(taskArr.length - 1)}`;
  var calculatedIdindex = taskArr.length - 1;
  btn.addEventListener('click', function () {
    deleteLabel(
      document.getElementById(calculatedIdLabel),
      document.getElementById(calculatedIdInput),
      document.getElementById(calculatedIdCheckbox),
      document.getElementById(calculatedIdBtn),
      calculatedIdindex
    );
    decreaseCounter();
  });

  board.appendChild(br);
  board.appendChild(checkbox);
  board.appendChild(label);
  board.appendChild(btn);
  board.appendChild(input);

  // checkbox.innerHTML = document.querySelector('.inputField').value;

  increaseCounter();
}

document.addEventListener('keydown', function (button) {
  if (button.key === 'Enter') {
    board.appendChild(br);
    addCheckbox();
  }
});
