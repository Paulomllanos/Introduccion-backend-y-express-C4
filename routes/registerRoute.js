const express = require('express');
const { actualizarUsuario, crearUsuario, obtenerUsuariosRegistrados } = require('../controllers/registerControllers')

const registerRouter = express.Router()



registerRouter.route('/register')
    .get(obtenerUsuariosRegistrados)
    .post(crearUsuario)
    .put(actualizarUsuario)

module.exports = registerRouter
