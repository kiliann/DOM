/*
    dom.js
    Ejercicio guiados del DOM
 */

'use strict'

function ejecutar(){
    //getElementById() esta es la primer forma de buscar
    //let input = document.getElementById('iNombre');
    //console.log(input.value);


    let nombre = document.getElementsByTagName('input');
    console.log(nombre);
}