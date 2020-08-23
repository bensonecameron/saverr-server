const Sequelize = require('sequelize');

const sequelize = new Sequelize('saverr', 'postgres', 'Opensesame!2345', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate()
    .then(() => console.log(`${process.env.NAME} is Connected`))
    .catch(err => console.log(err));

module.exports = sequelize;