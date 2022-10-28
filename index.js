console.log('funguju!');

import { Task } from './Task/index.js';

const renderTasks = () => {
  fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
    .then((response) => response.json())
    .then(
      (data) =>
        (document.querySelector('.todo__tasks').innerHTML = data
          .map((item) => Task(item))
          .join('')),
    );
};

const renderUndoneTasks = () => {
  fetch(
    'https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false',
  )
    .then((response) => response.json())
    .then(
      (data) =>
        (document.querySelector('.todo__tasks').innerHTML = data
          .map((item) => Task(item))
          .join('')),
    );
};
let selected = false;


document.querySelector('#checkbox-undone').addEventListener('click', () => {
  selected = !selected;
  console.log(selected);
  if (selected === true) {
    renderUndoneTasks();
  } else {
    renderTasks;
  }
});

renderTasks();
