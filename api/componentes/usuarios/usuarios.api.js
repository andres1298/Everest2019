'use strict';
const nodeMailer = require('nodemailer');
const modelo_usuario = require('./usuarios.model');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'everestproyecto99@gmail.com',
        pass: 'CulantroCoyote2019'
    }
});



module.exports.registrar_padre_familia = (req, res) => {
    let modelo_padre_familia = new modelo_usuario(
        {
            primer_nombre: req.body.primer_nombre,
            segundo_nombre: req.body.segundo_nombre,
            primer_apellido: req.body.primer_apellido,
            segundo_apellido: req.body.segundo_apellido,
            identificacion: req.body.identificacion,
            tipo_identificacion: req.body.tipo_identificacion,
            distrito: req.body.distrito,
            canton: req.body.canton,
            provincia: req.body.provincia,
            cantidad_hijos: req.body.cantidad_hijos,
            edad_hijos: req.body.edad_hijos,
            nacionalidad: req.body.nacionalidad,
            telefono: req.body.telefono,
            foto_perfil: req.body.foto_perfil,
            correo: req.body.correo,
            estado: req.body.estado,
            tipo_usuario: req.body.tipo_usuario,
            codigo_verificacion: req.body.codigo_verificacion
        }
    );
    modelo_padre_familia.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar el padre de familia ocurrio el siguiente error ${error}`
                }
            );
        } else {
            let mailOptions = {
                from: 'everestproyecto99@gmail.com',
                to: modelo_padre_familia.correo,
                subject: 'Bienvenido a Gemas',
                html: `<html>
                <head>
                   <meta charset="UTF-8">
                  <link href="https://fonts.googleapis.com/css?family=Quicksand|Raleway|Roboto" rel="stylesheet">
                </head>
                <body>
                  <div class="contenedor_titulo">
                    <h1>Bienvenido a Gemas</h1>
                  </div>
                  <div class="contenedor_cuerpo">
                    <p class="bienvenida">Encuentra el centro educativo ideal para tus hijos</p>
                    <div class="contenedor_descripcion">
                    <p>${modelo_padre_familia.primer_nombre} ${modelo_padre_familia.primer_apellido}, gracias por crear una cuenta con nosotros, en este correo se encuentra un código de verificación que le permitirá crear una contraseña para ingresar a la plataforma. Por favor revise su correo para confirmar que el correo ingresado fue el correcto.</p>
                    <p>Código: ${modelo_padre_familia.codigo_verificacion}</p>
                    </div>
                  </div>
                </body>
                <style>
                  html{
                    background: #f2f2f2;
                  }
                  .contenedor_titulo{
                    width: 80%;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    margin: 0 auto;
                    text-align: center;
                    margin-top: 30px;
                    background: #FAA21A;
                    border: 1px solid #40433E;
                    border-bottom: 0;
                  }
                  
                  .contenedor_titulo h1{
                    font-family: 'Quicksand','sans-serif';
                    font-size: 40px;
                    color: #fff;
                  }
                  
                  .contenedor_cuerpo{
                    width: 80%;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    margin: 0 auto;
                    text-align: center;
                    background: #fff;
                    border: 1px solid #40433E;
                    border-top: 0;
                  }
                  
                  .contenedor_cuerpo .bienvenida{
                    width: 80%;
                    margin: 0 auto;
                    padding-top: 10px;
                    padding-bottom: 20px;
                    text-align: center;
                    font-family: 'Roboto','sans-serif';
                    font-size: 20px;  
                    font-weight: bold;
                  }
              
                  
                  .contenedor_descripcion{
                    font-size 18px;
                     text-align: center;
                  }
                  
                  .contenedor_descripcion p{
                    font-size: 17px;
                    font-family: 'Roboto','sans-serif';
                    width: 85%;
                    margin: 0 auto;
                    padding-bottom: 30px;
                  }
               
                </style>
               </html>`
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Correo enviado ' + info.response);
                }
            })
            res.json(
                {
                    success: true,
                    msg: `Padre de familia registrado correctamente`
                }
            );
        }
    });
}

module.exports.registrar_centro_educativo = (req, res) => {
    let modelo_centro_educativo = new modelo_usuario(
        {
            nombre_comercial: req.body.nombre_comercial,
            cedula_juridica: req.body.cedula_juridica,
            tipo_institucion: req.body.tipo_institucion,
            modalidad: req.body.modalidad,
            tipo_colegio: req.body.tipo_colegio,
            distrito: req.body.distrito,
            canton: req.body.canton,
            provincia: req.body.provincia,
            direccion_exacta: req.body.direccion_exacta,
            ubicacion_mapa_lat: req.body.ubicacion_mapa_lat,
            ubicacion_mapa_lng: req.body.ubicacion_mapa_lng,
            ano_creacion: req.body.ano_creacion,
            referencia_historica: req.body.referencia_historica,
            informacion_general: req.body.informacion_general,
            telefono: req.body.telefono,
            fax: req.body.fax,
            pagina_web: req.body.pagina_web,
            correo: req.body.correo,
            facebook: req.body.facebook,
            twitter: req.body.twitter,
            instagram: req.body.instagram,
            youtube: req.body.youtube,
            logo: req.body.logo,
            matricula: req.body.matricula,
            mensualidad: req.body.mensualidad,
            imagen_portada: req.body.imagen_portada,
            galeria1: req.body.galeria1,
            galeria2: req.body.galeria2,
            galeria3: req.body.galeria3,
            galeria4: req.body.galeria4,
            documento1: req.body.documento1,
            documento2: req.body.documento2,
            documento3: req.body.documento3,
            informacion_religion: req.body.informacion_religion,
            informacion_ensenanza: req.body.informacion_ensenanza,

            primer_nombre_encargado: req.body.primer_nombre,
            segundo_nombre_encargado: req.body.segundo_nombre,
            primer_apellido_encargado: req.body.primer_apellido,
            segundo_apellido_encargado: req.body.segundo_apellido,
            correo_encargado: req.body.correo_encargado,
            departamento_encargado: req.body.departamento,
            telefono_encargado: req.body.telefono_encargado,
            extension_encargado: req.body.extension,
            identificacion_encargado: req.body.identificacion,
            fotografia_encargado: req.body.fotografia_encargado,
            aprobado: req.body.aprobado,
            estado: req.body.estado,
            tipo_usuario: req.body.tipo_usuario,
            codigo_verificacion: req.body.codigo_verificacion,
            fecha_creacion: req.body.fecha_creacion
        }
    );
    modelo_centro_educativo.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar el Centro Educativo ocurrio el siguiente error ${error}`
                }
            );
        } else {
            let mailOptions = {
                from: 'everestproyecto99@gmail.com',
                to: modelo_centro_educativo.correo_encargado,
                subject: 'Bienvenido a Gemas',
                html: `<html>
                <head>
                   <meta charset="UTF-8">
                  <link href="https://fonts.googleapis.com/css?family=Quicksand|Raleway|Roboto" rel="stylesheet">
                </head>
                <body>
                  <div class="contenedor_titulo">
                    <h1>Bienvenido a Gemas</h1>
                  </div>
                  <div class="contenedor_cuerpo">
                    <p class="bienvenida">Encuentra el centro educativo ideal para tus hijos</p>
                    <div class="contenedor_descripcion">
                    <p>${modelo_centro_educativo.primer_nombre_encargado} ${modelo_centro_educativo.primer_apellido_encargado}, gracias por crear una cuenta con nosotros, en este momento, su información está siendo revisada por nuestros encargados. En caso de ser aprobado, pronto recibirá un nuevo correo con un código de verificación.</p>
                    </div>
                  </div>
                </body>
                <style>
                  html{
                    background: #f2f2f2;
                  }
                  .contenedor_titulo{
                    width: 80%;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    margin: 0 auto;
                    text-align: center;
                    margin-top: 30px;
                    background: #FAA21A;
                    border: 1px solid #40433E;
                    border-bottom: 0;
                  }

                  .contenedor_titulo h1{
                    font-family: 'Quicksand','sans-serif';
                    font-size: 40px;
                    color: #fff;
                  }

                  .contenedor_cuerpo{
                    width: 80%;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    margin: 0 auto;
                    text-align: center;
                    background: #fff;
                    border: 1px solid #40433E;
                    border-top: 0;
                  }

                  .contenedor_cuerpo .bienvenida{
                    width: 80%;
                    margin: 0 auto;
                    padding-top: 10px;
                    padding-bottom: 20px;
                    text-align: center;
                    font-family: 'Roboto','sans-serif';
                    font-size: 20px;
                    font-weight: bold;
                  }


                  .contenedor_descripcion{
                    font-size 18px;
                     text-align: center;
                  }

                  .contenedor_descripcion p{
                    font-size: 17px;
                    font-family: 'Roboto','sans-serif';
                    width: 85%;
                    margin: 0 auto;
                    padding-bottom: 30px;
                  }

                </style>
               </html>`
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Correo enviado ' + info.response);
                }
            })
            res.json(
                {
                    success: true,
                    msg: `Centro Educativo registrado correctamente`
                }
            );
        }
    });
}

module.exports.agregar_servicios = (req, res) => {
    modelo_usuario.update(
        { cedula_juridica: req.body.cedula_juridica },
        {
            $push:
            {
                'servicios':
                {
                    servicio: req.body.servicio
                }
            }
        },
        function (error) {
            if (error) {
                res.json({ success: false, msg: `No se pudo agregar el servicio, revise el siguiente error ${error}` });
            }
            else {
                res.json({ success: true, msg: `El servicio fue agregado correctamente` });
            }
        }
    )
};

module.exports.agregar_idioma = (req, res) => {
    modelo_usuario.update(
        { cedula_juridica: req.body.cedula_juridica },
        {
            $push:
            {
                'idiomas':
                {
                    idioma: req.body.idioma
                }
            }
        },
        function (error) {
            if (error) {
                res.json({ success: false, msg: `No se pudo agregar el idioma, revise el siguiente error ${error}` });
            }
            else {
                res.json({ success: true, msg: `El idioma fue agregado correctamente` });
            }
        }
    )
};


module.exports.agregar_preferencia = (req, res) => {
    modelo_usuario.update(
        { identificacion: req.body.identificacion },
        {
            $push:
            {
                'preferencia':
                {
                    preferencia: req.body.nombre
                }
            }
        },
        function (error) {
            if (error) {
                res.json({ success: false, msg: `No se pudo agregar la preferncia, revise el siguiente error ${error}` });
            }
            else {
                res.json({ success: true, msg: `Registro completo` });
            }
        }
    )
};

module.exports.registrar_administrador = (req, res) => {
    let modelo_administrador = new modelo_usuario(
        {
            primer_nombre: req.body.primer_nombre,
            segundo_nombre: req.body.segundo_nombre,
            primer_apellido: req.body.primer_apellido,
            segundo_apellido: req.body.segundo_apellido,
            identificacion: req.body.identificacion,
            telefono: req.body.telefono,
            correo: req.body.correo,
            estado: req.body.estado,
            contrasena: req.body.contrasena,
            tipo_usuario: req.body.tipo_usuario
        }
    );
    modelo_administrador.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar el administrador ocurrio el siguiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Administrador registrado correctamente`
                }
            );
        }
    });
}

//LISTAR USUARIOS

module.exports.listar_instituciones = (req, res) => {
    modelo_usuario.find({ tipo_usuario: 'centro_educativo' }).sort({ nombre_comercial: 1 }).then(
        function (instituciones) {
            if (instituciones.length > 0) {
                res.json(
                    {
                        success: true,
                        instituciones: instituciones
                    }
                )
            }
            else {
                res.json(
                    {
                        success: false,
                        instituciones: `No se encontraron centros educativos`
                    }
                )
            }
        }
    )
};

module.exports.listar_instituciones_por_fecha = (req, res) => {
    modelo_usuario.find({ tipo_usuario: 'centro_educativo' }).sort({ fecha_creacion: 1}).then(
        function (instituciones) {
            if (instituciones.length > 0) {
                res.json(
                    {
                        success: true,
                        instituciones: instituciones
                    }
                )
            }
            else {
                res.json(
                    {
                        success: false,
                        instituciones: `No se encontraron centros educativos`
                    }
                )
            }
        }
    )
};
module.exports.listar_padre_familia = (req, res) => {
    modelo_usuario.find({ tipo_usuario: 'padre_familia' }).then(
        function (padre_familia) {
            if (padre_familia.length > 0) {
                res.json(
                    {
                        success: true,
                        padre_familia: padre_familia
                    }
                )
            }
            else {
                res.json(
                    {
                        success: false,
                        padre_familia: `No se encontraron padres de familia`
                    }
                )
            }
        }
    )
};



//BUSCAR USUARIOS

module.exports.buscar_centro_educativo = function (req, res) {
    modelo_usuario.findOne({ _id: req.body.id }).then(
        function (centro_educativo) {
            if (centro_educativo) {
                res.send(centro_educativo);
            } else {
                res.send('No se encontró el Centro Educativo');
            }

        }
    )
};

module.exports.agregar_favorito = (req, res) => {
    modelo_usuario.update(
        { _id: req.body.id_usuario },
        {
            $push:
            {
                'favoritos':
                {
                    id_centro_educativo: req.body.id_centro_educativo
                }
            }
        },
        function (error) {
            if (error) {
                res.json({ success: false, msg: `No se pudo agregar el centro educativo a favoritos, revise el siguiente error ${error}` });
            }
            else {
                res.json({ success: true, msg: `El centro educativo fue agregado correctamente a favoritos` });
            }
        }
    )
};

module.exports.eliminar_favorito = function (req, res) {
    modelo_usuario.findByIdAndUpdate(req.body.id_usuario,
        { $pull: { 'favoritos': { id_centro_educativo: req.body.id_centro_educativo } } },
        { safe: true, upsert: true },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar el centro educativo de favoritos' });
            } else {
                res.json({ success: true, msg: 'El centro educativo se eliminó de favoritos con éxito' });
            }
        }
    );
};

module.exports.buscar_padre_familia = function (req, res) {
    modelo_usuario.findOne({ _id: req.body.id }).then(
        function (padre_familia) {
            if (padre_familia) {
                res.send(padre_familia);
            } else {
                res.send('No se encontró el Padre Familia');
            }
        }
    )
};

//Funcion de busqueda que permite encontrar los centros educativos favoritos de un padre de familia
module.exports.buscar_favoritos_padre_familia = function (req, res) {
    modelo_usuario.findOne({ _id: req.body.id_padre_familia }).then(
        function (padre_familia) {
            if (padre_familia) {
                res.send(padre_familia.favoritos);
            } else {
                res.send('No se encontró el Padre Familia');
            }
        }
    )
};

/*Inicio de Sesión*/
module.exports.validar = function (req, res) {
    modelo_usuario.findOne({ correo: req.body.correo }).then(
        function (usuario) {
            if (usuario) {
                if (usuario.contrasena == req.body.contrasena && usuario.estado == true) {
                    res.json(
                        {
                            success: true,
                            usuario: usuario,
                            correo: usuario.correo,
                            id: usuario._id,
                            tipo_usuario: usuario.tipo_usuario
                        }
                    );
                } else {
                    res.json({
                        success: false
                    })
                }
            } else {
                res.json(
                    {
                        success: false,
                        msg: 'El usuario no existe'
                    }
                );
            }
        }
    )
};

module.exports.buscar_por_id = function (req, res) {
    modelo_usuario.find({ _id: req.body.id_padre_familia }).then(
        function (padre_familia) {
            if (padre_familia) {
                res.json({ success: true, padre_familia: padre_familia });
            } else {
                res.json({ success: false, padre_familia: padre_familia });
            }
        }
    )
};

//habilitar y deshabilitar
module.exports.deshabilitar = function (req, res) {
    modelo_usuario.findByIdAndUpdate(req.body.id, { $set: { estado: false } },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo deshabilitar el usuario' });
            } else {
                res.json({ success: true, msg: 'Usuario deshabilitado' });
            }
        }
    )
};

module.exports.habilitar = function (req, res) {
    modelo_usuario.findByIdAndUpdate(req.body.id, { $set: { estado: true } },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo habilitar el usuario' });
            } else {
                res.json({ success: true, msg: 'El usuario se habilito corectamente' });
            }
        }
    )
};

module.exports.buscar_id = (req, res) => {
    modelo_usuario.find({ _id: req.body.id_centro_educativo }).then(
        function (centro_educativo) {
            if (centro_educativo) {
                res.json(
                    {
                        success: true,
                        centro_educativo: centro_educativo
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        centro_educativo: 'No se encontraron centro educativos'
                    }
                )
            }
        }
    )
};
module.exports.eliminar = (req, res) => {
    modelo_usuario.findByIdAndDelete(req.body.id_centro_educativo,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar el centro educativo' });
            } else {
                res.json({ success: true, msg: 'El centro educativo se elimino con éxito' });
            }
        }
    )
};

module.exports.eliminar_padre_familia = (req, res) => {
    modelo_usuario.findByIdAndDelete(req.body.id_padre_familia,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar el padre de familia' });
            } else {
                res.json({ success: true, msg: 'El padre de familia se eliminó con éxito' });
            }
        }
    )
};

module.exports.actualizar_centro_educativo = (req, res) => {
    modelo_usuario.findByIdAndUpdate(req.body.id_centro_educativo, { $set: req.body },
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar el centro educativo`
                    }
                );
            } else {
                res.json(
                    {
                        succes: true,
                        msg: `Se actualizó correctamente el centro educativo`
                    }
                );

            }
        }
    );
}
module.exports.eliminar_idioma = function (req, res) {
    modelo_usuario.findByIdAndUpdate(req.body.id_centro_educativo,
        { $pull: { 'idiomas': { idioma: req.body.idioma } } },
        { safe: true, upsert: true },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar el idioma' });
            } else {
                res.json({ success: true, msg: 'El idioma se eliminó con éxito' });
            }
        }
    );
};

module.exports.eliminar_servicio = function (req, res) {
    modelo_usuario.findByIdAndUpdate(req.body.id_centro_educativo,
        { $pull: { 'servicios': { idioma: req.body.servicio } } },
        { safe: true, upsert: true },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar el servicio' });
            } else {
                res.json({ success: true, msg: 'El servicio se eliminó con éxito' });
            }
        }
    );
};

module.exports.aprobar_centro_educativo = function (req, res) {
    modelo_usuario.findByIdAndUpdate(req.body.id_centro_educativo, { $set: { aprobado: true } },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo aprobar el centro educativo' });
            } else {
                let mailOptions = {
                    from: 'everestproyecto99@gmail.com',
                    to: req.body.correo_encargado,
                    subject: 'Bienvenido a Gemas',
                    html: `<html>
                    <head>
                       <meta charset="UTF-8">
                      <link href="https://fonts.googleapis.com/css?family=Quicksand|Raleway|Roboto" rel="stylesheet">
                    </head>
                    <body>
                      <div class="contenedor_titulo">
                        <h1>Bienvenido a Gemas</h1>
                      </div>
                      <div class="contenedor_cuerpo">
                        <p class="bienvenida">Encuentra el centro educativo ideal para tus hijos</p>
                        <p> El centro educativo ha sido aprobado con exitó</p>
                        <div class="contenedor_descripcion">
                        <p>Codigo: ${req.body.codigo_verificacion}.</p>
                        </div>
                      </div>
                    </body>
                    <style>
                      html{
                        background: #f2f2f2;
                      }
                      .contenedor_titulo{
                        width: 80%;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        margin: 0 auto;
                        text-align: center;
                        margin-top: 30px;
                        background: #FAA21A;
                        border: 1px solid #40433E;
                        border-bottom: 0;
                      }
                      
                      .contenedor_titulo h1{
                        font-family: 'Quicksand','sans-serif';
                        font-size: 40px;
                        color: #fff;
                      }
                      
                      .contenedor_cuerpo{
                        width: 80%;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        margin: 0 auto;
                        text-align: center;
                        background: #fff;
                        border: 1px solid #40433E;
                        border-top: 0;
                      }
                      
                      .contenedor_cuerpo .bienvenida{
                        width: 80%;
                        margin: 0 auto;
                        padding-top: 10px;
                        padding-bottom: 20px;
                        text-align: center;
                        font-family: 'Roboto','sans-serif';
                        font-size: 20px;  
                        font-weight: bold;
                      }
                  
                      
                      .contenedor_descripcion{
                        font-size 18px;
                         text-align: center;
                      }
                      
                      .contenedor_descripcion p{
                        font-size: 17px;
                        font-family: 'Roboto','sans-serif';
                        width: 85%;
                        margin: 0 auto;
                        padding-bottom: 30px;
                      }
                   
                    </style>
                   </html>`
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log('Correo enviado ' + info.response);
                    }
                })
                res.json({ success: true, msg: 'El centro educativo se aprobó corectamente' });
            }
        }
    )
};

module.exports.listar_instituciones_top_mep = (req, res) => {
    modelo_usuario.find({ tipo_usuario: 'centro_educativo' }).sort({ evaluacion: -1 }).then(
        function (instituciones) {
            if (instituciones.length > 0) {
                res.json(
                    {
                        success: true,
                        instituciones: instituciones
                    }
                )
            }
            else {
                res.json(
                    {
                        success: false,
                        instituciones: `No se encontraron centros educativos`
                    }
                )
            }
        }
    )
};
module.exports.agregar_visitas = (req, res) => {
    modelo_usuario.update(
        { _id: req.body.id_centro_educativo },
        {
            $push:
            {
                'visitas':
                {
                    fecha: req.body.fecha
                }
            }
        },
        function (error) {
            if (error) {
                res.json({ success: false, msg: `No se pudo agregar la visita, revise el siguiente error ${error}` });
            }
            else {
                res.json({ success: true, msg: `Visita agregada correctamente` });
            }
        }
    )
};

module.exports.buscar_por_id = function (req, res) {
    modelo_usuario.find({ _id: req.body.id_padre_familia }).then(
        function (padre_familia) {
            if (padre_familia) {
                res.json({ success: true, padre_familia: padre_familia });
            } else {
                res.json({ success: false, padre_familia: padre_familia });
            }
        }

    );

};

module.exports.actualizar = function (req, res) {

    modelo_usuario.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: `No se ha podido actualizar su perfil ${error}` });
            } else {
                res.json({ success: true, msg: '' });
            }
        }
    );
};

module.exports.listar_instituciones_por_evaluacion = (req, res) => {
    modelo_usuario.find({ tipo_usuario: 'centro_educativo' }).sort({ evaluacion: -1 }).then(
        function (instituciones) {
            if (instituciones.length > 0) {
                res.json(
                    {
                        success: true,
                        instituciones: instituciones
                    }
                )
            }
            else {
                res.json(
                    {
                        success: false,
                        instituciones: `No se encontraron centros educativos`
                    }
                )
            }
        }
    )
};

module.exports.agregar_contrasena = function (req, res) {
    modelo_usuario.findOne({ correo: req.body.correo }).then(
        function (usuario) {
            if (usuario) {
                if (usuario.codigo_verificacion == req.body.codigo_verificacion) {
                    modelo_usuario.update({ correo: req.body.correo }, { $set: { contrasena: req.body.contrasena, estado: true } },
                        function (error) {
                            if (error) {
                                res.json({ success: false, msg: `Revise el error ${error}` });
                            } else {
                                res.json({ success: true, msg: 'Su perfil se ha actualizado con éxito', nombre: usuario.primer_nombre, apellido: usuario.primer_apellido });
                            }
                        }
                    );
                } else {
                    res.json({
                        success: false
                    })
                }
            } else {
                res.json(
                    {
                        success: false,
                        msg: 'El usuario no existe'
                    }
                );
            }
        }
    )
};

module.exports.asignar_etiquetas = function(req,res){
    modelo_usuario.update(
      {_id:req.body._id},
      {
        $push:
        {
          'etiquetas':
          {
            accion : req.body.accion,
            descripcion : req.body.descripcion
          }
        }
      },
      function(error){
        if(error){
          res.json({success:false, msg:'No se pudo agregar la etiqueta'});
        }else{
          res.json({success:true, msg:'Etiqueta asignada con éxito'});
        }
      }
    )


};

module.exports.remover_etiquetas = function (req, res){
  modelo_usuario.findByIdAndUpdate(req.body.id_ce,
    { $pull:{'etiquetas' :{_id: req.body.id_etiqueta}}},
    {safe:true, upsert:true},
    function(error){
      if(error){
        res.json({success:false, msg: 'no se pudo bla bla'})
      }else{
        res.json({success:true, msg: 'Etiqueta removida con éxito'})
      }
    }
  );
};

module.exports.deshabilitar_ce = function(req,res){
  modelo_usuario.findByIdAndUpdate(req.body.id_ce, {$set:{estado:false}},
    function(error){
      if(error){
        res.json({success:false, msg:'No se pudo deshabilitar el usuario'});
      }else{
        res.json({success: true, msg: 'Centro educativo deshabilitado'});
      }
    }
  )
};

module.exports.habilitar_ce = function(req, res){
  modelo_usuario.findByIdAndUpdate(req.body.id, {$set: {estado:true}},
    function(error){
      if(error){
        res.json({success:false, msg:' No se pudo habilitar nuevamente al usuario'});
      }else{
        res.json({success:true, msg: 'Usuario habilitado con éxito'});
      }
    });
};




