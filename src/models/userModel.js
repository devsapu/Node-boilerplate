const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('sldoc', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'user',
});

module.exports = User;
