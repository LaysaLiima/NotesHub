const express = require('express');
const router = express.Router();

const NoteController = require('../controllers/NoteController');

router.post('/notes/cadastrar', notes.cadastrarNota);

module.exports = router;