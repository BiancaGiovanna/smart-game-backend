const {Model, DataTypes} = require("sequelize");

/** Classe de modelo do sequelize */
class Game extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DOUBLE,
        image: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.Store, {
      through: "game_store",
      foreignKey: "game_id",
    });
    this.belongsToMany(models.Plataform, {
      through: "game_plataform",
      foreignKey: "plataform_id",
    });
  }
}
module.exports = Game;
