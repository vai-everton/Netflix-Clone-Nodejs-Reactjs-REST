const Filme = require('../models/Filmes');

module.exports = {
    async store(req, res) {
        const { titulo, descricao, ano, endereco_arquivo } = req.body;

        const filme = await Filme.create({ titulo, descricao, ano, endereco_arquivo });

        return res.json(filme);
    }
};