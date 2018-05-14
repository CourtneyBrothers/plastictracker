'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_reuse_this_plastic = sequelize.define('user_reuse_this_plastic', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    singleUse:{
      type: DataTypes.INTEGER, 
      allowNull: false, 
      defaultValue: 0
    }
  }, {timestamps:true});

  return user_reuse_this_plastic;
};