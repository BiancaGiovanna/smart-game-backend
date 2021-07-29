const {Model, DataTypes} = require("sequelize");

class Plataform extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.Game, {
      through: "game_plataform",
      foreignKey: "plataform_id",
    });
  }
}
module.exports = Plataform;
