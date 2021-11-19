'use strict';
// const task = document.querySelector('.')
const task = document.querySelector('.inputField');
const toDoTask = document.querySelector('.taskBox');
let counterDisplayElem = document.querySelector('.counter-display');

function increaseCounter() {
  counter++;
  counterDisplayElem.innerHTML = counter;
}

const taskArr = [];
let counter = 0;

function addTask() {
  // toDoTask.value = task.value;
  taskArr.push(document.querySelector('.inputField').value);
  console.log(taskArr);
  // for (let i = 0; i < taskArr.length; i++) {

  // document.querySelector('.taskBox').innerHTML = taskArr[i];

  var board = document.createElement('div');

  board.className = 'taskBox';

  board.style.cssText =
    'text-align: left; padding-left: 5px; border-style: solid; display: flex; flex-direction: column; border: solid; width: 170px; height: 19px';

  board.innerHTML = document.querySelector('.inputField').value;
  document.getElementById('board').appendChild(board);
  // board.setAttribute('style', 'bottom-right: #CCCCCC 1px solid');

  increaseCounter();
}

// var counterDiv = document.createElement('div');
// counterDiv.className = 'taskBox';
// counterDiv.innerHTML = counter;
document.addEventListener('keydown', function (button) {
  if (button.key === 'Enter') {
    addTask();
  }
});

//Create nov file so poceten checkbox so label
//click event for checkbox
//add multiple checkbox to original html with difrent label
//fucniton for checking box, all checkboxes call same function.
//function = witch checkbox is checkd and with what value true/false

//bbuton click to add checkbox with difrent label
//ime na labela = ime-[i]
//function = witch checkbox is checkd and with what value true/false
