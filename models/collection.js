const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('collection', {
      nameOfCollection: {
          type: DataTypes.STRING,
          allowNull: false
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
  })
  return Collection;
}