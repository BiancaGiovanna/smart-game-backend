/** Import do model */
const Game = require("../models/Game");

/* Modulo de controle para lidar com a rota dos games */
module.exports = {
  async index(req, res) {
    /** try catch como tratativa de erro */
    try {
      /** busca por todos os jogos cadastrados */
      const game = await Game.findAll({
        attributes: ["id", "name", "description", "price", "image"],
        include: [
          {
            association: "Stores",
            attributes: ["id", "place", "latitude", "longitude"],
            through: {attributes: []},
          },
          {
            association: "Plataforms",
            attributes: ["id", "name"],
            through: {attributes: []},
          },
        ],
      });
      res.status(200).send(game);
    } catch(error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async find(req, res) {
    /** Requisição do parametro por ID */
    const gameId = req.params.id;
    try {
      /** busca por id jogo cadastrado */
      const game = await Game.findByPk(gameId, {
        attributes: ["id", "name", "description", "price", "image"],
        include: [
          {
            association: "Stores",
            attributes: ["id", "place", "latitude", "longitude"],
            through: {attributes: []},
          },
          {
            association: "Plataforms",
            attributes: ["id", "name"],
            through: {attributes: []},
          },
        ],
      });
      res.status(200).send(game);
    } catch(error) {
      /** Resposta de erro no lado do servidor */
      console.log(error);
      res.status(500).send(error);
    }
  },
};
