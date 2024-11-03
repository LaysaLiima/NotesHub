const express = require('express');
const router = express.Router();

const NoteController = require('../controllers/NoteController');

router.post('/notes/cadastrar', notes.cadastrarNota);
router.get('/notes', notes.listarNotas);
router.get('/notes/:id', notes.obterNota);  
router.put('/notes/:id', notes.atualizarNota)
router.delete('/notes/:id', notes.deletarNota)

module.exports = router;