"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stores",
      [
        {
          place: "Tamboré",
          latitude: -23.5043583,
          longitude: -46.8343506,
        },
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

      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stores", null);
  },
};
