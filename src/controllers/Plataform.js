const Plataform = require("../models/Plataform");

module.exports = {
  async index(req, res) {
    try {
      const plataform = await Plataform.findAll({
        attributes: ["id", "name"],
      });

      res.status(200).send(plataform);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
