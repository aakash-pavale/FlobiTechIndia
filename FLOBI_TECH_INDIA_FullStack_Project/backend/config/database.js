const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('flobi_tech', 'your_username', 'your_password', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
