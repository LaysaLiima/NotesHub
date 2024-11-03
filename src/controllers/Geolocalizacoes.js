const knex = require('../config/db');
const geoip = require('geoip-lite');
const axios = require('axios');

// Função para obter a localização por IP
const obterLocalizacaoPorIp = async (req, res) => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    const ip = response.data.ip;

    if (!ip) {
      return res.status(400).json({ erro: "Não foi possível obter o IP público da máquina" });
    }

    const geo = geoip.lookup(ip);

    if (geo) {
      return res.status(200).json({
        country: geo.country || 'Não disponível',
        region: geo.region || 'Não disponível',
        city: geo.city || 'Não disponível'
      });
    } else {
      return res.status(404).json({ erro: 'Localização não encontrada para o IP fornecido.' });
    }
  } catch (error) {
    return res.status(500).json({ erro: `Erro ao obter dados: ${error.message}` });
  }
};

module.exports = {
    obterLocalizacaoPorIp
};