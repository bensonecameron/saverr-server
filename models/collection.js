const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("collection", {
    nameOfCollection: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descriptionOfCollection: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tagsOfCollection: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impCollection: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    colSelect: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
