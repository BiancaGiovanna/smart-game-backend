const Game = require("../models/Game");

module.exports = {
  async index(req, res) {
    try {
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
    const gameId = req.params.id;
    try {
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
      console.log(error);
      res.status(500).send(error);
    }
  },
};
