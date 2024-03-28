const Sequelize = require('sequelize');

const sequelize = new Sequelize('tarefas','root','', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}