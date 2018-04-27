'use strict';
module.exports = (sequelize, DataTypes) => {
  var Saved_Plastic_Type = sequelize.define('Saved_Plastic_Type', {
    label: DataTypes.STRING
  }, {tableName: "saved_plastic_types", timestamps: false, allowNull: true});
  Saved_Plastic_Type.associate = function(models) {
    Saved_Plastic_Type.belongsToMany(models.User, {
      through: { 
        model: "user_saved_plastic",
        unique: false
    },
      constraints:false
    });
  };
  return Saved_Plastic_Type;
};
