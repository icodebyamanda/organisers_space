'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Keywords", // name of Source model
      "EventId", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Events", // name of Target model
          key: "id", // Key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Keywords", // name of Source Model
      "EventId" // Key we want to remove
      );
  },
};

