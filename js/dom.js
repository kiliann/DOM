/*
    dom.js
    Ejercicio guiados del DOM
 */

'use strict'

function ejecutar(){
    //getElementById() esta es la primer forma de buscar
    //let input = document.getElementById('iNombre');
    //console.log(input.value);
    //

    //recoge los datod de la etiqueta input no como el anterior quera por la id
    let nombre = document.getElementsByTagName('input');
    console.log(nombre[2].value);

    let p = document.querySelector('.c1');
    console.log(p.outerHTML);
    let spans = document.querySelectorAll('.c1 span');
    console.log(spans);


    spans[1].innerHTML = 'Viva la pepa';

    //Modificar estilos
    spans[0].style.color ='blue';
    spans[1].style.fontsize = '20pt';
    //let mueve = document.querySelector('.parrafodelizable')
   //mueve.style.left = '+20px';

    setInterval(mover, 100);

}
let posicion = 0;
function mover(){

    let mueve = document.querySelector('.parrafodelizable')
    mueve.style.left = `${posicion}px`;
    posicion +=1;
    console.log('TRON')
}
