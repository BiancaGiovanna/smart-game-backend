const { Model, DataTypes } = require("sequelize");

class Store extends Model {
  static init(sequelize) {
    super.init(
      {
        place: DataTypes.STRING,
        latitude: DataTypes.DOUBLE,
        longitude: DataTypes.DOUBLE,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.Game, {
      through: "game_store",
      foreignKey: "store_id",
    });
  }
}
module.exports = Store;
