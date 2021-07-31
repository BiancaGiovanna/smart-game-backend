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
          name: "PC",
        },
        {
          name: "XBoxOne",
        },
        {
          name: "Switch",
        },
        {
          name: "PS2",
        },
        {
          name: "PS3",
        },
        {
          name: "XBOX",
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
