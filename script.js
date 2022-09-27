
// Botones

const botonJugarsolo = document.getElementById('boton-jugarsolo');
const botonWinOrLost = document.getElementById('boton-winOrLost');
const botones = document.querySelector('.botones');

// Divs

const jugandoSolo = document.querySelector('.jugando-solo');
const twoJugadores = document.querySelector('.two-jugadores');

// Párrafos - Resultado 

const resultado1 = document.querySelector('.resultado1');
const resultado2 = document.querySelector('.resultado2');
const informacion1 = document.querySelector('.informacion1');
const notaPrincipal = document.querySelector('.nota-principal');
const imagen = document.querySelector('.imagen');

// Inputs

const textNombre = document.getElementById('text-nombre');
const opcionElegir = document.getElementById('opcion-elegir');

const enBlanco = " ";


botonJugarsolo.addEventListener('click', () => {
    jugandoSolo.style.display = 'block';
    botones.style.display = 'none';
    notaPrincipal.style.display = 'none';
    imagen.style.display = 'none';

})


// CREAR LÓGICA DEL JUEGO

const optionsDict = [
    {op: '1'}, {op: '2'}, {op: '3'}
]

botonWinOrLost.addEventListener('click', () => {
    if(textNombre.value.length >= 1 || opcionElegir.value.length === enBlanco){
        informacion1.innerText = `𝐗 Falta ingresar algo, ${textNombre.value}!`;
        informacion1.style = 'left: -4.6em';
        informacion1.style.color = '#ff3d00'; 
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
    if(textNombre.value.length >= 1 && opcionElegir.value.length == enBlanco){
        resultado1.style.display = 'none';
        resultado2.style.display = 'none';
    }
})

botonWinOrLost.addEventListener('click', () => {
    if(textNombre.value.length >= 1 && opcionElegir.value.length >= 1){
        resultado1.style.display = 'block';
        resultado2.style.display = 'block';
    }
})

opcionElegir.addEventListener('keyup', () => {
    if(optionsDict.find(valor => valor.op === opcionElegir.value)){
        informacion1.innerText = `✓ Todo está correcto`;
        informacion1.style = 'left: -6em';
        informacion1.style.color = '#64dd17';
        botonWinOrLost.style = 'cursor: pointer; color: #ffb300; background-color: white; pointer-events: block; border: 1px solid #ffb300';
        botonWinOrLost.innerText = 'Gané o Perdí';
    } else if(optionsDict.find(valor => valor.op !== opcionElegir.value)){
        informacion1.innerText = `𝐗 Nada concuerda con lo ingresado`;
        informacion1.style = 'left: -2.8em';
        informacion1.style.color = '#ff3d00';
        botonWinOrLost.style = 'cursor: not-allowed; color: #ff3d00; background-color: #f1f8e9 !important; pointer-events: none; border: 1px solid #ff3d00';
        botonWinOrLost.innerText = 'Botón Bloqueado';
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

let ganados = 100;
let sumaPuntos = 0;
let perdidos = 50;


let ganadosPc = 100;
let sumaPuntosPc = 0;
let perdidosPc = 50;


botonWinOrLost.addEventListener('click', () => {

    const PC = aleatorio(1, 3);

    if(sumaPuntosPc === 0 || sumaPuntosPc === -50){
        perdidosPc = 0;
    } else if(sumaPuntosPc > 0 || sumaPuntosPc === 100){
        perdidosPc = 50;
    }

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
        resultado1.style.display = 'none';
        resultado2.innerText = `PC o móvil eligió Tijeras y tu has elegido Piedra`;

        sumaPuntosPc = sumaPuntosPc - perdidosPc;

        Swal.fire({
            icon: 'success',
            title: `Bien hecho ${textNombre.value}`,
            text: `Has obtenido +${sumaPuntos = sumaPuntos + ganados} puntos`,
            confirmButtonText: 'Aceptar premio'
        });

        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#64dd17';
        botonWinOrLost.style.backgroundColor = '#64dd17';
    } else if(opcionElegir.value === '1' && PC == 2) {
        resultado1.style.display = 'none';
        resultado2.innerText = `PC o móvil eligió Piedra y tu has elegido Papel`;

        sumaPuntosPc = sumaPuntosPc - perdidosPc;

        Swal.fire({
            icon: 'success',
            title: `Bien hecho ${textNombre.value}`,
            text: `Has obtenido +${sumaPuntos = sumaPuntos + ganados} puntos`,
            confirmButtonText: 'Aceptar premio'
        });

        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#64dd17';
        botonWinOrLost.style.backgroundColor = '#64dd17';
    } else if(opcionElegir.value === '3' && PC == 2) {
        resultado1.style.display = 'none';
        resultado2.innerText = `PC o móvil eligió Papel y tu has elegido Tijeras`;

        sumaPuntosPc = sumaPuntosPc - perdidosPc;

        Swal.fire({
            icon: 'success',
            title: `Bien hecho ${textNombre.value}`,
            text: `Has obtenido +${sumaPuntos = sumaPuntos + ganados} puntos`,
            confirmButtonText: 'Aceptar premio'
        });

        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#64dd17';
        botonWinOrLost.style.backgroundColor = '#64dd17';
    } else if(opcionElegir.value === '3' && PC == 1) {
        resultado1.style.display = 'none';
        resultado2.innerText = `PC o móvil eligió Piedra y tu has elegido Tijeras`;

        sumaPuntosPc = sumaPuntosPc + ganadosPc;

        if(sumaPuntos === 0 || sumaPuntos === -50){
            Swal.fire({
                icon: 'error',
                title: `Oops... Has perdido ${textNombre.value}`,
                text: `Ahora tienes +0 puntos`,
                confirmButtonText: 'Aceptar derrota',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: `Oops... Has perdido ${textNombre.value}`,
                text: `Ahora tienes +${sumaPuntos = sumaPuntos - perdidos} puntos`,
                confirmButtonText: 'Aceptar derrota',
            });
        }
        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#ff3d00';
        botonWinOrLost.style.backgroundColor = '#ff3d00';
    } else if(opcionElegir.value === '2' && PC == 1) {
        resultado1.style.display = 'none';
        resultado2.innerText = `PC o móvil eligió Papel y tu has elegido Piedra`;

        sumaPuntosPc = sumaPuntosPc + ganadosPc;

        if(sumaPuntos === 0 || sumaPuntos === -50){
            Swal.fire({
                icon: 'error',
                title: `Oops... Has perdido ${textNombre.value}`,
                text: `Ahora tienes +0 puntos`,
                confirmButtonText: 'Aceptar derrota',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: `Oops... Has perdido ${textNombre.value}`,
                text: `Ahora tienes +${sumaPuntos = sumaPuntos - perdidos} puntos`,
                confirmButtonText: 'Aceptar derrota',
            });
        }

        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#ff3d00';
        botonWinOrLost.style.backgroundColor = '#ff3d00';
    } else if(opcionElegir.value === '2' && PC == 3) {
        resultado1.style.display = 'none';
        resultado2.innerText = `PC o móvil eligió Tijeras y tu has elegido Papel`;
        
        sumaPuntosPc = sumaPuntosPc + ganadosPc;

        if(sumaPuntos === 0 || sumaPuntos === -50){
            Swal.fire({
                icon: 'error',
                title: `Oops... Has perdido ${textNombre.value}`,
                text: `Ahora tienes +0 puntos`,
                confirmButtonText: 'Aceptar derrota',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: `Oops... Has perdido ${textNombre.value}`,
                text: `Ahora tienes +${sumaPuntos = sumaPuntos - perdidos} puntos`,
                confirmButtonText: 'Aceptar derrota',
            });
        }

        botonWinOrLost.style.color = 'white';
        botonWinOrLost.style.borderColor = '#ff3d00';
        botonWinOrLost.style.backgroundColor = '#ff3d00';
    } 
})


botonWinOrLost.addEventListener('click', () => {
    if(sumaPuntos === 750 || sumaPuntos >= 800){
        Swal.fire({
            icon: 'success',
            title: `Has ganado ${textNombre.value}`,
            text: `Has obtenido los +800 puntos`,
            confirmButtonText: 'Aceptar premio'
        });

        sumaPuntos = 0;
        sumaPuntosPc = 0;
        
    } else if(sumaPuntosPc === 750 || sumaPuntosPc >= 800){
        Swal.fire({
            icon: 'error',
            title: `Oops... Has perdido por completo ${textNombre.value}`,
            text: `PC o móvil llegó a los +800 puntos`,
            confirmButtonText: 'Aceptar derrota'
        });

        sumaPuntosPc = 0;
        sumaPuntos = 0;
    }
})


console.log(`Pc: ${sumaPuntosPc} y jugador ${sumaPuntos}`)


