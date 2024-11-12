import {logo} from "./logo.js";

export function menu() {
    return `
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    ${logo()}
                </a>
                <button id="aboutbtn" type="button" class="btn btn-primary">About</button>
                <button id="homebtn" type="button" class="btn btn-primary">Home</button>
                <button id="partidasbtn" type="button" class="btn btn-primary">Partidas</button>
            </div>
        </nav>
    `;
}
