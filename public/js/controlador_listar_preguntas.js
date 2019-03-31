'use strict';
const lista_preguntas = document.querySelector('#lista_preguntas');
const input_buscar = document.querySelector('#txt_buscar');

const a_regresar = document.querySelector('#a_regresar');

a_regresar.addEventListener('click', function(){
    if(localStorage.getItem('tipo_usuario') == 'administrador'){
        window.location.href = './panel_administrador_instituciones.html';
    }
    else{
        window.location.href = './instituciones.html';
    }
});

a_regresar.classList.add('estilos_a');




let mostrar_datos = () => {
  let preguntas = listar();
  let centro_educativo = localStorage.getItem('centro_educativo');


  for (let i = 0; i < preguntas.length; i++) {
    if (preguntas[i]['id_centro_educativo'].includes(centro_educativo)){
    /*  if(preguntas[i]['pregunta'].includes(filtro)){
        console.log(preguntas[i]['pregunta']);
      }*/
    let pregunta_frecuente = document.createElement('div');
    pregunta_frecuente.classList.add('pregunta');

    let nombre_pregunta = document.createElement('div');
    nombre_pregunta.classList.add('nombre_pregunta');

    let texto_pregunta = document.createElement('p');
    texto_pregunta.innerHTML = preguntas[i]['pregunta'];

    nombre_pregunta.appendChild(texto_pregunta);

    //Respuesta
    let respuesta_pregunta = document.createElement('div');
    respuesta_pregunta.classList.add('respuesta_pregunta');

    let texto_respuesta = document.createElement('p');
    texto_respuesta.innerHTML = preguntas[i]['respuesta'];

    respuesta_pregunta.appendChild(texto_respuesta);

    pregunta_frecuente.appendChild(nombre_pregunta);
    pregunta_frecuente.appendChild(respuesta_pregunta);

    lista_preguntas.appendChild(pregunta_frecuente);
  }
}
}
mostrar_datos();
