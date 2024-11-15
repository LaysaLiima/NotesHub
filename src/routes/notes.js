const express = require('express');
const router = express.Router();

const NoteController = require('../controllers/NoteController');
const geolocalizacoes = require('../controllers/Geolocalizacoes');

router.post('/notes/cadastrar', NoteController.cadastrarNota);
router.get('/notes', NoteController.listarNotas);
router.get('/notes/:id', NoteController.obterNota);  
router.put('/notes/:id', NoteController.atualizarNota)
router.delete('/notes/:id', NoteController.deletarNota)
router.get('/geolocalizacao', geolocalizacoes.obterLocalizacaoPorIp);


module.exports = router;