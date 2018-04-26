'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_reuse_this_plastic = sequelize.define('user_reuse_this_plastic', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    quantity: DataTypes.INTEGER

  }, {timestamps:true});

  return user_reuse_this_plastic;
};