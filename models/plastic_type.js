'use strict';
module.exports = (sequelize, DataTypes) => {
  var Plastic_Type = sequelize.define('Plastic_Type', {
    label: DataTypes.STRING
  }, {tableName: "plastic_types", timestamps: false, allowNull: true});
  Plastic_Type.associate = function(models) {
    Plastic_Type.belongsToMany(models.User, {
      through: "user_plastic"
    });
  };
  return Plastic_Type;
};
