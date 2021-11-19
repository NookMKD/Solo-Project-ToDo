'use strict';

const task = document.querySelector('.inputField');
const toDoTask = document.querySelector('.taskBox');
const checkbox1 = document.getElementById('checkbox-1');
const label1 = document.getElementById('label-1');
const input1 = document.getElementById('input-1');

const checkbox2 = document.getElementById('checkbox-2');
const label2 = document.getElementById('label-2');
const input2 = document.getElementById('input-2');

const checkbox3 = document.getElementById('checkbox-3');
const label3 = document.getElementById('label-3');
const input3 = document.getElementById('input-3');

let counterDisplayElem = document.querySelector('.counter-display');
var br = document.createElement('br');
///////////////////////////////////////////////////
function editLabel(label, input) {
  label.classList.add('hidden');
  input.classList.remove('hidden');
}

function finishEdit(label, input) {
  label.innerHTML = input.value;
  label.classList.remove('hidden');
  input.classList.add('hidden');
}

label1.addEventListener('click', function () {
  checkbox1.value = !checkbox1.value;
  editLabel(label1, input1);
});
label2.addEventListener('click', function () {
  checkbox2.value = !checkbox2.value;
  editLabel(label2, input2);
});
label3.addEventListener('click', function () {
  checkbox3.value = !checkbox3.value;
  editLabel(label3, input3);
});

input1.addEventListener('keydown', function (button) {
  if (button.key === 'Enter') {
    label1.innerHTML = input1.value;
    finishEdit(label1, input1);
  }
});
input2.addEventListener('keydown', function (button) {
  if (button.key === 'Enter') {
    label2.innerHTML = input2.value;
    finishEdit(label2, input2);
  }
});
input3.addEventListener('keydown', function (button) {
  if (button.key === 'Enter') {
    label3.innerHTML = input3.value;
    finishEdit(label3, input3);
  }
});
