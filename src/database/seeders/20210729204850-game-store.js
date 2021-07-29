"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "game_store",
      [
        {
          game_id: 1,
          store_id: 1,
        },
        {
          game_id: 1,
          store_id: 2,
        },
        {
          game_id: 2,
          store_id: 1,
        },
        {
          game_id: 2,
          store_id: 2,
        },
        {
          game_id: 2,
          store_id: 3,
        },
        {
          game_id: 3,
          store_id: 1,
        },
        {
          game_id: 3,
          store_id: 2,
        },
        {
          game_id: 4,
          store_id: 2,
        },
        {
          game_id: 4,
          store_id: 3,
        },
        {
          game_id: 5,
          store_id: 1,
        },
        {
          game_id: 5,
          store_id: 2,
        },
        {
          game_id: 5,
          store_id: 3,
        },
        {
          game_id: 6,
          store_id: 2,
        },
        {
          game_id: 6,
          store_id: 3,
        },
        {
          game_id: 7,
          store_id: 1,
        },
        {
          game_id: 7,
          store_id: 2,
        },
        {
          game_id: 8,
          store_id: 1,
        },
        {
          game_id: 8,
          store_id: 2,
        },
        {
          game_id: 8,
          store_id: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("game_store", null);
  },
};
