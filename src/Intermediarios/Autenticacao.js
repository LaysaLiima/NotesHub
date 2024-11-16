require('dotenv').config();
const jwt = require('jsonwebtoken')

const verifcarUsuarioLogado = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json("Não autorizado");
    }
    try {
        const tokenUsuario = jwt.verify(token, process.env.SECRET_KEY);

        next();
    } catch (error) {
        return res.status(401).json("Não autorizado")
    }
}

module.exports = verifcarUsuarioLogado