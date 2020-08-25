const sequelize = require("../db");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {

      firstName: {
          type: DataTypes.STRING,
          allowNull: true
      },
      lastName: {
          type: DataTypes.STRING,
          allowNull: true
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      userName: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      }

  }) 

  return User
  
}