const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => console.log(`${process.env.NAME} is Connected`))
  .catch((err) => console.log(err));

user = sequelize.import("./models/user");
collection = sequelize.import("./models/collection");
post = sequelize.import("./models/post");

user.hasMany(collection);
collection.belongsTo(user);

user.hasMany(post);
post.belongsTo(user);

collection.hasMany(post);
post.belongsTo(collection);

module.exports = sequelize;
