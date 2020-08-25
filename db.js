const Sequelize = require('sequelize');

const sequelize = new Sequelize('saverr', 'postgres', 'Opensesame!2345', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate()
    .then(() => console.log(`${process.env.NAME} is Connected`))
    .catch(err => console.log(err));


collection = sequelize.import('./models/collection');
post = sequelize.import('./models/post');
user = sequelize.import('./models/user');

user.hasMany(collection);
collection.belongsTo(user);

user.hasMany(post);
post.belongsTo(user);

collection.hasMany(post);
post.belongsTo(collection);


module.exports = sequelize;