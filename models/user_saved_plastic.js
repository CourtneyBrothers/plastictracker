'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_reuse_this_plastic = sequelize.define('user_reuse_this_plastic', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order_creation_date: DataTypes.STRING

  }, {timestamps:false});

  return user_reuse_this_plastic;
};