const partidas = [
    { avatar: "🐉", nick: "DragonSlayer", puntos: 9999, fecha: "2024-11-01" }, 
    { avatar: "🧙‍♂️", nick: "WizardMaster", puntos: 8500, fecha: "2024-11-03" }, 
    { avatar: "🤖", nick: "RoboWarrior", puntos: 7230, fecha: "2024-11-05" }, 
    { avatar: "👽", nick: "AlienHunter", puntos: 6420, fecha: "2024-11-07" }, 
    { avatar: "🦄", nick: "UnicornSparkle", puntos: 5700, fecha: "2024-11-09" }, 
    { avatar: "👻", nick: "GhostChaser", puntos: 4930, fecha: "2024-11-10" }, 
    { avatar: "🦸‍♀️", nick: "SuperHeroGal", puntos: 4320, fecha: "2024-11-11" }, 
    { avatar: "🐱‍👤", nick: "NinjaKitty", puntos: 3890, fecha: "2024-11-12" }, 
    { avatar: "💀", nick: "SkullCrusher", puntos: 3450, fecha: "2024-11-13" }, 
    { avatar: "🦖", nick: "DinoDestroyer", puntos: 3120, fecha: "2024-11-14" }
];

const nuevaPartida = { avatar: "👽", nick: "Paco", puntos: 2, fecha: "2024-11-12" }

export function partidass() {
    let html = `
        <h1>Partidas</h1>
        <div id="partidas">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Avatar</th>
                        <th scope="col">Nick</th>
                        <th scope="col">Puntos</th>
                        <th scope="col">Fecha</th>
                    </tr>
                </thead>
                <tbody>`
                    for (let i = 0; i < partidas.length; i++) {
                        const partida = partidas[i]; 
                        html += `
                            <tr>
                                <td>${partida.avatar}</td>
                                <td>${partida.nick}</td>
                                <td>${partida.puntos}</td>
                                <td>${partida.fecha}</td>
                            </tr>
                        `
                    }
    html += `
                </tbody>
            </table>
        </div>
    `
    insertaNuevaPartida();

    return html
}


function insertaNuevaPartida(datosEjemploPartida){
    partidas.push(nuevaPartida);
}