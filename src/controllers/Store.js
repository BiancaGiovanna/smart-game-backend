const Store = require("../models/Store");

module.exports = {
  async index(req, res) {
    try {
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
    const storeId = req.params.id;

    try {
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
