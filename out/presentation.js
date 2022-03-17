import { search } from "./logic.js";
const input = document.querySelector('#search');
const submit = document.querySelector('#submit');
const list = document.querySelector('#list');
submit.onclick = () => {
    let name = input.value;
    let pupils = search(name);
    list.innerText = '';
    for (const pupil of pupils) {
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerText = `${pupil.name} | ${pupil.age}`;
        list.appendChild(li);
    }
};
