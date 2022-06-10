import './style.css';
import more from './images/more.png';

const list = [
  {
    description: 'Wash dishes',
    completed: true,
    index: 1,
  },
  {
    description: 'Complete to do list',
    completed: true,
    index: 4,
  },
];

const listTask = document.querySelector('.list');

window.addEventListener('load', () => {
  list.sort((a, b) => a.index - b.index);

  for (let i = 0; i < list.length; i += 1) {
    listTask.innerHTML += `
         <li class="flex">
             <div class="list_task flex">
                <input type="checkbox" name="task" class="checkbox">
                <span>${list[i].description}</span>
             </div>
             <img src=${more} alt="more icon">
            </li>
            <li class="break_line_list"><hr></li>
         `;
  }
});