const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

rotas.get('/usuarios', UserController.listarUsuarios);
rotas.get('/usuarios/:id', UserController.obterUsuario);
rotas.post('/usuarios', UserController.cadastrarUsuario);
rotas.put('/usuarios/:id', UserController.atualizarUsuario);
rotas.delete('/usuarios/:id', UserController.deletarUsuario);

module.exports = router;