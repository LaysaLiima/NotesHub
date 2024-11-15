const knex = require('../config/db');
const bcrypt = require('bcrypt');

const loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await knex('usuarios').where({ email }).first();
    if (!usuario) {
      return res.status(404).json("Email ou senha inválida");
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json("Email ou senha inválida");
    }
    return res.status(200).json("Login bem-sucedido");

  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
}

module.exports = {
  loginUsuario
}