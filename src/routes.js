const express = require("express");

const gameController = require("./controllers/Game");
const storeController = require("./controllers/Store");
const plataformController = require("./controllers/Plataform");

const routes = express.Router();

//game
routes.get("/game", gameController.index);
routes.get("/game/:id", gameController.find);

// store
routes.get("/store", storeController.index);
routes.get("/store/:id", storeController.find);

// Plataform
routes.get("/plataform", plataformController.index);

module.exports = routes;
