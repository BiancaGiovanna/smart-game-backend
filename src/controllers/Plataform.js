/** Import do model */
const Plataform = require("../models/Plataform");

/* Modulo de controle para lidar com a rota das Plataformas (PS4, PC etc....) */

module.exports = {
  async index(req, res) {
    /** try catch como tratativa de erro */
    try {
      /** busca por todas as plataformas cadastrados */
      const plataform = await Plataform.findAll({
        attributes: ["id", "name"],
      });

      res.status(200).send(plataform);
    } catch(error) {
      /** Resposta de erro no lado do servidor */
      console.log(error);
      res.status(500).send(error);
    }
  },
};
