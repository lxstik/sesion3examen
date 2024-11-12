import {menu} from "./menu.js";

export function header(){
    return `
        ${menu()}
    `
}

document.querySelector('#header').innerHTML = header();