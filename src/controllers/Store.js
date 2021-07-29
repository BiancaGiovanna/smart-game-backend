/** Import do model */
const Store = require("../models/Store");

/* Modulo de controle para lidar com a rota das lojas */
module.exports = {
  async index(req, res) {
    /** try catch como tratativa de erro */
    try {
      /** busca por todas as lojas cadastradas */
      const store = await Store.findAll({
        attributes: ["id", "place", "latitude", "longitude"],
      });
      res.send(store);
    } catch(error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async find(req, res) {
    /** Requisição do parametro por ID */
    const storeId = req.params.id;

    try {
      /** busca por id da loja cadastrada */
      const store = await Store.findByPk(storeId, {
        attributes: ["place", "latitude", "longitude"],
      });

      res.status(200).send(store);
    } catch(error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
