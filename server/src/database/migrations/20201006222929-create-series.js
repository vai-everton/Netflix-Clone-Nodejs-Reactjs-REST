'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('series', {
      id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
      },

      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      descricao:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      temporadas:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      endereco_arquivo: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('series');
  }
};
