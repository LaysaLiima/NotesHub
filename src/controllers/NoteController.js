const knex = require('../config/db');
const axios = require('axios');

const cadastrarNota = async (req, res) => {
    const { titulo, conteudo, categoria_id, usuario_id, localizacao } = req.body;

    if (!titulo || !conteudo || !categoria_id || !usuario_id) {
        return res.status(400).json("Todos os campos são obrigatórios.");
    }

    const categoria = await knex('categorias').where('id', categoria_id).first();
    if (!categoria) {
      return res.status(400).json("Categoria não existe.");
    }
  
    try {
        // Fazer a requisição à rota de geolocalização
        const response = await axios.get('http://localhost:3000/geolocalizacao'); 
    
        const { country, region, city } = response.data;
        const localizacao = `${city || 'Não disponível'} - ${region || 'Não disponível'} - ${country || 'Não disponível'}`;
    
        // Inserir a nova nota no banco de dados com a localização
        await knex('notas').insert({ titulo, conteudo, categoria_id, usuario_id, localizacao });
        return res.status(201).json("Nota cadastrada com sucesso");
      } catch (error) {
        console.error('Erro ao cadastrar nota:', error);
        return res.status(500).json("Erro interno do servidor");
      }
    };

const listarNotas = async (req, res) => {
    try {
        const notas = await knex('notas');
        return res.status(200).json(notas);
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

const obterNota = async (req, res) => {
    const { id } = req.params;

    try {
        const nota = await knex('notas').where({ id }).first();
        if (!nota) {
            return res.status(404).json("Nota não encontrada");
        }
        return res.status(200).json(nota);
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

const atualizarNota = async (req, res) => {
    const { id } = req.params;
    const { titulo, conteudo, categoria_id, usuario_id } = req.body;

    try {
        const resultado = await knex('notas').update({ titulo, conteudo, categoria_id, usuario_id }).where({ id });
        if (!resultado) {
            return res.status(404).json("Nota não encontrada");
        }
        return res.status(200).json("Nota atualizada com sucesso");
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

const deletarNota = async (req, res) => {
    const { id } = req.params;

    try {
        const resultado = await knex('notas').delete().where({ id });
        if (!resultado) {
            return res.status(404).json("Nota não encontrada");
        }
        return res.status(200).json("Nota deletada com sucesso");
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

module.exports = {
    cadastrarNota,
    listarNotas,
    obterNota,
    atualizarNota,
    deletarNota
}