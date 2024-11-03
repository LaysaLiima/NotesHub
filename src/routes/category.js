const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/CategoryController');

router.get('/categorias', CategoryController.listarCategorias);
router.get('/categorias/:id', CategoryController.obterCategoria);
router.post('/categorias', CategoryController.cadastrarCategoria);
router.put('/categorias/:id', CategoryController.atualizarCategoria);
router.delete('/categorias/:id', CategoryController.deletarCategoria);

module.exports = router;