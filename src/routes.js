const express = require('express');
const router = express.Router();

// Controllers
const UserController = require('./controllers/UserController');
const NoteController = require('./controllers/NoteController');
const CategoryController = require('./controllers/CategoryController');
const geolocalizacoes = require('./controllers/Geolocalizacoes');
const AuthController = require('./controllers/AuthController')

// Rotas de Usuários
router.get('/usuarios', UserController.listarUsuarios);
router.get('/usuarios/:id', UserController.obterUsuario);
router.post('/usuarios', UserController.cadastrarUsuario);
router.put('/usuarios/:id', UserController.atualizarUsuario);
router.delete('/usuarios/:id', UserController.deletarUsuario);

// Rotas de Notas
router.post('/notes/cadastrar', NoteController.cadastrarNota);
router.get('/notes', NoteController.listarNotas);
router.get('/notes/:id', NoteController.obterNota);
router.put('/notes/:id', NoteController.atualizarNota);
router.delete('/notes/:id', NoteController.deletarNota);
router.get('/notes/geolocalizacao', geolocalizacoes.obterLocalizacaoPorIp);

// Rotas de Categorias
router.get('/categorias', CategoryController.listarCategorias);
router.get('/categorias/:id', CategoryController.obterCategoria);
router.post('/categorias', CategoryController.cadastrarCategoria);
router.put('/categorias/:id', CategoryController.atualizarCategoria);
router.delete('/categorias/:id', CategoryController.deletarCategoria);

// Rota de Login
router.post('/login', AuthController.loginUsuario);

module.exports = router;