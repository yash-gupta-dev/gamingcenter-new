'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('admins', [
      {
        firstName: 'Name',
        lastName: 'yashguptahk@gmail.com',
        password_hash: "$2b$10$K/cBOOriIHC6ZZv39EGrQOf8EVeNabQN7rBMJ.sN5oL43cPmp6zBu"
      },
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};
