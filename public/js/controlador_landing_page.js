const btn_iniciar_sesion = document.querySelector('#btn_iniciar_sesion');
const btn_crear_cuenta = document.querySelector('#btn_crear_cuenta');

let tipo_usuario = () =>{
    Swal.fire({
        title: 'Elige tu tipo de usuario',
        html: '<div class="separador"></div>'+
    
          '<button type="button" class="btn_centro_educativo" id="btn_centro_educativo"><div><i class="fas fa-school fa-4x"></i></div>Centro Educativo</button>' +
    
          '<button type="button" class="btn_padre_familia" id="btn_padre_familia"><div><i class="fas fa-user fa-4x"></i></div>Padre de Familia</button>',
    
        showConfirmButton: false,
        showCloseButton: true
      });

    const btn_centro_educativo = document.querySelector('#btn_centro_educativo');
    const btn_padre_familia = document.querySelector('#btn_padre_familia');
    btn_centro_educativo.addEventListener('click', registrar_centro_educativo);
    btn_padre_familia.addEventListener('click', registrar_padre_familia);
};






let registrar_centro_educativo = () =>{
    window.location.href = './registrar_centro_educativo.html';
};

let registrar_padre_familia = () =>{
    window.location.href = './registrar_padre_famila.html';
};

let iniciar_sesion = () =>{
    window.location.href = './Iniciar_sesion2.html';
};

btn_crear_cuenta.addEventListener('click',tipo_usuario);
btn_iniciar_sesion.addEventListener('click',iniciar_sesion);