'use strict';

const task = document.querySelector('.inputField');
const toDoTask = document.querySelector('.taskBox');
let counterDisplayElem = document.querySelector('.counter-display');
const board = document.getElementById('board');

console.log(counterDisplayElem.innerHTML);

function editLabel(label, input) {
  input.classList.remove('hidden');
}

function finishEdit(label, input, taskId) {
  label.innerHTML = input.value;
  input.classList.add('hidden');
  taskArr[taskId] = input.value;
  console.log(taskArr);
}

function deleteLabel(div, index) {
  board.removeChild(div);
  taskArr.splice(index, 1);
}

function increaseCounter() {
  counter++;
  counterDisplayElem.innerHTML = counter;
}
function decreaseCounter() {
  counter--;
  counterDisplayElem.innerHTML = counter;

  if (counter == 0) {
    counterDisplayElem.innerHTML = 'No current tasks';
  }
}

const taskArr = [];
let counter = 0;

function checkd(div, x) {
  if (x.checked) {
    $(div).toggleClass('Completed');
    $(div).toggleClass('Active');
  } else {
    $(div).toggleClass('Completed');
    $(div).toggleClass('Active');
  }
}

function addCheckbox() {
  var index = taskArr.length;
  taskArr.push(document.querySelector('.inputField').value);

  // taskArr.push([index, document.querySelector('.inputField').value]);

  //Create Div for tasks
  var checkboxDiv = document.createElement('div');
  checkboxDiv.id = `checkboxDiv-${Number(taskArr.length - 1)}`;
  checkboxDiv.classList.add('Active', 'taskDiv');

  //Create the checkbox
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `checkbox-${Number(taskArr.length - 1)}`;
  checkbox.checked = false;
  checkbox.classList.add('checkboxStyle');
  checkbox.addEventListener('click', function () {
    checkd(checkboxDiv, checkbox);
  });

  //Create labael for ^ checkbox
  var label = document.createElement('label');
  label.for = `checkbox-${Number(taskArr.length - 1)}`;
  label.id = `label-${Number(taskArr.length - 1)}`;
  label.classList.add('LabelStyle');
  label.appendChild(
    document.createTextNode(document.querySelector('.inputField').value)
  );

  //Create input field to change value of label
  var input = document.createElement('input');
  input.type = 'text';
  input.value = label.innerHTML;
  input.classList.add('hidden', 'inputStyle');
  input.id = `input-${Number(taskArr.length - 1)}`;

  label.addEventListener('dblclick', function () {
    editLabel(
      document.getElementById(calculatedIdLabel),
      document.getElementById(calculatedIdInput)
    );
  });

  input.addEventListener('keydown', function (button) {
    if (button.key === 'Enter') {
      finishEdit(
        document.getElementById(calculatedIdLabel),
        document.getElementById(calculatedIdInput),
        calculatedIdindex
      );
    }
  });

  // Create button element and listener for delete function
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.id = `btn-${Number(taskArr.length - 1)}`;
  btn.innerHTML = 'X';
  btn.classList.add('btnStyle');
  // btn.className = 'btn-styled';

  btn.addEventListener('click', function () {
    deleteLabel(
      document.getElementById(calculatedIdcheckboxDiv),
      calculatedIdindex
    );
    decreaseCounter();
  });

  //Create calculatedID for all fucntions
  var calculatedIdindex = taskArr.length - 1;
  var calculatedIdcheckboxDiv = `checkboxDiv-${calculatedIdindex}`;
  var calculatedIdLabel = `label-${calculatedIdindex}`;
  var calculatedIdInput = `input-${calculatedIdindex}`;

  board.appendChild(checkboxDiv);
  checkboxDiv.appendChild(checkbox);
  checkboxDiv.appendChild(label);
  checkboxDiv.appendChild(btn);
  checkboxDiv.appendChild(input);

  increaseCounter();
}

document
  .getElementById('MainInput')
  .addEventListener('keydown', function (button) {
    if (button.key === 'Enter') {
      addCheckbox();
    }
  });

document
  .getElementById('ActiveTasksBtn')
  .addEventListener('click', function () {
    var y = board.getElementsByClassName('Completed');
    var x = board.getElementsByClassName('Active');
    $(y).addClass('hidden');
    $(x).removeClass('hidden');
  });

document
  .getElementById('CompletedTasksBtn')
  .addEventListener('click', function () {
    var y = board.getElementsByClassName('Completed');
    var x = board.getElementsByClassName('Active');
    $(x).addClass('hidden');
    $(y).removeClass('hidden');
  });

document.getElementById('AllTasksBtn').addEventListener('click', function () {
  var y = board.getElementsByClassName('Completed');
  var x = board.getElementsByClassName('Active');
  $(x).removeClass('hidden');
  $(y).removeClass('hidden');
});

//Dodadeno da se editira so Enter namesto ESC
//Elementite se creiraat vo novi divovi namesto sekoj element posebno
//Sredeno da raboti povtorno edit label i remove element
