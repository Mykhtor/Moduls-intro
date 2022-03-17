import { search } from "./logic.js";

const input:  HTMLInputElement = document.querySelector('#search')!
const submit: HTMLElement      = document.querySelector('#submit')!
const list:   HTMLElement      = document.querySelector('#list')!

submit.onclick = () => {
    let name   =  input.value
    let pupils =  search(name)

    list.innerText = ''

    for (const pupil of pupils) {
        let li       = document.createElement('li')
        li.className = 'list-group-item'
        li.innerText = `${pupil.name} | ${pupil.age}`
        list.appendChild(li)
    }

    
}