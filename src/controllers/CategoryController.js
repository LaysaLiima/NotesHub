const knex = require('../config/db');

// Listar todas as categorias
const listarCategorias = async (req, res) => {
    try {
        const categorias = await knex('categorias');
        return res.status(200).json(categorias);
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

// Obter uma categoria específica por ID
const obterCategoria = async (req, res) => {  
    const { id } = req.params;

    try {
        const categoria = await knex('categorias').where({ id }).first();9
        if (!categoria) {
            return res.status(404).json("Categoria não encontrada");
        }
        return res.status(200).json(categoria);
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

// Cadastrar uma nova categoria
const cadastrarCategoria = async (req, res) => {
    const { nome } = req.body;
    try {
        await knex('categorias').insert({ nome });
        return res.status(201).json("Categoria cadastrada com sucesso");
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

// Atualizar uma categoria existente
const atualizarCategoria = async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    try {
        const resultado = await knex('categorias').update({ nome }).where({ id });
        if (!resultado) {
            return res.status(404).json("Categoria não encontrada");
        }
        return res.status(200).json("Categoria atualizada com sucesso");
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

// Deletar uma categoria
const deletarCategoria = async (req, res) => {
    const { id } = req.params;

    try {
        const resultado = await knex('categorias').delete().where({ id });
        if (!resultado) {
            return res.status(404).json("Categoria não encontrada");
        }
        return res.status(200).json("Categoria deletada com sucesso");
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

module.exports = {
    listarCategorias,
    obterCategoria,
    cadastrarCategoria,
    atualizarCategoria,
    deletarCategoria
};