'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Events", // name of Source model
      "ProfileId", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Profiles", // name of Target model
          key: "id", // Key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Events", // name of Source Model
      "ProfileId" // Key we want to remove
      );
  },
};

