'use strict';

const mongoose = require('mongoose');

let schema_utiles = new mongoose.Schema(
    {
        articulo : {type:String, required:true},
        cantidad : {type: String, requiered:true},
        descripcion : {type: String, requiered:true}
    }
);
module.exports = mongoose.model('lista_utiles', schema_utiles);