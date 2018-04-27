'use strict';
module.exports = (sequelize, DataTypes) => {
  var Reuse_This_Plastic = sequelize.define('Reuse_This_Plastic', {
    label: DataTypes.STRING
  }, {tableName: "reuse_this_plastic_type", timestamps: false, allowNull: true});
  Reuse_This_Plastic.associate = function(models) {
    Reuse_This_Plastic.belongsToMany(models.User, {
      through: { 
        model: "user_reuse_this_plastic",
        unique: false
    },
      constraints:false
    });
  };
  return Reuse_This_Plastic;
};
