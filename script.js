
// Botones

const botonJugarsolo = document.getElementById('boton-jugarsolo');
const boton2Jugadores = document.getElementById('boton-2jugadores');
const botonWinOrLost = document.getElementById('boton-winOrLost');
const botonSiguiente = document.getElementById('boton-siguiente');
const botonGanador = document.getElementById('boton-ganador');

// Divs

const jugandoSolo = document.querySelector('.jugando-solo');
const twoJugadores = document.querySelector('.two-jugadores');
const parte22jugadores = document.querySelector('.parte2-2jugadores');
const botones = document.querySelector('.botones');

// Párrafos - Resultado 

const resultado1 = document.querySelector('.resultado1');
const resultado2 = document.querySelector('.resultado2');
const nombre1 = document.querySelector('.nombre1');
const nombre2 = document.querySelector('.nombre2');
const informacion1 = document.querySelector('.informacion1');
const informacion2 = document.querySelector('.informacion2');
const faltaAlgo = document.querySelector('.falta-algo');
const infoResult = document.querySelector('.info-result');
const resultGanador = document.querySelector('.result-ganador');

// Inputs

const textNombre = document.getElementById('text-nombre');
const opcionElegir = document.getElementById('opcion-elegir');
const jugador1Name = document.getElementById('jugador1-name');
const jugador2Name = document.getElementById('jugador2-name');
const opcionesElegir1 = document.getElementById('opciones-elegir1');
const opcionesElegir2 = document.getElementById('opciones-elegir2');

const enBlanco = " ";


botonJugarsolo.addEventListener('click', () => {
    jugandoSolo.style.display = 'block';
    botones.style.display = 'none'
})

boton2Jugadores.addEventListener('click', () => {
    twoJugadores.style.display = 'block';
    botones.style.display = 'none'
})


// CREAR LÓGICA DE LA OPCIÓN: JUGAR SOLO

const optionsDict = [
    {op: '1'}, {op: '2'}, {op: '3'}
]

botonWinOrLost.addEventListener('click', () => {
    if(textNombre.value.length >= 1 || opcionElegir.value.length === enBlanco){
        informacion1.innerText = `𝐗 Falta ingresar algo, ${textNombre.value}!`;
        informacion1.style = 'left: -4.6em';
        informacion1.style.color = '#ff3d00'; 
    } else if(textNombre.value.length === enBlanco || opcionElegir.value.length >= 1){

    } else if(textNombre.value.length == enBlanco && opcionElegir.value.length == enBlanco){
        informacion1.innerText = `𝐗 No has introducido nada!`;
        informacion1.style = 'left: -4.6em';
        informacion1.style.color = '#ff3d00'; 
    }
})

botonWinOrLost.addEventListener('click', () => {
    if(textNombre.value.length >= 1 && opcionElegir.value.length >= 1){
        informacion1.innerText = 'Juegue en contra la pc o el móvil';
        informacion1.style = 'left: -3.2em';
        informacion1.style.color = 'black'; 
    }
})

opcionElegir.addEventListener('keyup', () => {
    if(textNombre.value.length >= 1 || opcionElegir.value.length >= 1) {
        informacion1.innerText = 'Juegue en contra la pc o el móvil';
        informacion1.style = 'left: -3.2em';
        informacion1.style.color = 'black'; 
    }
})

opcionElegir.addEventListener('keyup', () => {
    if(optionsDict.find(valor => valor.op === opcionElegir.value)){
        informacion1.innerText = `✓ Todo está correcto`;
        informacion1.style = 'left: -6em';
        informacion1.style.color = '#64dd17';
    } else if(optionsDict.find(valor => valor.op !== opcionElegir.value)){
        informacion1.innerText = `𝐗 Nada concuerda con lo ingresado`;
        informacion1.style = 'left: -2.8em';
        informacion1.style.color = '#ff3d00';
    }
})

textNombre.addEventListener('keyup', () => {
    if(opcionElegir.value.length >= 1 || textNombre.value.length >= 1) {
        informacion1.innerText = 'Juegue en contra la pc o el móvil';
        informacion1.style = 'left: -3.2em';
        informacion1.style.color = 'black'; 
    } 
})



function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // 1 es piedra, 2 es papel, 3 es tijera
let PC = aleatorio(1, 3);

botonWinOrLost.addEventListener('click', () => {

    const PC = aleatorio(1, 3);

    if(opcionElegir.value === '1' && PC == 1) {
        resultado1.innerText = `Hay un empate, nadie ganó ${textNombre.value}`;
        resultado1.style.color = '#4527a0';
        resultado2.innerText = `PC o móvil eligió Piedra y tu has elegido Piedra`;

        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#4527a0';
        botonWinOrLost.style.backgroundColor = '#4527a0';
    } else if(opcionElegir.value === '2' && PC == 2) {
        resultado1.innerText = `Hay un empate, nadie ganó ${textNombre.value}`;
        resultado1.style.color = '#4527a0';
        resultado2.innerText = `PC o móvil eligió Papel y tu has elegido Papel`;

        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#4527a0';
        botonWinOrLost.style.backgroundColor = '#4527a0';
    } else if(opcionElegir.value === '3' && PC == 3) {
        resultado1.innerText = `Hay un empate, nadie ganó ${textNombre.value}`;
        resultado1.style.color = '#4527a0';
        resultado2.innerText = `PC o móvil eligió Tijeras y tu has elegido Tijeras`;

        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#4527a0';
        botonWinOrLost.style.backgroundColor = '#4527a0';
    } else if(opcionElegir.value === '1' && PC == 3) {
        resultado1.innerText = `Has ganado ${textNombre.value}`;
        resultado1.style.color = '#64dd17';
        resultado2.innerText = `PC o móvil eligió Tijeras y tu has elegido Piedra`;

        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#64dd17';
        botonWinOrLost.style.backgroundColor = '#64dd17';
    } else if(opcionElegir.value === '1' && PC == 2) {
        resultado1.innerText = `Has ganado ${textNombre.value}`;
        resultado1.style.color = '#64dd17';
        resultado2.innerText = `PC o móvil eligió Piedra y tu has elegido Papel`;

        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#64dd17';
        botonWinOrLost.style.backgroundColor = '#64dd17';
    } else if(opcionElegir.value === '3' && PC == 2) {
        resultado1.innerText = `Has ganado ${textNombre.value}`;
        resultado1.style.color = '#64dd17';
        resultado2.innerText = `PC o móvil eligió Papel y tu has elegido Tijeras`;

        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#64dd17';
        botonWinOrLost.style.backgroundColor = '#64dd17';
    } else if(opcionElegir.value === '3' && PC == 1) {
        resultado1.innerText = `Has perdido ${textNombre.value}`;
        resultado1.style.color = '#ff3d00';
        resultado2.innerText = `PC o móvil eligió Piedra y tu has elegido Tijeras`;

        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#ff3d00';
        botonWinOrLost.style.backgroundColor = '#ff3d00';
    } else if(opcionElegir.value === '2' && PC == 1) {
        resultado1.innerText = `Has perdido ${textNombre.value}`;
        resultado1.style.color = '#ff3d00';
        resultado2.innerText = `PC o móvil eligió Papel y tu has elegido Piedra`;

        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#ff3d00';
        botonWinOrLost.style.backgroundColor = '#ff3d00';
    } else if(opcionElegir.value === '2' && PC == 3) {
        resultado1.innerText = `Has perdido ${textNombre.value}`;
        resultado1.style.color = '#ff3d00';
        resultado2.innerText = `PC o móvil eligió Tijeras y tu has elegido Papel`;

        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#ff3d00';
        botonWinOrLost.style.backgroundColor = '#ff3d00';
    } 
})


// LÓGICA DE LA OPCIÓN 2 JUGADORES

botonSiguiente.addEventListener('click', () => {
    if(jugador1Name.value.length === enBlanco || jugador2Name.value.length >= 1){
        faltaAlgo.innerText = '𝐗 Falta ingresar un nombre';
        faltaAlgo.style = 'left: -4.7em';
        faltaAlgo.style.color = '#ff3d00';
    } else if(jugador1Name.value.length >= 1 || jugador2Name.value.length === enBlanco){
        faltaAlgo.innerText = '𝐗 Falta ingresar un nombre';
        faltaAlgo.style = 'left: -4.7em';
        faltaAlgo.style.color = '#ff3d00';
    } 
})

jugador1Name.addEventListener('keyup', () => {
    if(jugador1Name.value.length >= 1 && jugador2Name.value.length >= 1){
        faltaAlgo.innerText = '✓ Todo está correcto';
        faltaAlgo.style = 'left: -6em';
        faltaAlgo.style.color = '#64dd17';
    }
})

jugador2Name.addEventListener('keyup', () => {
    if(jugador1Name.value.length >= 1 && jugador2Name.value.length >= 1){
        faltaAlgo.innerText = '✓ Todo está correcto';
        faltaAlgo.style = 'left: -6em';
        faltaAlgo.style.color = '#64dd17';
    }
})

botonSiguiente.addEventListener('click', () => {
    if(jugador1Name.value.length >= 1 && jugador2Name.value.length >= 1){
        parte22jugadores.style.display = 'block';
        twoJugadores.style.display = 'none'
        nombre1.innerText = `${jugador1Name.value}`;
        nombre2.innerText = `${jugador2Name.value}`;
    }
})


opcionesElegir1.addEventListener('keyup', () => {
    if(optionsDict.find(valor => valor.op === opcionesElegir1.value)){
        informacion2.innerText = `✓ Todo está correcto ${jugador1Name.value}`;
        informacion2.style = 'left: -4.2em';
        informacion2.style.color = '#64dd17';
    } else if(optionsDict.find(valor => valor.op !== opcionesElegir1.value)){
        informacion2.innerText = `𝐗 Nada concuerda con lo ingresado`;
        informacion2.style = 'left: -2.8em';
        informacion2.style.color = '#ff3d00';
    } 
})

opcionesElegir2.addEventListener('keyup', () => {
    if(optionsDict.find(valor => valor.op === opcionesElegir2.value)){
        informacion2.innerText = `✓ Todo está correcto ${jugador2Name.value}`;
        informacion2.style = 'left: -4.2em';
        informacion2.style.color = '#64dd17';
    } else if(optionsDict.find(valor => valor.op !== opcionesElegir2.value)){
        informacion2.innerText = `𝐗 Nada concuerda con lo ingresado`;
        informacion2.style = 'left: -2.8em';
        informacion2.style.color = '#ff3d00';
    } 
})



//  LÓGICA DEL JUEGO

function aleatorio2(min, max) {
    const retornar1 = Math.floor(Math.random() * (max - min + 1) + min);
    const retornar2 = Math.floor(Math.random() * (max - min + 1) + min);

    return retornar1, retornar2;
}

let pc = aleatorio2(1, 3);

function aleatorio3(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let pc2 = aleatorio3(1, 3);

botonGanador.addEventListener('click', () => {

    const pc = aleatorio2(1, 3);
    const pc2 = aleatorio3(1, 3);

    if((opcionesElegir1.value === '1' && pc == 1) && (opcionesElegir2.value === '1' && pc2 == 1)) {
        resultGanador.innerText = `Hay un empate, nadie ganó`;
        resultGanador.style.color = '#4527a0';
        infoResult.innerText = `${jugador1Name.value} eligió Piedra y ${jugador2Name.value} eligió Piedra`;
    } else if((opcionesElegir1.value === '2' && pc == 2) && (opcionesElegir2.value === '2' && pc2 == 2)) {
        resultGanador.innerText = `Hay un empate, nadie ganó`;
        resultGanador.style.color = '#4527a0';
        infoResult.innerText = `${jugador1Name.value} eligió Papel y ${jugador2Name.value} eligió Papel`;
    } else if((opcionesElegir1.value === '3' && pc == 3) && (opcionesElegir2.value === '3' && pc2 == 3)) {
        resultGanador.innerText = `Hay un empate, nadie ganó`;
        resultGanador.style.color = '#4527a0';
        infoResult.innerText = `${jugador1Name.value} eligió Tijeras y ${jugador2Name.value} eligió Tijeras`;
    } else if((opcionesElegir1.value === '1' && pc == 1) && (opcionesElegir2.value === '3' && pc2 == 3)) {
        resultGanador.innerText = `Ha ganado ${jugador2Name.value} y ha perdido ${jugador1Name.value}`;
        resultGanador.style.color = 'black';
        nombre1.style.color = '#ff3d00';
        nombre2.style.color = '#64dd17';
        infoResult.innerText = `${jugador1Name.value} eligió Tijeras y ${jugador2Name.value} eligió Piedra`;
    } else if((opcionesElegir1.value === '1' && pc == 1) && (opcionesElegir2.value === '2' && pc2 == 2)) {
        resultGanador.innerText = `Ha ganado ${jugador2Name.value} y ha perdido ${jugador1Name.value}`;
        resultGanador.style = 'font-weight: 500';
        resultGanador.style.color = 'black';
        nombre1.style.color = '#ff3d00';
        nombre2.style.color = '#64dd17';
        infoResult.innerText = `${jugador1Name.value} eligió Piedra y ${jugador2Name.value} eligió Papel`;
    } else if((opcionesElegir1.value === '3' && pc == 3) && (opcionesElegir2.value === '2' && pc2 == 2)) {
        resultGanador.innerText = `Ha ganado ${jugador2Name.value} y ha perdido ${jugador1Name.value}`;
        resultGanador.style = 'font-weight: 500';
        resultGanador.style.color = 'black';
        nombre1.style.color = '#ff3d00';
        nombre2.style.color = '#64dd17';
        infoResult.innerText = `${jugador1Name.value} eligió Papel y ${jugador2Name.value} eligió Tijeras`;
    } else if((opcionesElegir1.value === '3' && pc == 3) && (opcionesElegir2.value === '1' && pc2 == 1)) {
        resultGanador.innerText = `Ha perdido ${jugador2Name.value} y ha ganado ${jugador1Name.value}`;
        resultGanador.style = 'font-weight: 500';
        resultGanador.style.color = 'black';
        nombre1.style.color = '#64dd17';
        nombre2.style.color = '#ff3d00';
        infoResult.innerText = `${jugador1Name.value} eligió Piedra y ${jugador2Name.value} eligió Tijeras`;
    } else if((opcionesElegir1.value === '2' && pc == 2) && (opcionesElegir2.value === '1' && pc2 == 1)) {
        resultGanador.innerText = `Ha perdido ${jugador2Name.value} y ha ganado ${jugador1Name.value}`;
        resultGanador.style = 'font-weight: 500';
        resultGanador.style.color = 'black';
        nombre1.style.color = '#64dd17';
        nombre2.style.color = '#ff3d00';
        infoResult.innerText = `${jugador1Name.value} eligió Papel y ${jugador2Name.value} eligió Piedra`;
    } else if((opcionesElegir1.value === '2' && pc == 2) && (opcionesElegir2.value === '3' && pc2 == 3)) {
        resultGanador.innerText = `Ha perdido ${jugador2Name.value} y ha ganado ${jugador1Name.value}`;
        resultGanador.style = 'font-weight: 500';
        resultGanador.style.color = 'black';
        nombre1.style.color = '#64dd17';
        nombre2.style.color = '#ff3d00';
        infoResult.innerText = `${jugador1Name.value} eligió Tijeras y ${jugador2Name.value} eligió Papel`;
    } else if((opcionesElegir1.value === '1' && pc != 1) && (opcionesElegir2.value === '1' && pc2 != 1)) {
        resultGanador.innerText = `Aviso: Cambien las opciones nuevamente.`;
        resultGanador.style = 'font-weight: bold';
        resultGanador.style.color = '#5e35b1';
        nombre1.style.color = 'black';
        nombre2.style.color = 'black';
        infoResult.innerText = `Los números aleatorios elegidos fueron ${pc} y ${pc2}`;
    } else if((opcionesElegir1.value === '2' && pc != 2) && (opcionesElegir2.value === '2' && pc2 != 2)) {
        resultGanador.innerText = `Aviso: Cambien las opciones nuevamente.`;
        resultGanador.style = 'font-weight: bold';
        resultGanador.style.color = '#7e57c2';
        nombre1.style.color = 'black';
        nombre2.style.color = 'black';
        infoResult.innerText = `Los números aleatorios elegidos fueron ${pc} y ${pc2}`;
    } else if((opcionesElegir1.value === '3' && pc != 3) && (opcionesElegir2.value === '3' && pc2 != 3)) {
        resultGanador.innerText = `Aviso: Cambien las opciones nuevamente.`;
        resultGanador.style = 'font-weight: bold';
        resultGanador.style.color = '#e040fb';
        nombre1.style.color = 'black';
        nombre2.style.color = 'black';
        infoResult.innerText = `Los números aleatorios elegidos fueron ${pc} y ${pc2}`;
    } else if((opcionesElegir1.value === '1' && pc != 1) && (opcionesElegir2.value === '3' && pc2 != 3)) {
        resultGanador.innerText = `Aviso: Cambien las opciones nuevamente.`;
        resultGanador.style = 'font-weight: bold';
        resultGanador.style.color = '#651fff';
        nombre1.style.color = 'black';
        nombre2.style.color = 'black';
        infoResult.innerText = `Los números aleatorios elegidos fueron ${pc} y ${pc2}`;
    } else if((opcionesElegir1.value === '1' && pc != 1) && (opcionesElegir2.value === '2' && pc2 != 2)) {
        resultGanador.innerText = `Aviso: Cambien las opciones nuevamente.`;
        resultGanador.style = 'font-weight: bold';
        resultGanador.style.color = '#536dfe';
        nombre1.style.color = 'black';
        nombre2.style.color = 'black';
        infoResult.innerText = `Los números aleatorios elegidos fueron ${pc} y ${pc2}`;
    } else if((opcionesElegir1.value === '3' && pc != 3) && (opcionesElegir2.value === '2' && pc2 != 2)) {
        resultGanador.innerText = `Aviso: Cambien las opciones nuevamente.`;
        resultGanador.style = 'font-weight: bold';
        resultGanador.style.color = '#5e35b1';
        nombre1.style.color = 'black';
        nombre2.style.color = 'black';
        infoResult.innerText = `Los números aleatorios elegidos fueron ${pc} y ${pc2}`;
    } else if((opcionesElegir1.value === '3' && pc != 3) && (opcionesElegir2.value === '1' && pc2 != 1)) {
        resultGanador.innerText = `Aviso: Cambien las opciones nuevamente.`;
        resultGanador.style = 'font-weight: bold';
        resultGanador.style.color = '#43a047';
        nombre1.style.color = 'black';
        nombre2.style.color = 'black';
        infoResult.innerText = `Los números aleatorios elegidos fueron ${pc} y ${pc2}`;
    } else if((opcionesElegir1.value === '2' && pc != 2) && (opcionesElegir2.value === '1' && pc2 != 1)) {
        resultGanador.innerText = `Aviso: Cambien las opciones nuevamente.`;
        resultGanador.style = 'font-weight: bold';
        resultGanador.style.color = '#d4e157';
        nombre1.style.color = 'black';
        nombre2.style.color = 'black';
        infoResult.innerText = `Los números aleatorios elegidos fueron ${pc} y ${pc2}`;
    } else if((opcionesElegir1.value === '2' && pc != 2) && (opcionesElegir2.value === '3' && pc2 != 3)) {
        resultGanador.innerText = `Aviso: Cambien las opciones nuevamente.`;
        resultGanador.style = 'font-weight: bold';
        resultGanador.style.color = '#6d4c41';
        nombre1.style.color = 'black';
        nombre2.style.color = 'black';
        infoResult.innerText = `Los números aleatorios elegidos fueron ${pc} y ${pc2}`;
    } 
})
