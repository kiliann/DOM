'use strict'

/*Vamos a ver los tipos de eventos que tenemos*/
window.onload = iniciar

     function iniciar(){
         let mapa = document.getElementById('imgMapa')
         // img.onclick = manejadorClick
         //img.addEventListener('click', manejadorClick)
         //img.addEventListener('click', manejadorClick2)
         mapa.onclick = ponerSeta;
     }

     function ponerSeta(evento){
         console.log(evento)
         let div = document.getElementsByTagName('div')[0];
         let seta = document.getElementById('setaPrueba');
         let crearSeta = document.createElement('img');
         div.appendChild(crearSeta)
         crearSeta.setAttribute('src','img/seta.png');
         crearSeta.classList.add('seta');

         crearSeta.style.top = `${evento.clientY - 25}px`;
         crearSeta.style.left = `${evento.clientX - 25}px`;
     }

    /*function manejadorClick(){
        console.log('Tron')
        return 7
    }
    function manejadorClick2(){
        console.log('Tron2')
        return 7
    }*/

