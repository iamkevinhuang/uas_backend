'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Administrators', [{
      fullName: 'Kevin Huang',
      username: 'admin',
      password: await bcrypt.hash("admin", 8),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Administrators', null, {});
  }
};
