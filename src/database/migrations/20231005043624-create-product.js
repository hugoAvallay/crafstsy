'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      discount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      sectionId: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        //para vincular esta clave clave foranea con el id de la tabla que se vincula es necesario hacer referencia a un objeto
        references : {
          model : {
            tableName: 'Sections'
          }
        }
      },
      brandId: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : {
            tableName: 'Brands'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};