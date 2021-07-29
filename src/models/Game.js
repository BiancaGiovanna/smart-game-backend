const {Model, DataTypes} = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.DOUBLE,
      image: DataTypes.STRING,
    },
      {
        sequelize,
      }
    )
    static
  }
}