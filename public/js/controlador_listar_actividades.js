'use strict';

const tabla = document.querySelector('#tbl_actividades tbody');
const input_filtro = document.querySelector('#txt_filtro');
const nombre = document.querySelector('#nombre_ce');
const a_regresar = document.querySelector('#a_regresar');

let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');


if (!usuario_loggeado || tipo_usuario == 'centro_educativo') {
    window.location.href = `iniciar_sesion.html`;
}



let id_centro_educativo = localStorage.getItem('centro_educativo');

let centro_educativo = buscar_centro_educativo(id_centro_educativo);

nombre.innerHTML = centro_educativo['nombre_comercial'];


let actividades = listar_actividades ();
 
let mostrar_datos = () =>{
    let filtro = input_filtro.value;
    tabla.innerHTML='';

    for (let i = 0; i < actividades.length; i++) {
        if(actividades[i]['id_centro_educativo'].includes(id_centro_educativo)){

        
        if (actividades[i]['titulo'].toLowerCase().includes(filtro.toLowerCase())){

        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = actividades[i]['titulo'];
        
        let fecha = new Date(actividades[i]['fecha']);
        fecha = fecha.toLocaleDateString();
        fila.insertCell().innerHTML = fecha;
        fila.insertCell().innerHTML = actividades[i]['descripcion'];

    };
    }
};
};


mostrar_datos();




a_regresar.addEventListener('click', function () {
    if (localStorage.getItem('tipo_usuario') == 'administrador') {
        window.location.href = './panel_administrador_instituciones.html';
    }
    else {
        window.location.href = './instituciones.html';
    }
});

a_regresar.classList.add('estilos_a');
input_filtro.addEventListener('keyup', mostrar_datos);