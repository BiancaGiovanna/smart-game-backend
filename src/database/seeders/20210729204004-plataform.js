"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "plataforms",
      [
        {
          name: "PS4",
        },
        {
          name: "PS2",
        },
        {
          name: "PS3",
        },
        {
          name: "PC",
        },
        {
          name: "XBox",
        },
        {
          name: "XBoxOne",
        },
        {
          name: "Switch",
        },
        {
          name: "Wiiu",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("plataforms", null);
  },
};
