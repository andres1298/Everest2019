'use strict';

const input_filtrar = document.querySelector('#btn_informacion');

let usuario_loggeado = localStorage.getItem('conectado');
let tipo_usuario = localStorage.getItem('tipo_usuario');
if(!usuario_loggeado || tipo_usuario!='centro_educativo'){
    window.location.href = `iniciar_sesion.html`;
}

let id_centro_educativo = localStorage.getItem('id_usuario');

let lista_solicitudes = listar_solicitudes();
let centro_educativo = buscar_centro_educativo(id_centro_educativo);



input_filtrar.addEventListener('keyup', mostrar_datos);
mostrar_datos();

function mostrar_datos() {
  
  let filtro = input_filtrar.value;

  const tabla = document.querySelector('#tbl_solicitudes tbody');
  
  let id_centro_educativo = localStorage.getItem('id_usuario');
  tabla.innerHTML = '';


  for (let i = 0; i < lista_solicitudes.length; i++) {
    let padre_familia = buscar_padre_familia(lista_solicitudes[i]['id_padre_familia']);

    if (lista_solicitudes[i]['id_centro_educativo'].includes(id_centro_educativo)) {
      if (padre_familia['primer_nombre'].toLowerCase().includes(filtro.toLowerCase())) {

        let fila = tabla.insertRow();

        let celda_nombre = fila.insertCell();
        let celda_telefono = fila.insertCell();
        let celda_correo = fila.insertCell();
        let celda_accion = fila.insertCell();



        celda_nombre.innerHTML = padre_familia['primer_nombre'] + ' ' + padre_familia['primer_apellido'] + ' ' + padre_familia['segundo_apellido'];

        celda_telefono.innerHTML = padre_familia['telefono'];

        celda_correo.innerHTML = padre_familia['correo'];
        let boton_eliminar = document.createElement('a');
        boton_eliminar.href = '#';
        boton_eliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
        boton_eliminar.dataset.id = lista_solicitudes[i]['_id'];

        boton_eliminar.addEventListener('click', confirmar_borrado);

        celda_accion.appendChild(boton_eliminar);

      }
    }


  };
};

function confirmar_borrado() {
  let id = this.dataset.id;
  swal.fire({
    title: 'Seguro que desea eliminar la solicitud?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.value) {
      borrar_solicitud(id, centro_educativo['nombre_comercial']);
      lista_solicitudes = listar_solicitudes();
      mostrar_datos();
      Swal.fire({
        title:'Solicitud eliminada',
        text:'La solicitud fue borrada con éxito',
        type:'success'
      }
        
      )
    }
  })
};






