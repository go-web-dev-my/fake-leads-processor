'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Leads', [
      {
        name: "Snoop Dogg",
        email: "snoop@growthops.asia",
        contactNumber: "48964896",
        comments: "he",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: "Howe",
        email: "howe@growthops.asia",
        contactNumber: "48964896",
        comments: "howe",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: "Test",
        email: "Test@growthops.asia",
        contactNumber: "48964896",
        comments: "test",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Leads', null, {})
  }
};
