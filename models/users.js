'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.TEXT,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {tableName: "users", timestamps: false});
  User.associate= (models) => {
    User.belongsToMany(models.Saved_Plastic_Type,{
      through:{
        model:"user_saved_plastic",
        unique:false
    },
    constraints:false
    })
    User.belongsToMany(models.Reuse_This_Plastic,{
      through:{
        model:"user_reuse_this_plastic",
        unique:false
      },
      constraints:false
    })
  };

  return User;
};