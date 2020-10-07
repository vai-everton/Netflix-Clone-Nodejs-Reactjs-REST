const Sequelize = require('sequelize');
const { username } = require('../config/database.js');
const dbConfig = require('../config/database.js');

const User = require('../models/Filmes');

const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;