'use strict';
const express = require('express');
const router = express.Router();
const api_registrar = require('./preferencia_api');

router.route('/registrar')
    .post(
        function (req, res) {
            api_registrar.registrar(req, res);
        }
    );
router.route('/listar_preferencia')
    .get(
        function (req, res) {
            api_registrar.listar(req, res);
        }
    )

module.exports = router;