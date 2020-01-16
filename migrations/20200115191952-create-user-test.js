'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_tests', {
      
      uid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //autoIncrement: true,
        primaryKey: true,
        references: {
          model:'users',
          key: 'uid',
        }
      },
      tid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //autoIncrement: true,
        primaryKey: true,
        references: {
          model:'drive_tests',
          key: 'tid',
        }
      },
      score: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_tests');
  }
};