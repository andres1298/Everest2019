'use strict';


let registrar_actividades = (pid_centro_educativo, ptitulo, pfecha, pdescripcion,pnombre_institucion) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_actividades",
        method: "POST",
        data: {
            id_centro_educativo: pid_centro_educativo,
            titulo: ptitulo,
            fecha: pfecha,
            descripcion: pdescripcion
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        datatype: "json"
    });

    request.done(function (msg) {

        let detalle = "Actividad registrada";
        let usuario = pnombre_institucion;
        let fecha = new Date();

        registrar_accion(usuario,detalle,fecha);

        swal.fire({
            type: 'success',
            title: 'Actividad enviada correctamente',
            text: 'La actividad se agregó de manera correcta',
            onClose: () => {
                window.location.href = 'panel_centro_educativo_actividades.html';
              } 
        });

    });
    request.fail(function (jqXHR, textStatus) {

    });

};

let listar_actividades = () => {
    let lista_actividades = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_actividades",
        method: "GET",
        data: {
        },
        datatype: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        lista_actividades = res.actividades;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return lista_actividades;
};

//Buscar centro educativo para mostar en el perfil del
function buscar_centro_educativo(pid_centro_educativo) {
    let centro_educativo = [];
    $.ajax({
        url: 'http://localhost:4000/api/buscar_centro_educativo',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        async: false,
        data: {
            id: pid_centro_educativo
        },
        beforeSend: function beforeSend() {

        },
        success: function success(response) {
            centro_educativo = response;

        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });

    return centro_educativo;
};


let buscar_actividades = (id_actividades) => {
    let actividades = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_actividades/" + id_actividades,
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        actividades = res.actividades;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return actividades;

};


let actualizar_actividades = (ptitulo, pfecha, pdescripcion, pid, pnombre_institucion) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/actualizar_actividades',
        method: "POST",
        data: {
            titulo: ptitulo,
            fecha: pfecha,
            descripcion: pdescripcion,
            id: pid
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (res) {

        let detalle = "Actividad actualizada";
        let usuario = pnombre_institucion;
        let fecha = new Date();

        registrar_accion(usuario,detalle,fecha);

        swal.fire({
            type: 'success',
            title: 'Se ha actualizado con éxito',
            text: res.msg,
            onClose: () => {
                window.location.href = 'panel_centro_educativo_actividades.html';
            }
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Proceso no realizado',
            text: res.msg
        });

    });


};

function borrar_actividades(pid,pnombre_institucion){
    $.ajax({
        url: 'http://localhost:4000/api/borrar_actividades',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            id_actividades : pid
        },
        beforeSend: function beforeSend() {
            
        },
        success: function success(response) {

            let detalle = "Actividad eliminada";
            let usuario = pnombre_institucion;
            let fecha = new Date();

            registrar_accion(usuario,detalle,fecha);
            Swal.fire({
                title: 'Se ha eliminado con éxito!',
                text: '',
                type: 'success'
            }
                
            )
        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });
}