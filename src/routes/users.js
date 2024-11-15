const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.get('/usuarios', UserController.listarUsuarios);
router.get('/usuarios/:id', UserController.obterUsuario);
router.post('/usuarios', UserController.cadastrarUsuario);
router.put('/usuarios/:id', UserController.atualizarUsuario);
router.delete('/usuarios/:id', UserController.deletarUsuario);

module.exports = router;