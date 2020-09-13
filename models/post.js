const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("post", {
    titleOfPost: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descriptionOfPost: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgOfPost: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tagsOfPost: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impPost: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    postSelect: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return Post;
};
