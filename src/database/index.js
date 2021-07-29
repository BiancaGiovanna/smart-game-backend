const Sequelize = require('sequelize');

const dbConfig = require("../config/database");

const Games = require('../models/Game');

const connection = new Sequelize(dbConfig);

module.exports = connection;