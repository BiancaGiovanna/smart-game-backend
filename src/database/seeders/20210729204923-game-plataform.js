"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "game_plataform",
      [
        {
          game_id: 1,
          plataform_id: 1,
        },
        {
          game_id: 1,
          plataform_id: 2,
        },
        {
          game_id: 1,
          plataform_id: 3,
        },
        {
          game_id: 1,
          plataform_id: 4,
        },
        {
          game_id: 2,
          plataform_id: 1,
        },
        {
          game_id: 3,
          plataform_id: 1,
        },
        {
          game_id: 4,
          plataform_id: 1,
        },
        {
          game_id: 5,
          plataform_id: 2,
        },
        {
          game_id: 5,
          plataform_id: 5,
        },
        {
          game_id: 5,
          plataform_id: 6,
        },
        {
          game_id: 5,
          plataform_id: 7,
        },
        {
          game_id: 6,
          plataform_id: 1,
        },
        {
          game_id: 6,
          plataform_id: 6,
        },
        {
          game_id: 7,
          plataform_id: 1,
        },
        {
          game_id: 7,
          plataform_id: 2,
        },
        {
          game_id: 7,
          plataform_id: 3,
        },
        {
          game_id: 8,
          plataform_id: 2,
        },
        {
          game_id: 8,
          plataform_id: 7,
        },
        {
          plataform_id: 8,
          game_id: 8,
        },
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("game_plataform", null);
  },
};
