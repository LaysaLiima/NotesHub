const knex = require('../conexao');
const axios = require('axios');

const cadastrarNota = async (req, res) => {
    const { titulo, conteudo, categoria_id, usuario_id, localizacao } = req.body;

    if (!titulo || !conteudo || !categoria_id || !usuario_id) {
        return res.status(400).json("Todos os campos são obrigatórios.");
    }

    try {
        await knex('notas').insert({ titulo, conteudo, categoria_id, usuario_id, localizacao });
        return res.status(201).json("Nota cadastrada com sucesso");
    } catch (error) {
        console.error('Erro ao cadastrar nota:', error);
        return res.status(500).json("Erro interno do servidor");
    }
};

module.exports = {
    cadastrarNota
}