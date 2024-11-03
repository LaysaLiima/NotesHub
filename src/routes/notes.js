const express = require('express');
const router = express.Router();

const NoteController = require('../controllers/NoteController');

router.post('/notes/cadastrar', notes.cadastrarNota);
router.get('/notes', notes.listarNotas);

module.exports = router;