'use strict';

const tabla = document.querySelector('#tbl_actividades tbody');
const input_Filtro = document.querySelector('#txt_filtro');

let mostrar_datos = () =>{
    let actividades = listar_actividades ();
    let centro_educativo = localStorage.getItem('id_usuario');/**Panel de control centro educativo ('id_usuario') */

    for (let i = 0; i < actividades.length; i++) {
        if (actividades[i]['id_centro_educativo'].includes(centro_educativo)){
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = actividades[i]['titulo'];
        fila.insertCell().innerHTML = actividades[i]['fecha'];
        fila.insertCell().innerHTML = actividades[i]['descripcion'];
    };
};
};

mostrar_datos();
