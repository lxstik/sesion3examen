import {header} from "./componentes/header.js";
import {home} from "./vistas/home.js";
import {about} from "./vistas/about.js";
import {partidass} from "./vistas/partidas.js";

const pag = "home";

header();

function nav(pag) {
    if (pag == "home") {
        document.querySelector('#vistas').innerHTML = home();
    } else if (pag == "about") {
        document.querySelector('#vistas').innerHTML = about();
    } else if (pag == "partidas") {
        document.querySelector('#vistas').innerHTML = partidass();
    }
}

document.querySelector('#homebtn').addEventListener('click', function () {
    nav("home");
});

document.querySelector('#aboutbtn').addEventListener('click', function () {
    nav("about");
});

document.querySelector('#partidasbtn').addEventListener('click', function () {
    nav("partidas");
});

nav('home');


