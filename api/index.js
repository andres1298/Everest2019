'use strict';

/**
 * Exportamos todas las dependencias necesarias para establecer la conexión
 */
const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      morgan =  require('morgan'),
      mongoose = require('mongoose');

/**
 * Se definen las variables necesarias para la conexión con MongoDB
 */
let db = mongoose.connection,
  dburl = 'mongodb://everest:everest@everest-shard-00-00-iywno.mongodb.net:27017,everest-shard-00-01-iywno.mongodb.net:27017,everest-shard-00-02-iywno.mongodb.net:27017/test?ssl=true&replicaSet=Everest-shard-0&authSource=admin&retryWrites=true',
  port = 4000;
/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let server = app.listen(port,_server());

/**
 * Se define la conexión con Mongoose, enviándole como parámetro la url de la base de datos
 */
mongoose.connect(dburl, { useNewUrlParser: true });

/**
 * Si la conexión falla, imprime en consola el error, donde posiblemente el url este causando el error
 */
db.on('error', console.error.bind(console, 'Error de conexión: con la base de datos'));

/**
 * Si la conexión es exitosa nos imprime en la consola que se ha establecido conexión con Mongo
 */
db.once('open', function () {
  console.log('Base de datos conectada correctamente');
});

/**
 * Le indicamos a express que envíe las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Le indicamos a la aplicación que el formato de los datos va a ser JSON
 */
/*Con respecto al contenido de los mensajes
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
/*
Con respecto a los encabezados de los mensajes que sean enviados
*/
app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
const preferencia = require('./componentes/preferencia/preferencia_route');
app.use('/api', preferencia);


// const padre_familia = require('./componentes/padre_familia/padre_familia.route');

// app.use('/api', padre_familia);

const usuario = require('./componentes/usuarios/usuarios.route');
app.use('/api', usuario);

const contrasena = require ('./componentes/contrasena/contrasena_route');
app.use('/api', contrasena);

const etiquetas = require('./componentes/etiquetas/etiqueta.route');
app.use('/api', etiquetas);

const lista_utiles = require('./componentes/lista_utiles/utiles.router');
app.use('/api',lista_utiles);

const articulo = require('./componentes/articulo/articulo.route');
app.use('/api',articulo);
const citas = require('./componentes/citas/citas.route');
app.use('/api', citas);

const actividades = require('./componentes/actividades/actividades.route');
app.use('/api', actividades);

const noticia = require('./componentes/noticias/noticia.route');
app.use('/api', noticia);

const preguntas = require('./componentes/preguntas/preguntas.route');
app.use('/api', preguntas);

const idiomas = require('./componentes/lenguajes/lenguaje.route');
app.use('/api',idiomas);

const solicitudes = require('./componentes/solicitudes/solicitudes.route');
app.use('/api', solicitudes);

const criterios_evaluacion = require('./componentes/criterios_evaluacion/criterios_evaluacion.route');
app.use('/api',criterios_evaluacion);

const rangos_puntuacion = require('./componentes/rangos_puntuacion/rangos_puntuacion.route');
app.use('/api', rangos_puntuacion);

const bitacora = require('./componentes/bitacora/bitacora.route');
app.use('/api', bitacora);

const comentarios = require ('./componentes/comentarios/comentarios.route');
app.use('/api', comentarios);
// Se guarda todo lo que se ha realizado
//Se envie toda la informacion que hayamos creado hacia la app
module.exports = app;

function _server(){
  console.log('Back-end corriendo en el puerto ' + port);
};
