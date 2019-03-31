'use strict'

const input_primer_nombre = document.querySelector('#txt_primer_nombre');
const input_segundo_nombre = document.querySelector('#txt_segundo_nombre');
const input_primer_apellido = document.querySelector('#txt_primer_apellido');
const input_segundo_apellido = document.querySelector('#txt_segundo_apellido');
const input_correo = document.querySelector('#email_correo');
const input_telefono = document.querySelector('#txt_telefono');
const input_cantidad_hijos = document.querySelector('#txt_cant_hijos');
const input_edad_hijos = document.querySelector('#txt_edad_hijos');
const select_nacionalidad = document.querySelector('#select_nacionalidad');
const input_identificacion = document.querySelector('#txt_identificacion');
const select_tipo_identificacion = document.querySelector('#select_tipo_identificacion');
const input_foto_padre_familia = document.querySelector('#url_foto_perfil');
const  input_contrasena = document.querySelector('txt_contrasena');
const select_provincia = document.querySelector('#txt_provincia');
const select_canton = document.querySelector('#txt_canton');
const select_distrito = document.querySelector('#txt_distrito');
const boton_enviar = document.querySelector('#btn_enviar');
const boton_subir_foto = document.querySelector('#btn_subir_foto');



let validar =() =>{
  let error=false;
  if(input_primer_nombre.value == ''){
    error = true;
    input_primer_nombre.classList.add('error_input');
  }else{
    input_primer_nombre.classList.remove ('error_input');
  }
  if(input_primer_apellido.value == ''){
    error = true;
    input_primer_apellido.classList.add('error_input');
  }else{
    input_primer_apellido.classList.remove('error_input');
  }
  if(input_correo.value == ''){
    error = true;
    input_correo.classList.add('error_input');
  }else{
    input_correo.classList.remove('error_input');
  }
  if(input_cantidad_hijos.value == ''){
    error = true;
    input_cantidad_hijos.classList.add('error_input');
  }else{
    input_cantidad_hijos.classList.remove('error_input');
  }
  if(input_edad_hijos.value == ''){
    error = true;
    input_edad_hijos.classList.add('error_input');
  }else{
    input_edad_hijos.classList.remove('error_input');
  }
  if(select_nacionalidad.value == ''){
    error = true;
    select_nacionalidad.classList.add('error_input');
  }else{
    select_nacionalidad.classList.remove('error_input');
  }
  if(input_identificacion.value == ''){
    error = true;
    input_identificacion.classList.add('error_input');
  }else{
    input_identificacion.classList.remove('error_input');
  }
  if(select_tipo_identificacion.value == ''){
    error = true;
    select_tipo_identificacion.classList.add('error_input');
  }else{
    select_tipo_identificacion.classList.remove('error_input');
  }
  if(input_provincia.value == ''){
    error = true;
    input_provincia.classList.add('error_select');
  }else{
    input_provincia.classList.remove('error_select');
  }
  if(input_canton.value == ''){
    error = true;
    input_canton.classList.add('error_datalist');
  }else{
    input_canton.classList.remove('error_datalist');
  }
  if(input_distrito.value == ''){
    error = true;
    input_distrito.classList.add('error_datalist');
  }else{
    input_distrito.classList.remove('error_datalist');
  }
  return error;
}; 

let obtener_datos = () =>{
  if(validar() == false){
    let primer_nombre = input_primer_nombre.value;
    let segundo_nombre = input_segundo_nombre.value;
    let primer_apellido = input_primer_apellido.value;
    let segundo_apellido = input_segundo_apellido.value;
    let correo = input_correo.value;
    let telefono = input_telefono.value;
    let cantidad_hijos = input_cantidad_hijos.value;
    let edad_hijos = input_edad_hijos.value;
    let nacionalidad = select_nacionalidad.value;
    let identificacion = input_identificacion.value;
    let tipo_identificacion = select_tipo_identificacion.value;
    let foto = input_foto_padre_familia.value;
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let distrito = input_distrito.value;
    let estado = true;
    let tipo_usuario = 'padre_familia';

    registrar_usuario(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, telefono,  cantidad_hijos, edad_hijos, nacionalidad, identificacion, tipo_identificacion, foto, provincia, canton, distrito, estado, tipo_usuario);
  
  }else{
    swal.fire({
      type: 'warning',
      title: 'El usuario no se registro',
      text: 'Por favor verifique los campos nuevamente'
    });
  }

};

let llenar_provincias = () =>{
    
  for(let i = 0; i < provincias.length; i++){
      let nuevaOpcion = new Option(provincias[i]['nombre']);
      nuevaOpcion.value = provincias[i]['idProvincia'];
      select_provincia.appendChild(nuevaOpcion);
  }
};

let llenar_cantones = () =>{
  let provincia = select_provincia.value;
  select_canton.innerHTML = '';
  select_distrito.innerHTML = '<option value="">Distrito</option>';

  for(let i = 0; i < cantones.length; i++){
      if(provincia == cantones[i]['Provincia_idProvincia']){
          let nuevaOpcion = new Option(cantones[i]['nombre']);
          nuevaOpcion.value = cantones[i]['idCanton'];
          select_canton.appendChild(nuevaOpcion);
      }  
  }
};

let llenar_distritos = () =>{
  let canton = select_canton.value;
  select_distrito.innerHTML = '';
  
  for(let i = 0; i < distritos.length; i++){
      if(canton == distritos[i]['Canton_idCanton']){
          let nuevaOpcion = new Option(distritos[i]['nombre']);
          nuevaOpcion.value = distritos[i]['idDistrito'];
          select_distrito.appendChild(nuevaOpcion);
      }  
  }
};

let buscar_provincia = () =>{
  
  for(let i = 0; i < provincias.length; i++){
      if(select_provincia.value == provincias[i]['idProvincia']){
          var nombre_provincia = provincias[i]['nombre'];
          console.log(nombre_provincia);
      }
  }
  return nombre_provincia;
};


let buscar_canton = () =>{
  
  for(let i = 0; i < cantones.length; i++){
      if(select_canton.value == cantones[i]['idCanton']){
          var nombre_canton = cantones[i]['nombre'];
          console.log(nombre_canton);
      }
  }
  return nombre_canton;
};

let buscar_distrito = () =>{
  
  for(let i = 0; i < distritos.length; i++){
      if(select_distrito.value == distritos[i]['idDistrito']){
          var nombre_distrito = distritos[i]['nombre'];
          console.log(nombre_distrito);
      }
  }
  return nombre_distrito;
};

llenar_provincias();
select_provincia.addEventListener('change', llenar_cantones);
select_canton.addEventListener('change', llenar_distritos);
boton_enviar.addEventListener('click',obtener_datos);
