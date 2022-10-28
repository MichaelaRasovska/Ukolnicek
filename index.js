console.log('funguju!');

import { Task } from './Task/index.js';

fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
  .then((response) => response.json())
  .then(
    (data) =>
      (document.querySelector('.todo__tasks').innerHTML = data
        .map((item) => Task(item))
        .join('')),
  );

let selected = false;

document
  .querySelector('#checkbox-undone')
  .addEventListener('click', (event) => {
    event.preventDefault;
    selected = !selected;
    fetch(
      `https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks${
        selected === true ? '?done=false' : ''
      }`,
    )
      .then((response) => response.json())
      .then(
        (data) =>
          (document.querySelector('.todo__tasks').innerHTML = data
            .map((item) => Task(item))
            .join('')),
      );
  });
