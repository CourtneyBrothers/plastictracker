'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_saved_plastic = sequelize.define('user_saved_plastic', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    quantity: DataTypes.INTEGER
   

  }, {timestamps:true});

  return user_saved_plastic;
};