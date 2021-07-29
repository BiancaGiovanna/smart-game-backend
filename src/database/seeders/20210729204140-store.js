"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stores",
      [
        {
          place: "União",
          latitude: -23.5406758,
          longitude: -46.7691551,
        },

        {
          place: "Iguatemi",
          latitude: -23.5045637,
          longitude: -46.8483622,
        },
        {
          place: "Tamboré",
          latitude: -23.5043583,
          longitude: -46.8343506,
        },

      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stores", null);
  },
};
