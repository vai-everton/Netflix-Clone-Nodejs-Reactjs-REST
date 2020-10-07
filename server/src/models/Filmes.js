const { Model, DataTypes, Sequelize } = require('sequelize');


class Filme extends Model {
    static init(sequelize) {
        super.init({
            titulo: DataTypes.STRING,
            descricao: DataTypes.STRING,
            ano: DataTypes.INTEGER,
            endereco_arquivo: DataTypes.STRING,
        }, {  
            sequelize
            }
        )
        
    }
}

module.exports = Filme;