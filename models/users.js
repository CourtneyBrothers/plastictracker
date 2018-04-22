'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.TEXT,
    password: DataTypes.STRING
  }, {tableName: "users", timestamps: false});
  User.associate= (models) => {
  };

  return User;
};