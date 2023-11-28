'use strict';

const origenJSON = require('../../data/origins.json')
const origins = origenJSON.map(origin => {
  return {
    country: origin,
    flag: null,
    createdAt: new Date,
    updatedAt: new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Origins', origins , {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Origins', null, {});

  }
};
