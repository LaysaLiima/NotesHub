const knex = require('../config/db');

// Listar todos os usuários
const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await knex('usuarios');
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

// Obter um usuário específico por ID
const obterUsuario = async (req, res) => {  
    const { id } = req.params;

    try {
        const usuario = await knex('usuarios').where({ id }).first();
        if (!usuario) {
            return res.status(404).json("Usuário não encontrado");
        }
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

// Cadastrar um novo usuário
const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {

        return res.status(400).json("Todos os campos são obrigatórios");
        
        }

    try {
        await knex('usuarios').insert({ nome, email, senha });
        return res.status(201).json("Usuário cadastrado com sucesso");
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

// Atualizar um usuário existente
const atualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    try {
        const resultado = await knex('usuarios').update({ nome, email, senha }).where({ id });
        if (!resultado) {
            return res.status(404).json("Usuário não encontrado");
        }
        return res.status(200).json("Usuário atualizado com sucesso");
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

// Deletar um usuário
const deletarUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        const resultado = await knex('usuarios').delete().where({ id });
        if (!resultado) {
            return res.status(404).json("Usuário não encontrado");
        }
        return res.status(200).json("Usuário deletado com sucesso");
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

module.exports = {
    listarUsuarios,
    obterUsuario,
    cadastrarUsuario,
    atualizarUsuario,
    deletarUsuario
};
