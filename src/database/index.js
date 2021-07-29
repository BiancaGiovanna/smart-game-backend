const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

const Game = require("../models/Game");
const Store = require("../models/Store");
const Plataform = require("../models/Plataform");

const connection = new Sequelize(dbconfig);

Game.init(connection);
Store.init(connection);
Plataform.init(connection);

Game.associate(connection.models);
Store.associate(connection.models);
Plataform.associate(connection.models);