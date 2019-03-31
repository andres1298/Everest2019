'use strict';

const lista_instituciones = document.querySelector('#lista_instituciones');
const select_criterios = document.querySelector('#select_criterios');
const opt_todos = document.querySelector('#listar_todos');
const opt_escuelas = document.querySelector('#listar_escuelas');
const input_filtrar = document.querySelector('#txt_buscar_centro_educativo');


let filtrar_criterios = () =>{
    switch(select_criterios.value){
        case 'Todos':
            mostrar_datos();
        break;
        case 'Colegios':
            mostrar_datos_colegios();
        break;
        case 'Escuelas':
            mostrar_datos_escuelas();       
        break;
    }
};

let mostrar_datos = () => {
    let filtro = input_filtrar.value;
    let instituciones = listar_instituciones();
    select_criterios.value = 'Todos';
    document.getElementById('lista_instituciones').innerHTML =''; 
    for(let i=0; i< instituciones.length; i++){
        if(instituciones[i]['nombre_comercial'].toLowerCase().includes(filtro.toLowerCase())){
        document.getElementById('lista_instituciones').innerHTML += 
        

        '<div class="contenedor_institucion">'+
                '<img src="' + instituciones[i]['logo'] + '" alt="Logo Centro Educativo">'+

                '<div class="contenedor_informacion">'+

                    '<div class="contenedor_nombre_centro_educativo">'+
                        '<p>' + instituciones[i]['nombre_comercial'] + ' </p>' +
                   ' </div>'+

                    '<div class="contenedor_clasificacion_centro_educativo">'+

                        '<div class="contenedor_tipo">'+
                            '<p>' + instituciones[i]['tipo_institucion'] + '</p>'+
                        '</div>' + 

                        '<div class="contenedor_division">'+
                            '<p>/</p>'+
                        '</div>'+

                        '<div class="contenedor_sistema">'+
                            '<p>'+ instituciones[i]['modalidad'] + '</p>'+
                        '</div>'+
                    '</div>'+

                    '<div class="contenedor_telefono_centro_educativo">'+
                        '<p>'+ instituciones[i]['telefono'] + '</p>'+
                    '</div>'+

                    '<div class="contenedor_ubicacion_centro_educativo">'+

                        '<div class="contenedor_provincia">'+
                            '<p>' + instituciones[i]['provincia'] + '</p>'+
                        '</div>'+

                        '<div class="contenedor_canton">'+
                            '<p>'+ instituciones[i]['canton'] + '</p>'+
                        '</div>'+
                    '</div>'+
                    
                    '<div class="contenedor_web_centro_educativo">'+
                        '<p>'+ instituciones[i]['pagina_web'] + '</p>'+
                    '</div>'+
                    '<div data-institucion="' + instituciones[i]['_id'] +'" id="institucion' + i + '" class="contenedor_boton">'+

                         //En este boton se acciona la funcion que permite almacenar en el LocalStorage el id del centro educativo
                         ' <button type="button" onclick="visualizar_centro_educativo(document.getElementById(\'institucion'+i +'\').dataset.institucion)">Ver más <i class="fas fa-angle-right"></i> </button>'+
                       
                    '</div>'+
                    
                '</div>'+
            '</div>'
        
        }
    };
    

    
};

let mostrar_datos_colegios = () => {
    let instituciones = listar_instituciones();
    document.getElementById('lista_instituciones').innerHTML ='';
    for(let i=0; i< instituciones.length; i++){
        if (instituciones[i]['tipo_institucion'].includes('Colegio') || instituciones[i]['tipo_institucion'].includes('Ambos')) {
        
        document.getElementById('lista_instituciones').innerHTML += 
        

        '<div class="contenedor_institucion">'+
                '<img src="' + instituciones[i]['logo'] + '" alt="Logo Centro Educativo">'+

                '<div class="contenedor_informacion">'+

                    '<div class="contenedor_nombre_centro_educativo">'+
                        '<p>' + instituciones[i]['nombre_comercial'] + ' </p>' +
                   ' </div>'+

                    '<div class="contenedor_clasificacion_centro_educativo">'+

                        '<div class="contenedor_tipo">'+
                            '<p>' + instituciones[i]['tipo_institucion'] + '</p>'+
                        '</div>' + 

                        '<div class="contenedor_division">'+
                            '<p>/</p>'+
                        '</div>'+

                        '<div class="contenedor_sistema">'+
                            '<p>'+ instituciones[i]['modalidad'] + '</p>'+
                        '</div>'+
                    '</div>'+

                    '<div class="contenedor_telefono_centro_educativo">'+
                        '<p>'+ instituciones[i]['telefono'] + '</p>'+
                    '</div>'+

                    '<div class="contenedor_ubicacion_centro_educativo">'+

                        '<div class="contenedor_provincia">'+
                            '<p>' + instituciones[i]['provincia'] + '</p>'+
                        '</div>'+

                        '<div class="contenedor_canton">'+
                            '<p>'+ instituciones[i]['canton'] + '</p>'+
                        '</div>'+
                    '</div>'+
                    
                    '<div class="contenedor_web_centro_educativo">'+
                        '<p>'+ instituciones[i]['pagina_web'] + '</p>'+
                    '</div>'+
                    '<div data-institucion="' + instituciones[i]['_id'] +'" id="institucion' + i + '" class="contenedor_boton">'+

                         //En este boton se acciona la funcion que permite almacenar en el LocalStorage el id del centro educativo
                         ' <button type="button" onclick="visualizar_centro_educativo(document.getElementById(\'institucion'+i +'\').dataset.institucion)">Ver más <i class="fas fa-angle-right"></i> </button>'+
                       
                    '</div>'+
                    
                '</div>'+
            '</div>'
        };
    };   
};

let mostrar_datos_escuelas = () => {
    let instituciones = listar_instituciones();
    document.getElementById('lista_instituciones').innerHTML ='';
    for(let i=0; i< instituciones.length; i++){
        if (instituciones[i]['tipo_institucion'].includes('Escuela') || instituciones[i]['tipo_institucion'].includes('Ambos')) {
        
        document.getElementById('lista_instituciones').innerHTML += 
        

        '<div class="contenedor_institucion">'+
                '<img src="' + instituciones[i]['logo'] + '" alt="Logo Centro Educativo">'+

                '<div class="contenedor_informacion">'+

                    '<div class="contenedor_nombre_centro_educativo">'+
                        '<p>' + instituciones[i]['nombre_comercial'] + ' </p>' +
                   ' </div>'+

                    '<div class="contenedor_clasificacion_centro_educativo">'+

                        '<div class="contenedor_tipo">'+
                            '<p>' + instituciones[i]['tipo_institucion'] + '</p>'+
                        '</div>' + 

                        '<div class="contenedor_division">'+
                            '<p>/</p>'+
                        '</div>'+

                        '<div class="contenedor_sistema">'+
                            '<p>'+ instituciones[i]['modalidad'] + '</p>'+
                        '</div>'+
                    '</div>'+

                    '<div class="contenedor_telefono_centro_educativo">'+
                        '<p>'+ instituciones[i]['telefono'] + '</p>'+
                    '</div>'+

                    '<div class="contenedor_ubicacion_centro_educativo">'+

                        '<div class="contenedor_provincia">'+
                            '<p>' + instituciones[i]['provincia'] + '</p>'+
                        '</div>'+

                        '<div class="contenedor_canton">'+
                            '<p>'+ instituciones[i]['canton'] + '</p>'+
                        '</div>'+
                    '</div>'+
                    
                    '<div class="contenedor_web_centro_educativo">'+
                        '<p>'+ instituciones[i]['pagina_web'] + '</p>'+
                    '</div>'+
                    '<div data-institucion="' + instituciones[i]['_id'] +'" id="institucion' + i + '" class="contenedor_boton">'+

                         //En este boton se acciona la funcion que permite almacenar en el LocalStorage el id del centro educativo
                         ' <button type="button" onclick="visualizar_centro_educativo(document.getElementById(\'institucion'+i +'\').dataset.institucion)">Ver más <i class="fas fa-angle-right"></i> </button>'+
                       
                    '</div>'+
                    
                '</div>'+
            '</div>'
        };
    };   
};

mostrar_datos();

function visualizar_centro_educativo(pid_centro_educativo){
    
    localStorage.setItem('centro_educativo', pid_centro_educativo);
    window.location.href = 'perfil_centro_educativo_general.html';
};

input_filtrar.addEventListener('keyup', mostrar_datos);
select_criterios.addEventListener('change', filtrar_criterios);