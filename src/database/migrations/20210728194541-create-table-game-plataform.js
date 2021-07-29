"use strict";
/** QueryInterface para relacionamento de Jogo Plataforma */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("game_plataform", {
      plataform_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "plataforms",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      game_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "games",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("game_plataform");
  },
};
