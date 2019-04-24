'use strict';

const tabla = document.querySelector('#tbl_instituciones tbody');
const input_filtro = document.querySelector('#txt_filtar');
const reporte_mejor_evaluados = document.querySelector('#btn_reporte1');

let lista_instituciones = listar_instituciones();

let mostrar_datos = () => {


    let filtro = input_filtro.value;

    tabla.innerHTML = '';

    for (let i = 0; i < lista_instituciones.length; i++) {
        if (lista_instituciones[i]['nombre_comercial'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = lista_instituciones[i]['nombre_comercial'];
            fila.insertCell().innerHTML = lista_instituciones[i]['correo'];

            // se crea una nueva celda para el boton de generar el reporte 
            let celda_configuracion = fila.insertCell();

            let boton_redirigir = document.createElement('a');
            boton_redirigir.href = '#';
            boton_redirigir.dataset.id_institución = lista_instituciones[i]
            ['_id'];

            let icono_redirigir = document.createElement('i');
            icono_redirigir.classList.add('fas', 'fa-arrow-alt-circle-right', 'fa-2x', 'icono');
            
            boton_redirigir.appendChild(icono_redirigir);   
            
            

            celda_configuracion.appendChild(boton_redirigir);

            boton_redirigir.addEventListener('click', redirigir);

        }
    };
};

function redirigir() {
    let id = this.dataset.id_institución;
    
    localStorage.setItem('centro_educativo',id);
    swal.fire({
        title: 'Seleccione el tipo de reporte',
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        showCloseButton: true,
        html: '<div class="separador"></div>'+
        '<div class="contenedor_botones"><button class="btn_reporte"  id="reporte1">Reporte 1</button><button class="btn_reporte"  id="reporte2">Reporte 2</button><button class="btn_reporte"  id="reporte3">Reporte 3</button><button class="btn_reporte"  id="reporte4">Reporte 4</button><button class="btn_reporte"  id="reporte5">Reporte 5</button><button class="btn_reporte"  id="reporte6">Reporte 6</button></div>',
    });
    const reporte1 = document.querySelector('#reporte1');
    const reporte2 = document.querySelector('#reporte2');
    const reporte3 = document.querySelector('#reporte3');
    const reporte4 = document.querySelector('#reporte4');
    const reporte5 = document.querySelector('#reporte5');
    const reporte6 = document.querySelector('#reporte6');

    reporte1.addEventListener('click',function(){
       
    });

    reporte2.addEventListener('click',function(){
        
    });

    reporte3.addEventListener('click',function(){
        
    });

    reporte4.addEventListener('click',function(){
        
    });

    reporte5.addEventListener('click',function(){
        
    });

    reporte6.addEventListener('click',function(){
        
    });
};

input_filtro.addEventListener('keyup', mostrar_datos);
reporte_mejor_evaluados.addEventListener('click',function(){
    window.location.href = 'reporte_administrador_mejor_evaluados.html';
})

mostrar_datos();