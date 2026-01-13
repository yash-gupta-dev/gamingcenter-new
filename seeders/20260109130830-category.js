'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [
      {
        title: 'Action'
      },
      {
        title: 'Puzzle'
      },
      {
        title: 'Racing'
      },
      {
        title: 'Simulation'
      },
      {
        title: 'Sports'
      },
      {
        title: 'Strategy'
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
